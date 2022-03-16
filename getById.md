# **getById(id)**

## test cases

Method searches the datastorage for an object with given key. Key is unique.

### Test 1: test id of the car

Return: returns the car object matching the id or null if there is no match

### if id (1) exist returns car object matching the id (1)

```json
{
  "id": 1,
  "manufacturer": "WBM",
  "type": "XGT",
  "accessories": ["radar", "coffee warmer", "hook"],
  "price": 250000,
  "extras": [
    {
      "name": "winter tires",
      "price": 1500
    },
    {
      "name": "summer tires",
      "price": 1000
    }
  ]
}
```

### if id doesn't match returns an empty array

```js
register.getId("x");
```

returns []

### Test 2: if id is missing throws an exception

```js
register.getId());

```

```js
throws an exception `'missing parameter'`

```
