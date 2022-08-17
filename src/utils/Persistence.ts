export interface IPersistence {
  get: (key: string) => Record<string, any>
  set: (key: string, value: any) => void
  delete: (key: string) => void
  clear: () => void
}
export class Persistence implements IPersistence {
  private readonly storage: Storage
  constructor() {
    this.storage = localStorage
  }
  get(key: string) {
    return JSON.parse(this.storage.getItem(key) ?? '{}')
  }
  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }
  delete(key: string) {
    this.storage.removeItem(key)
  }
  clear() {
    this.storage.clear()
  }
}
