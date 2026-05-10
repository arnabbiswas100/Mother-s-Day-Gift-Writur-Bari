// ─── The House of Seasons — Content Data ───────────────────────────────────
// All text content for each seasonal section
// Order follows: গ্রীষ্ম → বর্ষা → শরৎ → হেমন্ত → শীত → বসন্ত

export const seasons = [
  // ── গ্রীষ্ম — Summer ───────────────────────────────────────────────────
  {
    id: "summer",
    title: "☀️ গ্রীষ্ম",
    subtitle: "শৈশব",
    englishSeason: "Summer",
    tagoreQuote:
      "মেঘের কোলে রোদ হেসেছে,\nবাদল গেছে টুটি।",
    tagoreAttribution: "— রবীন্দ্রনাথ ঠাকুর",
    reflectionBengali:
      "সেই বাড়িটার কথা মনে পড়ে। দুপুরের রোদ যখন জানালায় এসে পড়ত, মা তখন রান্নাঘরে। একতলা বাড়িতে ধানের শিষের মতো সেই দিনগুলো — কোমল, সোনালি, অনায়াসে ভুলে যাওয়া। কিন্তু বুকের ভেতর কোথাও তারা থেকে যায়।",
    book: {
      title: "ডাকঘর",
      titleEnglish: "Dak Ghar",
      season: "গ্রীষ্ম",
      description: "শৈশবের নিষ্পাপ স্বপ্ন আর মুক্তির আকাঙ্ক্ষার কথা।",
      cover: "/images/summer-book.jpg",
      pdf: "https://www.iopb.res.in/~somen/RNatok/BNG/dakghor.pdf",
    },
    image: "/images/summer.jpg",
    bgGradient: "from-[#e8f5e2] via-[#d4edca] to-[#c2e3b0]",
    particleColor: "#7ab87a",
    textColor: "#2d4a2d",
    accentColor: "#4a7c59",
    decorColor: "#a8d5a2",
  },

  // ── বর্ষা — Monsoon ─────────────────────────────────────────────────────
  {
    id: "monsoon",
    title: "🌧️ বর্ষা",
    subtitle: "কঠিন সময়",
    englishSeason: "Monsoon",
    tagoreQuote:
      "বিপদে মোরে রক্ষা করো এ নহে মোর প্রার্থনা,\nবিপদে আমি না যেন করি ভয়।",
    tagoreAttribution: "— রবীন্দ্রনাথ ঠাকুর",
    reflectionBengali:
      "কিছু বৃষ্টি আসে জানলার কাচে। কিছু আসে বুকের ভেতর। মা সেই দিনগুলোতে চুপ করে বসে থাকতেন — মুখে কথা নেই, চোখে সমুদ্র। এখন বুঝি, নীরবতাও একধরনের সাহস।",
    book: {
      title: "চোখের বালি",
      titleEnglish: "Chokher Bali",
      season: "বর্ষা",
      description: "আবেগ, সংঘাত আর নারীর অন্তর্জগতের গভীর আখ্যান।",
      cover: "/images/monsoon-book.jpg",
      pdf: "https://upload.wikimedia.org/wikipedia/commons/3/3a/%E0%A6%9A%E0%A7%8B%E0%A6%96%E0%A7%87%E0%A6%B0_%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%BF-%E0%A6%B0%E0%A6%AC%E0%A7%80%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%A8%E0%A6%BE%E0%A6%A5_%E0%A6%A0%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%B0.pdf",
    },
    image: "/images/monsoon.jpg",
    bgGradient: "from-[#1a2535] via-[#1f2e40] to-[#152030]",
    particleColor: "#4a6fa5",
    textColor: "#c8d8e8",
    accentColor: "#7a9fc0",
    decorColor: "#2d4560",
  },

  // ── শরৎ — Autumn ────────────────────────────────────────────────────────
  {
    id: "autumn",
    title: "🍂 শরৎ",
    subtitle: "পরিণতি",
    englishSeason: "Autumn",
    tagoreQuote: "পুরানো সেই দিনের কথা ভুলবি কি রে হায়।",
    tagoreAttribution: "— রবীন্দ্রনাথ ঠাকুর",
    reflectionBengali:
      "বয়স বাড়লে মানুষ কিছু জিনিস বোঝে — যা শৈশবে দেখেছিলাম তা আসলে কতটা গভীর ছিল। মায়ের ধৈর্য, তাঁর নিঃশব্দ ত্যাগ — সেসব তখন চোখে পড়েনি। এখন প্রতিটি স্মৃতি একটু একটু করে অর্থ পায়।",
    book: {
      title: "শেষের কবিতা",
      titleEnglish: "Shesher Kobita",
      season: "শরৎ",
      description: "প্রেম, বিচ্ছেদ আর জীবনের পূর্ণতার এক অনন্য উপন্যাস।",
      cover: "/images/autumn-book.jpg",
      pdf: "https://upload.wikimedia.org/wikipedia/commons/a/ad/%E0%A6%B6%E0%A7%87%E0%A6%B7%E0%A7%87%E0%A6%B0_%E0%A6%95%E0%A6%AC%E0%A6%BF%E0%A6%A4%E0%A6%BE_-_%E0%A6%B0%E0%A6%AC%E0%A7%80%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%A8%E0%A6%BE%E0%A6%A5_%E0%A6%A0%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%B0.pdf",
    },
    image: "/images/autumn.jpg",
    bgGradient: "from-[#f5e6d0] via-[#ecd5b0] to-[#d4b88a]",
    particleColor: "#b8722a",
    textColor: "#4a2a0d",
    accentColor: "#8a4a1a",
    decorColor: "#e0c090",
  },

  // ── হেমন্ত — Late Autumn ────────────────────────────────────────────────
  {
    id: "hemonto",
    title: "🍁 হেমন্ত",
    subtitle: "অপেক্ষা",
    englishSeason: "Late Autumn",
    tagoreQuote: "দিনের শেষে ঘুমের দেশে।",
    tagoreAttribution: "— রবীন্দ্রনাথ ঠাকুর",
    reflectionBengali:
      "হেমন্তের বিকেলে সূর্য তাড়াতাড়ি ডুবে যায়। সেই ম্লান আলোয় মায়ের মুখ দেখতাম — ক্লান্ত, কিন্তু স্থির। জীবনের ব্যস্ততা থেমে এলে বুঝি, শান্তিও একটা ঋতু। মা সেই শান্তিটুকু খুঁজে পেয়েছিলেন — নিজের মধ্যে, নিজের জন্য।",
    book: {
      title: "নষ্টনীড়",
      titleEnglish: "Nostonirh",
      season: "হেমন্ত",
      description: "ঘর, সম্পর্ক আর হারানোর গল্প — জীবনের এক নিঃশব্দ অধ্যায়।",
      cover: "/images/hemonto-book.jpg",
      pdf: "https://bengaliebook.com/wp-content/uploads/2021/08/%E0%A6%A8%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A6%A8%E0%A7%80%E0%A7%9C.pdf",
    },
    image: "/images/hemonto.jpg",
    bgGradient: "from-[#f5ede4] via-[#efe6da] to-[#e8ddd0]",
    particleColor: "#c4a070",
    textColor: "#4a3525",
    accentColor: "#a07850",
    decorColor: "#ddd0b8",
  },

  // ── শীত — Winter ────────────────────────────────────────────────────────
  {
    id: "winter",
    title: "❄️ শীত",
    subtitle: "স্থিরতা",
    englishSeason: "Winter",
    tagoreQuote: "আলো আমার আলো, ওগো আলোয় ভুবন ভরা।",
    tagoreAttribution: "— রবীন্দ্রনাথ ঠাকুর",
    reflectionBengali:
      "শীতের সকালে কুয়াশা যেমন সব কিছুকে ধীরে ধীরে স্পষ্ট করে, স্মৃতিও তেমন। কিছু ঘর থেকে যায় — মানুষের ভেতরে, ঋতুর ভেতরে, বইয়ের পাতায়। মা আছেন, সেটুকুই যথেষ্ট।",
    book: {
      title: "গীতাঞ্জলি",
      titleEnglish: "Gitanjali",
      season: "শীত",
      description: "ঈশ্বর, আত্মা ও নিঃশব্দ ভক্তির অমর গানের সংকলন।",
      cover: "/images/winter-book.jpg",
      pdf: "https://nltr.itewb.gov.in/download/ebooks/Gitanjali.pdf",
    },
    image: "/images/winter.jpg",
    bgGradient: "from-[#f0f4f8] via-[#e4ecf4] to-[#d8e4f0]",
    particleColor: "#a0b8d0",
    textColor: "#2a3a4a",
    accentColor: "#4a6a8a",
    decorColor: "#c0d4e8",
  },

  // ── বসন্ত — Spring ──────────────────────────────────────────────────────
  {
    id: "basonto",
    title: "🌸 বসন্ত",
    subtitle: "নতুন শুরু",
    englishSeason: "Spring",
    tagoreQuote: "বসন্ত এসে গেছে।",
    tagoreAttribution: "— রবীন্দ্রনাথ ঠাকুর",
    reflectionBengali:
      "বসন্তে গাছে নতুন পাতা আসে, মনেও নতুন স্বপ্ন। মা বলতেন, 'প্রতিটি সকাল একটা নতুন সুযোগ।' সেই কথাগুলো এখন বুকের মধ্যে ফুল হয়ে ফোটে। জীবনের শুরুতে সব কিছু সম্ভব মনে হতো — সেই বিশ্বাসটুকু মা-ই দিয়েছিলেন।",
    book: {
      title: "চিত্রাঙ্গদা",
      titleEnglish: "Chitrangada",
      season: "বসন্ত",
      description: "প্রেম, সাহস আর আত্মপরিচয়ের এক অনন্য কাব্যনাটক।",
      cover: "/images/basonto-book.jpg",
      pdf: "https://dn720700.ca.archive.org/0/items/in.ernet.dli.2015.339525/2015.339525.Ed2.pdf",
    },
    image: "/images/basonto.jpg",
    bgGradient: "from-[#fdf8f0] via-[#faf3e6] to-[#f5ecd8]",
    particleColor: "#e8a0b0",
    textColor: "#3a2a1a",
    accentColor: "#c07040",
    decorColor: "#e8d4b8",
  },
];
