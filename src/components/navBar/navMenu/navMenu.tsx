import React, { forwardRef } from 'react';

const NavMenu = forwardRef<HTMLDivElement>((_, ref) => {
    return (
      <div ref={ref} className="bg-white w-full">
          <button className="w-full text-sm py-2 text-center font-bold">
            <span className="cursor-pointer">How it Works</span>
          </button>
          <button className="w-full text-sm py-2 text-center font-bold">
          <span className="cursor-pointer">Who it&apos;s for</span>
          </button>
          <button className="w-full text-sm py-2 text-center font-bold">
          <span className="cursor-pointer">Blog</span>
          </button>
      </div>
    );
});

NavMenu.displayName = 'NavMenu';

export default NavMenu;