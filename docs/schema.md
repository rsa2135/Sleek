cd# Schema Information

## users
column name       | data type    | details
------------------|--------------|--------------------------
id                | integer      | not null, primary key
username          | string       | not null, indexed, unique
email             | string       | not null, indexed, unique
image_url         | string       |
current_channel   | string       | not null, indexed
password_digest   | string       | not null
session_token     | string       | not null, indexed, unique

## channels
column name       | data type    | details
------------------|--------------|--------------------------
id                | integer      | not null, primary key
name              | string       | not null, unique
description       | string       |
private           | boolean      | default: false
direct_message?   | boolean      | default: false

## messages
column name       | data type    | details
------------------|--------------|--------------------------
id                | integer      | not null, primary key
author            | integer      | not null, foreign key (references users), indexed
channel_id        | integer      | not null, foreign key (references channels), indexed
body              | text         | not null

## subscriptions (join table)
column name       | data type    | details
------------------|--------------|--------------------------
id                | integer      | not null, primary key
user_id           | integer      | not null, foreign key (references users), indexed
channel_id        | integer      | not null, foreign key (references channels), indexed (on user_id), unique

# Bonus Features

## reactions
column name       | data type    | details
------------------|--------------|--------------------------
id                | integer      | not null, primary key
message_id        | integer      | not null, foreign key (references users), indexed
name              | string       | not null

## threads
