export interface EventItem {
  id: string;
  title: string;
  category: string;
  domain: string;
  date: string;
  time: string;
  venue: string;
  prizePool: string;
  teamSize: string;
  description: string;
  rules: string[];
  featured?: boolean;
  image: string;
  registeredCount: number;
}

export interface ArtistItem {
  id: string;
  name: string;
  role: string;
  genre: string;
  date: string;
  stage: string;
  time: string;
  bio: string;
  image: string;
  popularTrack?: string;
}

export interface ScheduleSlot {
  id: string;
  time: string;
  title: string;
  category: string;
  stage: string;
  day: number;
  speakerOrHost?: string;
  status: 'LIVE NOW' | 'UPCOMING' | 'COMPLETED';
}

export interface GalleryItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  photographer?: string;
}

export const FESTIVAL_INFO = {
  name: "AURA '26",
  tagline: "Where Creativity Comes Alive",
  date: "24–26 October 2026",
  venue: "SRM Institute of Science and Technology",
  location: "Kattankulathur, Chennai, Tamil Nadu 603203",
  coordinates: "12.8231° N, 80.0444° E",
  stats: [
    { label: "20+ Events", value: "20+", description: "Across 6 Creative Domains", detail: "Music, Dance, Drama, Tech, Fine Arts & Fashion" },
    { label: "50+ Artists", value: "50+", description: "National & Global Performers", detail: "Pro Nites, DJs, Bands & Industry Mentors" },
    { label: "10K+ Creatives", value: "10K+", description: "Nationwide Footfall Expected", detail: "150+ Partner Universities & Colleges" }
  ]
};

export const CATEGORIES = [
  "All Domains",
  "Music & Sound",
  "Dance & Motion",
  "Fine & Digital Arts",
  "Theater & Drama",
  "Fashion & Style",
  "Tech & Creative Code",
  "Literature & Spoken Word"
];

