import { render, screen, within } from '../../../../test/test-utils';

import Navigation from '../Navigation';

describe('Navigation', () => {
  it('should display the navigation items', () => {
    render(<Navigation />);

    const list = screen.getByRole('list', {
      name: /navigation list/i
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items).toHaveLength(2);
  });
});
