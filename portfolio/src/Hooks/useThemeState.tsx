'use client'
import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useThemeState() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useNextTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    theme,
    setTheme,
    resolvedTheme,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    mounted
  }
}