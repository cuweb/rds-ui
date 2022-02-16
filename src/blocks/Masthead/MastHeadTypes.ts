import { SearchFormProps } from '@components/SearchForm/SearchForm'
import { LoginProps } from '../Login/Login'

export type Brand = string | undefined
export type MenuItem = {
    id?: string | number
    text: string
    link: string
    subMenu?: MenuItem[]
}

export type Menu = Array<MenuItem>

export type Actions = {
    search?: SearchFormProps
    login?: LoginProps
    buttons?: MenuItem[]
}
