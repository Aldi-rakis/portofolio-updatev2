import React, { useState, useEffect, useRef } from 'react'
import styles from './about.module.scss'
import { InfiniteRibbonImage } from '../../component/ui/infinite-ribbon-image'
import StackIcons from '../../assets/stack/Index.jsx';
import { Timeline } from "../../component/ui/timeline.jsx";
import { div } from 'framer-motion/client';
import fotorakis from '../../assets/img/Foto_Terbaru.png'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import adhivasindo1 from '../../assets/img/journey/adhivasindo-1.png'
import adhivasindo2 from '../../assets/img/journey/adhivasindo-2.png'
import rekamin1 from '../../assets/img/journey/rekamin-1.png'
import rekamin2 from '../../assets/img/journey/rekamin-2.png'

const timelineData = [
    {
        title: "PT Adhivasindo",
        description: "I started my career as a Internship Fullstack Developer at PT Adhivasindo, where I worked on various projects, including web applications and APIs.",
        images: [
            {
                src: adhivasindo1,
                alt: "startup template"
            },
            {
                src: adhivasindo2,
                alt: "startup template"
            }
        ],
        checklistItems: []
    },
    {
        title: "Program at Investree X Rakamin Academy (Virtual Internship)",
        description: [
            "I participated in a virtual internship program at Investree X Rakamin Academy, where I learned about full-stack development and worked on real-world projects.",
           
        ],
        images: [
            { src: rekamin1, alt: "hero template" },
            { src: rekamin2, alt: "hero template" },
            // { src: "https://assets.aceternity.com/features-section.png", alt: "feature template" },
            // { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "bento template" },
            // { src: "https://assets.aceternity.com/cards.png", alt: "cards template" }
        ],
        checklistItems: ['PHP, Laravel, Mysql']
    },
    {
        title: "POMN MIjelin APP",
        description: "Deployed 5 new components on Aceternity today",
        images: [
            { src: "https://assets.aceternity.com/pro/hero-sections.png", alt: "hero template" },
            { src: "https://assets.aceternity.com/features-section.png", alt: "feature template" },
            { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "bento template" },
            { src: "https://assets.aceternity.com/cards.png", alt: "cards template" }
        ],
        checklistItems: [
            'Build with React Js, Node Js',
            'make an API',
            'Fullstack'
        ]
    }
];

const data = timelineData.map(item => ({
    title: item.title,
    content: (
        <div className='border-t-2 border-amber-50 py-4'>
            {/* Handle description(s) */}
            {Array.isArray(item.description) ? (
                item.description.map((desc, idx) => (
                    <p key={idx} className="mb-8 text-xs font-normal text-white dark:text-gray-500">
                        {desc}
                    </p>
                ))
            ) : (
                <p className="mb-8 text-xs font-normal dark:text-neutral-800 md:text-sm text-neutral-200">
                    {item.description}
                </p>
            )}

            {item.checklistItems.length > 0 && (
                <div className="mb-8">
                    {item.checklistItems.map((checkItem, idx) => (
                        <div key={idx} className="flex items-center mt-2 gap-3 text-xs dark:text-neutral-700 md:text-sm text-neutral-300">
                            <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                                <svg 
                                    className="w-3 h-3 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2.5" 
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            {checkItem}
                        </div>
                    ))}
                </div>
            )}

            {/* Handle image grid */}
            <div className="grid grid-cols-2 gap-4">
                {item.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                ))}
            </div>
        </div>
    )
}));




