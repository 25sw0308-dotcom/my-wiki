/* =========================================================
   우리반 백과 - script.js
   4차시 최종본
   ========================================================= */


/* =========================================================
   공통 함수
   ========================================================= */

function connectPanel(groupName, attrName) {

  var inputs = document.querySelectorAll(
    'input[name="' + groupName + '"]'
  );


  inputs.forEach(function (input) {

    input.addEventListener("change", function () {

      document.documentElement.setAttribute(
        attrName,
        input.value
      );


      /* 선택한 설정 저장 */
      localStorage.setItem(
        attrName,
        input.value
      );

    });

  });

}


/* =========================================================
   글자 크기
   ========================================================= */

connectPanel(
  "fontsize",
  "data-fontsize"
);


/* =========================================================
   화면 너비
   ========================================================= */

connectPanel(
  "width",
  "data-width"
);


/* =========================================================
   색상 테마
   ========================================================= */

connectPanel(
  "theme",
  "data-theme"
);


/* =========================================================
   저장된 설정 불러오기
   ========================================================= */

function loadSetting(attrName, inputName) {

  var savedValue = localStorage.getItem(attrName);


  if (!savedValue) {
    return;
  }


  /* HTML 속성 변경 */

  document.documentElement.setAttribute(
    attrName,
    savedValue
  );


  /* 해당 라디오 버튼 체크 */

  var input = document.querySelector(
    'input[name="' + inputName + '"][value="' + savedValue + '"]'
  );


  if (input) {
    input.checked = true;
  }

}


/* =========================================================
   페이지가 열릴 때 저장된 설정 적용
   ========================================================= */

loadSetting(
  "data-fontsize",
  "fontsize"
);


loadSetting(
  "data-width",
  "width"
);


loadSetting(
  "data-theme",
  "theme"
);
