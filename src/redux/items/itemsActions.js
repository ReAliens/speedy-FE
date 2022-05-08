import { ITEMS_FETCH_REQUEST, ITEMS_FETCH_SUCCESS, ITEMS_FETCH_FAILURE } from '../constants'
import axios from 'axios'


const baseurl = 'http://localhost:3000/api/items'

export const itemsFetchRequest = () => {
    type: ITEMS_FETCH_REQUEST
}

export const itemsFetchSuccess = (items) => {
    type: ITEMS_FETCH_SUCCESS,
        payload,
}

export const itemsFetchFailure = (error) => {
    type: ITEMS_FETCH_FAILURE
    payload,
}

// export const fetchItems = () => {
//     return async (dispatch) => {
//         dispatch(fetchItemsRequest())
//         try {
//             const response = await axios.get(baseurl)
//             dispatch(fetchItemsSuccess(response.data))
//         } catch (error) {
//             dispatch(fetchItemsFailure(error))
//         }
//     }
// }

