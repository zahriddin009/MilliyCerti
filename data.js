/* MilliyCerti.uz — configuration and ORIGINAL sample question bank.
   All questions below were written for this prototype. They are NOT official
   past exam questions. */

window.MC_CONFIG = {
  version: "2026-11-demo-1",
  // Source: secondary sources (5ball.uz, yoshlarittifoqi.uz, lingoxon.uz, birprep.uz).
  // NOT verified against UZBMB / official documents -> admin must confirm.
  officialSpecVerified: false,
  officialSpecNote:
    "Rasmiy format (taxminiy, ikkilamchi manbalar): Listening 35 savol / 6 qism, Reading 35 savol / 5 qism (60 daq), " +
    "Writing 2 topshiriq (60 daq), Speaking 3 qism. Manbalar bir-biriga mos kelmaydigan joylar bor, shuning uchun " +
    "bu qiymatlar sozlanadigan va rasmiy hujjat bilan tekshirilishi kerak.",
  // Demo mock is much shorter than the real exam because the sample bank is small.
  exam: {
    title: "MilliyCerti Demo Mock (Listening + Reading)",
    sections: [
      { skill: "listening", title: "Listening", minutes: 8, replays: 1 },
      { skill: "reading", title: "Reading", minutes: 15, replays: 0 }
    ],
    warnAtSeconds: 120
  },
  // Score scale 0-75 (secondary sources). B1>=38, B2>=51, C1>=65. Unverified.
  // A1/A2 are platform-only estimates (the national exam awards B1-C1).
  cefrThresholds: [
    { level: "C1", min: 65 },
    { level: "B2", min: 51 },
    { level: "B1", min: 38 },
    { level: "A2", min: 20 },
    { level: "A1", min: 0 }
  ],
  scaleMax: 75
};

window.MC_PASSAGES = {
  p1: {
    title: "The Library Café",
    level: "A2-B1",
    text:
      "When the old library in Samarkand closed for repairs, many students thought they would have nowhere quiet to study. " +
      "Then Dilnoza Karimova, a former teacher, opened a small café on the same street. " +
      "She wanted a place where people could read, talk softly and drink tea without feeling rushed.\n\n" +
      "The café has only twelve tables, but every table has a lamp and a power socket. " +
      "Books donated by customers fill the shelves along the walls, and anyone can borrow one for a week. " +
      "On Thursday evenings, a volunteer teaches free English conversation classes. " +
      "Dilnoza says the classes started by accident, when two students asked her to help them practise for an exam.\n\n" +
      "The café is open from eight in the morning until ten at night, but it is busiest in the afternoon. " +
      "Prices are low, and students who buy one drink may stay as long as they like. " +
      "Some neighbours have complained about the noise during the classes, so Dilnoza is now planning to move them to a room upstairs."
  },
  p2: {
    title: "Sleep and Memory",
    level: "B2",
    text:
      "For decades, sleep was regarded as a passive state in which the brain simply rested. " +
      "Research over the past thirty years has overturned that view. During sleep, the brain appears to replay the events of the day, " +
      "strengthening important connections and discarding those that are no longer useful.\n\n" +
      "In one widely discussed experiment, two groups of students learned a list of word pairs. " +
      "One group slept normally afterwards, while the other stayed awake for the same period. " +
      "When tested later, the group that had slept remembered considerably more pairs. " +
      "Importantly, the difference was not explained by tiredness alone, since the sleepers also performed better when both groups were fully rested at the time of testing.\n\n" +
      "Scientists caution, however, that the findings do not mean that cramming all night is useless in every case, " +
      "nor that a single good night can compensate for weeks of poor sleep. " +
      "What the evidence does suggest is that studying in the evening and sleeping well afterwards is a more efficient strategy than studying later into the night."
  }
};

window.MC_AUDIO = {
  a1: {
    title: "Audition: Booking a room",
    // Spoken by the browser's built-in speech synthesis (real audio, but synthetic voice).
    script:
      "Hello, Green Valley Hostel, how can I help you? " +
      "Hi, I'd like to book a room for next weekend. " +
      "Certainly. Would you like a single room or a double room? " +
      "A single room, please. I'll be travelling alone. " +
      "The single room is forty-five dollars a night. Breakfast is included, but parking costs five dollars extra. " +
      "That's fine. I'll arrive on Friday evening at about seven o'clock and leave on Sunday morning. " +
      "Good. Could I have your surname? " +
      "It's Rahimov. R, A, H, I, M, O, V. " +
      "Thank you, Mr Rahimov. Your booking is confirmed for two nights."
  },
  a2: {
    title: "Audition: Announcement at a language centre",
    script:
      "Good morning, everyone. Before we begin, I have three announcements. " +
      "First, tomorrow's grammar workshop has been moved from room twelve to room four, because the projector in room twelve is broken. " +
      "Second, the library will stay open until nine o'clock this week to help students who are preparing for the speaking test. " +
      "Finally, please remember that registration for the March mock exam closes on Friday. " +
      "You can register at the front desk, but you must bring a passport-size photograph. Thank you."
  }
};

