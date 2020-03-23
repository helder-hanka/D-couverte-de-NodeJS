process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ? ')
process.stdin.on('data', (number) => {
  if (number < 99 && number > 0) {
    let years = 2020 - number;
    console.log('Years age is ' + years)
  } else {
    console.log('there is an error')
  }
  // console.log('Years age is ' + number)
  process.exit()
})