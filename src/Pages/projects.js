import React, { useEffect, useState } from 'react'
import { RepoCard } from '../Components/Header/RepoCard';
import { gitHubBaseUrl } from '../constants/urls';
import { useRequest } from '../hooks/useRequest';

const Projects = () => {
  const {makeRequest, isLoading} = useRequest();
  const [gitHubRepositories, setGitHubRepositories] = useState([]);
  
  const getRepos = async () => {
    const repos = await makeRequest('get', `${gitHubBaseUrl}repos`);

    setGitHubRepositories(repos);

    console.log(gitHubRepositories);
  };

  useEffect(()=>{
    getRepos();
  },[getRepos]);

  const mountRepos = gitHubRepositories.map((repo) => {
    return (
      <RepoCard key={repo.id} html_url={repo.html_url} name={repo.name} description={repo.description} language={repo.language}/>
    );
  });

  return (
    <section className='projects_section' aria-label="Projects section">
      <h2>projects</h2>
      <div aria-label='git hub public projecs'>
        <ul className='repositories_list'>
          {mountRepos}
        </ul>
      </div>
    </section>
  )
}

export default Projects