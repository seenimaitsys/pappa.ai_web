import Content from "../Content";
// import Header from "../components/Header"; // Header component commented out for now
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "../../src/assets/css/main.min.css"; // custom bootstrap design

function App() {
  return (
    <>
      <Content /> {/* Render the Content component */}
    </>
  );
}

export default App;
