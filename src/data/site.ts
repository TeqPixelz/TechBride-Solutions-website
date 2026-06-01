import {
  BadgeCheck,
  Building2,
  Camera,
  Clock,
  CreditCard,
  Globe2,
  GraduationCap,
  Headphones,
  IdCard,
  Laptop,
  Network,
  Printer,
  RadioTower,
  ShieldCheck,
  Siren,
  Smartphone,
  Star,
  Wrench
} from "lucide-react";

export const contact = {
  phones: ["+263 77 558 5038", "+263 78 609 8143"],
  emails: ["techbridgedsi@gmail.com", "madembos@yahoo.com"],
  location: "Zvishavane, Zimbabwe",
  whatsapp: "263775585038"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" }
];

export const services = [
  {
    title: "Starlink Supply & Installation",
    description: "Fast satellite internet supply, mounting, configuration, and support for homes, schools, farms, and businesses.",
    icon: RadioTower
  },
  {
    title: "CCTV Systems",
    description: "Professional security camera design, installation, remote viewing setup, and maintenance.",
    icon: Camera
  },
  {
    title: "School Management Systems",
    description: "Digital tools that help schools manage learners, staff, communication, reporting, and operations.",
    icon: GraduationCap
  },
  {
    title: "School Siren Systems",
    description: "Reliable automated siren and bell systems for accurate school schedules and campus coordination.",
    icon: Siren
  },
  {
    title: "Point of Sale Systems",
    description: "Retail-ready POS hardware, software setup, receipt printing, stock management, and user support.",
    icon: CreditCard
  },
  {
    title: "Website Development",
    description: "Responsive company websites, landing pages, and digital platforms built for credibility and conversion.",
    icon: Globe2
  },
  {
    title: "Printer Repairs & Maintenance",
    description: "Diagnostics, repair, servicing, and preventative maintenance for office and school printers.",
    icon: Printer
  },
  {
    title: "Laptop & Phone Repairs",
    description: "Hardware and software repairs, upgrades, troubleshooting, data support, and device maintenance.",
    icon: Laptop
  },
  {
    title: "ID Cards & Name Tags",
    description: "Professional staff IDs, student cards, visitor badges, and branded name tags.",
    icon: IdCard
  },
  {
    title: "Networking Solutions",
    description: "LAN, Wi-Fi, router configuration, cabling, access points, and secure business connectivity.",
    icon: Network
  }
];

export const whyChooseUs = [
  { title: "Professional Service", icon: BadgeCheck },
  { title: "Affordable Pricing", icon: Star },
  { title: "Reliable Support", icon: Headphones },
  { title: "Fast Response", icon: Clock },
  { title: "Quality Installations", icon: ShieldCheck }
];

export const projects = [
  {
    title: "Starlink Installations",
    description: "High-speed internet deployments for homes, schools, and remote business sites.",
    category: "Starlink",
    image: "/images/projects/starlink/20260521_155858.jpg",
    href: "/projects/starlink-installations",
    icon: RadioTower
  },
  {
    title: "CCTV Installations",
    description: "Security camera systems with reliable coverage and remote monitoring.",
    category: "Security",
    href: "/projects/cctv-installations",
    icon: Camera
  },
  {
    title: "School Siren Systems",
    description: "Automated bell and siren setups for accurate daily scheduling.",
    category: "Schools",
    href: "/projects/school-siren-systems",
    icon: Siren
  },
  {
    title: "POS Systems",
    description: "Retail systems configured for sales, stock control, and receipt printing.",
    category: "Retail",
    href: "/projects/pos-systems",
    icon: CreditCard
  },
  {
    title: "Website Projects",
    description: "Modern websites created for companies, institutions, and service providers.",
    category: "Websites",
    href: "/projects/website-projects",
    icon: Globe2
  },
  {
    title: "ID Card Production",
    description: "Branded cards and name tags for schools, companies, and organizations.",
    category: "Branding",
    href: "/projects/id-card-production",
    icon: IdCard
  }
];

