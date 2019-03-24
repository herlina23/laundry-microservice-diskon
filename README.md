# Microservice-Diskon
## Endpoints

### Rule (/api/v1/rules)

#### Get all rules
```bash
GET / 
# authorization: admin only
# Return
# {
#   freqlow:    Number,
#   freqmiddle: Number,
#   freqhigh:   Number,
#   kglow:      Number,
#   kgmiddle:   Number,
#   kghigh:     Number,
#   paylow:     Number,
#   paymiddle:  Number,
#   payhigh:    Number,
#   discountlow:    Number,
#   discountmiddle: Number,
#   discounthigh:   Number,
#   created_date:   Date
# }
```

#### Get a rule
```bash
GET /:id
# authorization: admin only
```

#### Create a rule
```bash
POST /
# authorization: admin only
#Request Sample
# {
#   freqlow:    Number,
#   freqmiddle: Number,
#   freqhigh:   Number,
#   kglow:      Number,
#   kgmiddle:   Number,
#   kghigh:     Number,
#   paylow:     Number,
#   paymiddle:  Number,
#   payhigh:    Number,
#   discountlow:    Number,
#   discountmiddle: Number,
#   discounthigh:   Number
# }
```

#### Update a Rule
```bash
PUT /:id
# authorization: admin only
```

#### Delete a Rule
```bash
DELETE /:id
# authorization: admin only
```