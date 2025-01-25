import Layout from "../Layouts/Layout"
import AIML from "../assets/Images/AIML.png"
import cloud from "../assets/Images/cloud.png"
import web from "../assets/Images/web.png"
import serviceHero from "../assets/Images/serviceHero.png"
import { Link } from "react-router-dom"

function Services(){
    return(
        <Layout>
             <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400">
                   
                   <div className='w-4/6 ml-4 text-center md:w-2/6 md:text-left'>
            
                       <div className='flex justify-center text-6xl md:justify-normal'>
                           <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text md:text-left'>
                                Our Services
                           </h1>
                       </div>
            
                       <p className='text-lg text-indigo-800 pb-5 md:pt-12 md:text-2xl'>
                       At <b>TechNova</b>, we deliver top-tier AI/ML, Cloud, and Web development services tailored to empower your business. With a commitment to innovation, quality, and the best pricing in the market, we ensure you achieve exceptional results without compromise.
                       </p>

                       <Link to="/Contact">
                            <button className="px-4 py-2 text-purple-300 bg-gradient-to-r from-blue-800 to-purple-800  hover:from-blue-500 hover:to-purple-500  rounded">
                                Book Our Services !!!
                            </button>
                       </Link>
                   </div>
            
                   <div className="pb-8 md:pl-40">
                        <img src={serviceHero}
                            alt="Our Services Illustration"
                            width={450}
                            height={200}
                        />
                   </div>
                    </section>
            
                    <section className="flex flex-col items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400 md:justify-normal">
                        <div className="md:pl-12">
                            <img src={cloud}
                                width={350}
                                height={100}
                            />
                        </div>
            
                        
                            <div className='flex justify-center text-6xl md:justify-normal md:flex-col pl-4 md:w-1/2 md:pl-48'>
                                    <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                                    Cloud Services
                                    </h1>
            
                                    <p className="text-lg text-indigo-800 pl-8 md:pl-0">
                                    Our Cloud Services are designed to transform the way your business operates, providing secure, scalable, and efficient solutions tailored to your needs. Whether you're migrating to the cloud, optimizing your existing infrastructure, or building a hybrid cloud strategy, we deliver cutting-edge solutions that ensure agility and reliability. With a focus on cost-efficiency and high performance, we help you unlock the full potential of cloud technology, enabling you to innovate faster, streamline operations, and achieve unparalleled growth.
                                    </p>
                                    
                            </div>
            
                            
                    </section>
            
                    <section className="pt-12 flex flex-col items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400 md:justify-normal">
                        <div className="md:pl-12">
                            <img src={AIML}
                                width={350}
                                height={100}
                            />
                        </div>
            
                        
                            <div className='flex justify-center text-6xl md:justify-normal md:flex-col pl-4 md:w-1/2 md:pl-48'>
                                    <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                                    AI/ML Solutions
                                    </h1>
            
                                    <p className="text-lg text-indigo-800 pl-8 md:pl-0">
                                    Our AI/ML services empower your business with data-driven insights and intelligent automation. From predictive analytics to advanced machine learning models, we design and deploy solutions that optimize processes, enhance decision-making, and deliver personalized customer experiences. With expertise in cutting-edge AI technologies, we help you unlock the full potential of your data, enabling innovation and giving you a competitive edge in today’s fast-paced market.
                                    </p>
                            </div>
            
                            
                    </section>
            
                    <section className="pt-12 flex flex-col items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400 md:justify-normal">
                        <div className="md:pl-12">
                            <img src={web}
                                width={350}
                                height={100}
                            />
                        </div>
            
                        
                            <div className='flex justify-center text-6xl md:justify-normal md:flex-col pl-4 md:w-1/2 md:pl-48'>
                                    <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                                    Web Services
                                    </h1>
            
                                    <p className="text-lg text-indigo-800 pl-8 md:pl-0">
                                    Our Web Services are crafted to help your business thrive in the digital world. From responsive websites to dynamic web applications, we specialize in creating user-centric solutions that are visually stunning, highly functional, and optimized for performance. Leveraging modern frameworks and best practices, we ensure your web presence reflects your brand's identity and meets the evolving needs of your customers. Trust us to deliver seamless, scalable, and secure web solutions that drive engagement and growth.
                                    </p>
                            </div>
                            
                    </section>
        </Layout>
    )
}

export default Services