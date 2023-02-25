import { previewData } from 'next/headers';
import {
    featuredPostQuery,
    getInitialPosts,
    getPostsFromToQuery,
    totalPosts,
} from '../../groq/queries';
import PreviewSuspense from '../../components/preview/PreviewSuspense';
import PreviewBlogList from '../../components/preview/PreviewBlogList';
import BlogList from '../../components/BlogList';
import Loading from '../../components/Loading';
import { client } from '../../lib/sanity.client';
import { Post } from '../../typings';
import Banner from '../../components/Banner';
import FeaturedSection from '../../components/FeaturedSection';

export const revalidate = 86400; ////prebuild static pages once every (1 day) 86400 seconds

export default async function Page() {
    if (previewData()) {
        return (
            <PreviewSuspense fallback={<Loading />}>
                <PreviewBlogList query={getPostsFromToQuery(0, 4)} />
            </PreviewSuspense>
        );
    }

    const latestFeaturedPost = (await client.fetch(featuredPostQuery)) as Post;
    const latestPosts = (await client.fetch(
        getInitialPosts(latestFeaturedPost._id)
    )) as Post[];
    const totalAmountOfPosts = (await client.fetch(totalPosts)) as number;

    return (
        <div className='flex flex-col justify-start items-center pb-5'>
            <Banner />
            <FeaturedSection post={latestFeaturedPost} />
            <h2 className='text-2xl font-bold py-5 mt-3'>Latest Posts</h2>
            <BlogList
                latestPosts={latestPosts}
                totalPosts={totalAmountOfPosts}
            />
        </div>
    );
}
