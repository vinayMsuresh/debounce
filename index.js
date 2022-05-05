let counter = 0;
const getdata = function(){
    console.log('Hi fetching data', counter++);
}

const debounce = function(func, d){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, arguments);
        }, d);
    }
}

const better = debounce(getdata, 300);