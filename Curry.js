const curry = (fn) => {
    const curried = (...args) => {
        if (args.length === fn.length) return fn(...args)
         return (newArg) => curried(...args, newArg)
    }
    return curried
}

