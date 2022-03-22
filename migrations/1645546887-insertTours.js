const tours = [
  {
    name: 'Thailand',
    description:
      'Take a tour of Thailand with a local guide and explore street foods...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 800,
  },
  {
    name: 'South Korea',
    description:
      'Take a tour of South Korea with a local guide and explore markets and street food....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 1100,
  },
  {
    name: 'Amsterdam',
    description:
      'Take a tour of Amsterdam with a local guide and explore food markets and street food. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 700,
  },
  {
    name: 'Italy',
    description:
      'Tour Italy with one of our local guides and taste all different kinds of fresh Italian foods. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 700,
  },
  {
    name: 'London',
    description:
      'Want to visit London? We got you covered with this awesome food tour! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 1000,
  },
  {
    name: 'Los Angeles',
    description:
      'Visit the city of Angels! Los Angeles is a foodie heaven! It is more than just movie studios! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 1700,
  },
  {
    name: 'Budapest',
    description:
      'Come and visit Hungary! It is more than just Goulash! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et mi aliquam, mattis magna non, blandit libero. Pellentesque a malesuada eros. Nullam imperdiet ligula ac bibendum feugiat. Donec placerat cursus volutpat. Nullam pulvinar rhoncus pharetra. Ut a suscipit augue. Cras risus felis, scelerisque non nulla nec, pharetra tempor justo.',
    price: 400,
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO tours ${sql(tours, 'name', 'description', 'price')}
	`;
};
exports.down = async (sql) => {
  // just in case...
};
