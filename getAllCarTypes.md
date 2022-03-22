# Test cases

- Parameters: none
- Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

## **getAllCarTypes()**

### Test 1: if car types exist

```js
register.getAllCarTypes();
```

returns:

```js
["XGT", "Coupe", "solo", "hybrid"];
```

### Test 2: if car type is empty string

```json
{
        "id": 3,
        "manufacturer": "FauV",
       " type": "",
        "accessories": [],
        "price": 15000,
        "extras": [],
      },

```

returns []

### Test 3: if car type do not exist

```json
{
        "id": 3,
        "manufacturer": "FauV",
        "accessories": [],
        "price": 15000,
        "extras": [],
      },

```

returns []
