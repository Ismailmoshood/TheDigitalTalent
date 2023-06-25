import './App.css';
import Carousel from './components/Carousel';
import Freelancer from './components/Freelancer';
import GetStarted from './components/GetStarted';
import Offer from './components/Offer';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
    <Title />
    <Carousel />
    <Freelancer />
    <Offer />
    <GetStarted />
    </div>
  );
}

export default App;
