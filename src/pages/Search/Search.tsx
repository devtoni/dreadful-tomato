import { Button } from 'carbon-components-react';
import { Outlet } from 'react-router-dom';
import { ContentManagerProvider } from '../../context/ContentManagerContext';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import IconFilter from '../../assets/icon-filter.png';

function Search() {
  return (
    <>
      <ContentManagerProvider>
        <Header>
          <Header.Navigation>
            <Button>
              <img src={IconFilter} alt="Icon filter" />
              Filters
            </Button>
          </Header.Navigation>
        </Header>
        <Outlet />
        <Footer />
      </ContentManagerProvider>
    </>
  );
}

export default Search;
