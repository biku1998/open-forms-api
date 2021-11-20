import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children,
  onClick,
  className,
  startIcon,
  disabled,
  loading,
}) {
  const buttonClickHandler = (event) => {
    if (disabled) return;
    if (onClick) onClick(event);
  };

  const renderStartSection = () => {
    if (loading) return null;
    if (startIcon) {
      return <div className="mr-3">{startIcon}</div>;
    }
    return null;
  };
  return (
    <div className={className}>
      <button
        className={`text-white ${
          disabled || loading === true
            ? 'cursor-not-allowed bg-blue-300'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
        }  px-4 py-2 font-medium rounded-md text-center text-sm lg:text-base ${
          startIcon ? 'flex items-center justify-between' : ''
        }
       
        `}
        type="button"
        onClick={buttonClickHandler}
        disabled={disabled}
      >
        {renderStartSection()}
        {loading ? 'loading...' : children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  children: 'Button',
  // variant: 'contained',
  startIcon: null,
  // endIcon: null,
  disabled: false,
  loading: false,
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  startIcon: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  // endIcon: PropTypes.node,
  // variant: PropTypes.oneOf(['contained', 'outlined']),
};
