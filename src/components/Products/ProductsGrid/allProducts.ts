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
        name: "أفرول عمال",
        src: image1,
        category: "body"
    },
    {
        id: "2",
        name: "بدلة اقتحام حريق",
        src: image14,
        category: "body"
    },
    {
        id: "3",
        name: "بدلة مقاومة الحريق",
        src: image15,
        category: "body"
    },
    {
        id: "4",
        name: "بدلة تلاجة",
        src: image16,
        category: "body"
    },
    {
        id: "5",
        name: "بنطلون جينز",
        src: image17,
        category: "body"
    },
    {
        id: "6",
        name: "بدلة جينز للأعمال الشاقة",
        src: image18,
        category: "body"
    },
    {
        id: "7",
        name: "تيشيرت بولو",
        src: image19,
        category: "body"
    },
    {
        id: "8",
        name: "تيشيرت بولو",
        src: image20,
        category: "body"
    },
    {
        id: "9",
        name: "بدلة قطعتين",
        src: image21,
        category: "body"
    },
    {
        id: "10",
        name: "أطقم موحدة",
        src: image22,
        category: "body"
    },
    {
        id: "11",
        name: "كاب جبردين",
        src: image23,
        category: "head"
    },
    {
        id: "12",
        name: "كمامة جلد صيني أتربة np305 - واحد فلتر",
        src: image24,
        category: "head"
    },
    {
        id: "13",
        name: "كمامة جلد صيني أتربة - اتنين فلتر",
        src: image25,
        category: "head"
    },
    {
        id: "15",
        name: "سدادة أذن",
        src: image27,
        category: "head"
    },
    // {
    //     id: "17",
    //     name: "hands protection",
    //     src: image29,
    //     category: "head"
    // },
    {
        id: "18",
        name: "خوذة 3M",
        src: image30,
        category: "head"
    },
    // {
    //     id: "19",
    //     name: "traffic services",
    //     src: image31,
    //     category: "head"
    // },
    {
        id: "20",
        name: "خوذة msa",
        src: image32,
        category: "head"
    },
    {
        id: "21",
        name: "خوذة msa ألوان",
        src: image33,
        category: "head"
    },
    {
        id: "22",
        name: "خوذة jsp",
        src: image34,
        category: "head"
    },
    {
        id: "23",
        name: "حرملة جينز",
        src: image35,
        category: "head"
    },
    {
        id: "24",
        name: "حرملة جلد كروم",
        src: image36,
        category: "head"
    },
    {
        id: "26",
        name: "قناع ٦٨٠٠ 3M",
        src: image38,
        category: "head"
    },
    {
        id: "27",
        name: "كاتم صوت",
        src: image39,
        category: "head"
    },
    {
        id: "28",
        name: "كاتم صوت",
        src: image40,
        category: "head"
    },
    {
        id: "29",
        name: "وش لحام نص خوذة",
        src: image41,
        category: "head"
    },
    {
        id: "30",
        name: "وش لحام",
        src: image42,
        category: "head"
    },
    {
        id: "34",
        name: "حاجز سوستة حديد",
        src: image46,
        category: "traffic"
    },
    {
        id: "35",
        name: "حاجز سوستة حديد",
        src: image47,
        category: "traffic"
    },
    {
        id: "36",
        name: "حاجز سوستة بلاستيك",
        src: image48,
        category: "traffic"
    },
    {
        id: "37",
        name: "مطب صناعي",
        src: image49,
        category: "traffic"
    },
    {
        id: "38",
        name: "قمع جزرة",
        src: image50,
        category: "traffic"
    },
    {
        id: "39",
        name: "مصد سيارات",
        src: image51,
        category: "traffic"
    },
    {
        id: "41",
        name: "مصد سيارات",
        src: image53,
        category: "traffic"
    },
    {
        id: "42",
        name: "قمع تشريفة",
        src: image54,
        category: "traffic"
    },
    {
        id: "43",
        name: "قمع صلب",
        src: image55,
        category: "traffic"
    },
    {
        id: "44",
        name: "قمع مرن",
        src: image56,
        category: "traffic"
    },
    {
        id: "45",
        name: "مرآة محدبة ومقعرة",
        src: image57,
        category: "traffic"
    },
    {
        id: "46",
        name: "مرآة مقعرة - ٦٠سم/٨٠سم/١ متر",
        src: image58,
        category: "traffic"
    },
    {
        id: "47",
        name: "مصد عمدان",
        src: image59,
        category: "traffic"
    },
    {
        id: "50",
        name: "حاجز طريق نيو جيرسي بلاستيك",
        src: image62,
        category: "traffic"
    },
    {
        id: "51",
        name: "حاجز مرور حديد",
        src: image63,
        category: "traffic"
    },
    {
        id: "52",
        name: "محدب طرق",
        src: image64,
        category: "traffic"
    },
    {
        id: "61",
        name: "مطب كابلات",
        src: image73,
        category: "traffic"
    },
    // {
    //     id: "53",
    //     name: "traffic services",
    //     src: image65,
    //     category: "eyes"
    // },
    {
        id: "54",
        name: "نضارة 3M شفافة",
        src: image66,
        category: "eyes"
    },
    {
        id: "55",
        name: "نضارة 3M غامقة",
        src: image67,
        category: "eyes"
    },
    {
        id: "56",
        name: "أوفر جلاس",
        src: image68,
        category: "eyes"
    },
    {
        id: "57",
        name: "نضارة قلاب",
        src: image69,
        category: "eyes"
    },
    {
        id: "58",
        name: "نضارة تايواني شفافة",
        src: image70,
        category: "eyes"
    },
    {
        id: "59",
        name: "نضارة تايواني غامقة",
        src: image71,
        category: "eyes"
    },
    {
        id: "60",
        name: "نظارة uvex",
        src: image72,
        category: "eyes"
    },
    {
        id: "31",
        name: "كمامة 3m n95 بفلتر كود 8822",
        src: image43,
        category: "paper"
    },
    {
        id: "32",
        name: "كمامة ورقية kn95 بفلتر",
        src: image44,
        category: "paper"
    },
    {
        id: "33",
        name: "كمامة ورقية kn95 بدون فلتر",
        src: image45,
        category: "paper"
    },
    {
        id: "62",
        name: "أفرول ورقي",
        src: image74,
        category: "paper"
    },
    {
        id: "63",
        name: "أفرول ورقي",
        src: image75,
        category: "paper"
    },
    {
        id: "64",
        name: "كمامة ورقية أطباء",
        src: image76,
        category: "paper"
    },
    {
        id: "65",
        name: "كمامة ورقية أطباء",
        src: image77,
        category: "paper"
    },
    {
        id: "66",
        name: "دقانة ورقية",
        src: image78,
        category: "paper"
    },
    {
        id: "67",
        name: "أوفر هيد - Overhead",
        src: image79,
        category: "paper"
    },
    {
        id: "68",
        name: "أوفر شوز - Overshoes",
        src: image80,
        category: "paper"
    },
]

export default products;