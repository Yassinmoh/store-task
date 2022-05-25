import React from 'react'
import Modal from 'react-modal'




const ItemModal = ({item,closeModal}) => {
    return (

        <Modal isOpen={item} onRequestClose={closeModal}>
            <span className="icon-close" onClick={closeModal}>&times;</span>
            <div className="item-info">
                <h3>API : {item.API}</h3>
                <h3>Description : {item.Description}</h3>
                <h3>Auth : {item.Auth}</h3>
                <h3>HTTPS : {item.HTTPS}</h3>
                <h3>Cors : {item.Cors}</h3>
                <h3>Link : <a>{item.Link}</a></h3>
                <h3>Category : {item.Category}</h3>
            </div>
        </Modal>

    )
}

export default ItemModal