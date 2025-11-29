import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Github,
    Globe,
    Terminal,
    Code,
    Cloud,
    Lock,
    ExternalLink,
} from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const getProjectIcon = (project: Project) => {
        const stack = (project.tech_stack || []).map(s => s.toLowerCase());
        if (stack.includes('next.js') || stack.includes('react') || stack.includes('vue')) return <Globe size={12} />;
        if (stack.includes('ansible') || stack.includes('terraform') || stack.includes('kubernetes') || stack.includes('docker')) return <Cloud size={12} />;
        if (stack.includes('python') || stack.includes('shell script') || stack.includes('bash')) return <Terminal size={12} />;
        if (stack.includes('security') || stack.includes('wazuh')) return <Lock size={12} />;
        return <Code size={12} />;
    };

    const getProjectCategoryLabel = (project: Project) => {
        const stack = (project.tech_stack || []).map(s => s.toLowerCase());
        if (stack.includes('next.js') || stack.includes('react')) return "WEB APP";
        if (stack.includes('ansible') || stack.includes('terraform')) return "INFRA";
        if (stack.includes('python')) return "SCRIPT";
        if (stack.includes('security')) return "SEC";
        return "PROJECT";
    };

    const getProjectColor = (project: Project) => {
        const stack = (project.tech_stack || []).map(s => s.toLowerCase());
        if (stack.includes('next.js')) return "emerald";
        if (stack.includes('ansible') || stack.includes('terraform')) return "purple";
        if (stack.includes('python')) return "lime";
        if (stack.includes('security')) return "red";
        return "blue";
    };

    const getProjectStyles = (color: string) => {
        switch (color) {
            case 'emerald':
                return {
                    borderColor: 'hover:border-emerald-500/50',
                    badgeBg: 'bg-emerald-500/20',
                    badgeText: 'text-emerald-400',
                    badgeBorder: 'border-emerald-500/30',
                    glowColor: 'bg-emerald-500/5'
                };
            case 'purple':
                return {
                    borderColor: 'hover:border-purple-500/50',
                    badgeBg: 'bg-purple-500/20',
                    badgeText: 'text-purple-400',
                    badgeBorder: 'border-purple-500/30',
                    glowColor: 'bg-purple-500/5'
                };
            case 'lime':
                return {
                    borderColor: 'hover:border-lime-500/50',
                    badgeBg: 'bg-lime-500/20',
                    badgeText: 'text-lime-400',
                    badgeBorder: 'border-lime-500/30',
                    glowColor: 'bg-lime-500/5'
                };
            case 'red':
                return {
                    borderColor: 'hover:border-red-500/50',
                    badgeBg: 'bg-red-500/20',
                    badgeText: 'text-red-400',
                    badgeBorder: 'border-red-500/30',
                    glowColor: 'bg-red-500/5'
                };
            default: // blue
                return {
                    borderColor: 'hover:border-blue-500/50',
                    badgeBg: 'bg-blue-500/20',
                    badgeText: 'text-blue-400',
                    badgeBorder: 'border-blue-500/30',
                    glowColor: 'bg-blue-500/5'
                };
        }
    };

    const color = getProjectColor(project);
    const categoryLabel = getProjectCategoryLabel(project);
    const icon = getProjectIcon(project);
    const styles = getProjectStyles(color);

    return (
        <Link href={`/projects/${project.slug}`} className="block h-full">
            <div
                className={`group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 ${styles.borderColor} transition-all duration-500 flex flex-col justify-between p-8 min-h-[300px] hover:shadow-2xl hover:shadow-${color}-500/10 hover:-translate-y-1 h-full`}
            >
                {project.cover_image_url && (
                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                        <Image
                            src={project.cover_image_url}
                            alt={project.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                    </div>
                )}

                <div className={`absolute top-0 right-0 p-32 ${styles.glowColor} blur-3xl rounded-full pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded ${styles.badgeBg} flex items-center justify-center ${styles.badgeText} border ${styles.badgeBorder} backdrop-blur-md`}>
                        {icon}
                    </div>
                    <span className={`px-3 py-1 text-[10px] font-bold ${styles.badgeBg} ${styles.badgeText} border ${styles.badgeBorder} rounded flex items-center gap-1 uppercase backdrop-blur-md`}>
                        {categoryLabel}
                    </span>
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors flex-1">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {(project.tech_stack || []).slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2 py-1 text-[10px] font-mono bg-gray-900/80 text-gray-400 border border-gray-800 rounded backdrop-blur-sm group-hover:border-gray-700 transition-colors">
                                {tech}
                            </span>
                        ))}
                        {(project.tech_stack || []).length > 4 && (
                            <span className="px-2 py-1 text-[10px] font-mono bg-gray-900/80 text-gray-400 border border-gray-800 rounded backdrop-blur-sm">
                                +{(project.tech_stack || []).length - 4}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
                        {project.github_url && (
                            <object>
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200 z-20 relative block"
                                >
                                    <Github size={20} />
                                </a>
                            </object>
                        )}
                        {project.demo_url && (
                            <object>
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200 z-20 relative block"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </object>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
