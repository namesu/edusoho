<<<<<<< HEAD
webpackJsonp(["app/js/courseset-manage/index"],{"4e68e437f5b716377a9d":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TaskListHeaderFixed=e.updateTaskNum=e.TabChange=e.showSettings=e.unpublishTask=e.publishTask=e.deleteTask=e.publishCourse=e.deleteCourse=e.closeCourse=e.taskSortable=e.sortablelist=void 0;var i=s("b334fd7e4c5a19234db2"),a=n(i),o=s("8f840897d9471c8c1fbd"),r=n(o),l=e.sortablelist=function(t){var e=$(t),s=e.sortable("serialize").get();$.post(e.data("sortUrl"),{ids:s},function(t){var s=0,n=0,i=0;e.find(".task-manage-item").each(function(){var t=$(this);t.hasClass("js-task-manage-item")?(s++,t.find(".number").text(s)):t.hasClass("task-manage-unit")?(i++,t.find(".number").text(i)):t.hasClass("task-manage-chapter")&&(n++,i=0,t.find(".number").text(n))}),e.trigger("finished")})};e.taskSortable=function(t){$(t).length&&(0,r.default)({element:t,ajax:!1},function(e){l(t)})},e.closeCourse=function(){$("body").on("click",".js-close-course",function(t){var e=$(t.currentTarget);confirm(Translator.trans("是否确定关闭该教学计划？"))&&$.post(e.data("check-url"),function(t){t.warn&&!confirm(Translator.trans(t.message))||$.post(e.data("url"),function(t){t.success?((0,a.default)("success","关闭成功"),location.reload()):(0,a.default)("danger","关闭失败："+t.message)})})})},e.deleteCourse=function(){$("body").on("click",".js-delete-course",function(t){confirm(Translator.trans("是否确定删除该教学计划？"))&&$.post($(t.currentTarget).data("url"),function(t){t.success?((0,a.default)("success","删除成功"),location.reload()):(0,a.default)("danger","删除失败："+t.message)})})},e.publishCourse=function(){$("body").on("click",".js-publish-course",function(t){confirm(Translator.trans("是否确定发布该教学计划？"))&&$.post($(t.target).data("url"),function(t){t.success?((0,a.default)("success","发布成功"),location.reload()):(0,a.default)("danger","发布失败："+t.message,5e3)})})},e.deleteTask=function(){$("body").on("click",".delete-item",function(t){if("task"==$(t.currentTarget).data("type")){if(!confirm(Translator.trans("是否确定删除该任务吗？")))return}else if("chapter"==$(t.currentTarget).data("type")&&!confirm(Translator.trans("是否确定删除该章节吗？")))return;$.post($(t.currentTarget).data("url"),function(e){e.success?((0,a.default)("success","删除成功"),$(t.target).parents(".task-manage-item").remove(),l("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden"),document.location.reload()):(0,a.default)("danger","删除失败："+e.message)})})},e.publishTask=function(){$("body").on("click",".publish-item",function(t){$.post($(t.target).data("url"),function(e){if(e.success){var s=$(t.target).closest(".task-manage-item");(0,a.default)("success","发布成功"),$(s).find(".publish-item").addClass("hidden"),$(s).find(".delete-item").addClass("hidden"),$(s).find(".unpublish-item").removeClass("hidden"),$(s).find(".publish-status").addClass("hidden")}else(0,a.default)("danger","发布失败："+e.message)})})},e.unpublishTask=function(){$("body").on("click",".unpublish-item",function(t){$.post($(t.target).data("url"),function(e){if(e.success){var s=$(t.target).closest(".task-manage-item");(0,a.default)("success","取消发布成功"),$(s).find(".publish-item").removeClass("hidden"),$(s).find(".delete-item").removeClass("hidden"),$(s).find(".unpublish-item").addClass("hidden"),$(s).find(".publish-status").removeClass("hidden")}else(0,a.default)("danger","取消发布失败："+e.message)})})},e.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(t){var e=$(t.currentTarget),s=e.closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},e.TabChange=function(){$('[data-role="tab"]').click(function(t){var e=$(this);$(e.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},e.updateTaskNum=function(t){var e=$(t);e.on("finished",function(){$("#task-num").text($(t).find('i[data-role="task"]').length)})},e.TaskListHeaderFixed=function(){var t=$(".js-task-list-header");if(t.length){var e=t.offset().top;$(window).scroll(function(s){$(window).scrollTop()>=e?t.addClass("fixed"):t.removeClass("fixed")})}}},0:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=s("4e68e437f5b716377a9d"),a=s("423d5c93d4f10f876e3b"),o=n(a);(0,i.publishCourse)(),setTimeout(function(){var t=new o.default;t.introType()},500)},"423d5c93d4f10f876e3b":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}();s("3f693a05af692150f5a7");var o=s("d684b1eba6c0b776a43a"),r=n(o),l="COURSE_BASE_INTRO",u="COURSE_TASK_INTRO",c="COURSE_TASK_DETAIL_INTRO",d="COURSE_LIST_INTRO",f="COURSE_LIST_INTRO_COOKIE",p=function(){function t(){var e=this;i(this,t),this.intro=null,this.customClass="es-intro-help multistep",$("body").on("click",".js-skip",function(t){e.intro.exit()})}return a(t,[{key:"introType",value:function(){return this.isTaskCreatePage()?void this.initTaskCreatePageIntro():this.isCourseListPage()?void this.initCourseListPageIntro():void this.initNotTaskCreatePageIntro()}},{key:"isCourseListPage",value:function(){return!!$("#courses-list-table").length}},{key:"isTaskCreatePage",value:function(){return!!$("#step-3").length}},{key:"isInitTaskDetailIntro",value:function(){return $(".js-task-manage-item").attr("into-step-id","step-5"),!!$(".js-settings-list").length}},{key:"introStart",value:function(t){var e=this,s='<i class="es-icon es-icon-close01"></i>';this.intro=introJs(),t.length<2?(s="我知道了",this.customClass="es-intro-help"):this.customClass="es-intro-help multistep",this.intro.setOptions({steps:t,skipLabel:s,nextLabel:"继续了解",prevLabel:"上一步",doneLabel:s,showBullets:!1,tooltipPosition:"auto",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:this.customClass}),this.intro.start().onexit(function(){}).onchange(function(){e.intro._currentStep==e.intro._introItems.length-1?$(".introjs-nextbutton").before('<a class="introjs-button  done-button js-skip">我知道了<a/>'):$(".js-skip").remove()})}},{key:"initTaskCreatePageIntro",value:function(){$(".js-task-manage-item:first .js-item-content").trigger("click"),store.get(l)||store.get(u)?store.get(u)||(store.set(u,!0),this.introStart(this.initTaskSteps())):(store.set(l,!0),store.set(u,!0),this.introStart(this.initAllSteps()))}},{key:"initTaskDetailIntro",value:function(t){store.get(c)||(store.set(c,!0),this.introStart(this.initTaskDetailSteps(t)))}},{key:"initNotTaskCreatePageIntro",value:function(){store.get(l)||(store.set(l,!0),this.introStart(this.initNotTaskPageSteps()))}},{key:"isSetCourseListCookies",value:function(){store.get(d)||r.default.set(f,!0)}},{key:"initCourseListPageIntro",value:function(){var t=this,e=$("#courses-list-table").find("tbody tr").length;2===e&&!store.get(d)&&r.default.get(f)&&(r.default.remove(f),new Promise(function(t,e){setTimeout(function(){var e=$(".js-sidenav-course-menu");return e.length?void $(".js-sidenav-course-menu").slideUp(function(){t()}):void t()},100)}).then(function(){setTimeout(function(){t.initCourseListIntro(".js-sidenav")},100)}))}},{key:"initCourseListIntro",value:function(t){store.get(d)||(store.set(d,!0),this.introStart(this.initCourseListSteps(t)))}},{key:"initAllSteps",value:function(){var t=[{intro:'<p class="title">功能升级</p>\n        课程管理功能现已全新升级。'},{element:"#step-1",intro:'<p class="title">计划任务</p>\n        教学内容的编辑、管理请点击左侧“计划任务”的菜单项进入。'},{element:"#step-2",intro:'<p class="title">营销设置</p>\n        在“营销设置”中您可以通过设置决定课程如何销售、如何加入、如何学习。'},{element:"#step-3",intro:'<p class="title">添加任务</p>\n        您可以在这里选择各种不同的教学手段，然后上传文件/设置内容/设置学习完成条件。'}];return this.isInitTaskDetailIntro()&&(t.push({element:'[into-step-id="step-5"]',intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。'}),store.get(c)||store.set(c,!0)),t}},{key:"initNotTaskPageSteps",value:function(){return[{intro:'<p class="title">功能升级</p>\n        课程管理功能现已全新升级。'},{element:"#step-1",intro:'<p class="title">计划任务</p>\n        教学内容的编辑、管理请点击左侧“计划任务”的菜单项进入。'},{element:"#step-2",intro:'<p class="title">营销设置</p>\n        在“营销设置”中您可以通过设置决定课程如何销售、如何加入、如何学习。'}]}},{key:"initTaskSteps",value:function(){var t=[{element:"#step-3",intro:'<p class="title">添加任务</p>\n        您可以在这里选择各种不同的教学手段，然后上传文件/设置内容/设置学习完成条件。'}];return this.isInitTaskDetailIntro()&&(t.push({element:"#step-5",intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。',position:"bottom"}),store.get(c)||store.set(c,!0)),t}},{key:"initTaskDetailSteps",value:function(t){return[{element:t,intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。',position:"bottom"}]}},{key:"initCourseListSteps",value:function(t){return[{element:t,intro:'\n          <p class="title">多个教学计划</p>\n          恭喜你创建了多个教学计划！左侧的功能菜单会有所简化，\n          只会显示课程公共的相关设置。'}]}},{key:"initResetStep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{element:".js-intro-btn-group",intro:'<div class="btn-content"><p><a class=\'btn btn-success js-reset-intro '+t+"'>查看引导</a></p>\n        <a class='btn btn-info'>完整教程</a><div>",position:"top"}]}}]),t}();e.default=p}});
=======
webpackJsonp(["app/js/courseset-manage/index"],{0:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=n(!function(){var t=new Error('Cannot find module "app/js/course-manage/help"');throw t.code="MODULE_NOT_FOUND",t}()),r=n("423d5c93d4f10f876e3b"),o=s(r);(0,i.publishCourse)(),setTimeout(function(){var t=new o.default;t.introType()},500)},"423d5c93d4f10f876e3b":function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();n("d5e8fa5f17ac5fe79c78");var o=n("fe53252afd7b6c35cb73"),a=s(o),u="COURSE_BASE_INTRO",l="COURSE_TASK_INTRO",c="COURSE_TASK_DETAIL_INTRO",p="COURSE_LIST_INTRO",g="COURSE_LIST_INTRO_COOKIE",f=function(){function t(){var e=this;i(this,t),this.intro=null,this.customClass="es-intro-help multistep",$("body").on("click",".js-skip",function(t){e.intro.exit()})}return r(t,[{key:"introType",value:function(){return this.isTaskCreatePage()?void this.initTaskCreatePageIntro():this.isCourseListPage()?void this.initCourseListPageIntro():void this.initNotTaskCreatePageIntro()}},{key:"isCourseListPage",value:function(){return!!$("#courses-list-table").length}},{key:"isTaskCreatePage",value:function(){return!!$("#step-3").length}},{key:"isInitTaskDetailIntro",value:function(){return $(".js-task-manage-item").attr("into-step-id","step-5"),!!$(".js-settings-list").length}},{key:"introStart",value:function(t){var e=this,n='<i class="es-icon es-icon-close01"></i>';this.intro=introJs(),t.length<2?(n=Translator.trans("intro.confirm_hint"),this.customClass="es-intro-help"):this.customClass="es-intro-help multistep",this.intro.setOptions({steps:t,skipLabel:n,nextLabel:Translator.trans("course_set.manage.next_label"),prevLabel:Translator.trans("course_set.manage.prev_label"),doneLabel:n,showBullets:!1,tooltipPosition:"auto",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:this.customClass}),this.intro.start().onexit(function(){}).onchange(function(){e.intro._currentStep==e.intro._introItems.length-1?$(".introjs-nextbutton").before('<a class="introjs-button  done-button js-skip">'+Translator.trans("intro.confirm_hint")+"<a/>"):$(".js-skip").remove()})}},{key:"initTaskCreatePageIntro",value:function(){$(".js-task-manage-item:first .js-item-content").trigger("click"),store.get(u)||store.get(l)?store.get(l)||(store.set(l,!0),this.introStart(this.initTaskSteps())):(store.set(u,!0),store.set(l,!0),this.introStart(this.initAllSteps()))}},{key:"initTaskDetailIntro",value:function(t){store.get(c)||(store.set(c,!0),this.introStart(this.initTaskDetailSteps(t)))}},{key:"initNotTaskCreatePageIntro",value:function(){store.get(u)||(store.set(u,!0),this.introStart(this.initNotTaskPageSteps()))}},{key:"isSetCourseListCookies",value:function(){store.get(p)||a.default.set(g,!0)}},{key:"initCourseListPageIntro",value:function(){var t=this,e=$("#courses-list-table").find("tbody tr").length;2===e&&!store.get(p)&&a.default.get(g)&&(a.default.remove(g),new Promise(function(t,e){setTimeout(function(){var e=$(".js-sidenav-course-menu");return e.length?void $(".js-sidenav-course-menu").slideUp(function(){t()}):void t()},100)}).then(function(){setTimeout(function(){t.initCourseListIntro(".js-sidenav")},100)}))}},{key:"initCourseListIntro",value:function(t){store.get(p)||(store.set(p,!0),this.introStart(this.initCourseListSteps(t)))}},{key:"initAllSteps",value:function(){var t=[{intro:Translator.trans("course_set.manage.upgrade_hint")},{element:"#step-1",intro:Translator.trans("course_set.manage.upgrade_step1_hint")},{element:"#step-2",intro:Translator.trans("course_set.manage.upgrade_step2_hint")},{element:"#step-3",intro:Translator.trans("course_set.manage.upgrade_step3_hint")}];return this.isInitTaskDetailIntro()&&(t.push({element:'[into-step-id="step-5"]',intro:Translator.trans("course_set.manage.upgrade_step5_hint")}),store.get(c)||store.set(c,!0)),t}},{key:"initNotTaskPageSteps",value:function(){return[{intro:Translator.trans("course_set.manage.upgrade_hint")},{element:"#step-1",intro:Translator.trans("course_set.manage.upgrade_step1_hint")},{element:"#step-2",intro:Translator.trans("course_set.manage.upgrade_step2_hint")}]}},{key:"initTaskSteps",value:function(){var t=[{element:"#step-3",intro:Translator.trans("course_set.manage.upgrade_step3_hint")}];return this.isInitTaskDetailIntro()&&(t.push({element:"#step-5",intro:Translator.trans("course_set.manage.upgrade_step5_hint"),position:"bottom"}),store.get(c)||store.set(c,!0)),t}},{key:"initTaskDetailSteps",value:function(t){return[{element:t,intro:Translator.trans("course_set.manage.activity_link_hint"),position:"bottom"}]}},{key:"initCourseListSteps",value:function(t){return[{element:t,intro:Translator.trans("course_set.manage.hint")}]}},{key:"initResetStep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{element:".js-intro-btn-group",intro:Translator.trans("course_set.manage.all_tutorial",{introBtnClassName:t}),position:"top"}]}}]),t}();e.default=f}});
>>>>>>> develop
