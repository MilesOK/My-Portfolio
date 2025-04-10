import { useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {

  const [useType] = useTypewriter({
    words: ['developer', 'designer'],
    deleteSpeed: 80,
    loop:{},
    delaySpeed:200
  });

  return (
    <div>
        <h2>Wisdom Miles,</h2>
        <p><strong style={{fontSize:'20px'}}>a web {useType}</strong></p>
    </div>
  )
}

export default Typewriter;