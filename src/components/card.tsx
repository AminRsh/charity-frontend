import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { CardProps } from '../types/charity.types';
import CoverNotFound from '../assets/images/coverNotFound.png'
import CoverSimple from '../assets/images/coverSimple.png'
import { Link } from 'react-router-dom';



const Card: React.FC<CardProps> = ({ cover, logo, name, slug, location }) => {
    
    return (

        <Link to={`/details/${slug}`} target='_blank'  className="w-full overflow-hidden bg-white rounded-lg shadow-2xl cursor-pointer ">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover rounded-t-lg hover:opacity-80"
                    src={cover ? cover : logo ? CoverSimple : CoverNotFound}
                    alt="Company Cover"
                />
                {logo && (<div className="absolute top-[21%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                        <img
                            className="w-full h-full object-cover opacity-80 hover:opacity-100"
                            src={logo}
                            alt="Company Logo"
                        />
                    </div>
                </div>)}
            </div>
            <div className="px-6 py-8">
                <div className="min-h-[60px]  mb-4 pb-2 border-b-2 border-gray-100">
                    <p className="text-center font-bold text-xl">{name}</p>
                </div>
                {
                    slug && (
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faComment} size="lg" style={{ color: "#246deb", }} />
                            <p className="text-gray-700 text-base mb-2 ml-[6px] font-serif">{slug}</p>
                        </div>
                    )
                }
                {
                    location && (
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faLocationDot} size="lg" style={{ color: "#f9cf01", }} />
                            <p className="text-gray-700 text-base ml-[10px] font-mono">{location}</p>
                        </div>
                    )
                }
            </div>
        </Link>
    )
}

export default Card