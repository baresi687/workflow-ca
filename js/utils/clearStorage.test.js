/**
 * @jest-environment jsdom
 */

import { clearStorage } from './clearStorage';

const MOCK_KEY = 'keyName';
const MOCK_VALUE = 'someValue34534';

describe('Localstorage set and clear', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });
    it('should return null', () => {
        localStorage.setItem(MOCK_KEY, JSON.stringify(MOCK_VALUE));
        console.log(
            'localStorage after setItem:',
            localStorage.getItem(MOCK_KEY)
        );
        clearStorage();
        console.log(
            'localStorage after clear:',
            localStorage.getItem(MOCK_KEY)
        );
        expect(localStorage.getItem(MOCK_KEY)).toBeNull();
    });
    it('should return value', () => {
        localStorage.setItem(MOCK_KEY, JSON.stringify(MOCK_VALUE));
        const storageItem = localStorage.getItem(MOCK_KEY);
        expect(JSON.parse(storageItem)).toEqual(MOCK_VALUE);
    });
});
