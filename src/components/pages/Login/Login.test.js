import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';

test('Login Testing', () => {
    const component = renderer.create(
      <Login ></Login>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
