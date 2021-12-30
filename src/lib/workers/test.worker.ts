export default () => {
  let isProcessing = false;

  onmessage = function (e) {
    console.log(isProcessing, e);

    if (isProcessing) {
      return;
    }

    isProcessing = true;

    let count = e.data;

    while (count >= 0) {
      count -= 1;
    }

    isProcessing = false;
  };
};
