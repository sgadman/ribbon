import React from "react";

const Home = () => {
  // Data object
  const data = {
    key1: {
      key2: {
        key3: "A"
      }
    },
    key2: {
      key3: "B"
    },
    key3: "C",
    key4: null
  };

  /**
   * Given a data object(above)
   * and a string that identifies the path of a potential value in the supposed object
   * write a function that dynamically returns the value at the specified path
   */

  const getValue = (obj, path) =>
    path.split(".").reduce((object, pathString) => object[pathString], obj);

  /**
   * The following assertions must pass
   * and TypeErrors must be avoided
   * https://developer.mozilla.org/en-US/docs/Web/API/console/assert
   */

  console.assert(
    getValue(data, "key1.key2.key3") === "A",
    `getValue(data, 'key1.key2.key3') must return 'A'`
  );

  console.assert(
    getValue(data, "key2.key3") === "B",
    `getValue(data, 'key2.key3') must return 'B'`
  );

  console.assert(
    getValue(data, "key3") === "C",
    `getValue(data, 'key3') must return 'C'`
  );

  console.assert(
    getValue(data, "key4") === null,
    `getValue(data, 'key4') must return null`
  );

  console.assert(
    getValue(data, "key1.key2.key3.key4") === undefined &&
      getValue(data, "key5") === undefined,
    `
      both
      getValue(data, 'key1.key2.key3.key4') 
      and
      getValue(data, 'key5')
      must return undefined`
  );

  console.assert(
    getValue(data, "key3.key4") === undefined,
    `getValue(data, 'key4') must return undefined`
  );

  return (
    <>
      <h1>This is the home page</h1>
    </>
  );
};

export default Home;
