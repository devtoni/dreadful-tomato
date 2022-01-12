import {
  ContentManagerProviderProps,
  useContentManagerContext,
  ContentManagerProvider
} from '../ContentManagerContext';
import { renderHook } from '@testing-library/react-hooks';
import fetchContent from '../../services/fetchContent';
import { ProgramTypeContent } from '../../types/MediaContent';
import { act } from '@testing-library/react';

jest.mock('../../services/fetchContent.ts');

describe('ContentManagerContext', () => {
  it('should store the filteredContent based on program type', async () => {
    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(fakeContentData);
    const { result, waitForNextUpdate } = setup();

    await act(async () => {
      await waitForNextUpdate();

      await result.current.updateFilteredContent({ programType: 'movie' });
    });

    expect(result.current.filteredContent).toEqual({ total: 1, entries: [aMovie] });
  });

  it('should store the filteredContent based on program type and title', async () => {
    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(fakeContentData);
    const { result, waitForNextUpdate } = setup();

    await act(async () => {
      await waitForNextUpdate();

      await result.current.updateFilteredContent({ programType: 'movie', searchByTitle: 'Danny' });
    });

    expect(result.current.filteredContent).toEqual({ total: 1, entries: [aMovie] });
  });

  it('should store the filteredContent based on program type, title and release year', async () => {
    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(fakeContentData);
    const { result, waitForNextUpdate } = setup();

    await act(async () => {
      await waitForNextUpdate();

      await result.current.updateFilteredContent({
        programType: 'movie',
        searchByTitle: 'Danny',
        releaseYear: 2014
      });
    });

    expect(result.current.filteredContent).toEqual({ total: 1, entries: [aMovie] });
  });

  it('should store the filteredContent based on program type, title, release year and page number', async () => {
    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(fakeContentData);
    const { result, waitForNextUpdate } = setup();

    await act(async () => {
      await waitForNextUpdate();

      await result.current.updateFilteredContent({
        programType: 'movie',
        searchByTitle: 'Danny',
        releaseYear: 2014,
        pageNumber: 1
      });
    });

    expect(result.current.filteredContent).toEqual({ total: 1, entries: [aMovie] });
  });

  it('should return the pagination based on search', async () => {
    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(fakeContentData);
    const { result, waitForNextUpdate } = setup();

    await act(async () => {
      await waitForNextUpdate();

      await result.current.updateFilteredContent({
        programType: 'movie',
        searchByTitle: 'Danny',
        releaseYear: 2014,
        pageNumber: 1
      });
    });

    expect(result.current.pagination).toEqual({ currentPage: 1, itemsPerPage: 10, totalItems: 1 });
  });

  it('should return the loading state of initial fetch content', async () => {
    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(fakeContentData);
    const { result, waitForNextUpdate } = setup();

    await waitForNextUpdate();

    expect(result.current.contentLoaded).toBe(true);
  });
});

function setup() {
  const wrapper = ({ children }: ContentManagerProviderProps) => (
    <ContentManagerProvider>{children}</ContentManagerProvider>
  );
  const result = renderHook(() => useContentManagerContext(), { wrapper });

  return result;
}

const aSerie = {
  title: 'The Wrong Mans',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  programType: 'series' as ProgramTypeContent,
  images: {
    'Poster Art': {
      url: 'https://streamcoimg-a.akamaihd.net/000/124/31/12431-PosterArt-f7d91329c70a7fa206e838423caa31bd.jpg',
      width: 1000,
      height: 1500
    }
  },
  releaseYear: 2013
};

const aMovie = {
  title: 'Danny Collins',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  programType: 'movie' as ProgramTypeContent,
  images: {
    'Poster Art': {
      url: 'https://streamcoimg-a.akamaihd.net/000/999/667/999667-PosterArt-65e6f88ede8bdcdad6d4d4f1549936ee.jpg',
      width: 1000,
      height: 1500
    }
  },
  releaseYear: 2014
};

const fakeContentData = {
  total: 2,
  entries: [aSerie, aMovie]
};
