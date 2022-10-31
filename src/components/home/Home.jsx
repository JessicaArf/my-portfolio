import {Socials} from "./Socials"
import { ScrollDown } from "./ScrollDown";
import Me from "../../assets/img-home.jpg"
import "./Home.css";

export const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="img__home"/>
        <h1 className="home__name">Jéssica Arf</h1>
        <span className="home__education">Desenvolvedora Front-end </span>
        <Socials />
        <a href="#contact" className="btn">Entrar em contato</a>
        <ScrollDown />
      </div>
    </section>
  )
}
