import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, path: 'https://linkedin.com/in/yourusername' },
    { icon: <FaYoutube />, path: 'https://youtube.com/c/yourchannel' },
    { icon: <FaTwitter />, path: 'https://twitter.com/yourusername' },
    { icon: <FiMail />, path: 'mailto:yourname@example.com' }
];
        

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>

           {socials.map((item, index) =>{
             return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
             );
           })} 
           
        </div>
    );
};

export default Socials; 