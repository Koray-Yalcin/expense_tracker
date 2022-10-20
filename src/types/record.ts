import { ThunkDispatch } from "redux-thunk";
import { Category } from "./category";

export interface RecordState {
    data: Record[];
    loading: boolean;
    error: string;
}

export interface Record {
    id: number;
    title: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    category: Category;
  }

  interface GET_START {
    type: 'GET_START'
  }

  interface GET_SUCCESS {
    type: 'GET_SUCCESS',
    payload: Record[]
  }

  interface GET_ERROR {
    type: 'GET_ERROR'
  }

  export type RecordAction = GET_START | GET_SUCCESS | GET_ERROR;
  export type RecordDispatch = ThunkDispatch<RecordingState, void, RecordAction>