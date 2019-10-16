// f(n) = 3f(n-1) + 2f(n-2)

function f(n)
{
    if(n===0)return 0
    if(n===1)return 1
    return 3*f(n-1) + 2*f(n-2) 
}

console.log("f(10)",f(10))

var f2 = [0,1]

function fii(n)
{
    if(n===0) return 0
    if(n===1) return 1
    f2[n] = 3*fii(n-1) + 2*fii(n-2)
    return f2[n]
}

console.log("fii(10)",fii(10))

var f3 = [0,1]

function fiii(n)
{
    let sum=0
    for(i=0;i<=n;i++)
    {
        if(i===0){}
        else if(i===1) {}
        else {
                sum = 3*f3[i-1] + 2*f3[i-2]
                f3[i] = sum
             }
    }
    return sum
}

console.log("fiii(10)",fiii(10))

function fiiiv2(n)
{
    let sumv2=0
    let a0=0
    let a1=1
    for(i=0;i<=n;i++)
    {
        if(i===0){}
        else if(i===1) {}
        else {
                    sumv2 = 3*a1 + 2*a0
                    a0 = a1
                    a1 = sumv2
             }
             
    }
    return sumv2
}
    
    console.log("fiiiv2(10)",fiiiv2(10))