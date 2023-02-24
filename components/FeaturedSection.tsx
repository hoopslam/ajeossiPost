import urlFor from '../lib/urlFor';
import Image from 'next/image';
import { Post } from '../typings';
import ClientSideRoute from './ClientSideRoute';

interface Props {
    post: Post;
}

function FeaturedSection({ post }: Props) {
    return (
        <div className='flex flex-col items-start justify-center w-full p-10 lg:flex-row'>
            <div className='relative h-[32rem] w-full lg:basis-2/3'>
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
            <div className='flex flex-col items-start justify-start px-5 lg:basis-1/3'>
                <ClientSideRoute
                    key={post._id}
                    route={`/post/${post.slug.current}`}
                >
                    <h1 className='text-7xl font-bold py-5'>{post.title}</h1>
                    <p className='text-xl text-gray-500'>{post.description}</p>
                </ClientSideRoute>
            </div>
        </div>
    );
}

export default FeaturedSection;
