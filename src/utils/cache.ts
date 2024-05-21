enum CacheType {
  local,
  session,
}

class Cache {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value || value !== false) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, initial?: any) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    } else {
      this.setCache(key, initial)
    }
  }

  removCache(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const LocalCache = new Cache(CacheType.local)
const sessionCache = new Cache(CacheType.session)

export { LocalCache, sessionCache }
