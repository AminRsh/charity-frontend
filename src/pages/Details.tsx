import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
import { API_ROUTES } from '../api/api';
import { Nonprofit, NonprofitTag } from '../types/charity.types';

const Details: React.FC = () => {

    const { slug } = useParams<{ slug: string }>()

    const [nonprofit, setNonprofit] = useState<Nonprofit>({
        name: '',
        descriptionLong: '',
        locationAddress: '',
        description: '',
        primarySlug: '',
        logoUrl: '',
        nteeCodeMeaning: {
            majorMeaning: '',
        },
        websiteUrl: '',
        coverImageUrl: '',
        profileUrl: '',
        slug: ''
    })
    const [nonprofitTags, setNonprofitTags] = useState<NonprofitTag>([])

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    
    const nonprofitTagsLenght = nonprofitTags.length

    useEffect(() => {

        if (slug) {
            axios
                .get(`${API_ROUTES.BASE_URL}${API_ROUTES.NONPROFIT(slug)}`)
                .then((res) => {
                    setNonprofit(res.data.data.nonprofit);
                    setNonprofitTags(res.data.data.nonprofitTags);
                })
                .catch((err) => {
                    console.error('Axios request error:', err);
                });
        } else {
            console.log('There is no slug');
        }
    }, [slug]);

    nonprofit.slug = slug || '';
    
    const handleFavoriteToggle = () => {
        
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]');

        
        const isAlreadyFavorite = favoritesFromStorage.some((fav: Nonprofit) => fav.primarySlug === nonprofit.primarySlug);

        Swal.fire({
            title: isAlreadyFavorite ? 'Remove from Favorites?' : 'Add to Favorites?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: isAlreadyFavorite ? 'Remove' : 'Add',
        }).then((result) => {
            if (result.isConfirmed) {
                if (isAlreadyFavorite) {
            
                    const updatedFavorites = favoritesFromStorage.filter((fav: Nonprofit) => fav.primarySlug !== nonprofit.primarySlug);
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                } else {
                    
                    const updatedFavorites = [...favoritesFromStorage, nonprofit];
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                }

                setIsFavorite(!isAlreadyFavorite);

                Swal.fire({
                    title: isAlreadyFavorite ? 'Removed!' : 'Added!',
                    icon: 'success',
                });
            }
        });
    };

    useEffect(() => {
        
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
        const isAlreadyFavorite = favoritesFromStorage.some((fav: Nonprofit) => fav.primarySlug === nonprofit.primarySlug);
        setIsFavorite(isAlreadyFavorite);
    }, [nonprofit.primarySlug]);

    return (
        <>
            <div className="mx-auto py-10 px-4 bg-gray-200 md:px-16 xl:px-20">
                <div className={nonprofit.logoUrl ? "flex items-center mb-8" : "mr-0"}>
                    {
                        nonprofit.logoUrl && <img className="w-14 h-14 rounded-full" src={nonprofit.logoUrl} alt="" />
                    }
                    <a href={nonprofit.websiteUrl} target="_blank" ><span className="ml-2 md:ml-4 text-xl md:text-2xl mb-4 md:m-8 pt-4 md:pt-8 hover:text-sky-700 ">{nonprofit.name}</span></a>
                </div>

                <p className="text-lg mb-4"><span className='text-red-600 text-xl'>Description :</span> {nonprofit.descriptionLong}</p>
                <p className=" text-md">{ }</p>

                <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-10 mb-16">
                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Goal :</span>
                    <span className=" text-lg">{nonprofit.description}</span>
                    <hr className="my-4 border-gray-300" />

                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Location Address :</span>
                    <span className=" text-lg">{nonprofit.locationAddress}</span>
                    <hr className="my-4 border-gray-300" />

                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Slug :</span>
                    <span className=" text-lg">{nonprofit.primarySlug}</span>
                    <hr className="my-4 border-gray-300" />

                    <span className=" text-red-600 font-semibold text-2xlg mr-2">Official Website :</span>
                    <span className=" text-lg">
                        <a href={nonprofit.websiteUrl} target="_blank"
                            className="text-blue-500 border-b border-blue-500 hover:text-blue-900
                            hover:border-blue-900">{nonprofit.websiteUrl}</a>
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
                            {typeof item.causeCategory === 'string' ? item.causeCategory.toLowerCase() : 'Invalid Cause Category'} &nbsp;
                        </span>
                    ))}
                    <hr className="my-4 border-gray-300" />

                </div>

                {
                    nonprofitTagsLenght !== 0 &&
                    <div style={{ width: '80%' }} className="min-h-[100px] mx-auto mt-12 mb-16 px-2 flex flex-wrap items-center justify-evenly rounded-lg">
                        {
                            nonprofitTags.map(item => item.tagImageUrl && (
                                <a href={item.tagUrl} className="mb-4" key={item.id} target='_blank'>
                                    <img
                                        src={item.tagImageUrl}
                                        width={70}
                                        height={80}
                                        data-tooltip-target="tooltip-company"
                                        className="cursor-pointer hover:opacity-80"
                                    />
                                </a>
                            ))
                        }
                    </div>
                }

                <div className="my-4">
                    <h2 className="text-center text-2xl md:text-4x lg:text-5xl text-red-400">{nonprofit && nonprofit.nteeCodeMeaning && nonprofit.nteeCodeMeaning.majorMeaning}</h2>
                    <a href={nonprofit.websiteUrl} target="_blank" ><img src={nonprofit.coverImageUrl}
                        className="mx-auto my-12 rounded-lg  hover:opacity-90 shadow-2xl shadow-slate-800" /></a>
                </div>

                <div className="mt-[100px]">

                    <button
                        onClick={handleFavoriteToggle}
                        className={isFavorite ? "w-[40%] mb-4 block  mx-auto bg-red-600 text-white hover:opacity-80  font-bold py-2 px-4 rounded-lg shadow-lg"
                                : 'w-[40%] mb-4 block  mx-auto bg-black text-white hover:opacity-80  font-bold py-2 px-4 rounded-lg shadow-lg'
                    }
                    >
                        {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
                    </button>

                    <a href={nonprofit.profileUrl} target='_blank'>
                        <button
                            className="w-[40%] block mx-auto bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                            Check in Every.org
                        </button>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Details