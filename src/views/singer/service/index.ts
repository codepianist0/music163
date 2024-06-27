import ygRequest from "@/service"

export function getSingerInfo(id: number) {
  return ygRequest.get({
    url: "/artist/detail",
    params: { id },
  })
}
export function getArtistSongs(id: number) {
  return ygRequest.get({
    url: "/artists",
    params: { id },
  })
}

export function getArtistAlbums(id: number) {
  return ygRequest.get({
    url: "/artist/album",
    params: { id },
  })
}

export function getArtistMV(id: number, limit: number, offset: number) {
  return ygRequest.get({
    url: "/artist/mv",
    params: { id, limit, offset },
  })
}

export function getArtistDescription(id: number) {
  return ygRequest.get({
    url: "/artist/desc",
    params: { id },
  })
}

export function getTopArtist() {
  return ygRequest.get({
    url: "/top/artists",
    params: { limit: 6 },
  })
}
