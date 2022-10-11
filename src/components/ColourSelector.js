import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { label, className, background } = config;
  return (
    <button className={ classname } onClick={() => selectNextBackground({background: background})}>
      {/* label should come here */}
    </button>
  )
}
export default ColourSelector;
