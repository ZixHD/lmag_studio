import Image from "next/image";
import "./footer.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Footer(){
    return (
    <div className={inter.className}>
      <div className="footer-container">
        <div className="explore-container">
          <p className="explore">Explore</p>
          <p>Devlog</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        <div className="follow-container">
          <p className="follow">Follow</p>
          <div className="follow-images">
            <Image src="/youtube.png" alt="youtube" width={50} height={50} />
            <Image src="/x.png" alt="x" width={50} height={50} />
            <Image src="/itch.png" alt="itch.io" width={50} height={50} />
            <Image src="/instagram.png" alt="instagram" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}