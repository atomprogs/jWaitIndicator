JWaitIndicator
==============

WaitIndicator for Lazy loading
===============================

JWaitIndicator is Jquery plugin to show waitindicator or progress when you submit your action.

Dependency
===============================
Jquery(Any version)

 
Initialization and WaitIndicator Method Call
===============================
```
 $("button").click(function(){
  options={
            // These are the defaults.
            display: "none",
            position: "fixed",
            zindex: "1000",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba( 255, 255, 255, .8 )",
            waitIndicatorImage: "url('../Images/pg.gif')",
            backgroundRepeat: "no-repeat",
            backgroundPosX: "50%",
            backgroundPosY: "50%"
        };
   $("#dvgds").WaitIndicatorStart(options);
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
       $("#dvgds").WaitIndicatorStart(options);
    },
    complete: function () {
       $("#dvgds").WaitIndicatorEnd(options);
    },
    success: function (result) {
    },
    error: function (error) {

    }
});
```

