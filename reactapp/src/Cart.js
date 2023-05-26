import Items from './Items.json'
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
        fetch('http://localhost:5009/api/Items', {
            method: 'GET',

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    function handleAddToCart(item) {
        const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            cartItems[index].quantity++;
            setCartItems(cartItems);
        }
        setCartTotal(cartTotal + item.Price);
    }

    function handleRemoveFromCart(item) {
        const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (cartItems[index].quantity <= 0) {
            return;
        } else {
            cartItems[index].quantity--;
            if (cartItems[index].quantity === 0) {
                cartItems.splice(index, 1);
            }
            setCartItems(cartItems);
        }
        setCartTotal(cartTotal - item.Price);
    }

    return (<Container className="mt-4">
        <Row >
            <Col md="auto">
                <SearchBar handleAddToCart={handleAddToCart}></SearchBar >
            </Col>
            <Col>
                <Container className="itemsbox">
                    {
                        Items.map(item => {
                            return (

                                <Container className="box mb-4" key={item.id}>
                                    <Row>
                                        <strong>{item.Name}</strong>
                                    </Row>
                                    <Row>
                                        <img className="ItemImage" src={"/Images/" + item.Itemurl} alt={item.Name}></img>
                                    </Row>
                                    <Row>
                                        <p>${item.Price}</p>
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
                        {cartItems.map((item) => (<li key={item.id}>{item.Name + " Amount " + item.quantity}<Button className="m-2" variant="dark" onClick={() => handleRemoveFromCart(item)}> Remove </Button></li>))}
                    </ul>
                    <h2>Total: <b>${cartTotal}</b></h2>
                    <Button>Purchase</Button>
                </div>
            </Col>
        </Row >
    </Container >
    );
}