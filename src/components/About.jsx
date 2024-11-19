import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-3 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#D4A886]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Minisha Lincy, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As an ambitious and detail-oriented Full Stack Developer, I'm eager to
                 bring my skills and enthusiasm to innovative projects. With a strong foundation 
                 in computer science and a passion for coding, I've developed proficiency in
                  cutting-edge technologies including JavaScript, Python, HTML/CSS, React, 
                  Node.js, and MongoDB. I'm excited to apply my knowledge and creativity to
                   build scalable, efficient, and user-friendly applications. I'm a quick learner, 
                   team player, and dedicated individual committed to delivering high-quality 
                   solutions. I'm looking forward to collaborating with like-minded professionals,
                    expanding my skill set, and contributing to exciting projects that make a
                     meaningful impact.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
