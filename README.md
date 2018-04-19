# cryptocurrency-udf-web

## What is this ?
> Sample web project for custom tradingview chart

## Installation
### Setup
1. clone this
2. copy tradingview chart_library into static folder (charting_library, datafeeds)
### More setup
#### about Chart
1. set udf server url. default code heading to "http://localhost:3000/chart" (#pages/chart/history.js)
    > You can find sample udf server source here. (https://github.com/UnlimitTail/cryptocurrency-udf-server)
## Start
1. npm dev -- -p [port]
    > ie. npm dev -- -p 8080

## Test
1. chart
    > http://localhost:8080/chart/history?symbol=UPBIT:BTC-KRW

## Thanks to
* next.js : It's awesome SSR module. (https://github.com/zeit/next.js)
* tradingview chart_library : Most greateast html5 chart library ever! (https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/)
