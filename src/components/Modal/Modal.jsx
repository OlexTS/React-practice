import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handlePressEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressEsc);
  }
  handlePressEsc = (e) => {
    console.log(Date.now);
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };
  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div
        className="modal fade show"
        style={{ display: "block", backdropFilter: "blur(5px)" }}
        onClick={this.handleBackdropClick}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Modal</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={this.props.closeModal}
              ></button>
            </div>
            <div className="modal-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
