import Link from "next/link"
import Button from "@/components/Button"
const Form = ({ 
  type,
  post,
  setPost,
  submitting,
  handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col backdrop-blur-sm">
      <h1 className="head_text text-left"><span className="blue_gradient ">{type} Post</span></h1>
      <p className="desc text-left max-w-md !text-white">
        {type} an amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label >
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Your Ai Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            className="caret-[#060df3] form_textarea"
          />
             
           
        </label>
        <label >
          <span className="font-satoshi font-semibold text-base text-grey-700">
          tag
          <span className="font-normal">#blockchain ,#defi</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            placeholder="#tag"
            className="caret-[#060df3] form_input"
          />
             
           
      </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/ ' className="text-gray-300">
            Cancel
          </Link>
          <Button
            work={{ name: 'submit' }}
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-gray-900 rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
</div>

      </form>

    </section>
  )
}

export default Form