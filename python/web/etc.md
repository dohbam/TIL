### OS (operating System, 운영체제)

> 어떤 교수님의 말: OS는(, 컴퓨터 공학은) 추상화다.
>
> * 추상화의 두 가지 역할
>   * illusion : 램을 쪼개서 쓰는 모두가 CPU를 온전히 쓰는 것처럼 착각하게 해줌.
>   * protections: 각각의 작업(어플리케이션)을 보호
> * 논문 예
>   * 추상화 개념 중 일부를 무너뜨려 원하는 기능을 하도록

### 스타트업

>* 권장하지 않음.
>* 일이 끝나지 않는다. 24시간 생각중.
>* 친구들 모두 새벽에도 전화가 가능. 결혼은 과속이 아니면 할 엄두가 안 나는 삶.
>* 인생이 별 재미가 없어서 재밌는 얘기 해드릴 게 없네요.......
>* 잘 선택하면 다양한 개발을 해볼 수 있는 여건이 될 확률이 높은 건 스타트업인 게 맞음.

### Django

* settings.py 의 Timezone은 DB에 저장되는 시간을 변경하는 게 아님. 출력만 설정한 시간대로 해주는 것.
* 403 Forbidden
  * from django.http import HttpResponseForbidden
  * return HttpResponseForbidden("Error Mesage")
  * 401과의 차이점: 로그인 여부

