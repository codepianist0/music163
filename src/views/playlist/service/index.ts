import ygRequest from "@/service"

export function getPlaylistData(id: number) {
  return ygRequest.get({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}
