CREATE EXTENSION IF NOT EXISTS "uuid-oosp";
CREATE EXTENSION IF NOT EXISTS "pgvrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARVHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));