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
      return [];
    } else {
      throw new Error("parameter missing");
    }
  }
};
