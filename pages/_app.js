import App, { Container } from 'next/app';
import 'antd/dist/antd.css';

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
        <Component {...pageProps}/>
      </Container>
    );
  }
}

export default MyApp;