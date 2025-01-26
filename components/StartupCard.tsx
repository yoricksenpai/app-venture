import React from 'react'
import { formatDate } from '@/lib/utils'
import {EyeIcon} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { StartupCardType } from '@/lib/types/StartUpCard'
const StartupCard = ({post}: {post : StartupCardType}) => {
  const {_createdAt, views, author:{authorId, name}, category, image, title, description, _id} = post

  const formattedDate = formatDate(_createdAt.toString()); // Conversion en chaîne


  return (
<li className='startup-card group'>
    <div className='flex-between'>
        <p className='startup_card_date'>
            {formattedDate}
            
        </p>
        <div className='flex gap-1.5'>
      <EyeIcon className='size-6 text-primary'/>
      <span className='text-16-medium'>{views}</span>
    </div>
    </div>
<div className='flex-between mt-5 ap-5'>
  <div className='flex-1'>
    <Link href={`/user/${authorId}`}>
    <p className='text-16-medium line-clamp-1'>{name}</p>
    </Link>

    <Link href={`/startup/${_id}`}>
    <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
    </Link>
    </div>

    <Link href={`/user/${authorId}`}>
    <Image src='https://placehold.co/48x48' alt='placeholder' width={48} height={48} className='rounded-full'/>
    </Link>
</div>

<Link href={`/startup/${_id}`}>
<p className='startup-card-desc'>
  {description}
</p>

<Image className='startup-card-img' src={image} alt='startup image' width={500} height={300} />
</Link>

<div className='flex-between mt-5 gap-3'>

<Link href={`/?query=${category.toLowerCase()}`} >

<p className='text-16-medium'>{category}</p>
</Link>
<Button className='startuo-card_btn' asChild>
<Link href={`/startup/${_id}`}>
Details
</Link>

  </Button>
  
</div>
</li>

  )
}

export default StartupCard
