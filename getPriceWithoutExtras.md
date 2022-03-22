# Test Cases

## **getPriceWithoutExtras(id)**

Returns the price with out extras

- Parameters: id of the car
- Return: The price of the car not including the price of the extras
- if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: if id match returns the price of car.

```js
getPriceWithoutExtras(id);
```

returns

```json
350000
```

### Test 2: if id do not match throws an exeption .

```js
getPriceWithoutExtras(8);
```

returns:
throws an exception `'nothing found with given id'`
