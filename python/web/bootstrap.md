**0. start**

* CDN을 이용해 Bootstrap에 작성된 CSS, JS를 활용한다.
  * CDN: Content Delivery(Distribution) Network
  * 컨텐츠(CSS, JS, Image, Text 등)를 효율적으로 전달하기 위해 여러 노드를 가진 네트워크에 데이터를 제공하는 시스템.
  * 개별 end-user의 가까운 서버를 통해 빠르게 전달 가능하다.(지리적 이점)
  * 외부서버를 활용하여 본인 서버의 부하가 줄어든다.
  * CDN은 보통 적절한 수준의 캐시 설정으로 빠르게 로딩할 수 있다.

**1. Utilities**

**1.1 Spacing**

```css
.m-0 {
    margin: 0 !important;
}
.mr-0 {
    margin-right: 0 !important;
}
```

* m, p
  * m: margin
  * p: padding
* t, b, l, r, x, y
  * t: top
  * b: bottom
  * l: left
  * r: right
  * x: left, right
  * y: top, bottom
* 브라우저 기본 rem은 16px
  * 0: 0rem: 0px
  * 1: 0.25rem: 4px
  * 2: 0.5rem: 8px
  * 3: 1rem: 16px
  * 4: 1.5rem: 24px
  * 5: 3rem: 48px
  * n1~n5: 음수
* auto

**1.2 Color**

* primary(파랑), secondary(회색), success(초록), info(민트), waring(노랑), danger(빨강), light, dark
* .bg-primary
  * background-color: primary
* .text-success
* .alert-warning
* .btn-secondary
* .navbar-dark .bg-primary

**1.3 border**

