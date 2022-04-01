import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';


afterEach(cleanup);

describe('ContactForm component renders', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('renders', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })
});
