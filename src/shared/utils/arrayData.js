import { Paths } from "../../browserRouter/paths/paths";
import { Images } from "./images";

export const QuickComparisonDevBus = [
    {
        id: 1,
        criteria: 'Lower initial investment',
        cloudFirst: 'Cloud',
    },
    {
        id: 2,
        criteria: 'Full control over data & systems',
        cloudFirst: 'On-Premise ',
    },
    {
        id: 3,
        criteria: 'Quick deployment',
        cloudFirst: 'Cloud ',
    },
    {
        id: 4,
        criteria: 'Advanced customization',
        cloudFirst: 'On-Premise',
    },
    {
        id: 5,
        criteria: 'Remote work flexibility',
        cloudFirst: 'Cloud ',
    },
    {
        id: 6,
        criteria: 'Internal IT capability',
        cloudFirst: 'On-Premise  ',
    },
]
export const QuickComparisonDev = [
    {
        id: 1,
        criteria: 'Initial Cost',
        cloudFirst: 'Low',
        onPremise: 'High'
    },
    {
        id: 2,
        criteria: 'Maintenance',
        cloudFirst: 'Managed by vendor',
        onPremise: 'Managed in-house'
    },
    {
        id: 3,
        criteria: 'Customization',
        cloudFirst: 'Limited ',
        onPremise: 'Extensive'
    },
    {
        id: 4,
        criteria: 'Security',
        cloudFirst: 'Vendor-managed',
        onPremise: 'Fully controlled by you '
    },
    {
        id: 5,
        criteria: 'Accessibility',
        cloudFirst: 'Anywhere with internet',
        onPremise: 'Mostly on-site '
    },
    {
        id: 6,
        criteria: 'Scalability',
        cloudFirst: 'Easy to scale ',
        onPremise: 'Hardware-dependent  '
    },
]

export const QuickComparison = [
    {
        id: 1,
        criteria: 'Initial Cost',
        cloudFirst: 'Low',
        onPremise: 'High'
    },
    {
        id: 2,
        criteria: 'Maintenance',
        cloudFirst: 'Vendor-managed',
        onPremise: 'In-house IT required'
    },
    {
        id: 3,
        criteria: 'Scalability',
        cloudFirst: 'Instant scaling',
        onPremise: 'Hardware-dependent'
    },
    {
        id: 4,
        criteria: 'Remote Access',
        cloudFirst: 'Accessible anywhere',
        onPremise: 'Limited to local network'
    },
    {
        id: 5,
        criteria: 'Security',
        cloudFirst: 'Vendor-managed, enterprise-grade',
        onPremise: 'Requires manual setup'
    },
]

export const DetailData =
    [
        {
            id: 1,
            question: 'Rental Application ',
            projectName: "Rental Application", solution: 'Nope, our company package includes everything on our pricing page! No up-sells or hidden fees.', isOpen: false
        },
        {
            id: 2,
            question: 'Finance Application',
            projectName: "Finance Application", solution: 'Our company formation package is 100% refundable minus any expenses we have incurred to begin your formation. Once our payment is sent to the state, however, we cannot accept any cancellations or changes to your filing.', isOpen: false
        },
        {
            id: 3,
            question: 'Bizstarter',
            projectName: "Bizstarterr", solution: 'States require LLCs and Corporations to appoint and maintain a Registered Agent when they form their business. The registered agent address acts as the main point of contact between your company and the Secretary of State or other official government office. It will receive service of process, correspondence, and other important legal notices on behalf of your business.', isOpen: false
        },
        {
            id: 4,
            question: 'GPS Navigation ',
            projectName: "GPS Navigation ", solution: "No, you don't need to be a U.S. Citizen with an SSN to form your company. We support non-residents from over 175+ countries around the globe! If you do have an SSN, let us know and we can expedite your application. We handle everything remotely. You'll just need to provide your passport as identity verification and we'll work directly with the bank to open your account.", isOpen: false
        },
        {
            id: 5,
            question: 'In & Out Bound Logistics',
            projectName: "Logistics", solution: 'The Employer Identification Number (EIN) (also known as the US Tax ID Number), is a 9-digit code assigned by the IRS to identify your business. An EIN is required to open a US Business Bank account, hire employees, and more.', isOpen: false
        },
        {
            id: 6,
            question: 'Event Management Application',
            projectName: "Event Management Application", solution: "At the moment, we cannot provide support for founders currently living (not referring to citizenship) in US sanctioned countries ( Belarus, Burundi, Central African Republic, Cuba, Democratic Republic of the Congo, Iran, Iraq, Lebanon, Libya, Nicaragua, North Korea, Somalia, South Sudan, Sudan, Syria, Ukraine, Yemen, and Zimbabwe)  We cannot provide support for businesses that deal in money services, adult entertainment, gambling, nutritional supplements and cannabis. These restrictions are highly influenced by our banking partners and US policies and we'll keep everyone posted if there are any changes or improvements.", isOpen: false
        },
        {
            id: 7,
            question: 'Online Exam',
            projectName: "Online Examination Application", solution: "We recently partnered with TaxHub to provide a free tax consultation! TaxHub can help provide more specific advice and information regarding taxes for your U.S. business. Once you sign-up we can schedule a meeting for you with our partner.If you're looking to just get a high-level overview of the expected costs, our team estimates a standard tax return for a small business generating less than 100k in revenue to be anywhere from $175 to $820.", isOpen: false
        },
    ]

