import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



function ToggleButton() {
  const [isOn, setIsOn] = useState(false)
  const styles = {
    display: 'inline-block',
    padding: '10px 20px',
    background: isOn ? '#4caf50' : '#ccc',
    borderRadius: '20px',
    cursor: 'pointer',
    outline: 'none'

  }
  const toogle = () => setIsOn((prev) => !prev)

  return <>
    <header tabIndex={0}>
      <h1>Header</h1>
    </header>
    <div
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      style={styles}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toogle()
        }
      }}
      onClick={toogle}
    >
      {isOn ? 'ON' : 'OFF'}
    </div>
  </>
}

const App = () => {
  return <>
    <ToggleButton />
  </>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
