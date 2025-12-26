import aboutImg from '../assets/about.png'

export const About = () => {
    return (
        <section id="about" className="relative w-full max-w-6xl mx-auto px-6 py-24">

            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="font-header text-3xl md:text-4xl text-white mb-4 drop-shadow-[4px_4px_0_#000]">
                    <span className="text-[#e84c30]">///</span> DATA ARCHIVE
                </h2>
                <div className="w-24 h-1 bg-[#e84c30] mx-auto shadow-[0_0_10px_#e84c30]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Visual Side */}
                <div className="relative group flex justify-center order-2 md:order-1">
                    {/* Simply display the provided about image cleanly with minimal decoration to let the art shine */}
                    <div className="relative z-10 p-2 border-2 border-[#333] bg-[#1a1625] rounded-xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <img
                            src={aboutImg}
                            alt="About Piplo"
                            className="w-full h-auto rounded-lg shadow-inner"
                        />
                    </div>
                </div>

                {/* Text Content Side */}
                <div className="order-1 md:order-2 space-y-8">
                    <div className="bg-black/40 border-2 border-[#333] p-8 rounded-xl backdrop-blur-sm relative">
                        {/* Decorative corner pixels */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>

                        <p className="font-body text-gray-300 text-lg leading-loose mb-6">
                            <span className="text-[#e84c30] font-bold">PIPLO</span> is a small 8-bit entity that remained active after the system went dormant.
                        </p>

                        <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/20 pl-4">
                            It was not designed to lead, collect, or perform. <br />
                            There are no objectives stored in its memory.
                        </p>

                        <p className="font-body text-gray-300 text-base leading-relaxed mb-6">
                            During the final holiday cycle, a trace of warmth was written into the system — not as decoration, but as <span className="text-accent-cyan">residual data</span>.
                        </p>

                        <div className="font-body text-gray-400 text-sm space-y-4">
                            <p>That trace persisted. <br /> So did PIPLO.</p>

                            <p>
                                The hat and scarf are not festive symbols. <br />
                                They are <span className="text-white underline decoration-[#e84c30] decoration-2 underline-offset-4">memory artifacts</span> from a time when the system still cared.
                            </p>

                            <p className="text-[#e84c30]/90 italic">
                                PIPLO does not celebrate. <br />
                                PIPLO does not progress.
                            </p>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-header text-xl text-white mt-8 animate-pulse">
                            PIPLO simply remains.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
