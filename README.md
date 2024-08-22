## freewheelin

안녕하세요, 프리윌린 과제전형에 참가하게 된 탁민주 입니다 :)

### 설계방향 및 의도

#### 1. 컴포넌트 설계

> - Board : 페이지에 대한 컴포넌트
> - SimilarWorksheetList : 유사 문제 리스트 컴포넌트
> - SimilarWorksheetListNodata : 유사문제 리스트의 내용이 없는 경우에 대한 컴포넌트
> - WorksheetEditList : 학습지 상세 편집 컴포넌트
> - WorksheetEditListNodata : 학습지 상세 편집에 내용이 없는 경우에 대한 컴포넌트
> - ProblemCard : 문제카드(유사문항의 문제카드와 학습지상세편집의 문제카드가 같은 컴포넌트를 사용하고 variant로 이를 구분합니다.)
> - Badge : 문제카드에 들어가는 난이도, 정답률, 타입을 노출되는 컴포넌트로 활용, 색상이나 labe에 대한 정보는 ProblemCard폴더에 badgeData로 가지고 있습니다.
> - HFlexBox : 가로로 배치되는 flexbox, space에 간격에 대한 정의를 넣고 나머지는 필요한 경우 css props를 조정해서 사용합니다.
> - VFlexBox : 세로로 배치되는 flexbox, space에 간격에 대한 정의를 넣고 나머지는 필요한 경우 css props를 조정해서 사용합니다.
> - IconButton : 해당 과제에서 사용되는 버튼들(유사문제(+유사문제 활성화), 삭제, 교체, 추가)
> - Icongraphy : svg를 컴포넌트로 리턴하고, size 조정이 가능하도록 확장한 컴포넌트(Icongraphy의 네이밍은 figma의 네이밍 사용)
> - Text : Typography를 표현하기 위한 컴포넌트 (typography네이밍은 figma의 네이밍 사용)

#### 2. state 관리

> - Board
> - SimilarWorksheetList
> - WorksheetEditList
