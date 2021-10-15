import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import testHoc from '../lib/test-hoc';

class MyApp extends App {
  static async getInitialProps ({ Component, context }) {
    let pageProps;
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(context);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    // console.log(Component);

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps}/>
        </Provider>
      </Container>
    ); 
  }
}

export default testHoc(MyApp);