import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
    <div className="bg-orange-100 py-8 flex flex-col lg:flex-row justify-center items-center gap-8">
      <div className="flex justify-center w-full lg:w-1/3">
        <div>
          <Image
          src="/fssai.png"
          alt="DiyaHygieneLogo"
          width={150}
          height={150}
          className="object-contain"
        />
        <div className=' text-center font-bold'>10719012000138</div>
        </div>
      </div>
      <div className="flex justify-center w-full lg:w-1/3">
        <Image
          src="/DiyaHygieneBrandKit/logo.png"
          alt="DiyaHygieneLogo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="flex justify-center w-full lg:w-1/3">
        <div>
          <Image
          src="/iso.png"
          alt="DiyaHygieneLogo"
          width={150}
          height={150}
          className="object-contain"
        />
        <div className=' text-center font-bold'>9001:2015</div>
        </div>
      </div>
      </div>
      <div className="bg-slate-50 py-2 flex flex-col lg:flex-row justify-evenly items-center gap-8">
        <div>
          © {new Date().getFullYear()}, Diya Hyiegene Flours Pvt. Ltd., All rights reserved
        </div>
        <div>
Design and developed by ReD
<span className="inline-block w-4 h-4 bg-red-600 rounded-full align-middle mb-1"></span>
t Studio.
        </div>
      </div>
      </div>
  );
};

export default Footer;
