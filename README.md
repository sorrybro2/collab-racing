## 🚗 collab-racing

> **우아한테크코스 4~5주차 오픈미션 프로젝트**  
> Java 백엔드와 JavaScript 프론트엔드로 구성된 **자동차 경주 협업 프로젝트**입니다.  
> 프론트엔드와 백엔드를 분리하여, 실제 서비스 환경에서의 API 통신과 협업 과정을 경험하는 것을 목표로 합니다.

---

### 🚀 프로젝트 개요

**collab-racing**은 2주차 미션 “자동차 경주 게임”을  
서버-클라이언트 구조로 리팩터링한 **풀스택 협업 프로젝트**입니다.

- **Frontend**: 게임의 UI 및 사용자 인터랙션 구현
    
- **Backend**: 자동차 경주 로직, 결과 계산, API 설계 및 배포
    

---

### 🛠️ 기술 스택

|구분|기술|
|---|---|
|**Frontend**|React, JavaScript (ES6+), HTML, CSS|
|**Backend**|Java 17, Spring Boot|
|**Build & Tools**|Gradle, Vite, npm|
|**협업**|GitHub, Discord|

---

### 🧱 프로젝트 구조

```
collab-racing/
 ├── frontend/             # 프론트엔드 코드
 │   ├── index.html
 │   ├── src/
 │   └── ...
 │
 ├── backend/              # 백엔드 코드
 │   ├── src/
 │   │   ├── main/
 │   │   └── test/
 │   └── build.gradle
 │
 ├── README.md
 └── .gitignore
```

---

### 🎯 주요 기능

#### Frontend

- 자동차 이름 및 시도 횟수 입력 UI 제공
- 진행 상황 애니메이션 및 결과 화면 표시
- 사용자 경험을 위한 **디자인 최적화 및 인터랙션 강화**
- 백엔드 API와 비동기 통신(fetch) 처리

#### Backend

- 자동차 이동 로직 및 우승자 계산 구현
- 랜덤 값 기반의 게임 진행 알고리즘
- REST API를 통한 경기 결과 전달
- 단위 테스트 및 배포 자동화 구성


---

### 👥 팀 협업 방식

|역할|담당 내용|
|---|---|
|**Frontend**|UI 구현, 게임 화면 애니메이션, API 연동|
|**Backend**|게임 로직, REST API 설계 및 서버 배포|
|**공통**|Git 브랜치 전략, 코드 리뷰, 테스트 및 리팩터링|

> **브랜치 전략:**  
> `main` - `frontend/feature/*`, `backend/feature/*`  
> 코드 리뷰 및 PR 병합 후 main 반영

---

### 🌱 학습 포인트

- 프론트엔드-백엔드 간 **RESTful API 통신 구조 이해**
    
- JSON 기반 데이터 교환 및 비동기 처리
    
- 클린 코드와 테스트 주도 개발(TDD) 실습
    
- 협업 환경에서의 Git 브랜치 관리 및 코드 리뷰 경험
    

---

### 🧑‍💻 Contributors

| Name | Role                                     |
| ---- | ---------------------------------------- |
| FE   | github id : **sorrybro2**, name : **트루**  |
| BE   | github id : **Wlsflfh**, name : **진리로** |