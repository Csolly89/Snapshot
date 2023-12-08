import Card from 'react-bootstrap/Card';
import FamilyImg from './Family.jpg'

function Github () {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={FamilyImg} />
                <Card.Body>
                    <Card.Title>For Family</Card.Title>
                    <Card.Text>
                        Nothings impossible when you have Family - Dom
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Github