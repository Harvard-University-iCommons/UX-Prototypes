define('jst/jquery/ModuleSequenceFooter', ["compiled/handlebars_helpers","i18n!jquery.module_sequence_footer"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['jquery/ModuleSequenceFooter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" role=\"button\" class=\"pull-left\" data-tooltip=\"right\" data-html-tooltip-title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.tooltip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" aria-describedby=\"msf";
  if (helper = helpers.instanceNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-previous-desc\">\n        <i class=\"icon-mini-arrow-left\"></i>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("jquery.module_sequence_footer")
  },data:data},helper ? helper.call(depth0, "previous", "Previous", options) : helperMissing.call(depth0, "t", "previous", "Previous", options)))
    + "\n        <span id=\"msf";
  if (helper = helpers.instanceNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-previous-desc\" class=\"hidden\" hidden>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.tooltipText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.next)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" role=\"button\" class=\"pull-right bordered\" data-tooltip=\"left\" data-html-tooltip-title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.next)),stack1 == null || stack1 === false ? stack1 : stack1.tooltip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" aria-describedby=\"msf";
  if (helper = helpers.instanceNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-next-desc\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("jquery.module_sequence_footer")
  },data:data},helper ? helper.call(depth0, "next", "Next", options) : helperMissing.call(depth0, "t", "next", "Next", options)))
    + "<i class=\"icon-mini-arrow-right\"></i>\n        <span id=\"msf";
  if (helper = helpers.instanceNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-next-desc\" class=\"hidden\" hidden>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.next)),stack1 == null || stack1 === false ? stack1 : stack1.tooltipText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </a>\n    ";
  return buffer;
  }

  buffer += "<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer clearfix'>\n  <div class=\"module-sequence-footer-content\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.show), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.next)),stack1 == null || stack1 === false ? stack1 : stack1.show), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['jquery/ModuleSequenceFooter'];
});
