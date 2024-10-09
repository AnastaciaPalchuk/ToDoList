start transaction;

create table to_do_list
(
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    description varchar not null
    description varchar not null
);

commit;