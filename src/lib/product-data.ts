
export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    link: string;
    hint: string;
}

export const allProducts: Product[] = [
    {
        id: "ecoFriendlyGanesha",
        name: "Puja N pujari Eco-Friendly Plantable Seed Ganesha Idol",
        price: 299,
        description: "A beautiful, 6-inch clay Ganpati Murti that contains seeds and can be grown into a plant after immersion.",
        link: "https://www.amazon.in/Eco-friendly-Plantable-Ganesha-Chaturthi-Clay-6inch/dp/B0B9X1T25C?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh%20chaturthi&qid=1755159913&sprefix=ganesh%20chaturthi%2Caps%2C419&sr=8-59-spons&xpid=d_iSDzNdnJcOI&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=utsavs-21&linkId=8e38d3b938409800aacbe3624c923f4c&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/76B7DXFg/ganpati299.webp",
        hint: "eco friendly ganesha"
    },
    {
        id: "ganeshPujaKit",
        name: "Poojnam Ganesh Chaturthi Puja Samagri Kit",
        price: 1299,
        description: "A complete puja set with 35 sacred items for all Ganpati rituals and offerings at home.",
        link: "https://www.amazon.in/Poojnam-Ganesh-Chaturthi-Premium-Samagri/dp/B0DCTGHLBX?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.4A5oBxQ0-BqwH16Kao4RiyVvs9GjgAKhY4IHwgDrggSBE2dLVbc2xgTi_cYtt0yjxrO3mBefHiC3iKiJmRse4XfklHJlEQImpjh_9Nn_Kc4.h3Mh8Cvl_dLr5HJ5oAFyn2h1JvTvBR_mCYy8AGkq7M0&dib_tag=se&keywords=ganesh%20chaturthi&qid=1755159913&sprefix=ganesh%20chaturthi%2Caps%2C419&sr=8-58&xpid=d_iSDzNdnJcOI&linkCode=ll1&tag=utsavs-21&linkId=eab2e672b29bfe70c59404fe43763fef&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/mrmyjQb6/ganesh-pooja-set.jpg",
        hint: "ganesh puja kit"
    }
];

export const products = allProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {} as Record<string, Product>);
