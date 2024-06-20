## 3주차 과제

아래의 사항을 구현해주세요.

1. /api/detail/[carId] 호출시 3000ms의 딜레이가 있습니다.이 때 페이지가 로딩 중임을 유저가 알 수 있게 해주세요.
   1. 이때 / 에서 쓰는 loading.tsx가 아닌 /detail에 loading.tsx를 따로 만들어주세요
2. loading.tsx를 사용한다면 Skeleton 로딩 형태를 사용해주세요.(component/Skeleton을 사용)
3. /detail/[carId] - 상세 페이지를 수정해주세요

   1. 차량 이미지를 클릭시 차량 소개 페이지로 이동해야 합니다.

      1. url은 마음대로 정하나, 차량 코드 값을 dynamic segment로 받아 사용이 가능해야 합니다.

   2. 소개페이지는 아래 형태이며 정적인 페이지입니다.

      1. 이미지 및 소개글이 보여지도록 해주세요.
      2. /public/car_intro.png의 형태와 같은 UI 작업을 해주세요. 더 많은 참고를 원한다면 아래의 url의 컨텐츠를 참고해주세요.
         1. 종합평가 ~ 댓글까지 사이의 탭
         2. 소개글 오른쪽의 엔카 / 고객 평점은 빼고 구성해주세요.
            **3. 데이터는 car.ts를 이용해 routes handler를 하나 만들어서 사용해주세요.(제일 중요!)**
            **fetch의 cache처리는 어떻게 하실지 고민해주세요.**
      3. ex) http://www.encar.com/mocha/mochacontents.do?method=searchModelDetailSummary&idbid=3602&WT.hit=index_contents

# 참고해볼만한 것들

[Next의 서버렌더링 전략] https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies

[Next의 Data fetching / Cache] https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

[Route Handler] https://nextjs.org/docs/app/building-your-application/routing/route-handlers

제출은
week3 브랜치에
이름으로 폴더 생성하여 코드 업로드 해주심 되겠습니다!
ex) 폴더경로 seungchan/소스는 여기에

제가 놓친 부분이나 과제의 난이도 / 양 / 진행방식 / 업로드 방법에 대해 피드백 주실 부분은 편히 전달해주세요.
