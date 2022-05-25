import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../style/Items/items.css'
import { useParams } from "react-router-dom";
import ItemModal from './ItemModal'



const Items = () => {
    const { category } = useParams()

    const [items, setItems] = useState([])
    const [item, setItem] = useState('')

    const showModal = (item) => {
        setItem(item)
    }
    const closeModal = () => {
        setItem('')
    }

    useEffect(() => {
        const getItems = async () => {
            const result = await axios.get('https://api.publicapis.org/entries');
            const allItems = result.data.entries;
            const categoryItems = allItems.filter(item => item.Category === category);
            setItems(categoryItems)
        }
        getItems()
    }, [category])
    return (
        <div className="item__wrapper">
            {items && items.length ? items.map((item) => (
                <div class="ui card" key={item.API}>
                    <div class="content">
                        <div class="header">{item.API}</div>
                    </div>
                    <div class="content">
                        <p>{item.Description}</p>
                        <span>Category: {item.Category}</span>
                    </div>
                    <div class="extra content">
                        <button class="ui button" onClick={() => showModal(item)}>Show More</button>
                    </div>
                </div>
            )) : <div class="ui segment">
                <div class="ui active centered inline loader">
                    <div class="ui text loader large centered inline">Loading</div>
                </div>
            </div>}ite
            <ItemModal item={item} closeModal={closeModal} />
        </div>
    )
}

export default Items