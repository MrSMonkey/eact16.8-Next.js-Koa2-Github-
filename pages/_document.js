import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// 只有在服务端渲染时，MyDocument组件才会被执行
class MyDocument extends Document {
  static async getInitialProps (context) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;
    try {
      context.renderPage = () => originalRenderPage({
        enhanceApp: App => {
          return (props) => sheet.collectStyles(<App {...props}/>)
        }
      });
      
    const props = await Document.getInitialProps(context);
    return {
      ...props,
      styles: <>{props.styles}{sheet.getStyleElement()}</>
    };
    } finally {
      sheet.seal();
    }
  }
  render () {
    return (
      <Html>
        <Head/>
        <body className="test">
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument;