## 3주차 과제

아래의 사항을 구현해주세요.

1. /api/detail/[carId] 호출시 3000ms의 딜레이가 있습니다.이 때 페이지가 로딩 중임을 유저가 알 수 있게 해주세요.
   1. 이때 / 에서 쓰는 loading.tsx가 아닌 /detail에 loading.tsx를 따로 만들어주세요
2. loading.tsx를 사용한다면 Skeleton 로딩 형태를 사용해주세요.(component/Skeleton을 사용)
3. /detail/[carId] - 상세 페이지를 수정해주세요

   1. 차량 이미지를 클릭시 차량 소개 페이지로 이동해야 합니다.

      1. url은 마음대로 정하나, 차량 코드 값을 dynamic segment로 받아 사용이 가능해야 합니다.
      2. ex) /intro/[carCode]

   2. 소개페이지는 아래 형태이며 정적인 페이지입니다.

      1. carDatas의 데이터를 이용하여, 이미지 및 소개글이 보여지도록 해주세요.
      2. 아래의 url의 컨텐츠를 참고해주세요.
      3. ex) http://www.encar.com/mocha/mochacontents.do?method=searchModelDetailSummary&idbid=3602&WT.hit=index_contents

   3. 장바구니 버튼을 만들어 주세요.
      1. 버튼의 UI는 중요치 않습니다.
      2. 버튼 클릭시 /api/addCart를 호출하도록 해주세요.

4. 장바구니 페이지를 만들어주세요.

   1. 장바구니 페이지는 동적인 페이지입니다.
      1. 페이지를 새로고침시마다 새로운 데이터가 불러와져야 합니다.
      2. 이를 위해 data cache가 사용되지 않게 해주세요.
   2. 구매하기 버튼 클릭시 /api/buy를 호출해주세요.
      1. 이 때 3초의 딜레이가 있으며, Loading중이라는 게 Suspense를 통해 보여져야 합니다.
      2. 랜덤으로 실패가 되게 되며 이때 error.tsx를 이용해 에러임을 보여주세요.
      3. 에러 페이지는 다시 시도하기 버튼 클릭시 해당 페이지를 다시 불러와야 합니다.

5. 생각해볼것
   1. 차량상세 페이지(/detail/[carid])를 SSR과 CSR중 어떤 방식으로 처리하는 게 나을지 생각해주세요.
      1. SSR 방식이라면 static rendering / dynamic rendering 중 어떤 것이 나을까요?
      2. static rendering이라면 모든 carId에 대해 페이지를 생성해놓을 수는 없을텐데 이 부분을 코드로 어떻게 처리할까요?
         1. generateStaticParams를 이용해 [dynamic segement]가 있는 페이지를 미리 빌드해놓을 수 있습니다.이 부분을 코드로 작성해 주세요. (https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

# 참고해볼만한 것들

[Next의 서버렌더링 전략] https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies
