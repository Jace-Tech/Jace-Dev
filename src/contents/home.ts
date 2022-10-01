import { linkContent } from "../@types";
import contentPic from "../assets/house3.jpg"
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5"
import { IconType } from "react-icons"


export const LINKS_CONTENTS: linkContent[] = [
    {link: "/", title: "Home"},
    {link: "/about", title: "About"},
    {link: "/project", title: "Projects"},
    {link: "/contact", title: "Contact"},
]

export const PROJECT_CONTENT = [
    { 
        id: "123djsdfhjhdsjhsdsdsdcsdhcsdhcbd", 
        title: "Lorem ipsum dolor",
        pic: contentPic,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    { 
        id: "sjdbsdcsdcgdhscghdcgsdgjcdjhcgdh", 
        title: "Lorem ipsum dolor",
        pic: contentPic,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]


type socialTypes = {
    icon: IconType;
    link: string;
    name: string;
}

export const SOCIAL_CONTENT: socialTypes[] = [
    {
        link: "https://github.com/Jace-Tech/",
        icon: IoLogoGithub,
        name: "github"
    },
    {
        link: "https://twitter.com/jacealexander20",
        icon: IoLogoTwitter,
        name: "twitter"
    },
    {
        link: "https://www.linkedin.com/in/aneke-chidindu-72b0641b5/",
        icon: IoLogoLinkedin,
        name: "linkedIn"
    },
]