import { getData, API } from "./utiles/utills.js";
const url = new URL(location.href);
const postID = url.searchParams.get('id');
const getPostAndComments = async () => {
    const post = await getData(`${API}posts/${postID}`);
    console.log(post)
}
getPostAndComments()