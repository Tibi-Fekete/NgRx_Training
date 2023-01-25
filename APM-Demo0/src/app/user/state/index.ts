import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);
