// gets relative path base url of our website, appending this relative path onto it, then passing back whatever this url is
// makes it easier to dynamically imoport images into our differnt components. 
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};