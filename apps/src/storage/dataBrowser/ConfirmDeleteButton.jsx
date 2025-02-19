import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../templates/Dialog';
import dataStyles from './data-styles.module.scss';
import classNames from 'classnames';

class ConfirmDeleteButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    buttonId: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    confirmText: PropTypes.string,
    containerStyle: PropTypes.any,
    onConfirmDelete: PropTypes.func.isRequired
  };

  state = {
    open: false
  };

  handleClose = () => this.setState({open: false});

  handleConfirm = () => {
    this.setState({open: false});
    this.props.onConfirmDelete();
  };

  render() {
    let {confirmText, ...otherProps} = this.props;
    confirmText = confirmText || 'Delete';
    return (
      <div style={{...{display: 'inline-block'}, ...this.props.containerStyle}}>
        <Dialog
          cancelText="Cancel"
          confirmText={confirmText}
          confirmType="danger"
          isOpen={!!this.state && this.state.open}
          handleClose={this.handleClose}
          onCancel={this.handleClose}
          onConfirm={this.handleConfirm}
          {...otherProps}
        />
        <button
          type="button"
          id={this.props.buttonId}
          onClick={() => this.setState({open: true})}
          className={classNames(dataStyles.button, dataStyles.buttonRed)}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export default ConfirmDeleteButton;
