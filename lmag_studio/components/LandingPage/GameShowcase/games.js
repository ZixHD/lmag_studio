import Image from "next/image";
import "./games.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Games(){

    return (
        <div className="games-showcase-container">
            <div className={`game-text ${inter.className}`}>
                <p>Here are some of our most recent games</p>
            </div>
            <div className="games-container">
                <div className="game">
                    <div className="about-game-container">
                        <p>About</p>
                        <p>Button</p>
                    </div>
                   
                     <Image src="/office_mess.png"
                        alt="office_mess"
                        width={75}
                        height={80}
                    />
                </div>
                <div className="game">
                    <p>About</p>
                    <Image src="/dan_the_hunter.png"
                        alt="dan_the_hunter"
                        width={75}
                        height={80}
                    />
                </div>
            </div>
        </div>
    )
}
