
import Button from './Button';
import Container from 'react-bootstrap/Container';
import eight from "../images/8.jpg"

export default function JumbotronExample() {
  
return (
	<>

	<div className="mb-5" >
	<Container>
		<p className="heading script mb-3">You Grow Girl!</p>
        <div className="row">
		<div className="col-md-8 col-12">
        <p>
		Welcome to Arya's Anecdote. A place where you can take a look at Arya's fantastic life as a growing princess. 
        It's a place for me to attempt to hold on to my only child's early childhood. I always wanted to have a daughter for as long 
        as I can remember. Now I have one of my own, a real life dolly that I can dress up and play with and never get tired of! I am very lucky to have her.
        Arya promises to stay my best friend, even when she reaches young adulthood. For now, all I can do is hold on to these precious moments and pray that 
        Jesus molds her into a woman after his own heart. </p>
        <p>Born on September 2, 2015 in the heart of the Chicago's southside, 
            Arya has bought a tremendous amount of joy to her family. She is sharp and funny beyond measure.
            She loves to sing and dance and put her dolls to bed. She does not like to be called a picky eater with cheesy mac and pizza being amoung her favorite meals. 
            Her favorite ice cream is chocolate with sprinkles.
        </p>
		</div>
        <div className="text-center col-md-4 col-12">
        <img src={eight} alt="Mommy and Arya" className="me-auto ms-3 image"></img>
        </div>
        </div>
		<Button />
	</Container>
	</div>
	</>
);
}
