import { animateScroll } from 'react-scroll'

export const scrollToBottom = (id, ms = 0) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: ms
  })
}
