import React from 'react'

const Blogs = () => {

    const blogs = [
        {
            "id": 1,
            'title': 'Blog 1',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eos.',
            'coverImg': 'https://i.pinimg.com/originals/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.png',
        }
    ]

    return (
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>

                    {blogs.map((blog) =>
                        <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                            <img className='h-56 w-full object-cover' src={blog.coverImg} />
                            <div className="p-8">
                                <h3 className="font-bold 2xl my-1">{blog.title}</h3>
                                <p className="text-gray-600 text-xl">{blog.desc}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Blogs