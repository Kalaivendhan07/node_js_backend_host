
create database eduTrackPro;

create table eduTrackProUsers (
 id int primary key auto_increment,
 name varchar(100) not null default '',
 email varchar(100) unique default '',
phone_number int(50) default null,
registration_type varchar(50) not null,
Profession varchar(100) not null,
school_name varchar(150) not null default '',
school_code int(50) unique not null,
state varchar(100) not null default '',
district varchar(100) not null default '',
area varchar(100) not null default '',
pincode int(100) not null,
user_address text default '',
pic_path text default '',
subject text default '',
section varchar(10) default '',
check(registration_type in ('school','college'))
);

