this["TT"] = this["TT"] || {};

this["TT"]["tpl/form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form action=\"#\" id=\"tt-form\">\n	<div>\n		<label for=\"title\">Title</label>\n		<input type=\"text\" name=\"title\">\n	</div>\n	<div>\n		<label for=\"url\">URL</label>\n		<input type=\"text\" name=\"url\">\n	</div>\n	<input type=\"hidden\" name=\"video_time\" id=\"video_time\">\n	<input type=\"hidden\" name=\"video_id\" id=\"video_id\">\n	<button type=\"submit\"></button>\n</form>";
},"useData":true});