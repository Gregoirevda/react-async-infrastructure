export const runPureTask = async (task) => {
  for (;;) {
    console.log('while');
    try {
      console.log('before task');
      const taskResult = task();
      console.log('task', taskResult);
      return taskResult;
    } catch (x) {
      console.log('catch');
      if (x instanceof Promise) {
        console.log('catch promise');
        await x;
      } else {
        console.log('error')
        throw x;
      }
    }
  }
};