import ygRequest from "@/service"

export function getSingerList(
  limit: number,
  offset: number,
  type: number,
  area: number,
  initial?: number,
  id?: number,
) {
  return ygRequest.get({
    url: "/artist/list",
    params: {
      limit,
      offset,
      type,
      area,
      initial,
      id,
    },
  })
}
