
function onSubmit(e) {
  console.log(dataForm);
  localStorage.clear();
  e.currentTarget.reset();
}

function fn1() {
  const args1 = Array.from(arguments);
  console.log(args1);
}

function fn2(...args) {
  console.log(args);
}

fn1(1, 2, 3, 4);
fn2(6, 7, 8, 9);