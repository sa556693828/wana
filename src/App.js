import "./App.css";
import GifPart from "./components/GifPart";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Empowerment from "./components/Empowerment";
// import About from "./Component/About";
import NFTLevel from "./components/NFTLevel";
import Roadmap from "./components/Roadmap";
import QApage from "./components/QApage";
import Footer from "./components/Footer";
import ScorllPicture from "./components/ScorllPicture";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <GifPart />
      <ScorllPicture />
      <Empowerment />
      {/* <ChangeAccessories /> */}
      {/* <NFTLevel /> */}
      <Roadmap />
      {/* <Village /> */}
      <QApage />
      <Footer />
    </div>
  );
}
export default App;
