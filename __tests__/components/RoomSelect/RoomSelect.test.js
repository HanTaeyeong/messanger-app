import React from 'react'

import TestRenderer, { act } from 'react-test-renderer';
import { RecoilRoot } from 'recoil'

import RoomSelect from '../../../components/RoomSelect/RoomSelect'


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
        const divs = testComponent.root.findAllByType('a');

        const items = divs.map(item => item.props).filter(item => item.className === 'room-list-item')
        expect(items[0].children).toBe('first room')
        expect(items[1].children).toBe('second room')
    })
})
