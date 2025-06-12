type Test<TValues, TResult> = {
  values: TValues;
  result: TResult;
};

/**
 * testFunctionReturn is a function fot testing solutions.
 * It simplifies testing each solution with unified approach.
 * @param solution - is a function that we want to test.
 * @param tests - is an array of objects that contains values that
 * solution should accept and a result that should be returned.
 */
export const testFunctionReturn = <TValues, TResult>(
  solution: (values: TValues) => TResult,
  tests: Test<TValues, TResult>[]
) => {
  const isSolutionValid = tests.reduce((acc, test, index) => {
    const testPassed = solution(test.values) === test.result;

    console.log(`test ${index} result: `, solution(test.values), testPassed);

    return testPassed ? acc : false;
  }, true);

  console.log("all tests passed: ", isSolutionValid);
};
