drop database a17towan_examensarbete;
create database a17towan_examensarbete;
use a17towan_examensarbete;

create table test1( -- Code tabell 
deltagareID int,
startTid timestamp,
slutTid timestamp,,
primary key (deltagareID)
)engine=innodb;

create table test2( -- Code tabell 
ID int,
startTid timestamp,
slutTid timestamp,
primary key (ID),
foreign key (ID) references test1(deltagareID)
)engine=innodb;

create table test3( -- Code tabell 
ID int,
startTid timestamp,
slutTid timestamp,
primary key (ID)
)engine=innodb;

create table test4( -- Code tabell 
ID int,
startTid timestamp,
slutTid timestamp,
primary key (ID)
)engine=innodb;

INSERT INTO test1 (deltagareID, test1, slutTid) values ('1', '2021-01-01 00:00:01', '2021-01-01 00:00:10');
SELECT * FROM test1;
