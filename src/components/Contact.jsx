import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaLinkedin, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <div className='mt-8 flex justify-around items-center text-white font-medium'>
          <div className='flex flex-col items-center'>
            <div className='bg-secondary rounded-full p-4 mb-2'>
              <FaPhoneAlt className='text-white text-2xl' />
            </div>
            <p>669-312-8667</p>
          </div>
          <div className='flex flex-col items-center'>
            <a
              href="https://www.linkedin.com/in/hasanmhowwala"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-secondary rounded-full p-4 mb-2'
            >
              <FaLinkedin className='text-white text-2xl hover:text-black' />
            </a>
            <p>LinkedIn</p>
          </div>
          <div className='flex flex-col items-center'>
            <a
              href="https://github.com/your-github-username" // Update with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className='bg-secondary rounded-full p-4 mb-2'
            >
              <FaGithub className='text-white text-2xl hover:text-black' />
            </a>
            <p>Github</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-secondary rounded-full p-4 mb-2'>
              <FaMapMarkerAlt className='text-white text-2xl' />
            </div>
            <p>San Jose, CA</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
