import React from 'react'

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Button from './Button';
const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const [copied, setCopied] = useState();
  const { data: session } = useSession()
  const pathname =usePathname()
  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>setCopied(""),3000)
  }
  return (
    <div className='prompt_card  backdrop-blur-sm '>
    <div className='flex justify-between items-start gap-5 '>
      <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer '  >

         <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>

      <h3 className='font-satoshi font-semibold text-gray-300'>{post.creator.username}</h3>
      <p className='font-inter text-sm text-gray-200'>{post.creator.email}</p>
          </div>
        </div>
        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            className="invert"
           
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={22}
            height={22}
          />
        </div>
      </div>
      
      <p className='my-4 font-satoshi text-sm text-gray-300'>{post.prompt}</p>
      <p className='font-inter text-sm text-blue-300 cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
      {session?.user.id === post.creator._id && pathname === "/profile" && (
      <div className='grid grid-cols-2 items-center relative w-full'>
      <div className='flex justify-start'>
        <Button work={{name:"edit"}} className='relative w-1/2' onClick={handleEdit}>
          Edit
        </Button>
      </div>
      
      <div className='flex justify-end'>
        <Button work={{name:"delete"}} className='relative w-1/2' onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
      )}
  </div>
  )
}

export default PromptCard