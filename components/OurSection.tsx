
import React, { useState, useEffect } from 'react';

const ourData = {
    spaces: {
        title: 'Spaces',
        label: 'Atmospheric Purity',
        image: '/usage-storage.jpg',
        items: [
            {
                name: 'Sachets',
                description: 'Versatile odour absorption for drawers and small enclosures.',
                img: '/closet-solution.jpg'
            },
            {
                name: 'Car',
                description: 'Continuous air purification for a fresh driving experience.',
                img: '/usage-car.jpg'
            },
            {
                name: 'Hanger',
                description: 'Designed to blend into your wardrobe while protecting fabrics.',
                img: '/usage-wardrobe.jpg'
            },
        ]
    },
    shoes: {
        title: 'Shoes',
        label: 'Footwear Preservation',
        image: '/shoe-protection-aura.jpg',
        items: [
            {
                name: 'Sachets',
                description: 'Compact power to neutralize moisture and bacteria in every pair.',
                img: '/shoe-protection-aura.jpg'
            },
            {
                name: 'Knitted Dust',
                description: 'Soft, breathable protection for your most delicate footwear.',
                img: '/product-sachets-group.jpg'
            },
            {
                name: 'Premium Case',
                description: 'A sophisticated storage solution for your footwear collection, preserving material integrity.',
                img: '/product-close-box.jpg'
            },
        ]
    }
};

export const OurSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'spaces' | 'shoes'>('spaces');
    const [hoveredItem, setHoveredItem] = useState<{ name: string, img: string } | null>(null);

    const currentCategoryData = ourData[activeCategory];
    const displayImage = hoveredItem?.img || currentCategoryData.image;

    return (
        <section className="min-h-screen bg-[#fdfaf5] py-24 md:py-52 overflow-hidden relative border-t border-black/5">
            <div className="max-w-[1800px] mx-auto px-6 md:px-16">

                {/* Header - Centered Selection for Maximum Visibility */}
                <div className="flex flex-col items-center mb-24 md:mb-40 text-center">
                    <div className="mb-12">
                        <span className="uppercase-tracking text-[#8da399] mb-4 block text-[0.6rem] md:text-sm">Collections / 2024</span>
                        <h2 className="text-6xl md:text-[10rem] font-light serif text-[#1a1a1a] leading-[0.85] tracking-tighter">
                            Our <span className="italic">Section</span>
                        </h2>
                    </div>

                    {/* Selection Pill - Prominent and Centered */}
                    <div className="inline-flex bg-white/50 backdrop-blur-md p-2 rounded-full border border-black/5 shadow-sm scale-110 md:scale-125">
                        {(['spaces', 'shoes'] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setHoveredItem(null);
                                }}
                                className={`px-10 py-3 rounded-full text-xs uppercase tracking-[0.4em] transition-all duration-700 font-medium ${activeCategory === cat ? 'bg-[#1a1a1a] text-white shadow-xl' : 'text-black/40 hover:text-black hover:bg-black/5'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-24 items-start">
                    <div className="col-span-6 space-y-4">
                        {currentCategoryData.items.map((item, idx) => (
                            <div
                                key={item.name}
                                className="group cursor-pointer py-12 border-b border-black/5 transition-all duration-700"
                                onMouseEnter={() => setHoveredItem({ name: item.name, img: item.img })}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-10">
                                        <span className="text-[0.6rem] font-medium text-[#8da399]">0{idx + 1}</span>
                                        <h4 className={`text-5xl font-light serif transition-all duration-700 ${hoveredItem?.name === item.name ? 'translate-x-6 italic' : 'group-hover:translate-x-2'}`}>
                                            {item.name}
                                        </h4>
                                    </div>
                                    <div className={`w-12 h-[1px] bg-black/10 transition-all duration-1000 ${hoveredItem?.name === item.name ? 'w-32 bg-black h-[1px]' : 'h-[1px]'}`}></div>
                                </div>

                                <div className={`overflow-hidden transition-all duration-1000 ${hoveredItem?.name === item.name ? 'max-h-20 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                                    <p className="ml-16 text-sm font-light leading-relaxed text-[#4a4a4a] max-w-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-6 sticky top-40">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.12)] group">
                            <img
                                src={displayImage}
                                alt=""
                                className="w-full h-full object-cover transition-all duration-[2s] ease-out-expo scale-100 group-hover:scale-105"
                                key={displayImage}
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                            <div className="absolute bottom-0 left-0 w-full p-12 z-20">
                                <div className="bg-white/5 backdrop-blur-3xl p-10 border border-white/10">
                                    <span className="uppercase-tracking text-white/60 text-[0.5rem] mb-2 block tracking-[0.5em]">Focus</span>
                                    <p className="text-4xl text-white serif italic">
                                        {hoveredItem ? hoveredItem.name : currentCategoryData.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-12">
                    <div className="sticky top-20 z-10 -mx-6 px-6 py-4 bg-[#fdfaf5]/80 backdrop-blur-md border-b border-black/5">
                        <div className="relative aspect-video rounded-sm overflow-hidden shadow-xl">
                            <img
                                src={displayImage}
                                alt=""
                                className="w-full h-full object-cover transition-all duration-1000"
                                key={displayImage}
                            />
                            <div className="absolute bottom-4 left-6">
                                <p className="text-white text-xl serif italic drop-shadow-md">
                                    {hoveredItem ? hoveredItem.name : currentCategoryData.title}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {currentCategoryData.items.map((item, idx) => (
                            <div
                                key={item.name}
                                className="py-10 border-b border-black/5 active:bg-black/5 transition-colors"
                                onTouchStart={() => setHoveredItem({ name: item.name, img: item.img })}
                                onClick={() => setHoveredItem({ name: item.name, img: item.img })}
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-[0.6rem] font-medium text-[#8da399]">0{idx + 1}</span>
                                    <h4 className="text-2xl font-light serif text-[#1a1a1a]">{item.name}</h4>
                                </div>
                                <p className="mt-4 ml-10 text-xs font-light text-[#4a4a4a] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
