import { logInUser } from './loginUser';

const MOCK_API_URL = '';

const MOCK_USER_DATA = {
    email: 'someone@noroff.no',
    password: 'somepassword343',
};

const MOCK_RESPONSE = {
    name: 'someone',
    email: 'someone@noroff.no',
    banner: null,
    avatar: null,
    accessToken: 'sometokentouse3434',
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_RESPONSE),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

it('should return token when provided with valid credentials ', async () => {
    const response = await logInUser(MOCK_API_URL, MOCK_USER_DATA);
    const accessToken = response.accessToken;
    expect(accessToken).toBeDefined();
});
