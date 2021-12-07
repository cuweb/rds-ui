import React from 'react'

const Layout = (props: { children: React.ReactNode; type: string }) => {
    const { children, type } = props
    const styles = type ? `l-multicol l-multicol--${type}` : ''

    if (!type) return <main>{children}</main>

    return (
        <main>
            <div className={styles}>{children}</div>
        </main>
    )
}
export default Layout
