import { StaticImageData } from "next/image"
import image1 from "../../../public/imgs/slider-logos/logo-1.jpeg"
import image2 from "../../../public/imgs/slider-logos/logo-2.jpeg"
import image3 from "../../../public/imgs/slider-logos/logo-3.jpeg"
import image4 from "../../../public/imgs/slider-logos/logo-4.jpeg"
import image5 from "../../../public/imgs/slider-logos/logo-5.jpeg"
import image6 from "../../../public/imgs/slider-logos/logo-6.jpeg"
import image7 from "../../../public/imgs/slider-logos/logo-7.jpeg"
import image8 from "../../../public/imgs/slider-logos/logo-8.jpeg"
import image9 from "../../../public/imgs/slider-logos/logo-9.svg"
import image10 from "../../../public/imgs/slider-logos/logo-10.jpeg"
import image11 from "../../../public/imgs/slider-logos/logo-11.jpeg"
import image12 from "../../../public/imgs/slider-logos/logo-12.jpeg"
import image13 from "../../../public/imgs/slider-logos/logo-13.jpeg"
import image14 from "../../../public/imgs/slider-logos/logo-14.jpeg"
import image15 from "../../../public/imgs/slider-logos/logo-15.jpeg"

export type SliderLogo = {
    id: string,
    src: StaticImageData,
}

const sliderLogos : SliderLogo[] = [
    { 
        id: "1", 
        src: image1
    },
    { 
        id: "2", 
        src: image2
    },
    { 
        id: "3", 
        src: image3
    },
    { 
        id: "4", 
        src: image4
    },
    { 
        id: "5", 
        src: image5
    },
    { 
        id: "6", 
        src: image6
    },
    { 
        id: "7", 
        src: image7
    },
    { 
        id: "8", 
        src: image8
    },
    { 
        id: "9", 
        src: image9
    },
    { 
        id: "10", 
        src: image10
    },
    { 
        id: "11", 
        src: image11
    },
    { 
        id: "12", 
        src: image12
    },
    { 
        id: "13", 
        src: image13
    },
    { 
        id: "14", 
        src: image14
    },
    { 
        id: "15", 
        src: image15
    }
]

export default sliderLogos;