export const ClientsInInfo = [
    {
        id: 5,
        img: Images.usFlag,
        header: 'US',
    },
    {
        id: 2,
        img: Images.canadaFlag,
        header: 'Canada',
    },
    {
        id: 3,
        img: Images.indiaFlag,
        header: 'India',
    },
    {
        id: 4,
        img: Images.uaeFlag,
        header: 'UAE',
    },

    {
        id: 1,
        img: Images.australiaFlag,
        header: 'Australia',
    },
]
export const OurHomeList = [
    {
        id: 1,
        img: Images.aiService,
        header: 'Web Designing',
        description: 'Our services include AI consulting, custom development, and analytics, all harnessing machine learning to automate processes, enhance decision-making, and personalize interactions.',
        listOfData: [
            "Static Website Design",
            "Responsive Web Design",
            "E-commerce Website Design",
            "UI/UX Design",
            "App Design",
            "Theme Design",
        ]
    },
    {
        id: 2,
        img: Images.mobileService,
        header: 'Web & Mobile Development',
        description: 'Use custom mobile app development services to build high-performance, feature-rich applications for iOS and Android.',
        listOfData: [
            "Market Research",
            "PPC / Google Adwords",
            "Social Media Marketing",
            "Email Marketing",
            "Search Engine Optimization",
        ]
    },
    {
        id: 3,
        img: Images.cmsService,
        header: 'Digital Marketing',
        description: 'Customized CRM solutions streamline customer interactions and boost sales efficiency. They automate key processes to enhance productivity.',
        listOfData: [

            "Custom Website Development",
            "Web App Development",
            "E-commerce Development",
            "API Development & Integration",
            "CMS Web Development",
            "Mobile App Development (IOS/Android/Cross platform)",
        ]


    },
    {
        id: 4,
        img: Images.webService,
        header: 'Others',
        description: 'Our comprehensive web development solutions include e-commerce, content management systems, and custom web applications.',
        listOfData: [
            "Specialized in MVP Development",
            "Cloud Hosting & Deployment",
            "Software Development",
            "Domain Name Registration",
            "Business Process Migration",
            "Bulk Email and SMS",
            "Business Email id",
        ]


    },
]

