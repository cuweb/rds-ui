import LayoutAside from './LayoutAside'
import LayoutMain from './LayoutMain'
import LayoutWrapper from './LayoutWrapper'

const LayoutMA = (props: { children: any; aside: any }) => {
    const { children, aside } = props
    return (
        <LayoutWrapper type="ma">
            <LayoutMain>{children}</LayoutMain>
            <LayoutAside>{aside}</LayoutAside>
        </LayoutWrapper>
    )
}
export default LayoutMA
