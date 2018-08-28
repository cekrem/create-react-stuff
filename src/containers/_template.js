import React from 'react';
import { connect } from 'react-redux';

const REPLACE = props => <div>Hello!</div>;

REPLACE.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {}
)(REPLACE);