export const OurCoreValueList = [
    {
        id: 1,
        img: Images.excellence,
        // header:'Adaptability',
        header: 'Excellence',
        // description:"We work in a dynamic environment where change is encouraged, and failure is celebrated. We constantly innovate ourselves by aligning with upcoming demands and expectations and raising our bar high to deliver high-quality work."
        description: 'Producing outstanding work and , even when faced with challenges and constraints'
    },
    {
        id: 2,
        img: Images.teamwork,
        // header:'Attention to detail',
        header: 'Teamwork',
        description: 'Working well with others and fostering a team-oriented culture through their core responsibilities or side tasks'
        // description:"We want to be precise in everything we deliver and focus on the smallest of details. We want to add value to your business by making effective, reliable, and customized solutions."
    },
    {
        id: 3,
        img: Images.innovative,
        // header:'Ownership',
        header: 'Innovative',
        description: 'Coming up with original ideas and creative approaches, including ways to improve upon existing content,product,processes,etc.'
        // description:"We ensure deep integrity in everything we do. We act responsibly and devote ourselves to the outcomes. We own the challenges and solutions and learn from our mistakes and strengths. We work with consistency and deliver results within the committed timelines."
    },
    {
        id: 4,
        img: Images.trustworthy,
        // header:'Integrity',
        header: 'Trustworthy',
        description: 'Being consistently reliable and honest with teammates, clients, and partners'
        // description:"We make ethical, transparent, and well-intentioned decisions that foster growth for our people and clients."
    },
    {
        id: 5,
        img: Images.empathetic,
        header: 'Empathy',
        description: "Understanding and considering the feelings and perspective of others when collaborating with colleagues, handling projects, and dealing with the community"
        // description:"We are true to our people and listen to them. We care about what they want and how we can fulfill their needs. We are a ‘people first’ organization and want the best for our folks."
    },
]
export const OurTeamList = [
    {
        image: Images.member1,
        name: 'John Doe',
        role: 'Developer'
    },
    {
        image: Images.member2,
        name: 'Jane Smith',
        role: 'Designer'
    },
    {
        image: Images.member3,
        name: 'Mike Johnson',
        role: 'Tester'
    },
    // Add more team members as needed
];

