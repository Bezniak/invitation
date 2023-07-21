import React from 'react';
import success from '../img/success.svg'

export const Success = ({count}) => {
    return (
        <div className="success-block">
            <img src={success} alt="Success"/>
            <h3>Successfully!</h3>
            <p>An invitation has been sent to all {count} users.</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
        </div>
    );
};
