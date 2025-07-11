import React from 'react'

function Task1() {
    return (
        <>
            <section className='max-w-[1400px] mx-auto bg-white mt-10'>
                <div className="container mx-auto">
                    <div className='py-20 relative mt-[200px] group'>
                        <p className='text-[24px]  text-center'>Hear How They Level Up Their Game!</p>
                        <p className='text-[32px] font-bold text-center'>Skill <span className='text-green-500'>Masters</span> Unite! 🤝</p>
                        <p className='text-[18px] font-semibold text-center flex gap-2 items-center justify-center group'>View all Testimonials
                            <img className='group-hover:ms-[10px] duration-1000' src="/icons/arrow-right.png" alt="" />
                        </p>
                        <div className='absolute top-[-30px] left-[45%] group-hover:top-[-100px] duration-1000'>
                            <img className='w-24' src="/testimonials/img_1.gif" alt="" />
                        </div>

                        <div className='absolute top-[-20px] right-[35%] group-hover:top-[-100px] group-hover:right-[25%] duration-1000'>
                            <img className='w-24' src="/testimonials/img_2.png" alt="" />
                        </div>

                        <div className='text absolute top-[-20px] left-[35%] group-hover:top-[-100px] group-hover:left-[25%] duration-1000 hover:border-4 rounded-[35px] border-[#B9E2D5]'>
                           
                           <div> <img className='w-24' src="/testimonials/img_3.png" alt="" />
                           </div>

                            <div className='w-[350px] p-4 bg-[#f8f7f7] rounded-[16px] hidden text1'>
                                <p className='text-[12px]'>I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I have recommended the same course to my data-enthusiast friends."</p>
                                <p className='text-[10px] text-end'><span className='font-semibold'>Rajesh Dhakal <br /> </span>
                                    Digital Marketing Student</p>
                            </div>
                            <div className='absolute hidden rating w-[200px]'>
                                <img className='w-full' src="/testimonials/rating.png" alt="star" />
                            </div>
                        </div>

                        <div className='absolute top-[70px] right-[25%] group-hover:right-[15%] duration-1000'>
                            <img className='w-24' src="/testimonials/img_4.png" alt="" />
                        </div>

                        <div className='absolute top-[70px] left-[25%] group-hover:left-[15%] duration-1000'>
                            <img className='w-24' src="/testimonials/img_5.png" alt="" />
                        </div>

                        <div className='absolute top-[180px] right-[30%] group-hover:right-[20%] group-hover:top-[210px] duration-1000'>
                            <img className='w-24' src="/testimonials/img_6.gif" alt="" />
                        </div>

                        <div className='absolute top-[180px] left-[30%] group-hover:left-[20%] group-hover:top-[210px] duration-1000'>
                            <img className='w-24' src="/testimonials/img_7.gif" alt="" />
                        </div>

                        <div className='video absolute top-[200px] right-[38%] group-hover:right-[32%] group-hover:top-[260px] duration-1000 hover:border-4 rounded-[35px] border-[#B9E2D5]'>
                            <img className='w-24' src="/testimonials/video.png" alt="" />

                            <div className='video1 hidden'>
                                <video
                                    src="/testimonials/video.mp4"
                                    autoPlay loop muted
                                    className='w-[100px] h-[300px]'></video>
                            </div>
                        </div>



                        <div className='absolute top-[200px] left-[38%] group-hover:left-[32%] group-hover:top-[260px] duration-1000'>
                            <img className='w-24' src="/testimonials/img_8.png" alt="" />
                        </div>

                        <div className='absolute top-[200px] left-[45%] group-hover:top-[270px] duration-1000'>
                            <img className='w-24' src="/testimonials/img_9.gif" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Task1
