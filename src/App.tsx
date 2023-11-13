import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [periods, setPeriods] = useState('')
  
  useEffect(() => {
    if (periods.length <= 3) {
      const timeout = setTimeout(() => {
        setPeriods(periods.concat('.'));
      }, 1000);
  
      return () => clearTimeout(timeout);
    } else {
      setPeriods('')
    }
  }, [periods]);
  

  return (
    <>
      <h1>{`Coming Soon${periods}`}</h1>
    </>
  )
}

export default App
