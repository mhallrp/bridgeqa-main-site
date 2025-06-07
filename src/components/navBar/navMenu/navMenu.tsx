import Link from 'next/link';
import { forwardRef } from 'react';

const NavMenu = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="bg-white w-full">
      <Link href="/how-it-works">
        <button className="w-full text-sm py-2 text-center font-bold">
          <span className="cursor-pointer">How it Works</span>
        </button>
      </Link>
      <Link href="/who-its-for">
        <button className="w-full text-sm py-2 text-center font-bold">
          <span className="cursor-pointer">Who it&apos;s for</span>
        </button>
      </Link>
            <Link href="/blog">
        <button className="w-full text-sm py-2 text-center font-bold">
          <span className="cursor-pointer">Blog</span>
        </button>
      </Link>
    </div>
  );
});

NavMenu.displayName = 'NavMenu';

export default NavMenu;