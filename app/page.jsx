import Feed from '@components/Feed'
 
 
const Home = () => {
  return (
      <section className='w-full flex-center flex-col'>
          <h1 className='head_text text-center animate-pulse  '>Discover 
          <br className='max-md:hidden' />
          <span className='blue_gradient'>AI-Powered Prompts</span>
          </h1>
          <p className='desc text-center '>
              AiPrompt is a tool for morden world to discover and create
              creative prompts
              
          </p>
 <Feed/>
 
      </section>
  )
}

export default Home