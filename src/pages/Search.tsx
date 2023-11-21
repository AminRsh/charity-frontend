import Card from "../components/Card"
import { ListState } from "../types/charity.types";

interface SearchProps {
    lists: ListState[]; 
  }

const Search: React.FC<SearchProps> = ({ lists }) => {
    return (
        <div className="mx-[5%] mt-[20px] md:mx-[8%] lg:mx-[10%] pb-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {lists ?
                    lists.map((item) => (
                        <Card
                            key={item.slug}
                            cover={item.coverImageUrl}
                            logo={item.logoUrl}
                            name={item.name}
                            slug={item.slug}
                            location={item.location}
                        />
                    )) : (
                        <div className="mt-[40px]">
                            <p className="text-base md:text-lg lg:text-xl font-serif text-red-500">
                                {/* Sorry. Something went wrong */}
                            </p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Search