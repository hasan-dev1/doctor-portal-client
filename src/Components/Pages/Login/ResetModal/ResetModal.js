import React from 'react';

const ResetModal = ({ handleResetpass, resetmodal }) => {
  return (
    <div>
      <input type="checkbox" id="resetPassModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-12">
          <label
            htmlFor="resetPassModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-accent bg-slate-200 p-4 rounded-lg">
            <form onSubmit={handleResetpass}>
              <input
                defaultValue={resetmodal}
                placeholder="Set Your Email"
                className="input w-full"
                type="text"
                name="resetEmail"
              />
              <button type="submit" className="btn btn-primary text-white mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;