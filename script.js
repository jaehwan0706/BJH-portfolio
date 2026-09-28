// ==============================
// 데이터
// ==============================

const GITHUB_PROFILE = "https://github.com/jaehwan0706";
// TODO: 실제 배포 주소가 생기면 프로젝트별로 교체할 임시 링크입니다.
const DEMO_PLACEHOLDER = "https://www.naver.com";

const ICON_GITHUB = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`;
const ICON_GLOBE = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="8" r="6.8"/><path d="M1.5 8h13M8 1.4c1.8 1.9 2.8 4.1 2.8 6.6s-1 4.7-2.8 6.6c-1.8-1.9-2.8-4.1-2.8-6.6s1-4.7 2.8-6.6Z"/></svg>`;

// About 페이지 "나의 기술들" — leeboa.com의 카테고리형 스킬 리스트 스타일
const SKILL_GROUPS = [
  { title: "백엔드 & 언어", items: ["Java", "Python", "TypeScript", "JavaScript", "Spring Boot", "FastAPI"] },
  { title: "데이터베이스", items: ["MySQL", "PostgreSQL", "SQLite", "H2", "JPA / Hibernate"] },
  { title: "프론트엔드", items: ["React", "React Native", "Expo", "HTML5", "Tailwind CSS"] },
  { title: "인프라 & 형상 관리", items: ["AWS EC2", "Docker", "Nginx", "Vercel", "Git / GitHub"] },
  { title: "인증 · 결제 · AI", items: ["JWT", "Kakao OAuth", "Toss Payments", "Gemini API", "Claude API"] },
];

// 커리어 타임라인 (최신순)
const TIMELINE = [
  { date: "2026.07 ~", title: "검진AI", tag: "개인 프로젝트 · 백엔드", status: "진행중" },
  { date: "2026.07", title: "누리 (Nuri)", tag: "주식회사 뉴엔뉴 · 백엔드(LLM) 매핑" },
  { date: "2026.05", title: "5MIN", tag: "팀 프로젝트 · 백엔드 총괄 · LIVE" },
  { date: "2026.04", title: "NOFAKE", tag: "팀 프로젝트 · 프론트 총괄" },
  { date: "2026.02", title: "Goldenlink", tag: "팀 프로젝트 · DB 설계 총괄" },
  { date: "2025.11", title: "세대로드", tag: "팀 프로젝트 · DB 설계 · 해커톤" },
  { date: "2025.07", title: "EcoNavi", tag: "팀 프로젝트 · 백엔드(JWT·인증) · 해커톤" },
  { date: "2025.06 – 07", title: "진동 센서 모니터링", tag: "인포비정보기술 · 데이터 시각화" },
];

// 활동 & 수상
const ACTIVITIES = [
  { date: "2026", title: "C언어 프로그램 경진대회" },
  { date: "2026", title: "스터디 우수상 (자바)" },
  { date: "2026", title: "스터디 우수상 (블록체인)" },
  { date: "2026", title: "K-디지털 트레이닝 수료 (700시간)" },
  { date: "2026", title: "FIN:NECT Challenge — ENCORE" },
  { date: "2025.11", title: "전국 연합 동아리 SW해커톤 (구름톤 유니브)" },
  { date: "2025.07", title: "구름톤 충남지부 연합 해커톤" },
];

