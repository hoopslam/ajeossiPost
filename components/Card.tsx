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
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                <Image
                    className='object-cover object-left lg:object-center'
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                />
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                    <div>
                        <p className='font-bold'>{post.title}</p>
                        <p>
                            {new Date(post._createdAt).toLocaleDateString(
                                'en-Us',
                                {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                }
                            )}
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                        {post.categories?.slice(0, 3).map((category) => (
                            <ChipButton
                                key={category._id}
                                color={ChipColor.gray}
                                size={ChipSize.small}
                            >
                                <p>{category.title}</p>
                            </ChipButton>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-5 flex-1'>
                <p className='underline text-lg font-bold'>{post.title}</p>
                <p className='text-gray-500 line-clamp-2'>{post.description}</p>
            </div>
            <p className='mt-5 font-bold flex items-center group-hover:underline'>
                Read Post
                <ArrowUpRightIcon className='ml-2 h-4 w-4' />
            </p>
        </div>
    );
}

export default Card;
