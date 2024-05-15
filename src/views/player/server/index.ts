import ygRequest from "@/service"

export function getSongDetailInfo(id = 2154102353) {
  return ygRequest.get({
    url: "/song/detail",
    params: {
      id,
    },
  })
}

export function getSongMenuInfo(id = 8144947543) {
  return ygRequest.get({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}

export function getSongLyric(id = 188222) {
  return ygRequest.get({
    url: "/lyric",
    params: {
      id,
    },
  })
}
