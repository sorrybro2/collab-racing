# 환경별 설정 가이드

프로젝트는 개발 환경(H2)과 배포 환경(MySQL)을 지원합니다.

---

## 🛠️ 개발 환경 (H2 Database)

### 1. 백엔드 실행
```powershell
cd backend
.\gradlew bootRun
```

또는 프로파일을 명시적으로 지정:
```powershell
.\gradlew bootRun --args='--spring.profiles.active=dev'
```

### 2. H2 Console 접속
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (비어있음)

### 3. 특징
- ✅ 별도 DB 설치 불필요
- ✅ 인메모리 DB (서버 재시작 시 데이터 초기화)
- ✅ 빠른 개발/테스트

---

## 🚀 배포 환경 (MySQL)

### 1. MySQL 설정 (사전 준비)

MySQL 서버에서 다음 SQL 실행:
```sql
CREATE DATABASE winners;
CREATE USER 'springuser'@'localhost' IDENTIFIED BY 'rorijin12!';
GRANT ALL PRIVILEGES ON winners.* TO 'springuser'@'localhost';
FLUSH PRIVILEGES;
```

### 2. 백엔드 실행
```powershell
cd backend
.\gradlew bootRun --args='--spring.profiles.active=prod'
```

### 3. 설정 파일 수정 (필요시)
`backend/src/main/resources/application-prod.properties`에서:
- `spring.datasource.url`: MySQL 서버 주소
- `spring.datasource.username`: DB 사용자명
- `spring.datasource.password`: DB 비밀번호

### 4. 특징
- ✅ 데이터 영구 저장
- ✅ 프로덕션 환경에 적합
- ⚠️ MySQL 서버 설치 필요

---

## 📝 프로파일 전환 방법

### 방법 1: application.properties 수정
`backend/src/main/resources/application.properties` 4번째 줄:
```properties
spring.profiles.active=dev   # 개발 환경
# spring.profiles.active=prod  # 배포 환경
```

### 방법 2: 실행 시 지정 (권장)
```powershell
# 개발 환경
.\gradlew bootRun --args='--spring.profiles.active=dev'

# 배포 환경
.\gradlew bootRun --args='--spring.profiles.active=prod'
```

### 방법 3: 환경 변수 설정
```powershell
# PowerShell
$env:SPRING_PROFILES_ACTIVE="prod"
.\gradlew bootRun
```

### 방법 4: JAR 실행 시
```powershell
.\gradlew build
java -jar build/libs/demo-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
```

---

## 🎯 현재 설정

기본값: **`dev` (H2 Database)**

로컬 개발 시에는 별도 설정 없이 바로 실행 가능합니다!

---

## ⚠️ 주의사항

1. **개발 환경 (dev)**
   - 서버 재시작 시 모든 데이터가 사라집니다
   - `spring.jpa.hibernate.ddl-auto=create-drop` 설정

2. **배포 환경 (prod)**
   - MySQL 서버가 실행 중이어야 합니다
   - `spring.jpa.hibernate.ddl-auto=update` 설정
   - 비밀번호 등 민감 정보는 환경 변수로 관리 권장

---

## 🔗 프론트엔드 연결

프론트엔드에서 Mock 데이터 대신 실제 API 사용:

### 클래식 모드
`frontend/src/services/racingApi.js` 6번째 줄:
```javascript
const USE_MOCK = false;
```

### 아이템 모드
`frontend/src/services/itemModeApi.js` 9번째 줄:
```javascript
const USE_MOCK_DATA = false;
```

백엔드 서버가 실행 중이어야 프론트엔드가 정상 작동합니다!

