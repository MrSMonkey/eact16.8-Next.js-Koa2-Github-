import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import withRedux from '../lib/with-redux';

class MyApp extends App {
  static async getInitialProps (ctx) {
    const { Component } = ctx
    let pageProps;
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    // console.log(Component);

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps}/>
        </Provider>
      </Container>
    ); 
  }
}

export default withRedux(MyApp);