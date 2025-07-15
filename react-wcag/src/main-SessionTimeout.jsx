import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const SessionTimeout = () => {
    const [timeLeft, setTimeLeft] = useState(30) //2 mins
    const [showWarning, setShowWarning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('calling')
            setTimeLeft(prev => {
                if (prev <= 0) {
                    clearInterval(timer)
                    alert("Session Expired")
                    return 0;
                }
                return prev - 1
            });
            if (timeLeft === 30) setShowWarning(true)
        }, 1000)
        //clearn up code
        return () => clearInterval(timer)
    }, [timeLeft])

    return <div aria-live="polite">
        {showWarning && (<div>
            <h1>Session Expires in {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</h1>
        </div>)}
    </div>
}

const App = () => {
    return <>
        <SessionTimeout />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
