
export interface Product {
    id: string;
    name: string;
    price: string;
    link: string;
    image: string;
    description: string;
}

export const allProducts: Product[] = [
    {
        id: "plantableGanesha",
        name: "Puja N pujari Eco-Friendly Plantable Seed Ganesha",
        price: "299",
        link: "https://www.amazon.in/Eco-friendly-Plantable-Ganesha-Chaturthi-Clay-6inch/dp/B0B9X1T25C?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159913&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-59-spons&xpid=d_iSDzNdnJcOI&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=utsavs-21&linkId=8e38d3b938409800aacbe3624c923f4c&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/8PtnC1Y2/plantable-ganesha.jpg",
        description: "This beautiful clay idol contains seeds that will grow into a plant after home immersion."
    },
    {
        id: "tiedRibbonsGanesha",
        name: "TIED RIBBONS Eco Friendly Ganesha Idol",
        price: "299",
        link: "https://www.amazon.in/TIED-RIBBONS-Friendly-Ganesha-17-7cm/dp/B0FHQJ37HC?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159752&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-50&linkCode=ll1&tag=utsavs-21&linkId=59c47a6a2d958cef6740bcb101cf12&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/0j0K3Bv2/tied-ribbons-ganesha.jpg",
        description: "A handcrafted, water-soluble mitti (clay) statue perfect for home visarjan. A simple, elegant, and traditional choice."
    },
    {
        id: "diyClayKit",
        name: "Eco-Friendly Terracotta Clay for Idol Making (1kg)",
        price: "199",
        link: "https://www.amazon.in/Eco-Friendly-Terracotta-Water-Soluble-Plantable-Sculpting/dp/B0FK5PTBMF?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-40&th=1&linkCode=ll1&tag=utsavs-21&linkId=9c098a9ba7418acc6766a1e1a436da24&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/8zQhdwfB/clay-kit.jpg",
        description: "This natural, water-soluble clay is perfect for sculpting your own Ganpati murti at home. It's safe for kids and the environment."
    },
    {
        id: "lotusGanesha",
        name: "SAUDEEP INDIA 6 Inch Mitti Ganesh Idol",
        price: "399",
        link: "https://www.amazon.in/Eco-Friendly-Handcrafted-Figurine-Biodegradable-Chaturthi/dp/B0BB6TCG1R?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=36O1VJPGIG1Q7&cv_ct_cx=ganesh%2Bchaturthi&keywords=ganesh%2Bchaturthi&pd_rd_i=B0BB6TCG1R&pd_rd_r=b5f4fb8b-989f-42a4-80b5-111f0ebe5d1c&pd_rd_w=OEtXm&pd_rd_wg=LVhRA&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=278JN3W8BEHQN19E62FY&qid=1755159752&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=1-1-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll1&tag=utsavs-21&linkId=1a62d41527a3c3104118149d576b664d&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/Kz4Y6Q1S/lotus-ganesha.jpg",
        description: "A beautiful, handcrafted Lotus Ganesha statue made from biodegradable clay, combining artistry with eco-consciousness."
    },
    {
        id: "gowriIdol",
        name: "Puja N Pujari Eco Friendly Clay Gowri Idol",
        price: "399",
        link: "https://www.amazon.in/Puja-Pujari-Friendly-Ganesh-Chaturthi/dp/B07W5MTQSN?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=36O1VJPGIG1Q7&cv_ct_cx=ganesh+chaturthi&keywords=ganesh+chaturthi&pd_rd_i=B07W5MTQSN&pd_rd_r=b5f4fb8b-989f-42a4-80b5-111f0ebe5d1c&pd_rd_w=OEtXm&pd_rd_wg=LVhRA&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=278JN3W8BEHQN19E62FY&qid=1755159752&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=ganesh+chaturthi%2Caps%2C419&sr=1-5-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=utsavs-21&linkId=b7311d628ba71c04ff08008e9763a70c&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/tJnB8vjB/gowri-idol.jpg",
        description: "Welcome Ganesha's mother, Gauri, with this simple and traditional clay idol. Perfect for celebrating the mother-son bond during the festival."
    },
    {
        id: "pujaSamagriKit",
        name: "Poojnam Ganesh Chaturthi Puja Samagri Kit",
        price: "1299",
        link: "https://www.amazon.in/Poojnam-Ganesh-Chaturthi-Premium-Samagri/dp/B0DCTGHLBX?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.4A5oBxQ0-BqwH16Kao4RiyVvs9GjgAKhY4IHwgDrggSBE2dLVbc2xgTi_cYtt0yjxrO3mBefHiC3iKiJmRse4XfklHJlEQImpjh_9Nn_Kc4.h3Mh8Cvl_dLr5HJ5oAFyn2h1JvTvBR_mCYy8AGkq7M0&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159913&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-58&xpid=d_iSDzNdnJcOI&linkCode=ll1&tag=utsavs-21&linkId=eab2e672b29bfe70c59404fe43763fef&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/y8B1Y7Nq/puja-kit.jpg",
        description: "For a hassle-free celebration, this traditional and complete puja set contains 35 sacred items needed for all your rituals and offerings at home."
    },
    {
        id: "decorKitCurtain",
        name: "SpecialYou Decoration Setup with Curtain",
        price: "497",
        link: "https://www.amazon.in/Special-Curtain-Decoration-Light-Backdrop/dp/B09W5GPSL5?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-56&th=1&linkCode=ll1&tag=utsavs-21&linkId=8258f71cde5e98a1bde6e393d32d06f4&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/W12YQvC6/decor-kit-curtain.jpg",
        description: "An easy-to-use decoration kit featuring a white backdrop curtain, green vine garlands, and lights to create a beautiful Ganpati mandap at home."
    },
    {
        id: "decorKitStand",
        name: "SpecialYou Decoration Setup with PVC Stand",
        price: "716",
        link: "https://www.amazon.in/Special-Ganpati-Decoration-Chaturthi-Backdrop/dp/B0DBHT3G3N?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159913&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-88&xpid=d_iSDzNdnJcOI&th=1&linkCode=ll1&tag=utsavs-21&linkId=0770a780d9902e993ecc275c0d579796&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/t4G2q90M/decor-kit-stand.jpg",
        description: "This all-in-one kit includes a PVC stand for the backdrop, making your home Ganpati decorations professional and effortless."
    },
    {
        id: "rangoliMat",
        name: "Decorative Floral Rangoli Mat Set",
        price: "449",
        link: "https://www.amazon.in/Decorative-Floral-Rangoli-Mat-Traditional/dp/B0FHJVW6LG?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-53&th=1&linkCode=ll1&tag=utsavs-21&linkId=7b912e9a3475c70741feb19c6a08cc6f&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/Zq7qQ6g0/rangoli-mat.jpg",
        description: "For a quick and beautiful decoration, this set of 2 reusable 12-inch floral mats is an excellent choice."
    },
    {
        id: "lotusHanging",
        name: "Lotus Wall Hanging Decor",
        price: "440",
        link: "https://www.amazon.in/Special-decoration-Lotus-Chaturthi-Decor-5pcs/dp/B0DDPDMR36?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-37&th=1&linkCode=ll1&tag=utsavs-21&linkId=7b933abe0334a8b0a81046af01df1681&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/yYyB4GzP/lotus-hanging.jpg",
        description: "Set of 5 beautiful lotus wall hangings (3ft each) to create a stunning and traditional backdrop for your mandap."
    },
    {
        id: "marigoldGarland",
        name: "Artificial Marigold Flower Garlands",
        price: "417",
        link: "https://www.amazon.in/Artificial-Decoration-Chaturthi-Festivals-Rajnignadha/dp/B0CQDBRHRB?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-27&th=1&linkCode=ll1&tag=utsavs-21&linkId=8461cece6ef565d706425159aa00bb7b&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/prgQxZQP/marigold-garland.jpg",
        description: "A set of 5 beautiful, long (5ft) artificial marigold garlands to decorate doors, walls, and puja areas."
    },
    {
        id: "rangoliPowder",
        name: "CraftVatika Multicolor Rangoli Powder",
        price: "130",
        link: "https://www.amazon.in/CraftVatika-Multicolor-Decoration-Chaturthi-Festival/dp/B0CHPC1SFT?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159752&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-38&linkCode=ll1&tag=utsavs-21&linkId=354bf0e68ac549fee3629550e16fa4e1&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/k47tXy23/rangoli-powder.jpg",
        description: "A box of 5 assorted vibrant color pouches, perfect for all your festive floor decorations."
    },
    {
        id: "thaliLarge",
        name: "INDIAN ART VILLA Brass Thali Set",
        price: "1955",
        link: "https://www.amazon.in/INDIAN-ART-VILLA-Religious-DIameter-10-1/dp/B07RPYGYZC?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=7182456d6dc168d67a3fca216df0ecba&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/8cmY9Ydk/thali1.jpg",
        description: "A large, 10-inch pure brass thali with an elegant floral embossed design."
    },
    {
        id: "thaliMedium",
        name: "BENGALEN 8-Inch Brass Thali Set",
        price: "1199",
        link: "https://www.amazon.in/BENGALEN-Silver-Plated-Pooja-Thali/dp/B089QT2XKN?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja+thali+brass&qid=1755163260&sprefix=pooja+thali%2Caps%2C365&sr=8-9&linkCode=ll1&tag=utsavs-21&linkId=4544394948780cd384b657ba12a40c20&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/pT5pGhx5/thali2.jpg",
        description: "This complete 8-inch set includes a Kuber Diya, bell, kalash, spoon, and agarbatti stand."
    },
    {
        id: "thaliSmall",
        name: "Amazon Solimo Puja Thali",
        price: "429",
        link: "https://www.amazon.in/Amazon-Brand-Solimo-Worship-Flower-Engraved/dp/B0BBG18TWR?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=835835eaf1a00c036785a96dc6f0bffc&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/prpyZJ7G/thali3.jpg",
        description: "A simple and elegant 6.5-inch flower-engraved brass thali, perfect for daily worship."
    },
    {
        id: "ladduGopalThali",
        name: "BENGALEN Small 7 Inch Bhog Thali",
        price: "899",
        link: "https://www.amazon.in/BENGALEN-Janmashtami-Decoration-Festival-Standard/dp/B0B37XN9JF?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-32&th=1&linkCode=ll1&tag=utsavs-21&linkId=10a4e0f71525510031c66e6ad2be3ee7&language=en_IN&ref_=as_li_ss_tl",
        image: "https://i.postimg.cc/66t2w1g9/laddu-gopal-thali.jpg",
        description: "A beautiful small brass thali set, perfect for offering 'bhog' to your Laddoo Gopal (infant Krishna) idol during Janmashtami puja."
    }
];

export function getProduct(id: string): Product | undefined {
    return allProducts.find(p => p.id === id);
}
