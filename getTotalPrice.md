# Test cases

## **getTotalPrice(id)**

Returns the total price of the car including the total price of the extras

- Parameters: id of the car
- Return: The price of the car including the total price of the extras
- if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: if id match with parameter id returns total price of car

```js
getTotalPrice(1);
```

returns: 252500

### Test 2: if car id do not match with parameter id

```js
getTotalPrice(9);
```

returns: nothing found with given id
