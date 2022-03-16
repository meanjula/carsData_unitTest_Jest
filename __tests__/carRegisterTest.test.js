const { TestWatcher } = require("jest");
const carRegister = require("../carRegister");
const cars = require("../datastorage.json");
const type = require("../typeofCar.json");

describe("Testing constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new carRegister()).toThrow(`data storage missing`);
  });
});

describe("Testing method getById", () => {
  const register = new carRegister(cars);
  describe("Test 1:test id of the car", () => {
    const testValues = [
      [
        1,
        {
          id: 1,
          manufacturer: "WBM",
          type: "XGT",
          accessories: ["radar", "coffee warmer", "hook"],
          price: 250000,
          extras: [
            {
              name: "winter tires",
              price: 1500,
            },
            {
              name: "summer tires",
              price: 1000,
            },
          ],
        },
      ],
      [
        2,
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
      ],
      [
        3,
        {
          id: 3,
          manufacturer: "FauV",
          type: "solo",
          accessories: [],
          price: 15000,
          extras: [],
        },
      ],
    ];
    test.each(testValues)("getid(%s) returns %p ", (id, expected) => {
      expect(register.getId(id)).toEqual(expected);
    });
  });

  test("Test 2: if id parameter is string ", () => {
    expect(register.getId("1")).toEqual([]);
  });
  test("Test 3: if id is missing throws an exception ", () => {
    expect(() => register.getId());
  });
});
