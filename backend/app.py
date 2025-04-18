from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/api/dashboard-data')
def get_dashboard_data():
    # Sample data - replace with your actual data source
    data = {
        'metrics': {
            'total_users': 1500,
            'active_users': 1200,
            'conversion_rate': 0.75,
            'revenue': 50000
        },
        'charts': {
            'user_growth': [
                {'date': '2024-01', 'value': 1000},
                {'date': '2024-02', 'value': 1200},
                {'date': '2024-03', 'value': 1500}
            ],
            'revenue_by_category': [
                {'category': 'Product A', 'value': 20000},
                {'category': 'Product B', 'value': 15000},
                {'category': 'Product C', 'value': 15000}
            ]
        }
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True) 