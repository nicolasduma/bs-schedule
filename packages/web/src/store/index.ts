import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'

const store = configureStore({ reducer: reducers })

export default store
export * as actions from './actions'

export type RootStateType = ReturnType<typeof store.getState>
