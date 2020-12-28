import React, { Component } from 'react'
import Card from "react-bootstrap/Card";

class Products extends Component {

    state = {
        products: [
            {
                id: 1,
                name: 'Ma vee Rice',
                price: "Rs 200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda harum commodi, nemo optio repellendus consequuntur? Aspernatur vero velit corporis facilis dolores accusamus quo dolorum ab, accusantium eum odio ad sit?",
                imgSrc: "https://i.ytimg.com/vi/pOK4Hw2iL8g/maxresdefault.jpg"
            },
            {
                id: 2,
                name: 'Organic Carrot',
                price: "Rs 200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda harum commodi, nemo optio repellendus consequuntur? Aspernatur vero velit corporis facilis dolores accusamus quo dolorum ab, accusantium eum odio ad sit?",
                imgSrc: "https://www.ocado.com/productImages/653/65353011_0_640x640.jpg"
            },
            {
                id: 3,
                name: 'Organic Cheese',
                price: "Rs 200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda harum commodi, nemo optio repellendus consequuntur? Aspernatur vero velit corporis facilis dolores accusamus quo dolorum ab, accusantium eum odio ad sit?",
                imgSrc: "https://www.pongcheese.co.uk/wp-content/uploads/2008/12/Bath-Organic-Selection-Box_1280x800.jpg"
            },
            {
                id: 4,
                name: 'Organic vegetable basket',
                price: "Rs 200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda harum commodi, nemo optio repellendus consequuntur? Aspernatur vero velit corporis facilis dolores accusamus quo dolorum ab, accusantium eum odio ad sit?",
                imgSrc: "https://sevenmantras.com/pub/media/catalog/product/cache/2537080c1b01533a47638b5bfcb56519/m/i/mini.jpg"
            },
            {
                id: 5,
                name: 'Organic sweets',
                price: "Rs 200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda harum commodi, nemo optio repellendus consequuntur? Aspernatur vero velit corporis facilis dolores accusamus quo dolorum ab, accusantium eum odio ad sit?",
                imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71MyQ28I7EL.jpg"
            }
        ]
    }

    render() {
        return (
            <div className="product-list">{
                this.state.products.map(p => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'right', margin: '20px' }}>
                            <Card style={{ width: '90%', justifyContent: 'center', margin: '15px' }}>
                                <Card.Body style={{ margin: '10px' }}>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{p.price}</Card.Subtitle>
                                    <Card.Text>
                                        <p><img src={p.imgSrc} width='200px' height='150px' /></p>
                                        {p.description}
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Products;