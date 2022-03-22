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
    expect(register.getId("1")).toEqual(null);
  });
  test("Test 3: if id is missing throws an exception ", () => {
    expect(() => register.getId());
  });
});

describe("Testing method getAllIdsByManufacturer", () => {
  const register = new carRegister(cars);
  const testValues = [
    ["WBM", [1, 4]],
    ["Baas", [2]],
    ["FauV", [3]],
    ["x", []],
    ["", []],
  ];
  test.each(testValues)(
    "getAllIdsByManufacturer(%s) returns %p ",
    (manufacturer, expected) => {
      expect(register.getAllIdsByManufacturer(manufacturer)).toEqual(expected);
    }
  );
});

describe("Testing method getAllCarTypes", () => {
  const expected = ["XGT", "Coupe", "solo", "hybrid"];
  test("Test 1: if car types exist ", () => {
    const register = new carRegister(cars);
    expect(register.getAllCarTypes()).toEqual(expected);
  });
  test("Test 2: if car type is empty string ", () => {
    const testData = [
      {
        id: 3,
        manufacturer: "FauV",
        type: "",
        accessories: [],
        price: 15000,
        extras: [],
      },
    ];
    const register = new carRegister(testData);
    expect(register.getAllCarTypes()).toEqual([]);
  });
  test("Test 3: if car type do not exist ", () => {
    const testData = [
      {
        id: 4,
        manufacturer: "WBM",
        accessories: ["seat warmer", "navigator", "hook"],
        price: 350000,
        extras: [
          {
            name: "winter tires",
            price: 1500,
          },
          {
            name: "speaker",
            price: 1000,
          },
        ],
      },
    ];
    const register = new carRegister(testData);

    expect(register.getAllCarTypes()).toEqual([]);
  });
});

describe("Testing method getAllCarsByTypes", () => {
  const register = new carRegister(cars);
  test("Test 1: if car type exist ", () => {
    const expected = [
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
    const register = new carRegister(type); //type has data from typeofCar.json
    expect(register.getAllCarsBYTypes("Coupe")).toEqual(expected);
  });

  test("Test 2: if car type match", () => {
    expect(register.getAllCarsBYTypes("XGT")).toEqual([
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
    ]);
  });
  test("Test 3: if car type is empty string", () => {
    expect(register.getAllCarsBYTypes("xyz")).toEqual([]);
  });
  test("Test 4: if car type parameter is missing throw exception", () => {
    expect(() => register.getAllCarsBYTypes());
  });
});

describe("Testing method getCarAccessories", () => {
  const register = new carRegister(cars);
  const testValues = [
    [1, ["radar", "coffee warmer", "hook"]],
    [2, ["clock", "speedometer"]],
    [3, []],
    [4, ["seat warmer", "navigator", "hook"]],
  ];
  test.each(testValues)("getCarAccessories(%s), returns %p", (id, expected) => {
    expect(register.getCarAccessories(id)).toEqual(expected);
  });
  test("if id parameter is string ", () => {
    expect(register.getCarAccessories("1")).toEqual([]);
  });
  test("if id parameter is missing throw exception", () => {
    expect(() => register.getCarAccessories());
  });
});

describe("Testing method getPriceWithoutExtras", () => {
  const register = new carRegister(cars);
  const testValues = [
    [1, 250000],
    [2, 35000],
    [3, 15000],
    [4, 35000],
  ];
  test.each(testValues)("getid(%s) returns %p ", (id, expected) => {
    expect(register.getPriceWithoutExtras(id)).toEqual(expected);
  });

  test("Test 3: if id is missing throws an exception ", () => {
    expect(() => register.getPriceWithoutExtras());
  });
});

describe("Testing method getTotalPrice", () => {
  const register = new carRegister(cars);
  const testValues = [
    [1, 252500],
    [2, 35210],
    [3, 15000],
    [4, 37500],
  ];
  test.each(testValues)("getid(%s) returns %p ", (id, expected) => {
    expect(register.getTotalPrice(id)).toEqual(expected);
  });

  test("Test 2: if given id  do not match with any car id", () => {
    expect(register.getTotalPrice(6));
  });
});
describe("Testing method getPriceOfTheExtras", () => {
  const register = new carRegister(cars);
  const testValues = [
    [1, 2500],
    [2, 210],
    [3, 0],
    [4, 2500],
  ];
  test.each(testValues)("getid(%s) returns %p ", (id, expected) => {
    expect(register.getPriceOfTheExtras(id)).toEqual(expected);
  });

  test("Test 2: if given id  do not match with any car id", () => {
    expect(register.getPriceOfTheExtras(8));
  });
});

describe("Testing method hasOwnProperty", () => {
  const register = new carRegister(cars);
  const expected = ["totalPrice: 2500"];
  const testData = [
    {
      id: 3,
      manufacturer: "FauV",
      type: "solo",
      accessories: [],
      price: 15000,
      extras: [],
    },
    {
      id: 4,
      manufacturer: "FauV",
      type: "solo",
      price: 15000,
      extras: [],
    },
  ];
  test("Test 1:if id match and car has accessories", () => {
    expect(register.hasAccessories(1)).toEqual(true);
  });
  test("Test 2: if id match but accessories missing", () => {
    const register = new carRegister(testData);
    expect(register.hasAccessories(4)).toEqual(false);
  });
  test("Test 2: if id match but accessories is empty", () => {
    const register = new carRegister(testData);
    expect(register.hasAccessories(3)).toEqual(false);
  });
  test("Test 3: if given id do not match with any car id", () => {
    expect(register.hasAccessories(8)).toEqual(false);
  });
});