// 프로젝트 (최신순)
const PROJECTS = [
  {
    id: "checkup-ai",
    emoji: "🩺",
    title: "검진AI",
    badge: "진행중",
    category: "개인",
    tagline: "건강검진 결과와 생활 데이터를 분석해 AI가 요약 · 가이드를 제공하는 개인 건강관리 앱",
    period: "2026.06.09 – 07.01 (약 3주)",
    org: "개인 프로젝트",
    platform: "App (React Native · Expo) + Web (React)",
    team: "1명",
    role: [
      "건강검진 PDF 파싱 + Gemini AI 분석 · 총평 생성",
      "JWT · 카카오 로그인, Toss 결제(프리미엄) 연동",
      "혈압 · 혈당 등 생활기록 리포트 대시보드 구현",
    ],
    stack: [
      { label: "언어", items: ["Java 21", "TypeScript"] },
      { label: "프레임워크", items: ["Spring Boot", "React 19", "React Native (Expo)"] },
      { label: "DB", items: ["MySQL (배포)", "H2 (로컬)"] },
      { label: "API · 인증", items: ["JWT", "Kakao OAuth2", "Gemini API", "Toss Payments"] },
    ],
    links: { github: "https://github.com/jaehwan0706/checkupAI", demo: DEMO_PLACEHOLDER },
    images: [
      { src: "assets/checkup-ai/dashboard-mockup.svg", alt: "검진AI 건강 리포트 대시보드 목업", caption: "건강 리포트 대시보드 (AI 목업 이미지)" },
    ],
    retrospective:
      "혼자서 백엔드(Spring Boot) · 웹 · 모바일(Expo) 세 갈래를 동시에 개발하다 보니, 화면마다 API 응답 형식이 조금씩 달라 프론트에서 예외 처리가 늘어나는 문제가 있었습니다. " +
      "공통 응답 형식을 먼저 정하고 화면을 붙이는 순서로 바꾸면서 속도가 붙었고, 건강 데이터를 다루는 만큼 인증(JWT · Kakao)과 결제(Toss) 연동을 가장 먼저 검증한 뒤 나머지 기능을 쌓아올렸습니다.",
  },
  {
    id: "nuri",
    emoji: "📄",
    title: "누리 (Nuri)",
    badge: "실무",
    category: "실무",
    tagline: "사내 자료를 AI가 읽어 지정 양식 · 수출서류에 자동 입력하는 문서 자동화 시스템",
    period: "2026.07.06 – 07.26 (약 3주)",
    org: "주식회사 뉴엔뉴 · 고용노동부 K-디지털 트레이닝 프로젝트 3",
    platform: "Windows 데스크톱 앱 (브라우저 웹 UI)",
    team: "6명",
    role: ["AI 매핑 로직 설계 · 가상 예시 생성", "문서 파싱 로직 구현", "검색 성능 최적화"],
    stack: [
      { label: "언어", items: ["Python", "TypeScript", "JavaScript"] },
      { label: "프레임워크", items: ["React 19 + Vite", "FastAPI"] },
      { label: "RAG · 검색", items: ["LlamaIndex (BM25 + 벡터 + LLMRerank)"] },
      { label: "LLM · 임베딩", items: ["llama-cpp-python (Qwen GGUF)", "nomic-embed-text"] },
      { label: "데이터 · 문서", items: ["SQLite (sqlite-vec)", "openpyxl", "python-docx", "pypdf"] },
    ],
    links: { github: GITHUB_PROFILE },
    images: [
      { src: "assets/nuri/desktop-mockup.svg", alt: "누리 문서 자동화 데스크톱 앱 목업", caption: "문서 자동화 처리 화면 (AI 목업 이미지)" },
    ],
    retrospective:
      "v1(통합) → v2(DB 조회 + 데스크톱 펫 마스코트 UI) → v3(국가별 커스터마이징 + 실시간 작성 뷰) 순으로 반복 개선했습니다. " +
      "Claude API → 로컬 Ollama → 규칙 기반 순으로 자동 폴백되는 LLM 파이프라인을 설계해 오프라인 환경에서도 문서 생성이 끊기지 않도록 했고, " +
      "실제 데이터(layer1)와 AI가 생성한 예시 데이터(layer2)를 엄격히 분리하는 원칙을 세워 사내 문서에 잘못된 정보가 섞이지 않도록 했습니다.",
  },
  {
    id: "5min",
    emoji: "🏥",
    title: "5MIN",
    badge: "LIVE",
    category: "팀",
    tagline: "실시간 응급실 병상 정보 조회 · 관리 플랫폼",
    period: "2026.05.20 – 06.09 (약 3주)",
    org: "백석대학교 자바 수업 프로젝트",
    platform: "Web · App (React Native / Expo)",
    team: "4명",
    role: ["백엔드 총괄 — 설계 및 구축", "AWS EC2 배포 · 운영", "공공데이터 · OAuth 연동"],
    stack: [
      { label: "언어", items: ["Java", "JavaScript"] },
      { label: "프레임워크", items: ["Spring Boot", "React Native"] },
      { label: "DB", items: ["MySQL"] },
      { label: "인프라", items: ["AWS EC2", "Vercel"] },
      { label: "API · 인증", items: ["E-Gen 공공데이터 API", "Kakao/Google OAuth"] },
    ],
    links: { github: "https://github.com/jaehwan0706/5MIN", demo: DEMO_PLACEHOLDER },
    images: [
      { src: "assets/5min/splash.png", alt: "5MIN 스플래시 화면", caption: "스플래시" },
      { src: "assets/5min/list.png", alt: "응급실 목록 화면", caption: "응급실 목록 · 필터" },
      { src: "assets/5min/map.png", alt: "지도 화면", caption: "지도에서 병상 현황 보기" },
      { src: "assets/5min/goldentime.png", alt: "골든타임 증상 가이드 화면", caption: "골든타임 — 증상별 AI 응급처치 가이드" },
    ],
    retrospective:
      "배포(AWS EC2)까지 맡으면서, 로컬에서는 잘 되던 공공데이터 API 연동이 서버 환경에서 타임아웃이 나는 문제를 겪었습니다. " +
      "재시도 로직과 캐싱을 추가해 응답 속도를 안정시켰고, 백엔드 총괄로서 팀원들이 프론트 · 모바일에서 쓸 API 명세를 먼저 확정해두는 게 협업 속도를 좌우한다는 걸 배웠습니다.",
  },
  {
    id: "nofake",
    emoji: "⛓️",
    title: "NOFAKE",
    badge: "K-디지털",
    category: "팀",
    tagline: "블록체인 기반 한정판 상품 래플 · NFT 진품 인증 플랫폼",
    period: "2026.04.04 – 05.23 (약 7주)",
    org: "고용노동부 K-디지털 트레이닝 프로젝트 2",
    platform: "Web",
    team: "5명",
    role: ["프론트엔드 총괄", "UI 설계 및 화면 구성"],
    stack: [
      { label: "언어", items: ["TypeScript", "JavaScript"] },
      { label: "프레임워크", items: ["React", "Node.js"] },
      { label: "인증 · 지갑", items: ["Web3Auth", "Octomo"] },
      { label: "블록체인", items: ["Hyperledger Fabric (포인트)", "Ethereum (NFT 래플)"] },
    ],
    links: { github: "https://github.com/jaehwan0706/NOFAKE" },
    images: [
      { src: "assets/nofake/hero.png", alt: "NOFAKE 포인트 교환 메인 화면", caption: "포인트 교환 플랫폼 메인" },
      { src: "assets/nofake/raffle-list.png", alt: "래플 이벤트 목록", caption: "진행 중인 래플 이벤트" },
      { src: "assets/nofake/trust-stats.png", alt: "신뢰 지표 및 래플 진행 방식", caption: "공정성 지표 · 3단계 래플 진행" },
      { src: "assets/nofake/phone-verify.png", alt: "휴대폰 본인 확인 화면", caption: "휴대폰 본인 확인" },
    ],
    retrospective:
      "포인트 교환(Hyperledger Fabric)과 NFT 래플(Ethereum)이라는 서로 다른 두 블록체인을 한 서비스 안에서 자연스럽게 연결하는 게 가장 큰 과제였습니다. " +
      "체인마다 트랜잭션 처리 시간이 달라 로딩 상태를 세분화해서 보여줘야 했고, Web3Auth로 지갑 연동 경험을 최대한 단순하게 만드는 데 신경을 많이 썼습니다.",
  },
  {
    id: "goldenlink",
    emoji: "🚑",
    title: "Goldenlink",
    badge: "K-디지털",
    category: "팀",
    tagline: "위치 기반 실시간 응급의료시설 찾기 서비스",
    period: "2026.02.05 – 02.13 (약 9일)",
    org: "고용노동부 K-디지털 트레이닝 프로젝트 1",
    platform: "Web",
    team: "5명",
    role: ["DB Engineer — MySQL 스키마 설계 및 ERD 작성", "콘텐츠 조회 · 검색 최적화", "권한 기반 데이터 제약조건 설계"],
    stack: [
      { label: "언어", items: ["Java", "JavaScript"] },
      { label: "프레임워크", items: ["Spring Boot", "React"] },
      { label: "DB", items: ["MySQL"] },
      { label: "API · 연동", items: ["국립중앙의료원 Open API", "Kakao Map API"] },
    ],
    links: { github: "https://github.com/jaehwan0706/Goldenlink" },
    images: [
      { src: "assets/goldenlink/hospital-finder.png", alt: "병원·응급실 찾기 메인 화면", caption: "지도 기반 응급의료시설 찾기" },
      { src: "assets/goldenlink/first-aid-guide.png", alt: "상황별 응급처치 가이드 화면", caption: "상황별 응급처치 가이드" },
      { src: "assets/goldenlink/signup.png", alt: "회원가입 화면", caption: "회원가입" },
      { src: "assets/erd-goldenlink.svg", alt: "Goldenlink ERD", caption: "schema.sql 기반 ERD — EntityUser · boards · comments · bookmarks" },
    ],
    retrospective:
      "9일이라는 짧은 기간 안에 ERD부터 확정해야 해서, 초반 며칠은 스키마 설계에 집중했습니다. " +
      "병원 정보와 즐겨찾기를 한 테이블에 두는 대신 bookmarks 테이블을 따로 분리해, 조회 성능과 이후 기능 확장을 둘 다 챙기려고 했습니다.",
  },
  {
    id: "generation-road",
    emoji: "🧭",
    title: "세대로드",
    badge: "해커톤",
    category: "해커톤",
    tagline: "연령대별 여행 취향 차이를 좁혀, AI가 모두를 만족시킬 코스를 제안하는 플랫폼",
    period: "2025.11.22 – 11.23 (2일)",
    org: "구름톤 유니브 전국 연합 동아리 SW해커톤 출품작",
    platform: "App (React)",
    team: "4명",
    role: ["DB 설계 · 구축", "로그인 인증 기능 구현", "프론트 UI 설계"],
    stack: [
      { label: "언어", items: ["JavaScript", "Java"] },
      { label: "프레임워크", items: ["React", "Spring Boot"] },
      { label: "DB", items: ["MySQL"] },
      { label: "API · 인증", items: ["JWT", "Spring Security"] },
    ],
    links: { github: GITHUB_PROFILE },
    images: [
      { src: "assets/generation-road/mockup.svg", alt: "세대로드 여행 코스 추천 화면 목업", caption: "세대별 여행 코스 추천 화면 (AI 목업 이미지)" },
    ],
    retrospective:
      "2일 해커톤이라는 시간 제약 속에서 DB 설계부터 로그인 인증, 프론트 UI까지 혼자 맡다 보니 우선순위를 명확히 나눠야 했습니다. " +
      "핵심 기능(연령대별 코스 추천)이 동작하는 걸 먼저 보여주는 데 집중하고, 마무리 단계에서 인증 로직을 붙이는 순서로 진행해 발표 시간 안에 데모를 완성했습니다.",
  },
  {
    id: "econavi",
    emoji: "🌿",
    title: "EcoNavi",
    badge: "해커톤",
    category: "해커톤",
    tagline: "위치 기반 문화 정보 및 친환경 활동 안내 모바일 앱",
    period: "2025.07.28 – 07.29 (2일)",
    org: "구름톤 충남지부 연합 해커톤 출품작",
    platform: "App (Flutter, Android/iOS)",
    team: "5명",
    role: ["JWT 인증 · Spring Security 구현", "리소스 접근 제어(AccessHandler) 구현", "Point · Member 도메인 API 개발"],
    stack: [
      { label: "언어", items: ["JavaScript", "Java"] },
      { label: "프레임워크", items: ["Spring Boot", "Flutter"] },
      { label: "DB", items: ["MySQL"] },
      { label: "API · 인증", items: ["Kakao Map API", "JWT", "Spring Security"] },
    ],
    links: { github: GITHUB_PROFILE },
    images: [
      { src: "assets/econavi/mockup.svg", alt: "EcoNavi 지도 기반 친환경 활동 화면 목업", caption: "지도 기반 친환경 활동 안내 화면 (AI 목업 이미지)" },
    ],
    retrospective:
      "JWT 인증과 함께 AccessHandler로 리소스별 접근 제어를 직접 구현하면서, Spring Security의 필터 체인 순서를 이해하는 데 시간을 썼습니다. " +
      "해커톤이라 시간이 빠듯했지만, 인증 로직을 먼저 안정화해두니 이후 Point · Member API를 붙이는 속도가 훨씬 빨라졌습니다.",
  },
  {
    id: "vibration-sensor",
    emoji: "📈",
    title: "진동 센서 모니터링",
    badge: "실무",
    category: "실무",
    tagline: "자연재해 실시간 감지를 위한 진동 센서 데이터 수집 및 시각화 플랫폼",
    period: "2025.06.01 – 07.31 (2개월)",
    org: "(주)인포비정보기술 · 청년 일경험 프로젝트",
    platform: "Data Visualization (Python)",
    team: "4명",
    role: ["전체적인 개발 일정 관리", "FFT 변환 결과 실시간 그래프 시각화 (Matplotlib)", "주파수별 진동 세기 모니터링 대시보드 구현"],
    stack: [
      { label: "언어", items: ["Python"] },
      { label: "프레임워크", items: ["NumPy", "Matplotlib", "SciPy"] },
      { label: "DB", items: ["MySQL (PyMySQL)"] },
      { label: "API · 통신", items: ["MQTT (Paho-MQTT)"] },
    ],
    links: { github: GITHUB_PROFILE },
    images: [
      { src: "assets/vibration-sensor/mockup.svg", alt: "진동 센서 모니터링 대시보드 목업", caption: "실시간 FFT 스펙트럼 · 센서 상태 대시보드 (AI 목업 이미지)" },
    ],
    retrospective:
      "센서 데이터를 MQTT로 수신해 FFT로 변환하고 실시간으로 그래프를 갱신하는 과정에서, 데이터가 몰릴 때 화면 갱신이 버벅이는 문제를 겪었습니다. " +
      "그래프 갱신 주기를 조절하고 필요한 구간만 다시 그리도록 최적화하면서, 실시간성과 화면 부드러움 사이의 균형을 맞추는 법을 배웠습니다.",
  },
];

