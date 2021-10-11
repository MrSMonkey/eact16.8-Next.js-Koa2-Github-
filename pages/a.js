import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import styled  from 'styled-components';
// import moment from 'moment';


// 异步加载组件
const CompC = dynamic(import('../components/CompC'));



const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

const A = ({ router, name, time }) => (
  <Fragment>
    <Title>this is title</Title>
    <CompC/>
    <span>A{router.query.id} {name} {time}</span>
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

A.getInitialProps = async(context) => {
  const moment = await import('moment');
  moment.locale('zh-cn');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Lichunlin',
        time: moment.default(new Date().getTime() - 61 * 1000).fromNow(),
        // time: moment(new Date().getTime() - 61 * 1000).fromNow(),
      })
    }, 1000);
  });
}
export default withRouter(A);

