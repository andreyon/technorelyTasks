const makeDiscount = (percent) => {
    if (isNaN(percent) || typeof percent !== 'number') throw Error('Only number allowed');

    let discount = percent;

    return discountCalculate = (price) => {
        if (isNaN(a) || typeof a !== 'number') throw Error('Only number allowed');

        let resultPrice = price - (price / 100 * discount);
        console.log(resultPrice);
    };
};

let resultDiscount = makeDiscount(10);
resultDiscount(500);

resultDiscount = makeDiscount(90);
resultDiscount(500);