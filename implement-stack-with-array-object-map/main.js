document.addEventListener("DOMContentLoaded", function () {
  const selectElm = document.querySelector("select");
  const capabilityElm = document.querySelector("input[name='capability']");
  const testcaseElm = document.querySelector("input[name='testcase']");
  const submitElm = document.querySelector("#form1");

  submitElm.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = selectElm.value;
    const capability = parseInt(capabilityElm.value);
    const testCase = parseInt(testcaseElm.value);

    console.log(`Configure: `);
    console.log(`  + Implement Stack by ${type}`);
    console.log(`  + Capability = ${capability}`);
    console.log(`  + TestCase = ${testCase}`);

    runTest(type, capability, testCase);
  });

  function runTest(type, capability, testCase) {
    console.log(` `);
    console.log("Running test...");

    let stack;
    if (type === "object") stack = new OStack(capability);
    else if (type === "array") stack = new AStack(capability);
    else if (type === "map") stack = new MStack(capability);

    const start = performance.now();

    for (let tc = 0; tc < testCase; tc++) {
      for (let i = 0; i < capability; i++) {
        stack.push(i);
      }

      for (let i = 0; i < capability; i++) {
        stack.pop();
      }
    }

    const end = performance.now();
    const duration = (end - start) / testCase;

    console.log(`Duration: ${duration} ms`);
    console.log(` `);
  }
});