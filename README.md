# tech-blog

CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.

## Deployment link

The application can be access via following URL:

<https://anisha-tech-blog.herokuapp.com/>

## Installation

To install necessary dependencies, run the following command:

```sh
npm install
```

## Usage

- Create the required schema by sourcing `schema.sql` in `db` folder.
- Create a `.env` file in the root directory and define the following variables: `DB_USER`, `DB_PW` and `DB_NAME`.
- Optionally seed the database by running `npm run seed`.
- Run `npm start` to start the application.

## Credits

Third-party libraries used:

- Bcrypt: <https://www.npmjs.com/package/bcrypt>
- Dotenv: <https://www.npmjs.com/package/dotenv>
- Eslint: <https://www.npmjs.com/package/eslint>
- Express JS: <https://expressjs.com/>
- Handlebars: <https://handlebarsjs.com/>
- mySQL2: <https://www.npmjs.com/package/mysql2>
- Moment JS: <https://momentjs.com/>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
