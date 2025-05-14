import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Welcome title="Libri" />
      <AllTheBooks variantButton="success" />
      <MyFooter title="React" />
    </>
  );
}

export default App;
