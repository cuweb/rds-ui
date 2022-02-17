import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem'
import { NavMenuTypes } from '@components/NavMenu/NavMenu'
import { SearchFormProps } from '@components/SearchForm/SearchForm'
import { LoginProps } from '../Login/Login'

export type Brand = string | undefined
export type Menu = Array<NavMenuTypes>

export type Actions = {
    search?: SearchFormProps
    login?: LoginProps
    buttons?: Array<NavMenuItemTypes & { color?: 'red' | 'white' | string }>
}
