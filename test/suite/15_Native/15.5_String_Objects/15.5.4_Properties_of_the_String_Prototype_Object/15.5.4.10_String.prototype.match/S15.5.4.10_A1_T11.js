// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.match (regexp)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.10_String.prototype.match/S15.5.4.10_A1_T11.js
 * @description Override toString function, toString throw exception, then call match (regexp) function with this object as argument
 */

var __obj = {toString:function(){throw "intostr";}}
var __str = {str__:"ABB\u0041BABAB"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    with(str__){
        try {
          var x = match(__obj);
          $FAIL('#1: "var x = match(__obj)" lead to throwing exception');
        } catch (e) {
          if (e!=="intostr") {
            $ERROR('#1.1: Exception === "intostr". Actual: '+e);
          }
        }
    }
}
//
//////////////////////////////////////////////////////////////////////////////
