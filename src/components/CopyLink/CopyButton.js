import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CopyButton.css';

const CopyButton = ({ link, text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setIsCopied(true); // Set state to show visual feedback

        // Reset the visual feedback after 2 seconds
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Error copying text:', err);
      });
  };

  return (
    <button 
      onClick={handleCopy} 
      className={`copy-button ${isCopied ? 'copied' : ''}`}
    >
      <i className={`fas fa-${isCopied ? 'check' : 'copy'}`}></i> 
      {isCopied ? 'Copied!' : text}
    </button>
  );
};

CopyButton.propTypes = {
  link: PropTypes.string.isRequired, // The link to copy
  text: PropTypes.string, // The text to display next to the icon
};



export default CopyButton;
