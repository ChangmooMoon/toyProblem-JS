$(function () {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var addSpan = function () {
    $('p').each(function (index, p) {
      var pTag = $(p)
      var text = pTag.text().trim().split(' ').reduce(function (acc, curV) {
        return acc + '<span>' + curV + '</span>' + ' '
      }, '')
      pTag.html(text)
    })
  }
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var randomSpanColor = function () {
    $('span').each(function (idx, s) {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
      $(s).css('background-color', rgb);
    });
  }
  addSpan()
  setInterval(randomSpanColor, 1000)
})
