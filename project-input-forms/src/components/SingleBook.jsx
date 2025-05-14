import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          style={{ width: "18rem" }}
          className={this.state.selected ? "border-success" : ""}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">{this.props.book.price}€</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
