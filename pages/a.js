import { withRouter } from 'next/router';
import { Fragment } from 'react';

const A = ({ router, name }) => (
  <Fragment>
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

