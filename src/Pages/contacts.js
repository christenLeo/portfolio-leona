import Image from 'next/image';
import React from 'react';
import linkedInLogo from '../assets/img/linkedin.png';
import InstagramLogo from '../assets/img/instagram.png';
import gitHubLogo from '../assets/img/github.png';
import gmailLogo from '../assets/img/gmail.png';

const Contacts = () => {
  return (
    <section className='contacts_section' aria-label="Projects section">
      <h2>Contact</h2>
      <p>You can find me at</p>

      <div className='links_container'>
      <a rel='noopener' target={'_blanc'} href="https://www.linkedin.com/in/leochristen/">Linked In <i><Image width='30px' height='30px' src={linkedInLogo} alt="linked-in icon" /></i></a>

      <a rel='noopener' target={'_blanc'} href="https://www.instagram.com/ilustrasleo/">Instagram <i><Image width='30px' height='30px' src={InstagramLogo} alt="linked-in icon" /></i></a>
      
      <a rel='noopener' target={'_blanc'} href="https://github.com/christenLeo">GitHub <i><Image width='30px' height='30px' src={gitHubLogo} alt="linked-in icon" /></i></a>
      
      <a rel='noopener' target={'_blanc'} href="mailto:leo.christenmacedo@gmail.com">Email <i><Image width='30px' height='30px' src={gmailLogo} alt="linked-in icon" /></i></a>
      </div>
      
    </section>
  );
};

export default Contacts;