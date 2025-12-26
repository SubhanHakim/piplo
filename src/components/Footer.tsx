import dexscreenerLogo from '../assets/dexscreener.svg'

export const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto px-4 pb-12 mt-20 border-t border-[#222]">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">

                {/* Left: Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="font-header text-lg text-white mb-2">PIPLO</span>
                    <p className="font-body text-xs text-gray-500">
                        © 2025 PIPLO. All pixels reserved. <br />
                        System ID: <span className="text-[#e84c30]">V.1.0.0</span>
                    </p>
                </div>

                {/* Right: Socials */}
                <div className="flex items-center gap-6">
                    {/* X (Twitter) */}
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="group p-2 bg-[#111] border-2 border-[#333] hover:border-[#e84c30] hover:bg-[#1a1625] transition-all hover:-translate-y-1 block"
                        aria-label="Twitter"
                    >
                        <svg className="w-5 h-5 fill-gray-400 group-hover:fill-[#e84c30] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* Dexscreener */}
                    <a
                        href="https://dexscreener.com"
                        target="_blank"
                        rel="noreferrer"
                        className="group p-2 bg-[#111] border-2 border-[#333] hover:border-[#e84c30] hover:bg-[#1a1625] transition-all hover:-translate-y-1 block"
                        aria-label="Dexscreener"
                    >
                        <img
                            src={dexscreenerLogo}
                            alt="Dexscreener"
                            className="w-5 h-5 grayscale group-hover:grayscale-0 brightness-150 group-hover:brightness-100 transition-all"
                        />
                    </a>
                </div>
            </div>

            {/* Bottom Bar Pixel Decoration */}
            <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#333] to-transparent mt-4 opacity-50"></div>
        </footer>
    )
}
