// Change value of isSuccess variable to call resolve or reject
const isSuccess = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  value => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Will run second
console.log("After promise.then()");

//---------------------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise1
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });

//-----------------------

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

const onFetchSuccess = user => {
  console.log(user);
};

const onFetchError = error => {
  console.error(error);
};

fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

//--------------------------------------------

const fetchUserFromServer1 = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = false;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer1("Mango")
  .then(user => console.log(user))
  .catch(error => console.error(error));

//-----------------------------------------

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

//----------------------------------------------------

const makePromise1 = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA1 = makePromise1("promiseA1 value", 1000);
const promiseB1 = makePromise1("promiseB1 value", 3000);

Promise.race([promiseA1, promiseB1])
  .then(value => console.log(value)) // "promiseA value"
  .catch(error => console.log(error));

//-----------------------------------------------------

// Fulfilled promise
new Promise(resolve => resolve("success value")).then(value =>
  console.log(value)
);

Promise.resolve("success value").then(value => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject("error")).catch(error =>
  console.error(error)
);

Promise.reject("error").catch(error => console.error(error));

//-----------------------------------------------------

// Ці методи використовуються для промісифікаціі функцій, коли необхідно побудувати ланцюжок промісів і вже є початкове значення.Виконаємо рефакторинг наступного коду.

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return {
      success: false,
      message: "Guest name must not be empty",
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const result = makeGreeting("Mango");

if (result.success) {
  console.log(result.message);
} else {
  console.error(result.message);
}

//-----------------------------------------------------

// Використовуючи колбек, відпадає необхідність повертати складні об'єкти зі статусом операції і перевіряти його у зовнішньому коді.

const makeGreeting1 = (guestName, onSuccess, onError) => {
  if (guestName === "" || guestName === undefined) {
    return onError("Guest name must not be empty");
  }
  onSuccess(`Welcome ${guestName}`);
};

makeGreeting1(
  "Mango",
  greeting => console.log(greeting),
  error => console.error(error)
);

//-----------------------------------------------------
// Останнім кроком буде промісифікація функції makeGreeting() для того, щоб повністю усунути її залежність від зовнішнього коду.

const makeGreeting2 = guestName => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  Promise.resolve(`Welcome ${guestName}`);
};

// makeGreeting2("Mango").then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

//-----------------------------------------------------

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');

  //-----------------------------------------------------



  //-----------------------------------------------------

