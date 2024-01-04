const Pool = require("pg").Pool;

const pool1 = new Pool({
    'user': 'erick.rodrigues',
    'password': 'Hq2iNW4eCLjc',
    'host': 'ep-rough-wave-13168438.us-east-2.aws.neon.tech',
    'port': '5432',
    'database': 'liebeti',
  ssl: {
    rejectUnauthorized: false,
    sslmode: 'require'
  }
});

module.exports = pool1;