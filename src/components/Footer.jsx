import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <nav>
                <Link to={"/"} className="horizontal-spacer">Home</Link>
                <Link to={"https://github.com/jennyton88"} className="horizontal-spacer">Github</Link>
                <Link to={"https://jennydevs.itch.io/"} className="horizontal-spacer">Itch </Link>
            </nav>
        </footer>
    )
}

export default Footer;