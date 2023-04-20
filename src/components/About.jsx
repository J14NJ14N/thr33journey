import React from 'react'
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
      >
            <br/>I have experience working with technologies    such as React.js, Angular.js, Express.js,   Javascript,  Node.js and PostgreSQL.
            <br />I have experience working with others to complete projects, and I enjoy sharing the processes and results of cooperation with my colleagues.
            <br/>I enjoy the challenge of learning new technologies and pushing my boundaries to become a professional web developer. &nbsp;
            <br/>I am excited about taking on exciting new projects that will further develop my skills and enhance my expertise.
            <br/><br/>In addition to work, I enjoy cycling to outside.
            I can immerse yourself in nature and take a breath of fresh air, while also capturing memories and practicing my photography skills. On a fictional level, I have a variety of interests, including 3D modeling, first-person gaming, and open-world engines.
      </motion.p>

      <div className=' justify-center items-center mt-20 flex  flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
          key={service.title} 
          index={index} 
          {...service} 
          />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");