import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image'

const Splashscreen = () => {
  return (
    <div className="relative w-[220px] h-[220px] md:w-[400px] md:h-[400px] flex items-center justify-center">
      <Image
        src="/DiyaHygieneBrandKit/without_name.png"
        alt="DiyaHygieneLogo"
        width={400}
        height={400}
        className="object-contain"
      />
      
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 2 },
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/DiyaHygieneBrandKit/brand_name.png"
          alt="DiyaHygiene"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}

export default Splashscreen