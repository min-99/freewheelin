## freewheelin

안녕하세요, 프리윌린 과제전형에 참가하게 된 탁민주 입니다 :)

### 설계방향 및 의도

#### 1. 컴포넌트 설계

> - Board : 페이지에 대한 컴포넌트
> - SimilarWorksheetList : 유사 문제 리스트 컴포넌트
>     - SimilarWorksheetListNodata : 유사문제 리스트의 내용이 없는 경우에 대한 컴포넌트
> - WorksheetEditList : 학습지 상세 편집 컴포넌트
>     - WorksheetEditListNodata : 학습지 상세 편집에 내용이 없는 경우에 대한 컴포넌트
> - ProblemCard : 문제카드(유사문항의 문제카드와 학습지상세편집의 문제카드가 같은 컴포넌트를 사용하고 variant로 이를 구분합니다.)<br/>
>   ----------- (공용 컴포넌트) -----------
> - Badge : 문제카드에 들어가는 난이도, 정답률, 타입을 노출되는 컴포넌트로 활용, 색상이나 labe에 대한 정보는 ProblemCard폴더에 badgeData로 가지고 있습니다.
> - HFlexBox : 가로로 배치되는 flexbox, space에 간격에 대한 정의를 넣고 나머지는 필요한 경우 css props를 조정해서 사용합니다.
> - VFlexBox : 세로로 배치되는 flexbox, space에 간격에 대한 정의를 넣고 나머지는 필요한 경우 css props를 조정해서 사용합니다.
> - IconButton : 해당 과제에서 사용되는 버튼들(유사문제(+유사문제 활성화), 삭제, 교체, 추가)
> - Icongraphy : svg를 컴포넌트로 리턴하고, size 조정이 가능하도록 확장한 컴포넌트(Icongraphy의 네이밍은 figma의 네이밍 사용)
> - Text : Typography를 표현하기 위한 컴포넌트 (typography네이밍은 figma의 네이밍 사용)

#### 2. state 관리

> - Board
```
state : (학습지)문제리스트, 유사문제로 선택된 문제Id(similarProblemId)
- (학습지)문제리스트를 변경할 수 있는 함수 제공
- 유사문제로 선택된 문제Id를 변경할 수 있는 함수 제공
```
> - SimilarWorksheetList
```
state : (유사)문제리스트, API로 요청할 유사문제로 선택된 문제Id(apiSimilarProblemId)
- props로 받은 값으로 유사문제 API를 요청할지를 결정합니다.
- [교체]버튼에 대한 이벤트 핸들러 제공
- [추가]버튼에 대한 이벤트 핸들러 제공
```
> - WorksheetEditList
```
- [유사문제]버튼에 대한 이벤트 핸들러 제공
- [삭제]버튼에 대한 이벤트 핸들러 제공
- level별 개수와 total count에 대한 값 제공
```

#### 3. 그 외 파일에 대한 설명
> - assets : figma에서 다운로드 받는 svg 파일
> - api/axiosInstance : baseUrl이 설정되어 있는 파일
> - index.css : global css (reset css와 global로 적용되어야할 css 정의)
> - type.ts : 해당 프로젝트에서 공용으로 사용하는 type과 상수 정의
> - typography.ts : 타이포그라피에 대한 정의
> - utill.ts : 유틸리티 파일
> - .env : 환경파일, baseurl 정의

#### 4. 적용한 성능 최적화
1) useMemo: 의존성 값이 변경될 때에만 함수의 결과를 재계산하여 메모이제이션된 값을 반환하는 훅입니다.
2) useCallback: 함수 객체의 재생성을 방지하고, 특정 값이 변경될 때에만 함수 객체를 다시 생성하도록 하는 훅입니다.
3) memo: 컴포넌트의 props가 변경되지 않으면, 메모이제이션된 렌더링 결과를 재사용하는 고차 컴포넌트입니다.
4) 컴포넌트를 매핑할 때는 key 값으로 index를 사용하지 않습니다.
5) useState에서 상태를 업데이트할 때는 함수형 업데이트를 사용합니다. 이렇게 하면 useCallback을 사용할 때 의존성을 추가하지 않아도 됩니다.
6) 조건부 렌더링을 통해 사용하지 않는 컴포넌트는 렌더링하지 않습니다.
7) 이미지 최적화를 위해 lazy loading, srcSet, sizes 속성을 사용했습니다. lazy loading으로 인해 뷰포트에 들어오지 않은 이미지는 로딩이 지연되어 초기 로딩 시간을 줄여줍니다. srcSet과 sizes 속성은 불필요하게 큰 이미지 로드를 방지하고, 해상도에 따라 적절한 이미지를 선택할 수 있도록 돕습니다.
8) 아직 적용하지는 않았지만, 리스트 컴포넌트의 경우 향후 성능 개선을 위해 보이지 않는 컴포넌트는 렌더링하지 않는 방법을 고려할 수 있습니다.

#### 5. 실행방법
```
yarn // package파일 설치
yarn start // 실행
```
