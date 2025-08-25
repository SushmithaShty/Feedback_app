import React from "react";

// DropdownItem
const DropdownItem = ({ children, onClick }) => (
  <div
    className="dropdown-item"
    onClick={onClick}
    style={{ cursor: "pointer", padding: "6px" }}
  >
    {children}
  </div>
);

// DropdownMenu, now aligned top-right and styled as a button
export const DropdownMenu = ({ zoomLevel, setZoomLevel }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleZoomChange = (action) => {
    if (action === "in") {
      setZoomLevel((prev) => Math.min(prev + 0.1, 2));
    } else if (action === "out") {
      setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
    } else if (typeof action === "number") {
      setZoomLevel(action);
    }
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "150px",
        zIndex: 2000,
      }}
    >
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        style={{
            
          backgroundColor: "#212b34ff",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px",
          minWidth: "100px",
        }}
      >
        View ▼
      </button>
      {isOpen && (
        <div
          className="dropdown-content"
          style={{
            border: "1px solid #cccccc9d",
          padding: "8px 10px",           // increased padding
  background: "#ffffffa3",
  position: "absolute",
  right: 0,
  marginTop: "4px",
  borderRadius: "4px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  width: "200px",                // increased width
  boxSizing: "border-box"        // ensure padding included in width

          }}
        >
          <DropdownItem onClick={() => handleZoomChange("in")}>Zoom in</DropdownItem>
          <DropdownItem onClick={() => handleZoomChange("out")}>Zoom out</DropdownItem>
          <DropdownItem onClick={() => handleZoomChange(0.5)}>Zoom to 50%</DropdownItem>
          <DropdownItem onClick={() => handleZoomChange(1)}>Zoom to 100%</DropdownItem>
          <DropdownItem onClick={() => handleZoomChange(2)}>Zoom to 200%</DropdownItem>
          <hr />
          <DropdownItem onClick={() => alert("Pixel preview toggled")}>Pixel preview</DropdownItem>
          <DropdownItem onClick={() => alert("Pixel grid toggled")}>Pixel grid</DropdownItem>
          <DropdownItem onClick={() => alert("Snap to pixel grid toggled")}>Snap to pixel grid</DropdownItem>
          <DropdownItem onClick={() => alert("Rulers toggled")}>Rulers</DropdownItem>
          <DropdownItem onClick={() => alert("Multiplayer cursors toggled")}>Multiplayer cursors</DropdownItem>
          <DropdownItem onClick={() => alert("Property labels toggled")}>Property labels</DropdownItem>
          <hr />
          <DropdownItem onClick={() => alert("Comments toggled")}>Comments</DropdownItem>
          <DropdownItem onClick={() => alert("Prototyping toggled")}>Prototyping</DropdownItem>
        </div>
      )}
    </div>
  );
};

const SideButton = ({ children, onClick }) => (
  <div className="dropdown-item" onClick={onClick} style={{ cursor: "pointer", padding: "6px" }}>
    {children}
  </div>
);

export default SideButton;
