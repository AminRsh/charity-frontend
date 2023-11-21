import { Nonprofit } from '../types/charity.types';
import Card from '../components/Card';


const Favorites: React.FC = () => {
    
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    return (
        <div className="mx-auto py-10 px-4 bg-gray-200 md:px-16 xl:px-20">
            <h1 className="text-2xl font-bold mb-8">Favorite Charities</h1>

            {favoritesFromStorage.length === 0 ? (
                <div className="w-1/3 bg-red-100 border border-red-500 text-red-800 px-4 py-2 rounded-md focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200">
                    <p className="">No favorite charities found.</p>
                </div>
                
            ) : (
                <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] pb-[100px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {favoritesFromStorage.map((favorite: Nonprofit) => (
                                <Card
                                key={favorite.slug}
                                cover={favorite.coverImageUrl}
                                logo={favorite.logoUrl}
                                name={favorite.name}
                                slug={favorite.slug}
                                // location={favorite.location}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Favorites;
