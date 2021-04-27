import shrtcode from './API/shrtcode'

async function shortenURL(url) {
    const { data } = await shrtcode.get('/shorten', { 
        params: {
            url: url.trim()
        }
    })

    return data;
}

export default shortenURL;