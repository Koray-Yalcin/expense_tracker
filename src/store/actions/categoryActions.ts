import { Category, CategoryDispatch, CategoryForm } from "../../types/category";
import api from "../../utils/api";

export const getCategories = () => async (dispatch: CategoryDispatch) => {
     dispatch({type: 'GET_START'});
    try {
     const response = await api.get<Category[]>('/categories');
        dispatch({type: 'GET_SUCCESS', payload: response.data});
    } catch (error) {
        console.log(error);
        dispatch({type: 'GET_ERROR'});
    }
}

export const addCategory = (form: CategoryForm) => async (dispatch: CategoryDispatch) => {
    dispatch({type: 'ADD_START'});
    try {
        const response = await api.post<Category>('/categories', form);
        dispatch({type: 'ADD_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'ADD_ERROR'});
    }
}

export const updateCategory = (form: Partial<CategoryForm>, categoryId: number) => async (dispatch: CategoryDispatch) => {
    dispatch({type: 'UPDATE_START'});
    try {
        const response = await api.put<Category>('/categories/' + categoryId, form);
        dispatch({type: 'UPDATE_SUCCESS', payload: response.data}); 
    } catch (error) {
        dispatch({type: 'UPDATE_ERROR'});   
    }
}

export const deleteCategory = (categoryId: number) => async (dispatch: CategoryDispatch) => {
    dispatch({type: 'DELETE_START'});
    try {
        await api.delete('/categories/' + categoryId);
        dispatch({type: 'DELETE_SUCCESS', payload: categoryId})
    } catch (error) {
        dispatch({type: 'DELETE_ERROR'});
    }
}