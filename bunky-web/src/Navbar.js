import logo_full from './bunky_logo.png';
import acc from './acc.png';
export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">
        <img className="logo_full1" src={logo_full} /></a>
        <ul>
            <li className="active">
            <a href = "/home">Home</a>
            </li>
            <li>
            <a href = "/chat">Chat</a>
            </li>
            <li>
            <a href = "/favorit">Favorit</a>
            </li><li>
            <a href = "/feed">Feed</a>
            </li><li>
            <a href = "/aboutus">About us</a>
            </li>
            
        </ul>
        <ul>
        <li>
                <a href="https://google.com">
                    <img className="acc" src={acc} />
                </a>
            </li>
        </ul>
    </nav>
}