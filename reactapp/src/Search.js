import React from 'react';
import { useState } from 'react';

export default function Search({ handleAddToCart , items }) {
  const [query, setQuery] = useState("");
  const filtereditems = items?.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())) || [];

    return (<div className="Searchbox mb-3">
        <input type="text" placeholder="Search..." className="searchbar" onChange={e => setQuery(e.target.value)}></input>
        {query ? filtereditems.map((item) => (<div key={item.itemid} className="searchitembox"> <h3>{item.name}</h3> <p>${item.price}</p><button onClick={() => handleAddToCart(item)}>Add to cart</button></div>)) : null}
    </div>);
}