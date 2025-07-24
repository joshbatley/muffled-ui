import { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { MuffledUI } from '../../utils';
import { Title } from '.';

function render(component: ReactNode) {
  return testRender(<MuffledUI>{component}</MuffledUI>);
}


describe('Title component', () => {
  it('should render', () => {
    const { container } = render(<Title>Title</Title>);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(container.firstChild).toHaveTextContent('Title');
  });
});
