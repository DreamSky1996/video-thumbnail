import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired
};
export default Container;
