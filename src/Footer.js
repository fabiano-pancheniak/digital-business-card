import iconTwitter from './images/icon-twitter.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconInstagram from './images/icon-instagram.svg';
import iconGithub from './images/icon-github.svg';

export default function Footer(){
    return(
        <footer>
            <div>
                <img src={iconTwitter} alt="twitter" />
                <img src={iconFacebook} alt="facebook" />
                <img src={iconInstagram} alt="instagram" />
                <img src={iconGithub} alt="github" />
            </div>
        </footer>
    )
}