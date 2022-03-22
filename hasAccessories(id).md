# Test cases

## **hasAccessories(id)**

- Parameters: id of the car
- Return: returns true if the car has accessories else returns false. If parameter id is missing false is returned

### Test 1: if id match and car has accessories returns true

```js
hasAccessories(id);
```

returns true

### Test 2: if id match but car has accessories empty returns false

```js
hasAccessories(id);
```

returns false

### Test 3: if id match but car do not have accessories returns false

```js
hasAccessories(id);
```

returns false

## Test 4: if given id do not match with any car id returns false

```js
hasAccessories(id);
```

returns false
