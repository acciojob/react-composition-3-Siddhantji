import React from "react";
import "../styles/App.css";
const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;
