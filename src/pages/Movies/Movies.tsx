import Finder from '../../components/Finder/Finder';
import { useContentManagerContext } from '../../context/ContentManagerContext';

function Movies() {
  const { content } = useContentManagerContext();

  console.log({ contentFromMovies: content });

  return (
    <>
      <Finder />
    </>
  );
}

export default Movies;
