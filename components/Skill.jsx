import Image from 'next/image';
import React from 'react';

export default function Skill({ image, name }) {
  return (
    <div>
      <Image
        src={`https://img.icons8.com/?size=512&id=DlWYTAeVktx3&format=png`}
        width={75}
        height={75}
        alt='icon-badge'
      />
      <h3 className='text-center'>{name}</h3>
    </div>
  );
}
