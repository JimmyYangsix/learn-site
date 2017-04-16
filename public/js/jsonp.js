$('#userapi').blur(function(){
  var userapi = $(this);
  var stunumber = userapi.val();
  if(stunumber){
    $.ajax({
      url:'/userapi/' + stunumber,
      // cache: true,
      type: 'get',
      dataType: 'jsonp',
      // crossDamain: true,
      jsonp: 'callback',
      success:function(data){
        // alert(JSON.stringify(data));
        $('#inputCollege').val(data.college);
        $('#inputCclass').val(data.cclass);
        $('#inputName').val(data.name);
        $('#inputGender').val(data.gender);
        $('#inputAge').val(data.age);
        $('#inputTel').val(data.tel);
        $('#inputDescription').val(data.description);
      }
    })
  }
})
$().ready(function() {
  $(".login").validate({
    rules: {
      "user[stunumber]": {
        required: true,
        number: true,
      },
      "user[college]": "required",
      "user[cclass]": "required",
      "user[name]": "required",
      "user[gender]": "required",
      "user[age]": {
        required: true,
        number: true,
      },
      "user[password]": {
        required: true,
        minlength: 5,

      },
      "confirm_password": {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      "user[email]":{
        required: true,
        email: true,
      },
      "user[tel]": {
        required: true,
        number: true,
        minlength: 11,
        maxlength: 20,
      },
      "user[description]":{
        required: true,
        minlength: 2,
        maxlength: 255,
      },
    },
    messages: {
      "user[stunumber]": {
        required: "必填项",
        number: "必须是数字",
      },
      "user[college]": "必填项",
      "user[cclass]": "必填项",
      "user[name]": "必填项",
      "user[gender]": "必填项",
      "user[age]": {
        required: "必填项",
        number: "必须是数字",
      },
      "user[password]": {
        required: "必填项",
        minlength: "最小长度为5",

      },
      "confirm_password": {
        required: "必填项",
        minlength: "最小长度为5",
        equalTo: "两次密码输入不一致"
      },
      "user[email]":{
        required: "必填项",
        email: "必须是合法的邮件格式",
      },
      "user[tel]": {
        required: "必填项",
        number: "必须是数字",
        minlength: "最小长度为11",
        maxlength: "最小长度为20",
      },
      "user[description]":{
        required: "必填项",
        minlength: "最小长度为2",
        maxlength: "最小长度为255",
      },
    },
  });
});