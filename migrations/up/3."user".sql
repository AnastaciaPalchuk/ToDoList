start transaction;

create table "user"
(
    id            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    to_do_list_id INT REFERENCES to_do_list (id) ON DELETE CASCADE,
    fname         varchar not null,
    lname         varchar not null,
    email         varchar not null,
    password      varchar not null
);
commit;