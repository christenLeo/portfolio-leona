import Image from 'next/image';
import Link from 'next/link';
import photo from '../assets/img/photo.png';

const Home = () => {
  return (
    <main aria-label="main section - about me" className='main_section'>
      <h1>Hi!</h1>
      <figure className='image_container' aria-label="image container">
        <Image width={'400px'} height={'400px'} objectFit='cover' className="main_image" src={photo} alt="Leona's photo, light brown skin, curly dark brown hear, black blazer/jacket under that another jacket but yellow, brown wood ear rings, silver septum piercing and a nice and warm smile"/>
      </figure>
      <div className="main_texts" aria-label="texts area">
      <p>I am a 24 years old travesti, mom of two, full-stack developer, ocasionally illustrator, former cook, who likes to play videogames and read books at spare time.</p>
      <p>This site is intended to be a showcase of my public repositories on Git Hub.</p>
      <Link href='/projects'>
        <button className='home_button'  type='button'>Projects &gt;</button>
      </Link>
      </div>
    </main>
  );
};
export default Home;