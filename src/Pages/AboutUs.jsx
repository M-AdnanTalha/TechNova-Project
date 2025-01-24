import Layout from "../Layouts/Layout";
import bossImg from '../assets/Images/boss.jpg'
import hod from '../assets/Images/hod.jpg'
import techLead from '../assets/Images/techLead.jpg'

function AboutUs() {
  return (
    <Layout>



        <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400">
       
       <div className='w-4/6 ml-4 text-center md:w-2/6 md:text-left'>

           <div className='flex justify-center text-6xl md:justify-normal'>
               <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text md:text-left'>
                    Get To Know Us !!
               </h1>
           </div>

           <p className='text-lg text-indigo-800 pb-5 md:pt-12 md:text-2xl'>
           We are a company of 50+ valuable family members who crave to give you the best experience on digitalizing your beloved company. Below are the some of the greatest minds among us .
           </p>
       </div>

       <div className="google-map-code pb-8 md:pl-40">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3321782432827!2d-122.008972!3d37.33464379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1737749412003!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
        </section>

        <section className="flex flex-col items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400 md:justify-normal">
            <div className="md:pl-12">
                <img src={bossImg}
                    width={350}
                    height={100}
                />
            </div>

            
                <div className='flex justify-center text-6xl md:justify-normal md:flex-col pl-4 md:w-1/2 md:pl-48'>
                        <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                        Our Founder
                        </h1>

                        <p className="text-lg text-indigo-800 pl-8 md:pl-0">
                        Our Founder,Howard Stark, built this company from the ground up with a vision to innovate and disrupt the tech industry. A graduate of the prestigious University of Wakanda in 2018, he went on to pursue a Masters from the Avengers Institute of Development, where he had the unique opportunity to learn from the world-renowned genius, playboy, philanthropist, and tech icon, Mr. Anthony Stark. Armed with a blend of cutting-edge knowledge and entrepreneurial spirit, he launched this company to tackle challenges with groundbreaking solutions, and today, under his leadership, we continue to push the boundaries of innovation and excellence.
                        </p>
                </div>

                
        </section>

        <section className="pt-12 flex flex-col items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400 md:justify-normal">
            <div className="md:pl-12">
                <img src={hod}
                    width={350}
                    height={100}
                />
            </div>

            
                <div className='flex justify-center text-6xl md:justify-normal md:flex-col pl-4 md:w-1/2 md:pl-48'>
                        <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                        Head Of Management
                        </h1>

                        <p className="text-lg text-indigo-800 pl-8 md:pl-0">
                        Anas Abidi is a dynamic Head of Management with over 10 years of experience in overseeing operations and leading teams across diverse industries. With a strong background in strategic planning, project management, and organizational development, Jane excels in driving business growth, optimizing workflows, and fostering a high-performance culture. She has a proven track record of aligning team objectives with company goals, ensuring seamless communication between departments, and implementing effective management practices that deliver measurable results. Jane is passionate about mentoring future leaders, cultivating innovation, and steering companies through complex challenges with a focus on sustainability and long-term success.
                        </p>
                </div>

                
        </section>

        <section className="pt-12 flex flex-col items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400 md:justify-normal">
            <div className="md:pl-12">
                <img src={techLead}
                    width={350}
                    height={100}
                />
            </div>

            
                <div className='flex justify-center text-6xl md:justify-normal md:flex-col pl-4 md:w-1/2 md:pl-48'>
                        <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                        Tech Lead
                        </h1>

                        <p className="text-lg text-indigo-800 pl-8 md:pl-0">
                        Arsh Alam is an experienced Tech Lead with a passion for driving innovation and leading cross-functional teams to deliver high-quality software solutions. With over 8 years of experience in the tech industry, John has honed his expertise in full-stack development, architecture design, and agile methodologies. He excels in creating scalable and efficient systems, fostering collaboration among developers, and ensuring projects are delivered on time and within scope. As a proactive problem-solver, John continuously strives to improve processes, mentor junior developers, and stay on top of emerging technologies to keep his teams ahead of the curve.
                        </p>
                </div>

                
        </section>
  
       
    </Layout>
  );
}

export default AboutUs;


