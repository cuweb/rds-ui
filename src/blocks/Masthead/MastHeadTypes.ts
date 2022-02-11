export type Brand = string | undefined
export type MenuItem = {
    id?: string | number
    text: string
    link: string
    subMenu?: MenuItem[]
}
export type Menu = Array<MenuItem>
export type Actions = {
    search?: {
        title?: string
    }
}
