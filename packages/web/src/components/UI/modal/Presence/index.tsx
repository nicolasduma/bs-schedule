import React, { HTMLAttributes } from 'react'

import { useStateSelector } from '#/hooks'

import { Action, Info } from '..'

import modalDatas from '../modalDatas'

const Presence = (props: HTMLAttributes<HTMLDivElement>) => {
  const { modalVisibility } = useStateSelector((state) => state)
  const { message } = modalVisibility

  // @ts-ignore
  const modalData = modalDatas[message] || modalDatas['there-was-error']
  const { type: modalType, ...modalDataWithoutType } = modalData

  const ContentComponent = modalType === 'info' ? Info : Action

  return <ContentComponent {...props} {...modalDataWithoutType} />
}

export default Presence
