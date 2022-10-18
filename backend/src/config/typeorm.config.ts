export default () => ({
  nodeEnv: process.env.NODE_ENV || '.dev.env',

  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USERNAME || 'root',
    pass: process.env.DATABASE_PASSWORD || 'password',
    name: process.env.DATABASE_NAME || 'sample',
  
  },
  auth: {
    jwt_secret_key: '둠칫둠칫',
    JWT_EXPIRATION_TIME: 60,
  },
});
