import React from 'react'

import Login from '../../../components/Login/Login'
import TestRenderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil'

describe('Login Component test', () => {
    let testComponent;

    beforeEach(() => {
        testComponent = TestRenderer.create(
            <RecoilRoot>
                <Login />
            </RecoilRoot>)
    })

    test('renders well', () => {
        expect(testComponent).toBeTruthy()
        expect(testComponent.toJSON()).toMatchSnapshot();
    })
    test('head describes page well', () => {
        expect(testComponent.root.findByProps({ className: "login-button" })).toBeTruthy()
    })
})
