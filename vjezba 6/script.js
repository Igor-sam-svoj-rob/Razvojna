/* $(function () {
  $("#btn1").hide();
  $("#btn2").hide(2500).show(1000);
  $("#btn3").slideUp(1000).slideDown(2000);
  $(".col-sm-3:first-child").css({ fontWeight: "bold" });
}); */

/* $("#btn1").on("click", function () {
  $(".col-sm-3:last-child").slideToggle(1000);
}); */

/* $("#btn1").ready(function () {
  $("#btn1").click(function () {
    $(".row").first().toggle();
  });
});

$("#btn2").ready(function () {
  $("#btn2").click(function () {
    $(".row").eq(1).toggle();
  });
});

$("#btn3").ready(function () {
  $("#btn3").click(function () {
    $(".row").eq(2).toggle();
  });
}); */

$(document).ready(function () {
  $(".btn-info").click(function () {
    const panelClass = $(this).data("panel-class");
    $("." + panelClass).toggle();
  });
});
