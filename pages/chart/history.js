import React from 'react'

export default (props) => {
	const symbol = props.url.query.symbol || 'UPBIT:BTC-KRW';
    let codes = `
    <head>

		<title>TradingView Charting Library demo -- Mobile (white)</title>

		<!-- Fix for iOS Safari zooming bug -->
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">

		<script type="text/javascript" src="/static/charting_library/charting_library.min.js"></script>
		<script type="text/javascript" src="/static/datafeeds/udf/dist/polyfills.js"></script>
		<script type="text/javascript" src="/static/datafeeds/udf/dist/bundle.js"></script>

		<script type="text/javascript">
			TradingView.onready(function()
			{
				var widget = new TradingView.widget({
					fullscreen: true,
					symbol: '${symbol}',
					allow_symbol_change: false,
					interval: 'D',
					container_id: "tv_chart_container",
					//	BEWARE: no trailing slash is expected in feed URL
					datafeed: new Datafeeds.UDFCompatibleDatafeed("http://localhost:3000/chart"),
					library_path: "/static/charting_library/",
					locale: "en",
					//	Regression Trend-related functionality is not implemented yet, so it's hidden for a while
					drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
					disabled_features: ["header_symbol_search", "header_settings", "header_compare", "header_undo_redo", "header_fullscreen_button", "left_toolbar", "use_localstorage_for_settings"],
					time_frames:[],
					debug: true,
				});
			})
		</script>

	</head>

	<body style="margin:0px;">
		<div id="tv_chart_container"></div>
	</body>

    `
    return (
		<div dangerouslySetInnerHTML={ {__html: codes} }>
		</div>
	  );
}