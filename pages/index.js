import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'antd';
import { Fragment } from 'react';

import store from './../store/store';
import { connect } from 'react-redux';

const events=[
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'heforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete',
];
const Index = ({ counter, add }) => (
  <Fragment>
    <Link href="/a?id=1" as="/a/1">
      <Button>hello next.js</Button>
    </Link>
    <div>
      <span>{counter}</span>
      <span>+</span>
    </div>
    <Button onClick={() => add(counter)}>add btn</Button>
  </Fragment>
);

export default connect(
  function mapStateToProps(state) {
    return {
      counter: state.counter.count
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      add: (num) => dispatch({ type: 'ADD', num })
    };
  }
)(Index);