import React from 'react'

import Room from '../../../components/Room/Room'
import TestRenderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil'

describe('Login Component test', () => {
    let testComponent;

    beforeEach(() => {
        testComponent = TestRenderer.create(
            <RecoilRoot>
                <Room />
            </RecoilRoot>)
    })

    test('renders well', () => {
        expect(testComponent).toBeTruthy()
        expect(testComponent.toJSON()).toMatchSnapshot();
    })
})
