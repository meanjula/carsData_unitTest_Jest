# Test cases

## **getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the car

- Parameters: id of the car to be searched
- Return: the total price of extras. If no extras is found returns 0
- if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: if id match return the total price of extras

```js
getPriceOfTheExtras(1);
```

returns: 2500

### Test 2: if car id do not match with parameter id

```js
getPriceOfTheExtras(8);
```

returns: throws an exception `'nothing found with given id'`
