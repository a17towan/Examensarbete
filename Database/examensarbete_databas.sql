drop database a17towan_examensarbete;
create database a17towan_examensarbete;
use a17towan_examensarbete;

create table test1( 
deltagareID int NOT NULL AUTO_INCREMENT,
startTid varchar (100),
slutTid varchar (100),
primary key (deltagareID)
)engine=innodb;

create table test2( -- Code tabell 
ID int,
startTid varchar (100),
slutTid varchar (100),
primary key (ID),
foreign key (ID) references test1(deltagareID)
)engine=innodb;

create table test3( -- Code tabell 
ID int,
startTid varchar (100),
slutTid varchar (100),
primary key (ID)
)engine=innodb;

create table test4( -- Code tabell 
ID int,
startTid varchar (100),
slutTid varchar (100),
primary key (ID)
)engine=innodb;

INSERT INTO test1(startTid, slutTid) values ('2021-03-31 00:00:01', '2021-03-01 00:00:10');
SELECT * FROM test1;
