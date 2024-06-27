import ygRequest from "@/service"

export function getUserInfo(uid: number) {
  return ygRequest.get({
    url: "/user/detail",
    params: {
      uid,
    },
  })
}

export function getUserEvent(uid: number, limit: number, offset: number) {
  return ygRequest.get({
    url: "/user/event",
    params: {
      uid,
      limit,
      offset,
    },
  })
}

export function getConcern(uid: number, limit: number, offset: number) {
  return ygRequest.get({
    url: "/user/follows",
    params: {
      uid,
      limit,
      offset,
    },
  })
}

export function getFans(uid: number, limit: number, offset: number) {
  return ygRequest.get({
    url: "/user/followeds",
    params: {
      uid,
      limit,
      offset,
    },
  })
}

export function getJDRadio(uid: number) {
  return ygRequest.get({
    url: "/user/audio",
    params: { uid },
  })
}

export function getAlbum(uid: number) {
  return ygRequest.get({
    url: "/user/playlist",
    params: { uid },
  })
}
