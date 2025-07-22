import { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { MuffledUI } from '../../utils';
import { Typography } from '.';

function render(component: ReactNode) {
  return testRender(<MuffledUI>{component}</MuffledUI>);
}

describe('Typography component', () => {
  describe('Typography', () => {
    it('should render', () => {
      const { container } = render(<Typography>Text</Typography>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });
  });

  describe('TypographyMono', () => {
    it('should render', () => {
      const { container } = render(<Typography mono>Text</Typography>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });

    const { container } = render(<Typography mono>Text</Typography>);
    expect(container).toMatchSnapshot();
  });
});
