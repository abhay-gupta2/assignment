import React, { useState } from 'react'

function Task2() {

  const [showAltImage, setShowAltImage] = useState(false);

 const handleNext = () => {
  setShowAltImage(true); 
};

const handlePrev = () => {
  setShowAltImage(false); 
};
  return (
    <>
      <section className='max-w-[1400px] bg-white mt-10 mx-auto'>
        <div className='container mx-auto'>
          <p className='text-sm'>Your SkillShikshya Journey</p>
          <p className='font-bold text-2xl flex gap-2'><span className='text-green-500'>Step</span> In. <span className='text-green-500'>Skill</span> Up. <span className='text-green-500'>Stand</span> Out.
            <img className='w-8 h-8' src="/icons/rocket.png" alt="" />
          </p>

          <div className='grid grid-cols-2 gap-y-6'>

            {/* card-1 */}
            <div className='group h-[380px]'>

              <div className='my-6 rounded-[30px] bg-[#F45B5B] items-center py-10 px-6 flex w-[592px] h-[341px] relative z-10 group-hover:ms-[-100px] group-hover:opacity-0 duration-1000'>
                <div className='absolute left-[-60px] top-12'>
                  <img className='scale-110 w-[280px] h-[380px] bounce' src="/image/img_1.png" alt="" />
                </div>
                <div className='text-white w-[58%] absolute right-7'>
                  <p className='text-[32px] text-end font-bold'>Start with Clarity</p>
                  <p className='text-[24px] text-end font-medium'>Step into a better learning path</p>
                  <p className='mt-4 text-end text-[18px]'>Overwhelmed by too many learning option? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upsskilling, we have a path tailored to your growth.</p>
                </div>
              </div>

              <div className='relative z-0 top-[-365px] left-[-13px]'>
                <img src="/image/img_1_hover.png" alt="" />
              </div>

            </div>

            {/* card-1 */}


            {/* card-2 */}
            <div className='group h-[380px] relative'>
              <div className='my-6 rounded-[30px] bg-[#5492A0] items-center py-10 px-6 flex w-[592px] h-[341px] relative z-10 group-hover:ms-[600px] group-hover:opacity-0 duration-1000'>
                <div className='text-white w-[65%] absolute'>
                  <p className='text-[32px] text-start font-bold'>Learn by Doing</p>
                  <p className='text-[24px] text-start font-medium'>Practical skills, real projects.</p>
                  <p className='mt-4 text-start text-[18px]'>Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
                </div>
                <div className='absolute right-0 top-12'>
                  <img className='scale-110 w-[230px] h-[380px] bounce' src="/image/img_2.png" alt="" />
                </div>
              </div>

              {/* Hover / Click Overlay */}
              <div className='absolute top-6 w-[592px] h-[341px] z-0'>
                {showAltImage ? (
                  <img src="/image/img_2_hover1.png" alt="Clicked view" />
                ) : (
                  <img src="/image/img_2_hover.png" alt="Hover view" className='group-hover:opacity-100 opacity-0 transition duration-300' />
                )}
              </div>

              {/* Button Example */}
              <img
                className='bg-[#eee] p-4 rounded-full absolute left-[-2px] top-[164px]'
                onClick={handlePrev}
                src="/icons/arrow-left.png"
                alt="Previous"
              />

              <img
                className='bg-[#eee] p-4 rounded-full absolute right-[47px] top-[164px]'
                onClick={handleNext}
                src="/icons/arrow-right.png"
                alt="Next"
              />
            </div>

            {/* card-2 */}

            {/* card-3 */}

            <div className='my-6 rounded-[30px] bg-[#6C64A8] items-center py-10 px-6 flex w-[592px] h-[341px] relative'>
              <div className='absolute left-[-60px] -bottom-14'>
                <img className='scale-110 w-[340px] h-[280px] bounce' src="/image/img_3.png" alt="" />
              </div>
              <div className='text-white absolute right-7'>
                <p className='text-[32px] text-end font-bold'>Get Mentored & Supported</p>
                <p className='text-[24px] text-end font-medium'>You're not learning alone.</p>
                <p className='mt-4 text-end text-[18px]'>Stuck or need feedback? SkillShikshya’s <br />community of mentors and learners <br /> has your back with live support, <br /> interactive discussions, and expert <br /> insights. You’re never on your own.</p>
              </div>
            </div>
            {/* card-3 */}

            {/* card-4 */}

            <div className='my-6 rounded-[30px] bg-[#A88964] items-center py-10 px-6 flex w-[592px] h-[341px] relative'>
              <div className='text-white w-[60%] absolute'>
                <p className='text-[32px] text-start font-bold'>Achieve & Showcase</p>
                <p className='text-[24px] text-start font-medium text-nowrap'>Build your portfolio, get job-ready.</p>
                <p className='mt-4 text-start text-[18px]'>Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.</p>
              </div>
              <div className='absolute -right-10 -bottom-20 rotate-[10deg]'>
                <img className='scale-110 w-[310px] h-[340px] bounce' src="/image/img_4.png" alt="" />
              </div>
            </div>
            {/* card-4 */}

          </div>

        </div>
      </section>
    </>
  )
}

export default Task2
