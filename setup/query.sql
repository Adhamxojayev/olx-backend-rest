
select 
    a.name,
    a.price,
    a.reference as malumot,
    cg.name as categories,
    c.name as category,
    u.name as username,
    u.tel_number as telphone
from ads a 
join categories_category c on c.id = a.category_id
join users u on u.user_id = a.user_id
join categories cg on cg.category_id = c.category_id;




