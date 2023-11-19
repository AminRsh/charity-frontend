import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_ROUTES } from '../api/api';
import { Nonprofit, NonprofitTag } from '../types/charity.types';


const Details: React.FC = () => {


    const { id } = useParams()

    const [nonprofit, setNonprofit] = useState<Nonprofit>({})
    const [nonprofitTags, setNonprofitTags] = useState<NonprofitTag>([])
    const nonprofitTagsLenght = nonprofitTags.length
    // console.log(nonprofitTags);

    useEffect(() => {
        if (id) {
            axios.get(`${API_ROUTES.BASE_URL}${API_ROUTES.NONPROFIT(id)}`)
                .then(res => {
                    setNonprofit(res.data.data.nonprofit)
                    setNonprofitTags(res.data.data.nonprofitTags)
                })
                .catch(err => {
                    console.error('Axios request error:', err);
                });
        } else {
            console.error('Nonprofit ID is undefined');
        }
    }, [id]);


    return (
        <>
            <div className="mx-auto py-10 px-40 bg-gray-200">
                <div className={nonprofit.logoUrl ? "flex items-center" : "mr-0"}>
                    {
                        nonprofit.logoUrl && <img className="w-14 h-14 rounded-full" src={nonprofit.logoUrl} alt="" />
                    }
                    <a href={nonprofit.websiteUrl} target="_blank" ><span className="ml-[10px] text-2xl mb-8 pt-8 hover:text-sky-700 inline-block">{nonprofit.name}</span></a>
                </div>

                <p className="text-lg mb-4"><span className='text-red-600 text-xl'>Description :</span> {nonprofit.descriptionLong}</p>
                <p className=" text-md">{ }</p>

                <div className="w-3/4 mx-auto my-8">
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Goal :</span><span className=" text-lg">{nonprofit.description}</span>
                    <hr className="my-4 border-gray-300" />
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Location Address :</span><span className=" text-lg">{nonprofit.locationAddress}</span>
                    <hr className="my-4 border-gray-300" />
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Slug :</span><span className=" text-lg">{nonprofit.primarySlug}</span>
                    <hr className="my-4 border-gray-300" />
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Official Website :</span><span className=" text-lg">
                        <a href={nonprofit.websiteUrl} target="_blank"
                            className="text-blue-500 border-b border-blue-500 hover:text-blue-900 hover:border-blue-900">{nonprofit.websiteUrl}</a>
                    </span>
                    <hr className="my-4 border-gray-300" />
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Tags :</span>

                    {nonprofitTags.map(tag => (
                        <span className=" text-lg" key={tag.id}>
                            #{tag.tagName} &nbsp;
                        </span>
                    ))}
                    <hr className="my-4 border-gray-300" />
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Titles :</span>

                    {nonprofitTags.map(item => (
                        <span className=" text-lg" key={item.id}>
                            {item.causeCategory} &nbsp;
                        </span>
                    ))}
                    <hr className="my-4 border-gray-300" />
                </div>


                {
                    nonprofitTagsLenght !== 0 && 
                    <div style={nonprofitTagsLenght > 3 ? { width: '60%' } : { width: '25%' }} 
                    className=" bg-black/60 backdrop-blur-xl min-h-[80px] mx-auto mt-12 mb-16 py-[2px] px-2 flex items-center justify-evenly rounded-lg">
                    {
                        nonprofitTags.map(item =>
                            item.tagImageUrl &&
                                (<a href={item.tagUrl} className="" key={item.id} target='_blank'>
                                    <img
                                        src={item.tagImageUrl}
                                        width={70}
                                        height={80}
                                        data-tooltip-target="tooltip-company"
                                        className="cursor-pointer hover:opacity-80"
                                    />
                                </a>)
                        )
                    }
                </div>
                }
                
                <div className="my-4">
                    <h2 className="text-center text-[40px] text-red-400">{nonprofit && nonprofit.nteeCodeMeaning && nonprofit.nteeCodeMeaning.majorMeaning}</h2>
                    <a href={nonprofit.websiteUrl} target="_blank" ><img src={nonprofit.coverImageUrl}
                        className="mx-auto my-12 rounded-lg  hover:opacity-90 shadow-2xl shadow-slate-800" /></a>
                </div>

                <div className="mt-[100px]">
                    <a href=""><button className="w-[40%] mb-4 block mx-auto bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                        Add to favorite</button></a>
                    <a href={nonprofit.profileUrl} target='_blank'><button className="w-[40%] block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                        Check in Every.org</button></a>
                </div>
            </div>

        </>
    )
}

export default Details