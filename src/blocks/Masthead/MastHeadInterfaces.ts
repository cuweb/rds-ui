type Brand = string | undefined
type MenuItem = {
    text: string
    link: string
}[]

type Actions = {
    text: string
    link: string
}[]

export interface MastheadProps {
    title: string
    url: string
    brand?: Brand
    actions?: Actions
    menu?: MenuItem
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
    menu: MenuItem
}
