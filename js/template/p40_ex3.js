var isMusic1Playing = false;
var isMusic2Playing = false;
var $audio1 = $("#audioPlayer1");
var $audio2 = $("#audioPlayer2");
var audioTime = [
  [0.1, 15.3],
  [0.1, 15.3],
  [0.1, 15.3],
];
var slider = document.getElementById("myRange");
var lastAudio = 0;
var ansArr1 = ["0", "0", "0", "0", "0"];
var ansArr2 = [" ", " ", " ", " ", " "];
var ansArr3 = ["0", "0", "0", "0", "0"];
var correctans = [
  ["was Daren running", "was Daren running", "was Daren running", "was Daren running", "was Daren running", "was Daren running", 0],
  [
    "were you doing",
    "were you doing",
    "were you doing",
    "were you doing",
    "were you doing",
    "were you doing",
    2,
  ],
  [
    "Were the girls chatting",
    "Were the girls chatting",
    "Were the girls chatting",
    "Were the girls chatting",
    "Were the girls chatting",
    "Were the girls chatting",
    1,
  ],
  [
    "was Alice calling",
    "was Alice calling",
    "was Alice calling",
    "was Alice calling",
    "was Alice calling",
    "was Alice calling",
    1,
  ],
  ["were you cooking", 
    "were you cooking", 
    "were you cooking", 
    "were you cooking", 
    "were you cooking", 
    "were you cooking", 
    0
  ],
  [
    "was your mum wearing",
    "was your mum wearing",
    "was your mum wearing",
    "was your mum wearing",
    "was your mum wearing",
    "was your mum wearing",
    0,
  ],
  [
    "Were you and Ben riding",
    "Were you and Ben riding",
    "Were you and Ben riding",
    "Were you and Ben riding",
    "Were you and Ben riding",
    "Were you and Ben riding",
    0,
  ],
];
var totalquestion = $("div.active .input").length;
var totalItems = $(".item").length;
var currentIndex = $("div.active").index() + 1;
var id;

function fnTemplate2_v1(_div) {
  var slide = $(_div);
  var x;
  $audio1[0].pause();
  $audio1[0].currentTime = 0;
  slider.value = 0;
  $audio1[0].removeEventListener("timeupdate", fnUpdateTimer);
  $("#pButton .playImg").show();
  $("#pButton .pauseImg").hide();
  setAudio($(slide).attr("data-audioSrc"));
  // $(".showAnsBtn").addClass("disabled");
  $(".checkAnsBtn").addClass("disabled");

  var currNum = 1;
  $(".queBox .clickableBox,.queBox .textBox").on("click", function () {
    currNum = $(this).parent().attr("id").split("_")[1];
    $audio1[0].pause();
    $audio2[0].pause();
    $("#pButton .playImg").show();
    $("#pButton .pauseImg").hide();
    $(".pagePopup .carousel-inner .item").removeClass("active");
    $(".pagePopup .carousel-inner .item_" + currNum + "").addClass("active");
    $(".popup_" + currentIndex).show();
  });
  $(".pagePopup .closeBtn").on("click", function () {
    $audio2[0].pause();
    $(".pagePopup").hide();
  });
  $(".popupSlider").on("slid.bs.carousel", function (e) {
    $audio2[0].pause();
  });

  $audio1[0].addEventListener("timeupdate", function () {
    var currTime = $audio1[0].currentTime;
    var audioDuration = $audio1[0].duration;
    if (currTime >= audioTime[0] && currTime < audioTime[1]) {
      $(".textBox").css("background-color", "#ffffff");

      $("#imgBox_1 .textBox").css("background-color", "#ffff00");
    } else if (currTime >= audioTime[1] && currTime < audioTime[2]) {
      $(".textBox").css("background-color", "#ffffff");

      $("#imgBox_2 .textBox").css("background-color", "#ffff00");
    } else if (currTime >= audioTime[2] && currTime < audioTime[3]) {
      $(".textBox").css("background-color", "#ffffff");

      $("#imgBox_3 .textBox").css("background-color", "#ffff00");
    } else if (currTime >= audioTime[3] && currTime < audioTime[4]) {
      $(".textBox").css("background-color", "#ffffff");

      $("#imgBox_4 .textBox").css("background-color", "#ffff00");
    } else if (currTime >= audioTime[4] && currTime < audioTime[5]) {
      $(".textBox").css("background-color", "#ffffff");

      $("#imgBox_5 .textBox").css("background-color", "#ffff00");
    } else if (currTime >= audioTime[5] && currTime < audioDuration) {
      $(".textBox").css("background-color", "#ffffff");

      $("#imgBox_6 .textBox").css("background-color", "#ffff00");
    } else {
      $(".textBox").css("background-color", "#ffffff");
    }
  });

  for (var j = 0; j <= totalquestion; j++) {
    if ($("div.active").find(".input")[j].style.color != "rgb(19, 160, 197)") {
      $("div.active").find(".input")[j].disabled = false;
    }
    if ($("div.active").find(".input")[j].style.color != "black") {
      $(".checkAnsBtn").addClass("disabled");
    }
    $("div.active").find(".input")[j].addEventListener("keyup", keyup);
  }
}

