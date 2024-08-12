'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Navbar = () => {
 
  const route = useRouter();
  const pathname = usePathname();
  const session = useSession();
  // console.log(session.data.user)
  const handle = ()=>{
    route.push("/api/auth/signin")
  }


  // Define your routes and their respective titles
  const routes = [
    { path: '/home', title: 'Home' },
    // { path: '/about', title: 'About' },
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
      <h2 className="text-2xl mr-5 flex justify-between">

      <div className='flex justify-between  gap-2'>
      <Link href={'/api/auth/signup'}>
        <button  className="btn">
           SignUp
          </button>
        </Link>
        {
          session.status =='authenticated'? <button onClick={()=>signOut()} className="btn">
           Logout
          </button>
          :
          <button onClick={handle} className="btn">
          Login
           </button>
        }

      </div>

        </h2>



    <div>

      <Image width={50} height={50} src={session?.data?.user?.image} alt="User Image" />
  

        <h3>
        {  session?.data?.user?.name}
        </h3>
        <h3>
        {  session?.data?.user?.type}
        </h3>
 </div>
       
    
    </nav>
  );
};

export default Navbar;
