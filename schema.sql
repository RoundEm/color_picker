create table color_groups(
    name text not null,
    id serial primary key
)

create table colors(
    hex_code text not null,
    id serial primary key,
    color_group_id int not null,
    foreign key (color_group_id)
        references color_groups (id)
)