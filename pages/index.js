import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'antd';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { add } from '../store/store';

const events=[
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'heforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete',
];
const Index = ({ counter, addCount }) => (
  <Fragment>
    <Link href="/a?id=1" as="/a/1">
      <Button>hello next.js</Button>
    </Link>
    <div>
      <span>{counter}</span>
      <span>+</span>
    </div>
    <Button onClick={() => addCount(counter)}>addCount btn</Button>
  </Fragment>
);

Index.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch(add(2))
  return {};
}

export default connect(
  function mapStateToProps(state) {
    return {
      counter: state.counter.count
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      addCount: (num) => dispatch({ type: 'ADD', num })
    };
  }
)(Index);