// TODO: 이 곳에 정답 코드를 작성해주세요.
//1. 페이지가 로드 된 시점에 ID입력창에 FOCUS가 되어 있어야 합니다.
const $id = document.getElementById('id') //$는 일종의 관습
window.addEventListener('load', () => $id.focus()) //페이지가 로드되었을때니까

//기존의input태그안에서 autofocus속성으로도 사용가능

//2. 유효성 검사 로직
//이벤트 : input foucus out / 가입하기 버튼 눌렀을때
const $pw = document.getElementById('pw')
const $pwCheck = document.getElementById('pw-check')

var ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
var PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

//ID 유효성검사
const validateId = (value) => {
    //$id.value = e.target.value
    const isValiId = ID_REGEX.test(value) //정규식 하는 함수 - true/false 매치
    console.log(isValiId)
}

//pw 유효성검사
const validatePw = (value) => {
    const isValiPw = PW_REGEX.test(value) //정규식 하는 함수 - true/false 매치
    console.log(isValiPw)
}

//PWCHECK
const validatePwCheck = (value) => {
    const isValiPwCheck = $pw.value === value
    console.log(isValiPwCheck)
}

$id.addEventListener('focusout', () => validateId($id.value))
$pw.addEventListener('focusout', () => validatePw($pw.value))
$pwCheck.addEventListener('focusout', () => validatePwCheck($pwCheck.value))

const $submit = document.getElementById('submit')
$submit.addEventListener('click', (e) => {
    e.preventDefault() //submit기능을 막기
    validateId($id.value)
    validatePw($pw.value)
    validatePwCheck($pwCheck.value)
})
