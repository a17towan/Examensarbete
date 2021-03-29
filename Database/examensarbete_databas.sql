drop database a17towan_examensarbete;
create database a17towan_examensarbete;
use a17towan_examensarbete;

create table test1( -- Code tabell 
deltagareID int,
test1 int,
primary key (deltagareID)
)engine=innodb;

create table test2( -- Code tabell 
ID int,
test2 int,
primary key (ID),
foreign key (ID) references test1(deltagareID)
)engine=innodb;

create table test3( -- Code tabell 
ID int,
test3 int,
primary key (ID)
)engine=innodb;

create table test4( -- Code tabell 
ID int,
test4 int,
primary key (ID)
)engine=innodb;

INSERT INTO test1 (deltagareID, test1) values ('1', '10');
SELECT * FROM test1;