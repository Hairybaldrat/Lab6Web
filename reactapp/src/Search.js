import React from 'react';
import { useState } from 'react';
import Items from './Items.json'

export default function Search({ handleAddToCart }) {
  const [query, setQuery] = useState("");
  const filtereditems = Items?.filter((item) => item.Name.toLowerCase().includes(query.toLowerCase())) || [];

    return (<div className="Searchbox mb-3">
        <input type="text" placeholder="Search..." className="searchbar" onChange={e => setQuery(e.target.value)}></input>
        {query ? filtereditems.map((item) => (<div key={item.id} className="searchitembox"> <h3>{item.Name}</h3> <p>${item.Price}</p><button onClick={() => handleAddToCart(item)}>Add to cart</button></div>)) : null}
    </div>);
}