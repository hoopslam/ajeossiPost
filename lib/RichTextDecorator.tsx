import Image from 'next/image';
import Link from 'next/link';
import urlFor from './urlFor';

export const RichTextDecorator = {
    types: {
        image: ({ value }: any) => {
            return (
                <>
                    <div className='relative p-5 w-full h-64 sm:h-100 mt-5 mx-auto overflow-hidden'>
                        <Image
                            className='object-contain'
                            src={urlFor(value).url()}
                            alt={value.caption}
                            fill
                        />
                    </div>
                    <p className='text-center'>{value.caption}</p>
                </>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className='mt-lg list-decimal'>{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className='text-4xl py-5 font-bold'>{children}</h1>
        ),
        h2: ({ children }: any) => {
            return <h2 className='text-3xl py-5 font-bold'>{children}</h2>;
        },
        h3: ({ children }: any) => (
            <h3 className='text-2xl py-5 font-bold'>{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className='text-2xl py-5 font-bold'>{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className='border-l-blue-500 border-l-4 pl-5 py-5 my-5 text-xl'>
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className='mb-4 text-xl text-gray-500'>{children}</p>
        ),
    },
    marks: {
        internalLink: ({ children, value }: any) => (
            <Link
                href={`/post/${value.slug.current}`}
                className='underline'
            >
                {children}
            </Link>
        ),
        link: ({ children, value }: any) =>
            value?.blank ? (
                <a
                    href={value.href}
                    target='_blank'
                    rel={'noreferrer noopener'}
                    className='underline'
                >
                    {children}
                </a>
            ) : (
                <Link
                    href={value.href}
                    className='underline'
                >
                    {children}
                </Link>
            ),
    },
};

export default RichTextDecorator;
