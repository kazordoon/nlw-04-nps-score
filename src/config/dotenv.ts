import dotenv from 'dotenv';

const configFiles = {
  development: '.env',
  test: '.env.test',
};

dotenv.config({
  path: configFiles[process.env.NODE_ENV],
});
