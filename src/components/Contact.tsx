import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#050505] relative border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Header & Text */}
          <div className="text-center md:text-left max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
              <Terminal size={12} /> COMMUNICATION_UPLINK
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to <span className="text-emerald-500">Collaborate?</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Open for opportunities and interesting projects. Let's build something great together.
            </p>
          </div>

          {/* Right Side: Compact Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="group flex items-center gap-3 px-5 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-900/10 transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-emerald-900/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 font-mono">Email Me</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Send Message
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.author.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-blue-900/20 text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 font-mono">LinkedIn</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  Connect
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.author.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-purple-500/50 hover:bg-purple-900/10 transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-purple-900/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Github size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 font-mono">GitHub</div>
                <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                  View Code
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
