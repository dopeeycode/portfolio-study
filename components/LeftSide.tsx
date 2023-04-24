import { TbBrandGithub as GitHubIcon } from 'react-icons/tb'
import {
  SlSocialInstagram as InstagramIcon,
  SlSocialYoutube as YoutubeIcon,
  SlSocialLinkedin as LinkedinIcon
} from 'react-icons/sl'

export default function LeftSide () {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div className='p-[.7rem] rounded-full bg-[#122542] transition-all hover:translate-y-[-10px] cursor-pointer 
      duration-300'>
        <a target='_blank' href="https://github.com/dopeeycode">
          <GitHubIcon size={20}/>
        </a>
      </div>
      <div className='p-[.7rem] rounded-full bg-[#122542] transition-all hover:translate-y-[-10px] cursor-pointer 
      duration-300'>
        <a target='_blank' href="#">
          <YoutubeIcon size={20}/>
        </a>
      </div>
      <div className='p-[.7rem] rounded-full bg-[#122542] transition-all hover:translate-y-[-10px] cursor-pointer 
      duration-300'>
        <a target='_blank' href="https://www.linkedin.com/in/italo-patricio/">
          <LinkedinIcon size={20}/>
        </a>
      </div>
      <div className='p-[.7rem] rounded-full bg-[#122542] transition-all hover:translate-y-[-10px] cursor-pointer 
      duration-300'>
        <a target='_blank' href="https://www.instagram.com/dopeyxs/">
          <InstagramIcon size={20}/>
        </a>
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

