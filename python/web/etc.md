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

### User

* get_user_model()
  * settings.py 의 AUTH_USER_MODEL을 보고 user class 를 가져옴.
  * default : auth.User
* django는 admin 기능이 있어서 기본 user 모델이 있음.
  * 커스텀은 이걸 상속받아 쓰는데 이 때, AUTH_USER_MODEL 경로를 바꿔주면
  * get_user_model()로 가져온 코드도 유효하게 유지할 수 있지.
* 그런데 UserCreationForm은 get_user_model()이 아닌 User를 직접 import 하여 사용하기에
  * User를 커스텀하면 UserCreationForm도 커스텀해서 사용해야 하는 것.
* models.py 에서는 settings.AUTH_USER_MODEL을, 그 외 views.py, forms.py 등에서는 get_user_model()을 사용.