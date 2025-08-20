
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
        image: "https://i.postimg.cc/J0YbcmMD/ganesha-seed-1.jpg",
        hint: "seed ganesha"
    },
    {
        id: "ganeshPujaKit",
        name: "Poojnam Ganesh Chaturthi Puja Samagri Kit",
        price: 1299,
        description: "A complete puja set with 35 sacred items for all Ganpati rituals and offerings at home.",
        link: "https://www.amazon.in/Poojnam-Ganesh-Chaturthi-Premium-Samagri/dp/B0DCTGHLBX?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.4A5oBxQ0-BqwH16Kao4RiyVvs9GjgAKhY4IHwgDrggSBE2dLVbc2xgTi_cYtt0yjxrO3mBefHiC3iKiJmRse4XfklHJlEQImpjh_9Nn_Kc4.h3Mh8Cvl_dLr5HJ5oAFyn2h1JvTvBR_mCYy8AGkq7M0&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159913&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-58&xpid=d_iSDzNdnJcOI&linkCode=ll1&tag=utsavs-21&linkId=eab2e672b29bfe70c59404fe43763fef&language=en_IN&ref_=as_li_ss_tl",
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
    },
    {
        id: "rangoliPowder",
        name: "CraftVatika Multicolor Rangoli Powder for Diwali Decoration",
        price: 130,
        description: "A box of 5 vibrant color pouches for creating beautiful rangoli patterns for Diwali, Ganesh Chaturthi, and other festivals.",
        link: "https://www.amazon.in/CraftVatika-Multicolor-Decoration-Chaturthi-Festival/dp/B0CHPC1SFT?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-38&linkCode=ll1&tag=utsavs-21&linkId=354bf0e68ac549fee3629550e16fa4e1&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/Bnp1x4pq/rangoli.jpg",
        hint: "rangoli powder"
    },
    {
        id: "terracottaClay",
        name: "Eco-Friendly Terracotta Clay for Ganpati Idol Making",
        price: 199,
        description: "1kg of natural, water-soluble clay, perfect for sculpting your own Ganesha murti for an eco-friendly celebration.",
        link: "https://www.amazon.in/Eco-Friendly-Terracotta-Water-Soluble-Plantable-Sculpting/dp/B0FK5PTBMF?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-40&th=1&linkCode=ll1&tag=utsavs-21&linkId=9c098a9ba7418acc6766a1e1a436da24&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/m224P4P3/eco-ganesh-1.jpg",
        hint: "terracotta clay"
    },
    {
        id: "divyakoshLotusHanging",
        name: "Divyakosh Velvet Handmade Wall Decor Lotus",
        price: 349,
        description: "A set of 7 beautiful pink lotus hangings for Ganpati mandap decoration, wall decor, and other festive occasions.",
        link: "https://www.amazon.in/Divyakosh-Handmade-Lotus-Hanging-Festival/dp/B0B7BZGHD7?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-8&th=1&linkCode=ll1&tag=utsavs-21&linkId=8bfd2c1dbdd7f9367f24ba75f157eb90&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/nzYyWVXk/lotus-decor.jpg",
        hint: "lotus decor"
    },
    {
        id: "marigoldGarland",
        name: "Abhaas Artificial Marigold Flower Garland (5 Strings)",
        price: 417,
        description: "A set of 5 beautiful, 5ft long artificial marigold flower garlands, perfect for door torans and festive decorations.",
        link: "https://www.amazon.in/Artificial-Decoration-Chaturthi-Festivals-Rajnignadha/dp/B0CQDBRHRB?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-27&th=1&linkCode=ll1&tag=utsavs-21&linkId=8461cece6ef565d706425159aa00bb7b&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/VkvbB2Vn/marigold-1.jpg",
        hint: "marigold garland"
    },
    {
        id: "clayGowriIdol",
        name: "Puja N Pujari Eco Friendly Clay Gowri Gauri Idol",
        price: 399,
        description: "A 6-inch, eco-friendly clay idol of Goddess Gauri, perfect for celebrating Gauri Avahan during Ganesh Chaturthi.",
        link: "https://www.amazon.in/Puja-Pujari-Friendly-Ganesh-Chaturthi/dp/B07W5MTQSN?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=36O1VJPGIG1Q7&cv_ct_cx=ganesh+chaturthi&keywords=ganesh+chaturthi&pd_rd_i=B07W5MTQSN&pd_rd_r=b5f4fb8b-989f-42a4-80b5-111f0ebe5d1c&pd_rd_w=OEtXm&pd_rd_wg=LVhRA&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=278JN3W8BEHQN19E62FY&qid=1755159752&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=ganesh+chaturthi%2Caps%2C419&sr=1-5-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=utsavs-21&linkId=b7311d628ba71c04ff08008e9763a70c&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/RZtvBR32/gowri.jpg",
        hint: "gowri idol"
    },
    {
        id: "saudeepMittiGanesh",
        name: "SAUDEEP INDIA 6 Inch Mitti Ganesh Idol",
        price: 399,
        description: "An eco-friendly, handcrafted clay Ganesh murti with a beautiful lotus design, perfect for a biodegradable visarjan.",
        link: "https://www.amazon.in/Eco-Friendly-Handcrafted-Figurine-Biodegradable-Chaturthi/dp/B0BB6TCG1R?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=36O1VJPGIG1Q7&cv_ct_cx=ganesh%2Bchaturthi&keywords=ganesh%2Bchaturthi&pd_rd_i=B0BB6TCG1R&pd_rd_r=b5f4fb8b-989f-42a4-80b5-111f0ebe5d1c&pd_rd_w=OEtXm&pd_rd_wg=LVhRA&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=278JN3W8BEHQN19E62FY&qid=1755159752&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=1-1-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll1&tag=utsavs-21&linkId=1a62d41527a3c3104118149d576b664d&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/c49SZJXk/eco-ganesh-3.jpg",
        hint: "eco-friendly ganesha"
    },
    {
        id: "ganpatiDecorPvcStand",
        name: "SpecialYou® Ganpati Decoration Setup with PVC Stand",
        price: 716,
        description: "A complete Ganpati decoration setup with a PVC stand, perfect for creating a beautiful backdrop for your celebrations.",
        link: "https://www.amazon.in/Special-Ganpati-Decoration-Chaturthi-Backdrop/dp/B0DBHT3G3N?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159913&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-88&xpid=d_iSDzNdnJcOI&th=1&linkCode=ll1&tag=utsavs-21&linkId=0770a780d9902e993ecc275c0d579796&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/66zsL3J6/ganesh-pvc-stand.jpg",
        hint: "ganesh pvc stand"
    },
    {
        id: "indianArtVillaThali",
        name: "INDIAN ART VILLA Pure Brass Pooja Thali Set",
        price: 1955,
        description: "A beautiful 10.1-inch brass thali set with an embossed floral design, perfect for home temples and special rituals.",
        link: "https://www.amazon.in/INDIAN-ART-VILLA-Religious-DIameter-10-1/dp/B07RPYGYZC?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=7182456d6dc168d67a3fca216df0ecba&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/MpCgKfR5/brass-pooja-set.jpg",
        hint: "brass pooja set"
    },
    {
        id: "bengalenThali8Inch",
        name: "BENGALEN Pooja Thali Set Brass 8 Inch",
        price: 1199,
        description: "An 8-inch brass puja thali set complete with accessories like a diya, ghanti, kalash, spoon, and agarbatti stand.",
        link: "https://www.amazon.in/BENGALEN-Silver-Plated-Pooja-Thali/dp/B089QT2XKN?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja+thali+brass&qid=1755163260&sprefix=pooja+thali%2Caps%2C365&sr=8-9&linkCode=ll1&tag=utsavs-21&linkId=4544394948780cd384b657ba12a40c20&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/9Mpkpxkg/pooja-thali.jpg",
        hint: "pooja thali"
    },
    {
        id: "bengalenThali6Inch",
        name: "BENGALEN Brass Pooja Plate 6 Inch",
        price: 499,
        description: "A 6-inch traditionally designed, handcrafted brass arti thali, ideal for home mandirs and festive gifts.",
        link: "https://www.amazon.in/BENGALEN-Traditional-Designed-Handcrafted-Weeding/dp/B0BZJLRDQ4?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-8&th=1&linkCode=ll1&tag=utsavs-21&linkId=00c6ddbaafca2a40d1b90282cb234bf8&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/RhZDb75S/brass-thali.jpg",
        hint: "brass thali"
    },
    {
        id: "spillboxThali",
        name: "Spillbox 10inch Brass Puja Thali Set",
        price: 1399,
        description: "A 10-inch handcrafted brass thali set perfect for various occasions like Karwa Chauth, weddings, and corporate gifts.",
        link: "https://www.amazon.in/Spillbox-Traditional-Handcrafted-Brass-Bartan/dp/B08KDWCTYZ?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-12&linkCode=ll1&tag=utsavs-21&linkId=0d858cfdf140f771f221d0f5a59d9ef7&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/L6hWt33v/brass-pooja-set1.jpg",
        hint: "brass pooja set"
    },
    {
        id: "solimoThali",
        name: "Amazon Brand - Solimo Puja Thali/Bhog Thali",
        price: 429,
        description: "A 6.5-inch brass thali with a flower-engraved design, suitable for worship and as a bhog thali.",
        link: "https://www.amazon.in/Amazon-Brand-Solimo-Worship-Flower-Engraved/dp/B0BBG18TWR?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=835835eaf1a00c036785a96dc6f0bffc&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/rFbPQRhT/brass-thali-1.jpg",
        hint: "brass thali"
    },
    {
        id: "bengalenGopalThali",
        name: "BENGALEN Pooja Thali Set Brass Small 7 Inch",
        price: 899,
        description: "A small brass bhog thali set specifically designed for Laddu Gopal, perfect for Janmashtami decorations.",
        link: "https://www.amazon.in/BENGALEN-Janmashtami-Decoration-Festival-Standard/dp/B0B37XN9JF?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-32&th=1&linkCode=ll1&tag=utsavs-21&linkId=10a4e0f71525510031c66e6ad2be3ee7&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/s2C0Rdd0/janmashtami-set.jpg",
        hint: "janmashtami set"
    },
    {
        id: "mpkStationerySet",
        name: "MPK Perfect Stationery Gift Set with Unicorn Pouch",
        price: 299,
        description: "A complete stationery set with a unicorn pouch, perfect as a Kanya Pujan gift or a birthday return gift for kids.",
        link: "https://www.amazon.in/MPK-Perfect-Stationery-Sharpner-Birthday/dp/B0DHVVGCGZ?content-id=amzn1.sym.b5876297-ded6-4475-876b-d315610bb575%3Aamzn1.sym.b5876297-ded6-4475-876b-d315610bb575&dib=eyJ2IjoiMSJ9.rAT7bvpxqOa-bkXiV9jBbSQJxJdED3r_igJpt3r5A6Rcl6ZWNqq7sysAQocEI2h-HhkoSMw0B7JTDl50yA-_lswHO5HRY0CN5l714ICUi1ReHEiQaszJMt80tUWkyd6sQyK7pOf4-fxLwLOz7moPPH471Csn2nhUIOAqqITao8Sb9Zy4NQ0ge9GLePepb9pFw10xDBWtMN-JS871_2fXhYdsApt8kCN0ZVygWvQU2QGYLliEc-UkKUaBls1DhpcdNpyOaSag7qNcij3nQXcTJQ6Oh6VKNb98EjXDK2psoVA.qitDJJKHx-7SJR5hJYin8JeHSElInPXPnJYXS4sGrX4&dib_tag=se&keywords=kanya+pujan+gifts+set+of+12&pd_rd_r=b6de6a25-c44d-483b-a2e3-f0aa79c5db06&pd_rd_w=EcAcC&pd_rd_wg=zcwUv&qid=1755298518&sr=8-6&linkCode=ll1&tag=utsavs-21&linkId=ff2077ce1043ec38e47b3d9f942c91df&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/43z9fdTn/kanya-pujan-navratri-1.jpg",
        hint: "kanya pujan gifts"
    },
    {
        id: "baalWaterBottleSet",
        name: "BAAL Navratri Kanjak Gifts (Set of 12 Water Bottles)",
        price: 799,
        description: "A set of 12 attractive water bottles, ideal as Kanjak return gifts for kids during Navratri celebrations.",
        link: "https://www.amazon.in/BAAL-Navratri-Kanjak-Kanajk-Bottle/dp/B0DYF35GL3?content-id=amzn1.sym.b5876297-ded6-4475-876b-d315610bb575%3Aamzn1.sym.b5876297-ded6-4475-876b-d315610bb575&dib=eyJ2IjoiMSJ9.PbOZccxudy5rXfC0Z-G6TOlGRDMU5wCONpDgy31vcD-Azb5p4AwZ72lM-KLPSvBhXLiJHQ9SHPvZ2pih7R4OtePPfBlYfCecMx50DzTZ0VW28M3iZ58DQbYWMMu70HKCEIPWo_u8WVGx7nHvnUKpf1xKd4n960gJIQKLkN9xt-TCh3b3ncXC-gcukRqKGJCZuLgb8G2paE6sA-ctdT2ugGM16M1YXXUq308iKurZnHzw3N0D82CTc3Fsg7_U88ehoDIUe6pc8B9n26KYzKMChIhR-pAUS-raGffpoJA8PYo.KQQbBh5EnE7rvj1u34g9YSsqGApY3AkQeyRYQZLcVTQ&dib_tag=se&keywords=kanya%2Bpooja%2Bgifts%2Bfor%2Bgirls&pd_rd_r=433f45f7-e10f-41ae-867d-fee125a5a544&pd_rd_w=vQ54y&pd_rd_wg=EXTXm&qid=1755298059&sr=8-165&xpid=bHMkCo4yOyT8J&th=1&linkCode=ll1&tag=utsavs-21&linkId=12c6d55b24dc01b8a1101a400bf1e6ac&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/xCntYhBD/kanya-pujan-navratri-2.jpg",
        hint: "kanjak gifts"
    },
    {
        id: "baalHairAccessories",
        name: "Baal Navratri Kanjak Pujan Return Gift Hair Accessories (Set of 12)",
        price: 449,
        description: "A beautiful set of 12 hair accessories including hairbands and clips, making for a perfect Kanjak return gift for girls.",
        link: "https://www.amazon.in/Navratri-Kanjak-Return-Accessories-Hairband/dp/B0CKLQBCM1?content-id=amzn1.sym.b5876297-ded6-4475-876b-d315610bb575%3Aamzn1.sym.b5876297-ded6-4475-876b-d315610bb575&dib=eyJ2IjoiMSJ9.7FDiHHAG7El6xX4YnJ8nd0XQR48RtuTwnpt_v6mhNWlcl6ZWNqq7sysAQocEI2h-HhkoSMw0B7JTDl50yA-_lnX_uotazU_GDNnN4gM4UBzyzouLYbfYG8nM6-J_0gMIlzpFwGhM-P4g80lqzZwr4PoEIHkGvj9dM8PH4BFZoP1pYHdzXeaJv_OPyYDuu08i_RKg32JiLi7acky5Cba1bzIeXZDAzG0q5o-V-bbnF0ocZIpWxz2RjSvVGMnEaFVH-jpUw9Kt2EMqY63Ic6ho7jmrtuQM34vxJojya0XqKp4.N_bzMHPzHkbjLKA8Xd7tHsvjuGEopazUtw09p1IRVyE&dib_tag=se&keywords=kanya%2Bpooja%2Bgifts%2Bfor%2Bgirls&pd_rd_r=433f45f7-e10f-41ae-867d-fee125a5a544&pd_rd_w=vQ54y&pd_rd_wg=EXTXm&qid=1755297769&sr=8-25&th=1&linkCode=ll1&tag=utsavs-21&linkId=29450f0f963e27ee86cf13a877d132ab&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/qq2zF4fS/kanya-pujan-3.jpg",
        hint: "hair accessories"
    },
    {
        id: "anumalaJuteBag",
        name: "Anumala Jute World® Handmade Kalamkari Jute Bag",
        price: 1499,
        description: "A stylish and eco-friendly jute tote bag featuring traditional Kalamkari art, perfect as a thoughtful and sustainable return gift.",
        link: "https://www.amazon.in/Anumala-Jute-Eco-Friendly-Multipurpose-Craftsmanship/dp/B0F6SZGP8T?crid=1K9FI9N3EPXLP&dib=eyJ2IjoiMSJ9.-ifLusZc8GLQIcAgM8LAyw5dOnUqLx4UobKwbyztmWOBy5yZuxZw6gJzP2NES-HpLC79ZKvHLrTKsmeIin3mOL7pBm-Ek0idYs1YsAlKCfo.OhzE-39SRT1Izc2qewEHaZ3R5Vb0GxHLRGJsR4f1ayQ&dib_tag=se&keywords=jute%2Bbags%2Bset%2Bof%2B12&qid=1755301208&sprefix=jute%2Bbags%2Bset%2Bof%2B1%2Caps%2C368&sr=8-57&xpid=vB2NrvOBWqaRd&th=1&linkCode=ll1&tag=utsavs-21&linkId=971026d9933660e0da84edc3c2c96c52&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/Dwxd6dPs/eco-jute-1.jpg",
        hint: "jute bag"
    },
    {
        id: "doubleRCanvasBag",
        name: "DOUBLE R BAGS Eco-Friendly Cotton Canvas Bag",
        price: 469,
        description: "A reusable and multi-purpose cotton canvas bag with reinforced handles, ideal for groceries and daily use. A practical eco-friendly gift.",
        link: "https://www.amazon.in/DOUBLE-BAGS-Shopping-Vegetable-Reinforced/dp/B09MSDQ53X?content-id=amzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%3Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82&crid=1K9FI9N3EPXLP&cv_ct_cx=jute%2Bbags%2Bset%2Bof%2B12&keywords=jute%2Bbags%2Bset%2Bof%2B12&pd_rd_i=B09NM1HSF1&pd_rd_r=3346550d-915d-4605-8b3f-afb5e679a065&pd_rd_w=J1hwM&pd_rd_wg=BVlBz&pf_rd_p=24e1f0fb-6b39-49f5-b34a-4ebef8eaef82&pf_rd_r=RGGPJAPASX7FCK81676E&qid=1755301208&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=jute%2Bbags%2Bset%2Bof%2B1%2Caps%2C368&sr=1-53-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons&xpid=vB2NrvOBWqaRd&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll1&tag=utsavs-21&linkId=e4ea7ad3f728da2fe4bc6ef1e4e29e49&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/KzBM6nB0/eco-jute-2.jpg",
        hint: "canvas bag"
    },
    {
        id: "arkMataChunri",
        name: "ARK Navratri Kanya Pujan Return Gifts Mata Chunri Set",
        price: 299,
        description: "A set of 12 traditional Mata ki Chunris, perfect as a devotional return gift for Kanya Pujan during Navratri.",
        link: "https://www.amazon.in/ARK-Navratri-Kanya-Return-Chunri/dp/B0CGJCSFN5?content-id=amzn1.sym.b5876297-ded6-4475-876b-d315610bb575%3Aamzn1.sym.b5876297-ded6-4475-876b-d315610bb575&dib=eyJ2IjoiMSJ9.kMBkDNLLHcFf7iwZOYgFyEU01VTO1dBZid97Tm8kB8qpBMdvEiRM23frTcOJ7Bz5pEvbdsptDoViqBLx-EJg13Dob3BiQpclPRY-X4_3JR-hlOOSZmQyuHVn4IYP3IKcElbtQTembG70L_km2KFeueHQHW4PrsRisaSWJgxeGMqe4Y2AkSs9k6N1zgqW_AA9BGNrV9nj7bqB4yjUYFG1qkZqTMD-JApDsJvvsg_eW3K-OaD1pfkW0zpBzGhWUpqahUJ19uemn2ANq3AVM8wr7ke5oKXKo-pB6Cf6tS9AuA8.qpYRSMOlx-pyL_dFIbCuFiAv0X13TKDTtKTl8mh3swo&dib_tag=se&keywords=navratri+gifts+for+kanya&pd_rd_r=5cae24ea-e200-4fb4-8590-4f1bb814bdfb&pd_rd_w=50JwN&pd_rd_wg=Umlcc&qid=1755297638&sr=8-8&linkCode=ll1&tag=utsavs-21&linkId=96e13b0a5be5d89b679aa38ac4c83f45&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/43C4rjPT/chunri.jpg",
        hint: "chunri"
    },
    {
        id: "craftsWorldKarwaThali",
        name: "CRAFTS WORLD Karwa Chauth Special Puja Thali",
        price: 799,
        description: "A beautiful stainless steel puja thali with Meenakari work, including a chalni and lota, perfect for the Karva Chauth ritual.",
        link: "https://www.amazon.in/CRAFTS-WORLD-Special-Stainless-Meenakari/dp/B0DGB8D9QT?crid=1IHQ0592P8I0W&dib=eyJ2IjoiMSJ9.H0_mmhYdo-41aQTfwTLWin0q3W_D6W4O1ecjasQbjawAYph7mLrwz3Oa9Xw_ArKdnAMHAgX7pv28k4MoSfimvrRsJBkCNOkqV5C0gLXxAgiVxGkiE7CBF_A0sXEu-cWmmmoImdLhmMlcJgKc_9DyZBSV4-f2lokUEKZmJyDst5EUFs9rOlZUOyI6ZK4dKiKwK1sEX3HNkN7z7vaWHWvmHdlVgZa0YfWtK0sgLiEqWs9l-AwLAqUgfjp5IAhsDAu4fP7zJtjNa7GO6j10ds3FmQKXwZmNYeIen7HexxtTm2M.TcgA-XYqhNJg532CTRlhuuutYcWRazMxnBy50uINzBY&dib_tag=se&keywords=karva%2Bchauth&qid=1755302623&sprefix=karva%2Bchauth%2Caps%2C460&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=6a8e30e80bb19198d03b9fed470355c4&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/CxTWY03J/karva-chauth-1.jpg",
        hint: "karva chauth thali"
    },
    {
        id: "tiedRibbonsKarwaThali",
        name: "TIED RIBBONS Karwachauth Thali Set with Cover Combo",
        price: 999,
        description: "A complete Karva Chauth pooja samagri kit with a steel thali, lota, and channi, beautifully packaged in a gift box.",
        link: "https://www.amazon.in/TIED-RIBBONS-Karwachauth-Thali-Cover/dp/B0DJ2PVR46?crid=1IHQ0592P8I0W&dib=eyJ2IjoiMSJ9.H0_mmhYdo-41aQTfwTLWin0q3W_D6W4O1ecjasQbjawAYph7mLrwz3Oa9Xw_ArKdnAMHAgX7pv28k4MoSfimvrRsJBkCNOkqV5C0gLXxAgiVxGkiE7CBF_A0sXEu-cWmmmoImdLhmMlcJgKc_9DyZBSV4-f2lokUEKZmJyDst5EUFs9rOlZUOyI6ZK4dKiKwK1sEX3HNkN7z7vaWHWvmHdlVgZa0YfWtK0sgLiEqWs9l-AwLAqUgfjp5IAhsDAu4fP7zJtjNa7GO6j10ds3FmQKXwZmNYeIen7HexxtTm2M.TcgA-XYqhNJg532CTRlhuuutYcWRazMxnBy50uINzBY&dib_tag=se&keywords=karva+chauth&qid=1755302623&sprefix=karva+chauth%2Caps%2C460&sr=8-29&linkCode=ll1&tag=utsavs-21&linkId=94612300880bff29031e24a457b1535e&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/W1Gx1KjV/karva-chauth-2.jpg",
        hint: "karva chauth set"
    },
    {
        id: "rajasthanKraftToran",
        name: "Rajasthan Kraft Artificial Marigold Toran",
        price: 854,
        description: "A 40-inch yellow mango flower toran for door decoration, perfect for home, temple, and wedding decor.",
        link: "https://www.amazon.in/Rajasthan-Kraft-Artificial-Bandanwar-B0037/dp/B0CSSY8HCR?crid=3MMR3JK1DWT57&dib=eyJ2IjoiMSJ9.DcxD5z72YnTnG5eeS-JmoauoHq6Zj-raqWIuSwzQbV9Ll6dF-4pPUQL_dKucvBjavIKmIji8TAUPRevm86SRrNMIsdidh6mZiNPuCzRJXTYQynEdyBu6G687XUBzQbJDeNGcW3NSht2jNBcHDTK10mCvwC2YQww84Ob2eWjKKMs1zgiLH86lKnGgsnAhYLb9G3G_wzUaWz6JtieYgCtFBh5V1da3yrO4YK0X6s7hjEtg_sZD5FsDRliqVSOgUMAL_-X3sKie2_Mkl_0MlW0MTHAudbvdFJrvyEsSO5_Ka_g.Et145j66L5d6m8J_uuizAttK6wIFsf0EA1IUUeRZ_Ik&dib_tag=se&keywords=festival&qid=1755628792&sprefix=festiva%2Caps%2C408&sr=8-107-spons&xpid=aQIshD95N6r9G&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=2b873bc0fcda5238c02924953b555fc5&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/RVKDgmKW/marigold-toran.jpg",
        hint: "marigold toran"
    },
    {
        id: "handicraftsParadiseChowki",
        name: "Handicrafts Paradise Intricate Floral Painted Marble Chowki",
        price: 276,
        description: "A set of two 4x4 inch marble chowkis, perfect for placing idols in a home mandir.",
        link: "https://www.amazon.in/Handicrafts-Paradise-Intricate-Floral-Painted/dp/B074XS1V26?dib=eyJ2IjoiMSJ9.0LvcshCnKh5gYV7DcZCRSSasH0P7HkYIajTGEmGDDUGQE2cWuuz1OH_dPQrzwxzlBfzxubZdKm-Km6vNXPGYsfpwHSj6wa19c8HSWT8ddNajEHUhZ1qS0JusyXLC02CKNzjpKILD9fJ5kmLybiiprWc1eC02RyRdFnZ2ge2Xma_qeFjneBURUY-OXhiy9inXV8KmzUf_ez5PyOQVMOCmPb1eiX6U6pLhDoTWDOkumaBF-8sxO6A_sVUfCGCU5jzrpUbd6Dyn1VF0QskSNh724urAERvRa6x__Zo9uWBNBQE.ewln0R0WglakYbbBFUgK8preE0GyxMc3O7wuUSVWN-Q&dib_tag=se&keywords=navratri+pooja+items&qid=1755668365&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-39&linkCode=ll1&tag=utsavs-21&linkId=234a6fb23f843e0f64e0f8d28bd732b7&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/BZ1Yv3hm/chowki.jpg",
        hint: "marble chowki"
    },
    {
        id: "signamioDhoopStand",
        name: "SIGNAMIO® Wooden Sambrani Dhoop Stand",
        price: 216,
        description: "A wooden incense holder for sambrani dhoop, an essential item for home mandirs and puja rituals.",
        link: "https://www.amazon.in/SIGNAMIO%C2%AE-Sambrani-Handcrafted-Traditional-Aromatic/dp/B09RV9BZ7D?dib=eyJ2IjoiMSJ9.0LvcshCnKh5gYV7DcZCRSSasH0P7HkYIajTGEmGDDUGQE2cWuuz1OH_dPQrzwxzlBfzxubZdKm-Km6vNXPGYsfpwHSj6wa19c8HSWT8ddNajEHUhZ1qS0JusyXLC02CKNzjpKILD9fJ5kmLybiiprWc1eC02RyRdFnZ2ge2Xma_qeFjneBURUY-OXhiy9inXV8KmzUf_ez5PyOQVMOCmPb1eiX6U6pLhDoTWDOkumaBF-8sxO6A_sVUfCGCU5jzrpUbd6Dyn1VF0QskSNh724urAERvRa6x__Zo9uWBNBQE.ewln0R0WglakYbbBFUgK8preE0GyxMc3O7wuUSVWN-Q&dib_tag=se&keywords=navratri%2Bpooja%2Bitems&qid=1755668365&sr=8-12&th=1&linkCode=ll1&tag=utsavs-21&linkId=de5209ff72db8259eb8e2300d114ae30&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/qqX2C16v/dhoop-stand.jpg",
        hint: "dhoop stand"
    },
    {
        id: "sandalwoodHavanCups",
        name: "Sandalwood Havan Cups (16 Pcs)",
        price: 249,
        description: "Eco-certified natural havan cups with an organic chandan fragrance, perfect for Ganpati puja and other rituals.",
        link: "https://www.amazon.in/PHOOL-LUXURY-INCENSE-Sandalwood-Certified/dp/B0C7MZLKZZ?dib=eyJ2IjoiMSJ9.0LvcshCnKh5gYV7DcZCRSSasH0P7HkYIajTGEmGDDUGQE2cWuuz1OH_dPQrzwxzlBfzxubZdKm-Km6vNXPGYsfpwHSj6wa19c8HSWT8ddNajEHUhZ1qS0JusyXLC02CKNzjpKILD9fJ5kmLybiiprWc1eC02RyRdFnZ2ge2Xma_qeFjneBURUY-OXhiy9inXV8KmzUf_ez5PyOQVMOCmPb1eiX6U6pLhDoTWDOkumaBF-8sxO6A_sVUfCGCU5jzrpUbd6Dyn1VF0QskSNh724urAERvRa6x__Zo9uWBNBQE.ewln0R0WglakYbbBFUgK8preE0GyxMc3O7wuUSVWN-Q&dib_tag=se&keywords=navratri+pooja+items&qid=1755668365&sr=8-13&linkCode=ll1&tag=utsavs-21&linkId=3f56645ebbaf8b9b682447e30426e647&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/gJpJ6mV3/eco-dhoop.jpg",
        hint: "eco dhoop"
    },
    {
        id: "ganpatiDecorStand",
        name: "Ganpati Decoration Setup with Foldable Stand",
        price: 849,
        description: "A 30x24 inch foldable backdrop stand, ideal for Ganpati, Janmashtami, Navratri, and other festive home decorations.",
        link: "https://www.amazon.in/SOLOBOLO-Foldable-Backdrop-Navratri-Decoration/dp/B0FDBCLKFL?crid=3MMR3JK1DWT57&dib=eyJ2IjoiMSJ9.0x0cRQf5lRanLXscL6J4AcfU8Ya1t_OcP4AMTA3gyI_iYXYMXYNSlJXx4lUuJNF9utDWrJUCMsMfpUC9E8P8EDon2D7TTkGXLAR9n73gKUGQy3t5sg5oRKN_9y13LoQtFHvIoGBNsE1gDjYtJU6xYCszcDYpLtIau4zK1PiiVnppmJpVxmp3iBEUvV30DXt7gY5nD61KIV60eMNWd9LKsO9xFfNpYyUqHurWei03LIYJX627111oyyFNK8pKozAf96H8EdITJf_lTedMkagwoA62K948FQwIQleQVVD5kTs.owVd2Vdxp2FLMQFzF4cGy9wZRG8ZvsDZSMD89izQsPE&dib_tag=se&keywords=festival&qid=1755611298&sprefix=festiva%2Caps%2C408&sr=8-59-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=db70f99284d9652c915dfe26d5ad7125&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/3R38x9hB/decor-stand.jpg",
        hint: "decor stand"
    },
    {
        id: "jhGalleryCandleHolder",
        name: "JH Gallery Handcrafted Elephant Tealight Candle Holder (Set of 6)",
        price: 312,
        description: "A set of 6 beautiful, multicolor elephant-shaped tealight holders made from recycled materials, perfect for Diwali decor.",
        link: "https://www.amazon.in/JH-Gallery-Handcrafted-Elephant-Multicolor/dp/B08L6VRXY9?crid=LYQ462IML2NF&dib=eyJ2IjoiMSJ9._s1PTx3QUm1Ba-Ihsd2TFCFVW8Upo5mvmh5sQj6dxADvnd0Paycf-0lnp4OCOj_iHGCsFwjrOhFaFVCHLsxAtG-Iyb4K-QBpIVK_4TUoRDI_9AcKvLZfo28xCCGsnApoOjdqcYJrLsSBSH9f9CJRHkQkJmpJlh5_c9yDEaOxzjURzU8B38R_zpAlsMUcZ9OrmpYV9enHT9_8Civq4iH0QaRaGw5WzkuMorwKEkYrMgHTUioKczjTXWQIcKkpWDk2P9wdMUy2OFjUcCY26UlJxW_3GBAh_5j8FfBvHjxgWtI.TBgkzg6LLOjq4TsEo9tnx9_TV9r5vsZz-hTGz8GbtuA&dib_tag=se&keywords=diwali&qid=1755670429&sprefix=diwali%2Caps%2C295&sr=8-6&th=1&linkCode=ll1&tag=utsavs-21&linkId=7dde83757fa0d21f2a3f4fada6e4e73f&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/fbcdPH5j/recycled-candle-stand.jpg",
        hint: "recycled candle stand"
    },
    {
        id: "swahaCowGheeDiya",
        name: "Swaha Premium Cow Ghee Diya (100 Pieces)",
        price: 426,
        description: "A pack of 100 wax-free cow ghee diyas with a 30-minute burning time, ideal for daily puja and festive rituals.",
        link: "https://www.amazon.in/Swaha-Minutes-Ghee-Diya-Yellow/dp/B0188LT5NA?crid=LYQ462IML2NF&dib=eyJ2IjoiMSJ9._s1PTx3QUm1Ba-Ihsd2TFCFVW8Upo5mvmh5sQj6dxADvnd0Paycf-0lnp4OCOj_iHGCsFwjrOhFaFVCHLsxAtG-Iyb4K-QBpIVK_4TUoRDI_9AcKvLZfo28xCCGsnApoOjdqcYJrLsSBSH9f9CJRHkQkJmpJlh5_c9yDEaOxzjURzU8B38R_zpAlsMUcZ9OrmpYV9enHT9_8Civq4iH0QaRaGw5WzkuMorwKEkYrMgHTUioKczjTXWQIcKkpWDk2P9wdMUy2OFjUcCY26UlJxW_3GBAh_5j8FfBvHjxgWtI.TBgkzg6LLOjq4TsEo9tnx9_TV9r5vsZz-hTGz8GbtuA&dib_tag=se&keywords=diwali&qid=1755670429&sprefix=diwali%2Caps%2C295&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=29b16da3f863b2582beef04aefc87358&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/ncSNs24k/cow-ghee-diya.jpg",
        hint: "cow ghee diya"
    }
];


export const products = allProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {} as Record<string, Product>);
