export type Offering = {
  slug: string;
  title: string;
  short: string;
  format?: string;
  tone: "rose" | "sea" | "sky" | "sun";
  pullquote?: string;
  body: string[];
  details?: string[];
  media: {
    assetId: string;
    description: string;
    altGuidance: string;
    aspectRatio: string;
    caption?: string;
  };
};

export const offerings: Offering[] = [
  {
    slug: "defining-tantra",
    title: "Defining Tantra in Four Weeks",
    short: "A four-part series examining Tantra's origins, purpose, evolution, and practical ways to bring it into daily life.",
    format: "Four weekly sessions",
    tone: "sky",
    body: [
      "A four-part series examining the origins of Tantra, its purpose, how it continues to evolve, and practical ways to implement it in daily life."
    ],
    details: [
      "Week 1: Tantric origins, gurus, and neo-tantra vs. classical tantra",
      "Week 2: Chakra systems, nadis, kundalini, masculine and feminine, Shiva and Shakti",
      "Week 3: Tantric yoga, the yogic paths, yamas and niyamas, kriyas, mantra, bandha, pranayama, and samadhi",
      "Week 4: White vs. red Tantric paths, and integrating Tantra into daily life in ways that are sustainable and practical"
    ],
    media: {
      assetId: "tantra-series",
      description: "Warm, intimate teaching setting with a notebook, tea, soft natural light, and subtle Sacred Bloom color accents. Avoid sexualized Tantra imagery.",
      altGuidance: "Describe the actual teaching scene and objects shown; do not use keyword strings.",
      aspectRatio: "4:3",
      caption: "Teaching image for the four-week Tantra series."
    }
  },
  {
    slug: "classical-yoga",
    title: "Classical Yoga",
    short: "A practice that looks beyond asana into mantra, mudra, pranayama, meditation, and the traditions that hold yoga together.",
    format: "Online weekly",
    tone: "sea",
    pullquote: "So much of traditional yoga is lost when making the journey to the West.",
    body: [
      "So much of traditional yoga is lost when making the journey to the West. Asana is the core which holds it all together, but it is not all that exists. This practice focuses on traditional, ancient exercises to properly prepare the body, including meditation, mudra, pranayama, mantra, asana, and a final meditation.",
      "We begin each lesson with mantra, utilizing the vibrations from within to awaken the body. We then choose a mudra to assist us with our intention for the practice. Mudra is translated as gesture; when we make certain gestures with our hands, they can affect the flow of life-force energy called prana. As we move through our asanas, we become aware of the connection that touches all that is. We finish with pranayama, a yogic breathwork practice, before meditating together as one."
    ],
    media: {
      assetId: "classical-yoga",
      description: "Quiet yoga practice scene focused on hands, breath, mat, and ritual objects rather than athletic poses. Natural coastal morning light.",
      altGuidance: "Describe the posture or ritual objects actually visible.",
      aspectRatio: "4:3",
      caption: "Classical Yoga practice image."
    }
  },
  {
    slug: "feminine-embodiment-circle",
    title: "Feminine Embodiment Circle",
    short: "A ceremony blending traditions of women from around the world with meditation, breathwork, yoga, sound, reflection, and community.",
    format: "Monthly online; private events available",
    tone: "rose",
    pullquote: "We gather together to focus on inner alignment and community connection with Mother Earth.",
    body: [
      "A ceremony which blends the traditions of women from around the world. We gather together to focus on inner alignment and community connection with Mother Earth. This practice weaves together meditation, breathwork, yoga, sound healing, and reflective practices to support release, renewal, and rebalancing.",
      "This gathering meets online monthly, and is also offered as a private event for birthdays and special occasions. When booked privately, a tea ceremony may be included to open the circle."
    ],
    media: {
      assetId: "feminine-circle",
      description: "Small circle setting with tea, cushions, flowers, bowls, and an intimate ceremonial atmosphere. No staged 'goddess' stock photography.",
      altGuidance: "Describe the gathering setup and visible ritual objects.",
      aspectRatio: "4:3",
      caption: "Feminine Embodiment Circle."
    }
  },
  {
    slug: "aura-cleansing-with-sound",
    title: "Aura Cleansing with Sound",
    short: "A seated meditation followed by three rounds of singing bowls held around the body with attention to tone, frequency, and the chakra system.",
    format: "Private session",
    tone: "sun",
    body: [
      "We begin this practice in an upright seated meditation. Once grounded, singing bowls are used to purify the auric field with sound. The process is repeated through three rounds, holding the bowls before each chakra and focusing on tone and frequency as part of the cleansing practice.",
      "Sage or palo santo may be used. If you have sensitivities to smoke, please let me know before we begin."
    ],
    media: {
      assetId: "aura-cleansing",
      description: "Close, tactile image of Tibetan or Himalayan singing bowls arranged beside a seated meditation space; soft smoke only if appropriate.",
      altGuidance: "Describe the bowls and meditation setting without making health claims.",
      aspectRatio: "4:3",
      caption: "Sound bowls used in the aura-cleansing practice."
    }
  },
  {
    slug: "ritual-of-rest",
    title: "Ritual of Rest",
    short: "Tea, quiet conversation, meditation, breathwork, Tibetan singing bowls, aromatherapy, and energy work arranged around deep rest.",
    format: "Private; small-group format can be discussed",
    tone: "rose",
    pullquote: "We ease our way into this process slowly.",
    body: [
      "When the body reaches a state of deep relaxation, there can be space to step away from the constant stress, stimulation, and adrenaline of daily life. During this time together, we set that aside to create space for the body to come home to itself.",
      "We ease our way into this process slowly, beginning with a shared cup of herbal tea and time to simply be together. We may sit in comfortable silence or share conversation, allowing our nervous systems to gently co-regulate before beginning the practice. From there, we move into meditation and light breathwork before settling onto the massage table for the heart of the session.",
      "I studied Tibetan singing bowl massage in Nepal. In this practice, sound and vibration are directed with care around the body. The session then flows into a unique energy-healing practice, with aromatherapy woven throughout to engage the senses and maintain an intentional atmosphere.",
      "As we gradually return to the present moment, another cup of tea is offered to help ground the energy back into the body."
    ],
    media: {
      assetId: "ritual-of-rest",
      description: "Massage-table or floor-rest setting with herbal tea, singing bowls, linen, aromatherapy oils, and warm low natural light.",
      altGuidance: "Describe the actual rest setting and objects; avoid promises of medical outcomes.",
      aspectRatio: "4:3",
      caption: "Ritual of Rest setting."
    }
  },
  {
    slug: "yoga-nidra-with-sound",
    title: "Yoga Nidra with Sound Healing",
    short: "A guided yogic-sleep practice that invites the body to soften while maintaining relaxed awareness, then closes with sound.",
    format: "Private and group sessions",
    tone: "sky",
    pullquote: "We invite the body to soften while maintaining a relaxed awareness.",
    body: [
      "Yoga Nidra is an ancient practice that offers students the ability to find deep rest. Also called yogic sleep, it is a guided meditation practiced while lying flat on your mat in as comfortable a position as possible.",
      "We invite the body to soften while maintaining a relaxed awareness. We close the practice with the resonance of Tibetan singing bowls, bells, flutes, and other instruments to support the journey toward peace, rest, and reflection.",
      "This practice is offered individually as well as in group settings."
    ],
    media: {
      assetId: "yoga-nidra",
      description: "Restorative floor setup with mat, bolsters, blanket, eye pillow, singing bowls, bells, and flute nearby.",
      altGuidance: "Describe the resting setup and instruments shown.",
      aspectRatio: "4:3",
      caption: "Yoga Nidra with sound."
    }
  },
  {
    slug: "yin-energy-healing-aromatherapy",
    title: "Yin with Energy Healing + Aromatherapy",
    short: "Slow, floor-based Yin postures paired with aromatherapy, hands-on adjustments, and energy work.",
    format: "Private session",
    tone: "sea",
    pullquote: "While Yang represents a fiery, masculine energy, its Yin counterpart is the passive, feminine presence that simply allows.",
    body: [
      "Slow down and settle in. In this class, you'll move through gentle, floor-based postures, holding each one long enough for your body to soften and release. Yin yoga combines postures found in Hatha yoga from India with energetic philosophy and Daoist teachings from China. While Yang represents a fiery, masculine energy, its Yin counterpart is the passive, feminine presence that simply allows.",
      "Along the way, I offer hands-on adjustments infused with calming aromatherapy oils and guided by energy healing, to help you feel supported and more at ease in your body."
    ],
    media: {
      assetId: "yin-energy",
      description: "Low, grounded Yin pose with bolster and blanket; nearby essential oils and subtle hands-on support. Avoid clinical or spa clichés.",
      altGuidance: "Describe the pose, support props, and aromatherapy objects actually visible.",
      aspectRatio: "4:3",
      caption: "Yin with energy healing and aromatherapy."
    }
  }
];

export const offeringBySlug = Object.fromEntries(
  offerings.map((offering) => [offering.slug, offering])
);
