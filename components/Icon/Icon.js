const Icon = (props) => {
  const { icon, width, height, svg } = props;

  if (svg) return svg;

  const icons = {
    plus: <path d='M24 14H14v10h-4V14H0v-4h10V0h4v10h10z' />,
    arrowDown: <path d='M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z' />,
  };

  return (
    <svg
      className='c-icon'
      viewBox='0 0 24 24'
      width={width || 16}
      height={height || 16}
      xmlns='http://www.w3.org/2000/svg'
    >
      {icons[icon] || null}
    </svg>
  );
};
export default Icon;
