;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-subway" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M685.1 21L513 319.1 340.9 21z" fill="#ACD8CB" ></path>' +
    '' +
    '<path d="M513 328.1c-3.2 0-6.2-1.7-7.8-4.5L333.1 25.5c-1.6-2.8-1.6-6.2 0-9s4.6-4.5 7.8-4.5h344.2c3.2 0 6.2 1.7 7.8 4.5 1.6 2.8 1.6 6.2 0 9L520.8 323.6c-1.6 2.7-4.6 4.5-7.8 4.5zM356.5 30L513 301.1 669.5 30h-313zM263.1 1020.8c-1 0-2-0.2-3-0.5-4.7-1.7-7.1-6.8-5.5-11.5L371.9 679c1.7-4.7 6.8-7.1 11.5-5.5 4.7 1.7 7.1 6.8 5.5 11.5l-117.3 329.8c-1.3 3.7-4.8 6-8.5 6zM762.9 1020.8c-3.7 0-7.2-2.3-8.5-6L637.1 685c-1.7-4.7 0.8-9.8 5.5-11.5 4.7-1.7 9.8 0.8 11.5 5.5l117.3 329.8c1.7 4.7-0.8 9.8-5.5 11.5-1 0.3-2 0.5-3 0.5z" fill="#3E4152" ></path>' +
    '' +
    '<path d="M741 959.4H285c-5 0-9-4-9-9s4-9 9-9h456c5 0 9 4 9 9s-4 9-9 9z" fill="#3E4152" ></path>' +
    '' +
    '<path d="M747 846.2H279c-31.6 0-57.2-25.6-57.2-57.2V166.7c0-31.6 25.6-57.2 57.2-57.2h468c31.6 0 57.2 25.6 57.2 57.2V789c0 31.6-25.6 57.2-57.2 57.2z" fill="#C1E7D8" ></path>' +
    '' +
    '<path d="M747 855.2H279c-36.5 0-66.2-29.7-66.2-66.2V166.7c0-36.5 29.7-66.2 66.2-66.2h468c36.5 0 66.2 29.7 66.2 66.2V789c0 36.5-29.7 66.2-66.2 66.2zM279 118.5c-26.6 0-48.2 21.6-48.2 48.2V789c0 26.6 21.6 48.2 48.2 48.2h468c26.6 0 48.2-21.6 48.2-48.2V166.7c0-26.6-21.6-48.2-48.2-48.2H279z" fill="#3E4152" ></path>' +
    '' +
    '<path d="M221.8 221.9h582.5v18H221.8zM221.8 599.6h582.5v18H221.8z" fill="#3E4152" ></path>' +
    '' +
    '<path d="M754.8 846.2H271.2c-27.3 0-49.5-22.2-49.5-49.5v-191h582.5v190.9c0 27.4-22.1 49.6-49.4 49.6z" fill="#9B5C77" ></path>' +
    '' +
    '<path d="M754.8 855.2H271.2c-32.2 0-58.5-26.2-58.5-58.5V605.8c0-5 4-9 9-9h582.5c5 0 9 4 9 9v190.9c0 32.2-26.2 58.5-58.4 58.5z m-524-240.4v181.9c0 22.3 18.2 40.5 40.5 40.5h483.5c22.3 0 40.5-18.2 40.5-40.5V614.8H230.8z" fill="#3E4152" ></path>' +
    '' +
    '<path d="M392.8 702.9H289c-5 0-9-4-9-9s4-9 9-9h103.8c5 0 9 4 9 9s-4 9-9 9zM737 702.9H633.2c-5 0-9-4-9-9s4-9 9-9H737c5 0 9 4 9 9s-4 9-9 9zM143.8 428.8c-5 0-9-4-9-9v-72.2l81.2-68.7c3.8-3.2 9.5-2.7 12.7 1.1 3.2 3.8 2.7 9.5-1.1 12.7L152.8 356v63.9c0 4.8-4.1 8.9-9 8.9zM882.2 428.8c-5 0-9-4-9-9v-63.9l-74.8-63.3c-3.8-3.2-4.3-8.9-1.1-12.7 3.2-3.8 8.9-4.3 12.7-1.1l81.2 68.7v72.2c0 5-4 9.1-9 9.1z" fill="#3E4152" ></path>' +
    '' +
    '<path d="M804.2 230.9H221.8v-72c0-27.3 22.2-49.5 49.5-49.5h483.5c27.3 0 49.5 22.2 49.5 49.5v72z" fill="#8599A4" ></path>' +
    '' +
    '<path d="M813.2 239.9H212.8v-81c0-32.2 26.2-58.5 58.5-58.5h483.5c32.2 0 58.5 26.2 58.5 58.5v81z m-582.4-18h564.5v-63c0-22.3-18.2-40.5-40.5-40.5H271.2c-22.3 0-40.5 18.2-40.5 40.5v63z" fill="#3E4152" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)