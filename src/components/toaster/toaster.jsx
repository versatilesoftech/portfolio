import React from 'react';
import './toaster.css';

const ToastNotification = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="toast-container">
            <div className="toast-message">
                {message}
                <button className="toast-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default ToastNotification;
