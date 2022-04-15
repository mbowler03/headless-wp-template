import { MapIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';

export default function Nav() {
  const { loggedIn } = useAuth();

  return (
    <header className='bg-indigo-600'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
          <div className='flex items-center'>
            <div className='hover:bg-opacity-75 hover:animate-bounce'>
            
              <MapIcon className='text-white' />
              <span className='text-white'>
              <Link href='/'>
                <a>Map for Ants</a>
              </Link>
              </span>
            </div>
          
            {!loggedIn ? (
              <>
                <div className='ml-10 space-x-4'>
                  <div className='inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'>
                    <Link href='/log-in'>
                      <a>Log In</a>
                    </Link>
                  </div>
                  <div className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'>
                    <Link href='/sign-up'>
                      <a>Sign Up</a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
               <div className='ml-10 space-x-4'>
              <div className='w-full py-6 flex items-center justify-between'>
              <div className='flex items-center space-x-6'>
                <div className='text-base font-medium text-white hover:text-indigo-50'>
                  <Link href='/members'>
                    <a>MAPS</a>
                  </Link>
                </div>
                <div className='text-base font-medium text-white hover:text-indigo-50'>
                  <Link href='/create-post'>
                    <a>Create Post</a>
                  </Link>
                </div>
                <div className='text-base font-medium text-white hover:text-indigo-50'>
                  <Link href='/profile'>
                    <a>Profile</a>
                  </Link>
                </div>
                <div className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'>
                  <Link href='/log-out'>
                    <a>Log Out</a>
                  </Link>
                </div>
                </div>
                </div>
                </div>
              </>
            )}
            </div>
          </div>
       
      </nav>
    </header>
  );
}
