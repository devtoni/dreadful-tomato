import Finder from '../../components/Finder/Finder';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Movies() {
  return (
    <>
      <Header>
        <Header.Navigation />
      </Header>
      <Finder />
      <Footer />
    </>
  );
}

export default Movies;
