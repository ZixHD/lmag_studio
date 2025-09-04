
import ParticlesBackground from "../Particles/particles";
import "./mainText.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MainText(){

    var lmag_text = "Let's Make a Game Studio"
    return(
        <div className="studio-container">
            <div className="studio-text-container">
                <p className={`studio-name ${inter.className}`}>{lmag_text}</p>
                <p className={`studio-moto ${inter.className}`}>Always building and creating.</p>
            </div>
            <div className={`join-button ${inter.className}`}>
                <p>Join us</p>
            </div>

        </div>
    )
}