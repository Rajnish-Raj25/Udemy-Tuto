import "./App.css";
import UseStateWithArray from "./component/usestate/UseStateWithArray";
import UseStateWithObj from "./component/usestate/UseStateWithObj";
import SampleCounter from "./component/usestate/SampleCounter";
import UeseffBasic from "./component/useeffect/UeseffBasic";
import FetchApi from "./component/useeffect/FetchApi";
import Form from "./component/form/form";
import MultipleInput from "./component/form/MultipleInput";
import Prop from "./Prop-drilling/Prop";
function App() {
  return (
    <div className="App">
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithObj /> */}
      {/* <SampleCounter /> */}
      {/* <UeseffBasic /> */}
      {/* <FetchApi /> */}
      {/* <Form /> */}
      {/* <MultipleInput /> */}
      <Prop />
    </div>
  );
}

export default App;
