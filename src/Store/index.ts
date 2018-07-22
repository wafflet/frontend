import { createStore } from 'redux'

import { reducer } from '@/Store/reducer'

export { IStoreState } from '@/Store/IStoreState'

export const Store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
