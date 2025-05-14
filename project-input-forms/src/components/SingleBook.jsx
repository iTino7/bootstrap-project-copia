import { Button, Card, Col } from "react-bootstrap";

function SingleBook({ book }) {
  return (
    <Col xs={12} sm={6} md={4} className="my-4 ">
      <Card style={{ height: "100%", width: "80%" }}>
        <Card.Img
          variant="top"
          src={book.img}
          height={250}
          style={{ objectFit: "contain" }}
        />
        <Card.Body
          className="d-flex flex-column justify-content-between"
          style={{ padding: "1.5rem" }}
        >
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button>{book.price}€</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
