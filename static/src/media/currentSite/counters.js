(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter13674487 = new Ya.Metrika({
                id:13674487,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
            });
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54600840-1');
var OpenStatParser = {
	_params: {},
	_parsed: false,
	_decode64: function(data) {
		if (typeof window['atob'] === 'function') {
			return atob(data);
		}

		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			ac = 0,
			dec = "",
			tmp_arr = [];

		if (!data) {
			return data;
		}

		data += '';

		do {
			h1 = b64.indexOf(data.charAt(i++));
			h2 = b64.indexOf(data.charAt(i++));
			h3 = b64.indexOf(data.charAt(i++));
			h4 = b64.indexOf(data.charAt(i++));

			bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

			o1 = bits >> 16 & 0xff;
			o2 = bits >> 8 & 0xff;
			o3 = bits & 0xff;

			if (h3 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1);
			} else if (h4 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1, o2);
			} else {
				tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
			}
		} while (i < data.length);

		dec = tmp_arr.join('');

		return dec;
	},
	_parse: function() {
		var prmstr = window.location.search.substr(1);
		var prmarr = prmstr.split('&');
		this._params = {};

		for (var i = 0; i < prmarr.length; i++) {
			var tmparr = prmarr[i].split('=');
			this._params[tmparr[0]] = tmparr[1];
		}

		this._parsed = true;
	},
	hasMarker: function() {
		if (!this._parsed) {
			this._parse();
		}
		return (typeof this._params['_openstat'] !== 'undefined') ? true : false;
	},
	buildCampaignParams: function() {
		if (!this.hasMarker()) {
			return false;
		}
		var openstat = this._decode64(this._params['_openstat']);
		var statarr = openstat.split(';');
		utmcampaign = statarr[3];
		utmsource = statarr[0];
		utmcontent = statarr[2];
	}
}
if (OpenStatParser.hasMarker()) {
	var campaignParams = OpenStatParser.buildCampaignParams();
	if (campaignParams !== false) {
		ga('set', {'campaignName': utmcampaign, 'campaignSource': utmsource, 'campaignMedium': 'cpc', 'campaignContent': utmcontent});
	}
}
ga('send', 'pageview');

(function(w, p) {
	var a, s;
	(w[p] = w[p] || []).push({
		counter_id: 430294216
	});
	a = document.createElement('script'); a.type = 'text/javascript'; a.async = true;
	a.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'autocontext.begun.ru/analytics.js';
	s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s);
})(window, 'begun_analytics_params');

var rrPartnerId = "581183a29872e58c24c7da0f";
var rrApi = {};
var rrApiOnReady = rrApiOnReady || [];
rrApi.addToBasket = rrApi.order = rrApi.categoryView = rrApi.view =
rrApi.recomMouseDown = rrApi.recomAddToCart = function() {};
(function(d) {
var ref = d.getElementsByTagName('script')[0];
var apiJs, apiJsId = 'rrApi-jssdk';
if (d.getElementById(apiJsId)) return;
apiJs = d.createElement('script');
apiJs.id = apiJsId;
apiJs.async = true;
apiJs.src = "//cdn.retailrocket.ru/content/javascript/tracking.js";
ref.parentNode.insertBefore(apiJs, ref);
}(document));
