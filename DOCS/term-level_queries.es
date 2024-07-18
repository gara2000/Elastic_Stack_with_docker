# Range Query
GET /amazon_products/_search
{
  "query":{
    "range": {
      "price": {
        "gte": 10,
        "lte": 20
      }
    }
  }
}
# Range Query with Boost: all docs that pass this filter will have a score of 2.2 instead of 1
GET /amazon_products/_search
{
  "query":{
    "range": {
      "price": {
        "gte": 10,
        "lte": 20,
        "boost": 2.2
      }
    }
  }
}
# Range Query on dates
GET /amazon_products/_search
{
  "query":{
    "range": {
      "orderDate": {
        "gte": "01/09/2017",
        "lte": "30/09/2017",
        "format": "dd/MM/yyyy"
      }
    }
  }
}

# Exists Query
GET /amazon_products/_search
{
    "query": {
        "exists": {
            "field": "description"
        }
    }
} 

# Term Query (by default it runs in the query context and hence it calculates a score)
GET /amazon_products/_search
{
    "query": {
        "term": {
            "manufacturer.raw": "victory multimedia"
        }
    }
}
# Term Query in filter context (without scoring)
GET /amazon_products/_search
{
    "query": {
        "constant_score": {
            "filter": {
                "term": {
                    "manufacturer.raw": "victory multimedia"
                }
            }
        }
    }
}