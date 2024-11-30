import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to={"/"} className="horizontal-spacer">Home</Link> <Link to={"https://github.com/jennyton88"} className="horizontal-spacer">Github</Link><Link to={"https://jennydevs.itch.io/"}>Itch.io </Link>
        </footer>
    )
}

export default Footer;