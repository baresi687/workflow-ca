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
        localStorage.setItem(MOCK_KEY, MOCK_VALUE);
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
});
