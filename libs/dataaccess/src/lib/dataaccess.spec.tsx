import { render } from '@testing-library/react';

import Dataaccess from './dataaccess';

describe('Dataaccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dataaccess />);
    expect(baseElement).toBeTruthy();
  });
});
