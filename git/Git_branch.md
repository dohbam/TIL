# Git branch

> [git branch](<https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html>)
>
> [git-flow](<http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html>)
>
> 실제로 master branch는 거의 건들지 않음.

* project에서 우리는
  * master branch를 develop branch로 사용하고 feature branch를 각자 나누어 가지도록
* git-flow

![git-flow_overall_graph](image/git-flow_overall_graph-1557447370977.png)

* [gitlab flow](<https://docs.gitlab.com/ee/workflow/gitlab_flow.html>)

* 연습

  * 폴더 생성

  * git config 확인

    ```bash
    $ git config --global user.name
    ```

  * git init

  * (폴더삭제) clone해서 사용합시다

    ```bash
    $ git clone https://github.com/djpy1/gitbranch.git
    ```

  * 다른 브랜치 만들기

    ```bash
    $ git checkout -b <name>
    ```

  * 작업 파일 (가짜) 생성

    ```bash
    $ touch signup.txt
    $ touch login.txt
    ```

  * 커밋

  * `git checkout master`로 master branch로 이동

    * `git diff <name>`으로 차이점을 확인할 수도 있고
    * `git merge tak`으로 master에 반영할 수 있다.

  * `Fast-forward` : master에 변경사항이 없어서 그냥 앞으로 가기만 하면 되는 상황

  * `git branch -d <ein>` 으로 가지를 지우고

  * git branch <newname> - git checkout <newname> - touch movie.txt - git add . - git commit

  * git checkout master - touch profile.txt - commit

  * `git merge <newname>` 

    * 커밋 메시지 남기라는 창이 뜸
    * 나와서 git log 해보면 `내 가지` - `가져온 가지` - `합쳤음` 
    * `합쳤음` : `Merge branch '이름'`

  * `merge commit` : master에 변경사항이 있는 상황. git이 automerge 가능한 상황.

  * 가지 지우고 (merge 한 뒤에는 branch 지워도 상관 업슴)

  * `merge conflict` : 같은 파일을 수정해 merge commit처럼 자동으로 바꿔줄 수 없는 상황

    * 새 가지에서 profile.txt 수정하고 

    * master에서 같은 파일 수정

    * git merge 이름 - 충돌

      ```text
      Auto-merging profile.txt
      CONFLICT (content): Merge conflict in profile.txt
      Automatic merge failed; fix conflicts and then commit the result.
      ```

    * profile.txt 를 열어보면 두 상황을 tagging해줌

    * 하나를 골라서 선택해주면 되는데 vscode에서 열면 편하게 선택 가능

    * 선택 후 git status 찍어보면 merge commit 해야 한다고 알려줌

    * add, commit

  * git checkout kim - 원래는 위에서 수정한 파일이 있으므로 지우고 다시 마스터에서 받아야 함

* rebase : 거르세요. 절대 쓰면 안 됩니다. 

* push 하면 branch에 push되어있음

* github에서 compare and pull request로 commit들 관리 가능. 메시지도 남기고 merge도 할 수 있음.

* 다시 각자 pull 해서 쓰면 됨. 





* 명령어 정리
  * `git checkout -b 이름` : 만들면서 이동
  * `git branch 이름` : 만들기
  * `git checkout 이름` : 이동
  * `git branch -d 이름` : 삭제
  * `git merge 이름` : `이름` 브랜치를 현재 브랜치에 반영
  * `git branch -D` : merge 하지 않고 그냥 가지 지우기 - 가능하면 쓰지 않아야