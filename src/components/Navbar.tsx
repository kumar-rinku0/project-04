"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "contect",
        path: "/contect"
    },
    {
        name: "pricing",
        path: "/pricing"
    },
    {
        name: "documention",
        path: "/Documention"
    },
    {
        name: "join our comunity",
        path: "/joinourcomunity"
    }
]

function DesktopNav() {
    return(
        <nav className='flex h-12 rounded-full bg-white border border-gray-600'>
            <ul className='flex h-full items-center list-none p-1 m-0 gap-4'>
                {/* {{links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${pathname === link.path && "text-yellow-500 border-b-2 border-yellow-500"} capitalize`}
                        >{link.name}</Link>
                    )
                })}} */}
                <li className='mx-2 my-4 px-4 py-1.5 hover:bg-yellow-500 hover:text-white rounded-full'>
                    <a className='font-medium' href="">Contect</a>
                </li>
                <li className='mx-2 my-4 px-4 py-1.5 hover:bg-yellow-500 hover:text-white rounded-full'>
                    <a className='font-medium' href="">Pricing</a>
                </li>
                <li className='mx-2 my-4 px-4 py-1.5 hover:bg-yellow-500 hover:text-white rounded-full'>
                    <a className='font-medium' href="">Documention</a>
                </li>
                <li className='mx-2 my-4 px-4 py-1.5 hover:bg-yellow-500 hover:text-white rounded-full'>
                    <a className='font-medium' href="">Join Our Comunity</a>
                </li>
            </ul>
        </nav>
    )
}

function MoblieNav () {
    return (
        <div>mobile navbar</div>
    )
}

function Navbar() {
  const pathname = usePathname();
  return (
    <div className='flex justify-between mt-8 w-full'>
        <div className='text-2xl font-semibold'>Toingg</div>
        <div className="hidden lg:flex">
            <DesktopNav />
        </div>
        <div className="flex lg:hidden">
            <MoblieNav />
        </div>
    </div>
  )
}

export default Navbar