// ==============================
// 렌더링 — About
// ==============================

function renderSkillGroups() {
  const el = document.getElementById("about-skills");
  el.innerHTML = SKILL_GROUPS.map((g, i) => `
    <div class="skill-group" data-reveal>
      <span class="skill-group-index eng">${i + 1}</span>
      <div class="skill-group-body">
        <div class="skill-group-title">${g.title}</div>
        <div class="skill-group-items">${g.items.map((s) => `<span>${s}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = TIMELINE.map((t) => `
    <li class="timeline-item" data-reveal>
      <div class="timeline-date eng">${t.date}</div>
      <div class="timeline-dot"></div>
      <div class="timeline-body">
        <div class="timeline-title">${t.title}${t.status ? `<span class="timeline-status">${t.status}</span>` : ""}</div>
        <div class="timeline-tag">${t.tag}</div>
      </div>
    </li>
  `).join("");
}

function renderActivities() {
  const el = document.getElementById("activity-grid");
  el.innerHTML = ACTIVITIES.map((a) => `
    <div class="activity-card" data-reveal>
      <span class="activity-icon">🏆</span>
      <div>
        <div class="activity-title">${a.title}</div>
        <div class="activity-date eng">${a.date}</div>
      </div>
    </div>
  `).join("");
}

// ==============================
// 렌더링 — Projects
// ==============================

const PROJECT_CATEGORIES = ["전체", "개인", "팀", "해커톤", "실무"];
let activeCategory = "전체";

function renderProjectFilters() {
  const el = document.getElementById("project-filters");
  el.innerHTML = PROJECT_CATEGORIES.map((cat) => `
    <button class="filter-tab${cat === activeCategory ? " is-active" : ""}" data-category="${cat}">
      <span class="filter-check" aria-hidden="true"></span>${cat}
    </button>
  `).join("");

  el.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeCategory = tab.dataset.category;
      renderProjectFilters();
      renderProjectGrid();
      registerReveals();
    });
  });
}

