from flask import Flask, jsonify

app = Flask(__name__)

# Route to return doughnut chart data
@app.route('/api/inventory-status', methods=['GET'])
def inventory_status():
    data = {
        'labels': ['Low Stock', 'In Stock'],
        'datasets': [
            {
                'data': [33, 67],
                'backgroundColor': ['#ff6384', '#36a2eb'],
            }
        ]
    }
    return jsonify(data)

# Route to return line chart data
@app.route('/api/stock-levels', methods=['GET'])
def stock_levels():
    data = {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        'datasets': [
            {
                'label': 'Stock Levels',
                'fill': False,
                'lineTension': 0.1,
                'backgroundColor': '#ff6384',
                'borderColor': '#ff6384',
                'data': [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    }
    return jsonify(data)

# Route to return bar chart data
@app.route('/api/low-stock-products', methods=['GET'])
def low_stock_products():
    data = {
        'labels': ['Item A', 'Item B', 'Item C', 'Item D'],
        'datasets': [
            {
                'label': 'Stock',
                'backgroundColor': 'rgba(75,192,192,1)',
                'borderWidth': 1,
                'data': [65, 59, 80, 81]
            }
        ]
    }
    return jsonify(data)

# Route to return inventory table data
@app.route('/api/inventory-details', methods=['GET'])
def inventory_details():
    data = [
        {'product': 'Product A', 'category': 'Category 1', 'stock': 20, 'status': 'In Stock'},
        {'product': 'Product B', 'category': 'Category 2', 'stock': 5, 'status': 'Low Stock'},
        {'product': 'Product C', 'category': 'Category 3', 'stock': 50, 'status': 'In Stock'}
    ]
    return jsonify(data)
  
if __name__ == '__main__':
    app.run(debug=True)
