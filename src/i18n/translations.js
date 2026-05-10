export const translations = {
  en: {
    languageLabel: "RU",
    loading: "Loading",
    nav: {
      links: [
        { id: "home", label: "home" },
        { id: "services", label: "services" },
        { id: "about", label: "about" },
        { id: "work", label: "work" },
        { id: "contact", label: "contact" },
      ],
      email: "E-mail",
      socials: "Social Media",
    },
    hero: {
      subTitle: "404 No Bugs Found",
      title: "Ali Sanati",
      text: `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`,
    },
    serviceSummary: {
      architecture: "Architecture",
      development: "Development",
      deployment: "Deployment",
      apis: "APIs",
      frontends: "Frontends",
      scalability: "Scalability",
      databases: "Databases",
    },
    services: {
      subTitle: "Behind the scene, Beyond the screen",
      title: "Service",
      text: `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`,
      items: [
        {
          title: "FullStack Development",
          description:
            "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations--ensuring reliability at every layer.",
          items: [
            {
              title: "Backend Engineering",
              description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
            },
            {
              title: "Frontend Excellence",
              description: "(React, Vue, TypeScript, Interactive UI/UX)",
            },
            {
              title: "Database Design",
              description: "(SQL/NoSQL Optimization, Scalable Structures)",
            },
          ],
        },
        {
          title: "DevOps & Cloud Solutions",
          description:
            "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly--24/7, at any scale.",
          items: [
            {
              title: "CI/CD Pipelines",
              description: "(GitHub Actions, Docker, Kubernetes)",
            },
            {
              title: "Server Management",
              description: "(Linux, Nginx, Load Balancing)",
            },
            {
              title: "Performance Tuning",
              description: "(Caching, Compression, Lighthouse 90+ Scores)",
            },
          ],
        },
        {
          title: "Security & Optimization",
          description:
            "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
          items: [
            {
              title: "Code Audits",
              description: "(Refactoring, Tech Debt Cleanup)",
            },
            {
              title: "Pen Testing",
              description: "(Vulnerability Assessments)",
            },
            {
              title: "SEO Tech Stack",
              description: "(SSR, Metadata, Structured Data)",
            },
          ],
        },
        {
          title: "Web & Mobile Apps",
          description:
            "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love--bridging design and functionality seamlessly.",
          items: [
            {
              title: "Cross-Platform Apps",
              description: "(Single codebase for iOS/Android/Web)",
            },
            {
              title: "PWAs",
              description: "(Offline mode, Push Notifications)",
            },
            {
              title: "E-Commerce",
              description: "(Checkout flows, Payment Gateways, Inventory APIs)",
            },
          ],
        },
      ],
    },
    about: {
      subTitle: "Code with purpose, Built to scale",
      title: "About",
      text: `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`,
      imageAlt: "man",
      body: `Obsessed with building fast, intuitive apps--from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
When I'm not shipping:
Open-sourcing my latest experiment (or hacking on yours)
Teaching devs on Twitch/YouTube--because rising tides lift all ships
Rock climbing (problem-solving with real stakes)
Strumming chords while CI pipelines pass (multitasking at its finest)`,
    },
    works: {
      subTitle: "Logic meets Aesthetics, Seamlessly",
      title: "Works",
      text: `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`,
      previewAlt: "project preview",
      projects: [
        {
          id: 1,
          name: "Mobile Accessories E-commerce",
          description:
            "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
          href: "",
          image: "/assets/projects/mobile-accessories-store.jpg",
          bgImage: "/assets/backgrounds/blanket.jpg",
          frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Node.js" },
            { id: 4, name: "MongoDB" },
            { id: 5, name: "Tailwind CSS" },
          ],
        },
        {
          id: 2,
          name: "Plant Shop E-commerce",
          description:
            "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
          href: "",
          image: "/assets/projects/plant-shop.jpg",
          bgImage: "/assets/backgrounds/curtains.jpg",
          frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Stripe API" },
            { id: 4, name: "Tailwind CSS" },
          ],
        },
        {
          id: 3,
          name: "Apple Tech Marketplace",
          description:
            "An e-commerce platform for Apple products and accessories with deals and category filtering.",
          href: "",
          image: "/assets/projects/apple-tech-store.jpg",
          bgImage: "/assets/backgrounds/map.jpg",
          frameworks: [
            { id: 1, name: "Blazor" },
            { id: 2, name: "ASP.NET Core" },
            { id: 3, name: "SQL Server" },
            { id: 4, name: "Bootstrap" },
          ],
        },
        {
          id: 4,
          name: "Electronics & Gadgets Store",
          description:
            "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
          href: "",
          image: "/assets/projects/electronics-store.jpg",
          bgImage: "/assets/backgrounds/poster.jpg",
          frameworks: [
            { id: 1, name: "Vue.js" },
            { id: 2, name: "Laravel" },
            { id: 3, name: "MySQL" },
            { id: 4, name: "SCSS" },
          ],
        },
        {
          id: 5,
          name: "Home Decor Marketplace",
          description:
            "A curated collection of designer home decor items, including furniture and artisan vases.",
          href: "",
          image: "/assets/projects/home-decor-store.jpg",
          bgImage: "/assets/backgrounds/table.jpg",
          frameworks: [
            { id: 1, name: "Angular" },
            { id: 2, name: "Firebase" },
            { id: 3, name: "GraphQL" },
            { id: 4, name: "Material UI" },
          ],
        },
        {
          id: 6,
          name: "Digital Game Store",
          description:
            "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
          href: "",
          image: "/assets/projects/game-store.jpg",
          bgImage: "/assets/backgrounds/curtains.jpg",
          frameworks: [
            { id: 1, name: "Svelte" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "MongoDB" },
            { id: 4, name: "Chakra UI" },
          ],
        },
      ],
    },
    contactSummary: {
      start: "Let's build a",
      strong: "memorable",
      italic: "inspiring",
      end: "web application",
      together: "together",
    },
    contact: {
      subTitle: "You Dream It, I Code it",
      title: "Contact",
      text: `Got a question, how or project Idea?
    We'd love to hear from you and discuss further!`,
      email: "E-mail",
      emailAddress: "JohnDoe@gmail.com",
      phone: "Phone",
      phoneNumber: "+33 7 12 12 32 12",
      socials: "Social Media",
    },
    socials: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/ali.sanatidev/reels/",
      },
      {
        name: "Youtube",
        href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
      },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
      { name: "GitHub", href: "https://github.com/Ali-Sanati" },
    ],
  },
  ru: {
    languageLabel: "EN",
    loading: "Загрузка",
    nav: {
      links: [
        { id: "home", label: "главная" },
        { id: "services", label: "услуги" },
        { id: "about", label: "обо мне" },
        { id: "work", label: "работы" },
        { id: "contact", label: "контакты" },
      ],
      email: "Почта",
      socials: "Соцсети",
    },
    hero: {
      subTitle: "404 Ошибок не найдено",
      title: "Али Санати",
      text: `Помогаю растущим брендам и стартапам
получать преимущество через премиальные
сайты и приложения, работающие на результат`,
    },
    serviceSummary: {
      architecture: "Архитектура",
      development: "Разработка",
      deployment: "Деплой",
      apis: "API",
      frontends: "Фронтенды",
      scalability: "Масштабирование",
      databases: "Базы данных",
    },
    services: {
      subTitle: "За кадром, за пределами экрана",
      title: "Услуги",
      text: `Создаю безопасные и быстрые full-stack приложения
    с плавным UX, которые растят бизнес,
    а не создают головную боль.`,
      items: [
        {
          title: "Full-stack разработка",
          description:
            "Вашему бизнесу нужна быстрая, безопасная и надежная цифровая основа. Я разрабатываю веб-приложения с чистой архитектурой, оптимизированными базами данных и стабильными интеграциями.",
          items: [
            {
              title: "Backend-разработка",
              description: "(REST/GraphQL API, микросервисы, авторизация)",
            },
            {
              title: "Frontend высокого уровня",
              description: "(React, Vue, TypeScript, интерактивный UI/UX)",
            },
            {
              title: "Проектирование баз данных",
              description: "(SQL/NoSQL оптимизация, масштабируемые структуры)",
            },
          ],
        },
        {
          title: "DevOps и облачные решения",
          description:
            "Деплой не должен быть лотереей. Я автоматизирую инфраструктуру, усиливаю безопасность и использую облачные платформы, чтобы приложение стабильно работало 24/7 при любой нагрузке.",
          items: [
            {
              title: "CI/CD пайплайны",
              description: "(GitHub Actions, Docker, Kubernetes)",
            },
            {
              title: "Управление серверами",
              description: "(Linux, Nginx, балансировка нагрузки)",
            },
            {
              title: "Оптимизация производительности",
              description: "(Кэширование, сжатие, Lighthouse 90+)",
            },
          ],
        },
        {
          title: "Безопасность и оптимизация",
          description:
            "Медленные или уязвимые приложения разрушают доверие. Я усиливаю защиту, закрываю узкие места и помогаю продукту оставаться быстрым, безопасным и масштабируемым.",
          items: [
            {
              title: "Аудит кода",
              description: "(Рефакторинг, чистка технического долга)",
            },
            {
              title: "Пентесты",
              description: "(Оценка уязвимостей)",
            },
            {
              title: "Техническое SEO",
              description: "(SSR, метаданные, структурированные данные)",
            },
          ],
        },
        {
          title: "Web и mobile приложения",
          description:
            "Слабый интерфейс может утопить даже сильную идею. Я создаю адаптивные, точные веб- и мобильные приложения, которые соединяют дизайн, скорость и удобство.",
          items: [
            {
              title: "Кроссплатформенные приложения",
              description: "(Единая кодовая база для iOS/Android/Web)",
            },
            {
              title: "PWA",
              description: "(Офлайн-режим, push-уведомления)",
            },
            {
              title: "E-commerce",
              description: "(Checkout, платежи, API для каталога и склада)",
            },
          ],
        },
      ],
    },
    about: {
      subTitle: "Код с целью, продукт с запасом роста",
      title: "Обо мне",
      text: `Люблю чистую архитектуру
    и создаю масштабируемые быстрые решения
    от прототипа до продакшена`,
      imageAlt: "портрет",
      body: `Я создаю быстрые и понятные приложения: от точных React-интерфейсов до надежного serverless-бэкенда. Каждая строка кода должна ощущаться пользователем как качество.
Когда я не выпускаю релизы:
Публикую open-source эксперименты или помогаю с вашими
Объясняю разработку на Twitch/YouTube
Занимаюсь скалолазанием, где решение задач сразу проверяется на практике
Играю на гитаре, пока CI успешно проходит пайплайны`,
    },
    works: {
      subTitle: "Логика встречает эстетику",
      title: "Работы",
      text: `Избранные проекты, тщательно
    созданные с вниманием к деталям,
    результату и влиянию.`,
      previewAlt: "превью проекта",
      projects: [
        {
          id: 1,
          name: "E-commerce аксессуаров для смартфонов",
          description:
            "Интернет-магазин аксессуаров для телефонов: чехлы, зарядки, кабели и power bank с поддержкой MagSafe.",
          href: "",
          image: "/assets/projects/mobile-accessories-store.jpg",
          bgImage: "/assets/backgrounds/blanket.jpg",
          frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Node.js" },
            { id: 4, name: "MongoDB" },
            { id: 5, name: "Tailwind CSS" },
          ],
        },
        {
          id: 2,
          name: "Интернет-магазин растений",
          description:
            "Магазин редких и декоративных растений с чистым и удобным интерфейсом.",
          href: "",
          image: "/assets/projects/plant-shop.jpg",
          bgImage: "/assets/backgrounds/curtains.jpg",
          frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Stripe API" },
            { id: 4, name: "Tailwind CSS" },
          ],
        },
        {
          id: 3,
          name: "Маркетплейс Apple-техники",
          description:
            "E-commerce платформа для продуктов и аксессуаров Apple с акциями и фильтрацией по категориям.",
          href: "",
          image: "/assets/projects/apple-tech-store.jpg",
          bgImage: "/assets/backgrounds/map.jpg",
          frameworks: [
            { id: 1, name: "Blazor" },
            { id: 2, name: "ASP.NET Core" },
            { id: 3, name: "SQL Server" },
            { id: 4, name: "Bootstrap" },
          ],
        },
        {
          id: 4,
          name: "Магазин электроники и гаджетов",
          description:
            "Мультикатегорийный магазин электроники, бытовой техники и игровых устройств со спецпредложениями.",
          href: "",
          image: "/assets/projects/electronics-store.jpg",
          bgImage: "/assets/backgrounds/poster.jpg",
          frameworks: [
            { id: 1, name: "Vue.js" },
            { id: 2, name: "Laravel" },
            { id: 3, name: "MySQL" },
            { id: 4, name: "SCSS" },
          ],
        },
        {
          id: 5,
          name: "Маркетплейс декора для дома",
          description:
            "Подборка дизайнерского декора: мебель, вазы ручной работы и интерьерные предметы.",
          href: "",
          image: "/assets/projects/home-decor-store.jpg",
          bgImage: "/assets/backgrounds/table.jpg",
          frameworks: [
            { id: 1, name: "Angular" },
            { id: 2, name: "Firebase" },
            { id: 3, name: "GraphQL" },
            { id: 4, name: "Material UI" },
          ],
        },
        {
          id: 6,
          name: "Магазин цифровых игр",
          description:
            "Игровая платформа со скидками, топами продаж и подборками по жанрам.",
          href: "",
          image: "/assets/projects/game-store.jpg",
          bgImage: "/assets/backgrounds/curtains.jpg",
          frameworks: [
            { id: 1, name: "Svelte" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "MongoDB" },
            { id: 4, name: "Chakra UI" },
          ],
        },
      ],
    },
    contactSummary: {
      start: "Давайте создадим",
      strong: "запоминающееся",
      italic: "вдохновляющее",
      end: "веб-приложение",
      together: "вместе",
    },
    contact: {
      subTitle: "Вы придумываете, я создаю",
      title: "Контакты",
      text: `Есть вопрос или идея проекта?
    Буду рад обсудить детали!`,
      email: "Почта",
      emailAddress: "JohnDoe@gmail.com",
      phone: "Телефон",
      phoneNumber: "+33 7 12 12 32 12",
      socials: "Соцсети",
    },
    socials: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/ali.sanatidev/reels/",
      },
      {
        name: "Youtube",
        href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
      },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
      { name: "GitHub", href: "https://github.com/Ali-Sanati" },
    ],
  },
};
