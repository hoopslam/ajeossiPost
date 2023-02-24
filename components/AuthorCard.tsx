import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

interface Props {
    name: string;
    profileImage: string;
    postDate?: string;
}

function AuthorCard({ name, profileImage, postDate }: Props) {
    return (
        <ClientSideRoute route='/post/about'>
            <div className='flex items-center justify-center my-4'>
                <Image
                    className='rounded-full'
                    src={profileImage}
                    alt={name}
                    height={64}
                    width={64}
                />
                <div className='flex flex-col ml-4 item-center justify-center'>
                    <p className='text-xl font-bold'>{name}</p>
                    {postDate && (
                        <p className='text-lg text-gray-500'>
                            {new Date(postDate).toLocaleDateString('en-Us', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </p>
                    )}
                </div>
            </div>
        </ClientSideRoute>
    );
}

export default AuthorCard;
