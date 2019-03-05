
create table t_mxgl_model(id INT NOT NULL,MXGLMXLB varchar(30),MXGLMXMC varchar(30),MXGLSYFW varchar(30),MXGLMXSM varchar (255))


insert into t_mxgl_model values('1','新钢种','45钢-屈服强度线性模型','45钢屈服强度力学性能分析 ','本模型为化学成分与力学性能的线性关系模型，针对45钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析屈服强度力学性能');
insert into t_mxgl_model values('2','新钢种','45钢-屈服强度非线性模型','45钢屈服强度力学性能分析 ','本模型为化学成分与力学性能的非线性关系模型，针对45钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析屈服强度力学性能');
insert into t_mxgl_model values('3','新钢种','45钢-抗拉强度线性模型','45钢抗拉强度力学性能分析 ','本模型为化学成分与力学性能的线性关系模型，针对45钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析抗拉强度力学性能');
insert into t_mxgl_model values('4','新钢种','45钢-抗拉强度非线性模型','45钢抗拉强度力学性能分析 ','本模型为化学成分与力学性能的非线性关系模型，针对45钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析抗拉强度力学性能');
insert into t_mxgl_model values('5','新钢种','40钢-屈服强度线性模型','40钢屈服强度力学性能分析 ','本模型为化学成分与力学性能的线性关系模型，针对40钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析屈服强度力学性能');
insert into t_mxgl_model values('6','新钢种','40钢-屈服强度非线性模型','40钢屈服强度力学性能分析 ','本模型为化学成分与力学性能的非线性关系模型，针对40钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析屈服强度力学性能');
insert into t_mxgl_model values('7','新钢种','40钢-抗拉强度线性模型','40钢抗拉强度力学性能分析 ','本模型为化学成分与力学性能的线性关系模型，针对40钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析抗拉强度力学性能');
insert into t_mxgl_model values('8','新钢种','40钢-抗拉强度非线性模型','40钢抗拉强度力学性能分析 ','本模型为化学成分与力学性能的非线性关系模型，针对40钢的化学成分C、Si、Mn、P、S、Cr、Ni、 C，分析抗拉强度力学性能');

create table ts_gthl(id Int not null,code varchar(30),name varchar(30),value1 decimal(3,3),value2 decimal(3,3),primary key (id));
insert into ts_gthl values('1','C','','0.42','0.5');
insert into ts_gthl values('2','Si','','0.17','0.37');
insert into ts_gthl values('3','Mn','','0.5','0.8');
insert into ts_gthl values('4','P','','0.0','0.035');
insert into ts_gthl values('5','S','','0.0','0.035');
insert into ts_gthl values('6','Cr','','0.0','0.25');
insert into ts_gthl values('7','Ni','','0.0','0.3');
insert into ts_gthl values('8','Cu','','0.0','0.2');

CREATE TABLE `t_gt_1` (
  `C` decimal(10,5) DEFAULT NULL,
  `Si` decimal(10,5) DEFAULT NULL,
  `Mn` decimal(10,5) DEFAULT NULL,
  `P` decimal(10,5) DEFAULT NULL,
  `S` decimal(10,5) DEFAULT NULL,
  `Cr` decimal(10,5) DEFAULT NULL,
  `Ni` decimal(10,5) DEFAULT NULL,
  `Cu` decimal(10,5) DEFAULT NULL,
  `Rel` decimal(10,5) DEFAULT NULL,
  `Rm` decimal(10,5) DEFAULT NULL,
  `A` decimal(10,5) DEFAULT NULL,
  `Z` decimal(10,5) DEFAULT NULL,
    `L_Rel` decimal(10,5) DEFAULT NULL,
  `L_Rm` decimal(10,5) DEFAULT NULL,
  `L_A` decimal(10,5) DEFAULT NULL,
  `L_Z` decimal(10,5) DEFAULT NULL,
    `NL_Rel` decimal(10,5) DEFAULT NULL,
  `NL_Rm` decimal(10,5) DEFAULT NULL,
  `NL_A` decimal(10,5) DEFAULT NULL,
  `NL_Z` decimal(10,5) DEFAULT NULL
);
set global local_infile = 'ON';
load data local infile '/tmp/data40crNohead-new.csv' into table t_gt_1 fields terminated by',';

CREATE TABLE `t_gt_0` (
  `C` decimal(10,5) DEFAULT NULL,
  `Si` decimal(10,5) DEFAULT NULL,
  `Mn` decimal(10,5) DEFAULT NULL,
  `P` decimal(10,5) DEFAULT NULL,
  `S` decimal(10,5) DEFAULT NULL,
  `Cr` decimal(10,5) DEFAULT NULL,
  `Ni` decimal(10,5) DEFAULT NULL,
  `Cu` decimal(10,5) DEFAULT NULL,
  `Rel` decimal(10,5) DEFAULT NULL,
  `Rm` decimal(10,5) DEFAULT NULL,
  `A` decimal(10,5) DEFAULT NULL,
  `Z` decimal(10,5) DEFAULT NULL,
    `L_Rel` decimal(10,5) DEFAULT NULL,
  `L_Rm` decimal(10,5) DEFAULT NULL,
  `L_A` decimal(10,5) DEFAULT NULL,
  `L_Z` decimal(10,5) DEFAULT NULL,
    `NL_Rel` decimal(10,5) DEFAULT NULL,
  `NL_Rm` decimal(10,5) DEFAULT NULL,
  `NL_A` decimal(10,5) DEFAULT NULL,
  `NL_Z` decimal(10,5) DEFAULT NULL
);
set global local_infile = 'ON';
load data local infile '/tmp/data45Nohead-new.csv' into table t_gt_0 fields terminated by',';
