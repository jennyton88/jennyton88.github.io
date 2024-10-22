import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p>Links</p> <Link to={"https://github.com/jennyton88"} className="horizontal-spacer">Github</Link><Link to={"https://jennydevs.itch.io/"}>Itch.io </Link>
        </footer>
    )
}

export default Footer;