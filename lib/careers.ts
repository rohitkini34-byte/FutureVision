export interface RoadmapStep {
  label: string;
  description: string;
}

export interface Career {
  id: string;
  name: string;
  salutation: string;
  backgroundPrompt: string;
  roadmap: RoadmapStep[];
}

export const CAREERS: Career[] = [
  {
    id: "architect",
    name: "Architect",
    salutation: "Ar.",
    backgroundPrompt: "modern architectural studio with blueprints, scale models and glass skyscrapers in the background",
    roadmap: [
      { label: "10th Standard", description: "Build foundation in Mathematics and Drawing/Art" },
      { label: "12th — PCM", description: "Physics, Chemistry, Mathematics with minimum 50% marks" },
      { label: "Entrance Exam", description: "NATA (National Aptitude Test in Architecture) or JEE Paper 2" },
      { label: "B.Arch — 5 Years", description: "From NIT, SPA Delhi, CEPT, or top private colleges" },
      { label: "Council of Architecture", description: "Register with COA to practice legally in India" },
      { label: "M.Arch (Optional)", description: "Specialise in Urban Design, Landscape, or Sustainability" },
    ],
  },
  {
    id: "ca",
    name: "CA (Chartered Accountant)",
    salutation: "CA",
    backgroundPrompt: "sleek modern accounting firm with financial charts, digital dashboards and glass office towers",
    roadmap: [
      { label: "10th Standard", description: "Focus on Mathematics and Commerce basics" },
      { label: "12th — Commerce/PCM", description: "Prepare for CA Foundation after Board Exams" },
      { label: "CA Foundation", description: "4 papers: Accounting, Law, Mathematics/Stats, Economics" },
      { label: "CA Intermediate", description: "8 papers across Group I & II; 8-month study period" },
      { label: "Articleship — 3 Years", description: "Practical training under a practising CA firm" },
      { label: "CA Final", description: "6 papers: Advanced Accounting, Tax, Audit, Finance, IT" },
      { label: "ICAI Membership", description: "Become a Fellow Member (FCA) of the Institute of Chartered Accountants of India" },
    ],
  },
  {
    id: "chef",
    name: "Chef / Culinary Expert",
    salutation: "",
    backgroundPrompt: "futuristic high-end restaurant kitchen with molecular gastronomy equipment and Michelin-star aesthetics",
    roadmap: [
      { label: "10th Standard", description: "Any stream; passion for cooking and creativity" },
      { label: "12th — Any Stream", description: "Hotel Management entrance preparation" },
      { label: "Entrance Exam", description: "NCHM JEE (National Council for Hotel Management Joint Entrance Exam)" },
      { label: "B.Sc Hotel Management — 3 Years", description: "From IHM Pusa, IHM Ahmedabad, or other NIHMs" },
      { label: "Specialisation", description: "Culinary Arts, Pastry & Bakery, or Molecular Gastronomy" },
      { label: "International Experience", description: "Work in 5-star hotels or abroad; pursue Michelin-star exposure" },
    ],
  },
  {
    id: "civil-servant",
    name: "Civil Servant (IAS/IPS/IFS)",
    salutation: "IAS",
    backgroundPrompt: "modern Indian government secretariat with the Ashoka Emblem, Indian flag and grand colonial architecture",
    roadmap: [
      { label: "10th Standard", description: "Any stream; start reading newspapers and magazines daily" },
      { label: "12th — Any Stream", description: "Focus on General Knowledge and current affairs" },
      { label: "Graduation — Any Discipline", description: "From any recognised university (minimum 3 years)" },
      { label: "UPSC Prelims", description: "GS Paper I & CSAT — 200 marks MCQ exam in each paper" },
      { label: "UPSC Mains", description: "9 papers: Essay, GS I–IV, Optional Subject I–II, Language papers" },
      { label: "UPSC Interview", description: "Personality Test conducted by the UPSC board (275 marks)" },
      { label: "LBSNAA Training", description: "2 years of Foundation & Phase training in Mussoorie" },
    ],
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    salutation: "Dr.",
    backgroundPrompt: "cutting-edge AI research lab with neural network visualisations, holographic data displays and quantum servers",
    roadmap: [
      { label: "10th Standard", description: "Build strong foundation in Mathematics and Computer Science" },
      { label: "12th — PCM / CS", description: "Physics, Chemistry, Mathematics with Computer Science" },
      { label: "B.Tech CSE / B.Sc Statistics", description: "From IIT, NIT, BITS, or top university" },
      { label: "Core Skills", description: "Python, SQL, Machine Learning, Deep Learning, Statistics" },
      { label: "M.Tech / M.Sc / MBA Analytics", description: "Specialise via GATE, CAT, or GMAT for higher studies" },
      { label: "PhD (Optional)", description: "Research in AI/ML from IISc, IITs, or international universities" },
      { label: "Industry / Research", description: "Work at FAANG, Indian unicorns, ISRO, or DRDO" },
    ],
  },
  {
    id: "defence-officer",
    name: "Defence Officer",
    salutation: "Lt.",
    backgroundPrompt: "futuristic Indian military command centre with tactical holographic displays and armed forces insignia",
    roadmap: [
      { label: "10th Standard", description: "Build physical fitness; join NCC if available" },
      { label: "12th — PCM (Technical) / Any (Non-Tech)", description: "Minimum 70% for NDA, 60% for CDS" },
      { label: "Entrance Exam", description: "NDA (after 12th) or CDS / AFCAT (after graduation)" },
      { label: "SSB Interview", description: "5-day Service Selection Board psychological and physical evaluation" },
      { label: "Military Training", description: "IMA Dehradun (Army) / NDA Pune / AFA Hyderabad / INA Ezhimala (Navy)" },
      { label: "Commissioned Officer", description: "Start as 2nd Lieutenant; advance to higher ranks over career" },
    ],
  },
  {
    id: "doctor",
    name: "Doctor",
    salutation: "Dr.",
    backgroundPrompt: "advanced futuristic hospital with robotic surgery systems, holographic medical imaging and AI-assisted diagnostics",
    roadmap: [
      { label: "10th Standard", description: "Strong focus on Science, especially Biology" },
      { label: "12th — PCB", description: "Physics, Chemistry, Biology with minimum 50–60% marks" },
      { label: "NEET UG", description: "National Eligibility cum Entrance Test — highly competitive national exam" },
      { label: "MBBS — 5.5 Years", description: "4.5 years academic + 1 year mandatory rotating internship" },
      { label: "NEET PG", description: "National entrance exam for postgraduate medical specialisation" },
      { label: "MD / MS — 3 Years", description: "Specialise in Medicine, Surgery, Paediatrics, Radiology, etc." },
      { label: "Super Specialisation (Optional)", description: "DM / MCh for Cardiology, Neurosurgery, Oncology, etc." },
    ],
  },
  {
    id: "engineer",
    name: "Engineer",
    salutation: "Er.",
    backgroundPrompt: "futuristic engineering facility with robotic assembly lines, holographic CAD models and Indian infrastructure in the background",
    roadmap: [
      { label: "10th Standard", description: "Build strong foundation in Mathematics and Science" },
      { label: "12th — PCM", description: "Physics, Chemistry, Mathematics — score above 75%" },
      { label: "Entrance Exam", description: "JEE Main / JEE Advanced for IIT/NIT; State CETs for state colleges" },
      { label: "B.E. / B.Tech — 4 Years", description: "Mechanical, Civil, Electrical, Electronics, Chemical, etc." },
      { label: "Campus Placements / GATE", description: "Core or IT companies; GATE for M.Tech/PSU jobs" },
      { label: "M.Tech (Optional)", description: "Specialise via GATE from IITs or NITs" },
      { label: "PSU / Research / Industry", description: "NTPC, ONGC, BHEL, ISRO, L&T, Tata, or private sector" },
    ],
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    salutation: "",
    backgroundPrompt: "modern Indian startup office in Bengaluru with innovative tech products, pitch decks and a vibrant team environment",
    roadmap: [
      { label: "10th Standard", description: "Develop curiosity, leadership, and problem-solving early" },
      { label: "12th — Any Stream", description: "Commerce or Science; read about business and startups" },
      { label: "BBA / B.Tech / B.Com", description: "From top institutions; join entrepreneurship cells (E-Cell)" },
      { label: "MBA / Early Career", description: "IIM/ISB MBA or work at a startup to learn operations" },
      { label: "Ideation & MVP", description: "Identify a problem; build and test a Minimum Viable Product" },
      { label: "Funding", description: "Angel investors, Seed funding, Series A — pitch to VCs" },
      { label: "Scale to Unicorn", description: "Grow team, expand market, potentially IPO or acquisition" },
    ],
  },
  {
    id: "fashion-designer",
    name: "Fashion Designer",
    salutation: "",
    backgroundPrompt: "high-fashion design studio in Mumbai with Indian couture, fabric swatches and international runway aesthetics",
    roadmap: [
      { label: "10th Standard", description: "Develop sketching, art, and design skills early" },
      { label: "12th — Any Stream", description: "Prepare for NIFT or Pearl Academy entrance exams" },
      { label: "NIFT Entrance Exam", description: "Creative Ability Test (CAT) + General Ability Test (GAT)" },
      { label: "B.Des Fashion Design — 4 Years", description: "From NIFT, Pearl Academy, Symbiosis, FDDI" },
      { label: "Internship / Assisting", description: "Work under designers like Manish Malhotra, Sabyasachi, Tarun Tahiliani" },
      { label: "M.Des (Optional)", description: "From NID or international schools like Parsons, Central Saint Martins" },
      { label: "Own Label / Brand", description: "Launch your label; show at Lakme Fashion Week or Amazon Fashion Week India" },
    ],
  },
  {
    id: "film-director",
    name: "Film Director",
    salutation: "",
    backgroundPrompt: "professional Bollywood film set with cinema cameras, dramatic lighting rigs and a bustling crew",
    roadmap: [
      { label: "10th Standard", description: "Watch films analytically; develop storytelling instincts" },
      { label: "12th — Any Stream", description: "Prepare for FTII or Whistling Woods entrance" },
      { label: "Film School", description: "FTII Pune, Whistling Woods, SRFTI, Symbiosis Film Institute" },
      { label: "Direction / Screenwriting Course", description: "Learn cinematography, editing, and screenplay structure" },
      { label: "Assistantship", description: "Work as AD / 2nd AD under established Bollywood directors" },
      { label: "Short Films / Web Series", description: "Build portfolio on OTT platforms and YouTube" },
      { label: "Feature Film Debut", description: "Pitch to producers, secure backing, direct your first film" },
    ],
  },
  {
    id: "journalist",
    name: "Journalist",
    salutation: "",
    backgroundPrompt: "modern newsroom with multiple live screens, broadcast cameras and breaking news ticker displays",
    roadmap: [
      { label: "10th Standard", description: "Read newspapers daily; practise writing and debating" },
      { label: "12th — Arts/Humanities", description: "English, History, Political Science are most helpful" },
      { label: "BA Journalism / Mass Comm", description: "From IIMC, AJK MCRC, Symbiosis, Christ University" },
      { label: "IIMC Entrance / PG Diploma", description: "Post Graduate Diploma in Journalism from IIMC Delhi" },
      { label: "Internships", description: "Intern at newspapers, TV channels, or digital media outlets" },
      { label: "Specialisation", description: "Political, Business, Sports, or Investigative Journalism" },
      { label: "Senior Correspondent / Editor", description: "Build credibility through bylines, scoops, and reputation" },
    ],
  },
  {
    id: "judge",
    name: "Judge",
    salutation: "Hon.",
    backgroundPrompt: "prestigious Indian High Court with law books, scales of justice and colonial-era courtroom architecture",
    roadmap: [
      { label: "10th Standard", description: "Develop logical reasoning, debating, and analytical skills" },
      { label: "12th — Any Stream", description: "Arts/Commerce preferred; prepare for CLAT" },
      { label: "CLAT / AILET Entrance", description: "Common Law Admission Test for National Law Universities" },
      { label: "BA LLB — 5 Years", description: "From NLSIU Bangalore, NLU Delhi, NALSAR, or other NLUs" },
      { label: "Bar Council Enrolment", description: "Register with State Bar Council and Bar Council of India" },
      { label: "Legal Practice — 7–10 Years", description: "Build courtroom experience and reputation as an advocate" },
      { label: "Judicial Services / Elevation", description: "District Judge exam or elevation via Bar recommendation to High Court" },
    ],
  },
  {
    id: "lawyer",
    name: "Lawyer",
    salutation: "Adv.",
    backgroundPrompt: "modern law firm in Mumbai with Indian law books, courtroom aesthetics and Lady Justice sculpture",
    roadmap: [
      { label: "10th Standard", description: "Develop debating, logical reasoning, and communication skills" },
      { label: "12th — Any Stream", description: "Arts or Commerce preferred; prepare for CLAT/AILET" },
      { label: "CLAT / AILET / State Law Entrance", description: "Top NLUs via CLAT; DU and BHU via their own exams" },
      { label: "BA LLB / BBA LLB — 5 Years", description: "Integrated course from NLU, GLC Mumbai, or Symbiosis" },
      { label: "OR LLB — 3 Years", description: "After any graduation; from DU Faculty of Law or GLC Mumbai" },
      { label: "Bar Council Enrolment", description: "Register with State Bar Council to commence legal practice" },
      { label: "LLM / Specialisation (Optional)", description: "Corporate Law, Criminal Law, IPR, or Constitutional Law" },
    ],
  },
  {
    id: "marine-engineer",
    name: "Marine Engineer",
    salutation: "Er.",
    backgroundPrompt: "advanced merchant ship engine room with massive turbines and futuristic maritime control systems on the open sea",
    roadmap: [
      { label: "10th Standard", description: "Focus on Physics and Mathematics" },
      { label: "12th — PCM", description: "Physics, Chemistry, Mathematics with minimum 60%" },
      { label: "Entrance Exam", description: "IMU CET (Indian Maritime University Common Entrance Test)" },
      { label: "B.E. Marine Engineering — 4 Years", description: "From IMU, DMET, or MERI approved maritime institutes" },
      { label: "Pre-Sea Training", description: "Onboard training on merchant ships as Trainee Marine Engineer" },
      { label: "STCW Certification", description: "International maritime certification (Standards of Training, Certification and Watchkeeping)" },
      { label: "4th Engineer → Chief Engineer", description: "Progress through Class 4, 3, 2, 1 Competency certificates" },
    ],
  },
  {
    id: "nurse",
    name: "Nurse",
    salutation: "",
    backgroundPrompt: "advanced hospital ICU with AI-assisted patient monitoring systems and modern healthcare technology in India",
    roadmap: [
      { label: "10th Standard", description: "Science stream with Biology preferred" },
      { label: "12th — PCB", description: "Physics, Chemistry, Biology with minimum 45–50%" },
      { label: "B.Sc Nursing — 4 Years", description: "From AIIMS, PGIMER, or state nursing colleges" },
      { label: "Licensure Exam", description: "Register with State Nursing Council for legal practice" },
      { label: "Clinical Experience", description: "Work in government or private hospitals; build specialty" },
      { label: "M.Sc Nursing (Optional)", description: "Specialise in Critical Care, Paediatric, or Community Nursing" },
      { label: "Senior Nurse / Nurse Practitioner", description: "Progress to Nursing Superintendent or Nurse Practitioner" },
    ],
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    salutation: "",
    backgroundPrompt: "futuristic pharmaceutical research laboratory with drug synthesis equipment and molecular models",
    roadmap: [
      { label: "10th Standard", description: "Focus on Science and Chemistry" },
      { label: "12th — PCB / PCM", description: "Physics, Chemistry, Biology or Mathematics" },
      { label: "D.Pharm — 2 Years", description: "Diploma in Pharmacy for entry-level pharmacy practice" },
      { label: "B.Pharm — 4 Years", description: "From top pharmacy colleges, IITs, or BITS" },
      { label: "PCI Registration", description: "Register with Pharmacy Council of India to practise legally" },
      { label: "M.Pharm (Optional)", description: "Specialise in Clinical Pharmacy or Drug Regulatory Affairs" },
      { label: "Pharm.D (Optional)", description: "Doctor of Pharmacy — 6-year professional degree" },
    ],
  },
  {
    id: "pilot",
    name: "Pilot",
    salutation: "Capt.",
    backgroundPrompt: "commercial aircraft cockpit with advanced avionics displays, Indian airports skyline visible through windows",
    roadmap: [
      { label: "10th Standard", description: "Focus on Physics and Mathematics; obtain Class 2 Medical Certificate" },
      { label: "12th — PCM", description: "Physics, Chemistry, Mathematics with minimum 50%" },
      { label: "Class 1 Medical Certificate", description: "Mandatory DGCA authorised medical examination" },
      { label: "Student Pilot Licence (SPL)", description: "Basic flight training on single-engine aircraft" },
      { label: "Private Pilot Licence (PPL)", description: "Minimum 40 flight hours required" },
      { label: "Commercial Pilot Licence (CPL)", description: "Minimum 200 hours; clear all DGCA written exams" },
      { label: "Type Rating", description: "Training on commercial aircraft — A320 or Boeing 737" },
      { label: "First Officer → Captain", description: "Fly with Indian airlines; 1500+ flight hours required for command" },
    ],
  },
  {
    id: "police-officer",
    name: "Police Officer",
    salutation: "ACP",
    backgroundPrompt: "modern Indian police command centre with surveillance systems and IPS insignia against city skyline",
    roadmap: [
      { label: "10th Standard", description: "Build physical fitness; NCC participation is an advantage" },
      { label: "12th — Any Stream", description: "Begin UPSC/PSC preparation; focus on current affairs" },
      { label: "Graduation — Any Discipline", description: "Required for IPS; state police recruitment may need 12th+" },
      { label: "UPSC Civil Services (IPS)", description: "Clear Prelims, Mains, and UPSC Personality Test" },
      { label: "OR State PSC Exam", description: "State Police Service Exam for Deputy SP level direct entry" },
      { label: "Police Training Academy", description: "SVP National Police Academy, Hyderabad for IPS officers" },
      { label: "ASP → SP → DIG → IG → DGP", description: "Career progression within the Indian Police Service" },
    ],
  },
  {
    id: "professor",
    name: "Professor",
    salutation: "Prof.",
    backgroundPrompt: "prestigious Indian university amphitheatre lecture hall with holographic projections and modern smart campus",
    roadmap: [
      { label: "10th Standard", description: "Identify your subject passion early; read beyond textbooks" },
      { label: "12th — Relevant Stream", description: "Choose stream based on intended subject of teaching" },
      { label: "Bachelor's Degree — 3–4 Years", description: "Honours in chosen subject from a top university" },
      { label: "Master's Degree — 2 Years", description: "MA / M.Sc / M.Tech from IIT, IISc, DU, JNU, or TIFR" },
      { label: "NET / GATE Qualification", description: "UGC-NET for non-technical; GATE for technical subjects" },
      { label: "PhD — 3–5 Years", description: "Research from IIT, IISc, IIM, or international universities" },
      { label: "Assistant → Associate → Full Professor", description: "Career progression under 7th Pay Commission academic hierarchy" },
    ],
  },
  {
    id: "psychologist",
    name: "Psychologist",
    salutation: "Dr.",
    backgroundPrompt: "modern psychology practice with calming aesthetics, brain models and a serene therapy consultation room",
    roadmap: [
      { label: "10th Standard", description: "Focus on Biology and Social Sciences; develop empathy" },
      { label: "12th — Arts / Science", description: "Biology, Sociology, and Psychology if available" },
      { label: "BA / B.Sc Psychology — 3 Years", description: "From DU, Christ University, Fergusson College, or SNDT" },
      { label: "MA / M.Sc Psychology — 2 Years", description: "Specialisation: Clinical, Counselling, or Industrial Psychology" },
      { label: "RCI Registration (Clinical)", description: "Rehabilitation Council of India registration for clinical practice" },
      { label: "M.Phil Clinical Psychology — 2 Years", description: "Mandatory to practise as a Clinical Psychologist in India" },
      { label: "PhD (Optional)", description: "For academic research or advanced clinical specialisation" },
    ],
  },
  {
    id: "scientist",
    name: "Scientist",
    salutation: "Dr.",
    backgroundPrompt: "cutting-edge Indian research laboratory with advanced scientific equipment, breakthrough experiments and journal publications",
    roadmap: [
      { label: "10th Standard", description: "Excel in Science and Mathematics; join Science Olympiads" },
      { label: "12th — PCM / PCB", description: "Depending on science branch; target 90%+ marks" },
      { label: "KVPY / IIT JAM / JEST", description: "Kishore Vaigyanik Protsahan Yojana for scholarship & institute entry" },
      { label: "B.Sc / B.Tech — 3–4 Years", description: "From IITs, IISc, IISER, or top central universities" },
      { label: "M.Sc / M.Tech — 2 Years", description: "Specialise in Physics, Chemistry, Biology, or Materials Science" },
      { label: "PhD — 4–6 Years", description: "From IISc Bangalore, TIFR, IITs, or CSIR national labs" },
      { label: "Scientist Position", description: "Join ISRO, DRDO, CSIR, DAE, or pursue academia" },
    ],
  },
  {
    id: "software-engineer",
    name: "Software Engineer",
    salutation: "Er.",
    backgroundPrompt: "futuristic tech company campus in Bengaluru with holographic code interfaces and innovation hub",
    roadmap: [
      { label: "10th Standard", description: "Start coding! Python, web development, or app building" },
      { label: "12th — PCM / CS", description: "Mathematics and Computer Science; start competitive programming" },
      { label: "Entrance Exam", description: "JEE for IIT/NIT; BITSAT, KCET, or private university exams" },
      { label: "B.Tech CSE / B.E. IT — 4 Years", description: "From IIT, NIT, BITS, VIT, SRM, or IIIT" },
      { label: "Internships & Projects", description: "LeetCode, GitHub projects, hackathons, open-source contributions" },
      { label: "Campus / Off-Campus Placements", description: "Join FAANG, Indian unicorns, or product-first companies" },
      { label: "M.Tech / MS / MBA (Optional)", description: "GATE for M.Tech, GRE for MS abroad, or CAT for MBA" },
    ],
  },
  {
    id: "space-scientist",
    name: "Space Scientist",
    salutation: "Dr.",
    backgroundPrompt: "ISRO mission control centre with rocket launches, satellite systems and the Chandrayaan mission displays",
    roadmap: [
      { label: "10th Standard", description: "Excel in Mathematics and Science; join astronomy clubs" },
      { label: "12th — PCM", description: "Physics and Mathematics are critical; target 95%+" },
      { label: "B.Tech / B.Sc (Physics/Math)", description: "From IIT, NIT, or IIST (Indian Institute of Space Science & Technology)" },
      { label: "IIST — Direct ISRO Track", description: "B.Tech from IIST guarantees a posting at ISRO/DOS" },
      { label: "M.Tech / M.Sc", description: "Space Technology, Aerospace Engineering, or Astrophysics" },
      { label: "PhD / ISRO Scientist Exam", description: "ISRO Centralised Recruitment Board (ICRB) exam for Scientist/Engineer" },
      { label: "Scientist at ISRO", description: "Contribute to Chandrayaan, Gaganyaan, Aditya-L1, and future Mars missions" },
    ],
  },
  {
    id: "teacher",
    name: "Teacher",
    salutation: "",
    backgroundPrompt: "modern smart classroom in India with interactive whiteboards, engaged students and a vibrant learning environment",
    roadmap: [
      { label: "10th Standard", description: "Identify your subject passion; develop communication skills" },
      { label: "12th — Relevant Stream", description: "Score well in your chosen subject" },
      { label: "Bachelor's Degree — 3–4 Years", description: "BA / B.Sc / B.Com with Honours in chosen subject" },
      { label: "B.Ed — 2 Years", description: "Bachelor of Education from RTE-approved institution" },
      { label: "CTET / State TET", description: "Central Teacher Eligibility Test — Paper I (primary) & Paper II (secondary)" },
      { label: "TGT / PGT Recruitment", description: "Kendriya Vidyalaya / NVS / State Board teacher recruitment" },
      { label: "Senior Teacher / HOD / Principal", description: "Progress through department headship and school administration" },
    ],
  },
];

