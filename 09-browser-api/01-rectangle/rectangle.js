const q = document.querySelector,
      $ = q.bind(document);

let $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $('#area'),
    $widthValidate = $('#width-validate'),
    $heightValidate = $('#height-validate'),
    isPassValidate = false;

$width.onblur = () => {
  let result = Util.validate($width.value);
  isPassValidate = result.isOK;
  if(!result.isOK) {
    $widthValidate.innerHTML = '宽度' + result.reason;
    $width.select();
  } else {
    $widthValidate.innerHTML = '';
  }
};

$width.onkeypress = (e) => {
  if(!Util.isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
    e.preventDefault();
  }
};

$height.onblur = () => {
  let result = Util.validate($height.value);
  isPassValidate = result.isOK;
  if(!result.isOK) {
    $heightValidate.innerHTML = '高度' + result.reason;
    $height.select();
  } else {
    $heightValidate.innerHTML = '';
  }
};

$height.onkeypress = function(e) {
  if(!Util.isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
    e.preventDefault();
  }
};

$btnCal.onclick = () => {
  if(!isPassValidate) return;

  let w = $width.value,
      h = $height.value;

  let r = new Rectangle(w, h);

  $perimeter.value = r.perimeter;
  $area.value = r.area;
};
