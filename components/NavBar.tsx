import ClientSideRoute from './ClientSideRoute';
import { HomeIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between space-x-2 font-bold px-3 sm:px-10 py-5 border-b-2 border-red-600'>
            <ClientSideRoute route='/'>
                <div className='flex items-center space-x-2'>
                    <HomeIcon className='ml-2 h-8 w-8' />
                    <h1 className='font-bold text-xl sm:text-2xl'>
                        The Ajeossi Post
                    </h1>
                </div>
            </ClientSideRoute>
            <ClientSideRoute route='/post/about'>
                <div>About Me</div>
            </ClientSideRoute>
        </nav>
    );
};

export default NavBar;
