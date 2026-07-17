export type YogaStyle = {
  num: string;
  slug: string;
  name: string;
  sanskrit?: string;
  blurb: string;
  introduction: string;
  overview: string[];
  practice: Array<{ title: string; text: string }>;
  classExperience: string;
  goodFor: string[];
  beginWith: string[];
  pace: string;
  focus: string;
  props: string;
};

export const YOGA_STYLES: YogaStyle[] = [
  {
    num: "01",
    slug: "ashtanga",
    name: "Ashtanga",
    sanskrit: "Ashtanga Vinyasa Yoga",
    blurb: "A structured, dynamic series that builds internal heat through breath-linked movement.",
    introduction:
      "Ashtanga is a vigorous, methodical practice in which a set sequence of postures is repeated and gradually learned by heart. Its rhythm comes from joining each movement to the breath.",
    overview: [
      "The modern Ashtanga Vinyasa method was shaped in Mysore, India, by T. Krishnamacharya and his student K. Pattabhi Jois during the twentieth century. Its name draws on the older idea of yoga as an eight-limbed path, while the physical practice is known for its flowing sequences and disciplined repetition.",
      "Students begin with the Primary Series, a sequence designed to build steadiness, mobility and concentration. New postures are introduced over time rather than treating every class as a different routine. That familiarity is central to the practice: it leaves less need to watch the teacher and more room to notice breath, energy and attention.",
    ],
    practice: [
      {
        title: "A set sequence",
        text: "Sun salutations lead into standing, seated and finishing postures in a consistent order.",
      },
      {
        title: "Breath and gaze",
        text: "A steady audible breath and specific points of focus help gather attention during movement.",
      },
      {
        title: "Daily repetition",
        text: "Regular practice makes progress visible and allows familiar shapes to become more inward-looking.",
      },
    ],
    classExperience:
      "A led class moves as a group and can feel strong, rhythmic and focused. In a traditional Mysore-style room, each student works through the sequence at their own pace while the teacher offers individual guidance. Expect continuity, few long pauses and a gradual accumulation of heat.",
    goodFor: [
      "People who enjoy routine and measurable progression",
      "Students looking for a physically demanding practice",
      "Practitioners drawn to breath-led concentration",
    ],
    beginWith: [
      "Choose a beginner or introductory class before joining a full Primary Series.",
      "Let the sequence build gradually; there is no need to force range or speed.",
      "Tell the teacher about injuries, pregnancy or health concerns before practice.",
    ],
    pace: "Dynamic and continuous",
    focus: "Sequence, breath, discipline",
    props: "Traditionally minimal",
  },
  {
    num: "02",
    slug: "rocket",
    name: "Rocket",
    sanskrit: "The Rocket sequence",
    blurb: "A faster, playful evolution of Ashtanga that opens up arm balances and inversions.",
    introduction:
      "Rocket Yoga is an energetic, creative sequence rooted in Ashtanga. It keeps the breath-led momentum of its parent practice while offering more freedom to adapt, explore and move around challenging postures.",
    overview: [
      "The method was developed in San Francisco in the 1980s by Larry Schultz, who had studied Ashtanga with K. Pattabhi Jois. Schultz rearranged postures from the traditional series into accessible, fast-moving sequences. The name is said to have come from the idea that the practice could get you there faster.",
      "Rocket is not simply a race through advanced poses. Its defining quality is permission: students are encouraged to modify, skip or revisit postures rather than wait for mastery of one shape before meeting the next. This makes room for curiosity, although the pace and repeated weight-bearing can still be physically demanding.",
    ],
    practice: [
      {
        title: "Flowing foundations",
        text: "Sun salutations, standing postures and seated transitions create a familiar Ashtanga framework.",
      },
      {
        title: "Playful challenges",
        text: "Arm balances, handstands and backbends may appear, always with options and preparatory stages.",
      },
      {
        title: "Room to adapt",
        text: "The sequence is structured, but practitioners can modify and find a route that suits their body.",
      },
    ],
    classExperience:
      "Music, momentum and a light-hearted atmosphere often distinguish Rocket from more traditional Ashtanga rooms. A class usually builds quickly from sun salutations into strong standing work, balances and inversions before slowing into seated postures and rest.",
    goodFor: [
      "Experienced beginners ready for a stronger flow",
      "Students who like challenge without rigid progression",
      "Practitioners curious about balances and inversions",
    ],
    beginWith: [
      "A grounding in basic sun salutations is useful, but advanced postures are not required.",
      "Take the offered preparation rather than treating the fullest pose as the goal.",
      "Rest whenever breath loses its steady quality.",
    ],
    pace: "Fast, fluid and playful",
    focus: "Strength, transitions, possibility",
    props: "Blocks can support options",
  },
  {
    num: "03",
    slug: "yin",
    name: "Yin",
    sanskrit: "Yin Yoga",
    blurb: "Long, quiet floor-based holds that work with the connective tissues and stillness.",
    introduction:
      "Yin Yoga is a slow, floor-based practice in which postures are held for several minutes with as little muscular effort as is appropriate. Time, stillness and sensation become the main teachers.",
    overview: [
      "The contemporary style emerged through the teaching of Paulie Zink, Paul Grilley and Sarah Powers, combining long-held postures with insights from Chinese philosophy and meditation. Its name describes a quieter, more receptive quality that complements active or yang forms of movement.",
      "Rather than aiming for a single ideal alignment, Yin recognises that skeletal structure varies from person to person. Students find a sustainable edge, use support when useful, and then give the posture time. Sensation may be present, but sharp, electrical or joint pain is always a reason to adjust or come out.",
    ],
    practice: [
      {
        title: "Longer holds",
        text: "Mostly seated or reclining shapes are commonly held for three to five minutes.",
      },
      {
        title: "A functional approach",
        text: "The purpose of a shape matters more than reproducing how it looks on another body.",
      },
      {
        title: "Quiet observation",
        text: "Stillness creates space to notice sensation, thoughts and the changing quality of breath.",
      },
    ],
    classExperience:
      "A Yin room is usually quiet and unhurried. There may be only a handful of postures, with pauses between them to observe their effects. Blankets, bolsters and blocks help make stillness sustainable, and the challenge is often mental as much as physical.",
    goodFor: [
      "People seeking a counterpoint to active movement",
      "Students interested in stillness and meditation",
      "Practitioners who appreciate adaptable, floor-based work",
    ],
    beginWith: [
      "Use enough support that you can remain without bracing or holding your breath.",
      "Ease into each posture; intensity often grows with time.",
      "Move slowly when leaving a long-held shape and pause before the next one.",
    ],
    pace: "Slow and spacious",
    focus: "Stillness, sensation, patience",
    props: "Bolsters, blankets and blocks",
  },
  {
    num: "04",
    slug: "hatha",
    name: "Hatha",
    sanskrit: "Hatha Yoga",
    blurb:
      "The foundation. Steady postures and conscious breath, bringing effort and ease into balance.",
    introduction:
      "Hatha Yoga is both a broad family of physical yoga practices and, in modern studios, a name for classes that move steadily through postures with time to breathe, feel and understand.",
    overview: [
      "Hatha has deep roots in Indian yoga traditions. Historical texts describe a path using posture, breath, cleansing practices and meditation to work with body and mind. Many styles practised today, from Ashtanga to Iyengar, sit beneath this wide Hatha umbrella.",
      "In a contemporary Hatha class, postures are usually explored one at a time rather than linked in a continuous fast flow. The pause within and between shapes gives a teacher time to explain foundations and gives each student time to make intelligent choices. That makes Hatha especially welcoming for beginners, while still offering depth to experienced practitioners.",
    ],
    practice: [
      {
        title: "Steady posture",
        text: "Standing, seated and reclining shapes develop awareness through deliberate placement and time.",
      },
      {
        title: "Conscious breath",
        text: "Breath may guide movement or be practised directly through accessible pranayama techniques.",
      },
      {
        title: "Rest and attention",
        text: "Moments of stillness and a final relaxation allow the effects of practice to settle.",
      },
    ],
    classExperience:
      "Expect clear guidance, an unhurried pace and a balanced mix of effort and release. At Santosh Yoga, beginner and mixed ability Hatha classes use familiar postures, breath and quiet attention. Options are offered so the practice can meet the person rather than asking every person to look the same.",
    goodFor: [
      "Complete beginners learning the foundations",
      "Students who prefer time to understand each posture",
      "Experienced practitioners returning to breath and detail",
    ],
    beginWith: [
      "Wear comfortable clothing and arrive a few minutes early to meet the teacher.",
      "Use blocks, blankets and other support as practical tools, not signs of limitation.",
      "Keep the breath comfortable and choose the variation that feels steady today.",
    ],
    pace: "Steady and considered",
    focus: "Balance, foundations, breath",
    props: "Used whenever helpful",
  },
  {
    num: "05",
    slug: "iyengar",
    name: "Iyengar",
    sanskrit: "Iyengar Yoga",
    blurb: "Meticulous alignment supported by props: precise, patient and deeply attentive.",
    introduction:
      "Iyengar Yoga is known for precise teaching, carefully sequenced postures and the inventive use of props. It asks not only what shape the body makes, but how attention is distributed inside that shape.",
    overview: [
      "The method is named for B.K.S. Iyengar, whose teaching brought yoga to a wide international audience during the twentieth century. His close study of posture, timing and sequencing created a rigorous system that teachers study over many years.",
      "Belts, bricks, blankets, chairs and wall ropes are used to clarify action and make postures available in different ways. A prop is not there to make practice easier or harder by default; it provides information and support. Classes often spend time refining a smaller number of postures so subtle relationships can be felt.",
    ],
    practice: [
      {
        title: "Detailed alignment",
        text: "Specific instructions organise the body and invite attention into areas that are easily overlooked.",
      },
      {
        title: "Intelligent sequencing",
        text: "Postures are chosen and ordered to prepare the body and develop a particular quality of practice.",
      },
      {
        title: "Purposeful props",
        text: "Equipment offers feedback, stability or space so the intended action becomes clearer.",
      },
    ],
    classExperience:
      "An Iyengar class is focused and instructional rather than continuously flowing. The teacher may demonstrate, observe the room, and refine one action through several attempts. Postures can be held while details are explored, making the practice both exacting and quietly absorbing.",
    goodFor: [
      "Students who value precise, detailed instruction",
      "Beginners who want to understand foundations",
      "Practitioners interested in adapting poses thoughtfully",
    ],
    beginWith: [
      "Start with a class at the appropriate level; the method builds progressively.",
      "Expect to learn the names and basic actions of postures over time.",
      "Use props as instructed and tell the teacher about relevant health concerns.",
    ],
    pace: "Measured and investigative",
    focus: "Alignment, sequencing, awareness",
    props: "Central to the method",
  },
  {
    num: "06",
    slug: "kundalini",
    name: "Kundalini",
    sanskrit: "Kundalini Yoga",
    blurb: "Movement, mantra and breathwork brought together in an energetic, meditative practice.",
    introduction:
      "Kundalini Yoga combines repeated movement, breathing practices, meditation and sound. Rather than centring a long sequence of postures, a class is usually organised around a specific set of exercises called a kriya.",
    overview: [
      "Kundalini is an ancient concept found across several Indian spiritual traditions, where it describes latent energy and expanded awareness. The form commonly seen in modern studios was introduced internationally in the late twentieth century and has a distinct teaching culture, vocabulary and class structure.",
      "Practices can range from quiet seated meditation to strong repetitive movement. Mantra and chanting may be included, and white clothing or head coverings are customary in some schools but not inherent requirements for personal practice. The emphasis is often on direct experience rather than achieving complex postural shapes.",
    ],
    practice: [
      {
        title: "Kriya",
        text: "A prescribed combination of movement, posture and breath is practised for a particular intention.",
      },
      {
        title: "Breath and sound",
        text: "Breathing techniques, mantra and rhythm are used to steady and focus attention.",
      },
      {
        title: "Meditation",
        text: "Periods of stillness invite observation after the more active parts of the practice.",
      },
    ],
    classExperience:
      "A class may feel unlike a posture-led yoga session. You might repeat one movement for several minutes, rest, chant and sit in meditation. The experience can be energetic and expressive, followed by deep quiet. Teachers should always offer alternatives to forceful breath or prolonged exercises.",
    goodFor: [
      "People curious about meditation through movement",
      "Students who connect with sound and repetition",
      "Practitioners seeking a less posture-centred class",
    ],
    beginWith: [
      "Choose an introductory teacher who explains unfamiliar language and techniques clearly.",
      "Never strain or hold the breath to keep pace with a group.",
      "Pause forceful breathing if you feel dizzy and seek individual guidance when needed.",
    ],
    pace: "Varied and rhythmic",
    focus: "Energy, meditation, awareness",
    props: "A cushion or blanket",
  },
];

export function getYogaStyle(slug: string) {
  return YOGA_STYLES.find((style) => style.slug === slug);
}
