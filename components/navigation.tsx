"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Code2, Home, User, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const menuItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "#about", label: "About", icon: User },
        { href: "#projects", label: "Projects", icon: Code2 },
        { href: "#contact", label: "Contact", icon: Mail },
    ];

    const handleMenuClick = () => {
        setIsOpen(false);
        const id = window.location.hash;
        if (id) {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background/50 backdrop-blur-sm",
                isOpen && "bg-background"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link
                        href="/"
                        className="flex items-center space-x-2 transition-transform hover:scale-105"
                        onClick={handleMenuClick}
                    >
                        <Code2 className="h-6 w-6" />
                        <span className="font-bold text-lg">Samiul Islam</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={handleMenuClick}
                                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/50"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 relative"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden bg-black fixed inset-0 top-16 z-50 transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                )}
            >
                <div
                    className={cn(
                        "flex flex-col p-4 space-y-2 m-2 rounded-md",
                        theme === "dark" ? "bg-black" : "bg-gray-100"
                    )}
                >
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-2 px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                            onClick={handleMenuClick}
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
