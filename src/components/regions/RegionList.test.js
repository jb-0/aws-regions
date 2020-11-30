import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegionList from './RegionList';

describe('RegionList component test', () => {
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

  it('a card is rendered for each country with one or more regions', () => {
    render(<RegionList />, container);

    // Expect 17 country cards to be generated
    expect(screen.queryAllByRole('heading').length).toBe(17);
  });

  it('clicking a region invokes the setClickedCountry and setClickedRegion', () => {
    const setClickedRegion = jest.fn();
    const setClickedCountry = jest.fn();

    render(
      <RegionList
        setClickedCountry={setClickedCountry}
        setClickedRegion={setClickedRegion}
      />,
      container
    );

    // Click one of the regions that is displayed for japan
    userEvent.click(screen.getByText('ap-northeast-1'))

    //Expect setClickedCountry to have been called once and the country name and code to be passed
    expect(setClickedCountry.mock.calls.length).toBe(1)
    expect(setClickedCountry.mock.calls[0][0].name).toBe('Japan')
    expect(setClickedCountry.mock.calls[0][0].code).toBe('jp')
      
    // Expect setClickedRegion to have been called once and the region to have been passed as an arg
    expect(setClickedRegion.mock.calls.length).toBe(1);
    expect(setClickedRegion.mock.calls[0][0]).toBe('ap-northeast-1');
  });
});