export const starlinkProjects = [
  {
    title: "Kit Preparation",
    description: "Starlink dish, router, cable, and mounting hardware prepared before installation.",
    category: "Starlink",
    image: "/images/projects/starlink/20260502_114445.jpg",
    icon: RadioTower
  },
  {
    title: "Dish Alignment",
    description: "Positioning and aligning the Starlink dish for clear sky access and stable signal.",
    category: "Starlink",
    image: "/images/projects/starlink/20260502_115255.jpg",
    icon: RadioTower
  },
  {
    title: "Installation Work",
    description: "On-site mounting and setup work for residential Starlink internet access.",
    category: "Starlink",
    image: "/images/projects/starlink/20260521_130549.jpg",
    icon: RadioTower
  },
  {
    title: "Completed Deployment",
    description: "Final Starlink installation delivered for reliable high-speed connectivity.",
    category: "Starlink",
    image: "/images/projects/starlink/20260521_155858.jpg",
    icon: RadioTower
  }
];

export const projectDetails = {
  "starlink-installations": {
    eyebrow: "Starlink Installations",
    title: "Starlink installation stages from preparation to final deployment.",
    intro:
      "A focused look at TechBridge Solutions handling Starlink kit preparation, dish alignment, on-site mounting, cable setup, and final connectivity deployment.",
    sectionTitle: "Four key stages of a professional Starlink setup.",
    cta: "Need Starlink installed at your site?",
    ctaLabel: "Request Starlink Quote",
    stages: starlinkProjects
  },
  "cctv-installations": {
    eyebrow: "CCTV Installations",
    title: "CCTV project stages from site survey to remote monitoring.",
    intro:
      "A CCTV installation is planned around coverage, camera placement, cabling, recording, remote access, and long-term support.",
    sectionTitle: "Typical CCTV installation stages.",
    cta: "Need CCTV installed at your premises?",
    ctaLabel: "Request CCTV Quote",
    stages: [
      {
        title: "Site Assessment",
        description: "Reviewing entrances, blind spots, lighting, and camera positions before installation.",
        category: "Security",
        icon: Camera
      },
      {
        title: "Camera Placement",
        description: "Positioning cameras for useful coverage across key business, school, or home areas.",
        category: "Security",
        icon: Camera
      },
      {
        title: "Recorder and Network Setup",
        description: "Connecting cameras to recording equipment and configuring viewing access.",
        category: "Security",
        icon: Network
      },
      {
        title: "Testing and Handover",
        description: "Testing video quality, playback, remote viewing, and client operation.",
        category: "Security",
        icon: ShieldCheck
      }
    ]
  },
  "school-siren-systems": {
    eyebrow: "School Siren Systems",
    title: "School siren installation stages for reliable daily scheduling.",
    intro:
      "School siren projects are planned to keep lesson changes, breaks, and closing times accurate and easy to manage.",
    sectionTitle: "Typical school siren project stages.",
    cta: "Need a school siren system installed?",
    ctaLabel: "Request School System Quote",
    stages: [
      {
        title: "Schedule Planning",
        description: "Understanding the school's timetable, bell times, zones, and daily routines.",
        category: "Schools",
        icon: GraduationCap
      },
      {
        title: "Siren Placement",
        description: "Choosing positions that provide clear sound coverage across the school premises.",
        category: "Schools",
        icon: Siren
      },
      {
        title: "Control Setup",
        description: "Configuring timing controls and automation for reliable daily operation.",
        category: "Schools",
        icon: Clock
      },
      {
        title: "Testing and Training",
        description: "Testing sound coverage and training staff to operate the system confidently.",
        category: "Schools",
        icon: BadgeCheck
      }
    ]
  },
  "pos-systems": {
    eyebrow: "POS Systems",
    title: "POS setup stages for efficient retail and business sales.",
    intro:
      "Point of Sale projects are designed around sales flow, receipts, stock control, users, reporting, and reliable daily use.",
    sectionTitle: "Typical POS setup stages.",
    cta: "Need a POS system for your business?",
    ctaLabel: "Request POS Quote",
    stages: [
      {
        title: "Business Workflow Review",
        description: "Understanding products, departments, users, receipt needs, and reporting requirements.",
        category: "Retail",
        icon: CreditCard
      },
      {
        title: "Hardware Setup",
        description: "Installing POS terminals, printers, scanners, cash drawers, and required accessories.",
        category: "Retail",
        icon: Printer
      },
      {
        title: "Software Configuration",
        description: "Setting up items, prices, users, tax rules, receipts, and stock controls.",
        category: "Retail",
        icon: Laptop
      },
      {
        title: "Training and Support",
        description: "Training users and providing support so the system runs smoothly after handover.",
        category: "Retail",
        icon: Headphones
      }
    ]
  },
  "website-projects": {
    eyebrow: "Website Projects",
    title: "Website project stages from planning to launch.",
    intro:
      "Website projects are built around brand credibility, mobile responsiveness, clear content, fast loading, and practical business enquiries.",
    sectionTitle: "Typical website development stages.",
    cta: "Need a professional website?",
    ctaLabel: "Request Website Quote",
    stages: [
      {
        title: "Content Planning",
        description: "Defining pages, services, contact details, calls to action, and website goals.",
        category: "Websites",
        icon: Globe2
      },
      {
        title: "Design and Layout",
        description: "Creating a professional layout that matches the brand and works on mobile devices.",
        category: "Websites",
        icon: Laptop
      },
      {
        title: "Development",
        description: "Building responsive pages, SEO structure, contact forms, and website functionality.",
        category: "Websites",
        icon: Wrench
      },
      {
        title: "Testing and Launch",
        description: "Checking performance, mobile display, links, contact flow, and publishing readiness.",
        category: "Websites",
        icon: BadgeCheck
      }
    ]
  },
  "id-card-production": {
    eyebrow: "ID Card Production",
    title: "ID card and name tag production stages.",
    intro:
      "ID card projects are prepared for clean branding, accurate staff or student details, readable design, and professional finishing.",
    sectionTitle: "Typical ID card production stages.",
    cta: "Need ID cards or name tags produced?",
    ctaLabel: "Request ID Card Quote",
    stages: [
      {
        title: "Data Collection",
        description: "Collecting names, roles, photos, departments, and card requirements.",
        category: "Branding",
        icon: IdCard
      },
      {
        title: "Card Design",
        description: "Designing branded cards or name tags with clear details and professional layout.",
        category: "Branding",
        icon: BadgeCheck
      },
      {
        title: "Printing and Finishing",
        description: "Producing durable cards, tags, or badges according to the agreed format.",
        category: "Branding",
        icon: Printer
      },
      {
        title: "Delivery",
        description: "Checking final cards and handing them over ready for use.",
        category: "Branding",
        icon: ShieldCheck
      }
    ]
  }
};

export const testimonials = [
  {
    name: "Operations Manager",
    company: "Retail Client",
    quote: "TechBridge Solutions helped us modernize our POS setup and kept the rollout smooth from start to finish."
  },
  {
    name: "School Administrator",
    company: "Education Client",
    quote: "Their team responded quickly, installed our technology systems professionally, and provided clear support."
  },
  {
    name: "Home Internet Client",
    company: "Zvishavane",
    quote: "The Starlink installation was neat, fast, and reliable. We were connected and guided through everything."
  }
];

export const sectors = [
  { title: "Businesses", icon: Building2 },
  { title: "Schools", icon: GraduationCap },
  { title: "Healthcare", icon: ShieldCheck },
  { title: "Government", icon: Building2 },
  { title: "Homes", icon: Smartphone },
  { title: "Support", icon: Wrench }
];
