// withAuth.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import withAuth from './withAuth';

const DummyComponent = ({ user }) => <div>{user ? user.name : 'No user'}</div>;
const EnhancedComponent = withAuth(DummyComponent);

test('it passes authentication props to wrapped component', () => {
    render(<EnhancedComponent />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
});
