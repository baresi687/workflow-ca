export async function createPost(url, token, postData) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    });
    console.log('post creation response: ', response);
    const responseJSON = await response.json();
    if (responseJSON.id) {
        console.log('CREATE POST SUCCEEDED!!  🥳 🤗🤗');
        return responseJSON;
    } else {
        throw new Error('Creating post failed');
    }
}
