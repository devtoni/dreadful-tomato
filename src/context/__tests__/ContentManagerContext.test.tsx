import {
  ContentManagerProviderProps,
  useContentManagerContext,
  ContentManagerProvider
} from '../ContentManagerContext';
import { renderHook } from '@testing-library/react-hooks';
import fetchContent from '../../services/fetchContent';

jest.mock('../../services/fetchContent.ts');

describe('ContentManagerContext', () => {
  it('should store the content when it first render', async () => {
    const mockData = { total: 100, entries: [] };

    (fetchContent as jest.MockedFunction<typeof fetchContent>).mockResolvedValue(mockData);
    const { result, waitForNextUpdate } = setup();

    await waitForNextUpdate();

    expect(result.current.content).toEqual(mockData);
  });
});

function setup() {
  const wrapper = ({ children }: ContentManagerProviderProps) => (
    <ContentManagerProvider>{children}</ContentManagerProvider>
  );
  const result = renderHook(() => useContentManagerContext(), { wrapper });

  return result;
}
