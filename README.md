# 문건우 채널톡 과제

zip 파일로 내려고 했는데 naver 메일에 보낼 수 없는 형식이라 하여 github로 제출합니다.

## 사용 라이브러리

- react
- redux
- redux-saga (redux-observable 사용 해보려 했으나 rxjs를 써야한다기에 saga로 했습니다.)
- redux-form
- styled-components
- axios

## 구현사항

- 각 필드별 오름, 내림차순
- 검색 (효율적이진 못 한 것 같습니다.)
- 각 로우 삭제
- 국가 정보를 입력해서 Row 맨 마지막에 추가 (redux-form 사용)
- 처음 Network 통신해서 국가 정보를 가져오는 것을 redux-saga를 이용하여 구현
- 일부만 로딩 후 스크롤 내릴 시 추가 로딩 (처음 요청시 몇개만 가져오고 그 다음 추가 요청을 하는 식으로 구현하려 했는데, 몇개씩 가져오는 api가 없는 것 같아서 한번에 다 받아온 후, displayCount 만큼 보여주는 식으로 구현해보았습니다. 처음엔 Intersection Observer로 무한스크롤 구현했으나, IE 적용을 위해 scoll 이벤트에 throttle 적용했습니다.)
- 검색 기능 시 debounce를 적용
- cross browsing 적용하여, IE11에서도 돌아가게 구현 (ES5로 변환, core-js 사용)

IE11 에서 `예외가 발생했지만 catch할 수 없습니다` 에러 발생해서 해당글 참고해서 해결 하였습니다.
https://soraji.github.io/vue/2020/06/25/vueIEBlank2/
