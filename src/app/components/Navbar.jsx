'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  // Define your routes and their respective titles
  const routes = [
    { path: '/home', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/service', title: 'Service' },
    { path: '/blogs', title: 'Blogs' },
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/posts', title: 'Posts' },
    { path: '/meals', title: 'Meals' },
    { path: '/galary', title: 'Gallery' },
  
    { path: '/categories', title: 'Categories' }
  ];

  if (pathname.includes('dashboard')) {
    return (
      <div className="bg-red-500">
        <h2 className="text-2xl">Dashboard Layout</h2>
      </div>
    );
  }

  return (
    <nav className="flex py-3 px-4 justify-between gap-2 ps-2 items-center bg-blue-300">
      <h2 className="text-3xl">Next <span className="text-cyan-500">Hero</span></h2>
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mr-5">
        <Link href="/login">Login</Link>
      </h2>
    </nav>
  );
};

export default Navbar;
