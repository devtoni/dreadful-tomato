import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { ContentManagerProvider } from '../../context/ContentManagerContext';

function Search() {
  return (
    <>
      <Header>
        <Header.Navigation />
      </Header>
      <ContentManagerProvider>
        <Outlet />
      </ContentManagerProvider>
      <Footer />
    </>
  );
}

export default Search;
