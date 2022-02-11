import React from 'react'
import { SearchFormProps } from '@src/components/SearchForm/SearchForm'

export type Brand = string | undefined
export type MenuItem = {
    id?: string | number
    text: string
    link: string
    subMenu?: MenuItem[]
}

export type Menu = Array<MenuItem>
export type Login = {
    title?: string
    forgetLink: string
    registerLink: string
    onSubmit?: React.FormEventHandler
}

export type Actions = {
    search?: SearchFormProps
    login?: Login
}
