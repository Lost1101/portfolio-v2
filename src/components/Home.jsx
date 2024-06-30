import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Lost from './img/Lost.png'
import Typewriter from './Typewriter';

const Home = () => {
    const Button = () =>{
        return(
            <button className='Home-Button'>
                Curriculum Vitae <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        )
    }
    return(
        <>
        <div className='Home'>
            <div>
                <img src={Lost} alt="Icon2" width={480} height={480}/>
            </div>
            <div className='Intro'>
                <h1 className='Intro1'>Hi!</h1>
                <h1 className='Intro2'>My name is</h1>
                <h2 className='Intro3'>Kamilah Insani.</h2>
                <div className='Home-Text'>
                    <p><Typewriter texts={["I'm a Front End Developer.", "I'm a Back End Developer.", "I'm a Social Media Designer.", "I'm a Digital Illustrator."]} period={1000} /> I make a web combined with my various ideas and I mix them with my art!. Sometimes, I also make unique web just for fun! I like it when people are happy to use the web that I made with all my heart ❤.</p>
                </div>
                <Button/>
            </div>
        </div>
       </>
    )
}


export default Home;