const about = () => {
    const [visibleServices, setVisibleServices] = useState([]);

    // Services data
    const servicesData = [
        {
            id: 1,
            number: "(01)",
            title: "Full-Stack Development",
            description: "Build full-stack web applications from front-end to back-end and database using various technologies. With Laravel, React, Next.js, and Node.js.",
            features: [
                { id: "01", text: "React, Next.js, Laravel, Node.js" },
                { id: "02", text: "REST API Development" },
                { id: "03", text: "PHP, JavaScript, PostgreSQL, MySQL" },
                { id: "04", text: "GIT, CI/CD, Docker, Linux, VPS" }
            ]
        },
        {
            id: 2,
            number: "(02)",
            title: "UI/UX & Frontend",
            description: "Make Mockup design, Prototipe, and Building responsive and interactive web applications using modern technologies and design principles.",
            features: [
                { id: "01", text: "Figma, Tailwind CSS, Bootstrap, Motion" },
                { id: "02", text: "Figma to code, Responsive Design" },
                { id: "03", text: "Animations" }
            ]
        },
        {
            id: 3,
            number: "(03)",
            title: "Web Performance",
            description: "Optimizing web applications for speed, performance, and scalability. Implementing best practices for SEO, accessibility, and user experience to ensure your website performs at its best.",
            features: [
                { id: "01", text: "SEO Optimization" },
                { id: "02", text: "Performance Tuning" },
                { id: "03", text: "Accessibility Standards" }
            ]
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const serviceIndex = parseInt(entry.target.dataset.serviceIndex);
                    setVisibleServices(prev => {
                        if (!prev.includes(serviceIndex)) {
                            return [...prev, serviceIndex];
                        }
                        return prev;
                    });
                }
            });
        }, observerOptions);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            const serviceElements = document.querySelectorAll('[data-service-index]');
            serviceElements.forEach(element => observer.observe(element));
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className={`${styles.about} bg-[#0b0b0d] dark:bg-[#f6f4e5] py-10 px-6 min-h-screen`}>
                <div className='max-w-6xl mx-auto'>
                    {/* Hero Section */}
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-30 items-center h-[100vh] md:h-auto lg:min-h-[100vh]'>
                        {/* Left Side - Profile Image */}
                        <div className='flex justify-center lg:justify-start  lg:col-span-4'>
                            <div className='relative'>
                                {/* Profile Image Container */}
                                <div className='w-80 h-90 lg:w-96 lg:h-120 rounded-b-full overflow-hidden border-4  shadow-2xl'>
                                    <img
                                        src={fotorakis}
                                        alt="Profile"
                                        className='w-full h-full object-cover'
                                    />
                                </div>


                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className='text-center lg:text-left lg:col-span-8'>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-clash text-white dark:text-[#0b0b0d] mb-6 leading-tight'>
                                A <span className='text-orange-500'>Fullstack developer</span>
                                <br />
                                <span className='text-white dark:text-[#0b0b0d]'>& </span>Web developer
                            </h1>

                            <p className='font-dosis text-lg md:text-xl text-gray-300 dark:text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
                                I collaborate with brands globally to build impactful, mission-focused web applications that drive results and achieve business goals.
                            </p>

                            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                                <a
                                    href="/contact"
                                    className='bg-transparent border-2 border-white dark:border-[#0b0b0d] text-white dark:text-[#0b0b0d] px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0b0b0d] dark:hover:bg-[#0b0b0d] dark:hover:text-white transition-all duration-300'
                                >
                                    My Resume
                                </a>

                                <a
                                    href="/projects"
                                    className='bg-orange-400 dark:bg-orange-500 text-white dark:text-[#0b0b0d] px-8 py-3 rounded-full font-semibold hover:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300'
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>

                    <section className="bg-[#0b0b0d] dark:bg-[#f6f4e5] relative overflow-hidden py-4">
                        <div className="relative ">
                            <InfiniteRibbonImage
                                items={[
                                    { src: StackIcons.ReactJS, label: 'React JS' },
                                    { src: StackIcons.NodeJS, label: 'Node JS' },
                                    { src: StackIcons.NextJS, label: 'Next JS' },
                                    { src: StackIcons.JavaScript, label: 'JavaScript' },
                                    { src: StackIcons.TailwindCSS, label: 'Tailwind CSS' },
                                    { src: StackIcons.MongoDB, label: 'MongoDB' },
                                    { src: StackIcons.PostgreSQL, label: 'PostgreSQL' },
                                    { src: StackIcons.MySQL, label: 'MySQL' },
                                    { src: StackIcons.Redux, label: 'Redux' },
                                    { src: StackIcons.GIT, label: 'Git' },
                                    { src: StackIcons.FramerMotion, label: 'Framer Motion' },
                                ]}
                                repeat={6}
                                duration={20}
                            />

                            {/* LEFT GRADIENT */}
                            <div className="pointer-events-none absolute top-0 left-0 h-full w-5 lg:w-100 bg-gradient-to-r from-[#0b0b0d] dark:from-[#f6f4e5] to-transparent z-10" />

                            {/* RIGHT GRADIENT */}
                            <div className="pointer-events-none absolute top-0 right-0 h-full  w-50 lg:w-100 bg-gradient-to-l from-[#0b0b0d] dark:from-[#f6f4e5] to-transparent z-10" />
                        </div>
                    </section>
                </div>

                <div className="relative w-full overflow-clip">
                    <Timeline data={data} />
                </div>
            </section>

            <section id='my-service' className="bg-[#0b0b0d] dark:bg-[#f6f4e5] py-20 px-6 ">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-start">

                        <div className="space-y-16">
                            {servicesData.map((service, idx) => {
                                const ref = useRef(null);
                                const isInView = useInView(ref, { once: true, amount: 0.2 });
                                // amount: 0.2 artinya 20% elemen kelihatan baru trigger

                                return (
                                    <div
                                        key={service.id}
                                        className="flex flex-row md:flex-row gap-2 md:gap-80 lg:gap-100 justify-between items-start"
                                        data-service-index={idx}
                                    >
                                        {/* Nomor */}
                                        <div className="text-xl lg:text-3xl md:text-5xl font-bold text-orange-500 mb-4 md:mb-0">
                                            ({idx + 1})
                                        </div>

                                        {/* Konten */}
                                        <motion.div
                                            ref={ref}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{
                                                duration: 0.6,
                                                delay: idx * 0.2,
                                                ease: "easeOut"
                                            }}
                                            className="group hover:translate-x-4 transition-all duration-500 transform"
                                        >
                                            <div className="border-l-2 border-gray-600 dark:border-gray-400 group-hover:border-orange-500 pl-4 md:pl-8 transition-colors duration-500">
                                                <h3 className="text-2xl md:text-5xl font-bold text-white dark:text-[#0b0b0d] mb-4 group-hover:text-orange-500 transition-colors duration-500">
                                                    {service.title}
                                                </h3>

                                                <motion.div
                                                    id="service-description"
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                    transition={{
                                                        duration: 0.6,
                                                        delay: idx * 0.3,
                                                        ease: "easeOut"
                                                    }}
                                                    className="space-y-2 md:space-y-3"
                                                >
                                                    <p className="text-gray-300 dark:text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    {service.features.map((feature) => (
                                                        <div key={feature.id} className="flex items-start gap-2 md:gap-3">
                                                            <span className="text-orange-500 font-bold">{feature.id}</span>
                                                            <span className="text-white dark:text-[#0b0b0d] font-medium">
                                                                {feature.text}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default about
