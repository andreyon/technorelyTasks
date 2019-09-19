function ownBind(foo, context) {
    return function(){
        foo.apply(context, arguments);
    };
}

// проверка работы:

let taxCalculate = {
    percentNds: 20,
    calculateNds: function(sum){
         let res = sum / 100 * this.percentNds;
         console.log(res);
         return res;
    },
};

b = ownBind(taxCalculate.calculateNds, taxCalculate);
b(200);