import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className='relative min-w-full bg-[#7FD6C2] h-72 p-14'>
          <h2 className='font-bold text-4xl text-white line-clamp-2'>Encuentra el empleo de tus sueños</h2>
          <div className='absolute bottom-4 w-11/12'>
              <form className='transition-all w-4/6 rounded bg-white mx-auto pl-8 pr-2 py-2 text-slate-900 flex flex-row gap-4 shadow-sm'>
                <input className='w-full outline-none ring-none border-none' type='text' placeholder='Buscar: ofertas, empresas, noticias...'></input>
                <button className='transition-all py-2 px-4 rounded bg-blue-300 text-[#282942] font-normal flex flex-row gap-4 hover:bg-blue-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg></button>
                <button className='transition-all py-2 px-4 rounded bg-sky-500 text-white font-normal flex flex-row gap-4 hover:bg-sky-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                  </svg>
                  Buscar</button>
              </form>
          </div>
      </div>
    </main>
  )
}
