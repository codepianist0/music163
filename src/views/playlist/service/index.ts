import ygRequest from "@/service"

// 获取歌单列表数据
export function getPlaylistData(id: number) {
  return ygRequest.get({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}

// 获取评论数据
export function getCommentsData(id: number, offset = 0, limit = 20) {
  return ygRequest.get({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset,
    },
  })
}

// 获取订阅歌单的用户的数据
export function getSubscribersData(id: number) {
  return ygRequest.get({
    url: "/playlist/subscribers",
    params: {
      id,
    },
  })
}

// 获取相关推荐歌单的数据
export function getRelatedData(id: number) {
  return ygRequest.get({
    url: "/related/playlist",
    params: {
      id,
    },
  })
}
