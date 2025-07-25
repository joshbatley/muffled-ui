import { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { MuffledUI } from '../../utils';
import { CircleLoader } from '.';

function render(Comp: ReactNode) {
  return testRender(<MuffledUI>{Comp}</MuffledUI>);
}

describe('Loader', () => {
  it('it renders', () => {
    const { container } = render(<CircleLoader />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('accepts height and width', () => {
    const { container } = render(<CircleLoader width={16} height={14} />);
    expect(container.firstChild).toHaveAttribute('height', '14');
    expect(container.firstChild).toHaveAttribute('width', '16');
  });
});
