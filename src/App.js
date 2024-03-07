import "./App.css";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Header from "./Header";

function App() {
  return (
    <div>
      <div className="navbar">
        <h1><Header/></h1>
      </div>
      <div className="main">
        <p><Box1/></p>
        <p><Box2/></p>
      </div>
    </div>
  );
}

export default App;
