import ygRequest from "@/service"

export function getBannerData() {
  return ygRequest.get({
    url: "/banner",
  })
}

export function getHotRecommendData(limit = 30) {
  return ygRequest.get({
    url: "/personalized",
    params: {
      limit,
    },
  })
}

export function getNewAlbumData() {
  return ygRequest.get({
    url: "/album/newest",
  })
}

export function getTopRankingData(id: number) {
  return ygRequest.get({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}

export function getResidentSingerData() {
  return ygRequest.get({
    url: "/toplist/artist",
  })
}
