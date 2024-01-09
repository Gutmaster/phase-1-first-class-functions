const receivesAFunction = callback => callback()

const returnsANamedFunction = () =>
{
    const Larry = () => console.log("Larry Time")
    return Larry
} 

const returnsAnAnonymousFunction = () => (function(){console.log("Hamburger")})