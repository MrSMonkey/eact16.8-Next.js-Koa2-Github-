const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const session = require('koa-session');

const dev = process.env.NODE_ENV !== 'produciton';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.keys = ['jocker app']
  const SESSION_CONFIG = {
    key: 'jid',
    // store: {}
  }
  server.use(session(SESSION_CONFIG, server))
  server.use(async (ctx, next) => {
    // console.log('ctx.session.user', ctx.session || ctx.session.user);

    // ctx.session = ctx.session || {};
    // if(!ctx.session.user) {
    //   ctx.session.user = {
    //     userName: 'jocker',
    //     age: 18
    //   }
    // } else {
      console.log(`session is:`, ctx.session);
    // }

    await next();
  })
  router.get('/a/:id', async (ctx, next) => {
    // console.log('ctx.params.id', ctx.params.id);
    const id= ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id },
    });
    ctx.respond = false;
  })
  router.get('/set/user', async (ctx, next) => {
    // ctx.session = {}
    ctx.session.user = {
      userName: 'jocker',
      age: 18
    }
    ctx.body = 'set session successed'
  })
  server.use(router.routes())
  server.use(async (ctx) => {
    ctx.cookies.set('id', 'user:xxxxx');
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  })
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })
  server.listen(3000, () => console.log('server successed'));
})
