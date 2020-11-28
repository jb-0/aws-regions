import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PopUp from './PopUp';
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


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

  it('correct country is displayed based on country prop', () => {
    act(() => {
      render(
        <PopUp
          mousePosition={{x: 10, y: 10}}
          clickedCountry={{code: 'ca', name:'Canada'}}
        />,
        container
      );
    });
    expect(screen.getByText('Canada')).toBeInTheDocument()
  });

  it('correct regions for a country are displayed based on country prop', () => {
    act(() => {
      render(
        <PopUp
          mousePosition={{x: 10, y: 10}}
          clickedCountry={{code: 'jp', name:'Japan'}}
        />,
        container
      );
    });
    expect(screen.getByText('ap-northeast-1')).toBeInTheDocument()
    expect(screen.getByText('ap-northeast-3')).toBeInTheDocument()
  });

  it('clicking a region invokes setClickedRegion and passes the region as an argument', () => {
    const setClickedRegion = jest.fn();

    act(() => {
      render(
        <PopUp
          mousePosition={{x: 10, y: 10}}
          clickedCountry={{code: 'jp', name:'Japan'}}
          setClickedRegion={setClickedRegion}
        />,
        container
      );
    });

    // Click one of the regions that is displayed for japan
    userEvent.click(screen.getByText('ap-northeast-1'))

    // Expect the function to have been called once and the region to have been passed as an arg
    expect(setClickedRegion.mock.calls.length).toBe(1);
    expect(setClickedRegion.mock.calls[0][0]).toBe('ap-northeast-1');
  })
});
