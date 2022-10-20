import { RecordDispatch } from "../../types/record";
import api from "../../utils/api";

export const getRecords = () => async (dispatch: RecordDispatch) => {
    dispatch({type: 'GET_START'});
    try {
        const reponse = await api.get('/records/');
        dispatch({type: 'GET_SUCCESS', payload: reponse.data});
    } catch (error) {
        dispatch({type: 'GET_ERROR'});
    }
}