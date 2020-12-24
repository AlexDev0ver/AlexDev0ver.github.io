import { combineReducers, AnyAction } from 'redux';

import ACTION from '../action-enum';

export const appReducer = combineReducers({
    overview: overviewReducer
});



function overviewReducer (state: any[] = [], action: AnyAction) : any {
    switch(action.type) {
        case ACTION.SELECT_ITEM:
            return action.payload;
        default:
            return state;
    }
}


export type AppState = ReturnType<typeof appReducer>
