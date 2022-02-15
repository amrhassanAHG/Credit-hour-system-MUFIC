import React from 'react';
import renderer from 'react-test-renderer';
import WritePost from './WritePost';
import WritePostBody from './WritePostBody';

test('Writing post page Testing', () => {
    const writePostComponent = renderer.create(
      <WritePost />,
    );
    let tree = writePostComponent.toJSON();
    expect(tree).toMatchSnapshot();  
});

test('Writing post body page Testing', () => {
    const writePostBodyComponent = renderer.create(
        <WritePostBody />,
    );
    let tree = writePostBodyComponent.toJSON();
    expect(tree).toMatchSnapshot();
});