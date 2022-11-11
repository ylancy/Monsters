import { ChangeEventHandler } from 'react';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    searchHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ className, placeholder, searchHandler }: SearchBoxProps) => {
    return (
        <input
            className={className}
            type='search'
            placeholder={placeholder}
            onChange={searchHandler}
        />
    )

}

export default SearchBox;