jWaitIndicator
==============

WaitIndicator for Lazy loading
===============================

JWaitIndicator is Jquery plugin to show waitindicator or progress when you submit your action.

Dependency
===============================
Jquery(Any version)

 
Initialization and WaitIndicator Method Call
===============================
`<script src="Scripts/jquery-1.8.2.min.js"></script>`<br>
`<script src="Scripts/jWaitIndicator.js"></script>`
```
 $("button").click(function(){
  options={
            waitIndicatorImage: "url('../Images/pg.gif')",
          };
   $("#dvgds").jWaitIndicatorStart(options);
 });
 ```
 
Calling waitIndicator on ajax call
===============================
```
 $.ajax({
    url: "method to call",
    type: "post",
    data: "your data to post",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    async: true,
    beforeSend: function () {
       $("#dvgds").jWaitIndicatorStart(options);
    },
    complete: function () {
       $("#dvgds").jWaitIndicatorEnd(options);
    },
    success: function (result) {
    },
    error: function (error) {

    }
});
```

