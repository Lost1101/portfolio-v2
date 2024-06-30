import loadingGif from './img/loading.gif'; // Ubah sesuai dengan path file GIF Anda

const Loader = ({ fadeOut }) => {
    return (
      <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
        <img className="loading-gif" src={loadingGif} alt="Loading..." />
      </div>
    );
  };

export default Loader;