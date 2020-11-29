import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';
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

  it('clicking a country opens a PopUp container with the countries regions', async () => {
    const setClickedRegion = jest.fn();
    const setClickedCountry = jest.fn();

    // Render component with Canada as the clicked country, as there has been no click event the
    // popup will not be displayed
    act(() => {
      render(
        <Map
          clickedCountry={{code: 'ca', name:'Canada'}}
          setClickedRegion={setClickedRegion}
          setClickedCountry={setClickedCountry}
        />,
        container
      );
    });

    const event = new MouseEvent('click', { bubbles: true });

    // Assign the event target coordinates, these are passed through to position the popup component
    Object.defineProperty(event, 'offsetX', {get: () => 1})
    Object.defineProperty(event, 'offsetY', {get: () => 1})
  
    // Click on Canada to invoke the popup (could click any valid country as the clickedCountry has
    // been passed as a prop)
    fireEvent(screen.getByLabelText('Canada'), event)
    
    // Expect the popup to be rendered which will contain the Canada region
    expect(screen.getByText('ca-central-1')).toBeInTheDocument()
  });
});
