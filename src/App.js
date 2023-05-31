import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import TextForm2 from "./components/TextForm2";

function App() {
  return (
    <div className="App">
      <Navbar title="Name3" home="hello"></Navbar>
      <div className="container">
        <TextForm/>
      </div>
      <hr></hr>
      <div className="container">
        <TextForm2/>
      </div>
      
    </div>
  );
}

export default App;
