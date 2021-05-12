
import Card from 'react-bootstrap/card';

const CardP = ({ title, desc, imgURL,children }) => {
  
  return (
    <Card ClassName="card">
      <div className="overflow">
        <Card.Img className="Image" variant="top" src={imgURL} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text >
          <div>
           {desc}
          </div>
          <div>
           {children}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardP