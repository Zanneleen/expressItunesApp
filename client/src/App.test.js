import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'
import saveFavourite from './grabElements/saveFavourites'
import albums from './grabElements/albums';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('favourite added', () => {
  const tree = renderer
    .create(<saveFavourite></saveFavourite>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('grab query', () => {
  const tree = renderer
    .create(<albums></albums>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});