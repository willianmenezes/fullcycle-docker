create database if not exists nodeapp;
use nodeapp;
create table if not exists pessoa(id int not null auto_increment, nome varchar(255) not null, primary key(id));