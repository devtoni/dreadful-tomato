import { ChangeEvent, useState } from 'react';
import { Search } from 'carbon-components-react';
import DateYearPicker from '../DateYearPicker/DateYearPicker';

import 'carbon-components/scss/components/search/_search.scss';
import './finder.scss';


type Props = {
  handleSearch: (title: string, releaseYear: number | null) => void;
}

function Finder({ handleSearch }: Props) {
  const [searchByTitle, setSearchByTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState<number | null>(null);

  const handleSearchByTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const searchByTitle = event.target.value;

    setSearchByTitle(searchByTitle);
    handleSearch(searchByTitle, releaseYear);
  }

  const handleSearchByReleaseYear = (releaseYear: number | null) => {
    setReleaseYear(releaseYear);
    handleSearch(searchByTitle, releaseYear);
  }

  return (
    <div className="finder">
      <div className="bx--grid">
        <div className="bx--row">
          <Search
            onChange={handleSearchByTitle}
            value={searchByTitle}
            size="sm"
            className="finder__search"
            labelText="search"
            placeholder="Search"
          />

          <DateYearPicker onChange={handleSearchByReleaseYear} selected={releaseYear} />
        </div>
      </div>
    </div>
  );
}

export default Finder;
