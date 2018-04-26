/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(() => {
  const convert = (type, value) => {
    if (type === 0) return '' + value
    else if (type === 1) return parseInt(value, 10)
    else if (type === 2) return parseFloat(value)
    else if (type === 3) return new Date(value)

  }

  const $tbody = $('tbody')
  const $tr = $('tbody > tr')
  let order = false

  $('th').each((thIndex, thElement) => {
    $(thElement).on('click', () => {
      order = !order

      if (order) {
        $tr.sort((a, b) => {
          return convert(thIndex, b.children[thIndex].innerHTML) > convert(thIndex, a.children[thIndex].innerHTML)
        })
      } else {
        $tr.sort((a, b) => {
          return convert(thIndex, b.children[thIndex].innerHTML) < convert(thIndex, a.children[thIndex].innerHTML)
        })
      }

      $.each($tr, (index, row) => {
        $tbody.append(row)
      })
    })
  })
})

