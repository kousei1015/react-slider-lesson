import ImageSlider from './components/ImageSlider'
import './App.css'
import Flower0 from './assets/26553_s.jpg'
import Flower1 from './assets/25255049_s.jpg'
import Flower2 from './assets/25640840_s.jpg'
import Flower3 from './assets/25652985_s.jpg'

function App() {
  const slides = [Flower0, Flower1, Flower2, Flower3]
  return (
    <div className="App">
      <ImageSlider slides={slides}/>
    </div>
  )
}

export default App
