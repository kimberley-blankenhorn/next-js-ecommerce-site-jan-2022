CREATE TABLE tours (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  description VARCHAR(500) NOT NULL,
  price integer NOT NULL
);

INSERT INTO tours
(name, description, price)
VALUES('Thailand', 'Take a tour of Thailand with a local guide and explore street foods...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 800),

('South Korea', 'Take a tour of South Korea with a local guide and explore markets and street food. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 1100),

('Amsterdam', 'Take a tour of Amsterdam with a local guide and explore food markets and street food. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 700),

('Italy', 'Tour Italy with one of our local guides and taste all different kinds of fresh Italian foods. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 700),

('London', 'Want to visit London? We got you covered with this awesome food tour! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 1000),

('Los Angeles', 'Visit the city of Angels! Los Angeles is a foodie heaven! It is more than just movie studios! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 1700),

('Budapest', 'Come and visit Hungary! It is more than just Goulash! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.', 400);