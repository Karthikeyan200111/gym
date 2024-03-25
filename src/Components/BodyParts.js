import React from 'react';
import Icon from '../assets/gym.png';

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  
  

  

  return (
    <div
      role="button"
      className={` text-white md:p-2 p-5 flex flex-col items-center justify-center bodyPart-card md:w-64 md:h-72   hover:bg-black hover:text-white ${
        bodyPart === item ? 'border-t-4 border-red-600' : ''
      }`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        
      }}
    >
      <img src={Icon} alt="dumbbell" className="md:w-40 md:h-36 md:mt-5 w-24 h-12" />
      <p className='font-bold uppercase mt-3 md:text-lg'>{item}</p>
    </div>
  );
};

export default BodyParts;
