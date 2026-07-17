export interface SportDetail {
  slug: string;
  name: string;
  heroImage: string;
  quote: string;
  intro: string;
  history: string[];
  howToPlay: {
    objective: string;
    keyRules: string[];
  };
  equipment: string[];
  etiquette: string;
  faqs: { question: string; answer: string }[];
}

const generateDefaultSport = (name: string, slug: string): SportDetail => ({
  slug,
  name,
  heroImage: `/images/${slug}.png`,
  quote: `"${name} represents the pinnacle of tradition, discipline, and aristocratic excellence."`,
  intro: `The distinguished sport of ${name} combines precision, strategy, and centuries of tradition.`,
  history: [
    `The origins of ${name} are deeply rooted in aristocratic traditions, evolving from a pastime of the elite to a globally recognized symbol of prestige.`,
    "Over the centuries, the sport was refined in the private estates and exclusive clubs of Europe, maintaining a strict adherence to its founding principles.",
    "Today, it stands as a testament to the enduring appeal of heritage sportsmanship, celebrating grace under pressure."
  ],
  howToPlay: {
    objective: "To demonstrate superior skill, strategy, and physical mastery over the opponent or the elements.",
    keyRules: [
      "Strict adherence to the traditional rules established by the governing bodies.",
      "Matches are overseen by umpires or judges whose decisions are final and unquestionable.",
      "Penalties are severely enforced for any breach of sportsmanship or technical fouls."
    ]
  },
  equipment: [
    "Bespoke, handcrafted equipment tailored to the exact specifications of the individual athlete.",
    "Apparel constructed from premium, traditional materials designed for both performance and elegance.",
    "Specialized footwear and safety gear appropriate to the demands of the sport."
  ],
  etiquette: "The highest standards of sportsmanship are expected at all times. This includes unwavering respect for opponents, officials, and the grounds. Unseemly displays of emotion or unsportsmanlike conduct are strictly forbidden.",
  faqs: [
    { question: `Why is ${name} considered an elite sport?`, answer: `${name} requires an extraordinary combination of strategic intellect, dedicated training, and significant resources, naturally drawing a demographic of highly driven and successful individuals.` },
    { question: `What can members learn from the history of ${name}?`, answer: `Our digital archives explore how ${name} evolved from aristocratic pastimes into modern tests of character, teaching profound lessons in discipline and long-term strategy.` }
  ]
});

