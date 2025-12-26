type SystemStatusProps = {
    activeNodes: number
}

export const SystemStatus = ({ activeNodes }: SystemStatusProps) => {
    return (
        <section id="about" className="max-w-4xl mx-auto px-4 mb-20">
            <div className="border-t border-gray-800 pt-10">
                <h2 className="font-header text-2xl text-center mb-10 text-[#555]">SYSTEM STATUS</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-4 border border-gray-800 rounded-lg">
                        <div className="text-gray-500 text-xs mb-2 uppercase">Status</div>
                        <div className="text-accent-orange font-bold">ONLINE</div>
                    </div>
                    <div className="p-4 border border-gray-800 rounded-lg">
                        <div className="text-gray-500 text-xs mb-2 uppercase">Nodes</div>
                        <div className="text-white font-bold">{activeNodes} ACTIVE</div>
                    </div>
                    <div className="p-4 border border-gray-800 rounded-lg">
                        <div className="text-gray-500 text-xs mb-2 uppercase">Region</div>
                        <div className="text-white font-bold">VOID</div>
                    </div>
                    <div className="p-4 border border-gray-800 rounded-lg">
                        <div className="text-gray-500 text-xs mb-2 uppercase">Uptime</div>
                        <div className="text-white font-bold">∞</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
