import { StaticImageData } from "next/image"
import image1 from "../../../public/imgs/slider-logos/logos-01.webp"
import image2 from "../../../public/imgs/slider-logos/logos-02.webp"
import image3 from "../../../public/imgs/slider-logos/logos-03.webp"
import image4 from "../../../public/imgs/slider-logos/logos-04.webp"
import image5 from "../../../public/imgs/slider-logos/logos-05.webp"
import image6 from "../../../public/imgs/slider-logos/logos-06.webp"
import image7 from "../../../public/imgs/slider-logos/logos-07.webp"
import image8 from "../../../public/imgs/slider-logos/logos-08.webp"
import image9 from "../../../public/imgs/slider-logos/logos-09.webp"
import image10 from "../../../public/imgs/slider-logos/logos-10.webp"
import image11 from "../../../public/imgs/slider-logos/logos-11.webp"
import image12 from "../../../public/imgs/slider-logos/logos-12.webp"
import image13 from "../../../public/imgs/slider-logos/logos-13.webp"
import image14 from "../../../public/imgs/slider-logos/logos-14.webp"
import image15 from "../../../public/imgs/slider-logos/logos-15.jpg"
import image16 from "../../../public/imgs/slider-logos/logos-16.jpg"
import image17 from "../../../public/imgs/slider-logos/logos-17.jpg"
import image18 from "../../../public/imgs/slider-logos/logos-18.jpg"
import image19 from "../../../public/imgs/slider-logos/logos-19.jpg"
import image20 from "../../../public/imgs/slider-logos/logos-20.jpg"
import image21 from "../../../public/imgs/slider-logos/logos-21.jpg"
import image22 from "../../../public/imgs/slider-logos/logos-22.jpg"
import image23 from "../../../public/imgs/slider-logos/logos-23.jpg"

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
    },
    { 
        id: "16", 
        src: image16
    },
    { 
        id: "17", 
        src: image17
    },
    { 
        id: "18", 
        src: image18
    },
    { 
        id: "19", 
        src: image19
    },
    { 
        id: "20", 
        src: image20
    },
    { 
        id: "21", 
        src: image21
    },
    { 
        id: "22", 
        src: image22
    },
    { 
        id: "23", 
        src: image23
    },
]

export default sliderLogos;