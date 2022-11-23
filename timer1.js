args = process.argv.slice(2);

const Alarm = function (args) {
  for (let num of args) {
    if (Number(num) && Number(num) > 0) {
      num = Number(num);
      let timer = num * 1000;
      setTimeout(() => {
        process.stdout.write("\x07");
      }, timer);
    }
  }
};

Alarm(args);
