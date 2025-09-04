import Header from "../../components/LandingPage/Header/header";
import MainText from "../../components/LandingPage/MainText/mainText";
import ParticlesBackground from "../../components/LandingPage/Particles/particles";
import styles from './page.css'

export default function Home(){
  return (
    <div>
      <ParticlesBackground></ParticlesBackground>
     <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <MainText />
      </div>
    </div>



  );
}