export const OurProductsHome = [
    {
        id: 1,
        projectName: "Rental Application",
        description: 'All-in-one solution designed to streamline and automate rental business operations. It helps manage rental quotations, orders, delivery, return, Inventory, management, payments, and customer communication seamlessly. With real-time tracking and automated reminders, it reduces manual work and improves efficiency. The software supports businesses across industries, from equipment rentals to vehicle leasing. Easy to use and fully customizable, it adapts to your unique business needs.',
        img: Images.rentalProduct,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    {
        id: 2,
        projectName: "Finance/NBFC Application",
        description: 'Our NBFC software is a comprehensive solution designed to manage the end-to-end operations of Non-Banking Financial Companies. It streamlines loan management, customer onboarding, collections, compliance, and reporting processes. With automated workflows and real-time analytics, it enhances operational efficiency and ensures regulatory compliance. The software supports various loan products, including personal, vehicle, and business loans. Scalable and customizable, it caters to NBFCs of all sizes.',
        img: Images.financeProduct,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    {
        id: 3,
        projectName: "Bizstarterr",
        description: 'Our US business registration service website offers a simple and fast way to register your business online. Whether you’re forming an LLC, Corporation, or Partnership, we guide you through every step. From filing documents to obtaining EIN and compliance support, we handle it all. Our platform ensures hassle-free registration with expert assistance and transparent pricing. Ideal for entrepreneurs, startups, and small businesses looking to launch in the US.',
        img: Images.bizstarterr,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    {
        id: 4,
        projectName: "GPS/Fleet Management Application ",
        description: 'Our GPS navigation and fleet management product offers real-time vehicle tracking, route optimization, and smart navigation in one powerful solution. It helps businesses monitor their fleets, reduce fuel costs, and improve delivery efficiency. With live location updates, geofencing, and performance reports, fleet management becomes seamless and data-driven. Ideal for logistics, transportation, and service industries, it ensures smarter, safer, and more efficient fleet operations.',
        img: Images.gpsTrack,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },

    {
        id: 5,
        projectName: "Inbound and Outbound Logistics Application ",
        description: 'Our inbound and outbound logistics software streamlines the entire supply chain, from supplier deliveries to final product shipments. The software enhances visibility across all stages, ensuring smooth coordination between warehouses, transporters, and customers. With powerful reporting and analytics, businesses can optimize inventory flow and improve decision-making. Designed for manufacturers, distributors, and logistics providers, it ensures faster, smarter, and more cost-effective logistics management.',
        img: Images.logisticsProduct,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },

    {
        id: 6,
        projectName: "Event Management Application",
        description: 'Our event management software is an all-in-one solution to plan, manage, and execute events of any size with ease. It simplifies tasks like guest registration, ticketing, vendor coordination, and event promotion. With real-time updates, customizable workflows, and insightful analytics, it helps ensure seamless event execution. The software is perfect for conferences, corporate events, weddings, and exhibitions. User-friendly and cloud-based, it empowers event planners to stay organized and deliver unforgettable experiences.',
        img: Images.kgfair,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    {
        id: 7,
        projectName: "Online Examination Application",
        description: 'Our online examination software is a secure and scalable platform for conducting exams anytime, anywhere. It supports a wide range of question formats, automated grading, and real-time monitoring. With customizable exam settings, and instant result generation, it ensures fairness and transparency. Ideal for schools, universities, training institutes, and corporate assessments. Easy to use and fully cloud-based, it simplifies exam management for both organizers and candidates.',
        img: Images.onlineExamProduct,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
]

export const OurProductsInfo = [
    {
        id: 0,
        projectName: "Invoice & Parcels Tracking ",
        description: 'Gain full control of your business with Sage X3.',
        img: Images.ipt2,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    {
        id: 1,
        projectName: "Rental",
        description: 'Gain full control of your business with Sage X3.',
        img: Images.rental2,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    {
        id: 2,
        projectName: "Bizstarterr",
        description: 'Gain full control of your business with Sage X3.',
        img: Images.bizstarterr,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },

    {
        id: 3,
        projectName: "Outward",
        description: 'Gain full control of your business with Sage X3.',
        img: Images.outward,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
    // {
    //     id: 6,
    //     projectName: "GPS Tracker",
    //     description: 'Gain full control of your business with Sage X3.',
    //     img:Images.gpsTrack,
    //     details:[
    //         "Cloud to help your business drive operational  ",
    //         "Customer easily Understand",
    //         "Customer easily Understand"

    //     ]
    // },
    {
        id: 4,
        projectName: "KGF Fair",
        description: 'Gain full control of your business with Sage X3.',
        img: Images.kgfair,
        details: [
            "Cloud to help your business drive operational  ",
            "Customer easily Understand",
            "Customer easily Understand"

        ]
    },
]

export const TechnologyImages = [
    Images.angularJs, Images.nodeJs, Images.reactJs, Images.html, Images.css
]

export const ListOfServices = [
    {
        id: 1,
        header: "Web Designing",
        img: Images.servicesDesign,
        list: [
            "+ Static Websites Design",
            "+ UI / UX Design",
            "+ App Design",
            "+ Theme Design"
        ]
    },
    {
        id: 2,
        header: "Digital Marketing",
        img: Images.servicesMarketing,
        list: [
            "+ Market Research",
            "+ Social Media Marketing",
            "+ PPC/ Google Adwords",
            "+ Search Engine Otimization"
        ]
    },
    {
        id: 3,
        header: "Web Development",
        img: Images.servicesDevelop,
        list: [
            "+ Dynamic  Websites Development",
            "+ Wordpress/CMS Web Development",
            "+ Web App Development",
            "+ E-commerce/ Shopping Cart Development",
            "+ Email Template Development"
        ]
    },
    {
        id: 4,
        header: "Others",
        img: Images.servicesOthers,
        list: [
            "+ Software Development",
            "+ Business Process Migration",
            "+ Domain Name Registation",
            "+ Website Hosting",
            "+ Business Email id",
            "+ Bulk Email and SMS",
        ]
    },
]

export const AllBlogsCom = [
    {
        id: 1,
        name: 'Alec Whitten',
        date: ' 1 Jan 2023',
        header: 'Bill Walsh leadership lessons',
        content: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        cource: ["Leadership", "Management"],
        img: Images.blogLeadership
    },
    {
        id: 2,
        name: 'Demi WIlkinson',
        date: ' 1 Jan 2023',
        header: 'PM mental models',
        content: 'Mental models are simple expressions of complex processes or relationships.',
        cource: ["Product", "Research", "Frameworks"],
        img: Images.blogMental

    },
    {
        id: 3,
        name: 'Candice Wu',
        date: ' 1 Jan 2023',
        header: 'What is Wireframing?',
        content: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        cource: ["Design", "Research"],
        img: Images.blogWireframing

    },
    {
        id: 4,
        name: 'Natali Craig',
        date: ' 1 Jan 2023',
        header: 'How collaboration makes us better designers',
        content: 'Collaboration can make our teams stronger, and our individual designs better.',
        cource: ["Design", "Research"],
        img: Images.blogDesigners

    },
    {
        id: 5,
        name: 'Drew Cano',
        date: ' 1 Jan 2023',
        header: 'Our top 10 Javascript frameworks to use',
        content: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        cource: ["Software Development", "Tools", "SaaS"],
        img: Images.blogFrameworks

    },
    {
        id: 6,
        name: 'Orlando Diggs ',
        date: ' 1 Jan 2023',
        header: 'Podcast: Creating a better CX Community',
        content: 'Starting a community doesn’t need to be complicated, but how do you get started?',
        cource: ["Podcasts", "Customer Success"],
        img: Images.blogCommunity

    },


]
export const ClientStories = [
    {
        id: 1,
        header: 'Streamlined Operations',
        content: ' We have been using the GroupRM system since early 2014. Introduction of the system helped Flydubai to move out the email based handling of group requests to an efficient solution. Most importantly, being one of the fastest growing airlines in the world. ',
        name: 'Fly Dubai',
    },
    {
        id: 2,
        header: 'Streamlined Operations',
        content: ' We have been using the GroupRM system since early 2014. Introduction of the system helped Flydubai to move out the email based handling of group requests to an efficient solution. Most importantly, being one of the fastest growing airlines in the world. ',
        name: 'Fly Dubai',
    },
    {
        id: 3,
        header: 'Streamlined Operations',
        content: ' We have been using the GroupRM system since early 2014. Introduction of the system helped Flydubai to move out the email based handling of group requests to an efficient solution. Most importantly, being one of the fastest growing airlines in the world. ',
        name: 'Fly Dubai',
    },
]
export const OurBlogsRecent = [

    {
        id: 2,
        name: "Lana Steiner  ",
        date: " 1st Jan 2023",
        discrption: 'When businesses invest in software solutions, one of the most important decisions..... ',
        header: 'Cloud vs On-Premise Software What’s Best for Your Business?',
        img: Images.blogCompare,
        path:Paths.SoftwareDevelopment,

        cource: [
            "Design", "Research"
        ]
    },
    {
        id: 1,
        name: "Phoenix Baker ",
        date: " 1st Jan 2023",
        discrption: 'The software industry has witnessed a massive shift over the past decade, and 2025 is no different.... ',
        header: 'Cloud-First Software Dominate -s: Why Businesses are Moving to the Cloud in 2025',
        img: Images.blogCloud,
        path:Paths.SoftwareDominates,
        cource: [
            "Design", "Research"
        ]
    },
]

export const OurPoducts = [
    {
        id: 2,
        productImg: Images.rental,
        header: 'Customer Sofreware Developement',
        info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    },
    {
        id: 1,
        productImg: Images.ipt,
        header: 'Customer Sofreware Developement',
        info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    },

    {
        id: 3,
        productImg: Images.finance,
        header: 'Customer Sofreware Developement',
        info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    },
    {
        id: 4,
        productImg: Images.bizstarterr,
        header: 'Customer Sofreware Developement',
        info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    },

    {
        id: 5,
        productImg: Images.outward,
        header: 'Customer Sofreware Developement',
        info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    },
    // {
    //     id: 6,
    //     productImg: Images.gpsTrack,
    //     header: 'Customer Sofreware Developement',
    //     info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    // },
    {
        id: 7,
        productImg: Images.kgfair,
        header: 'Customer Sofreware Developement',
        info: "Whether you are building a new application or migrating and upgrading an existing one, we strive to improve productivity and reduce costs to deliver products and services more quickly."
    },
]