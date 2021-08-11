import { withRouter } from 'next/router';

const A = ({ router, name }) => <span>A{router.query.id} {name}</span>;

A.getInitialProps = (context) => {
  return {
    name: 'Lichunlin'
  }
}
export default withRouter(A);

