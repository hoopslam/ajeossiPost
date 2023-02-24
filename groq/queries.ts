import { groq } from 'next-sanity';

export const postsQuery = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

export const totalPosts = groq`
    count(*[_type=='post'])
`;

export const postQuery = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        body[]{
            ...,
            markDefs[]{
                ...,
                _type == "internalLink" => {
                  ...,
                  "slug": @.item->slug
                }
              },
        },
        author->,
        categories[]->
    }
`;

export const featuredPostQuery = groq`
    *[_type=='post' && featured == true] | order(_createdAt desc)[0]
`;

export const slugsQuery = groq`
    *[_type=='post']
    {
        slug
    }
`;

export const getPostsFromToQuery = (from: number, to: number) => groq`
    *[_type=='post'] | order(_createdAt desc) [${from}...${to}] {
        ...,
        author->,
        categories[]->
    }
`;
