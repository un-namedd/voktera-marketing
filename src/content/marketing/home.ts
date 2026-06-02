export const proofItems = [
  {
    label: "Three pillars",
    description: "Food, gym, and tasks in one app",
    icon: "layers",
  },
  {
    label: "Mobile-first",
    description: "Built for your phone — add to Home Screen",
    icon: "phone",
  },
  {
    label: "Your data",
    description: "Sign in required; you control what you log",
    icon: "shield",
  },
  {
    label: "No ads",
    description: "A personal dashboard, not an ad product",
    icon: "sparkle",
  },
] as const;

export const features = [
  {
    id: "food",
    title: "Food",
    headline: "Log meals without spreadsheet chaos",
    bullets: [
      "Breakfast, lunch, dinner, and snacks with serving math",
      "Nutrient targets and daily totals at a glance",
      "Ingredient library and label scan to speed up entry",
    ],
    accent: "from-violet-600/15 to-fuchsia-500/10",
  },
  {
    id: "gym",
    title: "Gym",
    headline: "Train with plans that match your week",
    bullets: [
      "Weekly workout checklists you can tick off",
      "Log sets, reps, and progression over time",
      "Quick session log when you are in a hurry",
    ],
    accent: "from-indigo-600/15 to-violet-500/10",
  },
  {
    id: "tasks",
    title: "Tasks",
    headline: "Today’s focus and long-term goals",
    bullets: [
      "In-today list with repeats and rollover",
      "Goals and progress alongside your todos",
      "One hub instead of three separate apps",
    ],
    accent: "from-purple-600/15 to-violet-400/10",
  },
] as const;

export const howItWorks = [
  {
    step: "1",
    title: "Open the app",
    description: "Sign in with a code from your email — no password to remember.",
  },
  {
    step: "2",
    title: "Log what matters",
    description: "Meals, workouts, and tasks stay in sync on your dashboard.",
  },
  {
    step: "3",
    title: "Check Home",
    description: "See today’s snapshot and jump into Food, Gym, or Tasks in one tap.",
  },
] as const;

export const faqItems = [
  {
    question: "What is Voktera?",
    answer:
      "Voktera is a personal dashboard for food logging, gym tracking, and daily tasks. It is mobile-first and works in the browser — you can add it to your Home Screen like an app.",
  },
  {
    question: "Is Voktera free?",
    answer:
      "Yes. Voktera is built as a personal tool. There are no ads in the product.",
  },
  {
    question: "Do I need an iPhone or Android app?",
    answer:
      "You can use Voktera on the web today at app.voktera.com. Native iOS and Android apps are planned; store badges on this site will activate when they ship.",
  },
  {
    question: "How do I sign in?",
    answer:
      "Enter your email on the login page. We send a one-time code or magic link — no password required.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your account data is stored securely in our cloud database (Supabase). See the Privacy Policy for details on what we collect and how to request deletion.",
  },
  {
    question: "Can I track macros and micronutrients?",
    answer:
      "Yes. Food logging supports detailed nutrients, daily targets, and an ingredient library.",
  },
  {
    question: "Does Voktera replace a fitness coach or dietitian?",
    answer:
      "No. Voktera is a logging and organization tool. It does not provide medical or professional advice.",
  },
  {
    question: "How do I get support?",
    answer: `Email us at support@voktera.com — we read every message.`,
  },
] as const;
