export default Comp => {
  const TestHoc = ({ Component, pageProps, ...restProps }) => {
    // if(pageProps) {
    //   pageProps.name = '123';
    // }
    return <Comp {...restProps} Component={Component} pageProps={pageProps}/>
  }
  TestHoc.getInitialProps = Comp.getInitialProps;
  return TestHoc;
}