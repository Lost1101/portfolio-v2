import proj1 from './img/proj1.png';
import proj2 from './img/proj2.png';
import proj3 from './img/proj3.png';
import proj4 from './img/proj4.png';
import proj5 from './img/proj5.png';
import proj6 from './img/proj6.png';

const Project = () => {
    const image = [
        {id: 15, img:proj1, name:'VoteIt', desc:'E-Voting app using PHP Native to deepen my programming logic', url:'https://github.com/Lost1101/E-voting-v.0.2'},
        {id: 16, img:proj2, name:'My Zakat', desc:'CRUD with zakat case using PHP Native for tailwind experiment', url:'https://github.com/Lost1101/zakat-v.01'},
        {id: 17, img:proj3, name:'Kurban Game (2023)', desc:'JavaScript-based game using RPG Maker MV', url:'https://kurban-game-v1.vercel.app/'},
        {id: 18, img:proj4, name:'Image Encryption', desc:'Collab work, image encryption using AES-CBC mode and Double Steganography', url:'https://github.com/Lost1101/Image-Encryption-v.01'},
        {id: 19, img:proj5, name:'Wedding RSVP', desc:'Wedding RSVP web for my cousin, using TailwindCSS', url:'https://github.com/Lost1101/undangan_w-k'},
        {id: 20, img:proj6, name:'Portfoliov1', desc:'My previous portfolio version, using TailwindCSS', url:'https://github.com/Lost1101/Portfoliov1'}
    ]
    return(
        <>
            <div className="Project">
                <h1>Project</h1>
                <div className='Project-container'>
                    {image.map(img => (
                    <div key={img.id} className='Project-card'>
                        <img src={img.img} alt="" />
                        <div className='Project-text'>
                            <a href={img.url}>{img.name}</a>
                            <p>{img.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Project;