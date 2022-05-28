import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/Loading';
import ShowBlogs from './ShowBlogs';

const Blogs = () => {


    const { data: blogs, isLoading } = useQuery('blogs', () => fetch('http://localhost:5000/blogs').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className=''>
            <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12 pb-32">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Latest from our Blog</h1>
                    <div className="mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            {
                                blogs.map(bloG => <ShowBlogs key={bloG._id} bloG={bloG} />)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;