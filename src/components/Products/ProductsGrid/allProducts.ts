import { StaticImageData } from "next/image"

import image1 from "../../../../public/imgs/products/workers-av.png"
// import image2 from "../../../../public/imgs/products/helmet.jpg"
// import image3 from "../../../../public/imgs/products/eyes.png"
// import image4 from "../../../../public/imgs/products/gloves.png"
// import image5 from "../../../../public/imgs/products/shoes.jpg"
// import image6 from "../../../../public/imgs/products/traffic-1.jpg"
// import image7 from "../../../../public/imgs/products/traffic-2.jpg"
// import image8 from "../../../../public/imgs/products/traffic-3.jpg"
// import image9 from "../../../../public/imgs/products/traffic-4.jpg"
// import image10 from "../../../../public/imgs/products/traffic-5.jpg"
// import image11 from "../../../../public/imgs/products/traffic-6.jpg"
// import image12 from "../../../../public/imgs/products/traffic-7.jpg"
// import image13 from "../../../../public/imgs/products/traffic-8.jpg"
import image14 from "../../../../public/imgs/products/fire-enter.jpeg"
import image15 from "../../../../public/imgs/products/fire-res.png"
import image16 from "../../../../public/imgs/products/fridge-suit.jpeg"
import image17 from "../../../../public/imgs/products/jeans-pants.png"
import image18 from "../../../../public/imgs/products/jeans-suit.jpeg"
import image19 from "../../../../public/imgs/products/polo-1.png"
import image20 from "../../../../public/imgs/products/polo-2.png"
import image21 from "../../../../public/imgs/products/two-parts.png"
import image22 from "../../../../public/imgs/products/uniforms.png"
import image23 from "../../../../public/imgs/products/caps.png"
import image24 from "../../../../public/imgs/products/dust-mask-1.jpeg"
import image25 from "../../../../public/imgs/products/dust-mask-2.jpeg"
// import image26 from "../../../../public/imgs/products/dust-mask-2-2.png"
import image27 from "../../../../public/imgs/products/ears-1.jpeg"
// import image28 from "../../../../public/imgs/products/ears-2.jpeg"
// import image29 from "../../../../public/imgs/products/helmet-3m-1.jpeg"
import image30 from "../../../../public/imgs/products/helmet-3m-2.jpeg"
// import image31 from "../../../../public/imgs/products/helmet-3m-3.jpeg"
import image32 from "../../../../public/imgs/products/helmet-msa.jpeg"
import image33 from "../../../../public/imgs/products/helmet-msa-colors.jpeg"
import image34 from "../../../../public/imgs/products/hemlet-jsp.png"
import image35 from "../../../../public/imgs/products/hood-jeans.jpeg"
import image36 from "../../../../public/imgs/products/hood-leather.jpeg"
// import image37 from "../../../../public/imgs/products/mask-3m-2.png"
import image38 from "../../../../public/imgs/products/mask-3m-3.jpeg"
import image39 from "../../../../public/imgs/products/noise-1.jpeg"
import image40 from "../../../../public/imgs/products/noise-2.jpeg"
import image41 from "../../../../public/imgs/products/welding-helmet.jpeg"
import image42 from "../../../../public/imgs/products/welding-mask.jpeg"
import image43 from "../../../../public/imgs/products/paper-mask-3m-filter.jpeg"
import image44 from "../../../../public/imgs/products/paper-mask-filter.jpeg"
import image45 from "../../../../public/imgs/products/paper-mask-no-filter.jpeg"
import image46 from "../../../../public/imgs/products/barrier-spring-iron-1.png"
import image47 from "../../../../public/imgs/products/barrier-spring-iron-2.png"
import image48 from "../../../../public/imgs/products/barrier-spring-plastic.jpeg"
import image49 from "../../../../public/imgs/products/bump.jpeg"
import image50 from "../../../../public/imgs/products/carrot.jpeg"
import image51 from "../../../../public/imgs/products/car-stopper-1.jpeg"
// import image52 from "../../../../public/imgs/products/car-stopper-2.jpeg"
import image53 from "../../../../public/imgs/products/car-stopper-3.jpeg"
import image54 from "../../../../public/imgs/products/cone-yellow-black.jpeg"
import image55 from "../../../../public/imgs/products/hard-cone.png"
import image56 from "../../../../public/imgs/products/soft-cone.jpeg"
import image57 from "../../../../public/imgs/products/mirror-con.jpeg"
import image58 from "../../../../public/imgs/products/mirror-sizes.png"
import image59 from "../../../../public/imgs/products/poles-stopper-1.png"
// import image60 from "../../../../public/imgs/products/poles-stopper-2.png"
// import image61 from "../../../../public/imgs/products/traffic-barrier-1.jpeg"
import image62 from "../../../../public/imgs/products/traffic-barrier-2.jpeg"
import image63 from "../../../../public/imgs/products/traffic-barrier-iron-1.png"
import image64 from "../../../../public/imgs/products/traffic-carrot.png"
// import image65 from "../../../../public/imgs/products/glasses-3m-dark-1.jpeg"
import image66 from "../../../../public/imgs/products/glasses-3m-dark-2.jpeg"
import image67 from "../../../../public/imgs/products/glasses-3m-transparent.jpeg"
import image68 from "../../../../public/imgs/products/glasses-cover.jpeg"
import image69 from "../../../../public/imgs/products/glasses-op-close.jpeg"
import image70 from "../../../../public/imgs/products/glasses-thai-1.jpeg"
import image71 from "../../../../public/imgs/products/glasses-thai-2.jpeg"
import image72 from "../../../../public/imgs/products/glasses-uvex.jpeg"
import image73 from "../../../../public/imgs/products/bump-cables.jpg"
import image74 from "../../../../public/imgs/products/paper-av-1.jpeg"
import image75 from "../../../../public/imgs/products/paper-av-2.jpeg"
import image76 from "../../../../public/imgs/products/paper-mask.jpeg"
import image77 from "../../../../public/imgs/products/paper-mask-2.jpeg"
import image78 from "../../../../public/imgs/products/paper-overchin.jpeg"
import image79 from "../../../../public/imgs/products/paper-overhead.jpeg"
import image80 from "../../../../public/imgs/products/paper-overshoe.jpeg"

