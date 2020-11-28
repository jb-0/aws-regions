import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PopUp from './PopUp';

describe('Pop up component tests', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders with or without a name', () => {
    act(() => {
      render(
        <PopUp
          mousePosition={{x: 10, y: 10}}
          clickedCountry={{code: 'ca', name:'Canada'}}
        />,
        container
      );
    });
    expect(container.textContent).toContain('Canada');
  });
});
