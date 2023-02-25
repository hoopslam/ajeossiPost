import Image from 'next/image';
import urlFor from '../lib/urlFor';
import { Post } from '../typings';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ChipButton, { ChipColor, ChipSize } from './ChipButton';

interface Props {
    post: Post;
}

function Card({ post }: Props) {
    return (
        <div className='flex group cursor-pointer flex-col'>
            <div className='relative w-full h-64 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out sm:h-80'>
                <Image
                    className='object-cover object-left lg:object-center'
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                />
            </div>
            <div className='mt-5 flex-1'>
                <p className='text-xl font-bold'>{post.title}</p>
                <p className='text-gray-500 line-clamp-2'>{post.description}</p>
            </div>
        </div>
    );
}

export default Card;
