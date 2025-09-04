
import Image from "next/image";
import ParticlesBackground from "../Particles/particles";
import "./mainText.css"
import { Inter } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';

const inter = Inter({ subsets: ["latin"] });

export default function MainText( { onClick }){

    var lmag_text = "Let's Make a Game Studio"
    return(
        <div>
            <div className="helper">
                <div className="studio-container">
                    <div className="studio-text-container">
                        <p className={`studio-name ${inter.className}`}>
                            <TypeAnimation
                                sequence={[
                                "Let's Make a Game Studio", 
                                10000,
                                '',
                                ]}
                                speed={40}
                                repeat={Infinity}
                                style={{
                                fontSize: 'inherit', 
                                color: 'inherit',
                                display: 'inline-block',
                                }}
                            />
                            </p>
                        <p className={`studio-moto ${inter.className}`}>Always building and creating.</p>
                    </div>
                    <div className={`join-button ${inter.className}`}>
                        <p>Join us</p>
                    </div>
                    
                </div>

            </div>
            <div className="down-arrow-container" onClick={onClick}>
                <Image src="/down_arrow.png"
                    alt="down_arrow"
                    width={50}
                    height={50}
                />
            </div>
            
        </div>
    )
}