$('.J-search-btn').on('click', function() {
    var ndBtn = $(this);
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
        chrome.tabs.sendMessage(tab[0].id, 12341234, function(response) {
            if (response) {
                ndBtn.val('哈哈');
            }
        });
    });
});