let rowCarouselTimers = [];

function renderProjectGrid() {
  rowCarouselTimers.forEach(clearInterval);
  rowCarouselTimers = [];

  const el = document.getElementById("project-grid");
  const list = activeCategory === "전체" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  el.innerHTML = list.map((p) => {
    let media;
    if (p.images && p.images.length) {
      media = p.images
        .map((img, i) => `<img class="project-row-img${i === 0 ? " is-active" : ""}" src="${img.src}" alt="" loading="lazy" />`)
        .join("");
    } else {
      media = `<div class="project-row-fallback"><span>${p.emoji}</span></div>`;
    }
    const tags = p.stack.flatMap((s) => s.items).slice(0, 6);
    return `
      <div class="project-row" data-reveal>
        <a class="project-row-media" href="#${p.id}">
          ${media}
          <div class="project-row-overlay">
            <span class="project-row-title">${p.title}.</span>
            <span class="project-row-detail-link">Project Detail <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <div class="project-row-info">
          <p class="project-row-tagline">${p.tagline}</p>
          <div class="project-row-heading">
            <h3 class="eng">${p.title}</h3>
            <span class="project-row-badge eng">${p.badge}</span>
          </div>
          <dl class="project-row-meta">
            <div><dt>참여 기간</dt><dd>${p.period}</dd></div>
            <div><dt>인원</dt><dd>${p.team}</dd></div>
            <div><dt>플랫폼</dt><dd>${p.platform}</dd></div>
          </dl>
          <div class="project-row-tags">
            ${tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="project-row-links">
            ${p.links?.github ? `<a class="detail-link-btn eng" href="${p.links.github}" target="_blank" rel="noopener">${ICON_GITHUB} Github 보러가기</a>` : ""}
            ${p.links?.demo ? `<a class="detail-link-btn eng" href="${p.links.demo}" target="_blank" rel="noopener">${ICON_GLOBE} 홈페이지 보러가기</a>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");

  // 이미지가 여러 장인 프로젝트는 자동으로 순환하며 미리보기를 보여줍니다.
  el.querySelectorAll(".project-row-media").forEach((mediaEl) => {
    const imgs = mediaEl.querySelectorAll(".project-row-img");
    if (imgs.length < 2) return;
    let idx = 0;
    const timer = setInterval(() => {
      imgs[idx].classList.remove("is-active");
      idx = (idx + 1) % imgs.length;
      imgs[idx].classList.add("is-active");
    }, 2800);
    rowCarouselTimers.push(timer);
  });
}

function renderProjectDetail(project) {
  const side = document.getElementById("project-detail-side");
  const main = document.getElementById("project-detail-main");
  const keyword1 = project.stack[0]?.items?.[0];
  const keyword2 = project.stack[1]?.items?.[0];
  const tags = project.stack.flatMap((s) => s.items).slice(0, 8);

  side.innerHTML = `
    <span class="page-badge eng">${project.emoji} ${project.badge}</span>
    <h1 class="detail-title eng">${project.title}</h1>
    <p class="detail-sidebar-tagline">${project.tagline}</p>

    <dl class="info-table">
      <div class="info-row"><dt>기간</dt><dd>${project.period}</dd></div>
      <div class="info-row"><dt>인원</dt><dd>${project.team}</dd></div>
      <div class="info-row"><dt>플랫폼</dt><dd>${project.platform}</dd></div>
      <div class="info-row"><dt>수행</dt><dd>${project.org}</dd></div>
    </dl>

    <div class="detail-sidebar-tags">
      ${tags.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>

    <div class="detail-sidebar-links">
      ${project.links?.github ? `<a class="detail-link-btn eng" href="${project.links.github}" target="_blank" rel="noopener">${ICON_GITHUB} Github 보러가기</a>` : ""}
      ${project.links?.demo ? `<a class="detail-link-btn eng" href="${project.links.demo}" target="_blank" rel="noopener">${ICON_GLOBE} 홈페이지 보러가기</a>` : ""}
    </div>
  `;

  main.innerHTML = `
    <p class="detail-prose">
      핵심 기술은 <mark>${keyword1}</mark>${keyword2 ? `, <mark>${keyword2}</mark>` : ""} 등이며, 주요 역할은 <mark>${project.role[0]}</mark>이었습니다.
    </p>

    <h2 class="detail-h2">담당 역할</h2>
    <ul class="role-list">
      ${project.role.map((r) => `<li><span class="role-check">✓</span>${r}</li>`).join("")}
    </ul>

    <h2 class="detail-h2">기술 스택</h2>
    <div class="stack-groups">
      ${project.stack.map((s) => `
        <div class="stack-row">
          <span class="stack-label">${s.label}</span>
          <span class="tag-row">${s.items.map((t) => `<span class="tag">${t}</span>`).join("")}</span>
        </div>
      `).join("")}
    </div>

    <h2 class="detail-h2">ERD · 이미지</h2>
    ${renderImageGallery(project.images)}

    <h2 class="detail-h2">회고</h2>
    ${renderRetrospective(project.retrospective)}
  `;
}

function renderImageGallery(images) {
  if (images && images.length) {
    return `
      <div class="image-gallery">
        ${images.map((img) => `
          <figure class="image-card">
            <img src="${img.src}" alt="${img.alt || ""}" loading="lazy" />
            ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    `;
  }
  return `
    <div class="image-placeholder">
      <span class="image-placeholder-icon">🖼️</span>
      <p>ERD, 아키텍처 다이어그램, 실행 화면 스크린샷을 이곳에 추가해보세요.</p>
      <code>script.js</code> 의 해당 프로젝트 <code>images</code> 배열에 이미지 경로를 넣으면 표시됩니다.
    </div>
  `;
}

function renderRetrospective(text) {
  if (text) return `<p class="retrospective-text">${text}</p>`;
  return `<p class="retrospective-placeholder">무엇을 배웠고, 어떤 점이 아쉬웠는지 회고를 작성해보세요.</p>`;
}

// ==============================
// 라우팅 (해시 기반 4-페이지 전환)
// ==============================

const PAGE_IDS = ["page-home", "page-projects", "page-project-detail", "page-about"];

function showPage(id) {
  PAGE_IDS.forEach((pid) => {
    document.getElementById(pid).hidden = pid !== id;
  });
}

function route() {
  const hash = location.hash.replace("#", "");
  const project = PROJECTS.find((p) => p.id === hash);

  if (project) {
    renderProjectDetail(project);
    showPage("page-project-detail");
  } else if (hash === "projects") {
    showPage("page-projects");
  } else if (hash === "about") {
    showPage("page-about");
  } else {
    showPage("page-home");
  }
  window.scrollTo(0, 0);
  closeMenu();
}

window.addEventListener("hashchange", route);

// ==============================
// 햄버거 메뉴 (풀스크린 민트 오버레이)
// ==============================

const menuOverlay = document.getElementById("menu-overlay");

function openMenu() {
  menuOverlay.hidden = false;
}
function closeMenu() {
  menuOverlay.hidden = true;
}

document.getElementById("menu-toggle").addEventListener("click", openMenu);
document.getElementById("menu-close").addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menuOverlay.hidden) closeMenu();
});

// ==============================
// 홈 히어로 — 콜아웃 메모 (호버 시 표시, 터치 기기에서는 탭으로 토글)
// ==============================

function initHeroCallouts() {
  const callouts = document.querySelectorAll(".hero-callout");

  // 말풍선이 항상 아이콘 중앙에 뜨긴 하지만, 아이콘이 화면 가장자리에 가까우면
  // 화면 밖으로 잘릴 수 있어 실제 위치를 측정해 안쪽으로 밀어줍니다.
  function keepInViewport(note) {
    note.style.marginLeft = "";
    const width = note.getBoundingClientRect().width;
    let marginLeft = -width / 2;
    note.style.marginLeft = `${marginLeft}px`;
    const rect = note.getBoundingClientRect();
    const margin = 10;
    if (rect.left < margin) {
      marginLeft += margin - rect.left;
    } else if (rect.right > window.innerWidth - margin) {
      marginLeft -= rect.right - (window.innerWidth - margin);
    }
    note.style.marginLeft = `${marginLeft}px`;
  }

  callouts.forEach((btn) => {
    const note = btn.querySelector(".hero-callout-note");
    btn.addEventListener("mouseenter", () => keepInViewport(note));
    btn.addEventListener("focus", () => keepInViewport(note));
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = btn.classList.contains("is-open");
      callouts.forEach((c) => c.classList.remove("is-open"));
      if (!wasOpen) {
        keepInViewport(note);
        btn.classList.add("is-open");
      }
    });
  });
  document.addEventListener("click", () => {
    callouts.forEach((c) => c.classList.remove("is-open"));
  });
}

// ==============================
// 홈 히어로 — 터미널 타이핑 애니메이션
// ==============================

function initTerminalTyping() {
  const el = document.getElementById("terminal-text");
  if (!el) return;
  const lines = ["console.log('Hello, World!')", "// 함께 일하고 실제로 동작하는 서비스를 만듭니다"];
  let lineIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = lines[lineIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = false;
        setTimeout(() => { deleting = true; tick(); }, 1600);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        lineIdx = (lineIdx + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? 28 : 45);
  }
  tick();
}

// ==============================
// 스크롤 리빌 애니메이션
// ==============================

// IntersectionObserver의 threshold는 콜백이 "교차 비율이 실제로 변할 때"만 발생시키므로,
// 빠른 점프 스크롤로 요소가 threshold를 가로지르지 않고 지나가면 콜백이 호출되지 않아
// 영원히 안 보이는 문제가 있습니다. 그래서 스크롤 위치를 직접 체크하는 방식을 사용합니다.
let revealTargets = [];

function checkReveals() {
  const vh = window.innerHeight;
  revealTargets = revealTargets.filter((el) => {
    if (el.getBoundingClientRect().top < vh * 0.92) {
      el.classList.add("is-visible");
      return false;
    }
    return true;
  });
}

// 필터 클릭 등으로 카드가 새로 렌더링되면 새 요소를 감시 목록에 추가합니다.
function registerReveals() {
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (!el.classList.contains("is-visible") && !revealTargets.includes(el)) {
      revealTargets.push(el);
    }
  });
  checkReveals();
}

function observeReveals() {
  registerReveals();
  window.addEventListener("scroll", checkReveals, { passive: true });
  window.addEventListener("resize", checkReveals);
}

// simpleicons.org 등 외부 이미지가 실패해도 깨진 아이콘 대신 조용히 숨깁니다.
document.addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG" && e.target.classList.contains("skill-icon")) {
      e.target.style.display = "none";
    }
  },
  true
);

// ==============================
// 초기화
// ==============================

renderSkillGroups();
renderTimeline();
renderActivities();
renderProjectFilters();
renderProjectGrid();
route();
observeReveals();
initHeroCallouts();
initTerminalTyping();
