#!/bin/bash
# Create the index
curl -X PUT "$ELASTICSEARCH_HOSTS/amazon_products" -u "elastic:elastic" -H 'Content-Type: application/json' -k -d' { "settings": { "number_of_shards": 1, "number_of_replicas": 0, "analysis": { "analyzer": {} } }, "mappings": { "properties": { "id": { "type": "keyword" }, "title": { "type": "text" }, "description": { "type": "text" }, "manufacturer": { "type": "text", "fields": { "raw": { "type": "keyword" } } }, "price": { "type": "scaled_float", "scaling_factor": 100 } } } }'
# Start Kibana
/usr/local/bin/kibana-docker