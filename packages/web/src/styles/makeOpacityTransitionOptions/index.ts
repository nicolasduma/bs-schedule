const makeOpacityTransitionOptions = (duration: number) => ({
  initial: { opacity: 0 },
  show: { opacity: 1, transition: { duration, delay: duration } },
  hidden: { opacity: 0, transition: { duration } },
})

export default makeOpacityTransitionOptions
