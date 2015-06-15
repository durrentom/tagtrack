this["TT"] = this["TT"] || {};

this["TT"]["tpl/base.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"tt-wrapper\" class=\"in\">\n	<button id=\"tagtrackbtn\">New tag at <span id='tagtime'>0:00</span></button>\n\n	<ul id=\"tt-list\"></ul>\n</div>";
},"useData":true});

this["TT"]["tpl/form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form action=\"#\" id=\"tt-form\">\n	<h5>New tag at "
    + alias3(((helper = (helper = helpers.video_time_readable || (depth0 != null ? depth0.video_time_readable : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"video_time_readable","hash":{},"data":data}) : helper)))
    + " </h5>\n	<div>\n		<input type=\"text\" name=\"title\" placeholder=\"Title of the track\">\n	</div>\n	<div>\n		<input type=\"text\" name=\"url\" placeholder=\"Link to the track\">\n	</div>\n	<input type=\"hidden\" name=\"video_time\" id=\"video_time\" value=\""
    + alias3(((helper = (helper = helpers.video_time || (depth0 != null ? depth0.video_time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"video_time","hash":{},"data":data}) : helper)))
    + "\">\n	<input type=\"hidden\" name=\"video_id\" id=\"video_id\" value=\""
    + alias3(((helper = (helper = helpers.video_id || (depth0 != null ? depth0.video_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"video_id","hash":{},"data":data}) : helper)))
    + "\">\n	<button type=\"submit\">Submit new tag</button>\n</form>";
},"useData":true});