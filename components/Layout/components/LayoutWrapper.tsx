const LayoutWrapper = (props: { type: string; children: any }) => {
    const { type, children } = props
    return <div className={`l-multicol l-multicol--${type}`}>{children}</div>
}
export default LayoutWrapper
