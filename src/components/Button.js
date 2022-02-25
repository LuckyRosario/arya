import "./Button.css"
import { Link } from "react-router-dom";

export default function Button(){
    return (
        <button className="btn-hover color-7"> <Link className="btn-text" to="/blog">Blog</Link></button>
    )
}