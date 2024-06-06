import ygRequest from "@/service"

// 获取歌单列表
export function getMenuListInfo(order?: "new" | "hot", cat = "all", limit = 35, offset = 0) {
  return ygRequest.get({
    url: "/top/playlist",
    params: {
      order,
      cat,
      limit,
      offset,
    },
  })
}

// 获取歌单分类
export function getMenuTags(): any {
  return ygRequest.get({
    url: "/playlist/catlist",
  })
}
