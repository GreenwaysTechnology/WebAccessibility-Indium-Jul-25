import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const AccessibleCarousel = () => {
    //slide content
    const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length)
        }, 1000)
        return () => clearInterval(interval)
    }, [isPlaying, slides.length])

    return <div aria-live="off">
        <div style={{backgroundColor:'CaptionText', height:200,color:'whitesmoke' ,textAlign:'center'}}>{slides[currentIndex]}</div>
        <button onClick={() => {
            setIsPlaying(!isPlaying)
        }}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
}

const App = () => {
    return <>
        <AccessibleCarousel />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
