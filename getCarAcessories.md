# Test Cases

## **getCarAccessories(id)**

Returns an array of car accessories. If none found, returns an empty array.

- Parameters: id of the car
- Return: returns accessories as an array

### Test 1: if given id match to car id returns matched car acessories

```js
getCarAccessories(1);
```

returns

```js
["radar", "coffee warmer", "hook"];
```

### Test 2: if given id do not match to any car id

```js
getCarAccessories(1);
```

returns []
