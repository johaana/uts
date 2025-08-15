
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
        link: "https://www.amazon.in/Eco-Friendly-Terracotta-Water-Soluble-Plantable-Sculpting/dp/B0FK5PTBMF?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-40&th=1&linkCode=ll1&tag=utsavs-21&linkId=9c098a9ba7418acc6766a1e1a436da24&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/m224P4P3/eco-ganesh-1.jpg",
        hint: "terracotta clay"
    },
    {
        id: "divyakoshLotusHanging",
        name: "Divyakosh Velvet Handmade Wall Decor Lotus",
        price: 349,
        description: "A set of 7 beautiful pink lotus hangings for Ganpati mandap decoration, wall decor, and other festive occasions.",
        link: "https://www.amazon.in/Divyakosh-Handmade-Lotus-Hanging-Festival/dp/B0B7BZGHD7?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-8&th=1&linkCode=ll1&tag=utsavs-21&linkId=8bfd2c1dbdd7f9367f24ba75f157eb90&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/nzYyWVXk/lotus-decor.jpg",
        hint: "lotus decor"
    },
    {
        id: "marigoldGarland",
        name: "Abhaas Artificial Marigold Flower Garland (5 Strings)",
        price: 417,
        description: "A set of 5 beautiful, 5ft long artificial marigold flower garlands, perfect for door torans and festive decorations.",
        link: "https://www.amazon.in/Artificial-Decoration-Chaturthi-Festivals-Rajnignadha/dp/B0CQDBRHRB?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-27&th=1&linkCode=ll1&tag=utsavs-21&linkId=8461cece6ef565d706425159aa00bb7b&language=en_IN&ref_=as_li_ss_tl",
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
        link: "https://www.amazon.in/BENGALEN-Silver-Plated-Pooja-Thali/dp/B089QT2XKN?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-9&linkCode=ll1&tag=utsavs-21&linkId=4544394948780cd384b657ba12a40c20&language=en_IN&ref_=as_li_ss_tl",
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
    }
];


export const products = allProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {} as Record<string, Product>);
