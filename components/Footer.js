import React from "react";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  const name = " Mahabur Rahman ";
  return (
    <footer id="footer">
      <div className="footer_content">
        <p>
          &copy; copyright and all rights reserved {`${date}.`}
          Developed by
          <Link href="/contact" className="name">
            {name}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
