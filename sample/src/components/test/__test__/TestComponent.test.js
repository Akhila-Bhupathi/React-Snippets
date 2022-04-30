import React from 'react';
import  Test from '../Testcomponent';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Tes",()=>{
    const c=render(<Test/>);
    const h= c.getByTestId('hi');
    expect(h.textContent).toBe('Hi User');

})
