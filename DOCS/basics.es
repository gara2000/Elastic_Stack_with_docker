### BASICS OF ELASTIC SEARCH ###
# CRUD Operations
## Get cluster information
GET /
## Create an index
PUT /my-index
## Add a document to my-index
POST /my-index/_doc
{
    "id": "park_rocky-mountain",
    "title": "Rocky Mountain",
    "description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra."
}
## Perform a search in my-index
GET /my-index/_search?q="rocky mountain"
## Add a document to the catalog index
PUT /catalog/_doc/1
{
"sku": "SP000001",
"title": "Elasticsearch for Hadoop",
"description": "Elasticsearch for Hadoop",
"author": "Vishal Shukla",
"ISBN": "1785288997",
"price": 26.99
}
PUT /catalog/_doc/2
{
"sku": "SP000002",
"title": "Google Pixel Phone 32GB - 5 inch display",
"description": "Google Pixel Phone 32GB - 5 inch display (Factory Unlocked US Version)",
"price": 400.00,
"resolution": "1440 x 2560 pixels",
"os": "Android 7.1"
}
## Update a document in the catalog index
POST /catalog/_update/1
{
  "doc": {
    "title": "Updated the title"
  }
}
## Update or Insert a document
POST /catalog/_update/3
{"doc":{"title":"Update insert operation"},
  "doc_as_upsert": true
}

# Search Operations
## Seach for all documents in the catalog index
GET /catalog/_search

# Mappings
# Get the mapping of the catalog index
GET /catalog/_mapping


# Analysis
## Analyze the text with the standard analyzer
GET /_analyze
{
  "text": "Learning Elastic Stack 7",
  "analyzer": "standard"
}
## Create an index with standard analyzer
PUT index_standard_analyzer
{
  "settings": {
    "analysis": {
      "analyzer": {
        "std":{
          "type": "standard"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "my_text": {
        "type": "text",
        "analyzer": "std"
      }
    }
  }
}
## Analyze the text field of my index
POST index_standard_analyzer/_analyze
{
  "field": "my_text",
  "text": "The Standard Analyzer works this way."
}
## Analyzer that uses English language stop words
PUT index_standard_analyzer_en_stopwords
{
  "settings": {
    "analysis": {
      "analyzer": {
        "std":{
          "type": "standard",
          "stopwords": "_english_"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "my_text": {
        "type": "text",
        "analyzer": "std"
      }
    }
  }
}
## Analyze the text field of my index
POST index_standard_analyzer_en_stopwords/_analyze
{
  "field": "my_text",
  "text": "The Standard Analyzer works this way."
}