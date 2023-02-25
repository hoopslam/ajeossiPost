import { postQuery, slugsQuery } from '../../../../groq/queries';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import { Post } from '../../../../typings';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import RichTextDecorator from '../../../../lib/RichTextDecorator';
import ChipButton, {
    ChipColor,
    ChipSize,
} from '../../../../components/ChipButton';
import AuthorCard from '../../../../components/AuthorCard';

interface Props {
    params: {
        slug: string;
    };
}

export const revalidate = 86400; //prebuild static pages once every (1 day) 86400 seconds

export async function generateStaticParams() {
    const slugs: Post[] = await client.fetch(slugsQuery);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({ slug }));
}

async function Post({ params: { slug } }: Props) {
    const post: Post = await client.fetch(postQuery, { slug });

    return (
        <article className='px-10 pb-28 max-w-4xl mx-auto'>
            <section className='relative h-64 sm:min-h-[28rem] mt-4'>
                <div className='w-full h-full p-10'>
                    <Image
                        className='object-cover object-center mx-auto'
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>
            </section>
            <section className='flex flex-col items-center justify-between w-full sm:flex-row'>
                <AuthorCard
                    name={post.author.name}
                    profileImage={urlFor(post.author.image).url()}
                    postDate={post._createdAt}
                />
                <div className='flex flex-wrap w-full max-w-xs justify-end'>
                    {post.categories?.slice(0, 6).map((category) => (
                        <ChipButton
                            key={category._id}
                            size={ChipSize.small}
                            color={ChipColor.gray}
                        >
                            {`# ${category.title}`}
                        </ChipButton>
                    ))}
                </div>
            </section>
            <h1 className='text-4xl font-extrabold mt-5 text-center'>
                {post.title}
            </h1>

            <PortableText
                value={post.body}
                components={RichTextDecorator}
            />
        </article>
    );
}

export default Post;
