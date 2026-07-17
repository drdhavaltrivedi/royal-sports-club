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
    { question: `What is the standard dress code for ${name}?`, answer: `The dress code reflects the heritage of ${name}, requiring traditional, elegant sporting attire.` },
    { question: `Do I need to own my own equipment?`, answer: `While the Club provides standard equipment, most distinguished players prefer to commission bespoke gear tailored to their exact specifications.` }
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
      { question: "What is the handicap limit to play at the Royal Estate?", answer: "To maintain the pace and quality of play, guests must possess a certified handicap of 18 or lower." },
      { question: "Are caddies mandatory?", answer: "Yes, all groups must be accompanied by one of our professional caddies who are experts in reading our greens." }
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
      { question: "Do I need to provide my own Polo ponies?", answer: "Members may board their string in our elite stables, or lease world-class ponies directly from the Club's equestrian center." },
      { question: "What is 'divot stomping'?", answer: "A traditional halftime activity where spectators are invited onto the field to press down the turf torn up by the horses' hooves, accompanied by champagne." }
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
      { question: "How strict is the all-white clothing rule?", answer: "Absolutely uncompromising. Even slight off-white or cream colors, as well as colored trims exceeding 1 centimeter, are prohibited on our grass courts." },
      { question: "Can we play on grass year-round?", answer: "Our pristine grass courts are exclusively open during the summer season to preserve their immaculate condition." }
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
      { question: "Is fencing dangerous?", answer: "Modern fencing is incredibly safe. The weapons are blunted and flexible, and our kevlar-reinforced protective gear prevents injury." },
      { question: "Do you offer classical fencing or Olympic sport fencing?", answer: "The Club teaches both the classical traditions of the duel and modern, electronically scored Olympic sport fencing." }
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
      { question: "Can I moor my yacht at the Club?", answer: "The Club maintains a private deep-water marina exclusively for members' vessels, subject to slip availability." },
      { question: "Do you offer sailing lessons?", answer: "Yes, our Master Mariners provide private instruction ranging from basic sailing to offshore racing tactics." }
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
