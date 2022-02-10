type Brand = string | undefined
type MenuItem = {
    id: string | number
    text: string
    link: string
    subMenu?: MenuItem[]
}

type Menu = Array<MenuItem>

type Actions = {
    text: string
    link: string
}[]

export interface MastheadProps {
    title: string
    url: string
    brand?: Brand
    actions?: Actions
    menu?: Menu
}

export interface MastheadTitleProps {
    title: string
    url: string
    brand?: Brand
}

export interface MastheadActionsProps {
    items: Actions
}

export interface MastheadMenuProps {
    menu: Menu
}

export interface MastheadMenuItemProps {
    item: MenuItem
}
