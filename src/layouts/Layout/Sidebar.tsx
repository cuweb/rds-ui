const Sidebar = (props: { children: any }) => {
    const { children } = props
    return <aside className='multicol__sidebar'>{children}</aside>
}
export default Sidebar
