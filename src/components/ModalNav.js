import React from 'react';
import "./ModalNav.css"

const ModalNav = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal-cont active" : "modal-cont"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalNav;