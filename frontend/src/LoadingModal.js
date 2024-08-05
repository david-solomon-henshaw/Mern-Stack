import React from 'react';

const LoadingModal = ({ show }) => {
  React.useEffect(() => {
    const modal = document.getElementById('loadingModal');
    if (show) {
      const modalInstance = new window.bootstrap.Modal(modal);
      modalInstance.show();
    } else {
      const modalInstance = new window.bootstrap.Modal(modal);
      modalInstance.hide();
    }
  }, [show]);

  return (
    <div
      id="loadingModal"
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="loadingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Processing...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
