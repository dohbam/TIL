# DB

* RDBMS(관계형데이터베이스 관리 시스템)
  * mySQL, 
  * Oracle, 
* SQLite
  * 우분투에 기본으로 깔려 있음. 비교적 가벼운 데이터베이스. 서버가 아닌 응용프로그램에 넣어 사용.



### 기본 용어 정리

* 스키마(schema)
  * 데이터베이스에서 자료의 구조, 표현방법, 관계 등을 정의한 구조.
  * 데이터베이스의 구조와 제약 조건에 관련한 전반적인 명세를 기술.
  * 여러 개의 테이블(table)이 하나의 데이터베이스에
    * 열(Column): 각 열에 고유한 데이터 형식 지정.
      * INTEGER, TEXT, NULL 등
    * 행(row), 레코드: 데이터 저장.
    * PK(기본키): 각 행(레코드)의 고유값. Primary Key. 
      * 데이터베이스 관리 및 관계 설정시 활용하므로 반드시 설정해야 한다.



## 1. SQL

> Structured Query Language
>
> 관계형데이터베이스 관리 시스템에서 자료의 



## 2. Hello, DB!

* SELECT * FROM table
  * 대문자. 소문자도 실행은 됨.
  * *은 모두 불러오기
  * 조건을 걸어 특정값만 뽑아낼 수 있음.
  * SELECT문은 데이터에서 특정 테이블을 뽑아 반환.



* c9
* CREATE, SELECT, UPDATE, DELETE 

```sql
$ sqlite3
SQLite version 3.8.2 2013-12-06 14:53:30
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> .mode csv
sqlite> .import hellodb.csv examples
sqlite> SELECT * FROM examples;
1,"길동","홍",600,"충청도",010-2424-1232
sqlite> .headers on
sqlite> .mode column
sqlite> SELECT * FROM examples
   ...> ;
id          first_name  last_name   age         country     phone        
----------  ----------  ----------  ----------  ----------  -------------
1           길동      홍         600         충청도   010-2424-1232
sqlite> SELECT age FROM examples
   ...> ;
age       
----------
600       
sqlite> 
(flask-venv) dohbam:~/workspace (master) $ sqlite3 tutorial.sqlite3
SQLite version 3.8.2 2013-12-06 14:53:30
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> .databases
seq  name             file                                                      
---  ---------------  ----------------------------------------------------------
0    main             /home/ubuntu/workspace/tutorial.sqlite3                   
sqlite> CREATE TABLE classmates (
   ...> id INT PRIMARY KEY,
   ...> name VARCHAR(30)
   ...> );
sqlite> .tables
classmates
sqlite> .schema classmates
CREATE TABLE classmates (
id INT PRIMARY KEY,
name VARCHAR(30)
);
sqlite> DROP TABLE classmates;
sqlite> .tables
sqlite> .databases
seq  name             file                                                      
---  ---------------  ----------------------------------------------------------
0    main             /home/ubuntu/workspace/tutorial.sqlite3                   
1    temp                                                                       
sqlite> CREATE TABLE classmates (
   ...> id INT PRIMARY KEY,
   ...> name TEXT,
   ...> age INT,
   ...> address TEXT
   ...> );
sqlite> .tables
classmates
sqlite> .schema classmates
CREATE TABLE classmates (
id INT PRIMARY KEY,
name TEXT,
age INT,
address TEXT
);
sqlite> DROP TABLE classmates;
sqlite> .tables
sqlite> .read create_table.sql

sqlite> .tables
classmates

sqlite> .read insert.sql

sqlite> SELECT * FROM classmates;
|홍길동|23|
sqlite> .headers on
sqlite> .mode column
sqlite> SELECT * FROM classmates;
id          name        age         address   
----------  ----------  ----------  ----------
            홍길동   23              
            
sqlite> SELECT id, name FROM classmates LIMIT 2 OFFSET 1;
id          name      
----------  ----------
4           변백현 
12          도경수 
sqlite> SELECT * FROM classmates WHERE address='exoplanet';
id          name        age         address   
----------  ----------  ----------  ----------
4           변백현   27          exoplanet 
12          도경수   27          exoplanet 
sqlite> SELECT * FROM classmates WHERE id=4;
id          name        age         address   
----------  ----------  ----------  ----------
4           변백현   27          exoplanet 
sqlite> SELECT name FROM classmates WHERE age=27;
name      
----------
변백현 
도경수 
--삭제: 중복이 불가능한 id로 삭제한다. 중복된 값으로 삭제하면 전부 삭제됨.
sqlite> DELETE FROM classmates WHERE id=1;
--수정
sqlite> UPDATE classmates SET age=26 WHERE id=12;
```

* INSERT

```sql
-- .read insert.sql
INSERT INTO classmates
VALUES (12, '도경수', 27, 'exoplanet');
INSERT INTO classmates (id, name, age, address)
VALUES (4, '변백현', 27, 'exoplanet');
-- 요소를 모두 쓸 경우 키값 없이 순서대로만 넣어줘도 ok.
-- id 자동입력 시 (name, age, address) 붙여줘야.
```



* CONT(column), AVG(column)

```sql
sqlite> SELECT count(age) FROM users WHERE age >= 30 and last_name='김';  
sqlite> SELECT AVG(age) FROM users WHERE age >= 30;
--아래 코드 값 하나만 나옴.
sqlite> SELECT first_name, MAX(balance) FROM users;
--모두 뽑으려면
sqlite> SELECT balance, first_name FROM users WHERE balance=(SELECT MAX(balance) FROM users);
--지역번호가 02인 사람 10명
sqlite> SELECT * FROM users WHERE phone LIKE '02%' LIMIT 10;
--이름이 준으로 끝나는 사람 10명
sqlite> SELECT * FROM users WHERE first_name LIKE '%준' LIMIT 10;
--전화번호 가운데가 5114인 사람
sqlite> SELECT * FROM users WHERE phone LIKE '%5114%' LIMIT 10;
-- _는 그 자리수만큼 차지함. %는 없을 수도 있음. 
-- 예) 2_%_%: 2로 시작하고 적어도 세 자리인 값. 2__%%와 같다. 
-- 그러나, 2__와는 다르지. 이건 세 자리 고정.
```

* 정렬(ORDER)

```sql
-- 오름차순 (default)
sqlite> SELECT * FROM users ORDER BY age ASC LIMIT 10;
-- 내림차순
sqlite> SELECT * FROM users ORDER BY age DESC LIMIT 10; 
-- 나이 오름차순, 이름 순
sqlite> SELECT * FROM users ORDER BY age, last_name LIMIT 10;   
-- 잔고 내림차순 이름만
sqlite> SELECT first_name FROM users ORDER BY balance DESC LIMIT 10;     
```

