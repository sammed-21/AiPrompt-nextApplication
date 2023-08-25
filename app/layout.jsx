
import '@/styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
  title: 'AiPormpt',
  description:'get AiPromt'
 }
export default function RootLayout({ children }) {

 return (
   <html lang='en'>
     <body >
       <Provider >
         
       {/* <div>
         <div className="gradient"/>
       </div> */}
       <main className='app   '>
           {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div> */}
        {/* <div className="bg-[#e0dcff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
           <Nav />

         {children}
       </main>
       </Provider>
     </body>
    </html>
  )
}
