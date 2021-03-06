﻿/* 
Microsoft provides programming examples for illustration only, without 
warranty either expressed or implied, including, but not limited to, the 
implied warranties of merchantability and/or fitness for a particular 
purpose. 
　
This sample assumes that you are familiar with the programming language 
being demonstrated and the tools used to create and debug procedures. 
Microsoft support professionals can help explain the functionality of a 
particular procedure, but they will not modify these examples to provide 
added functionality or construct procedures to meet your specific needs. 
If you have limited programming experience, you may want to contact a 
Microsoft Certified Partner or the Microsoft fee-based consulting line 
at (800) 936-5200. 
*/

(function (app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));