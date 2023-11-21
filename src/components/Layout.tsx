
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import canada from '../assets/images/Canada.svg'
import { Link, Outlet } from 'react-router-dom';
import SearchInput from './SearchInput'
import JsonList from '../../CausesList.json'

const Layout = () => {

const options = JsonList.causes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onSelect = (selectedOption: string) => {
    
};

    return (
        <>
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 w-full h-[60px] flex justify-center items-center">
                <Link to="/"><h2 id="main-header" className="text-center text-[#ffffff] font-great-vibe text-2xl py-auto">Inspire, Impact, Ignite Change</h2></Link> 
            </div>
            <div className="h-[40px]">
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
            <SearchInput 
                options={options}
                onSelect={onSelect}
            />
            <Outlet/>
        </>
    )
}

export default Layout