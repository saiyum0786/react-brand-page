import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav className="flex justify-between px-16 items-center py-1 relative">
                <img className="w-[45px] md:w-[60px]" src="/brand_logo.png" alt="brand-logo" />
                <ul className="hidden md:flex gap-7 text-xs">
                    <li className="hover:text-red cursor-pointer">Menu</li>
                    <li className="hover:text-red cursor-pointer">Location</li>
                    <li className="hover:text-red cursor-pointer">About</li>
                    <li className="hover:text-red cursor-pointer">Contact</li>
                </ul>
                <div className="flex items-center gap-4">
                    <button className="bg-red text-white text-xs px-3 py-1 cursor-pointer">Login</button>
                    <div onClick={()=>setMenuOpen(!menuOpen)} className="text-2xl md:hidden">☰</div>
                </div>
                {
                    menuOpen && (
                        <ul className="absolute top-full left-0 items-center shadow-md w-full bg-white py-4 flex flex-col md:hidden gap-4 text-xs divide-y divide-gray">
                            <li className="hover:text-red cursor-pointer">Menu</li>
                            <li className="hover:text-red cursor-pointer">Location</li>
                            <li className="hover:text-red cursor-pointer">About</li>
                            <li className="hover:text-red cursor-pointer border-b border-gray">Contact</li>
                        </ul>
                    )

                }
            </nav>
        </>
    )
}

export default Navbar;

