import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
const Social = () =>{
    return(
        <>
            <SocialIcons target="_blank" href="https://github.com/GeronimoOlanda">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons  target="_blank" href="https://www.linkedin.com/in/geronimo-olanda-9a6a4313a/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons target="_blank" href="https://www.instagram.com/geronimoolanda98/">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </>
    );
}
export default Social;