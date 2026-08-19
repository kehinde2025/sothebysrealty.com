import { useState } from "react";
import logo from "../assets/images/download.svg";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">

            {/* Desktop / Mobile Header */}
            <div className="header-inner">

                {/* Search - Mobile */}
                <button
                    className="mobile-search"
                    type="button"
                    aria-label="Search"
                >
                    <span>⌕</span>
                </button>

                {/* LOGO IMAGE SPACE */}
                <a href="/" className="site-logo">
                    <img
                        src={logo}
                        alt="Sotheby's International Realty"
                        className="logo-image"
                    />
                </a>
                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <button type="button">Search</button>
                    <button type="button">Properties</button>
                    <button type="button">Agents</button>
                    <button type="button">Stories</button>

                    <button
                        type="button"
                        className="sell-with-us"
                    >
                        Sell With Us
                    </button>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(true)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {/* MOBILE DROPDOWN */}
            {menuOpen && (
                <div className="mobile-menu">

                    <div className="mobile-menu-header">

                        <div className="mobile-menu-logo">
                            {/* Logo image space */}
                        </div>

                        <button
                            className="close-menu"
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            ×
                        </button>

                    </div>

                    <nav className="mobile-nav">
                        <button type="button">Search</button>
                        <button type="button">Properties</button>
                        <button type="button">Agents</button>
                        <button type="button">Stories</button>
                        <button type="button">Sell With Us</button>
                    </nav>

                </div>
            )}

        </header>
    );
}