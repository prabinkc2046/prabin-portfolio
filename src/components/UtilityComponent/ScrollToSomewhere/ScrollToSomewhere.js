import React, { useEffect, useState } from 'react';
import './ScrollToSomewhere.css';

export default function ScrollToSomewhere({id, label, delayTime=1000}) {
const [visible, setVisible] = useState(false)

useEffect(() => {
  if(delayTime){
    const timer = setTimeout(() => {
      setVisible(true)
    }, delayTime);
    
    return () => {
      clearTimeout(timer);
    }
  }
},[delayTime])

const handleScroll = () => {
    const element = document.getElementById(id);
    console.log(id)
    if(element){
        element.scrollIntoView();
    }
}
  return (
    <button onClick={handleScroll} className={`scroll-to-somewhere-button ${visible ? 'visible' : ''}`}>
        {label ? label : 'Go somewhere'}
    </button>
  )
}
