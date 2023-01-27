import * as UserActions from './user.actions';
import {UserState} from "./index";
import {createReducer, on} from "@ngrx/store";

const initialState: UserState = {
  maskUserName: true
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, (state): UserState => {
    return {
     ...state,
     maskUserName: !state.maskUserName
    };
  })
);
