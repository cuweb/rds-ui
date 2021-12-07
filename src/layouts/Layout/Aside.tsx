import React from 'react'

const Aside = (props: { children: React.ReactNode }) => {
    const { children } = props
    return <aside className='multicol__nav'>{children}</aside>
}
export default Aside
