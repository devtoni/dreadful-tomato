import { useState } from 'react';
import { Search } from 'carbon-components-react';
import DateYearPicker from '../DateYearPicker/DateYearPicker';

import 'carbon-components/scss/components/search/_search.scss';
import './finder.scss';

function Finder() {
  const [searchByTitle, setSearchByTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState<Date | null>(null);

  return (
    <div className="finder">
      <div className="bx--grid">
        <div className="bx--row">
          <Search
            onChange={(event) => setSearchByTitle(event.target.value)}
            value={searchByTitle}
            size="sm"
            className="finder__search"
            labelText="search"
            placeholder="Search"
          />

          <DateYearPicker onChange={(date) => setReleaseYear(date)} selected={releaseYear} />
        </div>
      </div>
    </div>
  );
}

export default Finder;
