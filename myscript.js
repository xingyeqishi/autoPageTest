function changeClass() {
    $('.title').addClass('finded');
    $.each($('.title span'), function(index, val) {
        console.log($(val).html());
    });
}
function autoQueue() {
    console.log('autoQueue');
    var timer;
    var timerNum = 0;
    if ($('.J-cancel-btn').length > 0) {
        $('.J-cancel-btn').trigger('click');
        setTimeout(function() {
            $('.msg-btn-ok').trigger('click');
        }, 300);
        timer = setInterval(function() {
            if ($('.J-cancel-btn').length == 0) {
                window.location.reload();
                autoQueue();
                clearInterval(timer);
            }
        }, 50);

    } else {
        $('.J-personNum-input').val(2);
        setTimeout(function() {
            $('.J-getnumber-btn').trigger('click');
        }, 200);
        setTimeout(function() {
            $('.msg-btn-ok').trigger('click');
        }, 300);
        timer = setInterval(function() {
            timerNum++;
            if ($('.J-cancel-btn').length > 0) {
                autoQueue();
                clearInterval(timer);
            }
            if (timerNum > 100) {
                clearInterval(timer);
                window.location.reload();
            }
        }, 50);
    }
}
autoQueue();
/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
//changeClass();
autoQueue();
      sendResponse({farewell: "goodbye"});
  });
  */
