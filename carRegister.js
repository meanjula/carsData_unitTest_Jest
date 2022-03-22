"use strict";

module.exports = class Cars {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.carRegister = data;
  }
  getId(id) {
    if (id) {
      for (let car of this.carRegister) {
        if (car.id === id) {
          return car;
        }
      }
      return null;
    } else {
      throw new Error("parameter missing");
    }
  }

  getAllIdsByManufacturer(manufacturer) {
    if (manufacturer) {
      const idFound = [];
      for (let car of this.carRegister) {
        if (car.manufacturer === manufacturer) {
          idFound.push(car.id);
        }
      }
      return idFound;
    }
    return [];
  }

  getAllCarTypes() {
    const types = [];
    for (let car of this.carRegister) {
      if (car.type && car.type.length > 0) {
        if (!types.includes(car.type)) {
          types.push(car.type);
        }
      }
    }
    return types;
  }
  getAllCarsBYTypes(type) {
    let carByType = [];
    if (!type) throw new Error("missing parameter");
    for (let car of this.carRegister) {
      if (car.type && car.type === type) {
        carByType.push(car);
      }
    }
    return carByType;
  }

  getCarAccessories(id) {
    if (typeof id === "number") {
      for (let car of this.carRegister) {
        if (car.id === id) {
          return car.accessories;
        }
      }
    }
    return [];
  }

  getPriceWithoutExtras(id) {
    for (let car of this.carRegister) {
      if (car.id === id) {
        return car.price;
      }
    }
    return "nothing found with given id";
  }
  getTotalPrice(id) {
    const totalprice = [];
    let sum = 0;
    for (let car of this.carRegister) {
      if (car.id === id) {
        for (let extra of car.extras) {
          sum += extra.price;
        }
        return sum + car.price;
      }
    }
    return "nothing found with given id";
  }

  getPriceOfTheExtras(id) {
    let sum = 0;
    for (let car of this.carRegister) {
      if (car.id === id) {
        for (let extra of car.extras) {
          sum += extra.price;
        }
        return sum;
      }
    }
    return "nothing found with given id";
  }

  hasAccessories(id) {
    for (let car of this.carRegister) {
      if (car.id === id) {
        if (car.accessories && car.accessories.length > 0) {
          return true;
        }
      }
    }
    return false;
  }
};
