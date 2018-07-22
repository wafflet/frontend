import { Record } from 'immutable'

import { ActionType } from '@/Store/User/ActionType'

interface IState {
  readonly nickname: string
  readonly email: string
}

const initialState: IState = {
  nickname: '',
  email: ''
}

export class State extends Record(initialState) {
  public [ActionType.CLEAR](state: State) {
    return state.clear()
  }

  public [ActionType.LOGIN](state: State, action: IState) {
    return state.set('nickname', action.nickname).set('email', action.email)
  }
}
