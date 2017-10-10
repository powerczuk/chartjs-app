import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  buttonLabel,
  chart,
  descriptionValuePrefix,
  descriptionValue,
  descriptionLabel,
  icon,
  statisticsLabel
}) => (
  <div className="statistics">
    <div className="statistics__header">
      <div className="statistics__icon">
        {icon}
      </div>
      <span className="statistics__label">{statisticsLabel}</span>
    </div>
    <div className="statistics__content">
      <div className="statistics__chart">
        {chart}
      </div>
      <aside className="statistics__aside">
        <summary className="statistics__description">
          {descriptionValuePrefix && <span className="statistics__description-prefix">{descriptionValuePrefix}</span>}
          <span className="statistics__description-value">{descriptionValue}</span>
          <span className="statistics__description-label">{descriptionLabel}</span>
        </summary>
        <button>{buttonLabel}</button>
      </aside>
    </div>
  </div>
);

Statistics.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  chart: PropTypes.node.isRequired,
  descriptionValuePrefix: PropTypes.string,
  descriptionValue: PropTypes.string.isRequired,
  descriptionLabel: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  statisticsLabel: PropTypes.string.isRequired
};

export default Statistics;
