import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Counter count={0} />
    </div>
  );
};

export default App;
