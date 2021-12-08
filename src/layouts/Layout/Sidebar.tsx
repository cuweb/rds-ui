import React from 'react'

const Sidebar = (props: { children: React.ReactNode }) => {
    const { children } = props
    return <aside className='multicol__sidebar'>{children}</aside>
}
export default Sidebar
