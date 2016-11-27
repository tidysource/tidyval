'use strict';

/*
Get current value of input
(works for radio, etc. as well)
*/
var $getVal = function $getVal($el){
  var type = $el.attr("type");
  var $form = $el.closest("form");

  //radio and checkbox are not efficient
  if (type === "radio"){
    return $('input[name='
          + $el.attr("name")
          +']:checked',
          $form).val();
  }
  else if (type === "checkbox"){
    var vals = [];
    $('input[name='
         + $el.attr("name")
         +']:checked',
         $form).each(function(){
           vals.push($(this).val());
         })
    return vals;
  }
  else{
    //works for ther input and <select>
    return $el.val();
  }
};
