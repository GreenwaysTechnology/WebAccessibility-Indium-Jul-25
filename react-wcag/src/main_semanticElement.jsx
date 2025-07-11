import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

const Header = () => {

  // return <header>
  //       <h1>Header</h1>
  // </header>
  return <div role="banner" >
    <h1 tabIndex="0">Header</h1>
    <nav>
        <ul>
          <li><a href="">Home</a></li>
        </ul>
    </nav>
  </div>
}


const App = () => {
  return <>
    <Header />
  </>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
