import art1 from '../assets/art/art1.png'
import art2 from '../assets/art/art2.png'
import art3 from '../assets/art/art3.png'
import art4 from '../assets/art/art4.png'
import art5 from '../assets/art/art5.png'
import art6 from '../assets/art/art6.png'

const artifacts = [
    { img: art1, id: '01', name: 'PIPLO – Holiday Idle' },
    { img: art2, id: '02', name: 'PIPLO – Gift Memory' },
    { img: art3, id: '03', name: 'PIPLO – Silent Tree' },
    { img: art4, id: '04', name: 'PIPLO – Cold Shelter' },
    { img: art5, id: '05', name: 'PIPLO – Snow Routine' },
    { img: art6, id: '06', name: 'PIPLO – Warm Loop' },
]

export const Art = () => {
    return (
        <section id="art" className="w-full max-w-7xl mx-auto px-4 py-24">

            {/* Header */}
            <div className="text-center mb-16 relative">
                <h2 className="font-header text-3xl md:text-5xl text-white mb-4 drop-shadow-[5px_5px_0_#000]">
                    GLITCH GALLERY
                </h2>
                <p className="font-body text-gray-400 text-sm md:text-base uppercase tracking-widest max-w-xl mx-auto">
                    Recovered visual fragments from the deprecated sector
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artifacts.map((item) => (
                    <div key={item.id} className="group relative bg-[#1a1625] p-2 border-4 border-[#333] shadow-[8px_8px_0_#000] hover:border-[#e84c30] hover:shadow-[8px_8px_0_#e84c30] transition-all duration-300 hover:-translate-y-2">

                        {/* Image Wrapper */}
                        <div className="relative overflow-hidden bg-black aspect-square cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover [image-rendering:pixelated] transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="font-header text-white text-xs border border-white px-4 py-2 bg-black/50 backdrop-blur-sm">
                                    VIEW_SOURCE
                                </span>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="mt-4 flex justify-between items-end border-t-2 border-[#333] pt-3 group-hover:border-[#e84c30]/50">
                            <div className="flex flex-col">
                                <span className="font-header text-[0.6rem] text-text-dim uppercase">Artifact</span>
                                <span className="font-body text-white text-sm tracking-wide">{item.name}</span>
                            </div>
                            <span className="font-header text-xl text-[#333] group-hover:text-[#e84c30] transition-colors">
                                {item.id}
                            </span>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-[#555] group-hover:bg-[#e84c30] transition-colors"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-[#555] group-hover:bg-[#e84c30] transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#555] group-hover:bg-[#e84c30] transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#555] group-hover:bg-[#e84c30] transition-colors"></div>
                    </div>
                ))}
            </div>

        </section>
    )
}
