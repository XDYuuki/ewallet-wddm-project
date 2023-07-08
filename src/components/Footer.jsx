import Image from 'next/image';
import coin from '../../assets/coin.svg'
import '../styles/footer.css'

export default function Footer(){
    return (
        <footer>
            <div className="triangle-contaner">
                <div className="triangle-shape"></div>
            </div>
            <div className="footer-bar">
                <p>© Copyright 2018 - All rights reserved.</p>
                <Image src={coin} alt='coin-img'></Image>
            </div>
        </footer>
    );
}