import dayjs from "dayjs"

// 格式化播放数
export function getFormatCouter(counter: number): string {
  let result = String(counter)
  if (counter > 100000) {
    result = Math.floor(counter / 10000) + "万"
  }
  return result
}

// 获取一定大小的图片
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

// 格式化时间格式
export function getFormatDate(date: number, formatType = "YYYY-MM-DD") {
  return dayjs(date).format(formatType)
}

// 格式化tag数据
export function formatTagsInfo(categories: any, sub: any[]) {
  const categorized: any = { 语种: [], 风格: [], 场景: [], 情感: [] }
  sub.forEach((subtag) => {
    const categoryKey = categories[subtag.category]
    if (!categorized[categoryKey]) {
      categorized[categoryKey] = []
    }
    categorized[categoryKey].push(subtag)
  })

  return categorized
}