export const sportsData: Record<string, SportDetail> = {
  "golf": {
    slug: "golf",
    name: "Golf",
    heroImage: "/images/golf.png",
    quote: "\"Golf is a game whose aim is to hit a very small ball into an even smaller hole, with weapons singularly ill-designed for the purpose.\"",
    intro: "A distinguished game of precision, strategy, and emotional control, played over 18 holes of meticulously manicured terrain.",
    history: [
      "Modern golf originated in 15th-century Scotland, though similar games date back to the Roman Empire.",
      "The first recorded game of golf was played at St Andrews in 1552, a course that remains the spiritual home of the sport today.",
      "By the late 19th century, golf had become the pastime of choice for the British aristocracy and wealthy industrialists, cementing its status as a premium luxury sport."
    ],
    howToPlay: {
      objective: "To complete the course of 18 holes using the fewest possible strokes.",
      keyRules: [
        "The ball must be played as it lies; you cannot move or improve its position.",
        "A player is allowed a maximum of 14 clubs in their bag.",
        "Penalty strokes are added for hitting out of bounds, into water hazards, or losing a ball."
      ]
    },
    equipment: [
      "A set of up to 14 clubs (woods, irons, wedges, and a putter) crafted from advanced alloys and carbon fiber.",
      "Premium golf balls engineered for aerodynamic flight.",
      "Spiked or spikeless leather golf shoes for stability.",
      "A tailored glove, typically made of Cabretta leather, for grip."
    ],
    etiquette: "Golf relies heavily on the honor system. Players must remain completely silent while others are hitting, repair their divots on the fairway and pitch marks on the green, and maintain a brisk pace of play. Dress codes typically require collared shirts and tailored trousers.",
    faqs: [
      { question: "Why is Golf the ultimate networking sport?", answer: "Golf inherently requires patience, strategic thinking, and emotional control—traits highly valued in global commerce. A four-hour round provides a unique, uninterrupted environment for executives to bond and assess character." },
      { question: "What historical knowledge does the Society offer on Golf?", answer: "Members have access to our definitive guides detailing the evolution of course architecture, the untold history of St Andrews, and the psychological strategies employed by historical champions." }
    ]
  },
  "polo": {
    slug: "polo",
    name: "Polo",
    heroImage: "/images/polo.png",
    quote: "\"A polo handicap is your passport to the world.\"",
    intro: "Often called 'The Sport of Kings', polo is a breathtaking display of equestrian mastery, speed, and teamwork.",
    history: [
      "Polo is arguably the oldest recorded team sport in history, originating in ancient Persia (modern Iran) around the 6th century BC.",
      "Initially a training game for cavalry units, usually the king's guard or other elite troops, it eventually became a Persian national sport played extensively by the nobility.",
      "British military officers brought the game from India to the West in the mid-19th century, establishing the Hurlingham Polo Association which formalized the modern rules."
    ],
    howToPlay: {
      objective: "To score goals by driving a small hard ball into the opposing team's goal using a long-handled mallet while riding horseback.",
      keyRules: [
        "Matches are divided into periods called 'chukkas', each lasting 7 minutes. A game typically consists of 4 to 8 chukkas.",
        "The 'Line of the Ball' is the most critical rule for safety. It is the imaginary line created by the ball's travel, and players cannot cross it if it endangers another player.",
        "Teams change ends after every goal to account for wind and turf conditions."
      ]
    },
    equipment: [
      "Polo ponies (specialized horses bred for agility and speed), typically requiring a 'string' of several horses per player per match.",
      "A bamboo or composite mallet with a hardwood head.",
      "A reinforced helmet, often with a face guard.",
      "Knee guards and specialized leather riding boots."
    ],
    etiquette: "Polo maintains a highly social and aristocratic culture. The tradition of 'divot stomping' during halftime invites spectators onto the field to replace torn turf while socializing. Elegance in dress is expected from spectators, often featuring summer suits, sundresses, and extravagant hats.",
    faqs: [
      { question: "Why is Polo called 'The Sport of Kings'?", answer: "Originating as a cavalry training exercise for ancient Persian royalty, Polo has always been synonymous with military elite and aristocracy due to the immense resources required to maintain a string of elite horses." },
      { question: "How does the Society cover the global Polo circuit?", answer: "Our editorial team provides exclusive coverage and historical context for the world's most prestigious tournaments, from the high-goal season in Wellington to the British open at Cowdray Park." }
    ]
  },
  "lawn-tennis": {
    slug: "lawn-tennis",
    name: "Lawn Tennis",
    heroImage: "/images/vintage-tennis.png",
    quote: "\"Tennis is a perfect combination of violent action taking place in an atmosphere of total tranquility.\"",
    intro: "Pristine white attire, perfectly cut grass courts, and a heritage of sportsmanship. Step into the timeless world of traditional tennis.",
    history: [
      "While 'real tennis' was played by European royalty for centuries indoors, modern 'lawn tennis' was patented in 1874 by Major Walter Clopton Wingfield in Wales.",
      "The All England Croquet Club adopted the sport and held the first Wimbledon Championship in 1877 to raise money for a new roller for their croquet lawns.",
      "Lawn tennis quickly became a staple of Victorian garden parties and exclusive country clubs, retaining its upper-class associations to this day."
    ],
    howToPlay: {
      objective: "To hit the ball over the net into the opponent's court in such a way that they cannot return it.",
      keyRules: [
        "Matches are typically best of three or five sets. A set is won by the first player to win six games with a margin of at least two.",
        "The ball must bounce only once on the receiver's side before being returned, or it can be volleyed out of the air.",
        "Scoring progresses from Love (0) to 15, 30, 40, and Game."
      ]
    },
    equipment: [
      "A tennis racquet crafted from graphite or carbon fiber, strung to precise tensions.",
      "Pressurized felt-covered rubber tennis balls.",
      "Specialized grass-court tennis shoes with dimpled soles to prevent slipping without tearing the turf.",
      "Traditional all-white athletic apparel (strictly enforced at venues like Wimbledon)."
    ],
    etiquette: "Silence is strictly mandated during points. Players are expected to respect the umpire's decisions without outburst. At exclusive clubs, the 'all-white' clothing rule is not merely a suggestion, but a requirement representing the purity and tradition of the sport.",
    faqs: [
      { question: "What is the historical significance of the all-white dress code?", answer: "Dating back to the 1800s, white was worn to minimize the visibility of sweat, which was considered unseemly for high society. Today, it stands as a visual testament to the purity, tradition, and strict etiquette of the game." },
      { question: "Who are the most notable historical patrons of Lawn Tennis?", answer: "Our archives detail the profound influence of British Royalty and European aristocrats who transformed it from a garden party pastime into a globally revered test of physical endurance." }
    ]
  },
  "fencing": {
    slug: "fencing",
    name: "Fencing",
    heroImage: "/images/fencing.png",
    quote: "\"Fencing is a game of physical chess, requiring the grace of a dancer and the mind of a tactician.\"",
    intro: "The modern evolution of aristocratic dueling, fencing is an elegant, lightning-fast combat sport.",
    history: [
      "Fencing evolved from the European practice of dueling with swords to settle disputes among the nobility.",
      "During the 18th century, the shift toward non-lethal sport fencing occurred with the invention of the foil—a practice weapon with a blunted tip.",
      "It is one of the few sports to have been featured in every modern Olympic Games since 1896, retaining its French terminology and chivalric traditions."
    ],
    howToPlay: {
      objective: "To score points by landing valid touches on the opponent's target area with the weapon.",
      keyRules: [
        "There are three weapons: Foil (light thrusting, torso target), Epee (heavy thrusting, entire body target), and Sabre (cutting/thrusting, upper body target).",
        "In foil and sabre, the rule of 'Right of Way' dictates that the attacker who initiates the action has priority to score.",
        "Bouts are typically fought to 15 touches over three 3-minute periods."
      ]
    },
    equipment: [
      "The weapon (Foil, Epee, or Sabre) wired for electronic scoring.",
      "A protective wire-mesh mask and a kevlar-reinforced white jacket and breeches.",
      "A lamé (electrically conductive over-jacket) for foil and sabre.",
      "A specialized padded glove for the weapon hand."
    ],
    etiquette: "Fencing is steeped in chivalry. Fencers must salute their opponent, the referee, and the audience with their weapon before putting on their masks. After the final touch, fencers must remove their masks, salute again, and shake hands with their non-weapon hand.",
    faqs: [
      { question: "How does Fencing relate to modern strategic thinking?", answer: "Often called 'physical chess', Fencing demands split-second decision making, anticipation, and the ability to read an opponent's psychological state—skills directly translatable to high-stakes negotiations." },
      { question: "What is the difference between classical and sport fencing?", answer: "Our archives deeply explore the martial roots of classical fencing, which treated the bout as a matter of life and death, versus modern Olympic sport fencing which focuses on electronic scoring and extreme athleticism." }
    ]
  },
  "sailing": {
    slug: "sailing",
    name: "Sailing",
    heroImage: "/images/sailing.png",
    quote: "\"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.\"",
    intro: "A harmonious yet demanding battle with the elements, requiring unparalleled navigational skill and teamwork.",
    history: [
      "While sailing has been used for transport for millennia, recreational sailing and yacht racing began in the 17th century in the Netherlands and was brought to England by King Charles II.",
      "The establishment of the Royal Yacht Squadron in 1815 cemented sailing as the ultimate pursuit of the wealthy.",
      "The America's Cup, first contested in 1851, remains the oldest international sporting trophy and the pinnacle of competitive sailing."
    ],
    howToPlay: {
      objective: "To navigate a course marked by buoys utilizing only the power of the wind in the shortest possible time.",
      keyRules: [
        "Right-of-way rules (e.g., starboard tack has right of way over port tack) are strictly enforced to prevent collisions.",
        "Boats must round the course marks in the designated sequence and direction.",
        "If a rule is broken, the offending boat must complete penalty turns (usually one or two 360-degree circles)."
      ]
    },
    equipment: [
      "A racing vessel (ranging from single-handed dinghies to massive multi-million dollar foiling catamarans).",
      "High-tech sails made from carbon fiber or Kevlar composites.",
      "Technical offshore foul-weather gear and specialized deck shoes.",
      "Sophisticated navigational and wind-measuring instruments."
    ],
    etiquette: "Maritime tradition dictates strict respect for the 'Captain' whose word is absolute law on board. In yacht clubs, a high standard of dress (often navy blazers and white trousers) is expected. Good seamanship requires always offering assistance to any vessel in distress, regardless of the race.",
    faqs: [
      { question: "What makes competitive sailing the ultimate test of leadership?", answer: "Offshore sailing and yacht racing require absolute synchronization of a crew under extreme, unpredictable environmental pressure, making it a pure crucible for leadership and crisis management." },
      { question: "How does the Society cover maritime heritage?", answer: "Members gain access to comprehensive histories of the world's oldest yacht clubs, the evolution of hull design, and the legendary billionaire syndicates behind the America's Cup." }
    ]
  }
};

// Fill in remaining sports with the detailed generator
[
  "horse-racing", "yachting", "croquet", "rowing", 
  "archery", "falconry", "shooting"
].forEach(slug => {
  const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  sportsData[slug] = generateDefaultSport(name, slug);
});
