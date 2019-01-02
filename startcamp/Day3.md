# Day3

## 1. Dictionary

#### 1) 딕셔너리 만들기

`Dictionary`는 `key`와 `value`가 짝지어져 있다.

`key`는 `string`, `integer`, `boolean` 가능하다. `list` 또는 `dictionary`는 안된다.

`value`는 모든 자료형이 가능하다. `list` 혹은 `dictionary`도 가능하다.

```python
phonebook = {
    "한식": 12
}
phonebook2 = dict("한식"=12)
```



#### 2) 딕셔너리 조작하기

```python
phonebook["분식"] = 04
```



#### 3) 딕셔너리 내용 가져오기

```python
idol = {
    "shinee":{
        "태민": 25,
        "종현": 28
    }
    "exo":{
        "세훈": 24
        "디오": 26
    }
}
# 태민의 나이는?
idol["shinee"]["태민"]
```



#### 4) 딕셔너리 반복문 활용하기

```python
# 기본 활용
for key in phonebook:
    print(key)
    print(phonebook[key])
    
# .items()
for key, value in phonebook.items():
    print(key, value)
    
# value만 가져오기
for value in phonebook.values():
	print(value)
    
# key만 가져오기
for key in phonebook.keys():
    print(key)
```

#### [연습문제](https://zzu.li/dj_dict)

```python
score = {
    "exo_k": {
        "수학": 80,
        "국어": 90,
        "음악": 100
    },
    "exo_m": {
        "수학": 80,
        "국어": 90,
        "음악": 100
    }
}

# 풀이
total_score = 0
length = 0
for person_score in score.values():
#(또는 length를 여기서 length += len(person_score))
	for individual_score in person_score.values():
    	total_score += individual_score
		length += 1
average_score = total_score / length
print(average_score)
```



## 텔레그램 API 활용하기

> 사전 준비사항: @botfather 를 통해 봇을 만들어서 토큰 정보를 기록한다.

### 0. 봇 정보 가져오기

```py
https://api.telegram.org/bot{token}/getME
```

```python
import requests
token = "토큰"
url = f"https://api.telegram.org/bot{token}/getME"
response = requests.get(url)
```

### 1. 메시지 보내기

#### 1) user의 `id`를 가져와야 한다.

```python
https://api.telegram.org/bot{token}/getUpdates
```

```python
import requests
# 1. 사용자 정보 가져오기 위한 요청
token = "토큰"
url = f"https://api.telegram.org/bot{token}/getUpdates"
updates = requests.get(url).json()
# 2. 사용자 정보 및 메시지 설정
user_id = updates["result"][0]["message"]["from"]["id"]
msg = "Hello."
# 3. 메시지 보내기
send_url = f"https://api.telegram.org/bot{token}/sendMessage?text={msg}&chat_id={user_id}"
requests.get(url)
```

### !주의사항!

token은 절대 외부에 공개되어선 안 된다.

따라서, 환경변수를 활용하여 내 컴퓨터에만 정보를 저장한다.

```powershell
$ vi ~/.bash_profile
export TELEGRAM_TOKEN='토큰정보'
```

```python
import os
token = os.getenv("TELEGRAM_TOKEN")
```



