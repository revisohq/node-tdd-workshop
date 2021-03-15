CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "bday" TIMESTAMP,
    "height" SMALLINT
);

INSERT INTO "users" ("name", "bday", "height") VALUES 
('Marco', '1981-06-30', '182'),
('Janis', '1989-01-14', '172'),
('Stefania', '1988-12-19', '164'),
('Khalaf', '1994-02-27', '185'),
('Aras', '1979-03-21', '171'),
('Alessio', '1980-05-03', '175');

