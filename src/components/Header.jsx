import Link from 'next/link'
import Image from 'next/image';
import logo from '../../assets/logo.svg'
import '../styles/header.css'

export default function Header(){
    return (
        <header>
            <nav className="nav-container">
                <Image src={logo} alt='logo-next'></Image>
                <ul className="nav-link-list">
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/aboutUs"}><li>about us</li></Link>
                    <Link href={"/wallet"}><li>wallet</li></Link>
                    <Link href={"/graphics"}><li>stats</li></Link>
                </ul>
            </nav>
        </header>
    );
}