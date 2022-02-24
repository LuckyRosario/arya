import Navbar from "../components/Nav";
import "./Home.css"
import Image from 'react-bootstrap/Image'
import babyMe from "../images/1.jpg"

export default function Home(){
    return (
        <>
        <Navbar />
        <h1 className="text-center script m-5">You Grow Girl!</h1>
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <Image className="h-50 w-auto" roundedCircle={true} src={babyMe} alt="Mommy as Little Girl"></Image>
                </div>
                <div className="col">
                    <p>This is a paragraph about me as a little girl. I always wanted to have my own little girl to play with.</p>
                </div>
            </div>
        </div>
        </>
    )
}