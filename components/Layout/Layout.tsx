import LayoutMA from './components/LayourMA'
import LayoutAM from './components/LayoutAM'
import LayoutAMA from './components/LayoutAMA'

const Layout = (props: {
    children: any
    type: string
    aside: any
    sidebar: any
}) => {
    const { children, type } = props
    if (type === 'am') return <LayoutAM {...props} />
    if (type === 'ma') return <LayoutMA {...props} />
    if (type === 'ama') return <LayoutAMA {...props} />
    return <main>{children}</main>
}
export default Layout
