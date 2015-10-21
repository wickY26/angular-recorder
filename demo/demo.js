(function(){
  'use strict';

  angular.module('recorderDemo', [
    'angularAudioRecorder'
  ])
    .controller('DemoController', function($scope, $timeout){
      console.log("Loaded");

    })
    .config(function(recorderServiceProvider){
      recorderServiceProvider.forceSwf(window.location.search.indexOf('forceFlash') > -1)
        .setSwfUrl('lib/recorder.swf');
    })
    .directive('canvasSizer', ['$timeout', '$window', function($timeout, $window){

      return {
        link: function(scope, element){
          var resize = function(){
            window.GLO = element.find('canvas');
            element.find('canvas')
              .attr('height', 300)
              .attr('width', element[0].offsetWidth)
            ;
          };

          $window.addEventListener('resize', function(){
            resize();
          });

          $timeout(function(){
            //just some delay for everything to settle
            resize();
          }, 1000);
        }
      };
    }]);

})();