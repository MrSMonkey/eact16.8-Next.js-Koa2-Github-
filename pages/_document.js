import Document, { Html, Head, Main, NextScript } from 'next/document';
// 只有在服务端渲染时，MyDocument组件才会被执行
class MyDocument extends Document {
  static async getInitialProps (context) {
    const props = await Document.getInitialProps(context);
    return { ...props };
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