import React from 'react'
import { RecoilRoot } from 'recoil'
import { create, act } from 'react-test-renderer'

import RecoilTestComponent from '../../store/RecoilTestComponent'
import { weekList } from '../../store/recoil'


describe('recoil test', () => {
    let recoilComponent;

    beforeEach(async () => {
        recoilComponent = await create(
            <RecoilRoot>
                <RecoilTestComponent />
            </RecoilRoot>)
    })

    test('render test', () => {
        expect(recoilComponent).toBeTruthy();
        expect(recoilComponent.toJSON()).toMatchSnapshot();
    })

    test('date value changes well after click', async () => {
        const root = recoilComponent.root;
        let date = await root.findByProps({ className: "date" })
        const button = await root.findByProps({ className: "test-button" })

        expect(date.props.children).toBe(0)
        act(button.props.onClick);

        expect(date.props.children).toBe(1)
    })

    test('weekName value changes well after click', async () => {
        const root = recoilComponent.root;

        let weekName = await root.findByProps({ className: 'week-name' })
        const button = await root.findByProps({ className: "test-button" })
        expect(weekName.props.children).toBe('Sunday')

        act(button.props.onClick);

        expect(weekName.props.children).toBe('Monday')
    })
    test('weekName value changes well after random click', async () => {
        const root = recoilComponent.root;

        let weekName = await root.findByProps({ className: 'week-name' })
        const button = await root.findByProps({ className: "test-button" })
        expect(weekName.props.children).toBe('Sunday')

        const randomNum = (Math.random() * 30) | 0
        let n = randomNum
        while (n--) {
            act(button.props.onClick);
        }
        
        expect(weekName.props.children).toBe(weekList[randomNum % 7])
    })

})