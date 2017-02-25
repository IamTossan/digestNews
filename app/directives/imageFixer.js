app.directive('imageFixer', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            element.on('error', function(){
                element.attr('src', "assets/images/bean.jpg");
            });
        }
    };
});
