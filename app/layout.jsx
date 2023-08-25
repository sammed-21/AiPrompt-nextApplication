
import '@/styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
  title: 'AiPormpt',
  description:'get AiPromt'
 }
export default function RootLayout({ children }) {

 return (
   <html lang='en'  >
     <body >
       <Provider >
         
       {/* <div>
         <div className="gradient"/>
       </div> */}
       <main className='app  '>
       <div className=" absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]   dark:bg-[#415a92c0]"></div>
        <div className=" absolute bottom-[0rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] animate-pulse md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2b2657]"></div>


           <Nav />

         {children}
       </main>
       </Provider>
     </body>
    </html>
  )
}
