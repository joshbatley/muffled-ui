import { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { MuffledUI } from '../../utils';
import { Text } from '.';

function render(component: ReactNode) {
  return testRender(<MuffledUI>{component}</MuffledUI>);
}

describe('Text component', () => {
  describe('Text', () => {
    it('should render', () => {
      const { container } = render(<Text>Text</Text>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });
  });

  describe('TextMono', () => {
    it('should render', () => {
      const { container } = render(<Text mono>Text</Text>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });

    const { container } = render(<Text mono>Text</Text>);
    expect(container).toMatchSnapshot();
  });
});
