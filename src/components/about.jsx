import { Navbar } from './navbar'
import { Timeline } from './timeline'

export const About = () => {
    return(
        <>
            <Navbar/>

            <div id='about' className="mx-auto px-10 md:px-5">
            <div className="w-[93%] mx-auto pt-10 space-y-8">
                <p className="text-5xl font-['Petrona'] pt-5">Who we are</p>
                <div className="text-xl *:text-justify grid grid-cols-1 lg:grid-cols-2 gap-10 leading-7 md:leading-9">
                        <p className="">EnrollHub is a trusted community learning platform that connects students, trainers, and families to expert-led programs in academics, wellness, arts, and professional development. Founded in 2018, we’ve helped over 15,000 learners find the right guidance and training through our seamless online and in-person services.
                            <span className='hidden xl:block pt-5'>We started with a single vision — to simplify quality education access across India. From humble beginnings as a local tuition referral site in Bangalore, EnrollHub has grown into a multi-service hub offering everything from math tutoring and yoga to coding bootcamps and music training.</span>
                        </p>  
                        <p className="lg:order-3 lg:col-span-2 xl:hidden">We started with a single vision — to simplify quality education access across India. From humble beginnings as a local tuition referral site in Bangalore, EnrollHub has grown into a multi-service hub offering everything from math tutoring and yoga to coding bootcamps and music training.
                        </p> 
                    <div className='overflow-hidden object-cover p-1'>
                        <img className='w-[100%] lg:h-[260px] xl:h-[400px]' src="/assets/about.jpg" alt="" />
                    </div>
                    
                </div>
                <div className="space-y-4">
                    {/* <div>
                        <p className="text-3xl font-bold">Key Values:</p>
                    </div> */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 *:py-2 *:px-1 *:lg:px-8 *:opacity-90 *:border *:border-gray-500 *:text-sm *:text-center *:my-auto *:rounded-4xl">
                        <div className="">
                            <p className="bg-gradient-to-r from-teal-400 via-rose-500 to-violet-800 bg-clip-text text-transparent">Personalized Learning</p>
                        </div>
                        <div className="">
                            <p className="bg-gradient-to-r from-yellow-500 via-green-500 to-indigo-600 bg-clip-text text-transparent">Holistic Wellbeing</p>
                        </div>
                        <div className="">
                            <p className="bg-gradient-to-r from-rose-500 via-amber-600 to-cyan-400 bg-clip-text text-transparent">Skill Development</p>
                        </div>
                        <div className="">
                            <p className="bg-gradient-to-r from-violet-700 via-violet-500 to-pink-400 bg-clip-text text-transparent">Community Support</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 pt-10">
                    <p className="text-3xl font-bold">🚀 Our Mission</p>
                    <div className="text-xl *:text-justify grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">
                        <div className='h-[100%] order-3 lg:order-1 overflow-hidden object-cover items-center p-1'>
                            <img className='w-[100%] lg:h-[260px] xl:h-[450px]' src="/assets/mission.jpg" alt="" />
                        </div>
                        <p className="text-xl order-1 lg:order-2 text-justify leading-8 xl:leading-9">At EduPulse Learning Hub, our mission is to bridge the gap between talent and opportunity by delivering personalized, holistic, and accessible learning experiences across academics, wellness, and skills development. 
                            We believe education is not just limited to classrooms—it extends to life skills, physical well-being, emotional strength, and community engagement.
                            <span className='lg:hidden xl:block xl:pt-2'> We envision a future where every learner, no matter their background, can unlock their full potential—and we are here to guide them on that journey, step by step.
                             Bringing education and wellness closer to every home—urban or rural, online or offline. Leveraging technology to create immersive, engaging, and outcome-driven learning environments.</span>
                        </p> 
                        <p className='order-2 lg:order-3 hidden lg:block lg:col-span-2 leading-8 xl:hidden'>We envision a future where every learner, no matter their background, can unlock their full potential—and we are here to guide them on that journey, step by step.
                             Bringing education and wellness closer to every home—urban or rural, online or offline. Leveraging technology to create immersive, engaging, and outcome-driven learning environments.
                        </p>    
                        
                    </div>
                </div>
                <div className="space-y-5 pt-10">
                    <p className="text-3xl font-bold">🔐 Why Families Trust Us</p>
                    <div className="text-xl *:text-justify grid grid-cols-1 lg:grid-cols-2 gap-10 leading-7 md:leading-9">
                        <div className="*:text-lg space-y-3 mx-auto *:text-gray-700">
                            <p className=""><span className="text-black">✔️ Verified Teachers & Coaches</span> – 100% background-checked and certified instructors.</p>
                            <p className=""><span className="text-black">✔️ Secure Enrollment System</span> – Data-protected signups and payment processing.</p>
                            <p className=""><span className="text-black">✔️ Flexible Learning Options</span> – Choose from online, offline, hybrid, weekend, and crash batches..</p>
                            <p className=""><span className="text-black">✔️ Community Rated </span> – 4.8★ average from 2,000+ reviews across programs.</p>
                        </div>
                        <div className='overflow-hidden object-cover p-1'>
                            <img className='w-[100%] lg:h-[260px]' src="/assets/trust.jpg" alt="" />
                        </div>
                    </div>
                </div>

                

                <Timeline/>

            </div>
            </div>
        </>
    )
} 