import Link from 'next/link';
import React from 'react'
import { StyledButton } from './style';

const Buttons = (props) => {
  return (
    <Link href={props.path}>
        <StyledButton type='button' onClick={props.closeSideBar} aria-label={`Go to ${props.goTo} button`}>{props.goTo}</StyledButton>
    </Link>    
  );
};

export default Buttons;