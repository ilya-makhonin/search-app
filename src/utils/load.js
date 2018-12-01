export default url => {
    return new Promise((success, fail) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.addEventListener('load', () => {
            console.log(request.responseText);
            request.status >= 200 && request.status < 400
            ? success(request.response)
                : fail(new Error(`Request Failed: ${request.statusText}`));
        });

        request.addEventListener('error', () => {
            fail(new Error('Network Error'));
        });

        request.send()
    });
};