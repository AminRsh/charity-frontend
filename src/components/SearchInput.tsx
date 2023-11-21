import { useState } from 'react';
import { SearchProps } from '../types/charity.types';
import { Link } from 'react-router-dom';
import { ListState } from '../types/charity.types';
import axios from 'axios';
import { API_ROUTES } from '../api/api';
import Search from '../pages/Search'

const SearchInput: React.FC<SearchProps> = ({ options, onSelect }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [lists, setLists] = useState<ListState[]>([])
    const maxOptionsToShow = 5;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);

        const filtered = options.filter(option =>
            option.toLowerCase().includes(value)
        );
        setFilteredOptions(filtered.slice(0, maxOptionsToShow));
        setShowDropdown(true);
    };

    const handleOptionClick = async (option: string) => {
        setInputValue(option);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(option);
            // console.log('Selected Option:', option);
            try {
                axios.get(`${API_ROUTES.BASE_URL}${API_ROUTES.SEARCH(option)}`)
                    .then(res => {
                        // console.log(res.data.nonprofits)
                        setLists(res.data.nonprofits)
                    })

            } catch (error) {
                console.error('Error sending data:', error);
            }
        }
    };

    return (
        <>
            <div className="relative ml-[37%]">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full md:w-1/3 p-2 pl-8 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Search"
                />

                {showDropdown && filteredOptions.length > 0 && (
                    <div className="absolute z-10 mt-1 w-full md:w-1/3 bg-white border border-gray-300 rounded-md shadow-md">
                        {filteredOptions.map((option, index) => (
                            <Link to="/search"
                                key={index}
                                className="block p-3 cursor-pointer hover:bg-gray-100 transition-colors"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Search
                lists={lists}
            />
        </>

    );
};

export default SearchInput;
