"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { DialogTitle } from '@radix-ui/react-dialog'; // Adjust the import according to your library
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'; // Adjust the import according to your library

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }
];

 

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <VisuallyHidden>
                    <DialogTitle>Navigation Menu</DialogTitle>
                </VisuallyHidden>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    {/* Add your logo here */}
                    <a href='/'>
                        <h1 className='text-4xl font-semibold'>
                            Chamika<span className='text-accent'>.</span>
                        </h1>
                    </a>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <a
                                href={link.path}
                                key={index}
                                className={`text-xl capitalize hover:text-accent transition-all ${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''}`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
