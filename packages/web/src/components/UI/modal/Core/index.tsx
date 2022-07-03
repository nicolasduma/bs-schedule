import React, { HTMLAttributes, ReactElement, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import { useStateSelector } from '#/hooks'

import { changeModalVisibility } from '#/store/actions'

import * as Styled from './styled'

interface PropsInterface extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  buttons: ReactElement
}

const Core = (props: PropsInterface) => {
  const { title, description, buttons, onClick, ...propsRest } = props

  const dispatch = useDispatch()
  const { modalVisibility } = useStateSelector((state) => state)

  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let index = 0
    document.addEventListener('keydown', (event) => {
      if (mainRef.current && event.key === 'Tab') {
        event.preventDefault()

        const modalFocusableElements = mainRef.current.querySelectorAll(
          'button, input, select, a, textarea'
        )

        ;(modalFocusableElements[index] as HTMLElement).focus()

        index = index === modalFocusableElements.length - 1 ? 0 : +1
      }
    })
  }, [modalVisibility])

  const element = (
    <Styled.Overlay
      {...propsRest}
      onClick={(event) => {
        if ((event.target as HTMLElement).dataset.use_to_hidden !== 'off')
          dispatch(changeModalVisibility(false))
        onClick && onClick(event)
      }}
    >
      <Styled.Main
        ref={mainRef}
        data-use_to_hidden="off"
        initial={{ y: '-600' }}
        animate={{
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0.1,
          },
        }}
      >
        <Styled.Title data-use_to_hidden="off" children={title} />
        <Styled.Description data-use_to_hidden="off" children={description} />

        <Styled.ActionsButtonContainer children={buttons} />
      </Styled.Main>
    </Styled.Overlay>
  )

  return ReactDOM.createPortal(
    modalVisibility ? element : null,
    document.getElementById('portal-root')!
  )
}

export default Core
