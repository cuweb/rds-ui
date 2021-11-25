import LayoutAside from './LayoutAside'
import LayoutMain from './LayoutMain'
import LayoutSidebar from './LayoutSidebar'
import LayoutWrapper from './LayoutWrapper'

const LayoutAMA = (props: { children: any; aside: any; sidebar: any }) => {
    const { children, aside, sidebar } = props
    return (
        <LayoutWrapper type="ama">
            <LayoutAside>{aside}</LayoutAside>
            <LayoutMain>{children}</LayoutMain>
            <LayoutSidebar>{sidebar}</LayoutSidebar>
        </LayoutWrapper>
    )
}
export default LayoutAMA
