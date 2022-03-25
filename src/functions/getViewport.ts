const getViewport = (): string => {
    if (window.matchMedia('(max-width: 500px)').matches) return 'mobile'
    if (window.matchMedia('(max-width: 1024px)').matches) return 'tablet'
    return 'desktop'
}
export default getViewport
