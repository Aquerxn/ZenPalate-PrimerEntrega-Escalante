import logo from "../image/img-paginaweb-logo.png";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={logo} alt="ZenPalate" title="ZenPalate"></img>
        </Link>
    )
}

export default Brand;