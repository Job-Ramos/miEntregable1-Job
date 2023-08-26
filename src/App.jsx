
import { useState } from 'react';
import './App.css'
import BtnQuote from './conponents/BtnQuote';
import Quote from './conponents/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandedomElemArray'

function App() {
  
  const phraseRamdom = getRandomElemArray(phrases)
  const NumberRandom = getRandomElemArray([1,2,3,4])
  
  const [quote, setQuote] = useState(phraseRamdom)
  const [numberBg, setNumberBg] = useState(NumberRandom)

  const bgStyle = {
    backgroundImage:`url(/fondo${numberBg}.png)`
  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Galleta de la fortuna</h1>
      <Quote  phrase={quote} />
      <BtnQuote 
      setQuote={setQuote}
      phrases={phrases}
      setNumberBg={setNumberBg}
      />
      
    </div>
  )
}

export default App
