const Icon = (props) => {
  const { icon } = props;

  const icons = {
    plus: (
      <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M24 14H14v10h-4V14H0v-4h10V0h4v10h10z'></path>
      </svg>
    ),
    arrowDown: (
      <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z' />
      </svg>
    ),
  };
  return icons[icon] || null;
};
export default Icon;
