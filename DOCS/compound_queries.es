# Constant score query: turn a query context into a filter context
GET /amazon_products/_search
{
    "query": {
        "constant_score": {
            "filter": {
                "term": {
                    "manufacturer.raw": "victory multimedia"
                }
            },
            "boost": 1.2
        }
    }
}
# Bool query: combine multiple scoring and non scoring queries
## "must" and "should" are executed in query context unless the whole bool query is included inside a filter context
## "filter" and "must_not" are always exeuted in filter context
GET /amazon_products/_search
{
    "query": {
        "bool": {
            "must": [],
            "should": [],
            "filter": {},
            "must_not": []
        }
    }
}
## "must": combine ANDed queries
## "should": combine ORed queries
## "filter": combine ANDed queries
## "must_not": negate queries