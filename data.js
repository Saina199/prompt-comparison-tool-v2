const promptKey1 = "prompt_2";
const promptKey2 = "prompt_6";

const imageData = [
    {
        "name": "keurig",
        "localImagePath": "resizeImgs/keurig.png",
        "prompt_2": {
            "title": "Close-Up of Keurig Coffee Maker Logo",
            "description": "This image features a close-up view of a Keurig coffee maker, prominently displaying the brand's logo on the machine's metallic surface. The focus is on the sleek, modern design of the coffee maker, highlighting its brushed metal finish. The setting suggests a kitchen or office environment, emphasizing the appliance's role in daily coffee brewing routines.",
            "tags": [
                "Keurig",
                "coffee maker",
                "Keurig logo",
                "appliance",
                "kitchen",
                "metallic",
                "modern design",
                "coffee",
                "brewing",
                "close-up",
                "logo"
            ]
        },
        "prompt_6": {
            "title": "Close-up of Keurig Coffee Maker Lid",
            "description": "This image features a close-up view of the lid of a Keurig coffee maker, showcasing the brand name prominently engraved on the metallic surface. The setting appears to be a kitchen or coffee preparation area, with the focus on the sleek design of the appliance. The lighting highlights the texture and finish of the material, emphasizing the modern and functional style of the product.",
            "tags": [
                "Keurig",
                "coffee maker",
                "appliance",
                "kitchen",
                "metallic",
                "close-up",
                "modern",
                "sleek",
                "design"
            ]
        }
    },
    {
        "name": "kr2",
        "localImagePath": "resizeImgs/kr2.png",
        "prompt_2": {
            "title": "Keurig 2.0 Launch Event with Coffee Machine Display",
            "description": "The image captures a promotional event for the Keurig 2.0 coffee machine, featuring a sleek display setup. The setting is a modern showroom with two large screens showcasing the Keurig 2.0 branding and slogan 'Say Hello to Keurig 2.0: Brew a Cup, Brew a Carafe.' The coffee machine is prominently displayed on a minimalist stand, emphasizing its contemporary design. The atmosphere is professional and inviting, with a neutral color palette that complements the product's stylish appearance.",
            "tags": [
                "Keurig",
                "coffee machine",
                "Keurig 2.0",
                "launch event",
                "showroom",
                "display",
                "branding",
                "modern design",
                "professional setting",
                "coffee",
                "appliance",
                "Keurig logo"
            ]
        },
        "prompt_6": {
            "title": "Keurig 2.0 Launch Event with Coffee Machine",
            "description": "The image showcases the launch event for Keurig 2.0, featuring a sleek coffee machine on display. The setting is a modern venue with promotional screens highlighting the new product. The Keurig 2.0 branding is prominently visible, emphasizing the innovative brewing capabilities of the machine.",
            "tags": [
                "Keurig",
                "coffee machine",
                "launch event",
                "modern venue",
                "brewing",
                "promotional screens",
                "Keurig 2.0"
            ]
        }
    },
    {
        "name": "Keurig_Logo",
        "localImagePath": "resizeImgs/Keurig_Logo.png",
        "prompt_2": {
            "title": "Keurig Logo on Black Background",
            "description": "The image prominently features the Keurig logo centered on a solid black background. The logo is displayed in a bold, white font, creating a stark contrast against the dark backdrop. This minimalist design emphasizes the brand's name, making it easily recognizable and memorable.",
            "tags": [
                "Keurig",
                "logo",
                "black background",
                "white text",
                "branding",
                "minimalist",
                "contrast",
                "bold font",
                "Keurig logo"
            ]
        },
        "prompt_6": {
            "title": "Keurig Logo on Black Background",
            "description": "The image prominently features the Keurig logo centered on a solid black background. The logo is displayed in white, offering a stark contrast against the dark backdrop. This minimalist design emphasizes the brand name, making it easily recognizable.",
            "tags": [
                "Keurig",
                "logo",
                "black",
                "white",
                "minimalist",
                "contrast",
                "brand name"
            ]
        }
    },
    {
        "name": "adidasLogo",
        "localImagePath": "resizeImgs/adidasLogo.png",
        "prompt_2": {
            "title": "Adidas Logo on Black Background",
            "description": "A minimalist image featuring the iconic Adidas logo prominently displayed against a solid black background. The logo consists of three white diagonal stripes, symbolizing the brand's commitment to performance and style. The stark contrast between the white logo and the black background creates a bold and striking visual effect, emphasizing the simplicity and strength of the Adidas brand identity.",
            "tags": [
                "Adidas",
                "logo",
                "black background",
                "minimalist",
                "brand identity",
                "white stripes",
                "iconic",
                "contrast",
                "simplicity"
            ]
        },
        "prompt_6": {
            "title": "Adidas Iconic Three Stripe Logo Design",
            "description": "This image features the unmistakable Adidas logo, showcasing the iconic three stripes. The logo is presented in a minimalist style against a black background, emphasizing its bold and recognizable design. The simplicity of the visuals highlights the brand's focus on sports and lifestyle.",
            "tags": [
                "Adidas",
                "logo",
                "three stripes",
                "minimalist",
                "black background",
                "iconic",
                "design",
                "sports",
                "lifestyle"
            ]
        }
    },
    {
        "name": "drPepper",
        "localImagePath": "resizeImgs/drPepper.png",
        "prompt_2": {
            "title": "Dr Pepper Bottles in Refrigerated Display",
            "description": "A row of Dr Pepper 2-liter bottles is prominently displayed in a refrigerated section, showcasing the brand's distinctive red and white label with the SEC logo. The bottles are neatly arranged alongside Pepsi bottles, creating a contrast between the two popular soda brands. The setting is a typical grocery store or convenience store cooler, emphasizing the availability and accessibility of these beverages.",
            "tags": [
                "Dr Pepper",
                "soda",
                "beverage",
                "2-liter",
                "bottle",
                "Pepsi",
                "refrigerated",
                "display",
                "SEC logo",
                "Dr Pepper logo",
                "grocery store",
                "convenience store"
            ]
        },
        "prompt_6": {
            "title": "Dr Pepper Bottles in Refrigerator Display",
            "description": "A selection of Dr Pepper bottles is prominently displayed in a refrigerator, alongside Pepsi bottles. The bottles feature the recognizable Dr Pepper logo and are labeled with a capacity of 2 liters (67.6 fl oz). The setting suggests a retail environment, with the bottles neatly arranged for consumer visibility.",
            "tags": [
                "Dr Pepper",
                "Pepsi",
                "refrigerator",
                "bottles",
                "2 liters",
                "67.6 fl oz",
                "retail",
                "display",
                "beverage",
                "soda"
            ]
        }
    },
    {
        "name": "arabica_coffee",
        "localImagePath": "resizeImgs/arabica_coffee.png",
        "prompt_2": {
            "title": "Tully's Coffee Breakfast Blend Packaging",
            "description": "The image showcases a box of Tully's Coffee Breakfast Blend, featuring a vibrant rooster illustration on the left side. The packaging prominently displays the Tully's Coffee logo in the top right corner, with the words 'Breakfast Blend 100% Arabica Coffee' in bold text. The Keurig logo is also visible, indicating compatibility with Keurig brewing systems. The box contains 18 K-Cup pods, as noted on the lower section of the packaging.",
            "tags": [
                "Tully's Coffee",
                "Breakfast Blend",
                "coffee",
                "packaging",
                "rooster",
                "Keurig",
                "K-Cup",
                "Arabica",
                "Tully's Coffee logo",
                "Keurig logo",
                "coffee pods"
            ]
        },
        "prompt_6": {
            "title": "Tully's Coffee Breakfast Blend K-Cup Box",
            "description": "This image features a box of Tully's Coffee Breakfast Blend, showcasing its 100% Arabica coffee content. The packaging is designed with a vibrant rooster illustration, symbolizing the morning theme. The box contains 18 K-Cups, each weighing 0.41 oz (11.5g), with a total net weight of 7.3 oz (207g). The coffee is labeled as extra bold light roast.",
            "tags": [
                "coffee",
                "Tully's",
                "Breakfast Blend",
                "Arabica",
                "rooster",
                "K-Cup",
                "18 count",
                "0.41 oz",
                "11.5g",
                "7.3 oz",
                "207g",
                "extra bold"
            ]
        }
    },
    {
        "name": "ELauder",
        "localImagePath": "resizeImgs/ELauder.png",
        "prompt_2": {
            "title": "Est\u00e9e Lauder Youth Dew Eau de Parfum Bottle",
            "description": "A sleek, turquoise bottle of Est\u00e9e Lauder's Youth Dew Eau de Parfum stands against a minimalist gray background. The bottle features a gold cap, adding a touch of elegance to its design. The brand's name and product details are prominently displayed in black text on the front, enhancing its classic and sophisticated appeal.",
            "tags": [
                "perfume",
                "Est\u00e9e Lauder",
                "Youth Dew",
                "Eau de Parfum",
                "turquoise bottle",
                "gold cap",
                "fragrance",
                "Est\u00e9e Lauder logo",
                "elegant design",
                "minimalist"
            ]
        },
        "prompt_6": {
            "title": "Est\u00e9e Lauder Youth Dew Perfume Spray Bottle",
            "description": "A turquoise bottle of Est\u00e9e Lauder Youth Dew perfume spray is prominently displayed against a neutral background. The bottle features elegant gold accents and clear branding text, including '1.8 FL. OZ' indicating its volume. The design exudes a classic and luxurious feel, appealing to those who appreciate timeless fragrances.",
            "tags": [
                "Est\u00e9e Lauder",
                "perfume",
                "spray",
                "bottle",
                "turquoise",
                "gold",
                "luxury",
                "fragrance",
                "1.8 FL. OZ"
            ]
        }
    },
    {
        "name": "coffee_pots",
        "localImagePath": "resizeImgs/coffee_pots.png",
        "prompt_2": {
            "title": "Donut Shop Blend Coffee Pods on Black Background",
            "description": "A collection of white coffee pods labeled 'Donut Shop Blend' are arranged against a stark black background. The pods feature a purple and white lid design, highlighting the text '100% Arabica Coffee' and a colorful logo. The minimalist setting emphasizes the product's sleek and modern packaging, ideal for coffee enthusiasts seeking convenience and quality.",
            "tags": [
                "coffee",
                "pods",
                "Donut Shop Blend",
                "Arabica",
                "packaging",
                "purple",
                "black background",
                "modern",
                "convenience",
                "logo"
            ]
        },
        "prompt_6": {
            "title": "Donut Shop Blend Coffee Pods on Black Background",
            "description": "A set of coffee pods labeled 'Donut Shop Blend' are displayed against a black backdrop. The pods feature a purple and white design, emphasizing the 100% Arabica coffee content. The arrangement highlights the product's simplicity and convenience for coffee lovers.",
            "tags": [
                "coffee",
                "pods",
                "Donut Shop Blend",
                "Arabica",
                "purple",
                "white",
                "black background",
                "beverage",
                "convenience"
            ]
        }
    },
    {
        "name": "maxwell_house",
        "localImagePath": "resizeImgs/maxwell_house.png",
        "prompt_2": {
            "title": "Maxwell House Caf\u00e9 Collection Coffee Box",
            "description": "This image features a box of Maxwell House Caf\u00e9 Collection, showcasing their House Blend medium roast coffee. The packaging is predominantly blue with a striking orange accent at the top, highlighting the 'New' label. The box is designed for use in Keurig K-Cup brewing systems and contains 12 single-serve cups of 100% Arabica coffee. The Maxwell House logo is prominently displayed, emphasizing the brand's identity.",
            "tags": [
                "Maxwell House",
                "coffee",
                "Caf\u00e9 Collection",
                "House Blend",
                "medium roast",
                "K-Cup",
                "single-serve",
                "Arabica",
                "packaging",
                "Maxwell House logo"
            ]
        },
        "prompt_6": {
            "title": "Maxwell House Caf\u00e9 Collection Coffee Box",
            "description": "A box of Maxwell House Caf\u00e9 Collection, featuring House Blend Medium Roast coffee. The packaging is designed for use in the Keurig K-Cup Brewing System and contains 12 single-serve cups. The net weight of the coffee is 3.7 oz (105 g), and it is made from 100% Arabica coffee beans.",
            "tags": [
                "Maxwell House",
                "coffee",
                "Caf\u00e9 Collection",
                "House Blend",
                "Medium Roast",
                "Keurig",
                "K-Cup",
                "12 single serve cups",
                "3.7 oz",
                "105 g",
                "Arabica"
            ]
        }
    },
    {
        "name": "amberMusk",
        "localImagePath": "resizeImgs/amberMusk.png",
        "prompt_2": {
            "title": "AERIN Amber Musk Body Cream with Packaging",
            "description": "The image showcases AERIN's Amber Musk Body Cream, elegantly presented alongside its decorative packaging. The cream is housed in a sleek, white tube with a gold cap, exuding a sense of luxury and sophistication. The packaging features intricate floral patterns in earthy tones, complementing the product's refined aesthetic. The AERIN logo and product details are prominently displayed, emphasizing the brand's commitment to quality and elegance.",
            "tags": [
                "AERIN",
                "Amber Musk",
                "body cream",
                "packaging",
                "floral pattern",
                "luxury",
                "gold cap",
                "white tube",
                "AERIN logo",
                "skincare",
                "beauty product"
            ]
        },
        "prompt_6": {
            "title": "AERIN Amber Musk Body Cream Packaging",
            "description": "The image showcases AERIN Amber Musk body cream, featuring elegant packaging with floral designs. The cream is presented in a sleek white tube with a gold cap, alongside its decorative box. Visible text indicates the product size as 5 FL OZ / 150 ML, emphasizing its luxurious appeal.",
            "tags": [
                "AERIN",
                "Amber Musk",
                "body cream",
                "floral design",
                "packaging",
                "5 FL OZ",
                "150 ML",
                "gold cap",
                "white tube",
                "luxury"
            ]
        }
    },
    {
        "name": "Fleur De",
        "localImagePath": "resizeImgs/Fleur De.png",
        "prompt_2": {
            "title": "AERIN Fleur de Peony Eau de Parfum Bottle",
            "description": "The image showcases a bottle of AERIN Fleur de Peony Eau de Parfum, elegantly designed with a clear glass body that reveals a soft pink fragrance inside. The bottle is topped with a distinctive pink cap and features a gold accent around the neck, adding a touch of luxury. The AERIN logo and product name are prominently displayed on the front, emphasizing the brand's sophisticated aesthetic.",
            "tags": [
                "AERIN",
                "perfume",
                "fragrance",
                "Fleur de Peony",
                "Eau de Parfum",
                "bottle",
                "pink",
                "glass",
                "luxury",
                "AERIN logo"
            ]
        },
        "prompt_6": {
            "title": "AERIN Fleur de Peony Eau de Parfum Bottle",
            "description": "The image showcases a bottle of AERIN Fleur de Peony Eau de Parfum. The elegant design features a clear glass bottle with a soft pink cap and gold accents, reflecting a luxurious and feminine aesthetic. The label prominently displays the product name, adding to the sophisticated presentation.",
            "tags": [
                "AERIN",
                "Fleur de Peony",
                "Eau de Parfum",
                "perfume",
                "fragrance",
                "bottle",
                "pink",
                "gold",
                "luxury",
                "feminine",
                "elegant"
            ]
        }
    },
    {
        "name": "PE275-US-SP25_SU_GWP-pc-header",
        "localImagePath": "resizeImgs/PE275-US-SP25_SU_GWP-pc-header.png",
        "prompt_2": {
            "title": "Est\u00e9e Lauder Skincare Trio Promotion",
            "description": "This image showcases a promotional offer from Est\u00e9e Lauder featuring a trio of skincare products. The background is a vibrant coral with sunburst patterns, highlighting the products in the foreground. The featured items include a full-size Perfectly Clean Cleanser, a choice of moisturizer, and the Advanced Night Repair serum. The text overlay guides the viewer through the selection process, emphasizing the brand's luxurious skincare offerings.",
            "tags": [
                "Est\u00e9e Lauder",
                "skincare",
                "cleanser",
                "moisturizer",
                "serum",
                "Advanced Night Repair",
                "Perfectly Clean",
                "promotion",
                "coral background",
                "Est\u00e9e Lauder logo"
            ]
        },
        "prompt_6": {
            "title": "Est\u00e9e Lauder Skincare Trio Offer Promotion",
            "description": "This image showcases a promotional offer from Est\u00e9e Lauder featuring three skincare products. The products include a full-size cleanser, a choice of moisturizer, and a serum. The background is a vibrant red with rays, highlighting the steps to choose each product. The numbers 1, 2, and 3 are prominently displayed to guide the selection process.",
            "tags": [
                "Est\u00e9e Lauder",
                "skincare",
                "cleanser",
                "moisturizer",
                "serum",
                "promotion",
                "offer",
                "red background",
                "full-size"
            ]
        }
    },
    {
        "name": "Youth-Dew",
        "localImagePath": "resizeImgs/Youth-Dew.png",
        "prompt_2": {
            "title": "Estee Lauder Youth-Dew Roll-On Deodorant",
            "description": "The image showcases Estee Lauder's Youth-Dew Roll-On Deodorant, a sleek and elegant personal care product. Set against a minimalist light gray background, the deodorant features a mint green cylindrical bottle with a ribbed cap, exuding a fresh and clean aesthetic. The Estee Lauder logo and product name are prominently displayed in gold, adding a touch of luxury to the design.",
            "tags": [
                "Estee Lauder",
                "deodorant",
                "roll-on",
                "Youth-Dew",
                "mint green",
                "personal care",
                "luxury",
                "minimalist",
                "cylindrical",
                "Estee Lauder logo"
            ]
        },
        "prompt_6": {
            "title": "Estee Lauder Youth-Dew Roll-On Deodorant",
            "description": "Estee Lauder's Youth-Dew Roll-On Deodorant is showcased against a simple, light background. The product features a mint green cylindrical design with gold accents, emphasizing its elegance. The label highlights its anti-perspirant properties and specifies a volume of 2.5 fl. oz. (75 ml).",
            "tags": [
                "Estee Lauder",
                "Youth-Dew",
                "deodorant",
                "roll-on",
                "anti-perspirant",
                "mint green",
                "2.5 fl. oz.",
                "75 ml",
                "personal care"
            ]
        }
    },
    {
        "name": "lambada",
        "localImagePath": "resizeImgs/lambada.png",
        "prompt_2": {
            "title": "Monochromatic Beige Beauty Product Display",
            "description": "A collection of beauty products is artfully arranged against a monochromatic beige backdrop, creating a minimalist and cohesive aesthetic. The assortment includes a pump bottle, tube, spray bottle, dropper bottle, and a nail polish bottle, all in matching beige tones. A beige hairbrush adds a touch of texture to the composition. The overall mood is calm and sophisticated, emphasizing simplicity and elegance in personal care packaging.",
            "tags": [
                "beauty",
                "products",
                "beige",
                "monochromatic",
                "minimalist",
                "pump bottle",
                "tube",
                "spray bottle",
                "dropper bottle",
                "nail polish",
                "hairbrush",
                "elegance"
            ]
        },
        "prompt_6": {
            "title": "Minimalist Beige Beauty Product Arrangement",
            "description": "A collection of beauty products displayed in a minimalist setting, featuring a cohesive beige color palette. The arrangement includes various containers such as bottles, tubes, and a brush, all in matching tones. The scene is set against a monochromatic background, emphasizing the simplicity and elegance of the design.",
            "tags": [
                "beauty",
                "products",
                "minimalist",
                "beige",
                "bottles",
                "tubes",
                "brush",
                "monochromatic",
                "elegance",
                "design"
            ]
        }
    },
    {
        "name": "laptop",
        "localImagePath": "resizeImgs/laptop.png",
        "prompt_2": {
            "title": "Lenovo Laptop with AMD Ryzen 3 and Windows 11",
            "description": "This image showcases a sleek Lenovo laptop featuring a 15.6-inch screen, ideal for both work and entertainment. The laptop is powered by an AMD Ryzen 3 processor, ensuring efficient performance with 4GB of memory and a 128GB SSD for storage. The display highlights the Windows 11 operating system, offering a modern interface and enhanced user experience. The overall design is minimalist, with a focus on functionality and style.",
            "tags": [
                "Lenovo",
                "laptop",
                "AMD Ryzen 3",
                "Windows 11",
                "15.6-inch screen",
                "4GB memory",
                "128GB SSD",
                "technology",
                "computer",
                "Lenovo logo"
            ]
        },
        "prompt_6": {
            "title": "Lenovo Laptop with AMD Ryzen 3 and Windows 11",
            "description": "This Lenovo laptop features a 15.6-inch screen, ideal for both work and entertainment. Powered by an AMD Ryzen 3 processor, it offers 4GB of memory and a 128GB SSD for efficient performance. The device runs on Windows 11, providing a modern and user-friendly interface. The sleek design is perfect for on-the-go use, combining functionality with style.",
            "tags": [
                "Lenovo",
                "laptop",
                "AMD Ryzen 3",
                "Windows 11",
                "15.6 inch screen",
                "4GB memory",
                "128GB SSD"
            ]
        }
    },
    {
        "name": "getty",
        "localImagePath": "resizeImgs/getty.png",
        "prompt_2": {
            "title": "Woman Holding DKNY Perfume Bottle",
            "description": "A woman is holding a round DKNY perfume bottle close to her face, showcasing the elegant design of the fragrance container. The setting appears to be indoors, possibly at a promotional event or a personal moment of fragrance application. The image captures the essence of luxury and sophistication, with the woman's attire featuring a patterned top and a gold necklace with a circular pendant. The background is softly blurred, highlighting the perfume as the focal point.",
            "tags": [
                "DKNY",
                "perfume",
                "fragrance",
                "bottle",
                "luxury",
                "elegance",
                "fashion",
                "necklace",
                "pendant",
                "indoor",
                "event",
                "DKNY logo"
            ]
        },
        "prompt_6": {
            "title": "Woman Holding Perfume Bottle at Event",
            "description": "A woman is seen holding a round perfume bottle, suggesting a moment of fragrance application. The setting appears to be a formal event, indicated by the attire and background decor. The image captures the elegance and sophistication associated with perfume use, complemented by the floral backdrop.",
            "tags": [
                "perfume",
                "bottle",
                "fragrance",
                "event",
                "woman",
                "floral",
                "elegance",
                "sophistication"
            ]
        }
    },
    {
        "name": "Wakin-The-Neighbors-Coffee-K-Cup-Black-Rifle-Coffee_alt5",
        "localImagePath": "resizeImgs/Wakin-The-Neighbors-Coffee-K-Cup-Black-Rifle-Coffee_alt5.png",
        "prompt_2": {
            "title": "Black Rifle Coffee Medium Roast K-Cup Pods",
            "description": "This image showcases Black Rifle Coffee Company's medium roast K-Cup pods, labeled 'Wakin' The Neighbors.' The pods are designed for Keurig machines and feature a vibrant label with a sunset-inspired palette. The recyclable packaging is highlighted with a green recycling symbol, emphasizing sustainability. A roast profile chart is displayed, indicating the medium roast level with a color gradient from light to dark.",
            "tags": [
                "Black Rifle Coffee",
                "medium roast",
                "K-Cup",
                "pods",
                "Keurig",
                "recyclable",
                "coffee",
                "roast profile",
                "sustainability",
                "Black Rifle Coffee logo"
            ]
        },
        "prompt_6": {
            "title": "Black Rifle Coffee Medium Roast K-Cup Pods",
            "description": "This image showcases Black Rifle Coffee Company's medium roast K-Cup pods, labeled 'Wakin' The Neighbors'. The pods are designed for use with Keurig machines and are recyclable, as indicated by the recycling symbol. The roast profile is depicted with a color gradient from light to dark, highlighting the medium roast level.",
            "tags": [
                "coffee",
                "K-Cup",
                "medium roast",
                "Black Rifle Coffee Company",
                "Keurig",
                "recyclable",
                "roast profile"
            ]
        }
    },
    {
        "name": "original-blend-coffee-dd_BIN_4",
        "localImagePath": "resizeImgs/original-blend-coffee-dd_BIN_4.png",
        "prompt_2": {
            "title": "Dunkin' Medium Roast Coffee Pods Packaging",
            "description": "This image showcases Dunkin' Original Blend Medium Roast coffee pods designed for Keurig machines. The pods are prominently displayed with a vibrant orange and white color scheme, featuring the Dunkin' logo and text indicating the medium roast profile. The recyclable K-Cup pods are highlighted with an eco-friendly symbol, emphasizing sustainability. A roast profile chart at the bottom illustrates the medium roast level, appealing to coffee enthusiasts seeking a balanced flavor.",
            "tags": [
                "Dunkin'",
                "coffee",
                "pods",
                "medium roast",
                "Keurig",
                "recyclable",
                "K-Cup",
                "Dunkin' logo",
                "packaging",
                "eco-friendly",
                "roast profile"
            ]
        },
        "prompt_6": {
            "title": "Dunkin' Medium Roast Coffee Pods",
            "description": "This image showcases Dunkin' Original Blend Medium Roast coffee pods designed for Keurig machines. The pods are recyclable, emphasizing sustainability. The roast profile is highlighted, indicating a medium roast level. The packaging features a vibrant orange and white color scheme.",
            "tags": [
                "Dunkin'",
                "coffee",
                "pods",
                "medium roast",
                "Keurig",
                "recyclable",
                "sustainability",
                "orange",
                "white",
                "roast profile"
            ]
        }
    },
    {
        "name": "005_K-Cafe_Travel_Mug_Friendly_Silver",
        "localImagePath": "resizeImgs/005_K-Cafe_Travel_Mug_Friendly_Silver.png",
        "prompt_2": {
            "title": "Keurig Coffee Maker with Travel Mug Compatibility",
            "description": "This image showcases a sleek Keurig coffee maker designed to accommodate a 7.2-inch travel mug, perfect for on-the-go coffee lovers. The machine features a modern silver finish with a compact design, ideal for kitchen countertops. The Keurig logo is prominently displayed on both the coffee maker and the travel mug, emphasizing brand identity. The setting is minimalistic, highlighting the product's functionality and style.",
            "tags": [
                "Keurig",
                "coffee maker",
                "travel mug",
                "silver",
                "compact design",
                "kitchen appliance",
                "Keurig logo",
                "modern style",
                "countertop",
                "sleek"
            ]
        },
        "prompt_6": {
            "title": "Keurig Coffee Maker with Travel Mug Compatibility",
            "description": "This image showcases a Keurig coffee maker designed for travel mug compatibility. The sleek, modern appliance is set against a neutral background, emphasizing its functionality and style. The machine is capable of accommodating a 7.2-inch travel mug, making it ideal for on-the-go coffee lovers. The Keurig logo is prominently displayed, ensuring brand recognition.",
            "tags": [
                "Keurig",
                "coffee maker",
                "travel mug",
                "7.2 inch",
                "appliance",
                "modern",
                "sleek",
                "functionality",
                "neutral background"
            ]
        }
    },
    {
        "name": "bronze-Goddess",
        "localImagePath": "resizeImgs/bronze-Goddess.png",
        "prompt_2": {
            "title": "Est\u00e9e Lauder Bronze Goddess Perfume Bottle Display",
            "description": "The image showcases a luxurious bottle of Est\u00e9e Lauder's Bronze Goddess perfume, prominently featuring the brand's logo and product name. The bottle is elegantly designed with a clear glass body and a metallic cap, exuding sophistication and allure. The setting is minimalistic, with a soft gray background that highlights the perfume's refined aesthetic and the warm, inviting tones of the fragrance.",
            "tags": [
                "perfume",
                "bottle",
                "Est\u00e9e Lauder",
                "Bronze Goddess",
                "fragrance",
                "glass",
                "metallic cap",
                "luxury",
                "elegance",
                "Est\u00e9e Lauder logo"
            ]
        },
        "prompt_6": {
            "title": "Est\u00e9e Lauder Bronze Goddess Perfume Bottle",
            "description": "The image showcases a bottle of Est\u00e9e Lauder's Bronze Goddess perfume. The bottle is elegantly designed with a clear glass body and a metallic cap, reflecting a luxurious aesthetic. The text 'BRONZE GODDESS' and 'EST\u00c9E LAUDER' are prominently displayed on the bottle, emphasizing the brand and product name. The setting is minimalistic, highlighting the perfume as the central focus.",
            "tags": [
                "perfume",
                "Est\u00e9e Lauder",
                "Bronze Goddess",
                "fragrance",
                "bottle",
                "luxury",
                "glass",
                "metallic cap",
                "minimalistic"
            ]
        }
    },
    {
        "name": "whoShe",
        "localImagePath": "resizeImgs/whoShe.png",
        "prompt_2": {
            "title": "Who Is Esther SHE Eau de Parfum Bottle",
            "description": "The image showcases a bottle of 'Who Is Esther SHE' Eau de Parfum, elegantly designed with a minimalist aesthetic. The perfume bottle features a sleek black cap and clear glass, allowing the pale yellow fragrance to be visible. Positioned against a clean white background, the bottle is accompanied by delicate pink flowers, adding a touch of femininity and freshness to the scene. The overlay text on the bottle highlights the brand and product name, emphasizing its sophisticated appeal.",
            "tags": [
                "perfume",
                "bottle",
                "fragrance",
                "Who Is Esther",
                "SHE",
                "Eau de Parfum",
                "black cap",
                "glass",
                "pink flowers",
                "minimalist",
                "BSC logo"
            ]
        },
        "prompt_6": {
            "title": "Who is Esther SHE Eau de Parfum Bottle",
            "description": "A clear glass bottle of 'Who is Esther SHE' Eau de Parfum is displayed against a white background. The bottle features a minimalist design with black text and a black cap. Pink flowers are artistically placed in the foreground, adding a touch of elegance and femininity to the image.",
            "tags": [
                "perfume",
                "eau de parfum",
                "bottle",
                "floral",
                "minimalist",
                "black cap",
                "pink flowers",
                "feminine",
                "elegant"
            ]
        }
    },
    {
        "name": "roseDegrass",
        "localImagePath": "resizeImgs/roseDegrass.png",
        "prompt_2": {
            "title": "AERIN Rose de Grasse Limited Edition Perfume",
            "description": "The image showcases the AERIN Rose de Grasse Limited Edition perfume, elegantly presented in a striking red bottle adorned with a luxurious gold cap and a matching red bow. The packaging features a sophisticated floral pattern, enhancing the opulent feel of the product. The perfume box, also in red, complements the bottle and highlights the brand's name and fragrance details in gold lettering, creating a sense of exclusivity and luxury.",
            "tags": [
                "perfume",
                "AERIN",
                "Rose de Grasse",
                "limited edition",
                "fragrance",
                "red bottle",
                "gold cap",
                "floral pattern",
                "luxury",
                "AERIN logo"
            ]
        },
        "prompt_6": {
            "title": "AERIN Rose de Grasse Limited Edition Perfume",
            "description": "The AERIN Rose de Grasse is a limited edition eau de parfum spray, elegantly presented in a red bottle with a matching box. The packaging features a luxurious gold cap and a red ribbon, enhancing its sophisticated appeal. The perfume is available in a 1.7 fl. oz. (50 ml) size, making it a perfect gift or personal indulgence.",
            "tags": [
                "AERIN",
                "Rose de Grasse",
                "perfume",
                "eau de parfum",
                "limited edition",
                "1.7 fl. oz.",
                "50 ml",
                "red",
                "gold",
                "luxury"
            ]
        }
    },
    {
        "name": "photo-credits",
        "localImagePath": "resizeImgs/photo-credits.png",
        "prompt_2": {
            "title": "Guide to Photo Credits for Beginners",
            "description": "A person is seated at a round black table, typing on a laptop with the word 'Search' visible on the screen. A warm cup of coffee sits nearby, suggesting a cozy and focused setting. The image is framed with a blue background and features the text 'Photo Credits for Dummies: A Brief Guide' in bold yellow and white fonts, indicating an educational theme. The overall mood is informative and inviting, with a modern and clean design style.",
            "tags": [
                "laptop",
                "coffee",
                "table",
                "typing",
                "search",
                "guide",
                "photo credits",
                "educational",
                "cozy",
                "modern",
                "FreeImage logo"
            ]
        },
        "prompt_6": {
            "title": "Guide to Understanding Photo Credits",
            "description": "An individual is seated at a round table, using a laptop with the word 'Search' visible on the screen. The setting appears cozy, with a warm beverage nearby, suggesting a relaxed atmosphere. The image is part of a guide titled 'Photo Credits for Dummies: A Brief Guide', aimed at simplifying the concept of photo credits.",
            "tags": [
                "photo credits",
                "guide",
                "laptop",
                "search",
                "table",
                "coffee",
                "cozy",
                "learning",
                "tutorial",
                "education"
            ]
        }
    },
    {
        "name": "coffeeCup",
        "localImagePath": "resizeImgs/coffeeCup.png",
        "prompt_2": {
            "title": "Keurig Coffee Cup in Modern Kitchen Setting",
            "description": "A Keurig-branded paper coffee cup is prominently displayed in front of a sleek coffee machine, suggesting a modern kitchen or office environment. The cup features the Keurig logo and the slogan 'Brew what you love, simply,' emphasizing the brand's focus on convenience and quality. The scene is set against a backdrop of stacked white cups, adding to the professional and organized atmosphere.",
            "tags": [
                "Keurig",
                "coffee",
                "cup",
                "logo",
                "kitchen",
                "modern",
                "paper cup",
                "coffee machine",
                "slogan",
                "convenience",
                "quality",
                "professional"
            ]
        },
        "prompt_6": {
            "title": "Keurig Coffee Cup in Office Setting",
            "description": "A Keurig coffee cup is prominently displayed in front of a coffee machine, suggesting a convenient brewing experience. The setting appears to be an office or event space, with stacks of cups visible in the background. The cup features the Keurig logo and the phrase 'Brew what you love, simply.'",
            "tags": [
                "Keurig",
                "coffee",
                "cup",
                "office",
                "event",
                "brewing",
                "machine",
                "convenience",
                "stack",
                "phrase"
            ]
        }
    },
    {
        "name": "facial_and_body_anointing_oil",
        "localImagePath": "resizeImgs/facial_and_body_anointing_oil.png",
        "prompt_2": {
            "title": "Sheleena Racquel Handcrafted Herbal Body Oil Display",
            "description": "This image showcases several bottles of Sheleena Racquel's handcrafted herbal body oil, elegantly arranged on a textured golden surface. The bottles are surrounded by dried pink flowers, adding a touch of natural beauty and sophistication to the setting. The labels on the bottles prominently feature the product name and brand, emphasizing the organic and artisanal nature of the oil. The overall mood is warm and inviting, with a palette of gold and pink creating a luxurious and calming atmosphere.",
            "tags": [
                "body oil",
                "Sheleena Racquel",
                "herbal",
                "handcrafted",
                "organic",
                "pink flowers",
                "gold surface",
                "luxury",
                "beauty",
                "Sheleena Racquel logo"
            ]
        },
        "prompt_6": {
            "title": "Handcrafted Herbal Body Oil with Floral Accents",
            "description": "This image showcases bottles of handcrafted herbal body oil by Sheleena Racquel, elegantly arranged among dried pink flowers. The setting exudes a natural and organic vibe, emphasizing the product's artisanal quality. The label clearly displays the volume of 118 ml, highlighting its generous size. The warm, golden hues of the oil complement the soft pink tones of the flowers, creating a visually appealing and soothing composition.",
            "tags": [
                "handcrafted",
                "herbal",
                "body oil",
                "Sheleena Racquel",
                "118 ml",
                "floral",
                "natural",
                "organic",
                "pink flowers",
                "golden hues",
                "soothing"
            ]
        }
    },
    {
        "name": "CD_ClubSoda_10oz_GLS_6pk_HC_eComm_10000758_Ft",
        "localImagePath": "resizeImgs/CD_ClubSoda_10oz_GLS_6pk_HC_eComm_10000758_Ft.png",
        "prompt_2": {
            "title": "Canada Dry Club Soda 10oz Bottles Pack",
            "description": "This image showcases a six-pack of Canada Dry Club Soda, each bottle containing 10 fluid ounces. The bottles are neatly arranged in a transparent plastic carrier, highlighting the brand's iconic logo prominently displayed on the blue label. The packaging emphasizes the soda's zero-calorie content, making it a refreshing choice for health-conscious consumers. The overall presentation is clean and straightforward, focusing on the product's branding and nutritional information.",
            "tags": [
                "Canada Dry",
                "club soda",
                "soda",
                "beverage",
                "bottles",
                "packaging",
                "zero calories",
                "Canada Dry logo",
                "blue label",
                "plastic carrier"
            ]
        },
        "prompt_6": {
            "title": "Canada Dry Club Soda 10 fl oz Pack",
            "description": "This image features a six-pack of Canada Dry Club Soda, each bottle containing 10 fl oz (296 ml). The packaging highlights nutritional information and calorie content, emphasizing zero calories per serving. The bottles are neatly arranged in a plastic carrier, showcasing the brand's logo prominently on the label.",
            "tags": [
                "Canada Dry",
                "club soda",
                "10 fl oz",
                "296 ml",
                "zero calories",
                "nutritional information",
                "beverage",
                "soda",
                "pack",
                "bottles"
            ]
        }
    },
    {
        "name": "original-blend-coffee-dd_BIN_1",
        "localImagePath": "resizeImgs/original-blend-coffee-dd_BIN_1.png",
        "prompt_2": {
            "title": "Dunkin' Original Blend K-Cup Pods Packaging",
            "description": "This image showcases a box of Dunkin' Original Blend K-Cup Pods, prominently featuring the Dunkin' logo on a white coffee mug filled with steaming coffee. The packaging highlights the medium roast flavor and contains 22 recyclable pods, as indicated by the recycling symbol. The vibrant orange and brown color palette reflects the brand's signature style, appealing to coffee enthusiasts seeking convenience and quality.",
            "tags": [
                "Dunkin'",
                "K-Cup",
                "coffee",
                "pods",
                "packaging",
                "recyclable",
                "medium roast",
                "Dunkin' logo",
                "coffee mug",
                "orange",
                "brown",
                "Keurig"
            ]
        },
        "prompt_6": {
            "title": "Dunkin' Original Blend K-Cup Pods, 22 Count",
            "description": "This image features a box of Dunkin' Original Blend K-Cup Pods, prominently displaying the brand's logo on a coffee cup. The packaging highlights the medium roast coffee flavor and includes 22 pods per box. The design emphasizes recyclability with a green recycling symbol, appealing to environmentally conscious consumers.",
            "tags": [
                "Dunkin'",
                "coffee",
                "K-Cup",
                "pods",
                "medium roast",
                "22 count",
                "recyclable",
                "packaging",
                "coffee cup",
                "original blend"
            ]
        }
    },
    {
        "name": "Wakin-The-Neighbors-Coffee-K-Cup-Black-Rifle-Coffee_alt1",
        "localImagePath": "resizeImgs/Wakin-The-Neighbors-Coffee-K-Cup-Black-Rifle-Coffee_alt1.png",
        "prompt_2": {
            "title": "Black Rifle Coffee Wakin' The Neighbors Medium Roast",
            "description": "The image showcases a box of Black Rifle Coffee Company's 'Wakin' The Neighbors' medium roast coffee pods. The packaging features a vibrant illustration of a rooster holding a coffee mug, set against a colorful dawn sky. Prominent text highlights the higher caffeine content, and the Black Rifle Coffee Company logo is clearly visible. The box contains 22 recyclable K-Cup pods, suitable for Keurig machines.",
            "tags": [
                "coffee",
                "Black Rifle Coffee",
                "medium roast",
                "K-Cup",
                "Keurig",
                "rooster",
                "higher caffeine",
                "recyclable",
                "Black Rifle Coffee logo",
                "coffee pods",
                "packaging",
                "vibrant illustration"
            ]
        },
        "prompt_6": {
            "title": "Black Rifle Coffee Wakin' The Neighbors Medium Roast",
            "description": "This image features a box of Black Rifle Coffee Company's 'Wakin' The Neighbors' medium roast coffee pods. The packaging showcases a vibrant illustration of a rooster holding a coffee cup, set against a colorful dawn sky. The box prominently displays the text 'Higher Caffeine' and includes details such as '22 K-Cup Pods' and 'Net Wt 8.5 oz (240 g)'.",
            "tags": [
                "coffee",
                "Black Rifle Coffee Company",
                "rooster",
                "medium roast",
                "higher caffeine",
                "22 K-Cup Pods",
                "8.5 oz",
                "240 g",
                "packaging",
                "illustration",
                "vibrant"
            ]
        }
    },
    {
        "name": "sugared",
        "localImagePath": "resizeImgs/sugared.png",
        "prompt_2": {
            "title": "Darlin' Skincare Sugared Citrus Body Balm Packaging",
            "description": "The image showcases a vibrant orange jar of Darlin' Skincare Sugared Citrus Body Balm, prominently displayed alongside its matching box. The packaging features elegant script branding and highlights the product as an all-over tallow moisturizer. The background is a soft, neutral tone, enhancing the warm and inviting color palette of the product. The overall mood is fresh and rejuvenating, appealing to skincare enthusiasts.",
            "tags": [
                "Darlin'",
                "skincare",
                "body balm",
                "moisturizer",
                "sugared citrus",
                "orange",
                "packaging",
                "beauty",
                "Darlin' logo",
                "tallow",
                "fresh",
                "rejuvenating"
            ]
        },
        "prompt_6": {
            "title": "Darlin' Sugared Citrus Body Balm in Vibrant Packaging",
            "description": "This image showcases Darlin' Skincare's Sugared Citrus Body Balm, presented in a vibrant orange container and matching box. The product is an all-over tallow moisturizer, ideal for skincare routines. The packaging features elegant script branding and highlights the balm's 4 fl. oz. (120 ml) size, emphasizing its generous offering.",
            "tags": [
                "Darlin'",
                "skincare",
                "body balm",
                "moisturizer",
                "citrus",
                "orange",
                "packaging",
                "4 fl. oz.",
                "120 ml",
                "beauty",
                "self-care"
            ]
        }
    },
    {
        "name": "honey Stock",
        "localImagePath": "resizeImgs/honey Stock.png",
        "prompt_2": {
            "title": "AERIN Mediterranean Honeysuckle Perfume with Floral Decor",
            "description": "The image showcases a bottle of AERIN Mediterranean Honeysuckle perfume elegantly placed on a woven surface. The setting is adorned with vibrant purple flowers in a wicker basket, creating a fresh and inviting atmosphere. The perfume bottle, with its clear glass and gold accents, stands out amidst the lush floral arrangement. A string of pink beads adds a touch of sophistication to the scene, enhancing the overall aesthetic appeal.",
            "tags": [
                "AERIN",
                "perfume",
                "Mediterranean Honeysuckle",
                "floral",
                "flowers",
                "wicker basket",
                "pink beads",
                "luxury",
                "fragrance",
                "AERIN logo"
            ]
        },
        "prompt_6": {
            "title": "Aerin Mediterranean Honeysuckle Perfume with Flowers",
            "description": "Aerin Mediterranean Honeysuckle perfume bottle is elegantly displayed on a woven surface. The setting features vibrant purple flowers and a decorative vase, creating a serene and luxurious atmosphere. The perfume's label is clearly visible, adding a touch of sophistication to the scene.",
            "tags": [
                "Aerin",
                "perfume",
                "Mediterranean Honeysuckle",
                "flowers",
                "purple",
                "vase",
                "luxury",
                "fragrance",
                "woven surface",
                "elegant"
            ]
        }
    },
    {
        "name": "Legacy",
        "localImagePath": "resizeImgs/Legacy.png",
        "prompt_2": {
            "title": "Est\u00e9e Lauder Legacy Perfume Bottle on Light Background",
            "description": "The image showcases a luxurious Est\u00e9e Lauder Legacy perfume bottle set against a soft, light background. The bottle features a sleek design with vertical ridges and a gold-toned cap, exuding elegance and sophistication. The label prominently displays the Est\u00e9e Lauder logo, emphasizing the brand's prestige. The overall mood is refined and classic, with a palette of gold and clear glass enhancing the opulent style.",
            "tags": [
                "perfume",
                "bottle",
                "Est\u00e9e Lauder",
                "fragrance",
                "luxury",
                "gold",
                "glass",
                "elegance",
                "Est\u00e9e Lauder logo",
                "sophisticated",
                "classic"
            ]
        },
        "prompt_6": {
            "title": "Elegant Estee Lauder Perfume Bottle Display",
            "description": "This image showcases a sophisticated Estee Lauder perfume bottle, elegantly designed with a gold cap and clear glass. The bottle is set against a minimalist light gray background, emphasizing its luxurious appearance. The visible text 'Estee Lauder' and 'Legacy' highlights the brand and product name, adding to its premium appeal.",
            "tags": [
                "perfume",
                "Estee Lauder",
                "bottle",
                "luxury",
                "gold",
                "glass",
                "minimalist",
                "elegant",
                "fragrance",
                "beauty"
            ]
        }
    },
    {
        "name": "CD_ClubSoda_10oz_PET_6pk_eComm_10114955_Lt",
        "localImagePath": "resizeImgs/CD_ClubSoda_10oz_PET_6pk_eComm_10114955_Lt.png",
        "prompt_2": {
            "title": "Canada Dry Club Soda Bottles in Pack of Six",
            "description": "This image features a pack of six Canada Dry Club Soda bottles, prominently displaying the brand's logo and signature design. The bottles are arranged in a neat formation, showcasing their clear plastic material and blue label with white and green accents. The label highlights the club soda's low sodium content and zero calories, appealing to health-conscious consumers. The overall mood is refreshing and clean, with a focus on hydration and quality.",
            "tags": [
                "Canada Dry",
                "club soda",
                "soda bottles",
                "pack of six",
                "Canada Dry logo",
                "plastic bottles",
                "blue label",
                "low sodium",
                "zero calories",
                "hydration",
                "refreshing"
            ]
        },
        "prompt_6": {
            "title": "Canada Dry Club Soda 6-Pack Bottles",
            "description": "A six-pack of Canada Dry Club Soda bottles is prominently displayed. Each bottle contains 10 fl oz (296 ml) of low sodium club soda. The bottles are arranged in a neat formation, showcasing the brand's logo and product details clearly on the label.",
            "tags": [
                "Canada Dry",
                "club soda",
                "10 fl oz",
                "296 ml",
                "low sodium",
                "beverage",
                "soda",
                "six-pack",
                "bottles",
                "drink"
            ]
        }
    },
    {
        "name": "002_K-Cafe_Features_Silver",
        "localImagePath": "resizeImgs/002_K-Cafe_Features_Silver.png",
        "prompt_2": {
            "title": "Keurig Coffee Maker with Frother and Cup Size Options",
            "description": "This image showcases a sleek Keurig coffee maker designed for brewing coffee, lattes, and cappuccinos with ease. The machine is set against a plain background, highlighting its modern design and functionality. Key features include a dishwasher-safe frother for fresh milk, a strong brew option for intense coffee, and the ability to choose from four cup sizes. The Keurig logo is prominently displayed, emphasizing brand recognition.",
            "tags": [
                "Keurig",
                "coffee maker",
                "frother",
                "cup sizes",
                "strong brew",
                "dishwasher safe",
                "coffee",
                "latte",
                "cappuccino",
                "Keurig logo"
            ]
        },
        "prompt_6": {
            "title": "Keurig Coffee Maker with Frother and Multiple Cup Sizes",
            "description": "The Keurig coffee maker is designed for brewing coffee, lattes, and cappuccinos quickly. It features a dishwasher-safe frother compatible with fresh milk, including skim, soy, and almond. The machine offers a strong brew option for a more intense coffee experience and supports four cup sizes: 6, 8, 10, and 12 oz. Ideal for specialty drinks using any K-Cup pod.",
            "tags": [
                "Keurig",
                "coffee maker",
                "frother",
                "dishwasher-safe",
                "strong brew",
                "specialty drinks",
                "K-Cup pod",
                "6 oz",
                "8 oz",
                "10 oz",
                "12 oz"
            ]
        }
    }
];