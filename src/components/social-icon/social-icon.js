import React from "react";

const SocalIcon = ({ icon, size }) => {
  const svg = `public/logos/${icon}-${size}.svg`;
  console.log(svg);
  console.log(icon);
  console.log(size);

  return (
    <div className="social">
      <object data={svg} type="image/svg+xml" className="icon-object">
        <img src={svg} alt={`icon-${icon}`} />
      </object>
    </div>
  );
};

export default SocalIcon;

// CONTINUE WITH SOCIAL ICON
// SHOULD BE AN A TAG INSTEAD HYPERLINK
