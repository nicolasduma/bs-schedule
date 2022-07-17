import React, { useEffect, useState } from 'react'

import { CaretLeft, CaretRight } from 'phosphor-react'
import tw from 'twin.macro'

import imagesSources from './imagesSources'
import * as Styled from './styled'

const ImageSlider = () => {
  const [index, setIndex] = useState<number>(3)
  const [canChangeIndex, setCanChangeIndex] = useState<boolean>(true)
  const [isTimeToChangeIndex, setIsTimeToChangeIndex] = useState<boolean>(true)

  const imagesSourcesLastIndex = imagesSources.length - 1

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTimeToChangeIndex(true)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isTimeToChangeIndex) {
      setIsTimeToChangeIndex(false)
      if (canChangeIndex) {
        setIndex(index >= imagesSourcesLastIndex ? 0 : index + 1)
      } else setCanChangeIndex(true)
    }
  }, [isTimeToChangeIndex])

  return (
    <Styled.ImageSlider>
      <Styled.Image src={imagesSources[index]} />

      <Styled.Button
        onClick={() => {
          setCanChangeIndex(false)
          setIndex(index <= 0 ? imagesSourcesLastIndex : index - 1)
        }}
        children={<CaretLeft />}
      />

      <Styled.IndicatorsContainer>
        <Styled.Indicator css={index === 0 ? tw`bg-amber-300 ` : ''} />
        <Styled.Indicator css={index === 1 ? tw`bg-amber-300 ` : ''} />
        <Styled.Indicator css={index === 2 ? tw`bg-amber-300 ` : ''} />
        <Styled.Indicator css={index === 3 ? tw`bg-amber-300 ` : ''} />
      </Styled.IndicatorsContainer>

      <Styled.Button
        onClick={() => {
          setCanChangeIndex(false)
          setIndex(index >= imagesSourcesLastIndex ? 0 : index + 1)
        }}
        children={<CaretRight />}
      />
    </Styled.ImageSlider>
  )
}

export default ImageSlider
