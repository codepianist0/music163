import ygRequest from "@/service"

export function getBannerData() {
  return ygRequest.get({
    url: "/banner",
  })
}
