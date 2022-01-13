import Finder from '../../components/Finder/Finder';
import { useContentManagerContext } from '../../context/ContentManagerContext';
import GridContent from '../../components/GridContent/GridContent';

function Movies() {
  const { updateFilteredContent, contentLoaded } = useContentManagerContext();

  return (
    <>
      <Finder
        handleSearch={(searchByTitle, releaseYear) =>
          updateFilteredContent({ programType: 'movie', searchByTitle, releaseYear })
        }
      />
      <main className="bx--grid">{contentLoaded && <GridContent programType="movie" title="Popular Movies" />}</main>
    </>
  );
}

export default Movies;
