import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import Row from "./components/Row/Row";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <Banner />
        <div className="row-list">
          <Row lang="en-US" />
          <Row lang="en-US" trending daily />
          <Row lang="en-US" trending weekly />
          <Row lang="en-US" action />
          <Row lang="en-US" horror />
          <Row lang="en-US" romance />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
