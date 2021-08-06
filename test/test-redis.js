async function test(params) {
  const Redis = require('ioredis');
  const redis = new Redis({
    port: 6378,
    password: 123456,
  });
  const keys = await redis.keys('*')
  console.log(keys);
}
test();