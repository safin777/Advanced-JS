let a =30

function outer () {
    let b = 20
    function inner () {
        let c = 10
        console.log(a,b,c)
    }
    inner()
}

outer()
