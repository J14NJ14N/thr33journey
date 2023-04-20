import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';







const Hero = () => {
  return (
  
  <section className='relative w-full h-screen  mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className='flex flex-col justify-center item-center mt-5 '>
          <div className='w-5 h-5  rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient ml-2'/>
        </div>
        
          <div>
            <h1 className={`${styles.heroHeadText}text-white `}>
            Hello, I'm <span className='text-[#915eff]'>Jian Tung </span> &nbsp;<br/> 
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a passionate and dedicated web developer.
            {/* <span  className='xs:hidden sm:block md:block lg:block hidden phone:inline-block'>
            <br/>I have experience working with technologies    such as React.js, Angular.js, Express.js,   Javascript, and Node.js. </span>
            <span className='xs:hidden sm:hidden md:hidden lg:block  phone:inline-block'>
            <br/>I enjoy the challenge of learning new technologies and pushing my boundaries to become a professional web developer. &nbsp;
            <br/>I am excited about taking on exciting new projects that will further develop my skills and enhance my expertise.</span> */}
            </p>
          </div>
      </div>

      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>


      
    </section>
    
  )
}

export default Hero 