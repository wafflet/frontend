import { Action } from 'redux'

interface IContructor<State> {
  new (): State
}

export const Creator = <IState>(initialState: IContructor<IState>) => (
  state: IState = new initialState(),
  action: Action
) => (action.type in state ? state[action.type](state, action) : state)
