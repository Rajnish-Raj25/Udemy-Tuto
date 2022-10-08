import "./App.css";
import UseStateWithArray from "./component/usestate/UseStateWithArray";
import UseStateWithObj from "./component/usestate/UseStateWithObj";
import SampleCounter from "./component/usestate/SampleCounter";
import UeseffBasic from "./component/useeffect/UeseffBasic";
import FetchApi from "./component/useeffect/FetchApi";

function App() {
  return (
    <div className="App">
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithObj /> */}
      {/* <SampleCounter /> */}
      {/* <UeseffBasic /> */}
      <FetchApi />
    </div>
  );
}

export default App;
