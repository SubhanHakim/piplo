import { useState, useEffect } from 'react'
import piploLogo from '../assets/logo.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = ['Home', 'About', 'Art', 'Support']

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl bg-[#111] rounded-full p-2 pl-4 sm:pl-6 flex justify-between items-center shadow-[0_8px_0_rgba(0,0,0,0.3)] border-2 border-[#333]">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 hover:scale-105 transition-transform shrink-0">
                    <img src={piploLogo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex gap-6">
                        {navLinks.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="font-header text-[0.6rem] text-gray-300 hover:text-white transition-colors uppercase tracking-wider no-underline"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Right Side */}
                <div className="flex items-center gap-3">

                    {/* CTA Button */}
                    <a
                        href="#market"
                        className="bg-[#e84c30] text-white font-header text-[0.5rem] sm:text-[0.6rem] py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:brightness-110 transition-all no-underline shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] whitespace-nowrap"
                    >
                        Buy $PIPLO
                    </a>

                    {/* Premium Hamburger Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="flex flex-col justify-between w-5 h-[14px] overflow-hidden transform transition-all duration-300 origin-center">
                            <div className={`bg-white h-[2px] w-5 transform transition-all duration-300 origin-left ${isOpen ? 'rotate-[42deg] w-[22px] translate-y-[-1px]' : ''}`}></div>
                            <div className={`bg-white h-[2px] w-5 rounded transform transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-3' : ''}`}></div>
                            <div className={`bg-white h-[2px] w-5 transform transition-all duration-300 origin-left ${isOpen ? '-rotate-[42deg] w-[22px] translate-y-[1px]' : ''}`}></div>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            >
                {/* Menu Card */}
                <div
                    className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#1a1625] border-2 border-[#333] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-8 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) text-center overflow-hidden ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Decorative Background Grid */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <ul className="relative flex flex-col gap-6">
                        {navLinks.map((item, index) => (
                            <li key={item} style={{ transitionDelay: `${index * 50}ms` }} className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block font-header text-xl text-gray-300 hover:text-[#e84c30] hover:scale-110 transition-all duration-200 uppercase tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Decorative Corner Pixels */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-[#e84c30] animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#e84c30] animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#e84c30] animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#e84c30] animate-pulse"></div>
                </div>
            </div>
        </>
    )
}
