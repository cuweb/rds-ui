import LayoutAside from './LayoutAside'
import LayoutMain from './LayoutMain'
import LayoutWrapper from './LayoutWrapper'

const LayoutAM = (props: { children: any; aside: any }) => {
    const { children, aside } = props
    return (
        <LayoutWrapper type='am'>
            <LayoutAside>{aside}</LayoutAside>
            <LayoutMain>{children}</LayoutMain>
        </LayoutWrapper>
    )
}
export default LayoutAM
