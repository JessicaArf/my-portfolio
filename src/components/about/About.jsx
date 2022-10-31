import "./About.css"
import ImgAbout from "../../assets/img-about.jpeg"

export const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre</h2>
      <div className="about__container">
        <img src={ImgAbout} alt="foto" className="img__about" />
        <div className="about__data">
          <div className="about__info">
            <p className="about__description">Sou desenvolvedora front-end e possuo conhecimentos em HTML, CSS, javascript, typescript, bootstrap e react. Sou apaixonada por desenvolvimento web e busco me capacitar cada dia mais. </p>
              <a href="" className="btn">Baixar currículo</a>
              </div>
        </div>
      </div>
    </section>
  )
}

