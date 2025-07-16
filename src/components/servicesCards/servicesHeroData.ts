import { StaticImageData } from "next/image"
import image1 from "../../../public/imgs/logo-1.png"
import image2 from "../../../public/imgs/logo-1.png"
import image3 from "../../../public/imgs/logo-1.png"
import image4 from "../../../public/imgs/logo-1.png"
import image5 from "../../../public/imgs/logo-1.png"
import image6 from "../../../public/imgs/logo-1.png"
// import image7 from "../../assets/imgs/cranes-cargo.svg"
// import image8 from "../../assets/imgs/electrical-panel-danger.svg"
// import image9 from "../../assets/imgs/production-industrial.svg"
// import image10 from "../../assets/imgs/supplies.svg"
// import image11   from "../../assets/imgs/consultion.svg"
// import image12   from "../../assets/imgs/elec-current.svg"

export type HeroService = {
    id: string,
    src: StaticImageData,
}

const heroServices : HeroService[] = [
    {
        id: "1",
        src: image1,
    },
    {
        id: "2",
        src: image2,
    },
    {
        id: "3",
        src: image3,
    },
    {
        id: "4",
        src: image4,
    },
    {
        id: "5",
        src: image5,
    },
    {
        id: "6",
        src: image6,
    }
    // {
    //     id: "7",
    //     src: image7,
    // },
    // {
    //     id: "8",
    //     src: image8,
    // },
    // {
    //     id: "9",
    //     src: image9,
    // },
    // {
    //     id: "10",
    //     src: image10,
    // },
    // {
    //     id: "11",
    //     src: image11,
    // },
    // {
    //     id: "12",
    //     src: image12,
    // }
]

export default heroServices;