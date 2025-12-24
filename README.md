# Scientific Calculator (공학용 전자계산기)

현대적이고 우아한 디자인의 공학용 계산기 웹 애플리케이션

## 📋 프로젝트 개요

기본 사칙연산과 과학 함수를 제공하는 웹 기반 계산기입니다. 직관적인 UI와 계산 히스토리 기능을 통해 향상된 사용자 경험을 제공합니다.

## ✨ 주요 기능

- **기본 연산**: 덧셈, 뺄셈, 곱셈, 나눗셈
- **과학 함수**: sin, cos, tan, ln, √, π
- **계산 히스토리**: 이전 계산 기록 저장 및 재사용
- **라이트/다크 모드**: 테마 전환 지원
- **반응형 디자인**: 모바일 최적화

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk, Noto Sans
- **Icons**: Material Symbols
- **Testing**: Jest
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## 📁 프로젝트 구조

```
calculator-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 배포 워크플로우
├── design/
│   ├── code.html              # 디자인 참고 HTML
│   └── screen.png             # 디자인 스크린샷
├── docs/
│   ├── PRD.md                 # 제품 요구사항 정의서
│   ├── TechSpec.md            # 기술 명세서
│   ├── TDD규칙.md             # TDD 개발 규칙
│   ├── SOLID원칙.md           # SOLID 설계 원칙
│   └── 배포가이드.md          # 배포 가이드
└── README.md
```

## 🚀 시작하기

### 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/nohyujin/calculator-app.git
cd calculator-app

# 로컬 서버 실행 (Python)
python -m http.server 8000

# 또는 Node.js
npx http-server -p 8000

# 브라우저에서 열기
# http://localhost:8000
```

### 테스트 실행

```bash
# 테스트 실행
npm test

# 테스트 감시 모드
npm test -- --watch

# 커버리지 확인
npm test -- --coverage
```

## 📦 배포

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

```bash
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin main
```

배포된 사이트: `https://nohyujin.github.io/calculator-app/`

자세한 내용은 [배포가이드.md](docs/배포가이드.md)를 참고하세요.

## 📖 문서

- [PRD (제품 요구사항 정의서)](docs/PRD.md)
- [기술 명세서](docs/TechSpec.md)
- [TDD 개발 규칙](docs/TDD규칙.md)
- [SOLID 설계 원칙](docs/SOLID원칙.md)
- [배포 가이드](docs/배포가이드.md)

## 🧪 개발 원칙

### TDD (Test-Driven Development)
코어 로직은 TDD 방식으로 개발합니다.
- ✅ 적용: 계산 엔진, 상태 관리, 히스토리 관리
- ❌ 제외: UI 렌더링, DOM 조작

### SOLID 원칙
객체지향 설계 5대 원칙을 준수합니다.
- **SRP**: 단일 책임 원칙
- **OCP**: 개방-폐쇄 원칙
- **LSP**: 리스코프 치환 원칙
- **ISP**: 인터페이스 분리 원칙
- **DIP**: 의존성 역전 원칙

## 🎨 디자인

디자인 파일은 `design/` 폴더에서 확인할 수 있습니다.
- `screen.png`: UI 디자인 스크린샷
- `code.html`: 디자인 참고 HTML

## 📝 라이선스

MIT License

## 👤 작성자

**nohyujin**
- GitHub: [@nohyujin](https://github.com/nohyujin)

## 🤝 기여

이슈와 풀 리퀘스트는 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📅 개발 로드맵

- [x] 프로젝트 설정 및 문서화
- [ ] 코어 로직 구현 (TDD)
- [ ] UI 구현
- [ ] 테스트 작성
- [ ] 배포
- [ ] 추가 기능 (키보드 입력, 추가 과학 함수 등)
