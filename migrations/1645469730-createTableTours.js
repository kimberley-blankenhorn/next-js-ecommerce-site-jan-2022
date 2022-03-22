exports.up = async (sql) => {
  console.log('creating table');
  await sql`
		CREATE TABLE tours (
			id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(50) NOT NULL,
			description VARCHAR(500) NOT NULL,
			price integer NOT NULL
		);
	-- 	CREATE TABLE tours (
	-- 	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	-- 	name varchar(50) NOT NULL,
	-- 	description VARCHAR(500) NOT NULL,
	-- 	price integer NOT NULL
	-- );

	`;
};

exports.down = async (sql) => {
  console.log('dropping table');
  await sql`
	DROP TABLE tours
	`;
};
