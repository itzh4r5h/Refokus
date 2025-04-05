import { nanoid } from "nanoid"

const Footer = () => {
  return (
    <footer data-scroll-section className='w-full'>
        <div data-scroll className='max-w-screen-xl mx-auto py-10'>
           <div data-scroll className='flex items-center gap-40'>
           <div data-scroll className="basis-1/2">
                <h1 className='font-bold text-[12rem] leading-none tracking-tight'>refokus.</h1>
            </div>
            <div data-scroll className="basis-1/2 flex gap-2">
                <div data-scroll className="basis-1/4">
                    <h4 data-scroll className='text-[var(--grey-400)] mb-10'>Social</h4>
                    <ul data-scroll className='flex flex-col justify-center gap-2'>
                       {["Instagram","Twitter (X?)", "Linkedin"].map((text)=>{
                        return  <li data-scroll key={nanoid()}>
                        <a href="#" className='text-[var(--grey-400)] leading-none tracking-tight'>{text}</a>
                    </li>
                       })}
                    </ul>
                </div>
                <div data-scroll className="basis-1/4">
                    <h4 data-scroll className='text-[var(--grey-400)] mb-10'>Sitemap</h4>
                    <ul data-scroll className='flex flex-col justify-center gap-2'>
                       {["Home","Work", "Careers", "Contact"].map((text)=>{
                        return  <li data-scroll key={nanoid()}>
                        <a href="#" className='text-white leading-none tracking-tight'>{text}</a>
                    </li>
                       })}
                    </ul>
                </div>
                <div data-scroll className="basis-1/2 flex justify-end flex-col gap-8">
                       <p data-scroll className="text-right leading-none"> Refokus is pioneering digital agency driven by
                       design and empowered by technology.</p>
                       <figure data-scroll className='self-end cursor-pointer'>
                       <img
                            className='w-34'
                            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
                            alt="refokus_logo"
                        />
                       </figure>

                </div>
            </div>
           </div>
           <div className="flex items-center gap-10 mt-10">
             {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((text)=><a key={nanoid()} href='#' className='text-[var(--grey-400)] text-sm tracking-tight font-medium'>{text}</a>)}
           </div>
        </div>
    </footer>
  )
}

export default Footer