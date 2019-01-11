drop table t_Sys_User;
drop table t_Sys_Role;
drop table t_Sys_Permission;
drop table t_Sys_User_2_Role;
drop table t_Sys_Role_2_Permission;
create table t_Sys_User(id INT NOT NULL,userCode varchar(30),userName varchar(30),password varchar (60) ,salt varchar(30),PRIMARY KEY ( id ));
create table t_Sys_Role(id INT NOT NULL,roleCode varchar(30),roleName varchar(30),primary key (id));
create table t_Sys_Permission(id INT NOT NULL,pName varchar(30),pType varchar(30),pCode varchar(30),url varchar(255),sort varchar(30),pid int NOT NULL,primary key (id));
create table t_Sys_User_2_Role(uid int,rid int);
create table t_Sys_Role_2_Permission(rid int,pid int);
insert into t_Sys_User values (1,'admin','admin','$2a$10$mz5lXGRu/F6950zzQ2Y2au1CiCx5AR3gOcqkVtGVK8H6Nk83IBklW','');
insert into t_Sys_Role values (1,'adminRole','adminRole');
insert into t_Sys_Role values (2,'guestRole','guestRole');
insert into t_Sys_Permission values (1,'首页','首页','index','/index.html','1','0');
insert into t_Sys_Permission values (2,'首页','首页','index','/index.html','1','0');
insert into t_Sys_Permission values (3,'错误','错误','error','/error.html','1','0');
insert into t_Sys_User_2_Role values ('1','1');
insert into t_Sys_User_2_Role values ('1','2');
insert into t_Sys_Role_2_Permission values ('1','1');
insert into t_Sys_Role_2_Permission values ('2','2');
insert into t_Sys_Role_2_Permission values ('1','3');



select u.*,r.*,p.* from t_Sys_User u inner join t_Sys_User_2_Role ur on u.id=ur.uid left join t_Sys_Role r on ur.rid=r.id inner join t_Sys_Role_2_Permission rp on r.id=rp.rid left join t_Sys_Permission p on rp.pid=p.id where u.userName='admin'