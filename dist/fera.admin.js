function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Fera.AdminElementSelector=function(c){var a=this;c=c||{};var n,r,f=Fera.Util.$(),o=(c.closeAfter,c.elementHeight||"15px"),p=c.elementDisplayType||"block",h=c.elementMinWidth||150,s=[],l=[],e=function(){t(),u(),a.running=!0,a.stopped=!1},t=function(){var t,i=20;f("body","*").on("mousemove",function(e){a.running&&(10<(i+=1)&&(x(e),i=0),t&&clearTimeout(t),t=setTimeout(function(){i=20},100))}),f("body","*").on("click",function(e){if(a.running&&!a.stopped){var t=e||window.event;t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),null!=t.cancelBubble&&(t.cancelBubble=!0);var i=f(".fera-highlight");i.hasClass("fera-highlight-invalid")?alert("This element cannot be used as an integration point because it does not have a specific enough class or ID. Please contact your developer or the Fera support team for help with modifying your store's content if you really want it at this location."):(n||m(i),d())}}),f(document).on("keyup keydown",function(e){var t=e.keyCode||e.which;a.stopped||27!==t||(a.pause(),a.stopped=!0,c.completedCallback()),a.stopped||16!==t||("keydown"===e.type?a.pause():(a.resume(),x(e)))})},i=function(e){var t=e.attr("class");if(!t)return e;t=t.split(" ");for(var i=[],a=0;a<t.length;a++)t[a]&&-1===t[a].indexOf("fera-")&&""!==t[a]&&i.push(t[a]);return e.attr("class",i.join(" ")),e};a.pause=function(){a.running=!1,i(f(".fera-highlight")),f(".fera-highlight-placeholder").remove(),f("#feraElementSelectorStyles").remove()},a.resume=function(e,t){void 0!==e&&(c.chooseLocation=e),void 0!==t&&(c.completedCallback=t),a.running=!0,a.stopped=!1,u()};var d=function(){var e=f(f(n)[0].outerHTML),t={css_path:n,position:r,html:e[0].outerHTML.replace(/ class="\s?"/,"").replace(/\n\n+/g,"\n").trim(),recommended_classes:s,recommended_styles:l};a.pause(),a.stopped=!0,c.completedCallback(t)},u=function(){var e='<style id="feraElementSelectorStyles"> .fera-highlight{ cursor: crosshair !important; } .fera-highlight.fera-highlight-invalid{ cursor: not-allowed !important; outline: 1px solid red !important; } body.fera-load-waiting::after {content: "";background-color: rgba(255, 255, 255, 0.5);position: fixed;left: 0;top: 0;right: 0;bottom: 0;z-index: 99999999;}';if(c.chooseLocation){var t=parseInt(o.replace("px",""));t=150<t?150:t;var i=Math.max((t-15)/2,2)+"px";e+="[data-fera-skill] { opacity: 0.3; cursor: not-allowed; } .fera-highlight{ outline: 1px solid #0000ff24 !important; } .fera-highlight-placeholder { padding-top: "+i+" !important; padding-bottom: "+i+" !important; text-align: center !important;\nwidth: 100% !important;\nfont-weight: bold !important;\ncolor: black !important;\ndisplay: block !important;\nbackground-color: #f0f2ff !important;\nborder: 4px dashed #1800ff !important;\ntext-transform: uppercase !important;\nz-index: 9 !important;\nposition: relative !important;\nmargin-left: auto !important;\nmargin-right: auto !important;\nfont-size: 16px !important;\n} @keyframes feraHighlightPulse {\n    0% {        box-shadow: none;    }    20% {        box-shadow: 0 0 0 10000000px rgba(0, 0, 0, 0.5);    }    80% {        box-shadow: 0 0 0 10000000px rgba(0, 0, 0, 0.5);    }    100% {        box-shadow: none;    }}.fera-highlight-container {    z-index: 99999;    position: relative;    animation-name: feraHighlightPulse;\n    animation-duration: 1.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;}"}else e+=".fera-highlight{ outline: 2px solid #0000ff !important; } .fera-highlight.btn:not(.disabled):hover::after { border: none !important; }";e+="</style>",f("body").append(e)},m=function(e,t){var i;t=t||" ";var a=e.get(0).tagName;if(-1!==["TR","THEAD","TFOOT","TBODY"].indexOf(a))return null;if(e.hasClass("shopify-payment-button__button"))return null;if(e.width()<h)return null;if("flex"===e.parent().css("display"))return null;var n=function(e){return 1===f(t+e).length};if(e.data("fera-skill")||0<e.parents("[data-fera-skill]").length)return null;if(e.attr("id")&&(e.attr("id")&&n("#"+e.attr("id"))&&!e.attr("id").match(/product[_\-.][0-9a-z]+/i)))return i=t+"#"+e.attr("id");if(e.data("section-id"))return i='[data-section-id="'+e.data("section-id")+'"]';if("FORM"===a&&e.attr("action")){var r='form[action="'+e.attr("action")+'"]';if(n(r))return i=t+r}if(e.attr("class"))for(var o=e.attr("class").replace(/\s\s+/gm," ").trim().split(" "),s=0;s<o.length;s++){var l=o[s];if(-1===l.indexOf("fera-highlight")&&n("."+l))return i=t+"."+l}if(n(a))return i=t+a.toLowerCase();var d=new Fera.CssPathGenerator(e.get(0),{skipDataAttributes:!0,skipAttributes:!0});return n(i=d.getPath())?t+i:n(i=(d=new Fera.CssPathGenerator(e.get(0),{skipAttributes:!0,maxDataAttrSize:60})).getPath())?t+i:null},g=function(){f(".fera-highlight").removeClass("fera-highlight fera-highlight-prepend_to fera-highlight-append_to fera-highlight-invalid fera-highlight-after fera-highlight-before fera-highlight-left fera-highlight-right")},v=function(e,t){var i=t.css("display"),a=-1===["table-cell","table-row","li"].indexOf(i);-1!==["table-cell","table-row"].indexOf(i)&&(a=!1);var n=!0;"block"===p&&c.chooseLocation&&(-1!==["inline-block","inline","flex"].indexOf(i)&&(n=!1),-1!==["H1","H2","H3","H4","H5","H6","P","A","TABLE","SVG","IMG"].indexOf(t[0].tagName)&&(n=!1)),t.is(".slideshow,.slick-slider")&&(n=!1);var r=t.height()/4,o=e.offsetY>=2*r,s=(e.offsetY,e.offsetY>=3*r),l=e.offsetY>=2*r&&e.offsetY<3*r,d=e.offsetY>=r&&e.offsetY<2*r;e.offsetY;return a&&s?"after":n&&(a&&l||!a&&o)?"append_to":n&&d||!a?"prepend_to":"before"},w=function(e,t){-1!==["after","before"].indexOf(t)&&-1!==["left","right"].indexOf(e.css("float"))?l.push("float: "+e.css("float")):-1!==["prepend_to","append_to"].indexOf(t)&&-1!==["left","right"].indexOf(e.children(":not(.fera-highlight-placeholder)").css("float"))&&l.push("float: "+e.children(":not(.fera-highlight-placeholder)").css("float")),e.hasClass("container")&&s.push("container");var i=parseInt(e.css("padding-bottom"));i&&0<i&&"after"===t&&l.push("margin-bottom: "+e.css("padding-bottom"));var a=parseInt(e.css("padding-top"));a&&0<a&&"before"===t&&l.push("margin-top: "+e.css("padding-top"));var n=parseInt(e.css("margin-bottom"));n&&0<n&&"after"===t&&l.push("margin-bottom: "+e.css("margin-bottom"));var r=parseInt(e.css("margin-top"));r&&0<r&&"before"===t&&l.push("margin-top: "+e.css("margin-top"))},b=function(){if(c.chooseLocation){var e=f("<div>INSERT HERE</div>");e.attr("style",l.join(" !important; ")),e.attr("class","fera-highlight-placeholder "+s.join(" ")),e.insertBefore(".fera-highlight-before"),e.insertAfter(".fera-highlight-after"),e.prependTo(".fera-highlight-prepend_to"),e.appendTo(".fera-highlight-append_to")}},x=function(e){var t=f(e.target);if(t.hasClass("fera-highlight-placeholder"))return!1;f(".fera-highlight-placeholder").remove();var i=m(t);if(!i){var a=t.parents("div[id]");(i=m(t,"#"+a.first().attr("id")+" "))&&(t=f(i))}if(0<t.parents(".slideshow,.slick-slider").length&&(t=t.parents(".slideshow,.slick-slider").first()),g(),l=[],s=[],t.addClass("fera-highlight"),null===i)return t.addClass("fera-highlight-invalid"),n=r=null,!1;r=v(e,t),t.addClass("fera-highlight-"+r),c.chooseLocation&&w(t,r),n=i,b()};e()},Fera.AdminIntegrationChecker=function(e){e=e||{};var t=this,a=Fera.Util.$();t.check=function(e){var t="==== YOUR CUSTOMERS WILL >>NOT<< SEE THIS MESSAGE ====\n\n",i="Please contact our support team at help@fera.ai and someone will be able to help you get it working.";"product_list"==e&&0==a('.banana-container[data-container_type="list"]').length&&alert(t+"It doesn't look like Fera is integrated properly into your list/grid/collection pages. "+i)}},Fera.AdminPanel=function(a){this.version="1.1.0.1";var n=this;a=a||{};var e,t,i,r,o=Fera.Util.$(),s=!1,l=function(){a.logger.log("~~ Loaded fera.admin.js version "+n.version+" ~~")};n.initHelpers=function(){e=a.containers,t=a.markAllContainersAsDirtyCallback,$(),g(),v(),S(),C(),w(),b(),T(),A(),F(),U(),x(),P(),y(),setInterval(y,1e3),k(),f(),d(),n.previewer=new Fera.AdminPreviewer(a)};var d=function(){if(a.optionsParser.urlParams.show_element_selector){var e={elementHeight:a.optionsParser.urlParams.fera_element_height,adminSessionToken:a.adminSessionToken,apiUrl:a.optionsParser.urlParams.api_url,chooseLocation:a.optionsParser.hasUrlFlag("choose_location"),closeAfter:a.optionsParser.hasUrlFlag("fera_close_after"),api:a.api};new Fera.AdminElementSelector(e)}};n.showPreviewMessage=function(e){c()&&i.html(": "+e)};var c=function(){return a.optionsParser.getPreviewId()},f=function(){if(c()&&0===o("#feraPreviewModeIndicator").length){var e=".fera-preview-mode-indicator-container {\n  height: 0;\n  width: 0;\n}\n.fera-preview-mode-indicator {\n  z-index: 99999999999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: white;\n  color: #ff3500;\n  border: 12px solid #f44714;\n  padding: 18px 60px;\n  vertical-align: middle;\n  box-shadow: 0px 0px 20px #00000014;\n  cursor: grabbing;\n}\n.fera-preview-mode-indicator.draggable { cursor: grabbing; } \n.fera-preview-mode-indicator img {\n  max-height: 22px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.fera-preview-mode-indicator #adminPreviewModeMainCaption {\n  height: 24px;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: unset;\n  margin-left: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-transform: uppercase;}\n.fera-preview-mode-indicator:hover a.close-preview {\n    display: block;\n}\n\n.fera-preview-mode-indicator .close-preview {\n  position: absolute;\n  right: 4px;\n  top: 2px;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #ff3500;\n  text-decoration-color: #ff35003d;\n}@media(max-width: 500px) {\n .fera-preview-mode-indicator #adminPreviewModeMessage,\n .fera-preview-mode-indicator #adminPreviewModeMainCaption {\n     display: none;\n }  \n .fera-preview-mode-indicator {\n     padding: 4px;\n     border-width: 2px;\n } \n  .fera-preview-mode-indicator .close-preview {\n      background-color: white;\n      font-size: 8px;\n      position: relative;\n      left: 0;\n  }\n}";r=o('<div id="feraPreviewModeIndicator" class="fera-preview-mode-indicator"><img src="'+a.api.baseCdnPath+'/img/branding/logo_icon.png" alt="Fera.ai Admin Preview"><span id="adminPreviewModeMainCaption">Skill Preview Mode</span><a class="close-preview" href="#">close preview</a><span id="adminPreviewModeMessage"></span><style>'+e+"</style></div>"),o("body").prepend(r),i=r.find("#adminPreviewModeMessage"),r.find(".close-preview").on("click",function(e){e.preventDefault(),p()}),h(),u(),o("#admin-bar-iframe").hide()}},p=function(){var e=window.location.toString();return e=Fera.Util.updateURLParameter(e,"fera_preview",null),e=Fera.Util.updateURLParameter(e,"fera_test",null),e=Fera.Util.updateURLParameter(e,"fera_admin",null),e=Fera.Util.updateURLParameter(e,"test_mode",null),e=Fera.Util.updateURLParameter(e,"admin_mode",null),e=Fera.Util.updateURLParameter(e,"preview",null),e=Fera.Util.updateURLParameter(e,"fera",null),window.location=e,!0},h=function(){o("a").each(function(){var e=o(this);if(!e.data("fera-preview-links-added")){var t=e.attr("href");"string"==typeof t&&""!==t&&0!==t.indexOf("#")&&(t=Fera.Util.updateURLParameter(t,"fera_test",a.testMode),t=Fera.Util.updateURLParameter(t,"fera_admin",a.adminMode),t=Fera.Util.updateURLParameter(t,"fera_preview",a.optionsParser.getPreviewId()),e.data("fera-preview-links-added",!0),e.attr("href",t))}})},u=function(){var t=r.width(),i=r.height(),a=null;r.on("mousedown",function(e){"close-preview"!==o(e.target).attr("class")&&(r.attr("unselectable","on").addClass("draggable"),a=r)}).on("mouseup",function(){a=null,r.removeAttr("unselectable").removeClass("draggable")}),o("body").on("mousemove",function(e){a&&a.offset({top:e.pageY-i/2,left:e.pageX-t/2})})},m=function(){s?(n.$panel.hide(),s=!1):(n.$panel.show(),s=!0)},g=function(){o("#feraAdminPanelToggle").on("change",function(e){e.preventDefault(),m()})},v=function(){n.$panel.find("#feraAdminPanel--hide").on("click",function(e){e.preventDefault(),o("#feraAdminPanelToggle").click()})},w=function(){n.$panel.find("#feraAdminPanel--clearShownHistoryHelp").on("click",function(e){return e.preventDefault(),alert('Fera only shows each social proof event (eg. "Someone has started buying X item") ONCE per customer.\n\nUse this action to clear Fera\'s "seen" history and re-display any shown social proof events for testing purposes.\n\nNote: Clearing of notifications will remain active until you switch to another page.'),!1})},b=function(){n.$panel.find("#feraAdminPanel--clearShownHistory").on("click",function(e){return e.preventDefault(),a.app.trigger("feeds.reset"),window.location=Fera.Util.updateURLParameter(window.location.toString(),"clear_notification_history",1),!1})},x=function(){n.$panel.find("#feraAdminPanel--numContainersHelp").on("click",function(e){return e.preventDefault(),alert("This shows you the number of Fera containers located on this page. The Fera containers are what show Fera content embedded within your pages. \n\nIf you're expecting to see Fera embedded content ON THIS PAGE but you're not seeing anything and this number is 0, that probably means Fera is not properly integrated into your store's theme. Please follow our integration guides or seek help from one of our support staff to get integration working on your store."),!1}),n.$panel.find("#feraAdminPanel--numContainersValue").text(e.size())},P=function(){n.$panel.find("#feraAdminPanel--sessionTimeHelp").on("click",function(e){return e.preventDefault(),alert("Shows how much time the user spent on site during the current session. Session resets after 1 hours of inactivity."),!1}),n.$panel.find("#feraAdminPanel--timeSinceFirstSeenHelp").on("click",function(e){return e.preventDefault(),alert("Shows how much time has passed since the user first visited the site (including any time in the past). This timer never resets (unless the shoppers session is lost)."),!1}),n.$panel.find("#feraAdminPanel--timeOnCurrentPageHelp").on("click",function(e){return e.preventDefault(),alert("Shows how much time the user spent on current page. This timer resets after the shopper navigates to any other page."),!1})},y=function(){a.timeTracker&&(n.$panel.find("#feraAdminPanel--sessionTimeValue").text(_(a.timeTracker.getSessionTime())),n.$panel.find("#feraAdminPanel--timeSinceFirstSeenValue").text(_(a.timeTracker.getTimeSinceFirstSeen())),n.$panel.find("#feraAdminPanel--timeOnCurrentPageValue").text(_(a.timeTracker.getTimeOnCurrentPage())),n.$panel.find("#feraAdminPanel--inactiveTimeOnCurrentPageValue").text(_(a.timeTracker.getInactiveTimeOnPage())))},k=function(){(n.$panel.find("#feraAdminPanel--resetUserTimersHelp").on("click",function(e){return e.preventDefault(),alert("Resets all timers: Session Time, Time on Current Page and Time Since 1st Seen."),!1}),a.timeTracker)&&n.$panel.find("#feraAdminPanel--resetUserTimers").on("click",function(e){return e.preventDefault(),a.timeTracker.reset(),t&&t(),y(),!1})},_=function(e){var t=e%60,i=(e=(e-t)/60)%60,a=(e-i)/60,n="";return 0<a&&(n+=a+"h "),(0<i||0<a)&&(n+=i+"min "),a<=0&&(n+=t+"sec "),n},C=function(){n.$panel.find("#feraAdminPanel--testModeHelp").on("click",function(e){return e.preventDefault(),alert("Test Mode allows admins to preview in-store campaigns using test data from our server. This is useful for you to see how a busy store will look to visitors."),!1})},S=function(){var e=n.$panel.find("#feraAdminPanel--toggleTestMode");a.testMode?e.checked=!0:e.checked=!1,e.on("change",function(e){e.preventDefault();var t=window.location.toString();return-1!==t.indexOf("fera_test")?-1!==(t=Fera.Util.updateURLParameter(t,"fera_test",a.testMode?0:1)).indexOf("test_mode")&&(t=Fera.Util.updateURLParameter(t,"test_mode",null)):t=Fera.Util.updateURLParameter(t,"fera_test",a.testMode?0:1),window.location=t,!1})},A=function(){n.$panel.find("#feraAdminPanel--resetHelp").on("click",function(e){return e.preventDefault(),alert("Resetting the timers will bring back any countdown timers to their starting position. This is useful to see how things look on your store to customers who have not had their timers expire yet."),!1})},T=function(){n.$panel.find("#feraAdminPanel--reset").on("click",function(e){return e.preventDefault(),a.app.trigger("timers.reset"),a.app.trigger("feeds.reset"),window.location.reload(),!1})},F=function(){n.$panel.find("#feraAdminPanel--goBackToAdmin").on("click",function(e){return e.preventDefault(),window.location=a.api.baseAppPath,!1})},U=function(){n.$panel.find("#feraAdminPanel--turnOff").on("click",function(){if(confirm("You can reactivate the storefront admin panel from your Fera account under the 'Store Settings' menu section.")){var e=window.location.toString();-1!==e.indexOf("fera_test")?-1!==(e=Fera.Util.updateURLParameter(e,"fera_test",0)).indexOf("test_mode")&&(e=Fera.Util.updateURLParameter(e,"test_mode",null)):e=Fera.Util.updateURLParameter(e,"fera_test",0),-1!==e.indexOf("fera_admin")?-1!==(e=Fera.Util.updateURLParameter(e,"fera_admin",0)).indexOf("admin_mode")&&(e=Fera.Util.updateURLParameter(e,"admin_mode",null)):e=Fera.Util.updateURLParameter(e,"fera_admin",0),window.location=e}})},$=function(){var e;o("#feraAdminPanelContainer").remove(),e=a.testMode?'<label class="fera-toggle-switch"><input type="checkbox" checked id="feraAdminPanel--toggleTestMode"><span class="fera-slider round"></span></label>':'<label class="fera-toggle-switch"><input type="checkbox" id="feraAdminPanel--toggleTestMode"><span class="fera-slider round"></span></label>';var t='<div><div class="fera-button-wrapper" id="feraAdminButton"><input class="fera-hidden-trigger" id="feraAdminPanelToggle" type="checkbox"><div class="fera-circle"><label class="fera-circle-label" for="feraAdminPanelToggle"><img src="'+a.api.baseCdnPath+'/img/branding/logo_icon.png" alt="Fera A.I. Admin Icon" /><div class="fera-button-label">Admin</div></label></div></div></div>',i='<div id="feraAdminPanelContainer"><div id="feraAdminPanel" class="fera-admin-panel"><div class="fera-admin-panel-header"><div class=fera-admin-panel-header-side></div><div class="fera-admin-panel-header-inner">Fera Admin Panel</div><div class="fera-admin-panel-header-side"><a href="#" id="feraAdminPanel--hide">Hide</a></div></div><div class="fera-admin-note"><strong>NOTE:</strong> Your customers will <b>not</b> see this panel or any admin buttons.</div><div class="fera-admin-option" id="feraToggleTestModeSection"><div>Test Mode<span class="fera-admin-panel-help" id="feraAdminPanel--testModeHelp">(?)</span> :</div>'+e+'</div><div class="fera-admin-option" id="feraNumContainersSection"><div>Fera Containers:<span class="fera-admin-panel-help" id="feraAdminPanel--numContainersHelp">(?)</span>:</div><span class="fera-admin-option-value" id="feraAdminPanel--numContainersValue">n/a</span></div><div class="fera-admin-option" id="feraTimeOnCurrentPageSection"><div>Time on Page<span class="fera-admin-panel-help" id="feraAdminPanel--timeOnCurrentPageHelp">(?)</span>:</div><span class="fera-admin-option-value" id="feraAdminPanel--timeOnCurrentPageValue">n/a</span></div><div class="fera-admin-option" id="feraInactiveTimeOnCurrentPageSection"><div>Inactive Time on Page<span class="fera-admin-panel-help" id="feraAdminPanel--inactiveTimeOnCurrentPageHelp">(?)</span>:</div><span class="fera-admin-option-value" id="feraAdminPanel--inactiveTimeOnCurrentPageValue">n/a</span></div><div class="fera-admin-option" id="feraSessionTimeSection"><div>Time On Site<span class="fera-admin-panel-help" id="feraAdminPanel--sessionTimeHelp">(?)</span>:</div><span class="fera-admin-option-value" id="feraAdminPanel--sessionTimeValue">n/a</span></div><div class="fera-admin-option" id="feraTimeSinceFirstSeenSection"><div>Time Since First Seen<span class="fera-admin-panel-help" id="feraAdminPanel--timeSinceFirstSeenHelp">(?)</span>:</div><span class="fera-admin-option-value" id="feraAdminPanel--timeSinceFirstSeenValue">n/a</span></div><div class="fera-admin-option" id="feraResetUserTimersSection"><div>Reset Time<span class="fera-admin-panel-help" id="feraAdminPanel--resetUserTimersHelp">(?)</span>:</div><div class="fera-reset-button" id="feraAdminPanel--resetUserTimers">Reset</div></div><div class="fera-admin-option" id="feraResetTimersSection"><div>Reset Cart Timers<span class="fera-admin-panel-help" id="feraAdminPanel--resetHelp">(?)</span>:</div><div class="fera-reset-button" id="feraAdminPanel--reset">Reset</div></div><div class="fera-admin-option" id="feraClearShownHistorySection"><div>Reset Social Proof Events<span class="fera-admin-panel-help" id="feraAdminPanel--clearShownHistoryHelp">(?)</span>:</div><div class="fera-reset-button" id="feraAdminPanel--clearShownHistory">Reset</div></div><div class="fera-admin-return"><a href="#" id="feraAdminPanel--goBackToAdmin">Go To Admin</a> <a href="#" id="feraAdminPanel--turnOff">Disable Admin Mode</a></div></div><style>'+H()+"</style>"+t+"</div>";o("body").append(i),n.$panel=o("#feraAdminPanel"),n.$panel.hide(),n.$toggleBtn=o("#feraAdminButton"),a.adminMode||n.$toggleBtn.hide()},H=function(){return'@keyframes radial-pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.5)}to{box-shadow:0 0 0 30px transparent}}.fera-circle img,fera-button{-webkit-user-select:none;-ms-user-select:none}.fera-admin-panel{color:#1c1c1c;width:40%;min-width:450px;border-radius:0;position:fixed;z-index:999;font-size:12px;font-family:Helvetica,Arial,sans-serif!important}.fera-admin-panel-header-inner{margin:auto;font-size:18px;text-align:center;padding:5px 10px}.fera-admin-panel-header-side{top:0;bottom:0;padding:10px;font-weight:300;flex-shrink:0}.fera-admin-panel a{font-size:14px}.fera-admin-panel-logo{vertical-align:middle;width:18px;height:38px}.fera-admin-option{height:28px!important;margin:auto auto 12px;display:flex;flex-wrap:no-wrap;justify-content:space-between;font-size:14px;text-align:center}.fera-admin-option-value{flex-wrap:nowrap;font-weight:200;padding:2px 4px;margin-left:7px;border-bottom: 1px solid #c3c3c3;color:#404040;}.fera-admin-return{display:table;padding-top: 12px;width: 100%;}.fera-admin-return > a { display: table-cell !important;} .fera-admin-return > a:last-child {text-align: right !important;}.fera-admin-note{text-align:center;font-style:italic;font-weight:400;padding:10px; border: 1px solid #efefef;}@media (max-width:401px){.fera-admin-panel{display:none!important}}.fera-admin-panel-help{flex-wrap:nowrap;vertical-align:super;font-size:8px;margin-left:2px;text-decoration:none;cursor:pointer}.fera-admin-panel-help:hover{opacity:.7}.fera-toggle-switch{position:relative;display:inline-block;width:60px;height:28px}.fera-slider,.fera-slider:before{position:absolute;background-color:#fff;-webkit-transition:.4s;-ms-transition:.4s;transition:.4s}.fera-toggle-switch input{display:none}.fera-slider{cursor:pointer;top:0;right:0;box-shadow:0 1px 3px #969696 inset;left:0;bottom:0}.fera-slider:before{box-shadow:0 1px 3px #969696;content:"";height:24px;width:24px;left:2px;bottom:2px}.fera-reset-button{cursor:pointer;display:inline-block!important}.fera-button-wrapper,.fera-circle,.fera-circle-label{height:60px;width:60px}input:checked+.fera-slider{background-color:#00e640}input:focus+.fera-slider{box-shadow:0 1px 1px #969696}input:checked+.fera-slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(32px);transform:translateX(32px)}.fera-slider.round{border-radius:34px}.fera-slider.round:before{border-radius:50%}fera-button{user-select:none;border:0;outline:0}.fera-button-wrapper{z-index:100;position:fixed;bottom:100px;left:20px;top: initial !important;}.fera-circle{position:relative;padding:0;margin:0 auto;border-radius:50%;animation:radial-pulse 1.5s 1;transition:.2s;text-align:center;background-color:rgba(33,43,54,0.9);box-shadow:0 2px 2px 0 rgba(0,0,0,.2);}.fera-circle:active{-webkit-transform:scale(.9);-ms-transform:scale (.9);transform:scale(.9);box-shadow:0 2px 15px 0 rgba(0,0,0,.3)}.fera-circle:hover{cursor:pointer;background-color:#ff492a;box-shadow:0 8px 15px 0 rgba(0,0,0,.3)}.fera-hidden-trigger:checked~.fera-circle .fera-button-label{opacity: 0;}.fera-circle img{user-select:none;position:absolute;top:50%;left:50%;margin-left: -20px;margin-top: -16px; width: 40px;transition: .5s;filter: brightness(0%) invert(100%);}.fera-hidden-trigger{display:none!important}.fera-hidden-trigger:checked~.fera-circle img { filter: none; }.fera-button-label{position:absolute;left:8px;top:22px;font-weight:700;font-size:13px}.fera-admin-panel{box-shadow:1px -1px 4px 1px rgba(0,0,0,.2);left:80px;bottom:156px;top:inherit;background-color:#fff;padding:32px 54px;max-width:550px}.fera-admin-panel-header{display:table;width:100%}.fera-admin-panel a{color:#5b5bff!important;text-transform:uppercase;text-decoration:none!important;font-weight:400!important}.fera-button-label{text-transform:uppercase;text-shadow:-1px 0 #fff,0 1px #fff,1px 0 #fff,0 -1px #fff,-1px 0 #fff,0 1px #fff,1px 0 #fff,0 -1px #fff,-1px 0 #fff,0 1px #fff,1px 0 #fff,0 -1px #fff;color:#000}.fera-hidden-trigger:checked~.fera-circle{cursor:pointer;box-shadow:1px 4px 4px 1px rgba(0,0,0,.2);background-color:#fff;-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.fera-admin-panel a:hover{text-decoration:underline!important}.fera-reset-button{border-radius:1px;box-shadow:0 1px 2px #969696!important;padding:3px 18px;line-height:unset!important;text-transform:uppercase;background-color:#5b5bff!important;color:#fff}.fera-admin-note{border-top:none;border-bottom:none;background-color:#f9f9e7;font-size:12px;margin-bottom:12px}.fera-admin-panel-header-side{text-align:right;margin:0;vertical-align:middle;display:table-cell;width:50px}.fera-admin-option{width:100%}.fera-admin-panel-header-side:first-child{text-align:left}.fera-admin-panel-header-inner{vertical-align:middle;font-weight:400;display:table-cell} @media(max-width: 500px){ #feraAdminPanelContainer, #feraPreviewModeIndicator { display: none; }'};l()};var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},_createClass=function(){function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}}();Fera.AdminPreviewStyler=function(){function t(e){_classCallCheck(this,t),this.previewer=e}return _createClass(t,[{key:"unhighlightPreviewSelectors",value:function e(){this._findElement({selector:".fera-highlightingSelector, .fera-flashingSelector",success:function t(e){e.data("highlighted",!1),e.data("flashing",!1),e.css("outline",""),e.css("outline-offset",""),e.removeClass("fera-highlightingSelector"),e.removeClass("fera-flashingSelector")}})}},{key:"unhighlightPreviewSelector",value:function i(e){this._findElement({selector:e,success:function t(e){e.data("highlighted")&&(e.data("highlighted",!1),e.removeClass("fera-highlightingSelector")),e.data("flashing")&&(e.stop(),e.data("flashing",!1),e.removeClass("fera-flashingSelector")),e.css("outline",""),e.css("outline-offset","")}})}},{key:"highlightPreviewSelector",value:function a(e){this._findElement({selector:e,success:function t(e){e.data("highlighted")||(e.data("highlighted",!0),e.css("outline","3px solid rgba(93, 156, 236, 0.6)"),e.css("outline-offset","-1px"),e.addClass("fera-highlightingSelector"))}})}},{key:"flashPreviewSelector",value:function n(e){this._findElement({selector:e,success:function t(e){e.data("highlighted")||e.data("flashing")||(e.data("flashing",!0),e.addClass("fera-flashingSelector"),e.css("outline","3px solid rgba(93, 156, 236, 0.6)"),e.css("outline-offset","-1px"),e.css("outline-color","rgba(93, 156, 236, 0.6)").animate({"outline-color":"rgba(255, 255, 255, 0)"},1e3,"swing",function(){e.css("outline",""),e.css("outline-offset",""),e.removeClass("fera-flashingSelector"),e.data("flashing",!1)}))}})}},{key:"fetchStyle",value:function r(e,t,i){this._findElement({selector:e.replace("&gt;",">"),success:function a(e){i(e.css(t))},fail:function n(){Fera.logger.warn("Selectable element doesn't exist so initial value could not be detected by CurrentStyleDetector.",e,t),i(null)},addBack:!0})}},{key:"_findElement",value:function o(e){var t=this,i=this.previewer.$previewContainer.find(e.selector);e.addBack&&(i=this.previewer.$previewContainer.parent().find(e.selector)),0<i.length?e.success(i):!e.retries||e.retries<6?setTimeout(function(){return t._findElement(_extends({},e,{retries:(e.retries||0)+1}))},200):e.fail&&e.fail()}}]),t}();_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},_createClass=function(){function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}}();Fera.AdminPreviewer=function(){function n(e,t){var i=this,a=arguments.length<=1||t===undefined||t;_classCallCheck(this,n),this.containers=e.containers,this.optionsParser=e.optionsParser,this.app=e.app,this.$=Fera.Util.$(),this.$previewContainer=this.$(),this._initCss(),a&&this._ensureCartPreviewWorksHasProducts(),this.styler=new Fera.AdminPreviewStyler(this),this.sandboxMessenger=new Fera.AdminSandboxMessenger({parentDomain:e.api.baseAppPath,previewer:this,styler:this.styler,configured:a,app:e.app}),"complete"===document.readyState?this.sandboxMessenger.send("document.ready",{}):$(document).on("ready",function(){i.sandboxMessenger.send("document.ready",{})}),$(window).on("beforeunload",function(){i.sandboxMessenger.send("window.unload",{})}),this.active=!0}return _createClass(n,[{key:"selectLocation",value:function a(e,t){if(this.elementSelector)this.elementSelector.resume(e,t);else{var i={elementHeight:(this._testHeight()||30)+"px",chooseLocation:e,closeAfter:!1,completedCallback:t};this.elementSelector=new Fera.AdminElementSelector(i)}}},{key:"updatePreview",value:function t(e){var i=this;this.lastPreviewUpdate=_extends({},this.lastPreviewUpdate||{},e,{isPreview:!0,cacheable:!1}),this.$previewCss.text(this.lastPreviewUpdate.css),"product_list_counter"===this.lastPreviewUpdate.type?function(){i.$previewContainer=i.$();var t=!0;i.containers.each(function(e){"product_list_counter"===e.type&&(e.updateContent({settings:i.lastPreviewUpdate.settings,campaign_id:i.lastPreviewUpdate.campaign_id,persistent_content:i.lastPreviewUpdate.html,isPreview:!0}),i.$previewContainer=i.$previewContainer.add(e.$el),t&&(i._highlightPreview(e.$el,{scroll:".banana-globalBottom-container"!==i.lastPreviewUpdate.settings.integration_selector}),t=!1))})}():this.containers.globalBottom?this.containers.globalBottom.updateContent({abstract_blocks:[this.lastPreviewUpdate]},function(){i.$previewContainer=i.containers.getContainerById(i.lastPreviewUpdate.campaign_id).$el,i.$previewContainer&&0!==i.$previewContainer.length&&i._highlightPreview(i.$previewContainer,{scroll:".banana-globalBottom-container"!==i.lastPreviewUpdate.settings.integration_selector})}):(this.containers.locateNewContainers(),setTimeout(function(){return i.updatePreview({})},500))}},{key:"highlight",value:function i(){var e=this,t=this._lastHighlighted$el||this.$previewContainer;return!!t&&(!(t.length<1)&&void Fera.Util.throttle(function(){e._highlightPreview(t,{scroll:!0,force:!0})},2e3)())}},{key:"_initCss",value:function e(){this.$("body").append("<style id='feraAdminPreviewCss'></style>"),this.$previewCss=this.$("#feraAdminPreviewCss"),this.$previewerCss=this.$('<style id="feraAdminPreviewerCss">'+this._previewerCss()+"</style>"),this.$("body").append(this.$previewerCss)}},{key:"_resetHighlight",value:function r(e){this._allowHighlights=!0,e.data("fera-highlighted-container",!1)}},{key:"_highlightPreview",value:function o(e,t){var i=this,a=arguments.length<=1||t===undefined?{}:t;if((a=a||{}).force&&this._resetHighlight(e),!1!==this._allowHighlights){if(this._lastHighlighted$el=e,a.scroll)return Fera.Util.scrollToElement(e,{duration:200,callback:function n(){return i._highlightPreview(e,{scroll:!1})}});this._showLightBox(e),setTimeout(function(){i._allowHighlights=!1},300)}}},{key:"_showLightBox",value:function s(e){if(!e.data("fera-highlighted-container")){var t=e.parents("a"),i=e.parents("body")
;i.addClass("fera-highlight-container-body"),t.addClass("fera-highlight-container-container"),e.addClass("fera-highlight-container"),setTimeout(function(){e.removeClass("fera-highlight-container"),t.removeClass("fera-highlight-container-container"),i.removeClass("fera-highlight-container-body")},2e3),e.data("fera-highlighted-container",!0)}}},{key:"_scrollToPreview",value:function l(e){if(".banana-globalBottom-container"!==e){var t=this.$(e);t.length<1||this._highlightPreview(t)}}},{key:"_testHeight",value:function d(){if(this.elementHeight||!this.lastPreviewUpdate)return this.elementHeight;var e=this.$(this.lastPreviewUpdate.html);return e.css("visibility","hidden"),this.$("body").append(e),this.elementHeight=e.height(),e.remove(),this.elementHeight}},{key:"_ensureCartPreviewWorksHasProducts",value:function c(){if((!window.performance||window.performance.navigation.type!=window.performance.navigation.TYPE_BACK_FORWARD)&&(!this.optionsParser.sandboxMode||!this.optionsParser.sandboxError))if(this.optionsParser.hasUrlFlag("ensure_loaded_cart")){var e=this.optionsParser.urlParams.sample_variant_id,t=this.optionsParser.urlParams.sample_product_id;e&&t?this._addProductToCartIfEmpty(t,{variant_id:e}):Fera.logger.error("Expected sample variant and product in the params but didn't get one so couldn't ensure that the cart was loaded. Please contact the fera.ai support team if you see this message.",opts.optionsParser.urlParams)}else this._goToCheckoutOnFlag()}},{key:"_addProductToCartIfEmpty",value:function f(e,t){this.app.cart.addProductIfEmpty(e,t,{afterAdd:function i(){var e=window.location.toString();setTimeout(function(){window.location=Fera.Util.updateURLParameter(e,"ensure_loaded_cart","0")},1e3)}})}},{key:"_previewerCss",value:function p(){return"@keyframes feraHighlightPulse {    0% { box-shadow: none; }    20% { box-shadow: 0 0 0 10000000px rgba(0, 0, 0, 0.6); }    80% { box-shadow: 0 0 0 10000000px rgba(0, 0, 0, 0.6); }    100% { box-shadow: none; }}.fera-highlight-container {    z-index: 99999;    position: relative;    animation-name: feraHighlightPulse;    animation-duration: 2s;    animation-iteration-count: 1;    animation-timing-function: linear;}a.fera-highlight-container-container {    overflow: visible;    z-index: 1;}body.fera-highlight-container-body * {    transform: none !important;    -webkit-transform: none !important;    -ms-transform: none !important;}"}},{key:"_goToCheckoutOnFlag",value:function h(){var e=this;return!!this.optionsParser.hasUrlFlag("go_to_checkout")&&(this.$(window).on("load",function(){e.app.cart.startCheckout()}),!0)}}]),n}();_createClass=function(){function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}}();Fera.AdminSandboxMessenger=function(){function a(e){if(_classCallCheck(this,a),this.parentDomain=e.parentDomain,this.previewer=e.previewer,this.styler=e.styler,this.configured=e.configured,this.parentWindow=window.parent,this.parentWindow){var t=200,i=e.app.cookieJar.getCookie("Fera.Admin.Sandbox.LastMessage");i=i?decodeURIComponent(i):null,this.configured?(this._initIframeListener(),this._bindFocusListener(),t=e.app.cookieJar.getCookie("Fera.Admin.Sandbox.LastStatus",200),this._readyForParent({status:t,message:i})):(t=e.app.cookieJar.getCookie("Fera.Admin.Sandbox.LastStatus",500),parseInt(t)<400?this._readyForParent({status:500,message:"An unknown error occurred. Please contact support."}):this._readyForParent({status:t,message:i}))}}return _createClass(a,[{key:"_initIframeListener",value:function e(){var t=this;window.addEventListener("message",function(e){e.origin===t.parentDomain&&t._trigger(JSON.parse(e.data))})}},{key:"_bindFocusListener",value:function t(){var e=this;window.addEventListener("focus",function(){e.send("focused")},!0)}},{key:"_readyForParent",value:function i(e){var t=arguments.length<=0||e===undefined?{}:e;this.send("ready",$.extend({},{href:window.location.href,status:200},t||{}))}},{key:"send",value:function n(e,t){this.parentWindow&&this.parentWindow.postMessage(JSON.stringify({methodName:e,params:t}),this.parentDomain)}},{key:"_trigger",value:function r(t){var i=this;"selectLocation"===t.methodName?this.previewer.selectLocation(t.params,function(e){window.stop(),i.send("window.stop",{}),i.send("locationSelected",e)}):"updatePreview"===t.methodName?this.previewer.updatePreview(t.params):"fetchStyle"===t.methodName?this.styler.fetchStyle(t.params.selector,t.params.attribute,function(e){i.send("styleFetched",{callbackId:t.params.callbackId,value:e})}):"unhighlightPreviewSelectors"===t.methodName?this.styler.unhighlightPreviewSelectors():"unhighlightPreviewSelector"===t.methodName?this.styler.unhighlightPreviewSelector(t.params):"highlightPreviewSelector"===t.methodName?this.styler.highlightPreviewSelector(t.params):"flashPreviewSelector"===t.methodName?this.styler.flashPreviewSelector(t.params):"highlight"===t.methodName?this.previewer.highlight(t.params):"window.stop"===t.methodName&&(window.stop(),this.send("window.stop",{}))}}]),a}();