import Carousel from './components/Carousel'
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel slides={5} infinite={true} />
      <br />
      <Carousel slides={3} infinite={false} />
      <br />
      <Carousel slides={2} infinite={true} />
    </div>
  );
}

export default App;
