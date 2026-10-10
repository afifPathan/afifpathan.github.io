import { Project, ExperienceItem, SkillCategory, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Afif Pathan',
  title: 'Senior Mobile Architect & Flutter Lead',
  subtitle: 'Software Architect · AI & Full-Stack Engineer',
  location: 'Ahmedabad, India',
  email: 'afif.pathan52@gmail.com',
  phone: '+91 8200614344',
  github: 'https://github.com/afifPathan',
  githubUser: 'afifPathan',
  linkedin: 'https://linkedin.com/in/afif-pathan',
  yearsTotal: '8+',
  yearsMobile: '6+',
  productionPlatforms: '9+',
  summary:
    'Senior mobile architect and Flutter specialist with 8+ years of software engineering experience, including 6+ years delivering production-grade cross-platform applications. Proven track record architecting scalable solutions across e-commerce, EdTech, insurance, healthcare, fintech and AI-enabled products. Expertise in Clean Architecture, SOLID principles, BLoC/Cubit/Riverpod, Firebase, REST/GraphQL APIs, native Android and CI/CD pipelines. Adept at technical leadership, AI-assisted development workflows, Web3 integrations and real-time system design.',
  languages: ['English', 'Hindi', 'Gujarati', 'Urdu'],
  award: {
    title: 'Rising Star Award (2020)',
    organization: 'Webclues Infotech',
    description: 'Recognized for architectural leadership and outstanding contribution to product delivery on NewsPod.',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'buyzaar',
    title: 'Buyzaar',
    tagline: 'Full-Stack Hyperlocal Commerce Platform on Flutter Web & Firebase',
    role: 'Founder & Lead Engineer',
    period: 'Jan 2025 – Present',
    category: 'Mobile',
    featured: true,
    problem:
      'Hyperlocal commerce requires seamless mobile-first shopping with instant checkout and real-time order tracking without forcing customers into complex multi-step app installs.',
    architecture:
      'Feature-based Clean Architecture separating Presentation (Flutter Material 3), Application (Cubit/BLoC), and Domain/Data layers backed by Cloud Functions and Firestore real-time streams.',
    contributions: [
      'Architected and delivered full-stack platform covering customer catalog, cart, WhatsApp-based automated ordering, and authenticated administrative workflows.',
      'Designed reusable Firebase data/application layers ensuring long-term maintainability and modular state management.',
      'Implemented real-time order lifecycle tracking, responsive Material 3 UI, and client-side image caching pipeline.',
      'Integrated Gemini-powered product content generation and GitHub-based product-data automation workflows.',
    ],
    technologies: [
      'Flutter Web',
      'Dart',
      'Firebase Auth',
      'Firestore',
      'Storage',
      'Cloud Functions',
      'Cubit / BLoC',
      'Gemini AI',
      'GitHub Actions',
    ],
    metrics: 'Production live on Flutter Web with automated WhatsApp pipeline',
    links: {
      github: 'https://github.com/afifPathan/Buyzaar',
      live: 'https://buyzaar-26379.web.app/',
    },
    architectureLayers: {
      presentation: 'Flutter Web (Material 3 Adaptive UI, Cart/Catalog views)',
      domain: 'Feature-based Use Cases, Order & Cart business entities',
      data: 'Firestore reactive streams, Cloud Storage caching, Gemini API pipeline',
    },
  },
  {
    id: 'trading-bot-dashboard',
    title: 'Trading Bot Terminal Dashboard',
    tagline: 'Real-Time Observability SPA for Algorithmic Trading Systems',
    role: 'Full-Stack Engineer',
    period: 'Jan 2025 – Present',
    category: 'Web & Cloud',
    featured: true,
    problem:
      'Algorithmic trading demands instantaneous execution visibility, sub-second telemetry, and robust connection recovery without UI lockup or stale data during high-volatility sessions.',
    architecture:
      'Event-driven SPA built with React 18 and TanStack Query, powered by a custom native WebSocket manager with exponential backoff, reconnect recovery, and event deduplication.',
    contributions: [
      'Developed real-time trading observability SPA providing live portfolio P&L, open positions, executed orders, and Telegram signal feeds.',
      'Architected native WebSocket connection lifecycle manager with exponential backoff and message deduplication.',
      'Built dark-first technical UI with interactive Recharts charting, strict TypeScript contracts, and automated frontend testing suite.',
      'Configured production deployment and automated CI/CD pipeline on Cloudflare Pages.',
    ],
    technologies: [
      'React 18',
      'TypeScript 5.5',
      'Vite 5',
      'Tailwind CSS',
      'TanStack Query',
      'Native WebSocket',
      'Recharts',
      'Vitest',
    ],
    metrics: 'Sub-second real-time streaming with automated reconnect & zero data loss',
    links: {
      github: 'https://github.com/afifPathan/trading-bot-dashboard',
      live: 'https://dashboard.nseswingtrading.dpdns.org/',
    },
    architectureLayers: {
      presentation: 'Dark-first responsive terminal UI, interactive financial charts',
      domain: 'Strict TypeScript contracts for order books, P&L, signals, and system telemetry',
      data: 'Native WebSocket manager, TanStack Query cache, exponential backoff reconnect',
    },
  },
  {
    id: 'stock-trading-bot',
    title: 'Swing Delivery Stock Trading Bot',
    tagline: 'Automated NSE Equity Trading Engine with Risk Controls',
    role: 'Lead Engineer',
    period: 'Jan 2025 – Present',
    category: 'Systems & AI',
    featured: true,
    problem:
      'Systematic stock trading requires high-precision signal validation, zero-duplicate order protection, and autonomous risk circuit breakers during live NSE market hours.',
    architecture:
      'Modular Python daemon orchestrated via systemd on Ubuntu, integrating Angel One SmartAPI, SQLite persistence, and dual paper/live execution pathways.',
    contributions: [
      'Designed Python-based NSE trading engine evaluating 5-minute candle data, EMA 9/21 crossovers, VWAP, and volume confirmation.',
      'Built broker-verified execution layer with position reconciliation, duplicate-order protection, and daily loss circuit breakers.',
      'Separated paper simulation and live trading pathways with hardware kill-switch and instant Telegram alerts.',
      'Packaged systemd deployment with automated market-hours scheduler and daemon health checks.',
    ],
    technologies: [
      'Python',
      'Angel One SmartAPI',
      'SQLite',
      'Telegram API',
      'systemd',
      'Ubuntu/Linux',
      'REST APIs',
    ],
    metrics: 'Broker-verified execution with automated kill-switches & risk circuit breakers',
    links: {
      github: 'https://github.com/afifPathan/swing_delivery_stock_trading_bot',
    },
    architectureLayers: {
      presentation: 'Real-time Telegram notifications, bot status alerts & health reports',
      domain: 'EMA 9/21, VWAP, Volume confirmation logic, Risk Management Circuit Breakers',
      data: 'Angel One SmartAPI, SQLite local trade journal, live broker reconciliation',
    },
  },
  {
    id: 'degreed',
    title: 'Degreed Enterprise Mobile',
    tagline: 'Enterprise Global Workforce Learning Platform',
    role: 'Senior Mobile Architect (Flutter)',
    period: 'Mar 2024 – Dec 2024',
    category: 'Mobile',
    featured: true,
    problem:
      'Architecting complex enterprise learning workflows for millions of global corporate users across iOS and Android while maintaining strict reliability and smooth 60fps performance.',
    architecture:
      'Enterprise-grade Clean Architecture with modular feature packaging and decoupled BLoC/Cubit state machines.',
    contributions: [
      'Architected Flutter-based EdTech application modules utilizing Clean Architecture and modularization principles for enterprise scalability.',
      'Delivered complex business flows with Cubit/BLoC state management, prioritizing performance, crash resilience, and production readiness.',
      'Collaborated with cross-functional global teams in Bangalore, ensuring consistent standards across store releases.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'BLoC / Cubit',
      'Firebase',
      'REST APIs',
      'CI/CD',
    ],
    metrics: 'Global enterprise scale with multi-million learner footprint',
    links: {
      appStore: 'https://apps.apple.com/app/degreed/id1086998254',
      playStore: 'https://play.google.com/store/apps/details?id=com.degreed.android',
    },
    architectureLayers: {
      presentation: 'Adaptive Flutter UI, modularized course and content players',
      domain: 'Enterprise learning progress, assessment use cases, credentialing logic',
      data: 'Enterprise REST APIs, token lifecycle management, offline sync mechanisms',
    },
  },
  {
    id: 'roadzen-mvpex',
    title: 'StrandD Fleet & rz_camera SDK',
    tagline: 'Enterprise Insurance Telematics & Inspection Camera Package',
    role: 'Software Developer (Flutter)',
    period: 'Apr 2022 – Mar 2023',
    category: 'SDK & Architecture',
    featured: false,
    problem:
      'Automotive insurance claims require high-resolution image/video capture with real-time editing and watermark validation across fragmented Android and iOS camera hardware.',
    architecture:
      'Modular Flutter package architecture with native platform channel bridges and consistent data-handling patterns.',
    contributions: [
      'Built modular Flutter components for an enterprise insurance inspection platform (StrandD Fleet).',
      'Architected and published reusable Flutter package rz_camera on pub.dev for standardized image/video capture with in-app edit support.',
      'Standardized core architectural capabilities across internal and client-facing insurance products.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Package Development (rz_camera)',
      'REST APIs',
      'Firebase',
      'Camera APIs',
    ],
    metrics: 'Published reusable rz_camera package on pub.dev',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=io.roadzen.stranddfleet',
      package: 'https://pub.dev/packages/rz_camera',
    },
  },
  {
    id: 'newspod',
    title: 'NewsPod Aggregator',
    tagline: 'High-Throughput Offline-First News Aggregator',
    role: 'Senior Flutter Developer',
    period: 'Sep 2020 – Mar 2022',
    category: 'Mobile',
    featured: false,
    problem:
      'Readers in low-bandwidth network conditions needed instant article loading, dynamic feed rendering, and seamless multi-view reading modes.',
    architecture:
      'Offline-first caching architecture utilizing SQLite local storage with background synchronization and dynamic layout parsers.',
    contributions: [
      'Engineered NewsPod, a production news aggregator with dynamic feed rendering, personalized topics, and multi-view reading modes.',
      'Implemented robust offline caching pipeline with SQLite to deliver instantaneous article loading.',
      'Awarded the prestigious Rising Star Award (2020) by Webclues Infotech for architectural leadership and outstanding delivery.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'SQLite / Offline Caching',
      'REST APIs',
      'Firebase',
      'State Management',
    ],
    metrics: 'Award-winning product delivery with instantaneous offline read support',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.newspod',
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'buyzaar-role',
    company: 'Buyzaar',
    role: 'Founder & Lead Engineer',
    period: 'Jan 2025 – Present',
    year: '2025',
    location: 'India',
    responsibilities: [
      'Architected and delivered a full-stack hyperlocal commerce platform on Flutter Web and Firebase, encompassing customer shopping, cart, WhatsApp-based ordering and authenticated admin workflows.',
      'Defined feature-based Clean Architecture with Cubit/BLoC state management and reusable Firebase data/application layers for long-term maintainability.',
      'Implemented end-to-end product catalog, order lifecycle, real-time status updates, image storage/caching and responsive Material 3 UI.',
      'Integrated Gemini-powered content generation and GitHub-based product-data automation; owned product planning, architecture and production deployment.',
    ],
    technologies: [
      'Flutter Web',
      'Dart',
      'Firebase Auth',
      'Firestore',
      'Cloud Functions',
      'Cubit/BLoC',
      'Gemini AI',
      'GitHub Actions',
    ],
    links: {
      repo: 'https://github.com/afifPathan/Buyzaar',
      live: 'https://buyzaar-26379.web.app/',
    },
    highlight: 'Full-stack production platform on Flutter Web & Firebase',
  },
  {
    id: 'trading-bot-role',
    company: 'Independent Systems Projects',
    role: 'Lead & Full-Stack Engineer',
    period: 'Jan 2025 – Present',
    year: '2025',
    location: 'Remote',
    responsibilities: [
      'Designed a Python-based NSE equity trading automation system leveraging Angel One SmartAPI, 5-minute market data, EMA 9/21, VWAP and volume confirmation signals.',
      'Built broker-verified execution, SQLite persistence, position reconciliation, duplicate-order protection, kill-switch and daily risk circuit breakers.',
      'Separated paper and live execution paths; packaged Ubuntu/systemd deployment with market-hours scheduling and health monitoring.',
      'Developed a real-time trading observability SPA (React 18, TypeScript 5.5, Vite 5, Tailwind CSS, TanStack Query, Native WebSocket, Recharts) providing portfolio P&L, positions, trades, orders, and Telegram signal telemetry.',
    ],
    technologies: [
      'Python',
      'Angel One SmartAPI',
      'React 18',
      'TypeScript 5.5',
      'Vite 5',
      'Native WebSocket',
      'SQLite',
      'systemd',
    ],
    links: {
      repo: 'https://github.com/afifPathan/trading-bot-dashboard',
      live: 'https://dashboard.nseswingtrading.dpdns.org/',
    },
    highlight: 'Sub-second real-time telemetry and broker risk controls',
  },
  {
    id: 'degreed-role',
    company: 'Degreed Inc',
    role: 'Senior Mobile Architect (Flutter)',
    period: 'Mar 2024 – Dec 2024',
    year: '2024',
    location: 'Bangalore, India',
    responsibilities: [
      'Architected Flutter-based EdTech application modules using Clean Architecture and modular design principles for scalability and maintainability.',
      'Delivered complex business flows with Cubit/BLoC state management, prioritizing performance, stability and production readiness.',
      'Collaborated with globally distributed engineering teams, enforcing code quality, modular boundaries, and clean dependency inversion.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'BLoC/Cubit',
      'Firebase',
      'REST APIs',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/degreed/id1086998254',
      playStore: 'https://play.google.com/store/apps/details?id=com.degreed.android',
    },
    highlight: 'Enterprise-scale EdTech mobile architecture for global learners',
  },
  {
    id: 'rana-dev-role',
    company: 'Rana Dev',
    role: 'Senior Software Architect (Flutter)',
    period: 'Mar 2023 – Aug 2024',
    year: '2023',
    location: 'Washington, USA (Remote)',
    responsibilities: [
      'Designed responsive Flutter Web solutions with Google Maps integration for location-aware and real-time tracking experiences.',
      'Optimized asynchronous data pipelines and application responsiveness for demanding production web workloads.',
    ],
    technologies: [
      'Flutter Web',
      'Dart',
      'Google Maps API',
      'Asynchronous Streams',
      'Responsive UI',
    ],
    highlight: 'Real-time location streaming and Flutter Web performance optimization',
  },
  {
    id: 'roadzen-role',
    company: 'Mvpex Solution Pvt Ltd',
    partner: 'Roadzen (Partner Company)',
    role: 'Software Developer (Flutter)',
    period: 'Apr 2022 – Mar 2023',
    year: '2022',
    location: 'India',
    responsibilities: [
      'Built modular Flutter components for an enterprise insurance platform, establishing reusable architecture and consistent data-handling patterns.',
      'Developed reusable Flutter packages and SDK components (including rz_camera for image/video capture with edit support) to standardize capabilities across internal and client-facing products.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'rz_camera Package',
      'REST APIs',
      'Firebase',
      'Modular Architecture',
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=io.roadzen.stranddfleet',
      package: 'https://pub.dev/packages/rz_camera',
    },
    highlight: 'Published rz_camera package on pub.dev & insurance platform delivery',
  },
  {
    id: 'webclues-role',
    company: 'Webclues Infotech Pvt Ltd',
    role: 'Senior Flutter Developer',
    period: 'Sep 2020 – Mar 2022',
    year: '2020',
    location: 'Ahmedabad, Gujarat',
    responsibilities: [
      'Engineered NewsPod, a production news aggregator with dynamic rendering, offline caching, personalized feeds and multi-view reading modes for performance-focused delivery.',
      'Recognized with the Rising Star Award (2020) for architectural leadership and contribution to product delivery.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'SQLite / Offline Caching',
      'REST APIs',
      'Firebase',
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.newspod',
    },
    highlight: 'Rising Star Award (2020) for architectural leadership',
  },
  {
    id: 'ashutec-role',
    company: 'Ashutec Solutions Pvt Ltd',
    role: 'Flutter Developer',
    period: 'Sep 2019 – Aug 2020',
    year: '2019',
    location: 'Ahmedabad, Gujarat',
    responsibilities: [
      'Developed a cross-platform online examination application using Flutter and Firebase Realtime Database.',
      'Designed responsive UI/UX flows and optimized application behavior for consistent Android and iOS experiences.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Realtime Database',
      'Responsive UI/UX',
    ],
    highlight: 'Cross-platform real-time exam platform with low latency',
  },
  {
    id: 'smg-role',
    company: 'SMG Info Solutions Pvt Ltd',
    role: 'Android Developer',
    period: 'Aug 2017 – Sep 2019',
    year: '2017',
    location: 'Ahmedabad, Gujarat',
    responsibilities: [
      'Delivered native Android solutions in Java for an enterprise visitor-management product.',
      'Integrated QR, MiFare card readers, and POS-printing hardware workflows across the full Android application lifecycle.',
    ],
    technologies: [
      'Android',
      'Java',
      'QR Scanning',
      'MiFare Card Readers',
      'POS Hardware SDKs',
    ],
    highlight: 'Native hardware integration and enterprise visitor lifecycle',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Mobile Engineering',
    description: 'Production-grade cross-platform and native client systems',
    skills: [
      { name: 'Flutter', level: 'Architectural Mastery', context: '6+ years building enterprise applications & web targets' },
      { name: 'Dart', level: 'Language Expert', context: 'Asynchronous streams, isolates, custom packages & SDK design' },
      { name: 'Native Android', level: 'Production Experienced', context: 'Java, Kotlin, hardware integrations, lifecycle management' },
      { name: 'Responsive / Adaptive UI', level: 'Design Implementation', context: 'Adaptive layouts for mobile, tablet, and web viewports' },
    ],
  },
  {
    name: 'Software Architecture',
    description: 'Scalable patterns, dependency inversion, and modular design',
    skills: [
      { name: 'Clean Architecture', level: 'Core Methodology', context: 'Separation of Presentation, Domain, Data & Inversion of Control' },
      { name: 'SOLID Principles', level: 'Foundational Standard', context: 'Single responsibility, open-closed, interface segregation' },
      { name: 'Modularization', level: 'Enterprise Scale', context: 'Decoupled feature packages, SDK boundaries, minimal coupling' },
      { name: 'Feature-Based Design', level: 'Standard Pattern', context: 'Vertical-slice organization for maintainable micro-features' },
      { name: 'MVVM', level: 'Standard Pattern', context: 'Model-View-ViewModel data-binding and clean state separation' },
    ],
  },
  {
    name: 'State Management',
    description: 'Deterministic, testable, and reactive state systems',
    skills: [
      { name: 'BLoC / Cubit', level: 'Primary Paradigm', context: 'Stream-based event handling, predictable state machines' },
      { name: 'Riverpod', level: 'Production Ready', context: 'Compile-safe, testable unidirectional dependency injection' },
      { name: 'Provider', level: 'Legacy & Production', context: 'Scoped widget tree state injection and change notification' },
      { name: 'GetX', level: 'Experienced', context: 'Micro-controller routing and reactive state management' },
    ],
  },
  {
    name: 'Backend & Data',
    description: 'Cloud infrastructure, real-time sync, and offline persistence',
    skills: [
      { name: 'Firebase Suite', level: 'Full Platform', context: 'Auth, Firestore, Cloud Functions, Cloud Storage, Hosting' },
      { name: 'REST & GraphQL', level: 'Protocol Mastery', context: 'Strict contracts, serialization, query optimization, pagination' },
      { name: 'SQLite & Hive', level: 'Offline-First Core', context: 'Local caching, fast binary stores, offline schema migrations' },
    ],
  },
  {
    name: 'AI & Full-Stack Systems',
    description: 'Modern AI-driven workflows, trading bots, and web telemetry',
    skills: [
      { name: 'Gemini & OpenAI APIs', level: 'AI Integration', context: 'Automated content pipelines, LLM-assisted data generation' },
      { name: 'React 18 & TypeScript', level: 'Modern Frontend', context: 'Strict types, TanStack Query, Vite, Recharts, WebSocket SPAs' },
      { name: 'Python Systems & Trading', level: 'High-Frequency Bot', context: 'Angel One SmartAPI, broker reconciliation, EMA/VWAP signals' },
      { name: 'systemd & Linux', level: 'Production Operations', context: 'Ubuntu daemon packaging, market-hours scheduling, monitoring' },
    ],
  },
  {
    name: 'DevOps & Quality Engineering',
    description: 'Continuous integration, automated testing, and store delivery',
    skills: [
      { name: 'CI/CD Automation', level: 'Pipeline Design', context: 'GitHub Actions, Codemagic, Fastlane, Cloudflare Pages' },
      { name: 'Test-Driven Quality', level: 'Automated Testing', context: 'Vitest, React Testing Library, pytest/unittest, Dart test' },
      { name: 'Store Governance', level: 'Production Delivery', context: 'Google Play Console, Apple App Store Connect, compliance' },
      { name: 'Hardware & Integrations', level: 'Specialized Exposure', context: 'Google Maps, Mapbox, geofencing, payment SDKs, POS printers' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Sc. Information Technology',
    institution: 'GLS University',
    period: '2015 – 2017',
    location: 'Ahmedabad, Gujarat',
  },
  {
    degree: 'B.Sc. Information Technology',
    institution: 'KSV University',
    period: '2012 – 2015',
    location: 'Gandhinagar, Gujarat',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: 'Clean Architecture & Inversion of Control',
    subtitle: 'Business logic that outlives any UI framework',
    description:
      'UI frameworks and backend protocols change, but domain business rules must remain pure and decoupled. By strictly isolating Presentation from Domain and Data through abstraction interfaces, the codebase remains testable, maintainable, and resilient to third-party SDK deprecation.',
    codeSnippet: `// Pure Domain Use Case - Zero Framework Coupling
abstract class OrderRepository {
  Future<Either<Failure, Order>> submitOrder(OrderDraft draft);
  Stream<OrderState> watchOrderStatus(String orderId);
}

class PlaceOrderUseCase {
  final OrderRepository repository;
  PlaceOrderUseCase(this.repository);

  Future<Either<Failure, Order>> call(OrderDraft draft) {
    if (!draft.isValid) return Left(InvalidOrderFailure());
    return repository.submitOrder(draft);
  }
}`,
  },
  {
    title: 'Deterministic Reactive State (BLoC / Cubit)',
    subtitle: 'Predictable state transitions without hidden side effects',
    description:
      'Mobile and web applications fail when UI components mutate shared mutable state unpredictably. Adopting unidirectional event-to-state flows ensures that every user tap produces a traceable, loggable, and testable state mutation with zero memory leaks.',
    codeSnippet: `// Unidirectional BLoC Pattern
class TradingTelemetryCubit extends Cubit<TelemetryState> {
  final TelemetryRepository _repository;
  StreamSubscription? _sub;

  TradingTelemetryCubit(this._repository) : super(TelemetryInitial());

  void subscribeToFeed(String symbol) {
    emit(TelemetryConnecting());
    _sub?.cancel();
    _sub = _repository.streamPriceTicks(symbol).listen(
      (tick) => emit(TelemetryLive(tick)),
      onError: (err) => emit(TelemetryCircuitBroken(err.toString())),
    );
  }
}`,
  },
  {
    title: 'Resilient Offline-First Data & Reconciliation',
    subtitle: 'Zero downtime and instant UX regardless of connectivity',
    description:
      'Field apps, mobile commerce, and news aggregators must serve users seamlessly under volatile cellular conditions. Local SQLite/Hive persistence acts as the immediate source of truth, backed by idempotent background sync and conflict resolution queues.',
    codeSnippet: `// Optimistic Offline Persistence Layer
class CachedNewsRepository implements NewsRepository {
  final LocalSqliteStorage _localDb;
  final RemoteApiClient _apiClient;

  Future<List<Article>> getFeed({bool forceRefresh = false}) async {
    final cached = await _localDb.getArticles();
    if (cached.isNotEmpty && !forceRefresh) return cached;

    try {
      final remote = await _apiClient.fetchFeed();
      await _localDb.upsertBatch(remote);
      return remote;
    } catch (_) {
      return cached; // Graceful degradation
    }
  }
}`,
  },
  {
    title: 'Fail-Safe Systems & Automated Circuit Breakers',
    subtitle: 'Production safety is an architectural requirement, not an afterthought',
    description:
      'Whether managing NSE algorithmic order execution or high-volume payment checkouts, systems must feature hardware-level kill-switches, max daily drawdown circuit breakers, exponential backoff, and broker position reconciliation.',
    codeSnippet: `// Python Trading Daemon Risk Circuit Breaker
class RiskCircuitBreaker:
    def __init__(self, max_daily_loss: float):
        self.max_daily_loss = max_daily_loss
        self.is_tripped = False

    def validate_execution(self, current_pnl: float, symbol: str) -> bool:
        if self.is_tripped or current_pnl <= -abs(self.max_daily_loss):
            self.trip(reason=f"Max drawdown breached: {current_pnl}")
            return False
        return True

    def trip(self, reason: str):
        self.is_tripped = True
        logger.critical(f"[CIRCUIT BREAKER] {reason} - HALTING ORDERS")
        telegram.send_alert(f"🚨 KILL-SWITCH ACTIVATED: {reason}")`,
  },
];
