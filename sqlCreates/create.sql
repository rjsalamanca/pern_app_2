DROP TABLE business;
DROP TABLE reviews;

CREATE TABLE businesses(
    id SERIAL PRIMARY KEY,
    business_name VARCHAR,
    business_address VARCHAR,
    business_type VARCHAR,
    phone_num VARCHAR
);

INSERT INTO businesses
    (business_name, business_address, business_type, phone_num)
VALUES
    ('Lovies', '3420 Piedmont Rd NE Buckhead', 'Restaurant', '(404) 254-2848'),
    ('Farm Burger', '3365 Piedmont Rd NE Buckhead', 'Restaurant', '(404) 816-0603'),
    ('Atlanta Tech Village', '3423 Piedmont Rd NE Buckhead', 'Office Space', '(404) 445-1525');

CREATE TABLE reviews(
    id SERIAL,
    review TEXT,
    stars INT,
    business_id INT REFERENCES businesses(id),
    PRIMARY KEY(id)
);

INSERT INTO reviews
    (review, stars, business_id)
VALUES
    ('GREAT BBQ', 5, 1),
    ('Good ribs', 5, 1),
    ('Trash food', 1, 1),
    ('BRISKET HEAVEN', 4, 1),
    ('mm burger', 4, 2),
    ('WOW', 5, 2),
    ('FREE Snacks!!', 5, 3);