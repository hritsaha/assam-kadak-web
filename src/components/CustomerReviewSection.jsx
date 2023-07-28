import React from 'react'
import CustomerReviewCard from './CustomerReviewCard'

function CustomerReviewSection() {

        const reviews = [
                { 
                        name: "Samantha", 
                        date: "August 2023", 
                        comment: "Absolutely love the teas from this company! The flavors are so rich and authentic, making every sip a delightful experience",
                        url:"https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTQzMjk2fA&force=true&w=640"
                },
                { 
                        name: "Jeremy", 
                        date: "July 2023", 
                        comment: "Tea time has become a cherished ritual in my life, all thanks to this incredible tea company.  The teas are not just beverages; they are stories waiting to be told with every cup. T heir tea experts shared fascinating insights into the world of tea. it's a journey of discovery and joy.",
                        url:"https://unsplash.com/photos/iFgRcqHznqg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTUwODc0fA&force=true&w=640"
                },
                { 
                        name: "Brian", 
                        date: "March 2022", 
                        comment: "I've always been a tea lover, but this company's teas have elevated my appreciation for the beverage to new heights. Each tea blend is a delightful adventure, taking me on a journey through distant lands and diverse cultures. This tea leaf company is a must-try.",
                        url:"https://unsplash.com/photos/_7LbC5J-jw4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTUxNTk3fA&force=true&w=640"
                },
                { 
                        name: "Mike", 
                        date: "September 2022", 
                        comment: "Finally found a tea company that understands my preferences. Their teas are smooth, not bitter, and always hit the spot.",
                        url:"https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTQzMjk2fA&force=true&w=640"
                },
                { 
                        name: "Raman", 
                        date: "January 2022", 
                        comment: "Not only are the teas from this company a treat for the taste buds, but they also bring a sense of tranquility and balance to my hectic life. I can taste the effort they put into sourcing the finest tea leaves. I'm particularly fond of their green teas, which are a testament to their expertise in preserving the tea's natural essence. It's evident that they take gr ",
                        url:"https://unsplash.com/photos/PQeoQdkU9jQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTUxNjI4fA&force=true&w=640"
                },
                // { 
                //         name: "Samantha", 
                //         date: "August 2023", 
                //         comment: "Absolutely love the teas from this company! The flavors are so rich and authentic, making every sip a delightful experience",
                //         url:"https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTQzMjk2fA&force=true&w=640"
                // },
                // { 
                //         name: "Jeremy", 
                //         date: "July 2023", 
                //         comment: "The packaging is so elegant, and the teas inside live up to the expectations. Truly a treat for all tea lovers out there.",
                //         url:"https://unsplash.com/photos/iFgRcqHznqg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTUwODc0fA&force=true&w=640"
                // },
                { 
                        name: "Brian", 
                        date: "March 2022", 
                        comment: "If you want to experience authentic tea from around the world, this is the company to go for. They curate the best selection!",
                        url:"https://unsplash.com/photos/_7LbC5J-jw4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTUxNTk3fA&force=true&w=640"
                },
                { 
                        name: "Brian", 
                        date: "March 2022", 
                        comment: "I stumbled upon this tea leaf company by chance, and it turned out to be a delightful find! Their teas are a true testament to the art of tea-making. The careful selection of leaves, the exquisite blends, and the passion that goes into each cup are evident with every sip. It has elevated my tea-drinking experience, and I can't wait to try more of their fascinating offerings.",
                        url:"https://unsplash.com/photos/_7LbC5J-jw4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTUxNTk3fA&force=true&w=640"
                },
                { 
                        name: "Mike", 
                        date: "September 2022", 
                        comment: "Absolutely love the teas from this company! The flavors are so rich and authentic, making every sip a delightful experience",
                        url:"https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNTQzMjk2fA&force=true&w=640"
                },
        ]


        const r = ['one','two','two','two','two','two','two','two','two','two','two','two',
        'one','two','two','two','two','two','two','two','two','two','two','two',
        'one','two','two','two','two','two','two','two','two','two','two','two',
        'one','two','two','two','two','two','two','two','two','two','two','two',
        'one','two','two','two','two','two','two','two','two','two','two','two',
        'one','two','two','two','two','two','two','two','two','two','two','two',        
                ]

        return (
                <div className='py-20'>
                        <div className='flex flex-col gap-3 mb-10'>
                                <h1 className='font-bold text-4xl text-center'>What Customers Say</h1>
                                <p className='text-center'><span className='text-lime-500 font-bold'>100+</span> Reviews. Here are some of our favourites!</p>
                        </div>

                        <div className='px-7'>
                                <ul className='flex flex-row gap-4 overflow-y-auto scroll-smooth scrolling-touch scrollbar-thin scrollbar-thumb-lime-500 scrollbar-rounded-lg scrollbar-track-gray-100  hover:scroll-auto'>
                                        {reviews.map((item)=>{
                                                return <li> <CustomerReviewCard className='bg-blue-600' name={item.name} date={item.date} comment={item.comment} url={item.url}>{item}</CustomerReviewCard></li>
                                        })}
                                </ul>
                        </div>
                </div>
        )
}

export default CustomerReviewSection
