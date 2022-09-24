import React, { useState } from "react";

interface MenuProps {
  className: string;
  children: React.ReactNode;
  width: number;
}

export default function Menu<MenuProps>({
  className = "",
  children = {},
  width = 300,
  ...props
}) {
  const [menuStyle, setMenuStyle] = useState("");
  const [menuOffset, setMenuOffset] = useState(-width);
  const [backdrop, setBackdrop] = useState("hidden");
  const menuTransition = "transition-transform duration-150 ease-out";
  const backdropTransition = "transition-opacity duration-500 ease-out";

  const openMenu = () => {
    setMenuStyle(`${menuTransition}`);
    setMenuOffset(0);
    setBackdrop(`${backdropTransition}`);
  };

  const closeMenu = () => {
    setMenuStyle(`${menuTransition}`);
    setMenuOffset(-width);
    setBackdrop(`hidden ${backdropTransition}`);
  };

  //////////////////////////////////////////////////////////////////
  // Feel free to edit anything as you see fit
  return (
    <>
      {/* Menu icon that users can click to open */}
      <button
        type="button"
        onClick={openMenu}
        className={`fixed top-0 left-0 ${className}`}
        {...props}
      >
        {/* You can colour the menu using text-xxx styles in Tailwind. */}
        <HamburgerIcon className="w-10 h-8 fill-current" />
      </button>

      {/* the 'dimming' backdrop when the menu is open. Users can click on it to close the menu */}
      <div
        onClick={closeMenu}
        className={`${backdrop} w-screen h-screen bg-black fixed top-0 left-0 opacity-50`}
      ></div>

      {/* the content of the menu */}
      <div
        className={`${menuStyle} mmenu fixed top-0 left-0 h-full overflow-y-auto bg-white`}
        style={{
          width: width,
          transform: `translateX(${menuOffset}px)`
        }}
      >
        {children}
      </div>
    </>
  );
}

// Adopted from https://css-tricks.com/snippets/svg/svg-hamburger-menu/
const HamburgerIcon = ({ ...props }) => {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <rect y="20" width="80" height="11"></rect>
      <rect y="50" width="80" height="11"></rect>
      <rect y="80" width="80" height="11"></rect>
    </svg>
  );
};
