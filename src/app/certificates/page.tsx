import React from "react";
import CertificatesClient from "@/components/CertificatesClient";
import { supabase } from "@/lib/supabase";

export const revalidate = 60;

export default async function CertificatesPage() {
    let certificates = [];

    try {
        const { data, error } = await supabase
            .from('certs')
            .select('id,name,vendor,status,issue_date,badge_image_url,credential_url,credential_id,highlight')
            .order('issue_date', { ascending: false });

        if (error) {
            console.error("Error fetching certificates:", error);
        } else {
            certificates = data || [];
        }
    } catch (err) {
        console.error("Unexpected error fetching certificates:", err);
    }

    return <CertificatesClient initialCertificates={certificates} />;
}
