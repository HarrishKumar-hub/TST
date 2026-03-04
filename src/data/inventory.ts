export interface InventoryItem {
    id: string;
    slug: string;
    title: string;
    modelName: string;
    brand: string;
    category: '6-Wheel Tipper' | '10-Wheel Tipper' | 'Excavator' | 'Other';
    year: string;
    power: string;
    condition: string;
    price: string;
    location: string;
    specs: string[];
    imageSrc: string;
    gallery: string[];
    description: string;
    features: string[];
}

export const inventoryData: InventoryItem[] = [
    {
        id: "kanda-01",
        slug: "ashok-leyland-1612-tipper",
        title: "Ashok Leyland 1612 Tipper",
        modelName: "Ashok Leyland 1612 Kanda Special",
        brand: "Ashok Leyland",
        category: "6-Wheel Tipper",
        year: "2018",
        power: "160 HP",
        condition: "Excellent Condition",
        price: "Call for Pricing",
        location: "Sankari Yard",
        specs: ["2018", "160 HP", "6-Wheeler", "Excellent Condition", "Original RC", "Clear NOC"],
        imageSrc: "/images/kanda_tipper_1.jpeg",
        gallery: [
            "/images/kanda_tipper_1.jpeg",
            "/images/tst_hero_tipper.jpg",
            "/images/kanda_tipper_3.jpeg"
        ],
        description: "A meticulously maintained 2018 Ashok Leyland 1612. This 6-wheel tipper has passed all 6 stages of the Kumar Standard inspection. The chassis is strictly original with zero unauthorized welds. Perfect for aggregate hauling and mid-scale construction projects.",
        features: [
            "Fully functioning hydraulic tipping jack (Tested under load)",
            "Tires at 75% tread life",
            "Dashboard and electricals fully operational",
            "Valid FC and Insurance"
        ]
    },
    {
        id: "kanda-02",
        slug: "tata-sk-1212-tipper",
        title: "Tata SK 1212 Tipper",
        modelName: "Tata SK 1212 Kanda Construction",
        brand: "Tata",
        category: "6-Wheel Tipper",
        year: "2019",
        power: "120 HP",
        condition: "Recently Serviced",
        price: "Call for Pricing",
        location: "Sankari Yard",
        specs: ["2019", "120 HP", "6-Wheeler", "Recently Serviced", "Original Paint", "Ready to Work"],
        imageSrc: "/images/tst_hero_tipper.jpg",
        gallery: [
            "/images/tst_hero_tipper.jpg",
            "/images/kanda_tipper_1.jpeg",
            "/images/kanda_tipper_3.jpeg"
        ],
        description: "The legendary Tata SK 1212. Known for its unbreakable nature in the toughest South Indian terrains. This specific 2019 unit features the original factory paint on the cabin, proving it hasn't been in any major accidents. The engine block has been compression-tested and runs exceptionally clean.",
        features: [
            "Original factory cabin paint",
            "Engine compression tested",
            "Cabin interiors newly refurbished",
            "Heavy-duty suspension verified"
        ]
    },
    {
        id: "kanda-03",
        slug: "bharatbenz-1217c-tipper",
        title: "BharatBenz 1217C",
        modelName: "BharatBenz 1217C",
        brand: "BharatBenz",
        category: "6-Wheel Tipper",
        year: "2021",
        power: "170 HP",
        condition: "Mining Spec",
        price: "Call for Pricing",
        location: "Sankari Yard",
        specs: ["2021", "170 HP", "6-Wheeler", "Mining Spec", "High Torque", "Premium Cabin"],
        imageSrc: "/images/kanda_tipper_3.jpeg",
        gallery: [
            "/images/kanda_tipper_3.jpeg",
            "/images/kanda_tipper_1.jpeg",
            "/images/tst_hero_tipper.jpg"
        ],
        description: "A modern, high-power BharatBenz 1217C built for heavy payload and continuous operation. As a 2021 model, it features a highly refined cabin and superior fuel efficiency. This unit is in 'Mining Spec', meaning it was ordered with heavy-duty factory upgrades for extreme environments.",
        features: [
            "Heavy-duty Mining Spec axles",
            "Air-conditioned premium cabin",
            "Advanced telematics capable",
            "Zero oil seepage from the gearbox"
        ]
    }
];

export function getInventoryBySlug(slug: string): InventoryItem | undefined {
    return inventoryData.find(item => item.slug === slug);
}

