drop database a17towan_examensarbete;
create database a17towan_examensarbete;
use a17towan_examensarbete;

create table test1( 
deltagareID int NOT NULL,
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
primary key (ID),
foreign key (ID) references test1(deltagareID)
)engine=innodb;

create table test4( -- Code tabell 
ID int,
startTid varchar (100),
slutTid varchar (100),
primary key (ID),
foreign key (ID) references test1(deltagareID)
)engine=innodb;

SELECT * FROM test1;
SELECT * FROM test2;
SELECT * FROM test3;
SELECT * FROM test4;
