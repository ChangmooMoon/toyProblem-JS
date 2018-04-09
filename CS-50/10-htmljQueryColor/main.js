$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  // var a = $('p').html().split(' ').map(function(word){
  // return <span> + word + </span>;
  // })
  $('p').html($('p').html().split(' ').map(function(word) {
    if (word)
      return '<span>' + word + ' </span>';
    }
  ))
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  const randomColor = () => {
    return Math.floor(Math.random() * 255);
  }

  const changeColor = () => {
    let rgb = [];
    for (var i = 0; i < 3; i++) {
      rgb[i] = randomColor();
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
  }
  setInterval(() => {
    $('span').each((index, element) => {
      $(element).css('color', changeColor())
    })
  }, 1000)
}
// ## HTML/jQuery
// The included index.html contains two paragraph tags, each containing a block of lorem ipsum text. Using the file `main.js`:
// * [ ] Write a function that wraps every word in its own `<span>` tag.
// * [ ] Make each word change color once per second to a random color.
