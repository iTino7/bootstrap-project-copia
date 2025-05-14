import React, { Component } from "react";
import { Form, Row, TabContainer } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <>
        <TabContainer fluid>
          <Form.Control
            type="text"
            placeholder="Cerca un libro..."
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <Row>
            {this.props.books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              )
              .map((book) => (
                <SingleBook key={book.asin} book={book} />
              ))}
          </Row>
        </TabContainer>
      </>
    );
  }
}

export default BookList;
