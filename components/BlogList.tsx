'use client';

import { Post } from '../typings';
import Card from './Card';
import ClientSideRoute from './ClientSideRoute';
import { useState } from 'react';
import { client } from '../lib/sanity.client';
import { getPostsFromToQuery } from '../groq/queries';

interface Props {
    latestPosts: Post[];
    totalPosts: number;
}

export default function BlogList({ latestPosts, totalPosts }: Props) {
    const [postList, setPostList] = useState(latestPosts);
    const [viewMore, setViewMore] = useState(totalPosts > latestPosts.length);

    const getMorePosts = async () => {
        const newPostList = (await client.fetch(
            getPostsFromToQuery(postList.length, postList.length + 10)
        )) as Post[];
        if (newPostList.length < totalPosts) {
            setViewMore(false);
        }
        setPostList((prev) => [...prev, ...newPostList]);
    };

    return (
        <div className='w-full flex flex-col items-center justify-start'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 w-full mb-4'>
                {postList.map((post) => (
                    <ClientSideRoute
                        key={post._id}
                        route={`/post/${post.slug.current}`}
                    >
                        <Card post={post} />
                    </ClientSideRoute>
                ))}
            </div>
            {viewMore && (
                <button
                    className='px-4 py-2 text-sm md:text-base bg-blue-500 text-white flex items-center rounded-full text-center'
                    onClick={getMorePosts}
                >
                    View More
                </button>
            )}
        </div>
    );
}
