import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import channel_list from "../data/channel_list.json" ;
const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: '1rem',
  },
  col: {
    width: '50vw'
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 10,
    width: 150
  }
}
const Channels = () => {
  
  return (
    <div>
      <h1>
        實況列表
      </h1>
      <Container>
      <Row xs={3}>
        {channel_list.map((channel) => (
          <Col>
          <Card key={channel.id} style={styles.card}>
            <Card.Img variant="top" src={channel.image_url} style={styles.cardImage}/>
              <Card.Body>
                <Card.Title>{channel.name}</Card.Title>
                <Card.Text>{channel.description}</Card.Text>
                <Card.Link href="#">實況連結</Card.Link>
                <Card.Link href="#">點我贊助</Card.Link>
              </Card.Body>
    
          </Card>
        </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};
  
export default Channels;