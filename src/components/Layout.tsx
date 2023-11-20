
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import canada from '../assets/images/Canada.svg'
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 w-full h-[60px] flex justify-center items-center">
                <Link to="/"><h2 id="main-header" className="text-center text-[#ffffff] font-great-vibe text-2xl py-auto">Inspire, Impact, Ignite Change</h2></Link> 
            </div>
            <div className="border-b-[1px] border-[#000000]">
                <div className="flex justify-evenly items-center py-2">
                    <div>
                        <FontAwesomeIcon icon={faPhone} beat style={{ color: "#0c5fed", }} />
                        <span className="mx-2 font-sans text-[#00000095] text-sm">1-6477848960</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#dac90b", }} />
                        <span className="italic font-sans mx-2 text-sm">North York</span>
                    </div>

                    <div className="flex">
                        <img src={canada} alt="" style={{ width: '30px', height: 'auto' }} />
                        <span className="italic font-sans mx-2 text-sm">English, CAD</span>
                    </div>
                    <div className="">
                        <Link to="/favorite" target='_blank' className=" hover:opacity-70">
                            <FontAwesomeIcon icon={faHeartCircleCheck} size="xl" style={{color: "#f33c1b",}} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#fefcfc] mt-0 pt- h-[100px] flex items-center justify-center">
                <form className="flex-grow">
                    <div className="max-w-md mx-auto p-1 pr-0 flex items-center">
                        <input
                            type="text" placeholder="Find a charity..."
                            className="flex-1 appearance-none rounded-l shadow p-2 text-[#000000] leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button
                            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded-r"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout