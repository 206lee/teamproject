$(function(){
    // 게시판 마우스 오버시 하부게시판 리스트 보이기
    // if($(".sub-nav-list").is(':visible')){
    //     $(".sub-nav-list").fadeOut(500);
    // }
    // else{
    //     $(".sub-nav-list").fadeOut(500);
    // };

    // $(".nav-item").click(function(e){
    //     e.preventDefault();
    //     console.log("상위게시판 클릭");
    // });

    // modal
    $("#btnLogin").click(function(){
        console.log("로그인 클릭");
        $("#loginModal").show();
    });
    $("#close-modal").click(function(){
        $("#loginModal").hide();
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('#loginModal')) {
            $('#loginModal').hide();
        }
    });
});

// Get the modal
const modal = document.getElementById('loginModal');

// Get the button that opens the modal
const btn = document.getElementById('loginBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = 'block';
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = 'none';
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }