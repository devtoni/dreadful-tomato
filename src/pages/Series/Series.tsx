import Finder from '../../components/Finder/Finder';
import { useContentManagerContext } from '../../context/ContentManagerContext';

function Series() {
  const { content } = useContentManagerContext();

  console.log({ contentFromSeries: content })
  return (
    <>
      <Finder />
      
    </>
  );
}

export default Series;
