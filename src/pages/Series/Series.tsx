import Finder from '../../components/Finder/Finder';
import GridContent from '../../components/GridContent/GridContent';
import { useContentManagerContext } from '../../context/ContentManagerContext';

function Series() {
  const { updateFilteredContent, contentLoaded } = useContentManagerContext();

  return (
    <>
      <Finder
        handleSearch={(searchByTitle, releaseYear) =>
          updateFilteredContent({ programType: 'series', searchByTitle, releaseYear })
        }
      />
      <main className="bx--grid">{contentLoaded && <GridContent programType="series" title="Popular Series" />}</main>
    </>
  );
}

export default Series;
