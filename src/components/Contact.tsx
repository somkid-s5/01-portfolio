import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[#050505] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl font-bold mb-6 text-white">
                    INITIALIZE <span className="text-emerald-500">CONNECTION</span>
                </h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Ready to deploy your next project? Let&apos;s discuss architecture and
                    implementation.
                </p>

                <form className="max-w-lg mx-auto space-y-6 text-left">
                    <div className="relative group">
                        <label
                            htmlFor="name"
                            className="text-xs font-mono text-emerald-500 mb-1 block ml-1"
                        >
                            &lt;Input name=&quot;Name&quot; /&gt;
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                        />
                    </div>
                    <div className="relative group">
                        <label
                            htmlFor="email"
                            className="text-xs font-mono text-emerald-500 mb-1 block ml-1"
                        >
                            &lt;Input name=&quot;Email&quot; /&gt;
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                        />
                    </div>
                    <div className="relative group">
                        <label
                            htmlFor="message"
                            className="text-xs font-mono text-emerald-500 mb-1 block ml-1"
                        >
                            &lt;Textarea name=&quot;Message&quot; /&gt;
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                        ></textarea>
                    </div>
                    <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2">
                        TRANSMIT MESSAGE <Mail size={18} />
                    </button>
                </form>

                <div className="mt-16 flex justify-center gap-8">
                    <a
                        href="#"
                        className="p-4 rounded-full bg-gray-900 border border-gray-800 hover:border-emerald-500 hover:text-emerald-400 transition-all hover:-translate-y-2"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="#"
                        className="p-4 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 hover:text-blue-400 transition-all hover:-translate-y-2"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="#"
                        className="p-4 rounded-full bg-gray-900 border border-gray-800 hover:border-lime-500 hover:text-lime-400 transition-all hover:-translate-y-2"
                        aria-label="Website"
                    >
                        <Globe size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
