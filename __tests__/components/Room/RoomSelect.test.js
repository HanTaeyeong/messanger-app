import React from 'react'

import TestRenderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil'

import RoomSelect from '../../../components/Room/RoomSelect'


describe('Login Component test', () => {
    let testComponent;

    beforeEach(() => {
        testComponent = TestRenderer.create(
            <RecoilRoot>
                <RoomSelect />
            </RecoilRoot>)
    })

    test('renders well', () => {
        expect(testComponent).toBeTruthy()
        expect(testComponent.toJSON()).toMatchSnapshot();
    })

    test('room list item test', () => {
        expect(testComponent.root.findByProps({ className: "room-list" })
            .children[0].children[0]).toBe('first room')
    })

})
