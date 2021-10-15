import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'antd';
import { Fragment } from 'react';

import store from './../store/store';

const events=[
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'heforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete',
];
export default () => (
  <Fragment>
    <Link href="/a?id=1" as="/a/1">
      <Button>hello next.js</Button>
    </Link>
    <span>123123</span>
  </Fragment>
)