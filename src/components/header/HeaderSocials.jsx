import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs';
import {SiCodechef} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/manash-anand-479812227/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ManashAnand" target="_blank"><BsGithub/></a>
        <a href="https://www.codechef.com/users/manash_anand" target="_blank"><SiCodechef/></a>
    </div>
  )
}

export default HeaderSocials
