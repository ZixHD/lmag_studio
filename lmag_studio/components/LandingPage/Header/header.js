import './header.css';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Header(){


    return (
        <div className="header-background">
            <div className="header-container">
                <div className="image-container">
                    <Image src="/logo2.png"
                            alt="logo"
                            width={75}
                            height={80}
                        />
                </div>
                <div className="routes-container">
                   <div className="route">
                        <p className={inter.className}>Devlog</p>
                    </div>
                    <div className="route">
                        <p className={inter.className}>About</p>
                    </div>
                    <div className="route">
                        <p className={inter.className}>Contact</p>
                    </div>
                </div>
            </div>
        </div>

    );
}