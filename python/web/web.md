# WEB

* World Wide Web. 정보 공간.

* 클라이언트(Client)의 URL을 통한 요청(request)과 서버(Server)의 HTML 응답(response)
* html 문서 한 장 자체는 조작 가능. 새로고침하여 다시 정보를 받으면 사라짐.
* 우클릭 > 검사 > Network > ctrl+R (새로고침) > 받아오는 정보 목록을 볼 수 있음.
* 우클릭 > 검사 / F12 / ctrl + shift + i : 크롬에서 개발자도구 여는 방법



## IP와 도메인

* IP(Internet Protocol): 8bit(0~255) 숫자의 집합. 주소와 동일.
* 도메인(Domain): 네트워크상의 컴퓨터를 식별하는 호스트명
* URL(Uniform Resource Locator): 도메인 + 경로. 실제로 해당 서버(네트워크)에서 자원이 어디에 있는지 알려주기 위한 고유 규약

## W3C

* 웹 표준.
* HTML과 CSS



## HTML

* Hyper Text Markup Language
* 웹 페이지를 작성하기 위한 역할 표시 언어

* HTTP: Hyper Text Transfer Protocol: 하이퍼텍스트를 주고받는 규칙



## CSS

* Cascading Style Sheet
* HTML을 꾸며줌



## 1. HTML 문서의 기본 구조

1. DOCTYPE 선언부: 사용하는 문서의 종류를 선언. 보통 html을 사용.
2. html 요소: HTML 문서의 최상위 요소. 문서의 root를 의미. head와 body로 구성.
3. head: 작성 내용은 브라우저에 나타나지 않음. 문서 제목, 문자코드(인코딩) 등 문서 정보와 CSS 선언, 외부 로딩 파일 지정, og와 같은 메타태그 선언 등으로 이루어짐.
4. body: 브라우저 화면에 나타나는 정보로 실제 내용에 해당.



## 2. Tag와 Dom tree

### 2.1 요소(Element)

* HTML의 element는 태그와 내용(contents)으로 구성되어 있다.
* 태그는 대소문자 구별하지 않으나 소문자로 작성해야 한다. 요소간 중첩이 가능하다.

```html
<여는태그>웹 문서</닫는태그>
```

### 2.2 Self-closing element

* 닫는태그가 없는 태그도 존재한다. 내용이 필요 없는 것들. 예) img, br, hr 등

```html
<img src="url"/>
```

### 2.3 속성(Attribute)

* 태그에는 속성(Attribute)이 지정될 수 있다. 예) href 등

```html
<a href="google.com"/>
```

* id, class, style은 모든 태그 사용 가능.

### 2.4 DOM트리

* DOM(Document object model) TREE: 태그는 중첩 사용 가능하며, 이때 부모-자식, 형제 관계를 갖는다.
  * 예) body - h1: 부모 - 자식 관계, li : 형제 관계, h1 - ul : 형제

```html
<body>
    <h1>웹문서</h1>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
</body>
```

### 2.5 시맨틱태그

* 시맨틱태그: 컨텐츠의 의미를 설명하는 태그. 
* 의미있는 정보의 그룹을 태그로 표현하여 개발자 및 사용자 뿐만 아니라 검색엔진 등에 유용하도록 함.
  * non semantic 요소: div, span 등
* HTML5에 새롭게 추가된 시맨틱태그 - header, nav, aside, section, article, footer
  * 구글 뉴스와 네이버 뉴스 Web Developer - information - view document outline으로 구조 보기	
  * (구글이 훨씬 구조화가 잘 되어있네. 네이버뉴스는 구조화가 잘 되어있지 않아서 정보를 뽑아내기 어려움.)
  * SEO(검색 엔진 최적화): 웹 페이지 검색엔진이 자료를 수집하고 순위를 매기는 방식에 맞게 웹 페이지를 구성해서 검색 결과의 상위에 나올 수 있도록 하는 작업
    * 예)구조화가 잘 되어있으면 구글 크롤러 봇이 정보를 긁어서 보여주기 쉽다.



## HTML Tag 정리

* 시작하기

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <title>HTML연습</title>
    </head>
    <body>

    </body>
</html>
```

* h1 ~ h6

```html
<h1>Hello, world!</h1>
```

* strong, b / em, i / del / mark

```html
<strong>굵게, b보다 시맨틱</strong>
<b>굵게</b>
<em>이탤릭(기울임), i보다 시맨틱</em>
<i>이탤릭</i>
<del>취소선</del>
<mark>형광펜</mark>
```

* sub, sup

```html
<p>log<sub>2</sub>10</p>
<p>2<sup>3</sup></p>
```

* p: paragraph. 문단 구분. 
  * p tag에서 띄어쓰기를 원하는 만큼 반영되게 하려면 `&nbsp;`를 사용해야 함
* 줄, 엔터

```html
<hr>
<br>
```

* pre: 띄어쓰기, 엔터 반영됨.
* q, blockquote: 짧은, 긴 인용문

```html
<q id="q">짧은 인용문. 따옴표 안에 들어감.</q>
<blockquote>
    긴 인용문. 들여쓰기로 표현.
</blockquote>
```

* ul: undorderd list, ol: ordered list

```html
<ul>
    <li style="list-style-type: square">A</li>
    <li>B</li>
</ul>
<!--숫자, 알파벳, 로마자 등 사용 가능. reversed도 가능하며, start나 value를 직접 넣어 시작을 변경할 수도 있다. emmet이용, ul>li*5 하는 식으로 쉽게 입력할 수 있다.-->
<ol type="a" start="2">
    <li>b</li>
    <li value="5">e</li> 
</ol>
```

* a tag: 링크 이동. 페이지 내에서, 로컬 폴더 안 html 페이지로, 외부 사이트 연결 모두 가능하다.

```html
<h1 id="google"><a href="https://www.google.com" target="_blank">구글로 가기</a></h1>
<a href="#google">구글</a>
<a href="practice/practice.html" target="_blank"></a>    
```



* 아직 더 정리해야함









* 참고: [웹 개발자 로드맵](https://github.com/devJang/developer-roadmap)
* html5가 현재 웹표준인데 익스플로러는 지원 안 되는 게 엄청 많음. 그래서 크롬을 추천하는 것.

* 리스트 형식 [w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp): 태그, CSS 속성도 여기서 찾아볼 수 있음. 응용 기능은 다른 사이트 참조.

* 웹기술 [MDN](https://developer.mozilla.org/ko/)

* [input type attribute](https://www.w3schools.com/tags/att_input_type.asp)