import { createPost } from './createPost';

const MOCK_API_URL = '';
const MOCK_TOKEN = '';
const MOCK_POST_DATA = {
    title: 'Some title',
    body: 'Somebody',
};

const MOCK_RESPONSE = {
    id: 214,
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_RESPONSE),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

it('should return the id of created item', async () => {
    const response = await createPost(MOCK_API_URL, MOCK_TOKEN, MOCK_POST_DATA);
    const returnedPostId = response.id;
    expect(returnedPostId).toBeDefined();
});
