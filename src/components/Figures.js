import eleven from "../images/11.jpg"
import Figure from 'react-bootstrap/Figure'
import ten from "../images/10.jpg"
import nine from "../images/9.jpg"

export default function Pics(){
    return(
        <div className="row text-center">
        <div className="col">
        <Figure>
  <Figure.Image
        width={300}
    alt="171x180"
    src={eleven}
  />
  <Figure.Caption>
    My beautiful belle on Halloween.
  </Figure.Caption>
</Figure>
</div>
   <div className="col">
        <Figure>
  <Figure.Image
    width={300}
    alt="171x180"
    src={nine}
  />
  <Figure.Caption>
    Celebrating Christmas Eve with all of her cousins.
  </Figure.Caption>
</Figure>
</div>
<div className="col">
        <Figure>
  <Figure.Image
    width={300}
    alt="171x180"
    src={ten}
  />
  <Figure.Caption>
   She really loves the water and just learned how to swim!
  </Figure.Caption>
</Figure>
</div>
</div>
    )
}