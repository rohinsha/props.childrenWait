import "./styles.css";
import SubParent from "./SubParent";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SubParent>
        <h1>Hello I am inside the subparent and i a child of it</h1>
      </SubParent>
    </div>
  );
}
