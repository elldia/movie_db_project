const moviesDB = [
  {
    id: 1,
    title: "어벤져스: 둠스데이 (Avengers: Doomsday)",
    releaseDate: "2026-12-18",
    poster: "poster/poster_avengersdoomsday.jpg",
    cast: ["로버트 다우니 주니어", "크리스 헴스워스", "안소니 마키", "페드로 파스칼", "바네사 커비"],
    genre: ["액션", "모험", "SF", "판타지"],
    runtime: 166,
    rating: null, // 개봉 예정 (평점 미정)
    synopsis:
      "세 개의 서로 다른 유니버스에서 온 영웅들이 치명적인 충돌 코스에 놓이고, 사상 최악의 위협인 닥터 둠과 맞서게 된다. 어벤져스, 판타스틱 4, X-맨이 한자리에 모이는 마블 시네마틱 유니버스 최대 규모의 사건.",
  }, {
    id: 2,
    title: "스파이더맨: 브랜드 뉴 데이 (Spider-Man: Brand New Day)",
    releaseDate: "2026-07-31",
    poster: "poster/poster_spidermanbrandnewday.jpg",
    cast: ["톰 홀랜드", "젠데이아", "세이디 싱크", "제이콥 바탈론", "존 번탈", "마크 러팔로"],
    genre: ["액션", "모험", "판타지"],
    runtime: 145,
    rating: 8.2,
    synopsis:
      "자신을 기억하는 사람이 아무도 없는 뉴욕에서, 피터 파커는 홀로 도시를 지키는 전업 스파이더맨으로 살아간다. 그러나 감당하기 힘든 압박 속에서 예상치 못한 신체적 변화가 시작되고, 눈에 보이지 않는 강력한 새로운 위협이 그를 향해 다가온다.",
  }, {
    id: 3,
    title: "오디세이 (The Odyssey)",
    releaseDate: "2026-07-17",
    poster: "poster/poster_theodyssey.jpg",
    cast: ["맷 데이먼", "톰 홀랜드", "앤 해서웨이", "로버트 패틴슨", "젠데이아"],
    genre: ["액션", "모험", "판타지"],
    runtime: 172,
    rating: 8.7,
    synopsis:
      "트로이 전쟁 이후 고향 이타카로 돌아가려는 오디세우스의 험난한 여정을 그린 크리스토퍼 놀란 감독의 대서사시. 외눈박이 거인, 세이렌, 마녀 키르케 등 신화 속 존재들과 맞서며 진정한 장애물이 무엇인지 깨닫는다.",
  }, {
    id: 4,
    title: "토이 스토리 5 (Toy Story 5)",
    releaseDate: "2026-06-19",
    poster: "poster/poster_toystory5.jpg",
    cast: ["톰 행크스", "팀 알렌", "조안 쿠삭", "그레타 리"],
    genre: ["애니메이션", "가족", "모험"],
    runtime: 102,
    rating: 8.4,
    synopsis:
      "우디, 버즈, 제시와 장난감 친구들 앞에 보니의 새로운 태블릿 '릴리패드'가 등장하며 놀이 시간의 판도가 바뀐다. 기술 앞에서 존재의 의미를 고민하게 된 장난감들의 이야기.",
  }, {
    id: 5,
    title: "악마는 프라다를 입는다 2 (The Devil Wears Prada 2)",
    releaseDate: "2026-05-01",
    poster: "poster/poster_thedevilwearsprada2.jpg",
    cast: ["메릴 스트립", "앤 해서웨이", "에밀리 블런트", "스탠리 투치"],
    genre: ["코미디", "드라마"],
    runtime: 119,
    rating: 8.3,
    synopsis:
      "20년 만에 돌아온 런웨이 매거진. 종이 매체의 몰락 속에서 살아남으려는 미란다 프리슬리와, 이제는 디올의 수장이 되어 돌아온 옛 조수 에밀리의 자존심을 건 대결이 펼쳐진다.",
  }, {
    id: 6,
    title: "마이클 (Michael)",
    releaseDate: "2026-04-24",
    poster: "poster/poster_michael.jpg",
    cast: ["자파 잭슨", "콜맨 도밍고", "니아 롱", "마일즈 텔러"],
    genre: ["전기", "드라마", "음악"],
    runtime: 127,
    rating: 7.0,
    synopsis:
      "잭슨 5의 리더로 시작해 세계 최고의 엔터테이너가 되기까지, 팝의 황제 마이클 잭슨의 삶과 음악적 여정을 그린 전기 영화. 실제 조카 자파 잭슨이 주연을 맡아 화제를 모았다.",
  }, {
    id: 7,
    title: "슈퍼 마리오 갤럭시 무비 (The Super Mario Galaxy Movie)",
    releaseDate: "2026-04-01",
    poster: "poster/poster_thesupermariogalaxymovie.jpg",
    cast: ["크리스 프랫", "안야 테일러조이", "찰리 데이", "잭 블랙", "브리 라슨"],
    genre: ["애니메이션", "모험", "코미디"],
    runtime: 98,
    rating: 7.5,
    synopsis:
      "버섯 왕국을 벗어나 우주로 향하는 마리오와 친구들. 새롭게 등장한 로잘리나 공주와 함께 은하계 곳곳을 탐험하며 바우저와 그의 아들 바우저 주니어의 계략에 맞선다.",
  }, {
    id: 8,
    title: "프로젝트 헤일메리 (Project Hail Mary)",
    releaseDate: "2026-03-20",
    poster: "poster/poster_projecthailmary.jpg",
    cast: ["라이언 고슬링", "산드라 휠러", "제임스 오티즈"],
    genre: ["SF", "모험"],
    runtime: 156,
    rating: 8.4,
    synopsis:
      "기억을 잃은 채 우주선에서 깨어난 과학 교사 라일랜드 그레이스. 태양을 소멸시키는 정체불명의 물질을 막기 위한 임무를 파악해가던 중, 예상치 못한 외계 생명체와의 우정을 통해 인류 구원의 실마리를 찾아간다.",
  }, {
    id: 9,
    title: "폭풍의 언덕 (Wuthering Heights)",
    releaseDate: "2026-02-13",
    poster: "poster/poster_wutheringheights.jpg",
    cast: ["마고 로비", "제이콥 엘로디", "홍 차우", "샤자드 라티프"],
    genre: ["로맨스", "드라마"],
    runtime: 136,
    rating: 6.2,
    synopsis:
      "요크셔 황무지를 배경으로 캐서린 언쇼와 히스클리프의 강렬하고 파괴적인 사랑을 그린 에밀리 브론테 원작 소설의 새로운 각색작. 계급과 욕망, 집착이 뒤엉킨 격정적인 로맨스가 펼쳐진다.",
  },
];
