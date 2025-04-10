import robot from '../assets/Robot.jpeg';
import Typewriter from './Typewriter';
import Button from '../Components/Button.jsx'

const Portfolio = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='profile'>
            <img src={robot} alt='Profile pic'/>  
        </div>
          <div>
            <Typewriter/>
          </div>
      </div>
      <Button/>
    </div>
  )
}

export default Portfolio;