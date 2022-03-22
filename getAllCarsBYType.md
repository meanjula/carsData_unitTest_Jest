# Test Cases

## **getAllCarsByType(type)**

Returns an array of car objects of given type

- Parameters: type of the car to be searched
- Returns an array of car objects of given type. If no car of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### Test 1: if car type exist returns an array of car objects of given type.

```js
register.getAllCarsByType("Coupe");
```

returns

```js
[
  {
    id: 2,
    manufacturer: "Baas",
    type: "Coupe",
    accessories: ["clock", "speedometer"],
    price: 35000,
    extras: [
      {
        name: "manual",
        price: 10,
      },
      {
        name: "warranty",
        price: 200,
      },
    ],
  },
  {
    id: 6,
    manufacturer: "Hafg",
    type: "Coupe",
    accessories: ["navigator", "seatwarmer"],
    price: 45000,
    extras: [
      {
        name: "summer tires",
        price: 10,
      },
      {
        name: "warranty",
        price: 100,
      },
    ],
  },
];
```

### Test 2: if given car type do not exist returns empty array

```js
register.getAllCarsByType("xyz");
```

returns []

### Test 3: if parameter type is missing throws exception.

```js
register.getAllCarsByType();
```

throws an exception `'missing parameter'`
