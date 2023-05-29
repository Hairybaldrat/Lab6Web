import React, { useEffect, useState } from 'react';
import SearchBar from './Search.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import "./Cart.css"

export default function Item() {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7101/api/Items', {
            method: 'GET',
            "Content-Type": "application/json",
        })
            .then((res) => res.json())
            .then((data) => {
              setItems(data);
              console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function handleAddToCart(item) {
        const index = cartItems.findIndex((cartItem) => cartItem.itemid === item.itemid);
        if (index === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            cartItems[index].quantity++;
            setCartItems(cartItems);
        }
        setCartTotal(cartTotal + item.price);
    }

    function handleRemoveFromCart(item) {
        const index = cartItems.findIndex((cartItem) => cartItem.itemid === item.itemid);
        if (cartItems[index].quantity <= 0) {
            return;
        } else {
            cartItems[index].quantity--;
            if (cartItems[index].quantity === 0) {
                cartItems.splice(index, 1);
            }
            setCartItems(cartItems);
        }
        setCartTotal(cartTotal - item.price);
    }

    return (<Container className="mt-4">
        <Row >
            <Col md="auto">
          <SearchBar handleAddToCart={handleAddToCart} items={items}></SearchBar >
            </Col>
            <Col>
                <Container className="itemsbox">
                    {
                        items.map(item => {
                            return (

                                <Container className="box mb-4" key={item.itemid}>
                                    <Row>
                                        <strong>{item.name}</strong>
                                    </Row>
                                    <Row>
                                        <img className="ItemImage" src={"/Images/Chungus.webp"} alt={item.name}></img>
                                    </Row>
                                    <Row>
                                        <p>${item.price}</p>
                                    </Row>
                                    <Row>
                                        <Button className="addbutt" variant="dark" onClick={() => handleAddToCart(item)}>Add to cart</Button>
                                    </Row>
                                </Container >

                            )
                        })
                    }
                </Container>
            </Col>
            <Col md="3">

                <div className="Cart">
                    <h1>Cart</h1>
                    <ul>
                        {cartItems.map((item) => (<li key={item.itemid}>{item.name + " Amount " + item.quantity}<Button className="m-2" variant="dark" onClick={() => handleRemoveFromCart(item)}> Remove </Button></li>))}
                    </ul>
                    <h2>Total: <b>${cartTotal}</b></h2>
                    <Button>Purchase</Button>
                </div>
            </Col>
        </Row >
    </Container >
    );
}