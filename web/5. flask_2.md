#### 1. 파이썬 버전 관리

* [pyenv 공식 github](https://github.com/pyenv/pyenv#installation) 참고

```
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc

source ~/.bashrc
pyenv install 3.6.7
pyenv global 3.6.7
python -V
pip install --upgrade pip
```

* python version 확인

```
python -V
```

* 

```
git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
exec "$SHELL"
```

* 가상환경 생성. 라이브러리, 버전을 독립적으로 쓸 수 있음.

```
pyenv virtualenv 3.6.7 flask-venv
pyenv local flask-venv
```

* 

```
pip install flask
```

* 버전리스트 생성.

```
pip freeze > req.txt
```

* 

```
flask run -h $IP -p $PORT
```

```python
# python app.py로 실행하기 위한 코드
if __name__ == '__main__':
    app.run(host='0.0.0.0', prot='8080', debug=True)
```

* 404 page not found: 서버 상에 해당 경로가 존재하지 않음.
  * flask로 생각하자면, @app.route()로 지정한 경로가 없는 것.
  * 잘못된 url
* flask에서 return은 항상 string이어야 함.
* html 파일 return

```python
from flask import Flask, render_template

@app.route('/')
def hello():
    return render_template('index.html')

# 변수 넘기기
@app.route('/hi/<string:name>')
def greeting(name):
    return render_template('greeting.html', html_name=name)
```

* jinja2 템플릿 엔진

```html
<!--반복문과 조건문은 아래와 같이 쓰며, end로 닫아주어야 한다.-->
{% if ___ %}
<실행할 코드>
{% else %}
<실행할 코드>
{% endif %}
```

* 랜덤 이미지: https://picsum.photos/200/300/?random

* 자동정렬: ctrl+shift+b

* 크롤링

```
pip install requests
pip install bs4
```

#### review

* `flask`
  * 요청과 응답
  * variable routing
    * request.args = {'name': 'doh', 'msg': 'hello~'} 이런 식으로 넘김
    * request.args.get('name') = 'doh'
    * get은 키 값이 없어도 오류가 발생하지 않고 None이 return됨.
    * a.get('name', 'kim') 이런 식으로 없을 경우 반환할 값도 넣을 수 있다. python 문법.
      * routing - template - 넘어가는 그 흐름을 익혀둘 것.