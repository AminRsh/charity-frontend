import notFound from "../assets/images/404.svg"
import {Link} from "react-router-dom"


const NotFound: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500">
      <div className="pb-[150px]">
        <div className="mx-[200px] px-4">
          <div className="text-center py-[65px] relative">
            <img src={notFound} className="w-[50%] mx-auto" alt="notFound" />
            <h3 className="text-[30px] font-bold mt-[50px] text-[#000000]">Oops!!! <br /> It seems you've taken a wrong turn</h3>
            <p className="mt-[60px] mb-[60px] text-[#000000]">Don't worry, we're here to help! The page you're looking for may have been abducted by aliens, or it might be on vacation.</p>
            <Link to="/" className="mt-[40px] bg-[#000000cc] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound