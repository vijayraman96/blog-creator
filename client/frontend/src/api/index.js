// import axios from 'axios';
// import { getPost } from '../reducers/posts';
// import { useDispatch } from 'react-redux';

// const url = 'http://localhost:5001/api/v1/posts/';
// const fetchPosts = () => {
//     try {
//         const response = axios.get(url).then(res => {
//             console.log(res.data);
//             useDispatch(getPost(res.data));
//         }).catch(err => {
//             console.log(err)
//         }) 
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// }

// export default fetchPosts;