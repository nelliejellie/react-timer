import './App.css';
import Seconds from './components/Seconds';
import Footer from './components/Footer';

function App() {
  const dayshoursMinSecs = {days:14, hours:0, minutes: 0, seconds: 0}
  
  return (
    <div className="App">
        <p className="p">WE'RE LAUNCHING SOON</p>
        <Seconds dayshoursMinSecs={dayshoursMinSecs}/>
        <Footer/>
    </div>
  )
}

export default App;
