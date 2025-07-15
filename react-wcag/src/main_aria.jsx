import { StrictMode, useState, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const options = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange']

function DropDown() {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    //this is variable is used to make focus
    const containerRef = useRef(null);

    const handleSelect = (index) => {
        setSelectedOption(options[index])
        setIsOpen(false)
    }

    useEffect(() => {
        const current = containerRef.current;
        if (current) current.focus();
    }, [isOpen]);

    const handleKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                setIsOpen(true);
            }
            return;
        }

        if (isOpen) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setHighlightedIndex((prev) => (prev + 1) % options.length);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    handleSelect(highlightedIndex);
                    break;
                case 'Escape':
                    e.preventDefault();
                    setIsOpen(false);
                    break;
                default:
                    break;
            }
        }
    };

    return <div tabIndex={0}>
        <h1>Header</h1>
        <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{ width: '220px', outline: 'none' }}
        >

            <div
                role="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls="fruits-listbox"
                style={{
                    marginTop: '50px',
                    padding: '10px',
                    border: '1px solid #cccc',
                    borderRadius: '4px',
                    backgroundColor: '#a5baa5ff',
                    cursor: 'pointer'
                }}
            >
                {selectedOption ? selectedOption : 'Select a fruit'}
            </div>
            {isOpen && (
                <ul id="fruits-listbox"
                    role="listbox"
                    style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        border: '1px soid #ccc',
                        maxHeight: '150px',
                        overFlowY: 'auto',
                        background: 'White'
                    }}>
                    {options.map((option, index) => {
                        return <li
                            key={index}
                            role='option'
                            aria-selected={selectedOption === option}
                            id={`option-${index}`}
                            onClick={(e) => {
                                handleSelect(index)
                            }}
                            style={{
                                padding: '8px',
                                backgroundColor: highlightedIndex === index ? '#007bff' : '',
                                color: highlightedIndex === index ? 'white' : 'black',
                                cursor: 'pointer'
                            }}
                        >
                            {option}
                        </li>
                    })}
                </ul>
            )}
        </div>
    </div>
}

const App = () => {
    return <>
        <DropDown />
    </>
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
