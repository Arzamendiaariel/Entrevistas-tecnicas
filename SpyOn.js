function spyOn(fn){
    let calls=0
    cons called = {}
    const returned = {}

const spy =(...args)=>{
    calls++
    for(const arg of args) called[arg]=true
    const response=fn(...args);
    returned[response]=true;
    return response;
    }
    spy.getCallCount =()=> calls;

    spy.wasCalledWith =(n)=> !!called[n];

    spy.returned=(n) =>!!returned[n]
    
    return spy
}