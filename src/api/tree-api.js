import axios from "axios";
import ROUTES from "./routes.json"

export const getTreeData = () => {
    return new Promise((resolve, reject) => {
        axios.get(ROUTES.TREE_DATA)
        .then(res => {
            resolve(res.data);
        })
        .catch((error) => {
            reject(new Error('All users API call failed: ' + JSON.stringify(error)));
        })
    });
}