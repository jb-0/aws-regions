import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Map from './Map';


describe('Map component test', () => {
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

  it('VectorMap is rendered once when the map component is called', () => {
    const setClickedRegion = jest.fn();
    const setClickedCountry = jest.fn();

    act(() => {
      render(
        <Map
          clickedCountry={undefined}
          setClickedCountry={setClickedCountry}
          clickedRegion={undefined}
          setClickedRegion={setClickedRegion}
        />,
        container
      );
    });
    
    expect(screen.queryAllByLabelText('World Low Res').length).toBe(1)
  });
});
