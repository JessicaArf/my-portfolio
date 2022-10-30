import "./Sidebar.css"
import Logo from "../../assets/logo.svg"

export const Sidebar = () => {
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="logo"/>
            </a>
            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                              <i className="icon-home"></i>
                              </a>
                        </li>
                    </ul>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                              <i className="icon-book-open"></i>
                              </a>
                        </li>
                    </ul>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                              <i className="icon-graduation"></i>
                              </a>
                        </li>
                    </ul>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                              <i className="icon-layers"></i>
                              </a>
                        </li>
                        </ul>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                              <i className="icon-envelope"></i>
                              </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav__footer">
              <span className="copyright"> &copy; 2022</span>
            </div>


        </aside>

    )
};
