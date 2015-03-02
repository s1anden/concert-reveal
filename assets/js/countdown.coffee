$(document).ready ->
  $('#countdown').countdown(new Date(2015,2,2,20,30)).on 'update.countdown', (event) ->
    $("#days").val(event.offset.days).trigger('change')
    $("#hours").val(event.offset.hours).trigger('change')
    $("#minutes").val(event.offset.minutes).trigger('change')
    $("#seconds").val(event.offset.seconds).trigger('change')
  $("#days").knob({min:0, max:7, readOnly:true, bgColor: "#545454", fgColor:"white", width:150, thickness:.2})
  $("#hours").knob({min:0, max:24, readOnly:true, bgColor: "#545454", fgColor:"white", width:150, thickness:.2})
  $("#minutes").knob({min:0, max:60, readOnly:true, bgColor: "#545454", fgColor:"white", width:150, thickness:.2})
  $("#seconds").knob({min:0, max:60, readOnly:true, bgColor: "#545454", fgColor:"white", width:150, thickness:.2})

  $("#days").after("<span class='label'>days</span>")
  $("#hours").after("<span class='label'>hours</span>")
  $("#minutes").after("<span class='label'>minutes</span>")
  $("#seconds").after("<span class='label'>seconds</span>")