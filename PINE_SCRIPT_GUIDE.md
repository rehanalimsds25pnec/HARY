# HARY Trading Indicator - Pine Script Guide

## Overview

This repository includes a Pine Script trading indicator (`trading_indicator.pine`) that can be used on TradingView to analyze price movements and generate trading signals.

## What is Pine Script?

Pine Script is a domain-specific language developed by TradingView for creating custom technical indicators and trading strategies. It's designed to be simple yet powerful for analyzing financial markets.

## Features of the HARY Trading Indicator

The indicator includes the following components:

### 1. **Moving Average (MA)**
- Calculates a Simple Moving Average based on closing prices
- Default period: 20 bars (configurable)
- Displayed as a blue line on the price chart

### 2. **Relative Strength Index (RSI)**
- Measures momentum and identifies overbought/oversold conditions
- Default period: 14 bars (configurable)
- Overbought threshold: 70 (configurable)
- Oversold threshold: 30 (configurable)

### 3. **Trading Signals**
- **Buy Signal**: Generated when price crosses above the MA and RSI is below 50
- **Sell Signal**: Generated when price crosses below the MA and RSI is above 50
- Signals are displayed as triangles on the chart (green up arrows for buy, red down arrows for sell)

### 4. **Visual Indicators**
- Background color changes when RSI reaches extreme levels:
  - Light red background when RSI is overbought (>70)
  - Light green background when RSI is oversold (<30)

### 5. **Alerts**
Four alert conditions are available:
- Buy signal detected
- Sell signal detected
- RSI overbought level reached
- RSI oversold level reached

## How to Use

1. Open [TradingView](https://www.tradingview.com/)
2. Open the Pine Editor (at the bottom of the chart)
3. Copy the contents of `trading_indicator.pine`
4. Paste into the Pine Editor
5. Click "Add to Chart"
6. Customize the input parameters as needed

## Input Parameters

You can customize the following parameters:

- **MA Length**: Period for the moving average calculation (default: 20)
- **RSI Length**: Period for the RSI calculation (default: 14)
- **Overbought Level**: RSI threshold for overbought conditions (default: 70)
- **Oversold Level**: RSI threshold for oversold conditions (default: 30)

## Trading Strategy

This indicator combines two popular technical analysis tools:

1. **Trend Following**: The Moving Average helps identify the overall trend direction
2. **Momentum**: The RSI helps identify when momentum is shifting

### Suggested Usage:
- Use buy signals as potential entry points in an uptrend
- Use sell signals as potential exit points or short entry points in a downtrend
- Wait for confirmation from other indicators or price action before trading
- Consider the overall market context and risk management

## Disclaimer

This indicator is provided for educational purposes only. Trading involves substantial risk of loss. Always conduct your own research and consider consulting with a financial advisor before making trading decisions.

## Version

Pine Script Version: 5

## License

This Pine Script code is part of the HARY project and follows the same license terms.
