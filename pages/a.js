import { withRouter } from 'next/router';
import { Fragment } from 'react';
import styled  from 'styled-components';
const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;
const A = ({ router, name }) => (
  <Fragment>
    <Title>this is title</Title>
    <span>A{router.query.id} {name}</span>
    <div className="div">div</div>
    {/* 组件样式 */}
    <style jsx>
    {
     `
     span{
       color: green
     }
     .div{
       color: maroon
     }
     ` 
    }
    </style>
    {/* 全局样式 */}
    <style global>
    {
     `
     span{
       background: blue
     }
     ` 
    }
    </style>
  </Fragment>
);

A.getInitialProps = (context) => {
  return {
    name: 'Lichunlin'
  }
}
export default withRouter(A);

