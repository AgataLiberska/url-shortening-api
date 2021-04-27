export default function validateForm(url){
    let error = {}

    if(!url.trim()) {
        error.message = 'Please provide a valid url'
    }

    return error;
}