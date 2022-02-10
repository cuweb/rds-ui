type Brand = string | undefined
type Actions = {
    text: string
    link: string
}[]

export interface MastheadProps {
    title: string
    url: string
    brand?: Brand
    actions?: Actions
}

export interface MastheadTitleProps {
    title: string
    url: string
    brand?: Brand
}

export interface MastheadActionsProps {
    items: Actions
}
