# Match Query on text field (on keyword field a Match query gets converted into a Term query)
GET /amazon_products/_search
{
    "query": {
        "match": {
            "manufacturer": "victory multimedia"
        }
    }
}
# Match Query with and operator: all terms must figure in the search
GET /amazon_products/_search
{
    "query": {
        "match": {
            "manufacturer": {
                "query": "victory multimedia",
                "operator": "and"
            }
        }
    }
}
# Match Query with minimum number of terms that should match
GET /amazon_products/_search
{
    "query": {
        "match": {
            "manufacturer": {
                "query": "victory multimedia",
                "minimum_should_match": 2
            }
        }
    }
}
# Match Query with fuzziness: 0, 1, 2 or AUTO (based on the Levenshtein edit distance: turn one term into another by making a number of edits (0, 1, or 2), edits can be: insertions, deletions, substitutions, or transposion of characters in the original term)
GET /amazon_products/_search
{
    "query": {
        "match": {
            "manufacturer": {
                "query": "victor multimedia",
                "fuzziness": 1
            }
        }
    }
}

# Match Phrase Query: match a sequence of words in the given order
GET /amazon_products/_search
{
    "query": {
        "match_phrase": {
            "description": {
                "query": "real video saltware aquarium"
            }
        }
    }
}
# Match Phrase Query with slop: specify the number of words allowed to be missed
GET /amazon_products/_search
{
    "query": {
        "match_phrase": {
            "description": {
                "query": "real video aquarium",
                "slop": 1
            }
        }
    }
}

# Multi Match Query
## Querying multiple fields with defaults (equal scores to fields)
GET /amazon_products/_search
{
    "query": {
        "multi_match": {
            "query": "monitor aquarium",
            "fields": ["title", "description"]
        }
    }
}
## Boostion one or more fields
GET /amazon_products/_search
{
    "query": {
        "multi_match": {
            "query": "monitor aquarium",
            "fields": ["title^3", "description"]
        }
    }
}
## With types: (best_fields, most_fields, cross_fields, phrase, phrase_prefix)
GET /amazon_products/_search
{
    "query": {
        "multi_match": {
            "query": "monitor aquarium",
            "fields": ["title^3", "description"],
            "type": "best_fields"
        }
    }
}