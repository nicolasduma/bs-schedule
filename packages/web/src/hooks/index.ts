import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootStateType } from '#/store'

export const useStateSelector: TypedUseSelectorHook<RootStateType> = useSelector