export const OTHER_CAREER: Career = {
  id: "other",
  name: "Other",
  salutation: "",
  backgroundPrompt: "professional modern workplace setting in urban India",
  roadmap: [
    { label: "Build Your Foundation", description: "Complete schooling with strong academic fundamentals" },
    { label: "Identify Your Passion", description: "Research career options, take aptitude tests, and find your calling" },
    { label: "Higher Education", description: "Pursue a relevant degree or diploma program from a recognised institution" },
    { label: "Gain Experience", description: "Internships, apprenticeships, or entry-level work in your chosen field" },
    { label: "Skill Development", description: "Continuous learning, professional certifications, and upskilling" },
    { label: "Career Growth", description: "Rise through expertise, networking, mentorship, and consistency" },
  ],
};

export function getSalutation(career: Career): string {
  return career.salutation;
}

export function getDisplayName(career: Career, customCareer?: string): string {
  if (career.id === "other" && customCareer) return customCareer;
  return career.name;
}

export function getImagePrompt(career: Career, customCareer?: string): string {
  const name = getDisplayName(career, customCareer);
  const bg = career.backgroundPrompt;
  return (
    `A hyper-realistic, cinematic, 8K resolution professional portrait photograph of this exact person ` +
    `as a highly successful ${name} in modern India, approximately 10 years older than in the reference photo. ` +
    `The person must retain their facial features, skin tone, eye shape, and identity from the reference image. ` +
    `They are wearing a sleek, futuristic professional uniform appropriate for a ${name}. ` +
    `The background shows ${bg}. ` +
    `Dramatic professional studio lighting with soft depth-of-field bokeh. ` +
    `Inspirational, aspirational magazine-cover quality. Ultra-detailed, photorealistic.`
  );
}
