- **getAllIdsByManufacturer(value)**
  Returns all ids of the cars matching the value of manufacturer

  - Parameters: value of the property to be searched
  - Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

  getAllIdsByManufacturer(value)

  ### Test 1: if cars manufacturer matches the given value, returns an array of car id.

  ```js
  getAllIdsByManufacturer("WBM");
  ```

  returns:

  ```js
  [1];
  ```

  ### Test 2: if manufacturer value is missing returns an empty array.

  ```js
  getAllIdsByManufacturer();
  ```

  returns []

  ### Test 3:if given manufacturer value do not match returns an empty array.

  ```js
  getAllIdsByManufacturer("xy");
  ```

  returns []
