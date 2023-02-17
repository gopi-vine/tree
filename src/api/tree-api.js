import axios from "axios";

export const getTreeData = () => {
    return new Promise((resolve, reject) => {
        axios.get('data.json')
        .then(res => {
            resolve(res.data);
        })
        .catch((error) => {
            reject(new Error('All users API call failed: ' + JSON.stringify(error)));
        })
    });
}