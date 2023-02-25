import urlFor from '../lib/urlFor';
import Image from 'next/image';
import { Post } from '../typings';
import ClientSideRoute from './ClientSideRoute';

interface Props {
    post: Post;
}

function FeaturedSection({ post }: Props) {
    return (
        <div className='flex flex-col-reverse items-start justify-center w-full px-10 sm:p-10 md:flex-row'>
            <div className='relative h-64 w-full lg:basis-2/3 sm:h-96'>
                <ClientSideRoute
                    key={post._id}
                    route={`/post/${post.slug.current}`}
                >
                    <Image
                        className='object-cover object-left lg:object-center'
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </ClientSideRoute>
            </div>
            <div className='flex flex-col items-start justify-start px-5 py-3 lg:basis-1/3 sm:p-10'>
                <ClientSideRoute
                    key={post._id}
                    route={`/post/${post.slug.current}`}
                >
                    <h1 className='text-3xl font-bold py-2 sm:text-5xl xl:text-7xl'>
                        {post.title}
                    </h1>
                    <p className='text-xl text-gray-500 sm:text-lg'>
                        {post.description}
                    </p>
                </ClientSideRoute>
            </div>
        </div>
    );
}

export default FeaturedSection;
