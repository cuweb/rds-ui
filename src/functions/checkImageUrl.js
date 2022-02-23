// check if the image url has jpg or other image extension
const checkImageUrl = (url) => {
    if (typeof url !== 'string') {
        return false
    }
    return (
        url.match(/^http[^?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !==
        null
    )
}
export default checkImageUrl
