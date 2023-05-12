import './Navbar.scss';
import logo from "../../helpers/logo.png";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" width="100px" />
            </div>
            <div className="links">
                <a href="#Horoscope">Horoscope</a>
                <a href="#Daily">Daily</a>
                <a href="#Tarot">Tarot</a>
                <a href="#Article">Article</a>
                <a href="#Contact">Contact</a>
            </div>

        </div>
    )
}

export default Navbar;