export const EVENTS: EventItem[] = [
  {
    id: "ev-1",
    title: "Battle of the Bands: Symphony X",
    category: "Music & Sound",
    domain: "Pro Competition",
    date: "Oct 24, 2026",
    time: "17:00 IST",
    venue: "Main Stage Arena",
    prizePool: "₹2,50,000",
    teamSize: "3 - 8 Members",
    description: "The ultimate clash of original indie, rock, and fusion bands. Plug in your amplifiers and electrify an audience of 5,000+ music lovers.",
    rules: [
      "Original compositions gain 20% bonus points.",
      "Total performance time limit: 20 minutes including setup.",
      "Drum kit provided on stage; bands must bring own instrument gear."
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&fit=crop&auto=format",
    registeredCount: 42
  },
  {
    id: "ev-2",
    title: "Choreonite: Urban Kinematics",
    category: "Dance & Motion",
    domain: "Dance Fleet",
    date: "Oct 25, 2026",
    time: "18:30 IST",
    venue: "Amphitheatre Central",
    prizePool: "₹2,00,000",
    teamSize: "8 - 25 Members",
    description: "High-octane mega dance crew competition blending street hip-hop, contemporary, and fusion storytelling with cinematic lights.",
    rules: [
      "Props and LED costumes permitted with prior safety check.",
      "Music track to be submitted in 320kbps MP3 48 hrs prior.",
      "Judged on synchronization, spatial dynamics, and concept originality."
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&fit=crop&auto=format",
    registeredCount: 38
  },
  {
    id: "ev-3",
    title: "Vogue Spatial: Avant-Garde Runway",
    category: "Fashion & Style",
    domain: "Couture & Design",
    date: "Oct 25, 2026",
    time: "20:00 IST",
    venue: "Grand Pavilion",
    prizePool: "₹1,75,000",
    teamSize: "10 - 15 Models",
    description: "Where futuristic materials meet high fashion. Designers present sustainable, architectural, and glassmorphic garment concepts.",
    rules: [
      "Theme: 'Translucent Horizons & Futuristic Craft'.",
      "Ramp walk duration: Max 12 minutes per team.",
      "Background video projection files must match 16:9 4K format."
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&fit=crop&auto=format",
    registeredCount: 29
  },
  {
    id: "ev-4",
    title: "Generative Art Canvas (Hack-Art)",
    category: "Tech & Creative Code",
    domain: "Digital Arts",
    date: "Oct 24, 2026",
    time: "10:00 IST",
    venue: "Creative Tech Dome",
    prizePool: "₹1,20,000",
    teamSize: "1 - 3 Members",
    description: "24-hour creative coding marathon building real-time interactive shaders, generative installations, and AI digital sculptures.",
    rules: [
      "Open source frameworks permitted (Three.js, TouchDesigner, p5.js, GLSL).",
      "Live projection test on 3D canvas provided at venue.",
      "Final submission evaluated by digital art curators."
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&fit=crop&auto=format",
    registeredCount: 56
  },
  {
    id: "ev-5",
    title: "Nukkad Natak: Voices of Change",
    category: "Theater & Drama",
    domain: "Street Play",
    date: "Oct 25, 2026",
    time: "14:00 IST",
    venue: "Quadrangle Circle",
    prizePool: "₹1,50,000",
    teamSize: "10 - 20 Members",
    description: "Powerful street play performances addressing societal shifts, technology ethics, and human connection.",
    rules: [
      "Acoustic instruments only (Dholak, Harmonium, Flute).",
      "Language: English, Hindi, or Regional.",
      "Time limit: 15 minutes."
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&fit=crop&auto=format",
    registeredCount: 31
  },
  {
    id: "ev-6",
    title: "MonoAct & Improv Monologue",
    category: "Theater & Drama",
    domain: "Solo Performance",
    date: "Oct 24, 2026",
    time: "12:30 IST",
    venue: "Black Box Theater",
    prizePool: "₹60,000",
    teamSize: "1 Member",
    description: "Captivate the room with emotional depth and raw dramatic storytelling in a minimal stage environment.",
    rules: [
      "Round 1: Prepared Monologue (4 mins).",
      "Round 2: On-spot prompt improv (2 mins prep, 3 mins act)."
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&fit=crop&auto=format",
    registeredCount: 44
  },
  {
    id: "ev-7",
    title: "Acoustic Unplugged Jam",
    category: "Music & Sound",
    domain: "Solo & Duo",
    date: "Oct 26, 2026",
    time: "11:00 IST",
    venue: "Garden Stage",
    prizePool: "₹80,000",
    teamSize: "1 - 2 Members",
    description: "Raw vocals, acoustic strings, and soul-stirring melodies in an intimate courtyard setting.",
    rules: [
      "No backing tracks allowed.",
      "Instruments allowed: Acoustic Guitar, Ukulele, Violin, Cajon."
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&fit=crop&auto=format",
    registeredCount: 65
  },
  {
    id: "ev-8",
    title: "Slam Poetry & Micro-Fiction",
    category: "Literature & Spoken Word",
    domain: "Spoken Word",
    date: "Oct 26, 2026",
    time: "14:30 IST",
    venue: "Literary Lounge",
    prizePool: "₹50,000",
    teamSize: "1 Member",
    description: "Words that pierce, provoke, and inspire. Present original spoken word poetry under atmospheric lighting.",
    rules: [
      "Original works only.",
      "No background music; focus on vocal rhythm and imagery.",
      "Time limit: 4 minutes."
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&fit=crop&auto=format",
    registeredCount: 72
  }
];

export const ARTISTS: ArtistItem[] = [
  {
    id: "art-1",
    name: "CYBERA & THE ORCHESTRA",
    role: "Headline Act / Neo-Fusion",
    genre: "Electronic Cinematic Live",
    date: "26 OCT | 20:30 IST",
    stage: "Main Stage Arena",
    time: "Pro Nite 3",
    bio: "Global fusion collective blending classical strings with modular synthesis and holographic visuals.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&fit=crop&auto=format",
    popularTrack: "Resonance in Wine #04"
  },
  {
    id: "art-2",
    name: "ARIANNA LYNX",
    role: "Singer-Songwriter",
    genre: "Ambient Indie Soul",
    date: "25 OCT | 19:30 IST",
    stage: "Amphitheatre Central",
    time: "Pro Nite 2",
    bio: "Multi-platinum vocal artist known for ethereal harmonies, poetic lyricism, and intimate acoustic soundscapes.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&fit=crop&auto=format",
    popularTrack: "Velvet Horizons"
  },
  {
    id: "art-3",
    name: "KINETIC VOID",
    role: "International DJ & Producer",
    genre: "Deep Progressive Techno",
    date: "24 OCT | 21:00 IST",
    stage: "Tech Dome Stage",
    time: "Pro Nite 1",
    bio: "Pioneer in immersive spatial audio beats, creating hypnotic sound sculptures across festival grounds worldwide.",
    image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800&fit=crop&auto=format",
    popularTrack: "Prism Monolith"
  },
  {
    id: "art-4",
    name: "THORNE & REVERIE",
    role: "Contemporary Dance Theatre",
    genre: "Kinetic Performance Art",
    date: "25 OCT | 17:00 IST",
    stage: "Grand Pavilion",
    time: "Evening Showcase",
    bio: "Award-winning duo merging classical ballet technique with modern spatial UI motion projections.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&fit=crop&auto=format",
    popularTrack: "Glass reflections Part II"
  }
];

export const SCHEDULE_DAYS = [
  { day: 1, date: "24 OCT 2026", title: "Day 01 — The Awakening" },
  { day: 2, date: "25 OCT 2026", title: "Day 02 — The Prism" },
  { day: 3, date: "26 OCT 2026", title: "Day 03 — The Symphony" }
];

export const SCHEDULE_SLOTS: ScheduleSlot[] = [
  // Day 1
  { id: "s1", day: 1, time: "09:00 - 10:30", title: "AURA '26 Grand Inauguration & Light Keynote", category: "Ceremony", stage: "Main Stage Arena", status: "COMPLETED" },
  { id: "s2", day: 1, time: "10:30 - 16:00", title: "Generative Art Canvas (24hr Hack-Art Kickoff)", category: "Tech & Code", stage: "Creative Tech Dome", status: "COMPLETED" },
  { id: "s3", day: 1, time: "12:30 - 15:00", title: "MonoAct & Improv Monologues", category: "Theater", stage: "Black Box Theater", status: "COMPLETED" },
  { id: "s4", day: 1, time: "17:00 - 20:30", title: "Battle of the Bands: Symphony X (Prelims)", category: "Music", stage: "Main Stage Arena", status: "LIVE NOW" },
  { id: "s5", day: 1, time: "21:00 - 23:30", title: "Pro Nite 1: Kinetic Void Live Set", category: "Concert", stage: "Tech Dome Stage", status: "UPCOMING" },

  // Day 2
  { id: "s6", day: 2, time: "10:00 - 13:00", title: "Short Film & Visual Storytelling Showcase", category: "Film & Art", stage: "Black Box Theater", status: "UPCOMING" },
  { id: "s7", day: 2, time: "14:00 - 17:00", title: "Nukkad Natak Street Drama", category: "Theater", stage: "Quadrangle Circle", status: "UPCOMING" },
  { id: "s8", day: 2, time: "18:30 - 20:00", title: "Choreonite: Urban Kinematics Final", category: "Dance", stage: "Amphitheatre Central", status: "UPCOMING" },
  { id: "s9", day: 2, time: "20:00 - 21:30", title: "Vogue Spatial: Avant-Garde Runway", category: "Fashion", stage: "Grand Pavilion", status: "UPCOMING" },
  { id: "s10", day: 2, time: "21:30 - 23:30", title: "Pro Nite 2: Arianna Lynx Live", category: "Concert", stage: "Main Stage Arena", status: "UPCOMING" },

  // Day 3
  { id: "s11", day: 3, time: "10:00 - 13:00", title: "Acoustic Unplugged Jam & Busking", category: "Music", stage: "Garden Stage", status: "UPCOMING" },
  { id: "s12", day: 3, time: "14:00 - 16:30", title: "Slam Poetry & Micro-Fiction Grand Finale", category: "Literature", stage: "Literary Lounge", status: "UPCOMING" },
  { id: "s13", day: 3, time: "17:00 - 19:30", title: "Battle of the Bands Final Showdown", category: "Music", stage: "Main Stage Arena", status: "UPCOMING" },
  { id: "s14", day: 3, time: "20:30 - 23:00", title: "Grand Finale Pro Nite: Cybera & The Orchestra", category: "Concert", stage: "Main Stage Arena", status: "UPCOMING" },
  { id: "s15", day: 3, time: "23:00 - 23:30", title: "Closing Drone Light Display & Award Ceremony", category: "Ceremony", stage: "Sky Arena", status: "UPCOMING" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The Prism Stage Lighting",
    year: "AURA '25",
    category: "Stages & Lighting",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&fit=crop&auto=format",
    photographer: "Elena Rostova"
  },
  {
    id: "g2",
    title: "Choreonite Kinetic Movement",
    year: "AURA '25",
    category: "Dance",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&fit=crop&auto=format",
    photographer: "Marcus Vance"
  },
  {
    id: "g3",
    title: "3D Hologram Installation",
    year: "AURA '25",
    category: "Exhibitions",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&fit=crop&auto=format",
    photographer: "Studio Prism"
  },
  {
    id: "g4",
    title: "Indie Rock Vocalist",
    year: "AURA '24",
    category: "Music",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&fit=crop&auto=format",
    photographer: "Devon Chen"
  },
  {
    id: "g5",
    title: "Avant-Garde Couture Silhouette",
    year: "AURA '25",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&fit=crop&auto=format",
    photographer: "Sienna Miller"
  },
  {
    id: "g6",
    title: "Crowd Energy at Main Arena",
    year: "AURA '25",
    category: "Crowd",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&fit=crop&auto=format",
    photographer: "SRM Photography Club"
  }
];

export const PASS_OPTIONS = [
  {
    id: "pass-day",
    name: "Day Visitor Pass",
    price: "₹499",
    type: "Single Day Access",
    features: [
      "Access to all daytime competitive events",
      "Entry to 1 Pro Nite concert (selected day)",
      "Festival glass wristband & digital badge",
      "Access to Food Court & Art Pavilions"
    ],
    popular: false,
    color: "#C98F91"
  },
  {
    id: "pass-vip",
    name: "All-Access VIP Monolith Pass",
    price: "₹1,299",
    type: "Full 3-Day Festival Pass",
    features: [
      "Unrestricted access to ALL 3 Days & Pro Nites",
      "Priority VIP front-row pit entry at Main Stage",
      "Exclusive entry to Artists & Creator Lounge",
      "Official AURA '26 Chrome Tote & Commemorative Merch",
      "Fast-track registration for all competitions"
    ],
    popular: true,
    color: "#D8B99A"
  },
  {
    id: "pass-team",
    name: "Contestant Contingent Pass",
    price: "₹899",
    type: "Per Team Member",
    features: [
      "Full 3-Day Festival Access + Pro Nite Entry",
      "Guaranteed slots in major flagship events",
      "Complimentary green-room access during performance",
      "Official participation certificate & trophy eligibility"
    ],
    popular: false,
    color: "#8F3D52"
  }
];
