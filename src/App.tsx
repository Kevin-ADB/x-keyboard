import "./styles.css";
import { PianoKeyboard } from "./ux/piano-keyboard";
import { KeyGroup } from "./ux/piano-keyboard/key-group";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PianoKeyboard $isKeyPressed={() => false} />
    </div>
  );
}
