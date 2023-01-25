import {createReducer, on} from '@ngrx/store';
import {UserState} from './index';
import * as UserActions from './user.actions';

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
