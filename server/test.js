const main = async () => {
    const num = await fetch('http://localhost:3001/api/quotes/random').then(res => res.json());
    console.log(num)
}

main()