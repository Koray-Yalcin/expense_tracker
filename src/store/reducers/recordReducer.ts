import { RecordAction, RecordState } from "../../types/record"

const defaultState: RecordState = {
    data: [],
    loading: false,
    error: '',
}

const recordReducer = (state: RecordState = defaultState, action: RecordAction) => {
    switch (action.type) {
        case 'GET_START':
            return {...state, loading:true, error: ''};
        case 'GET_SUCCESS':
            return {...state, loading: false, data: action.payload};
        case 'GET_ERROR':
            return {...state, loading:false, error: 'Record error'};
        default:
            return state;
    }
} 

export default recordReducer;