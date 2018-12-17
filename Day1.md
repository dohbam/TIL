# Day1

## 1. CLI(Command Line Interface)

명령어를 통해서 사용하는 인터페이스로, GUI(Graphic User Interface)와는 다르게 터미널(bash/shell/cmd)을 통해서 명령을 할 수 있다.

사전 준비사항: [Git bash](https://gitforwindows.org) 설치

### 1) 기본 명령어

```
$ ls
```

## 2. Python
### 0) [python Style Guide(PEP-8)](https://www.python.org/dev/peps/pep-0008/)

### 1) String

#### (1) string 조작

```python
# 기본 방법
print("안녕하세요.")
print("저는 도경수입니다.")
print("만나서 반갑습니다.")

print("""안녕하세요.
저는 변백현입니다.
만나서 반갑습니다.""")
```
출력결과:
```
안녕하세요.
저는 도경수입니다.
만나서 반갑습니다.

안녕하세요.
저는 변백현입니다.
만나서 반갑습니다.
```

#### (2) String Interpolation

1. f-string

   ```python
   name = "도경수"
   print(f"안녕하세요. (name)입니다.")
   #=> "안녕하세요. 도경수입니다."
   ```

2.  [pyformat](https://pyformat.info/)

   ```python
   name = "도경수"
   eglish_name = "Doh"
   print("안녕하세요. {}입니다. My name is {}.".format(name, english_name))
   #=> "안녕하세요. 도경수입니다. My name is Doh."
   print("안녕하세요. {1}입니다. My name is {0}.".format(name, english_name))
   #=> "안녕하세요. Doh입니다. My name is 도경수."
   print("안녕하세요. {1}입니다. My name is {1}.".format(name, english_name))
   #=> "안녕하세요. Doh입니다. My name is Doh."
   ```

3. 모르면 이렇게라도

   ```python
   name = "도경수"
   print("안녕하세요. " + name + "입니다.")
   ```

### 2) range

`range`는 숫자의 범위를 가지고 있다. 

```python
print(range(5))
#=> range(0,4)

# list 형변환
a = list(range(5))
print(a)
#=> [0,1,2,3,4]

# 반복문 활용
for i in range(3):
    print(i)
#=> 0
#=> 1
#=> 2
```

### 3) List

`list`는 배열 또는 array라고도 불린다. 인덱스를 통해 값에 접근할 수 있다.

```python
menu = ["한식", "중식", "일식", "양식", "분식"]
menu[0]
#=> 한식
```

### 4) Dictionary

`Dictionary`는 hash(해시)라고도 불린다. `key`와 `value`가 짝지어져있다.

```python
phonebook = {
    "한식": "930112", "중식": "920506",
    "일식": "921127", "양식": "120408", "분식": "140805"
}
phonebook["한식"]
#=> "930112
```

## 3. [마크다운(Markdown)](https://www.markdownguide.org/)

### 1) Heading

```
# H1입니다.
## H2입니다.
### H3입니다.
#### H4입니다.
##### H5입니다.
```

# H1입니다.
## H2입니다.
### H3입니다.
#### H4입니다.
##### H5입니다.



### 2) List

```
* 순서 없는 리스트
* 순서 없는 리스트

1. 순서 있는 리스트1
2. 순서 있는 리스트2
3. 순서 있는 리스트3
```

* 순서 없는 리스트
* 순서 없는 리스트

1. 순서 있는 리스트1
2. 순서 있는 리스트2
3. 순서 있는 리스트3

### 3) 코드 작성(Code snippet)

```
​```python
print("hello, world")
​```
```

```python
print("hello, world")
```

### 4) 링크 연결

```
[구글로 가는 링크](https://google.com)
```

[구글로 가는 링크](https://google.com)

### 5) 글씨 꾸미기

```
_기울임_
*기울임*
__굵게__
**굵게**
```

*기울임*

**굵게**

__*굵게기울임*__

### 6) 기타

```
---
***
> 안녕하세요?
인용문
```

---

***

> 안녕하세요?
>
> 인용문