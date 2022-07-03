import Carousel from "./components/Carousel";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Carousel slides={5} infinite={true} />
      <Carousel slides={3} infinite={false} />
      <Carousel slides={2} infinite={true} />
      <Carousel />
    </div>
  );
}

export default App;
