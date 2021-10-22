import Icon from '../Icon/Icon';

const Button = (props) => {
  const {
    ghost,
    text = 'Click',
    link = '#',
    icon,
    full,
    children,
    target,
  } = props;
  const isGhost = ghost ? 'c-buttoncta--ghost' : '';
  const isFull = full ? 'c-buttoncta--full' : '';
  return (
    <a
      className={`c-buttoncta ${isFull} ${isGhost}`}
      target={`_${target}`}
      href={link}
    >
      {icon && <Icon icon={icon} />}
      {children}
      {text}
    </a>
  );
};
export default Button;