/* Question schema: id, skill, level, difficulty, type (single|tfng|gap),
   text, instructions, options, answer, explanation, score, passage|audio, category, tags */
window.MC_QUESTIONS = [
  /* ---------- LISTENING ---------- */
  { id: "L001", skill: "listening", level: "A2", difficulty: "easy", type: "single", audio: "a1", score: 1,
    category: "Booking", tags: ["numbers", "hotel"],
    text: "What type of room does the caller book?",
    instructions: "Listen to the conversation and choose the correct answer.",
    options: ["A double room", "A single room", "A family room"], answer: 1,
    explanation: "Caller: 'A single room, please. I'll be travelling alone.'" },
  { id: "L002", skill: "listening", level: "A2", difficulty: "easy", type: "single", audio: "a1", score: 1,
    category: "Booking", tags: ["numbers", "price"],
    text: "How much is the room per night?",
    instructions: "Choose the correct answer.",
    options: ["$35", "$45", "$54"], answer: 1,
    explanation: "The speaker says 'forty-five dollars a night'. Be careful: 'fourteen' and 'forty' sound similar." },
  { id: "L003", skill: "listening", level: "A2", difficulty: "medium", type: "single", audio: "a1", score: 1,
    category: "Booking", tags: ["details"],
    text: "What is NOT included in the price?",
    instructions: "Choose the correct answer.",
    options: ["Breakfast", "Parking", "Bed linen"], answer: 1,
    explanation: "'Breakfast is included, but parking costs five dollars extra.'" },
  { id: "L004", skill: "listening", level: "B1", difficulty: "medium", type: "gap", audio: "a1", score: 1,
    category: "Form completion", tags: ["spelling", "names"],
    text: "Complete the form: Surname: ________",
    instructions: "Write ONE word. Spelling must be correct.",
    answer: ["rahimov"],
    explanation: "The name is spelled out letter by letter: R-A-H-I-M-O-V." },
  { id: "L005", skill: "listening", level: "B1", difficulty: "medium", type: "gap", audio: "a1", score: 1,
    category: "Form completion", tags: ["days"],
    text: "Complete the form: Leaves on ________ morning.",
    instructions: "Write ONE word.",
    answer: ["sunday"],
    explanation: "'...and leave on Sunday morning.'" },
  { id: "L006", skill: "listening", level: "B1", difficulty: "easy", type: "single", audio: "a2", score: 1,
    category: "Announcements", tags: ["rooms"],
    text: "Where will tomorrow's grammar workshop take place?",
    instructions: "Choose the correct answer.",
    options: ["Room 4", "Room 12", "The library"], answer: 0,
    explanation: "Moved from room twelve to room four because the projector in twelve is broken." },
  { id: "L007", skill: "listening", level: "B2", difficulty: "medium", type: "single", audio: "a2", score: 1,
    category: "Announcements", tags: ["reasons"],
    text: "Why is the library staying open later this week?",
    instructions: "Choose the correct answer.",
    options: ["A new librarian has started", "To help students prepare for the speaking test", "Because of building repairs"], answer: 1,
    explanation: "'...to help students who are preparing for the speaking test.'" },
  { id: "L008", skill: "listening", level: "B2", difficulty: "difficult", type: "single", audio: "a2", score: 1,
    category: "Announcements", tags: ["requirements"],
    text: "What must students bring to register for the mock exam?",
    instructions: "Choose the correct answer.",
    options: ["Payment receipt", "A passport-size photograph", "A teacher's letter"], answer: 1,
    explanation: "'...you must bring a passport-size photograph.'" },

  /* ---------- READING: The Library Café ---------- */
  { id: "R001", skill: "reading", level: "A2", difficulty: "easy", type: "single", passage: "p1", score: 1,
    category: "Detail", tags: ["detail"],
    text: "Why did Dilnoza open the café?",
    instructions: "Choose the correct answer.",
    options: ["To sell books", "To create a calm place for people to read and talk", "To teach English full time"], answer: 1,
    explanation: "She wanted a place to read, talk softly and drink tea without feeling rushed." },
  { id: "R002", skill: "reading", level: "A2", difficulty: "easy", type: "tfng", passage: "p1", score: 1,
    category: "True/False/Not Given", tags: ["detail"],
    text: "Every table in the café has a lamp and a power socket.",
    instructions: "Choose True, False or Not Given.",
    options: ["True", "False", "Not Given"], answer: 0,
    explanation: "'every table has a lamp and a power socket' — stated directly." },
  { id: "R003", skill: "reading", level: "A2", difficulty: "medium", type: "tfng", passage: "p1", score: 1,
    category: "True/False/Not Given", tags: ["detail"],
    text: "Customers can keep the books they borrow for a month.",
    instructions: "Choose True, False or Not Given.",
    options: ["True", "False", "Not Given"], answer: 1,
    explanation: "Books can be borrowed for a WEEK, not a month, so the statement is False." },
  { id: "R004", skill: "reading", level: "B1", difficulty: "medium", type: "tfng", passage: "p1", score: 1,
    category: "True/False/Not Given", tags: ["inference"],
    text: "The café makes a profit from the English classes.",
    instructions: "Choose True, False or Not Given.",
    options: ["True", "False", "Not Given"], answer: 2,
    explanation: "The classes are free, but the text says nothing about the café's profit. Not Given." },
  { id: "R005", skill: "reading", level: "B1", difficulty: "medium", type: "single", passage: "p1", score: 1,
    category: "Detail", tags: ["detail"],
    text: "How did the English classes begin?",
    instructions: "Choose the correct answer.",
    options: ["A volunteer proposed them", "Two students asked for help with exam practice", "The old library asked for them"], answer: 1,
    explanation: "'the classes started by accident, when two students asked her to help them practise for an exam.'" },
  { id: "R006", skill: "reading", level: "B1", difficulty: "medium", type: "gap", passage: "p1", score: 1,
    category: "Sentence completion", tags: ["numbers"],
    text: "The café has only ________ tables.",
    instructions: "Write ONE word or number from the passage.",
    answer: ["twelve", "12"],
    explanation: "'The café has only twelve tables.'" },
  { id: "R007", skill: "reading", level: "B1", difficulty: "difficult", type: "single", passage: "p1", score: 1,
    category: "Inference", tags: ["inference"],
    text: "Why is Dilnoza planning to move the classes upstairs?",
    instructions: "Choose the correct answer.",
    options: ["There are too few tables", "Neighbours have complained about noise", "The classes are getting cheaper"], answer: 1,
    explanation: "'Some neighbours have complained about the noise during the classes.'" },

  /* ---------- READING: Sleep and Memory ---------- */
  { id: "R008", skill: "reading", level: "B2", difficulty: "medium", type: "single", passage: "p2", score: 1,
    category: "Main idea", tags: ["main idea"],
    text: "What is the main point of the first paragraph?",
    instructions: "Choose the correct answer.",
    options: ["Sleep is a passive state", "Modern research shows the sleeping brain is active", "The brain needs more sleep than before"], answer: 1,
    explanation: "The paragraph says research has overturned the 'passive' view: the brain replays and strengthens memories." },
  { id: "R009", skill: "reading", level: "B2", difficulty: "medium", type: "tfng", passage: "p2", score: 1,
    category: "True/False/Not Given", tags: ["detail"],
    text: "In the experiment, the students who slept remembered more word pairs.",
    instructions: "Choose True, False or Not Given.",
    options: ["True", "False", "Not Given"], answer: 0,
    explanation: "'the group that had slept remembered considerably more pairs.'" },
  { id: "R010", skill: "reading", level: "B2", difficulty: "difficult", type: "single", passage: "p2", score: 1,
    category: "Reasoning", tags: ["reasoning"],
    text: "Why does the writer mention that both groups were fully rested at testing?",
    instructions: "Choose the correct answer.",
    options: ["To show tiredness alone does not explain the result", "To prove that the experiment was too short", "To suggest that the sleepers cheated"], answer: 0,
    explanation: "The sleepers still did better when tiredness was removed as a factor." },
  { id: "R011", skill: "reading", level: "C1", difficulty: "difficult", type: "tfng", passage: "p2", score: 1,
    category: "True/False/Not Given", tags: ["inference"],
    text: "The writer claims that studying all night never works.",
    instructions: "Choose True, False or Not Given.",
    options: ["True", "False", "Not Given"], answer: 1,
    explanation: "Scientists caution that cramming is 'not useless in every case' — the claim contradicts this." },
  { id: "R012", skill: "reading", level: "C1", difficulty: "difficult", type: "single", passage: "p2", score: 1,
    category: "Writer's view", tags: ["attitude"],
    text: "What does the evidence suggest about the best study strategy?",
    instructions: "Choose the correct answer.",
    options: ["Study late into the night", "Study in the evening, then sleep well", "Avoid studying before tests"], answer: 1,
    explanation: "'studying in the evening and sleeping well afterwards is a more efficient strategy'." }
];
