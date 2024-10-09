start transaction;

create table task
(
    id            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    to_do_list_id INT REFERENCES to_do_list (id) ON DELETE CASCADE,
    name          varchar not null,
    is_done       boolean
);
commit;