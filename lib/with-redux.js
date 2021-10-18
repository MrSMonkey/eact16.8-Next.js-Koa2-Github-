import { Component } from 'react';
import createStore from '../store/store';
const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  if(isServer) {
    return createStore(initialState);
  }
  if(!window[__NEXT_REDUX_STORE__]) { // 客户端的store不存在就不用再次创建
    window[__NEXT_REDUX_STORE__] = createStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default Comp => {
  class WithReduxApp extends Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState); // 根据后端返回的序列化后的state，初始化客户端的store
    }
    render () {
      const { Component, pageProps, ...restProps } = this.props;
      if(pageProps) {
        pageProps.name = '123';
      }
      return <Comp {...restProps} Component={Component} pageProps={pageProps} reduxStore={this.reduxStore}/>
    }
  }
  WithReduxApp.getInitialProps = async (ctx) => {
    const reduxStore = getOrCreateStore({})
    ctx.reduxStore = reduxStore; // 传入reduxStore，服务端页面渲染执行getInitialProps时，也可以通过此属性调用store的所有方法
    let appProps = {};
    if(typeof Comp.getInitialProps === 'function') {
      appProps === await Comp.getInitialProps(ctx)
    }
    return {
      ...appProps,
      initialReduxState: reduxStore.getState({}), // 序列化服务端的state
    }
  };
  return WithReduxApp;
}