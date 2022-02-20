import React from 'react'

import Login from '../../../components/Login/Login'
import TestRenderer from 'react-test-renderer';

describe('Login Component test', () => {
    let testComponent;
    
    beforeEach(() => {
        testComponent = TestRenderer.create(<Login />)
    })

    test('renders well', () => {
        expect(testComponent).toBeTruthy()
        expect(testComponent.toJSON()).toMatchSnapshot();
    })
    test('head describes page well', () => {
        expect(testComponent.root.findByProps({ className: "login-button" })).toBeTruthy()
    })
})
