# Codebase Review: 01-portfolio

## 1. Project Structure Analysis

- **Status:** **Needs Improvement**
- **Comment:** The project follows the standard Next.js App Router structure (`src/app`), which is good. However, the `src/components` directory is becoming a "flat" dumping ground.
  - **Issue:** You have `sections` and `ui` folders, but many section-level components (`About.tsx`, `Hero.tsx`, `Projects.tsx`) are still in the root of `components`.
  - **Recommendation:** Move section components into `src/components/sections/` and reusable UI elements into `src/components/ui/`. Group feature-specific components (like `Certificates` and `CertificatesClient`) into a folder like `src/components/features/certificates/`.

## 2. Improvements & Best Practices (What to Change)

### **File:** `src/components/CertificatesClient.tsx` & `src/components/Certificates.tsx`

- **Current Issue:** **Massive Code Duplication.**
  - The logic for `getBorderColor`, `getVendorColor`, `getStatusIcon`, and `getStatusText` is copy-pasted between these two files.
  - The **Modal (Popup)** JSX is fully duplicated in both files.
  - The "Spotlight" effect logic is manually implemented in the client component.
- **Recommendation:**
  1.  **Extract Helpers:** Move the `get...` functions to a utility file (e.g., `src/lib/certificate-utils.ts`).
  2.  **Extract Component:** Create a reusable `CertificateCard.tsx` and `CertificateModal.tsx`.
  3.  **Why:** If you want to change the color of "Oracle" certificates, you currently have to do it in two places. If you want to change the modal animation, you have to do it in two places.

### **File:** `src/components/ProjectsClient.tsx`

- **Current Issue:** Complex filtering logic inside `useMemo`.
- **Recommendation:** While `useMemo` is good, the filtering logic is getting long. Consider extracting it into a custom hook `useProjectFilter` or a pure utility function.
- **Why:** Keeps the component clean and focused on UI.

## 3. Redundancy Check (What to Remove)

- **Duplicate Helper Functions:** `getBorderColor`, `getVendorColor`, `getStatusIcon`, `getStatusText` (found in `Certificates.tsx` and `CertificatesClient.tsx`).
- **Duplicate JSX:** The `<div className="fixed inset-0 z-[9999] ...">` modal block is identical in both files.
- **Hardcoded SVG Icons:** You are importing icons from `lucide-react` (Good!), but you also have some complex inline SVGs in the modal. Consider moving these decorative SVGs to their own components to declutter the main logic.

## 4. Quick Refactor Example

**Scenario:** Extracting the duplicate helper functions for Certificates.

### **Before (Current State in multiple files):**

```tsx
// Found in both Certificates.tsx and CertificatesClient.tsx
const getVendorColor = (vendor: string) => {
  const v = vendor.toLowerCase();
  if (v.includes('oracle')) return 'text-red-500';
  if (v.includes('vmware')) return 'text-blue-500';
  // ... more lines
  return 'text-emerald-500';
};
```

### **After (The "Modern" Way):**

**Step 1: Create `src/lib/certificate-utils.ts`**

```typescript
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const getVendorColor = (vendor: string) => {
  const v = vendor.toLowerCase();
  if (v.includes('oracle')) return 'text-red-500';
  if (v.includes('vmware')) return 'text-blue-500';
  if (v.includes('aws') || v.includes('amazon')) return 'text-orange-500';
  return 'text-emerald-500';
};

export const getStatusConfig = (status: string) => {
  switch (status) {
    case 'passed':
      return {
        text: 'VERIFIED',
        color: 'text-emerald-400',
        icon: CheckCircle,
        shadow: 'drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]',
      };
    case 'in_progress':
      return {
        text: 'IN PROGRESS',
        color: 'text-amber-400',
        icon: Clock,
        shadow: 'drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]',
      };
    default:
      return {
        text: status.toUpperCase(),
        color: 'text-gray-400',
        icon: AlertCircle,
        shadow: '',
      };
  }
};
```

**Step 2: Use in Component**

```tsx
import { getVendorColor, getStatusConfig } from '@/lib/certificate-utils';

// ... inside component
const statusConfig = getStatusConfig(cert.status);
const StatusIcon = statusConfig.icon;

return (
  <div className={getVendorColor(cert.vendor)}>
    <StatusIcon className={statusConfig.shadow} />
    <span className={statusConfig.color}>{statusConfig.text}</span>
  </div>
);
```

**Benefit:** Logic is centralized, components are cleaner, and updates happen in one place.
