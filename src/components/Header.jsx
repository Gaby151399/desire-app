import { useLocation } from "react-router-dom";
import Style from "../styles/header.module.css";

export default function Header() {
    const location = useLocation();

    return (
        <header className={ Style.header }>
            <div className={ Style.logo }>LOGO</div>
            <div style={ { display: "flex", alignItems: "center", gap: 10 } }>
                <a style={ { color: location.pathname === '/' ? 'green' : 'black' } } href="/">Home</a>
                <a style={ { color: location.pathname === '/blog' ? 'green' : 'black' } } href="/blog">Blog</a>
                <a style={ { color: location.pathname === '/about' ? 'green' : 'black' } } href="/about">About</a>
            </div>
        </header>
    )
}