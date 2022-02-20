import { atom, selector, useRecoilState } from 'recoil';

export const weekList: String[] = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Fryday', 'Saturday']

export const testDate = atom<Number>({
    key: 'testDate',
    default: 0,
});

export const testWeekName = selector<String>({
    key: 'testWeekName',
    get: ({ get }) => weekList[(+get(testDate) % 7) | 0] || 'Sunday',
    set: ({ set }) => { }
});
