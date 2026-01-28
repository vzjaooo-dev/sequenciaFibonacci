function fibonacciSequence(){
    const n=10
    let n1 = 0
    let n2 = 1
    const sequence = [n1, n2]

    for (let i = 2; i < n; i++){
        [n1 , n2] = [n2 ,n1 + n2]
        sequence.push(n2)
    }
    return sequence
}
 console.log(fibonacciSequence())