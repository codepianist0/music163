import dayjs from "dayjs"

export function getFormatCouter(counter: number): string {
  let result = String(counter)
  if (counter > 100000) {
    result = Math.floor(counter / 10000) + "万"
  }
  return result
}

export function setGetImgSize(url: string, width: number, height: number = width) {
  const newUrl = url + `?param=${width}y${height}`
  return newUrl
}

// 传入毫秒
export function getFormatTime(time: number) {
  if (!time) return "00:00"

  const minute = String(Math.floor(time / 1000 / 60)).padStart(2, "0")
  const second = String(Math.floor((time / 1000) % 60)).padStart(2, "0")
  const formatTime = minute + ":" + second
  return formatTime
}

export function getFormatDate(date: number, formatType = "YYYY-MM-DD") {
  return dayjs(date).format(formatType)
}
