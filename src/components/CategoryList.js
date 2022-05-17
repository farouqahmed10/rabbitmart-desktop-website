import { Card } from "react-bootstrap";

const CategoryList = () => {
    return (<div className="card-group">
        
        <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" src="https://assets.epicurious.com/photos/57eebe2eb382c3c017d3fff0/16:9/w_2560%2Cc_limit/supermarket-shelves.jpg" />
            <Card.Body>
                <button className="category-button">All</button>
            </Card.Body>
        </Card>
        
        
            <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body>
                    <button className="category-button">Fruits & Vegtables</button>
                </Card.Body>
            </Card>
        
        
            <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1580944027064-e20ebf8e1ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body>
                    <button className="category-button">Meat, Poultry & Seafood</button>
                </Card.Body>
            </Card>
        

    </div>
    );
}

export default CategoryList;