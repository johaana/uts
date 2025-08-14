
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
        link: "https://www.amazon.in/Eco-friendly-Plantable-Ganesha-Chaturthi-Clay-6inch/dp/B0B9X1T25C?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159913&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-59-spons&xpid=d_iSDzNdnJcOI&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=utsavs-21&linkId=8e38d3b938409800aacbe3624c923f4c&language=en_IN&ref_=as_li_ss_tl",
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
    },
    {
        id: "ganpatiDecor",
        name: "SpecialYou® Ganpati Decoration Setup for Home",
        price: 497,
        description: "Includes a white backdrop curtain, green vines, and lights to create a beautiful decoration setup for Ganesh Chaturthi.",
        link: "https://www.amazon.in/Special-Curtain-Decoration-Light-Backdrop/dp/B09W5GPSL5?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-56&th=1&linkCode=ll1&tag=utsavs-21&linkId=8258f71cde5e98a1bde6e393d32d06f4&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/XYmVCP52/ganpati-decor-1.jpg",
        hint: "ganpati decor"
    },
    {
        id: "rangoliMat",
        name: "Decorative Floral Rangoli Mat Set (Red, Set of 2)",
        price: 449,
        description: "A beautiful 12-inch floral rangoli mat set, perfect for quick and elegant decoration for Diwali, Ganesh Chaturthi, and other festivals.",
        link: "https://www.amazon.in/Decorative-Floral-Rangoli-Mat-Traditional/dp/B0FHJVW6LG?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-53&th=1&linkCode=ll1&tag=utsavs-21&linkId=7b912e9a3475c70741feb19c6a08cc6f&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/bYgpTrbS/rangoli-mat.jpg",
        hint: "rangoli mat"
    },
    {
        id: "tiedRibbonsGanesha",
        name: "TIED RIBBONS Eco Friendly Ganesha Idol",
        price: 299,
        description: "A handcrafted 17.7cm clay Ganpati murti that is designed to dissolve in water, making for an eco-friendly visarjan.",
        link: "https://www.amazon.in/TIED-RIBBONS-Friendly-Ganesha-17-7cm/dp/B0FHQJ37HC?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-50&linkCode=ll1&tag=utsavs-21&linkId=59c47a6a6a2d958cef6740bcb101cf12&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/nrz5TFbq/eco-friendly-ganesha-1.jpg",
        hint: "eco friendly ganesha"
    },
     {
        id: "backdropStand",
        name: "DecorTwist® Small Circular Backdrop Stand Frame",
        price: 949,
        description: "A small circular stand perfect for creating a beautiful backdrop for Varalaxmi Pooja, Ganesh Chaturthi, and other festive decorations.",
        link: "https://www.amazon.in/DecorTwist-Circular-Backdrop-Decoration-Decorative/dp/B0CLPJTL4Q?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-45&th=1&linkCode=ll1&tag=utsavs-21&linkId=ceb2cf08cafc413dcc284cfeb42eac42&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/N0czS7vs/circular-stand.jpg",
        hint: "decoration stand"
    }
];

export const products = allProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {} as Record<string, Product>);
