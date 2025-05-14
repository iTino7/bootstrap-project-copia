import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome title="Libri" />
      <SingleBook book={fantasy[0]} />
      <BookList books={horror} />
      <MyFooter title="React" />
    </>
  );
}

export default App;
