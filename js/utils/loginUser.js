export async function logInUser(url, userData) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const responseJSON = await response.json();
    console.log(responseJSON);

    if (responseJSON.accessToken) {
        console.log('POST REQUEST LOGIN SUCCEEDED!!  🥳 🤗🤗');
        return responseJSON;
    }
    console.log('POST REQUEST LOGIN Failed!!  💩');
    throw new Error(responseJSON.errors[0].message);
}
