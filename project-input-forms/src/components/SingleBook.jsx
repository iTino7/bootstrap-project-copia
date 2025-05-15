import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        className={this.state.selected ? "border-danger" : ""}
        style={{ width: "18rem" }}
      >
        <Card.Img
          onClick={() => this.setState({ selected: !this.state.selected })}
          variant="top"
          src={this.props.books.img}
        />
        <Card.Body>
          <Card.Title>{this.props.books.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
