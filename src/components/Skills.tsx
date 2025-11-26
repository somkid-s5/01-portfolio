import React from "react";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-32 relative overflow-hidden bg-[#050505]"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-2">
                        TECHNICAL <span className="text-emerald-500">ARSENAL</span>
                    </h2>
                    <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-panel p-1 rounded-xl bg-gray-900/50 border border-gray-800">
                        <div className="bg-gray-900 px-4 py-2 rounded-t-lg border-b border-gray-800 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-4 text-xs text-gray-500 font-mono">
                                root@smart-server:~/skills/infrastructure
                            </span>
                        </div>
                        <div className="p-8 space-y-6">
                            {[
                                { name: "Linux (Oracle/Ubuntu/Rocky)", level: "95%" },
                                { name: "VMWare vSphere/vCenter", level: "90%" },
                                { name: "Oracle Database (RMAN/DataPump)", level: "85%" },
                                { name: "Networking (VLAN/Switching)", level: "80%" },
                                { name: "Docker & Kubernetes", level: "70%" },
                            ].map((skill, index) => (
                                <div key={index} className="group">
                                    <div className="flex justify-between mb-1 text-sm font-mono text-gray-300">
                                        <span>{skill.name}</span>
                                        <span className="text-emerald-500">{skill.level}</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-800 rounded-none overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-1000 group-hover:bg-emerald-400"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-panel p-1 rounded-xl bg-gray-900/50 border border-gray-800">
                        <div className="bg-gray-900 px-4 py-2 rounded-t-lg border-b border-gray-800 flex justify-between items-center">
                            <span className="text-xs text-blue-400 font-mono">
                                src/skills/FullStack.tsx
                            </span>
                            <div className="flex gap-1">
                                <span className="w-16 h-2 bg-gray-800 rounded-full"></span>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            {[
                                { name: "HTML / CSS / Tailwind", level: "85%" },
                                { name: "JavaScript / TypeScript", level: "75%" },
                                { name: "React / Next.js", level: "70%" },
                                { name: "Node.js / NestJS", level: "60%" },
                                { name: "SQL / PostgreSQL", level: "65%" },
                            ].map((skill, index) => (
                                <div key={index} className="group">
                                    <div className="flex justify-between mb-1 text-sm font-mono text-gray-300">
                                        <span>{skill.name}</span>
                                        <span className="text-lime-400">{skill.level}</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-800 rounded-none overflow-hidden">
                                        <div
                                            className="h-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)] transition-all duration-1000 group-hover:bg-lime-400"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
