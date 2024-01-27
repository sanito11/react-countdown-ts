
import { useState } from 'react'
import AddModal from './components/AddModal'
import Countdown from './components/Countdown'

const App = () => {
  const [open, setOpen] = useState<boolean>(false)


  const handleClick = () => {
    setOpen(true)
  }

  return (
    <div className='app'>
      <div className='countdown-container'>
        <Countdown />

      </div>
      <button onClick={handleClick} className='add-btn'>Add Countdown Date</button>
      <AddModal isOpen={open} />
    </div>
  )
}

export default App