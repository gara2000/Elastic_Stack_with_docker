PUT /amazon_products
{
    "settings": {
        "number_of_shards": 1,
        "number_of_replicas": 0,
        "analysis": {
            "analyzer": {}
        }
    },
    "mappings": {
        "properties": {
            "id": {
                "type": "keyword"
            },
            "title": {
                "type": "text"
            },
            "description": {
                "type": "text"
            },
            "manufacturer": {
                "type": "text", 
                "fields": {
                    "raw": {
                        "type": "keyword"
                    }
                }
            },
            "price": {
                "type": "scaled_float",
                "scaling_factor": 100
            }
        }
    }
}