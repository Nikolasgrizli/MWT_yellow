$(function(){

    var testdrive = $('.test-drive');
    if (testdrive.length == 0) {
        return;
    }

    testdrive.find('button').on('click', function(){
        $.colorbox({
            href: '/test-drive?topicId=' + $(this).data('topicid') + '&productId=' + $(this).data('productid'),
            width : 400,
            height : 480,
            maxWidth : '95%',
            // closeButton: false
            close: "",
            className : 'test-drive-box',
            onComplete:function(){
                // $.colorbox.resize();
                // $('#cboxLoadedContent input, #cboxLoadedContent button').on('click mousemove', function(){
                //     $.colorbox.resize();

                // });
            }
        });

        return false;
    });

});