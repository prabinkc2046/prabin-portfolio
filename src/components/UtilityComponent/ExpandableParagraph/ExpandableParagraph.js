import React, { useState } from 'react'
import './ExpandableParagraph.css';

export default function ExpandableParagraph({text, wordsCount=5}) {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }
    const words = text.split(' ');
    const textToShow = isExpanded ? text : words.slice(0, wordsCount).join(" ") + " . . ."
  
return (
    <p 
    onClick={handleToggle} 
    className={`expandable-paragraph ${isExpanded ? 'expanded' : ''}`}>
        {textToShow}
    </p>
  )
}
