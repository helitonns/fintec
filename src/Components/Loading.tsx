import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  borderRight: "var(--color-4)",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  animation: "spin 1s infinite",
}


const Loading = () => {
  return (
  <div style={style}>
    
  </div>
  );
};

export default Loading;