export type Product = {
    id: string,
    name: string,
    src: StaticImageData,
    category: string
}

const products : Product[] = [
    { 
        id: "1", 
        name: "Fire Fighting Pump", 
        src: image1, 
        category: "cat-1" 
    },
    { 
        id: "2", 
        name: "Fire Fighting Cabinets", 
        src: image1, 
        category: "cat-1" 
    },
    { 
        id: "3", 
        name: "Hose reels systems", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "4", 
        name: "Automatic Sprinklers", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "5", 
        name: "fire hose (canvas)", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "6", 
        name: "pvc fire hose", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "7", 
        name: "landing valves", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "8", 
        name: "Fire nozzles", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "9", 
        name: "Siamese connection", 
        src: image1 , 
        category: "cat-1" 
    },
    { 
        id: "10",
         name: "water monitors", 
         src: image1    , 
         category: "cat-1" 
        },
    { 
        id: "11",
         name: "foam monitors", 
         src: image1    , 
         category: "cat-1" 
        },
    { 
        id: "12",
         name: "fire search extinguishers", 
         src: image1    , 
         category: "cat-1" 
        },
    { 
        id: "13",
         name: "fm200 cylinders", 
         src: image1    , 
         category: "cat-1" 
        },
    { 
        id: "14",
         name: "kitchen hood systems cylinders", 
         src: image14, 
         category: "cat-1" 
        },
    { 
        id: "15",
         name: "45 kg co2 cylinders", 
         src: image15, 
         category: "cat-1" 
        },
    { 
        id: "16",
         name: "co2 portable extinguishers", 
         src: image16, 
         category: "cat-2" 
        },
    { 
        id: "17",
         name: "Fire Hydrants", 
         src: image17, 
         category: "cat-2" 
        },
    { 
        id: "18",
         name: "Fire Extinguishers powders", 
         src: image18, 
         category: "cat-2" 
        },
    { 
        id: "19",
         name: "fire alarm (conventional –addressable)", 
         src: image19, 
         category: "cat-2" 
        },
    { 
        id: "20",
         name: "codesec system", 
         src: image20, 
         category: "cat-2" 
        },
    { 
        id: "21",
         name: "ATS systems", 
         src: image21, 
         category: "cat-2"
         }
]

export default products;