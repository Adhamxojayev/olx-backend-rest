

insert into users (name, password, email, tel_number) values 
('ahror', '1111', 'ahror@gmail.com', '998333732328'),
('umar', '2222', 'umar@gmail.com', '998998886716'),
('abror', '0000', 'abror@gmail.com', '998935677654'),
('bobir', '5555', 'bobir@gmail.com', '99946775445');


insert into categories (name) values 
('elektr jihozlar'),
('transport'),
('hayvonlar'),
('kochmas mulk');


insert into categories_category (category_id, id, name) values
(1,1, 'kampyuterlar'), (1,2, 'telefonlar'),
(2,3, 'avtobuslar'), (2,4, 'yengil mashinalar'),
(3,5, 'mushuklar'), (3,6, 'itlar'),
(4,7, 'uylar');


insert into ads( user_id, category_id, image, name, price, reference) values
(1,5, 'https://picsum.photos/400', 'baroqvoy', '100$', 'yaxshi mushuk'),
(2,1, 'https://picsum.photos/400', 'hp', '600$', 'ssd 528 display 13 model pavilon');
