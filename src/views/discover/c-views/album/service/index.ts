import ygRequest from "@/service"

export function getHotAlbum() {
  return ygRequest.get({
    url: "/album/newest",
  })
}

export function getNewAlbum(limit: number, offset: number, area?: string) {
  return ygRequest.get({
    url: "/album/new",
    params: { limit, offset, area },
  })
}
