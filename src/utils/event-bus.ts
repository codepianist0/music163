import mitt from "mitt"
type EventsType = {
  changePlay: boolean
}

export const yugeEvent = mitt<EventsType>()
