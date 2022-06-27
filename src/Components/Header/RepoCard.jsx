import React from 'react'
import { StyledLi } from './style';

export const RepoCard = (props) => {
  return (
    <a href={props.html_url} rel="noopener" target="_blanc">
        <StyledLi  aria-label={'git hub repository'}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>{props.language}</p>
        </StyledLi>
    </a>
  );
};