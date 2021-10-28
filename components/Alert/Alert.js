import Icon from '../Icon/Icon';

const Alert = (props) => {
  const { type, title, content, handleClose } = props;
  const renderType = type ? type : 'error';

  const icon = {
    error: 'alert',
    info: 'info',
    success: 'verified',
    warning: 'warning',
  };

  return (
    <div className={`c-alert c-alert--${renderType}`} role={renderType}>
      <Icon
        icon={icon[type || 'error']}
        size={30}
        className={`c-alert__icon c-alert__icon--${renderType}`}
      />
      <h2>{title || 'Please add a title'}</h2>
      {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
      <Icon
        icon={'x'}
        size={12}
        className={`c-alert__button c-alert__button--${renderType}`}
        onClick={(e) => (handleClose ? handleClose(e) : false)}
      />
    </div>
  );
};
export default Alert;
