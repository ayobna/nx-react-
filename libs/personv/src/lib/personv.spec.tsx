import { render } from '@testing-library/react';

import Personv from './personv';

describe('Personv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Personv />);
    expect(baseElement).toBeTruthy();
  });
});
