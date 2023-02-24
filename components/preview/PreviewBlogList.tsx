'use client';

import { useRouter } from 'next/navigation';
import { usePreview } from '../../lib/sanity.preview';
import { Post } from '../../typings';
import BlogList from '../BlogList';

interface Props {
    query: string;
}

export default function PreviewBlogList({ query }: Props) {
    const router = useRouter();
    const posts = usePreview(null, query) as Post[];

    return (
        <>
            <h1
                className='cursor-pointer'
                onClick={() => router.push(`./api/exit-preview`)}
            >
                Exit Preview Mode
            </h1>
            <BlogList
                latestPosts={posts}
                totalPosts={10}
            />
        </>
    );
}