function keyup() {
  $(".checkAnsBtn").removeClass("disabled");
  var y = $("div.active").find(".input")[id];

  var sum2 = ansArr1.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (y.value == "" && sum2 == 0) {
    $(".checkAnsBtn").addClass("disabled");
    ansArr1[id] = 0;
  }
}

function showbtn() {
  $(".checkAnsBtn").removeClass("disabled");
  $(".checkAnsBtn").css("cursor", "pointer");
  ansArr1[id] = 1;
  var sum = ansArr1.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function check() {
  document.querySelector("#showOne").classList.add("disabled");
  $(".checkAnsBtn").addClass("disabled");
  $(".showAnsBtn").removeClass("disabled");
  var counter = 0;
  var counter3 = 0;

  do {
    useranswer = $("div.active").find(".input")[counter].value;

    userans = useranswer.toLowerCase();
    correctanswer1 = correctans[counter][0];
    correctanswer2 = correctans[counter][1];
    correctanswer3 = correctans[counter][2];
    correctanswer4 = correctans[counter][3];
    correctanswer5 = correctans[counter][4];
    correctanswer6 = correctans[counter][5];
    correctans1 = correctanswer1.toLowerCase();
    correctans2 = correctanswer2.toLowerCase();
    correctans3 = correctanswer3.toLowerCase();
    correctans4 = correctanswer4.toLowerCase();
    correctans5 = correctanswer5.toLowerCase();
    correctans6 = correctanswer6.toLowerCase();

    ansArr2[counter] = userans;
    if (
      userans.localeCompare(correctans1) == 0 ||
      userans.localeCompare(correctans2) == 0 ||
      userans.localeCompare(correctans3) == 0 ||
      userans.localeCompare(correctans4) == 0 ||
      userans.localeCompare(correctans5) == 0 ||
      userans.localeCompare(correctans6) == 0
    ) {
      if (
        userans
          .toLowerCase()
          .localeCompare(correctans[counter][0].toLowerCase()) == 0
      ) {
        $("div.active").find(".input")[counter].value = correctans[counter][0];
      } else if (
        userans
          .toLowerCase()
          .localeCompare(correctans[counter][1].toLowerCase()) == 0
      ) {
        $("div.active").find(".input")[counter].value = correctans[counter][1];
      }

      $("div.active").find(".input")[counter].style.color = "rgb(19, 160, 197)";
      ansArr3[counter] = 1;

      if ($("div.active").find(".input")[counter].value != " ") {
        $("div.active").find(".input")[counter].disabled = true;
      }
    } else {
      $("div.active").find(".input")[counter].style.color = "red";
      ansArr3[counter] = 0;
    }

    counter++;
  } while (counter < totalquestion);

  for (var i = 0; i < ansArr2.length; i++) {
    if (
      ansArr2[i] != " " &&
      ansArr2[i] == ansArr2[i + 1] &&
      correctans[i][2] == correctans[i + 1][2]
    ) {
      if (ansArr2[i] == correctans[i][0].toLowerCase()) {
        $("div.active").find(".input")[i + 1].value = ansArr2[i + 1];
        $("div.active").find(".input")[i + 1].style.color = "red";
        $("div.active").find(".input")[i + 1].disabled = false;
        ansArr3[i + counter3] = 0;
        alert(ansArr3);
      } else if (ansArr2[i] == correctans[i][1].toLowerCase()) {
        $("div.active").find(".input")[i].value = ansArr2[i];
        $("div.active").find(".input")[i].style.color = "red";
        $("div.active").find(".input")[i].disabled = false;
        ansArr3[i + counter3] = 0;
      }
    }
    counter3++;
  }

  var total = ansArr3.reduce(function (c, d) {
    return c + d;
  }, 0);
  if (total == correctans.length) {
    $(".showAnsBtn").addClass("disabled");
  }
}

function showans() {
  $(".showAnsBtn").addClass("disabled");
  $(".checkAnsBtn").addClass("disabled");
  for (var j = 0; j < correctans.length; j++) {
    $("div.active").find(".input")[j].value = " ";
    $("div.active").find(".input")[j].style.color = "rgb(19, 160, 197)";
    $("div.active").find(".input")[j].disabled = true;
    $("div.active").find(".input")[j].style.zIndex = -1;

    if (j % 2 == 0) {
      $("div.active").find(".input")[j].value = correctans[j][0];
    } else {
      $("div.active").find(".input")[j].value = correctans[j][1];
    }
  }

  document.querySelector("#showOne").classList.add("disabled");
}

function fnReloadAll() {
  /////// azazy ///////
  document.querySelector("#showOne").classList.add("disabled");
  var elems = document.querySelectorAll("input");
  [].forEach.call(elems, function (el) {
    el.classList.remove("disabled");
    el.classList.remove("disabled2");
  });
  /////////////////////

  ansArr1 = ["0", "0", "0", "0", "0"];
  ansArr2 = [" ", " ", " ", " ", " "];
  ansArr3 = ["0", "0", "0", "0", "0"];
  $(".checkAnsBtn").addClass("disabled");
  $(".showAnsBtn").removeClass("disabled");
  // $(".showAnsBtn").addClass("disabled");
  $(".input").css("color", "black");
  $(".input").css("z-index", "0");
  $("textarea").prop("disabled", false);
  $("#submit").prop("disabled", false);
  // $(".showAnsBtn").addClass("disabled");
  document.getElementById("form").reset();
  var node = document.getElementsByClassName("tik");
  var nodeArray = Array.from(node);
  nodeArray.forEach(imageDelete);
  function imageDelete(item, index, array) {
    array[index].innerHTML = "";
  }

  $("#myCarousel").carousel(0);
  stopAudio();
  fnTemplate2_v1($("div.active"));
}

function fnReloadScreen() {
  ansArr1 = ["0", "0", "0", "0", "0"];
  ansArr2 = [" ", " ", " ", " ", " "];
  ansArr3 = ["0", "0", "0", "0", "0"];

  $(".checkAnsBtn").addClass("disabled");
  $(".showAnsBtn").addClass("disabled");
  if (currentIndex == 1) {
    $("#form textarea").prop("disabled", false);
    $("#form .showAnsBtn").addClass("disabled");
    document.getElementById("form").reset();
  } else if (currentIndex == 2) {
    $("#form2 textarea").prop("disabled", false);
    $("#form2 .showAnsBtn").addClass("disabled");
    document.getElementById("form2").reset();
  }
  for (var j = 0; j <= totalquestion; j++) {
    $("div.active").find(".input")[j].disabled = false;
  }

  document.querySelector("#showOne").classList.add("disabled");
}

function setAudio(_src) {
  if (_src == "") {
    $(".controlsDiv").addClass("hide");
  } else {
    $(".controlsDiv").removeClass("hide");
  }
  $audio1[0].setAttribute("src", _src);
  $audio1[0].load();
}

/* Title Audio function */
function fnTitleAudioClick(obj) {
  if ($(obj).hasClass("hide")) {
    return false;
  }
  $audio1[0].pause();
  $audio1[0].removeEventListener("timeupdate", fnUpdateTimer);
  $("#pButton .playImg").show();
  $("#pButton .pauseImg").hide();
  var titleAudioPath = $(obj).attr("data-audioSrc");
  //console.log("fnTitleAudioClick 	" +titleAudioPath	);
  $audio2[0].setAttribute("src", titleAudioPath);
  $audio2[0].load();
  $audio2[0].play();
  isMusic1Playing = false;
  isMusic2Playing = true;
}

function fnUpdateTimer() {
  var progressValue = Math.round(
    ($audio1[0].currentTime / $audio1[0].duration) * 100
  );

  slider.value = progressValue;
}

function fnStartAudio(_state) {
  $audio2[0].pause();
  if (_state == "play") {
    $("#pButton .playImg").hide();
    $("#pButton .pauseImg").show();
    $audio1[0].play();
    isMusic1Playing = true;
  } else {
    $("#pButton .playImg").show();
    $("#pButton .pauseImg").hide();
    $audio1[0].pause();
    lastAudio = 0;
    isMusic1Playing = false;
  }
  $audio1[0].addEventListener("timeupdate", fnUpdateTimer);
}

function stopAudio() {
  $audio1[0].pause();
  $("#pButton .playImg").show();
  $("#pButton .pauseImg").hide();
  $audio1[0].currentTime = 0;
  slider.value = 0;
  isMusic1Playing = false;
  $audio2[0].pause();
  isMusic2Playing = false;
  lastAudio = 0;
}

function fnSetPlayer() {
  if (currentIndex == 1) {
    $(".backBtn").addClass("disabled");
  }

  if (totalItems == 1) {
    $(
      ".navigationControls, .nextBtn, .reloadBtnScreen, .backBtn, .pageNumber"
    ).addClass("hide");
  }

  if ($(".title").attr("data-audioSrc") == "") {
    $(".title").addClass("hide");
    $(".headingTitle").removeClass("col-xs-10").addClass("col-xs-11");
  }

  $audio1[0].addEventListener("playing", function () {
    lastAudio = 1;
    isMusic1Playing = true;
  });

  $audio2[0].addEventListener("playing", function () {
    lastAudio = 2;
    isMusic2Playing = true;
  });

  $audio1[0].addEventListener("pause", function () {
    isMusic1Playing = false;
  });

  $audio2[0].addEventListener("pause", function () {
    isMusic2Playing = false;
  });

  $audio2[0].addEventListener("ended", function () {
    lastAudio = 0;
  });

  $audio1[0].addEventListener("ended", function () {
    lastAudio = 0;
    isMusic1Playing = false;
    $audio1[0].currentTime = 0;
    slider.value = 0;
    $audio1[0].pause();
    $audio1[0].removeEventListener("timeupdate", fnUpdateTimer);
    $("#pButton .playImg").show();
    $("#pButton .pauseImg").hide();
  });

  slider.addEventListener(
    "input",
    function () {
      // console.log(">> input "+slider.value);
      // $audio1[0].pause();
      $audio1[0].removeEventListener("timeupdate", fnUpdateTimer);
      var setTime = Math.round((slider.value * $audio1[0].duration) / 100);
      $audio1[0].currentTime = setTime;
    },
    false
  );

  slider.addEventListener(
    "change",
    function () {
      // console.log("change >> "+isMusic1Playing);
      if (isMusic1Playing) {
        $audio1[0].play();
        $audio1[0].addEventListener("timeupdate", fnUpdateTimer);
      }
    },
    false
  );

  $("#myCarousel").on("slid.bs.carousel", function () {
    currentIndex = $("div.active").index() + 1;
    $(".pageNumber").html(currentIndex + " of " + totalItems);
    if (currentIndex == 1) {
      $(".backBtn").addClass("disabled");
    } else {
      $(".backBtn").removeClass("disabled");
    }

    if (currentIndex == totalItems) {
      $(".nextBtn").addClass("disabled");
    } else {
      $(".nextBtn").removeClass("disabled");
    }

    // need to edit template function name here:
    fnTemplate2_v1($("div.active"));
  });

  $(".pageNumber").html(currentIndex + " of " + totalItems);
}

/////// azazy ///////

var foucsedElement;

function onFoucsFunction(el) {
  document.querySelector("#showOne").classList.remove("disabled");
  $("#showOne").css("cursor", "pointer");
  foucsedElement = el;
  foucsedElement.style.color = "black";
  inputsval();
}

function inputsval() {
  $(".input").on("keyup", function () {
    var disableflag = 0;

    $(".input").each(function () {
      if ($(this).val() == "" || $(this).hasClass("disabled2")) {
        disableflag += 1;
      }
    });
    disableflag >= $(".input").length
      ? $(".checkAnsBtn").addClass("disabled")
      : $(".checkAnsBtn").removeClass("disabled");
  });
}

function showVal() {
  id = foucsedElement.getAttribute("id").split("_")[1];
  ans = correctans[id][0];
  foucsedElement.value = ans;
  foucsedElement.style.color = "#0FA0C5";
  foucsedElement.disabled = true;
  foucsedElement.classList.add("disabled2");
  foucsedElement.zIndex = "-1";
  document.querySelector("#showOne").classList.add("disabled");
  $(".checkAnsBtn").addClass("disabled");
  checkInputVal();
  let inputs = $(".item.active .input");
  let check = [];
  for(let i=0;i<inputs.length; i++){
      check.push(inputs[i].disabled); 
  }
    if(check.every(check=>check)){
      $(".showAnsBtn").addClass("disabled");
    }else{
      $(".showAnsBtn").removeClass("disabled");
    }
}

function checkInputVal() {
  [].forEach.call($(".input"), function (el) {
    if (el.value != "" && el.disabled == false) {
      $(".checkAnsBtn").removeClass("disabled");
    }
  });
}

$("html").click(function (e) {
  if (!$(".input").is(":focus")) {
    if (!$(e.target).hasClass("input")) {
      document.querySelector("#showOne").classList.add("disabled");
    }
  }
});

///////////////////////////
