import './App.css';

const footerComponent = () => {
    return (
        <footer>
            <div className='icons'>
                <img src={require ('./assets/facebook.svg').default} />
                <img src= {require ('./assets/instagram.svg') .default} />
                <img src = { require ('./assets/twitter.svg').default} />
                <img src = {require ('./assets/youtube.svg'). default} />
            </div>
            <div className='terms'>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <p className='copy'>&copy; 2023 MovieBox by Ijeomah Ebube</p>
        </footer>
    );
}
 
export default footerComponent;
