export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Other'];

export const projects = [
  {
    id: 'smartvotebd',
    title: 'SmartVoteBD - University Election System',
    shortTitle: 'SmartVoteBD',
    category: 'Full Stack',
    featured: true,
    role: 'Full Stack Architect',
    year: '2026',
    tagline: 'Secure digital voting platform for university elections',
    description: 'SmartVoteBD is a modern and secure digital voting platform designed for university elections. Built with React, Node.js, and cryptographic ballot verification to ensure verifiable voter turnout.',
    longDescription: 'SmartVoteBD addresses institutional election integrity by delivering a verifiable digital ballot box. Features include student ID credential verification, live turnout participation metrics without prematurely exposing voting ratios, encrypted administrative audit logs, and instant certified tallies.',
    image: 'https://i.ibb.co.com/4ZKZztTs/Home-Page.png',
    technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'JWT'],
    liveUrl: '',
    githubUrl: '',
    features: [
      'Encrypted ballot submission with unique cryptographic confirmation tokens',
      'Role-based dashboard for Election Commissioners, Observers, and Students',
      'Real-time voter turnout tracker with live percentage turnout graphs',
      'PDF audit trail and cryptographic tally export certified for official review'
    ],
    highlights: [
      'Zero vote tampering architecture',
      'Handles up to 5,000 concurrent voters',
      'Sub-second ballot processing latency'
    ]
  },
  {
    id: 'dreamnest',
    title: 'DreamNest - Premium Real Estate Platform',
    shortTitle: 'DreamNest',
    category: 'Full Stack',
    featured: true,
    role: 'Full Stack Architect',
    year: '2025',
    tagline: 'Modern residential property discovery and inquiry portal',
    description: 'User Features - Property Browsing: Search and filter properties by type, price, location - Property Details: Detailed floor plans, neighborhood transit metrics, and direct agent inquiry.',
    longDescription: 'DreamNest eliminates the friction of apartment hunting by grouping verified residential listings with high-resolution imagery, floor plan details, proximity to public transit, and an interactive mortgage calculation utility.',
    image: 'https://i.ibb.co.com/G4Mh82nK/Home-page.png',
    technologies: ['TypeScript', 'Tailwind CSS', 'Express.js', 'Node.js', 'React', 'MongoDB'],
    liveUrl: '',
    githubUrl: '',
    features: [
      'Multi-parameter filter (price range, bedroom count, property type)',
      'High-resolution visual gallery with floor plan inspection',
      'Direct inquiry submission linking buyers with verified agents',
      'Client-side mortgage amortization and monthly installment calculator'
    ],
    highlights: [
      'Clean cards with verified host badges',
      'Fast client-side property filtering',
      'Accessible keyboard navigable modal dialogs'
    ]
  },
  {
    id: 'garilagbe',
    title: 'GariLagbe.com - On-Demand Car Booking',
    shortTitle: 'GariLagbe.com',
    category: 'Full Stack',
    featured: true,
    role: 'Full Stack Architect',
    year: '2025',
    tagline: 'On-demand vehicle rental and logistics reservation web app',
    description: 'A modern and responsive car booking platform built with React.js, allowing users to browse available cars, view details, calculate dynamic fares, and book inter-city rides seamlessly.',
    longDescription: 'GariLagbe streamlines vehicle rentals for inter-city travel and city commutes. Users can filter vehicles by seating capacity, fuel type, and hourly or daily rates. Fleet owners manage vehicle availability, track upcoming reservations, and generate automated digital booking receipts.',
    image: 'https://i.ibb.co.com/qYkGWvHZ/24cb4fb8-2297-45c0-83b6-a51d51174862.png',
    technologies: ['React', 'Express.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'REST API'],
    liveUrl: 'https://garilagbe-client.netlify.app/',
    githubUrl: 'https://github.com/shagor-dev/gari-lagbe',
    features: [
      'Interactive vehicle fleet catalog with dynamic pricing filters',
      'Instant distance and fare estimation calculation module',
      'Reservation management console for car owners and renters',
      'Digital trip invoice generation with breakdown of taxes and fuel costs'
    ],
    highlights: [
      'Multi-vehicle category booking',
      'Responsive driver dispatch status view',
      'Optimized MongoDB indexing for fast search'
    ]
  },
  {
    id: 'pensionprobd',
  title: 'PensionProBD - Online Pension Management System',
  shortTitle: 'PensionProBD',
  category: 'Frontend',
  featured: false,
  role: 'Frontend Engineer',
  year: '2024',
  tagline: 'Digital pension management platform for streamlined benefit tracking',
  description: 'A responsive online pension management system featuring application tracking, document submission, benefit calculators, and admin dashboards with clean visual hierarchy.',
  longDescription: 'PensionProBD delivers a clean, high-performance web experience for pensioners and administrators. It features an intuitive application dashboard, real-time status tracking, document upload and verification workflows, pension benefit calculators, and an admin panel for managing beneficiary records.',
  image: 'https://i.ibb.co.com/HDfRt4G9/Pension-Pro-BD-Digital.png',
  technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Vite'],
  liveUrl: '',
  githubUrl: '',
  features: [
    'Real-time pension application status tracking',
    'Document upload and verification workflow',
    'Pension benefit calculator with breakdown view',
    'Admin dashboard for managing beneficiary records',
    'Fluid animations powered by Framer Motion'
  ],
  highlights: [
    'Zero layout shift on screen resize',
    'Smooth micro-interactions on hover',
    'Clean, accessible dashboard UI'
    ]
  },
  // {
  //   id: 'cinema-platform',
  //   title: 'Cinema Platform - Seat Reservation & Trailers',
  //   shortTitle: 'Cinema Platform',
  //   category: 'Frontend',
  //   featured: false,
  //   role: 'Frontend Developer',
  //   year: '2024',
  //   tagline: 'Film showcase, movie trailer player, and theater seat picker',
  //   description: 'An interactive cinema ticket booking interface with interactive hall seating layout, trailer playback modal, real-time seat locks, and instant checkout breakdown.',
  //   longDescription: 'Cinema Platform offers moviegoers a streamlined way to explore current screenings, watch high-definition trailers, select seats in real-time, and calculate ticket totals without page refreshes.',
  //   image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  //   technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Vite'],
  //   liveUrl: 'https://cinemaplatform.demo.app',
  //   githubUrl: 'https://github.com/shagor-dev/cinema-platform',
  //   features: [
  //     'Interactive SVG-style cinema seat selector with instant subtotal',
  //     'Embedded video trailer player with theater synopsis overlay',
  //     'Multi-theater location and screening time selection tabs',
  //     'Printable ticket voucher summary with barcode representation'
  //   ],
  //   highlights: [
  //     'Accurate seat state matrix (available, reserved, selected)',
  //     'Sub-50ms UI response time',
  //     'Fluid mobile-first theater layout'
  //   ]
  // },
  // {
  //   id: 'roadside-assistant',
  //   title: 'Roadside Assistant - Highway Emergency Dispatch',
  //   shortTitle: 'Roadside Assistant',
  //   category: 'Other',
  //   featured: false,
  //   role: 'Full Stack Developer',
  //   year: '2024',
  //   tagline: 'Emergency roadside support dispatcher and service locator',
  //   description: 'A reliable emergency web tool helping stranded drivers quickly identify mechanical issues, locate towing hubs, and share exact GPS coordinates.',
  //   longDescription: 'Created as a rapid-response emergency portal for highway breakdowns. Motorists choose their breakdown type (flat tire, battery dead, engine overheat, towing) and get paired with immediate contact numbers, safety protocols, and location sharing tools.',
  //   image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
  //   technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST API', 'Git'],
  //   liveUrl: 'https://roadsideassistant.demo.app',
  //   githubUrl: 'https://github.com/shagor-dev/roadside-assistant',
  //   features: [
  //     'Emergency SOS trigger with vehicle symptom diagnostic selector',
  //     'Nearby verified mechanic and tow-truck dispatch directory',
  //     'GPS coordinates copier for easy SMS/WhatsApp dispatch communication',
  //     'Step-by-step offline-first vehicle safety guidance manual'
  //   ],
  //   highlights: [
  //     'High-contrast safety colors for night reading',
  //     'One-tap dial and dispatch buttons',
  //     'Ultra-lightweight bundle for low cellular bandwidth'
  //   ]
  // }
];
