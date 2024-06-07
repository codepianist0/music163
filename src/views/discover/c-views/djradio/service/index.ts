import ygRequest from "@/service"

// 获取轮播数据
export function getDjBanner() {
  return ygRequest.get({
    url: "dj/catelist",
  })
}

// 获取推荐节目
export function getRecommendProgram(limit: number, offset: number) {
  return ygRequest.get({
    url: "/program/recommend",
    params: { limit, offset },
  })
}

// 节目排行榜
export function getTopProgram(limit: number, offset: number) {
  return ygRequest.get({
    url: "/dj/program/toplist",
    params: { limit, offset },
  })
}

// 分类推荐 || 优秀新电台
export function getRecommendType(type: number) {
  return ygRequest.get({
    url: "/dj/recommend/type",
    params: { type },
  })
}

// 电台 - 类别热门电台
export function getRadioHotById(cateId: number, limit: number, offset: number) {
  return ygRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset,
    },
  })
}
