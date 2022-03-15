
// todo 
$(function(){
    $('#todo_add').click(function () {
        $('#todo_add').hide();
        $('#todo_exit').show();
        $('#input_box').show();
        $('#todo_list').css("height","62%");
      });

      $('#todo_exit').click(function () {
        $('#todo_exit').hide();
        $('#todo_add').show();
        $('#input_box').hide();
        $('#todo_list').css("height","73%");

      });

});

$(function(){

    var button = document.getElementById('todo_btn');
    var input = document.getElementById('todo_input');
    var list = document.getElementById('todo_list');
    

    var cnt = 1;
    
    button.addEventListener('click', clickButton);

    
    function clickButton() {
      var temp = document.createElement('span');
      temp.setAttribute("class", "todo-item");
      temp.setAttribute("id", "todo"+cnt);
      temp.innerHTML = '· '+input.value+'<span class="del" value="deletetodo" onclick="deletetodo()"><img src="https://img.icons8.com/material-outlined/12/000000/trash--v1.png"/></span>';
      list.appendChild(temp);
      
      cnt++;
    };
    
});

// todo 삭제
$(document).on('click', '.del', function(){
  $(this).parent('.todo-item').remove();
});


// 유저

// more btn
$(document).on('click', '.more_btn', function(){
  $(this).parent().parent().children('.account_list').show();
  $(this).hide();
  $(this).parent().children('.more_exit_btn').show();
});

$(document).on('click', '.more_exit_btn', function(){
  $(this).parent().parent().children('.account_list').hide();
  $(this).hide();
  $(this).parent().children('.more_btn').show();
});

// 검색



// 리펀드

$(document).on('click', '.check_btn_refund', function(){

  // $(this).parent().parent().children('.refund_inprogress').hide();
  // $(this).parent().parent().children('.refund_done').show();
  if(confirm('환불 진행을 완료하셨습니까?')){

    $(this).parent().parent().children('.refund_inprogress').hide();
    $(this).parent().parent().children('.refund_done').show();
    
    }else{
    
    alert('환불 완료 처리가 취소되었습니다.');
    
    };
});



  
  
  
  출처: https://oomm.tistory.com/6 [Out of my mind]


// 그리드

$(function(){

    // var screen_width;

    // screen_width =$(window).width();
    // var main_width = screen_width-180;

    // $("#main").css("width",main_width);


    // 그리드 레이아웃
    $('.grid').masonry({
    // options
        itemSelector: '.item',
    });
});