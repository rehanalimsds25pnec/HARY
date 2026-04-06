# 5 & 9 EMA Crossover Scanner - TradingView Indicator

## Overview
A professional TradingView Pine Script indicator that tracks 5 and 9 EMA crossovers with a built-in scanner for 20 securities. Features clean, well-organized code with customizable display options.

## Features

### ✨ Core Functionality
- **Dual EMA System**: 5-period (Fast) and 9-period (Slow) Exponential Moving Averages
- **Crossover Detection**: Automatic bullish/bearish crossover identification
- **Visual Signals**: Triangular markers for buy/sell signals
- **Signal Labels**: Optional "BUY" and "SELL" text labels
- **Multi-Symbol Scanner**: Real-time monitoring of 20 securities simultaneously

### 🎛️ Customization Options

#### Display Controls
- Toggle Fast EMA line visibility
- Toggle Slow EMA line visibility
- Toggle crossover signal markers
- Toggle signal labels

#### Color Customization
- Fast EMA line color
- Slow EMA line color
- Bullish signal color
- Bearish signal color

#### Scanner Settings
- Enable/disable scanner table
- Customize all 20 monitored symbols
- Real-time crossover detection across all securities

## Installation

1. Open TradingView and navigate to the Pine Editor
2. Create a new indicator
3. Copy the entire contents of `ema_5_9_crossover_scanner.pine`
4. Click "Save" and then "Add to Chart"

## Usage

### Input Parameters

The indicator is organized into 4 main groups:

#### 1. EMA Settings
- **Fast EMA Length**: Default 5 (adjustable)
- **Slow EMA Length**: Default 9 (adjustable)

#### 2. Display Options
- **Show Fast EMA Line**: Toggle the 5 EMA visibility
- **Show Slow EMA Line**: Toggle the 9 EMA visibility
- **Show Crossover Signals**: Toggle triangle markers
- **Show Signal Labels**: Toggle BUY/SELL text labels

#### 3. Color Settings
- **Fast EMA Color**: Blue (default, customizable)
- **Slow EMA Color**: Red (default, customizable)
- **Bullish Signal Color**: Green (default, customizable)
- **Bearish Signal Color**: Red (default, customizable)

#### 4. Multi-Symbol Scanner (20 Securities)
- **Enable Scanner**: Toggle the scanner table
- **Symbol 1-20**: Configure symbols to monitor (default: major US stocks)

### Trading Signals

**Bullish Crossover (BUY Signal)**
- Occurs when Fast EMA (5) crosses above Slow EMA (9)
- Indicates potential upward momentum
- Marked with green triangle ▲ below the bar

**Bearish Crossover (SELL Signal)**
- Occurs when Fast EMA (5) crosses below Slow EMA (9)
- Indicates potential downward momentum
- Marked with red triangle ▼ above the bar

### Scanner Table

The scanner table appears in the bottom-right corner and displays:
- **Symbol**: Ticker symbol
- **Signal**: Current status (🔼 BUY, 🔽 SELL, ↑ Bullish, ↓ Bearish)
- **Fast EMA**: Current 5 EMA value
- **Slow EMA**: Current 9 EMA value

### Alerts

Set up automated alerts for:
- **Bullish Crossover**: Triggered when 5 EMA crosses above 9 EMA
- **Bearish Crossover**: Triggered when 5 EMA crosses below 9 EMA

To create alerts:
1. Click the "Alert" button in TradingView
2. Select "5 & 9 EMA Crossover Scanner"
3. Choose "Bullish Crossover" or "Bearish Crossover"
4. Configure notification settings

## Default Monitored Securities

1. NASDAQ:AAPL - Apple Inc.
2. NASDAQ:MSFT - Microsoft Corporation
3. NASDAQ:GOOGL - Alphabet Inc.
4. NASDAQ:AMZN - Amazon.com Inc.
5. NASDAQ:TSLA - Tesla Inc.
6. NASDAQ:META - Meta Platforms Inc.
7. NASDAQ:NVDA - NVIDIA Corporation
8. NYSE:JPM - JPMorgan Chase & Co.
9. NYSE:V - Visa Inc.
10. NYSE:WMT - Walmart Inc.
11. NYSE:JNJ - Johnson & Johnson
12. NYSE:PG - Procter & Gamble
13. NASDAQ:NFLX - Netflix Inc.
14. NASDAQ:ADBE - Adobe Inc.
15. NYSE:DIS - The Walt Disney Company
16. NASDAQ:INTC - Intel Corporation
17. NYSE:BA - Boeing Company
18. NASDAQ:CSCO - Cisco Systems Inc.
19. NYSE:XOM - Exxon Mobil Corporation
20. NYSE:CVX - Chevron Corporation

## Code Structure

The indicator follows a clean, organized structure:

```
├── INPUT SECTION
│   ├── EMA Settings
│   ├── Display Options
│   ├── Color Settings
│   └── Scanner Settings (20 symbols)
│
├── CALCULATION SECTION
│   ├── EMA calculations
│   └── Crossover detection
│
├── VISUALIZATION SECTION
│   ├── EMA line plots
│   ├── Signal markers
│   └── Labels
│
├── SCANNER SECTION
│   ├── Multi-symbol analysis
│   └── Scanner table display
│
└── ALERTS
    ├── Bullish alert condition
    └── Bearish alert condition
```

## Trading Strategy Tips

1. **Trend Confirmation**: Use on multiple timeframes for confluence
2. **Risk Management**: Always use stop losses
3. **Volume Confirmation**: Combine with volume indicators
4. **Market Context**: Consider broader market conditions
5. **Avoid Choppy Markets**: EMAs work best in trending markets

## Technical Specifications

- **Pine Script Version**: 5
- **Indicator Type**: Overlay
- **Max Labels**: 500
- **Max Lines**: 500
- **Refresh Rate**: Real-time (based on TradingView data)

## Customization Examples

### Conservative Trader
- Use longer periods (e.g., 8 & 21 EMA)
- Hide labels, keep only lines
- Monitor fewer, more stable securities

### Aggressive Trader
- Use shorter periods (e.g., 3 & 7 EMA)
- Enable all visual signals
- Monitor high-volatility stocks

### Multi-Timeframe Analysis
- Add the indicator multiple times with different timeframe settings
- Compare crossovers across different periods

## Troubleshooting

**Scanner not showing?**
- Ensure "Enable Scanner" is checked
- Verify symbols are valid and accessible with your TradingView plan

**Signals not appearing?**
- Check "Show Crossover Signals" is enabled
- Verify EMAs are properly configured
- Ensure sufficient price data is available

**Performance issues?**
- Reduce number of monitored symbols
- Increase chart refresh interval

## License

This indicator is provided as-is for educational and trading purposes.

## Support

For issues, questions, or feature requests, please refer to the repository documentation.

---

**Disclaimer**: This indicator is for informational purposes only. Trading involves risk. Always do your own research and consider consulting with a financial advisor before making investment decisions.
