import TechNovalogo from '../assets/Images/TechNova.png'
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav className="bg-gradient-to-r from-blue-800 to-purple-800 flex items-center justify-around h-16 text-indigo-200 border-none shadow-md">
                
                <div className="flex items-center justify-evenly">

                    <div className="justify-center item-center  h-16 w-16 md:hidden ">
                        <img src={TechNovalogo} className='rounded-full'/>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex gap-4">

                            <li className="hover:text-indigo-400">
                            {' '}
                            <Link to="/"><p>Home {' '}</p></Link>
                            </li>

                            <li className="hover:text-indigo-400">
                            {' '}
                            <Link to="/Services"><p>Services {' '}</p></Link>
                            </li>

                            <li className="hover:text-indigo-400">
                            {' '}
                            <Link to="/AboutUs"><p>About Us {' '}</p></Link>
                            </li>

                            <li className="hover:text-indigo-400">
                            {' '}
                            <Link to="/Contact"><p>Contact Us {' '}</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;