# 1. git 저장소

- 폴더를 git 저장소로 활용

```
$ git init
```

- 원격저장소

```
$ git clone (url)
```

- commit

```
$ git add .
$ git commit -m "comment"
```

- commit log 확인

```
$ git log
```

- push, pull

```
$ git push origin master
```

```
$ git pull origin master
```

* 꼬이지 않게 반드시 장소 이동 전 push, 작업 전 pull을 지켜야 함.

- github에서 직접 수정하면 안 됨. 그것도 commit이 잡히기 때문.



- 직전 커밋이랑 지금 커밋 확인하는 명령어

```
$ git diff HEAD HEAD~1
```



- txt 파일 직접 고치는 방법: vi **.txt -> i -> 수정 -> :wq
- git add . + git commit -m " " == git commit -am " "



* git commit message 수정

```bash
$ git commit --amend
```

* git commit message 확인

```bash
$ git log -1
```

