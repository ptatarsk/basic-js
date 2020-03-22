module.exports = function transform(arr) {
    let res = [];
    const operations = ['--double-prev', '--double-next',
    '--discard-prev', '--discard-next'];

    if (!Array.isArray(arr))
        throw new Error();
    for (let i = 0; i < arr.length; i++) {
        if (operations.includes(arr[i])) {
            if (arr[i] == operations[0]) {
                if (i > 0)
                    res.push(arr[i - 1]);
            } else if (arr[i] == operations[1]) {
                if (i < arr.length - 1)
                    res.push(arr[i + 1]);
            } else if (arr[i] == operations[2]) {
                if (res.length)
                    res.pop();
            } else {
                i++;
            }
        } else {
            res.push(arr[i]);
        }
    }
    return res;
};
