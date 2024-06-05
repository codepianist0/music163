import { useSearchParams } from "react-router-dom"

export function useGetSearchParams() {
  const [searchParams] = useSearchParams()
  const searchParamsObj = Object.fromEntries(searchParams)
  return searchParamsObj
}
