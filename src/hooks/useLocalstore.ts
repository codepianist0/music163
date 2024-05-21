import { useEffect, useState } from "react"

// export const useLocalStore = (key: string, initial: any) => {
//   const [data, setData] = useState(() => {
//     const item = localStorage.getItem(key)
//     if (!item) return initial
//     return JSON.parse(item)
//   })
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(data))
//   }, [key, data])
//   return [data, setData]
// }
