import mitt from "mitt"
type EventsType = {
  changePlay: boolean
  changePlaySongByIndex: number
  pushMusicToMenu: any
  palyMusicById: any
}

export const yugeEvent = mitt<EventsType>()
