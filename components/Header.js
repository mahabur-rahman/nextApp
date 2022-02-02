import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="header_content">
        <h2 className="font-bold text-2xl">Md. Mahabur Rahman</h2>
        <p className="text-capitalize text-gray-600">Software Developer</p>
        <div className="flex gap-3 justify-center">
          <p>Phone: 355464</p>
          <p>Email: fake@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
