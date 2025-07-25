import { render as testRender } from '@testing-library/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { MuffledUI } from '../../utils';
import { Input } from '.';

function render(Comp: any) {
  return testRender(<MuffledUI>{Comp}</MuffledUI>);
}

describe('Input test', () => {
  it('should render', () => {
    const { container } = render(<Input />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should render the Prefix Icon', () => {
    const { getByTestId } = render(<Input prefixMarkIcon={<LockClosedIcon data-testid="testingPrefix" />} />);
    expect(getByTestId('testingPrefix')).toBeInTheDocument();
  });
  it('should render the Suffix Icon', () => {
    const { getByTestId } = render(<Input suffixMarkIcon={<LockClosedIcon data-testid="testingSuffix" />} />);
    expect(getByTestId('testingSuffix')).toBeInTheDocument();
  });
});
