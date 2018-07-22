import { combineReducers } from 'redux'

import { Creator } from '@/Store/Creator'
import { IStoreState } from '@/Store/IStoreState'

import { State as UserState } from '@/Store/User'

export const reducer = combineReducers<IStoreState>({
  User: Creator(UserState)
})
