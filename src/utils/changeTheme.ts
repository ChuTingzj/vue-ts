import { Persistence } from './Persistence'
import type { ITheme } from '@/types/Storage'
export function changeTheme() {
  const storage = new Persistence()
  const theme = storage.get('theme') as ITheme
  if (
    theme.themeColor === 'dark' ||
    (!Reflect.has(theme, 'themeColor') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
