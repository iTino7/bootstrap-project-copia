import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ books }) {
  return (
    <Container>
      <Row>
        {books.slice(0,18).map((item) => (
          <SingleBook key={item.asin} book={item} />
        ))}
      </Row>
    </Container>
  );
}

export default BookList;