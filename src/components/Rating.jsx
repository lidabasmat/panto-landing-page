import classnames from 'classnames';
import * as React from 'react';
import PropTypes from '../utils/PropTypes';

const Rating = ({ className, stars }) => {
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <div className={classnames("flex", className)}>
      {starsArray.map((i) => (
        <span className={classnames(
          'text-orange-600 ml-1 first:ml-0',
          {
            'opacity-40': i > stars,
          }
        )}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  className: PropTypes.string,
  stars: PropTypes.number,
};

Rating.defaultProps = {
  className: '',
  stars: 5,
};

export default Rating;
