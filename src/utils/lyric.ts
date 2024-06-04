type LyricListType = { time: number; text: string }[]

const timeRegExp = /\[(\d{2}):(\d{2}.(\d{2,3}))\]/
export function formatLyric(lyric = ""): LyricListType {
  // 1. 切割歌词
  const lines: string[] = lyric.split("\n")
  // 2. 通过正则匹配歌词和时间
  const lyricList: any[] = []
  lines.forEach((item) => {
    // 2.1 获取匹配的结果
    const res = timeRegExp.exec(item)
    if (!res) return
    // 2.2 获取匹配的时间
    const minute = Number(res[1]) * 60 * 1000
    const second = Number(res[2]) * 1000
    const millisecond = res[3].length === 2 ? Number(res[3]) * 10 : Number(res[3])
    const time = minute + second + millisecond
    // 2.3 获取匹配的歌词
    const text = item.replace(timeRegExp, "")
    lyricList.push({
      time,
      text,
    })
  })

  return lyricList
}

export function getLyric(formatLyric: LyricListType) {
  const lyricArr: string[] = []
  formatLyric.forEach((item) => {
    lyricArr.push(item.text)
  })
  const lyricStr = lyricArr.join("\n")
  return lyricStr
}
