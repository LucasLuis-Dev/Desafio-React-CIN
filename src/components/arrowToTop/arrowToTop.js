import React from 'react';
import './arrowToTop.css';

function ArrowToTop() {
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='arrowToTop__container' onClick={handleArrowClick}>
      <svg className='arrowToTop-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
      </svg>
    </div>
  );
}

export default ArrowToTop;
