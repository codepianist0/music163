import ygRequest from "@/service"

export function getToplistInfo() {
  return ygRequest.get({
    url: "/toplist",
  })
}

export function getPlayListDetail(id: number) {
  return ygRequest.get({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}

export function getCommentsInfo(id: number, limit?: number, offset?: number) {
  return ygRequest.get({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset,
    },
  })
}
