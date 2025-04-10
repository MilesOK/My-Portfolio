import '../Components/Toggle.css'
import { useState } from 'react'
const Toggle = () => {

  const [ischecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!ischecked)
    document.body.style.backgroundColor = ischecked ? 'white' : 'black',
    document.body.style.transition = '1s ease-in-out';
  }

  return (
    <div>
        <div className="container">
      <input onClick={onChange} checked={ischecked} type="checkbox" id="user" />
      <label htmlFor="user" className="button"></label>
    </div>
    </div>
  )
}

export default Toggle;