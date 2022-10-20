import { CategoryAction, CategoryState } from "../../types/category";

const defaultState: CategoryState = {
    data: [],
    loading: false,
    error: ''
}

const categoryReducer = (state: CategoryState = defaultState, action: CategoryAction) => {
    switch (action.type) {
        case 'GET_START':
            return {...state, loading: true, error: ''};
        case 'GET_SUCCESS':
            return {...state, loading: false, data: action.payload};
        case 'GET_ERROR':
            return {...state, loading: false, error: 'Category error'};
        case 'ADD_START':
            return {...state, loading: true, error: ''};
        case 'ADD_SUCCESS':
            return {...state, loading: false, data: [action.payload, ...state.data]};
        case 'ADD_ERROR':
            return {...state, loading: false, error: 'Category adding error'};
        case 'UPDATE_START':
            return {...state, loading: true, error: ''};
        case 'UPDATE_SUCCESS':
            return {...state, loading: false, data:[action.payload, ...state.data.map(category => category.id === action.payload.id ? action.payload : category)]};
        case 'UPDATE_ERROR':
            return {...state, loading: false, error: 'Category update error'};
        case 'DELETE_START':
            return {...state, loading: true, error: ''};
        case 'DELETE_SUCCESS':
            return {...state, loading: false, data:[...state.data.filter(category => category.id !== action.payload )]};
        case 'DELETE_ERROR':
            return {...state, loading: false, error: 'Category update error'};
        default:
            return state;
    }
}

export default categoryReducer;