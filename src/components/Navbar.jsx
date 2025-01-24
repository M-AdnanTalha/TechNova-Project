import TechNovalogo from '../assets/Images/TechNova.png'
function Navbar(){
    return(
        <nav className="bg-gradient-to-r from-blue-800 to-purple-800 flex items-center justify-around h-16 text-indigo-200 border-none shadow-md">
                
                <div className="flex items-center justify-center">
                    <div className="justify-center item-center  h-16 w-16 ">
                        <img src={TechNovalogo} className='rounded-full'/>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex gap-4">

                            <li className="hover:text-indigo-400">
                            {' '}
                            <p>Home {' '}</p>
                            </li>

                            <li className="hover:text-indigo-400">
                            {' '}
                            <p>Services {' '}</p>
                            </li>

                            <li className="hover:text-indigo-400">
                            {' '}
                            <p>About Us {' '}</p>
                            </li>

                            <li className="hover:text-indigo-400">
                            {' '}
                            <p>Contact Us {' '}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;