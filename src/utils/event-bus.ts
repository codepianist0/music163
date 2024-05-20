import mitt from "mitt"
type EventsType = {
  changePlay: boolean
  changePlaySongByIndex: number
}

export const yugeEvent = mitt<EventsType>()
