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