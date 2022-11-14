import contentPic from "../assets/house3.jpg"

export interface projectType {
    id: string;
    title: string;
    pic: string;
    text: string;
    link: string;
    category?: string;
}

export const projectTabs = {
    project: [
        { 
            id: "123djsdfhjhdsjhsdsdsdcsdhcsdhcbd", 
            title: "Lorem ipsum dolor",
            pic: contentPic,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "",
            category: ""
        },
        { 
            id: "sjdbsdcsdcgdhscghdcgsdgjcdjhcgdh", 
            title: "Lorem ipsum dolor",
            pic: contentPic,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: ""
        },
    ] as projectType[],
    clones: [
        { 
            id: "123djsdfhjhdsjhsdsdsdcsdhcsdhcbd", 
            title: "Lorem ipsum dolor",
            pic: contentPic,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "",
            category: ""
        },
        { 
            id: "sjdbsdcsdcgdhscghdcgsdgjcdjhcgdh", 
            title: "Lorem ipsum dolor",
            pic: contentPic,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: ""
        },
    ] as projectType[],
    playground: [
        { 
            id: "123djsdfhjhdsjhsdsdsdcsdhcsdhcbd", 
            title: "Lorem ipsum dolor",
            pic: contentPic,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "",
            category: ""
        },
        { 
            id: "sjdbsdcsdcgdhscghdcgsdgjcdjhcgdh", 
            title: "Lorem ipsum dolor",
            pic: contentPic,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: ""
        },
    ] as projectType[]
}