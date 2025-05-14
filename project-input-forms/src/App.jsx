import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import BookList from "./components/BookList";
import { Dropdown } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    books: fantasy,
  };

  render() {
    return (
      <>
        <MyNav />
        <Welcome title="Libri" />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Libri disponibili
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => this.setState({ books: horror })}>
              Horror
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ books: romance })}>
              Romance
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ books: fantasy })}>
              fantasy
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ books: history })}>
              history
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ books: scifi })}>
              scifi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <BookList books={this.state.books} />
        <MyFooter title="React" />
      </>
    );
  }
}

export default App;
