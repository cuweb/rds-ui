export interface ThemeType {
    breakpoints: {
        mobile: number
        tablet: number
        desktop: number
    }
}
const theme: ThemeType = {
    breakpoints: {
        mobile: 450,
        tablet: 1100,
        desktop: 1600,
    },
}

export default theme
