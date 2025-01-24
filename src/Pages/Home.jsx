import heroImage from '../assets/Images/bgImage.png'
import belowHero from '../assets/Images/belowHero.png'

function Home(){
    return(
        <>
            <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md-gap-7 bg-gradient-to-r from-blue-400 to-purple-400">

                <div className='w-4/6 ml-4 text-center md:w-2/6 md:text-left'>

                    <div className='flex justify-center text-6xl md:justify-normal'>
                        <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                        Where Ideas Evolve into Tech Innovations
                        </h1>
                    </div>

                    <p className='text-lg text-indigo-800 pb-5'>
                        TechNova is one of the largest Tech Service provider in the world
                    </p>

                    <button className='px-4 py-2 text-purple-300 bg-gradient-to-r from-blue-800 to-purple-800  hover:from-blue-500 to-purple-500  rounded'>
                        Learn More...
                    </button>
                </div>

                <div>
                    <img 
                        src={heroImage}
                        alt="BGImage"
                        width={950}
                        height={950}
                    />
                </div>
            </section>

            <section className='py-4 mt-6 bg-gradient-to-r from-blue-400 to-purple-400'>
                <div className='container flex flex-col md:flex-row'>
                    <div className='flex flex-col items-center justify-center rounded-lg lg:w-1/2'>
                        <img src={belowHero}
                            alt='Image of Tech Tree'
                            height={450}
                            width={450}
                        />
                    </div>
                    <div className='flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left'>
                    <p className='text-3xl pb-20 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>
                        Get your business Digitalized
                        </p>
                        <p className=' text-bold text-lg text-indigo-800 pb-16'>
                        We will help you get the immense growth you deserve.
                        </p>
                        <p className='text-bold text-lg text-indigo-800 pb-16'>
                        Reach the International market.
                        </p>
                        <p className='text-bold text-lg text-indigo-800 pb-16'>
                        Best Return of Investment guaranteed.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home