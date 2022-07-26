import { BrowserRouter, Link } from 'react-router-dom'
import Logo from '../../assets/logo/Gates.svg'

export default function Navbar(){
    return (
        <BrowserRouter>
        <div>
            <nav className="container mx-auto flex items-center my-2 py-2">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="flex-1"></div>
                <div>
                    <ul className='flex gap-6 items-center text-sm'>
                        <li className=' px-4 py-1'><Link to="/">Home</Link></li>
                        <li className=' px-4 py-1'><Link to="/blog">Blog</Link></li>
                        <li className='text-white bg-black rounded px-4 py-1'><Link to="/signup">Sign up</Link></li>
                        <li className=' px-4 py-1'><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        </BrowserRouter>
    )
}