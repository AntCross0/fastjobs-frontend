import React from 'react';
import Link from 'next/link';

export const JobList = ({list}) => {
    
  return (
    <div className='flex flex-col gap-2'>
        {
            list.map((job, index) => {
                return(
                    <div key={index} className='grid transition-all cursor-pointer 
                    grid-cols-[8rem,24rem,4rem] h-38 w-[36rem] mx-auto bg-white rounded  hover:bg-slate-100'>
                            <div className='space-y-4 m-4 '>
                                <div className='w-16 h-16 bg-slate-400 rounded mx-auto'></div>
                                <Link href={`/ ${job.company}`} className='underline text-blue-400 font-normal text-center block'>{job.company}</Link>
                            </div>
                            <div className='m-4 space-y-2 '>
                                <h4 className='font-bold text-lg'>{job.title}</h4>
                                <div className='max-w-[12rem] gap-2 inline-flex items-center text-slate-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg>
<span className='font-medium text-sm  text-center'>{job.location}</span>
</div>
                                <p className='w-[16rem] font-normal text-sm text-slate-700'>{job.desc}</p>
                            </div>
                        <div className='my-4'>
                            <span className='font-bold text-[#2cc067] text-center block'>${parseFloat(job.salary).toFixed(1)}k</span>
                        </div>
                    </div>
                )
            })
        }
        <hr></hr>
    </div>
  )
}
