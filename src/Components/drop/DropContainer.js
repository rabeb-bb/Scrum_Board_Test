import React from "react";

const DropContainer = ({ onDrop, children, status }) => {
  //on drop on the item dragged over
  const allowDrop = (e) => {
    e.preventDefault();
  };

  //handling data transfer when dropped
  const handleDrop = (e) => {
    const data = JSON.parse(e.dataTransfer.getData("item"));
    onDrop(data, status);
  };

  return (
    <div onDragOver={allowDrop} onDrop={handleDrop}>
      {children}
    </div>
  );
};

export default DropContainer;
