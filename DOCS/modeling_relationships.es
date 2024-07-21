# Child Query: get parent with specific child information
GET amazon_products_with_features/_search
{
    "query": {
        "has_child": {
            "type": "feature",
            "query": {
                "bool": {
                    "must": [
                    {
                        "term": {
                            "feature_key": {
                                "value": "processor_series"
                            }
                        }
                    },
                    {
                        "term": {
                            "feature_value":  {
                                "value": "Core i7"
                            }
                        }
                    }
                    ]
                }
            }
        }
    }
}
# Parent query: Get children with specific parent information
GET amazon_products_with_features/_search
{
    "query": {
        "has_parent": {
            "parent_type": "product",
            "query": {
                "ids": {
                    "values": ["c0001"]
                }
            }
        }
    }
}

# Parent ID Query: Get the children based on the ID of the parent
GET /amazon_products_with_features/_search
{
    "query": {
        "parent_id": {
            "type": "feature",
            "id": "c0001"
        }
    }
}