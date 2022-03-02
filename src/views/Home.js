import Navbar from "../components/Nav";
import "./Home.css"
import JumbotronExample from "../components/Jumbotron";
import Footer from "../components/Footer";
import Pics from "../components/Figures.js";

export default function Home(){
    
    return (
        <>
        <Navbar />
        <JumbotronExample />
        <Pics />
        <Footer />
        </>
    )
}