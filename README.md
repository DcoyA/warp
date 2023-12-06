## warp 프로젝트

프로젝트 warp 소개 및 유저페이지

### 프로젝트 세팅

- page

```
/home
 :메인 페이지
/copyright
 :이용약관 및 저작권
/partner
 : 파트너쉽 (유저 파트너 신청)
/profile
 : 유저 프로필 정보
/FAQ
 : faq

```

- skill
  - next13(page router)
  - tailwind css
  - typescript
  - react 18

### 인증

- 구글 로그인으로
  - 구글 로그인 계정 없으면 백단에서 생성 후 가입된 토큰 및 정보 return해서 로그인 유저는 로그인 된 것으로 보이도록 처리
  - 권한에 따라 분기
