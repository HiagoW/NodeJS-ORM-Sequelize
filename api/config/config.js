require('dotenv').config()
module.exports = {
  'development': {
    'username': 'root',
    // eslint-disable-next-line no-undef
    // 'password': process.env.MYSQL_PASSWORD,
    'password': '',
    'database': 'escola_ingles',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': 'root',
    'password': null,
    'database': 'database_production',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  }
}
