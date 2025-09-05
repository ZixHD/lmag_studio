
"use client"
import { useRef } from "react";
import Header from "../../components/LandingPage/Header/header";
import MainText from "../../components/LandingPage/MainText/mainText";
import ParticlesBackground from "../../components/LandingPage/Particles/particles";
import styles from './page.css'
import Games from "../../components/LandingPage/GameShowcase/games";
import Footer from "../../components/LandingPage/Footer/footer";

export default function Home(){
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    console.log("scroll")
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <ParticlesBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <MainText onClick={scrollToNextSection} />
      </div>
      <div
        ref={nextSectionRef}
        style={{ height: "100vh", background: "#444", color: "#fff" }}
      >
        <Games />
        <h2>Next Section</h2>
      </div>
      <div>
        <Footer />
      </div>
    </div>



  );
}