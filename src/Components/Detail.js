import React from 'react';
import BodyPartImage from '../assets/body-part.png';
import TargetImage from '../assets/target.png';
import EquipmentImage from '../assets/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      id: 'bodyPart', // Unique identifier
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      id: 'target', // Unique identifier
      icon: TargetImage,
      name: target,
    },
    {
      id: 'equipment', // Unique identifier
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className='md:flex md:flex-nowrap flex-wrap   p-3'>
      <div className='md:w-1/2 p-6 md:ml-14 '>
        <img src={gifUrl} alt={name} className="rounded-md " />
      </div>
      <div className='md:w-1/2'>
        <div className='p-3'>
          <p className='font-bold md:text-4xl text-lg uppercase text-white'>{name}</p>
          <p className='my-4 text-white text-justify leading-7	'>
            Exercises keep you strong.{' '}
            <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
            of the best exercises to target your {target}.<br></br> It will help you improve your{' '}
             mood and gain energy.
          </p>
        </div>
        <div className='p-3'>
          {extraDetail?.map((item) => (
            <div key={item.id} className='flex items-center my-8 gap-4  '>
              <button>
                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }}  />
              </button>
              <p className='uppercase font-bold text-white'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
