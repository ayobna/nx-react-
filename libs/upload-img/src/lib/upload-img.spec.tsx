import { render } from '@testing-library/react';

import UploadImg from './upload-img';

describe('UploadImg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadImg />);
    expect(baseElement).toBeTruthy();
  });
});
