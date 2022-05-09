import { ReactNode } from 'react'

export type UserInfoType = {
    firstName: string
    lastName: string
    image?: UserImageType
    info?: ReactNode
}

export type UserImageType = {
    src: string
    alt?: string
}
