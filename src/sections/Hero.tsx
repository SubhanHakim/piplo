import heroBg from '../assets/bg.webp'
import dexLogo from '../assets/dexscreener.svg'

export const Hero = () => {
    return (
        <header className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden" id="home">

            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Pixel World"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-black/40 to-black/30"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 md:p-6 w-full max-w-4xl">

                <h1 className="font-header text-3xl sm:text-5xl md:text-7xl text-white mb-6 drop-shadow-[4px_4px_0_#000] leading-tight max-sm:text-[2rem]">
                    Welcome to <br />
                    <span className="text-white block mt-2">PIPLO LAND</span>
                </h1>

                <p className="font-body text-gray-200 text-sm sm:text-lg md:text-xl max-w-xs sm:max-w-2xl mb-10 drop-shadow-md leading-relaxed">
                    Explore our retro-style pixel art world and join our community of idle nodes.
                </p>

                {/* Buttons & Socials Container */}
                <div className="flex flex-col items-center gap-8">

                    {/* Main CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-12 sm:px-0">
                        <a href="#about" className="btn-retro no-underline text-center">
                            Explore Void
                        </a>
                        <a href="#support" className="btn-retro bg-[#e0e0e0] text-black no-underline text-center">
                            System Status
                        </a>
                    </div>

                    {/* Social Icons (X & Dexscreener) */}
                    <div className="flex items-center gap-6 mt-2">
                        {/* X (Twitter) */}
                        <a href="https://x.com/i/communities/2004458306002473013" target="_blank" rel="noreferrer" className="group p-3 bg-black/50 rounded-xl border border-white/10 hover:bg-black hover:border-white/50 transition-all hover:-translate-y-1">
                            <svg className="w-6 h-6 fill-white group-hover:fill-[#e84c30] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Dexscreener */}
                        <a href="https://pump.fun/coin/F2fKuG8ZGSDnH33YXiZc1b5SLjAMUgaPhL6KQGQypump" target="_blank" rel="noreferrer" className="group p-3 bg-black/50 rounded-xl border border-white/10 hover:bg-black hover:border-white/50 transition-all hover:-translate-y-1">
                            <img src={dexLogo} alt="Dexscreener" className="w-6 h-6 brightness-200 group-hover:brightness-100 transition-all" />
                        </a>
                    </div>
                </div>

            </div>

        </header>
    )
}
