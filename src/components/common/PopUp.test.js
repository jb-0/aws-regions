import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PopUp from './PopUp';
import { getByText, screen } from '@testing-library/react'


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
});
