"use client";
import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import NavMenu from "./navMenu";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Overlay from "../overlay";

const NavBar = () => {

    const router = useRouter();
    const pathname = usePathname(); // Get current path
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll to the section with or without navigation
    const handleNavigationAndScroll = async (sectionId: string) => {
        if (pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }
            }, 300);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const [showOverlay, setShowOverlay] = useState(false);

    return (

        // Main Nav Bar
        <div className="fixed z-30 w-full bg-white h-[80px]">
            {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
            <div className="hidden lg:flex h-full py-5 px-16 items-center justify-center">
                <div className="flex w-full items-center justify-between">
                    <button onClick={() => handleNavigationAndScroll("top")} className="cursor-pointer">
                        <img src="/bridgeQAIcon.png" alt="icon" className="h-[40px]" />
                    </button>
                    <div className="flex gap-8 items-center">
                        <Link href="/how-it-works">
                            <button >
                                <span className="text-sm font-bold cursor-pointer">How it works</span>
                            </button>
                        </Link>
                        <Link href="/who-its-for">
                        <button >
                            <span className="text-sm font-bold cursor-pointer">Who it&apos;s for</span>
                        </button>
                        </Link>
                        <button className="bg-bridgeBlue py-2 px-6 rounded cursor-pointer"  onClick={() => setShowOverlay(true)}>
                            <span className="text-sm font-semibold text-white">Request early access</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Burger menu */}
            <div className="flex lg:hidden w-full flex-col">
                <div className="flex h-auto py-5 pl-16 items-center justify-center">
                    <button onClick={() => handleNavigationAndScroll("top")}>
                        <img src="/bridgeQAIcon.png" alt="icon" className="h-[40px]" />
                    </button>

                    <div className="flex-1" />
                    <button
                        onClick={toggleMenu}
                        className="mr-auto h-10 text-secondary pr-16"
                    >
                        {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
                {isMenuOpen && <NavMenu ref={menuRef} />}
            </div>
        </div>
    );
};

export default NavBar;
