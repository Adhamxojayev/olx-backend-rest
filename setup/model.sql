
create database olx;


create table users (
    user_id serial primary key,
    name varchar(40) not null,
    email varchar(384) not null,
    password varchar(384) not null,
    tel_number varchar(18) not null,
    unique(email)
);

create table categories(
    category_id serial primary key,
    name varchar(50) not null
);

create table categories_category(
    category_id int not null references categories(category_id),
    id int not null primary key,
    name varchar(50) not null
);

create table ads(
    ads_id serial primary key,
    user_id int not null references users(user_id),
    category_id int not null references categories_category(id),
    image varchar(500) not null,
    name varchar(200) not null,
    price varchar(40) not null,
    reference varchar(500) not null,
    date text not null
);


comment on table users is 'userlar haqida malumot';
comment on table categories is 'assosiy categoryalar';
comment on table categories_category is 'assosiy categoriylarni ichidagi categorylar';
comment on table ads is 'reklamalar haqida malumat';
