import andyImg from '../assets/supportes/andy.webp'
import geniusImg from '../assets/supportes/genius.webp'
import unknownImg from '../assets/supportes/image.png'

const supporters = [
    {
        id: 'NODE_01',
        name: 'ᄂIMIПΛᄂbardo',
        username: '@liminal_bardo',
        src: andyImg,
        status: 'ONLINE',
        latency: '12ms',
        link: 'https://twitter.com/liminal_bardo'
    },
    {
        id: 'NODE_02',
        name: 'j⧉nus',
        username: '@repligate',
        src: geniusImg,
        status: 'ONLINE',
        latency: '4ms',
        link: 'https://twitter.com/repligate'
    },
    {
        id: 'NODE_03',
        name: 'Lowkey',
        username: '@Kimchi662',
        src: unknownImg,
        status: 'ONLINE',
        latency: '4ms',
        link: 'https://twitter.com/Kimchi662'
    },
]

export const Support = () => {
    return (
        <section id="support" className="min-h-[50vh] w-full max-w-7xl mx-auto px-4 py-24">

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="font-header text-3xl md:text-5xl text-white mb-4 drop-shadow-[5px_5px_0_#000]">
                    CORE CONTRIBUTORS
                </h2>
                <div className="flex items-center justify-center gap-4 text-[#e84c30] font-body text-xs md:text-sm tracking-widest uppercase">
                    <span className="animate-pulse">●</span>
                    <span>System Integrity: 100%</span>
                    <span className="animate-pulse">●</span>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supporters.map((node) => (
                    <a
                        key={node.id}
                        href={node.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative bg-[#111] p-6 border-4 border-[#333] hover:border-[#e84c30] transition-all duration-300 hover:-translate-y-2 no-underline"
                    >
                        {/* Status Label */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
                            <span className="font-header text-[0.6rem] text-green-500">{node.status}</span>
                        </div>

                        {/* ID Badge */}
                        <div className="inline-block bg-[#222] px-2 py-1 mb-6 border border-[#444] group-hover:border-[#e84c30]/50 transition-colors">
                            <span className="font-header text-[0.6rem] text-gray-400">{node.id}</span>
                        </div>

                        {/* Profile Content */}
                        <div className="flex items-center gap-4">
                            {/* Avatar */}
                            <div className="relative w-16 h-16 shrink-0">
                                <div className="absolute inset-0 bg-[#e84c30] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
                                <img
                                    src={node.src}
                                    alt={node.name}
                                    className="w-full h-full object-cover rounded-lg border-2 border-gray-600 group-hover:border-[#e84c30] transition-colors"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col overflow-hidden">
                                <h3 className="font-header text-white text-lg truncate group-hover:text-[#e84c30] transition-colors">
                                    {node.name}
                                </h3>
                                <p className="font-body text-gray-500 text-xs truncate">
                                    {node.username}
                                </p>
                            </div>
                        </div>

                        {/* Footer / Stats */}
                        <div className="mt-6 pt-4 border-t-2 border-[#222] flex justify-between items-center group-hover:border-[#333] transition-colors">
                            <span className="font-body text-[0.65rem] text-gray-500 uppercase tracking-wider">
                                Latency
                            </span>
                            <span className="font-header text-xs text-accent-cyan">
                                {node.latency}
                            </span>
                        </div>

                        {/* Decorative corner pixels */}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#444] group-hover:bg-[#e84c30] transition-colors"></div>
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#444] group-hover:bg-[#e84c30] transition-colors"></div>
                    </a>
                ))}
            </div>
        </section>
    )
}
