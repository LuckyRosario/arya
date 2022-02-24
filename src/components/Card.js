import Card from 'react-bootstrap/Card'

export default function Cards(props){
   
                                                                                           ````````````````
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top"
                  src={props.src} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
  </Card.Body>
</Card>
    )
}