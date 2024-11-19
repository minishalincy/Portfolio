import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-1xl sm:text-xl text-[#D4A886]'>Hi, my name is</p>
        <h1 className='text-1xl sm:text-5xl font-bold text-[#dee4f7]'>
          X S Minisha Alias Lincy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        As a passionate and innovative Full Stack Developer, I bring a unique blend of technical
         expertise and creative vision to the table.I possess a deep understanding of both front-end and 
        back-end technologies. Proficient in languages such as JavaScript, Python, and Java, I excel in 
        frameworks like React, Vue.js, Node.js, and Next.js. My expertise extends to databases 
        like MongoDB, MySQL, and PostgreSQL, ensuring seamless data integration. 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D4A886] hover:border-[#44312B]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
