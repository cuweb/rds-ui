import React from 'react'

const Main = (props: { children: React.ReactNode }) => {
    const { children } = props
    return <main className='multicol__main'>{children}</main>
}
export default Main
