import request from 'request';
import {AllHtmlEntities as entities} from 'html-entities';
import html2jade from 'html2jade';

var url = 'http://www.bennadel.com/coldfusion/privacy-policy-generator.htm';

export default function (options, callback) {
  if (!options.company) {
    var noCompany = new Error('`company` parameter is required');
    return callback(noCompany);
  }

  if (!options.state) {
    var noState = new Error('`state` parameter is required');
    return callback(noState);
  }

  options.markup = options.markup || 'jade';

  request.post({
    url: url,
    form: options
  }, (error, response, body) => {
    var start = body.search(/\&lt;h2\&gt;/);
    var finish = body.search(/\<\/textarea\>/);
    body = body.substring(start, finish);
    body = entities.decode(body);
    body = body.replace(/[\t\r\n\f\v]/g, ''); // minify

    if (options.markup === 'jade') {
      return html2jade.convertHtml(body, {
        bodyless: true
      }, callback);
    }

    callback(error, body);
  });
}
