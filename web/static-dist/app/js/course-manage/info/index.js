webpackJsonp(["app/js/course-manage/info/index"],[function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),d=t("5fdcf1aea784583ca083"),o=r(d),u=t("33a776824bec073629e5"),s=r(u),l=t("26fa658edb0135ccf5db"),c=r(l),p=t("ae88c18278ce1387fd20"),m=r(p),y=function(){function e(){n(this,e),this.init()}return i(e,[{key:"init",value:function(){$("#maxStudentNum-field").length>0&&$.get($("#maxStudentNum-field").data("liveCapacityUrl")).done(function(e){$("#maxStudentNum-field").data("liveCapacity",e.capacity)}),this.initCkeidtor(),this.initValidator(),this.checkBoxChange(),this.initDatePicker("#expiryStartDate"),this.initDatePicker("#expiryEndDate"),this.renderMultiGroupComponent("course-goals","goals"),this.renderMultiGroupComponent("intended-students","audiences")}},{key:"initCkeidtor",value:function(){CKEDITOR.replace("summary",{allowedContent:!0,toolbar:"Detail",filebrowserImageUploadUrl:$("#summary").data("imageUploadUrl")})}},{key:"renderMultiGroupComponent",value:function(e,a){var t=$("#"+e).data("init-value");o.default.render(s.default.createElement(c.default,{dataSource:t,outputDataElement:a}),document.getElementById(e))}},{key:"initValidator",value:function(){var e=this,a=$("#course-info-form"),t=a.validate({currentDom:"#course-submit",groups:{date:"expiryStartDate expiryEndDate"},rules:{title:{maxlength:100,required:{depends:function(){return $(this).val($.trim($(this).val())),!0}}},maxStudentNum:{required:!0,live_capacity:!0,positive_integer:!0},expiryDays:{required:function(){return"date"!=$('input[name="expiryMode"]:checked').val()},digits:!0,max_year:!0},expiryStartDate:{required:function(){return"date"==$('input[name="expiryMode"]:checked').val()},date:!0,before_date:"#expiryEndDate"},expiryEndDate:{required:function(){return"date"==$('input[name="expiryMode"]:checked').val()},date:!0,after_date:"#expiryStartDate"}},messages:{title:{require:Translator.trans("course.manage.title_required_error_hint")},maxStudentNum:{required:Translator.trans("course.manage.max_student_num_error_hint")},expiryDays:{required:Translator.trans("course.manage.deadline_end_date_error_hint")},expiryStartDate:{required:Translator.trans("course.manage.expiry_start_date_error_hint"),before:Translator.trans("course.manage.expiry_days_error_hint")},expiryEndDate:{required:Translator.trans("course.manage.expiry_end_date_error_hint"),after:Translator.trans("course.manage.expiry_start_date_error_hint")}}});$.validator.addMethod("before",function(e,a,t){return"date"!==$('input[name="expiryMode"]:checked').val()||(!e||$(t).val()>e)},Translator.trans("course.manage.expiry_end_date_error_hint")),$.validator.addMethod("after",function(e,a,t){return"date"!==$('input[name="expiryMode"]:checked').val()||(!e||$(t).val()<e)},Translator.trans("course.manage.expiry_start_date_error_hint")),$("#course-submit").click(function(){t.form()&&(e.publishAddMessage(),a.submit())})}},{key:"publishAddMessage",value:function(){m.default.publish({channel:"courseInfoMultiInput",topic:"addMultiInput"})}},{key:"initDatePicker",value:function(e){var a=$(e);a.datetimepicker({format:"yyyy-mm-dd",language:"zh",minView:2,autoclose:!0,endDate:new Date(Date.now()+31536e7)}),a.datetimepicker("setStartDate",new Date)}},{key:"checkBoxChange",value:function(){$('input[name="expiryMode"]').on("change",function(e){"date"==$('input[name="expiryMode"]:checked').val()?($("#expiry-days").removeClass("hidden").addClass("hidden"),$("#expiry-date").removeClass("hidden")):($("#expiry-date").removeClass("hidden").addClass("hidden"),$("#expiry-days").removeClass("hidden"))})}}]),e}();new y,jQuery.validator.addMethod("max_year",function(e,a){return this.optional(a)||e<1e5},Translator.trans("course.manage.max_year_error_hint")),jQuery.validator.addMethod("live_capacity",function(e,a){var t=parseInt($(a).data("liveCapacity"));if(e>t){var r=Translator.trans("course.manage.max_capacity_hint",{capacity:t});$(a).parent().siblings(".js-course-rule").find("p").html(r)}else $(a).parent().siblings(".js-course-rule").find("p").html("");return!0})}]);