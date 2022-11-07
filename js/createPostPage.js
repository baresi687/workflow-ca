import { getToken } from './utils/storage';
import { CREATE_POST_URL } from './settings/api';
import { createPost } from './utils/createPost';

const createPostForm = document.querySelector('#create-post-form');

const postTitle = document.querySelector('#postTitle');
const postTitleError = document.querySelector('#postTitleError');

const postDescription = document.querySelector('#postDescription');
const postDescriptionError = document.querySelector('#postDescriptionError');

console.log(createPostForm);
console.log(postTitle);
console.log(postTitleError);
console.log(postDescription);
console.log(postDescriptionError);

createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isPostTitle = false;
    if (postTitle.value.trim().length > 0) {
        postTitleError.classList.add('hidden');
        isPostTitle = true;
    } else {
        postTitleError.classList.remove('hidden');
    }

    let isPostDescription = false;
    if (postDescription.value.trim().length > 0) {
        postDescriptionError.classList.add('hidden');
        isPostDescription = true;
    } else {
        postDescriptionError.classList.remove('hidden');
    }

    const isFormValid = isPostTitle && isPostDescription;

    if (isFormValid) {
        console.log('Validation SUCCEEDED!!  🥳');
        console.log(postTitle.value);
        console.log(postDescription.value);
        const postData = {
            title: postTitle.value,
            body: postDescription.value,
        };
        console.log('postData: ', postData);
        const accessToken = getToken();
        console.log('accessToken: ', accessToken);
        console.log('CREATE_POST_URL', CREATE_POST_URL);

        createPost(CREATE_POST_URL, accessToken, postData)
            .then((response) => {
                createPostForm.reset();
                location.href = '/index.html';
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log('Validation FAILED!! 💩');
    }
});
