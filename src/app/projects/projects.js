// Reviewed against public GitHub repositories on 2026-09-18.
// Include implemented apps, tools, libraries, games, and substantial creative work.
// Exclude Fretuks (profile), M324im_Code (course exercises), and the-ims-stack
// (starter page). Developed forks are explicitly credited below.
export const projects = [
    {
        repo: "linuxdistro-roguelite", title: "Linux Distro Roguelite", category: "Games",
        mark: "~/run", tagline: "Choose your distro. Build your deck.",
        description: "A Unity deck-building roguelite with Linux distributions, programming-language cards, turn-based combat, and persistent progression.",
        stack: ["Unity", "C#"],
    },
    {
        repo: "KrisHD_AI", title: "Elsewhere", category: "Web & apps",
        mark: "hello_", tagline: "A space for every conversation.",
        description: "An AI chat workspace with streaming conversations, custom personas, roleplay sessions, and a shared persona market. Built with Express and SQLite.",
        stack: ["JavaScript", "Express", "SQLite"],
    },
    {
        repo: "Shoppy", title: "Shoppy", category: "Web & apps",
        mark: "scan/+", tagline: "A little more clarity in every shop.",
        description: "A mobile shopping companion that scans barcodes and evaluates products against personal preferences. Includes shopping lists, allergy settings, and cached product data for offline use.",
        stack: ["React Native", "Expo", "Open Food Facts"],
    },
    {
        repo: "Ascend", title: "Ascend", category: "Minecraft",
        mark: "lvl ↑", tagline: "Make every level your own.",
        description: "A Minecraft RPG progression mod inspired by Deepwoken, with experience, ten upgradeable attributes, knowledge, and shrines for reshaping your build.",
        stack: ["Java", "Forge"],
    },
    {
        repo: "IDPA26_WebShop", title: "IDPA Webshop", category: "Web & apps",
        mark: "cart/+", tagline: "From the catalogue to checkout.",
        description: "A full-stack school project with product browsing, accounts, carts, orders, and an administration interface, backed by a REST API.",
        stack: ["React", "Express", "SQL"],
    },
    {
        repo: "linux_distro_roguelite_promotion", title: "Roguelite Launch Platform", category: "Web & apps",
        mark: "join_", tagline: "A community before the first run.",
        description: "A companion website and Quarkus backend for game pre-registration, platform preferences, email confirmation, community milestones, and rewards.",
        stack: ["Java", "Quarkus", "PostgreSQL"],
    },
    {
        repo: "SkillEngine", title: "Skill Engine", category: "Minecraft",
        mark: "[⋅]-[⋅]", tagline: "The foundation for a new skill tree.",
        description: "A reusable Forge framework for JSON-defined skill trees, with node requirements, skill points, tooltips, and server synchronization for other mods to build on.",
        stack: ["Java", "Forge", "JSON"],
    },
    {
        repo: "MindMotion", title: "Mind & Motion", category: "Minecraft",
        mark: "mind/", tagline: "Keep your sanity. Find your tempo.",
        description: "A configurable Minecraft mod introducing sanity, insanity, and combat tempo. Environmental effects and a defensive vent ability add new decisions to exploration and combat.",
        stack: ["Java", "Forge"],
    },
    {
        repo: "KnockedBack", title: "KnockedBack", category: "Minecraft",
        mark: "1 HP", tagline: "A second chance before the end.",
        description: "Replaces most lethal damage with a temporary knocked-out state, giving players a chance to recover, carry teammates to safety, or finish a fight.",
        stack: ["Java", "Forge"],
    },
    {
        repo: "Ailments", title: "Ascend: Ailments", category: "Minecraft",
        mark: "+effect", tagline: "Give combat a lasting effect.",
        description: "A Forge library of eight combat effects, including bleed, fear, and soul rot, with a public API, configurable interactions, and optional Ascend integration.",
        stack: ["Java", "Forge"],
    },
    {
        repo: "Gambling_API", title: "Virtual-Chip Poker", category: "Web & apps",
        mark: "♠ / ♣", tagline: "One table. A real-time connection.",
        description: "A multiplayer poker app with virtual chips, lobbies, live WebSocket play, and persistent accounts. Includes transaction recovery and an HTTP API.",
        stack: ["Express", "WebSockets", "SQLite"], attribution: "Fork-based project",
    },
    {
        repo: "TARS", title: "T.A.R.S.", category: "Tools & bots",
        mark: "/tars", tagline: "A helping hand for the server.",
        description: "A Python Discord bot combining moderation, reminders, server diagnostics, community commands, and a boost-points reward shop.",
        stack: ["Python", "Discord"],
    },
    {
        repo: "Discord_bot", title: "Discord Utility Bot", category: "Tools & bots",
        mark: "/help", tagline: "Small commands. Everyday utility.",
        description: "A Discord.js bot with moderation, virtual currency, quizzes, timestamps, weather, and Wikipedia lookups, plus per-server command permissions.",
        stack: ["JavaScript", "Discord.js", "MongoDB"], attribution: "Fork-based project",
    },
    {
        repo: "Autoclicker", title: "Autoclicker", category: "Tools & bots",
        mark: "click()", tagline: "Put repetitive clicks on repeat.",
        description: "A Python desktop utility with a Tkinter interface and configurable keyboard shortcuts to start and stop automated clicking.",
        stack: ["Python", "Tkinter", "pynput"],
    },
    {
        repo: "BruteForce", title: "BruteForce Lab", category: "Tools & bots",
        mark: "auth/?", tagline: "Explore how a login holds up.",
        description: "An educational local test application for exploring password attacks and defenses, pairing an Express login backend with controlled attack simulations.",
        stack: ["JavaScript", "Express", "Security education"],
    },
    {
        repo: "WebsitePortfolio2", title: "Fretux Portfolio", category: "Web & apps",
        mark: "<fred/>", tagline: "Code with character.",
        description: "The portfolio you are exploring: a responsive Next.js site bringing together my projects, background, and experiments in digital design.",
        stack: ["Next.js", "React", "CSS"],
    },
];
