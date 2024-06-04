import ygRequest from "@/service"

export function getSongInfo(ids: number) {
  return ygRequest.get({
    url: "/song/detail",
    params: {
      ids,
    },
  })
}

export function getCommentInfo(id: number, limit = 20, offset?: number) {
  return ygRequest.get({
    url: "/comment/music",
    params: {
      id,
      limit,
      offset,
    },
  })
}

export function getSimiInfo(id: number) {
  return ygRequest.get({
    url: "/simi/song",
    params: {
      id,
    },
  })
}
