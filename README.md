# iOS Ad Blocker

Block ads on your iPhone, including in-app banner ads, using a PAC (Proxy Auto-Config) file.

## Overview

This project provides a PAC proxy configuration that blocks intrusive ads across Safari and in-app browsers on iOS devices.

## How It Works

By configuring your iPhone's WiFi proxy settings to use the provided PAC file, you can block most ads system-wide on your device.

## Installation Instructions

### Step-by-Step Guide

1. **Open Settings** on your iPhone

2. **Navigate to WiFi Settings**
   - Go to Settings → WiFi
   - Tap the information icon (ℹ️) next to your WiFi network

3. **Configure HTTP Proxy**
   - Scroll down to "HTTP Proxy"
   - Select "Auto"

4. **Add the PAC URL**
   - Paste this URL in the proxy configuration field:
   ```
   https://raw.githubusercontent.com/ramuthumu/ios-adblock/master/iadblock.pac
   ```

5. **Confirm**
   - Save the settings

## Result

Once configured, you should see a significant reduction in:
- Safari ads
- In-app banner ads
- Other intrusive advertisements

## Features

✅ Blocks ads in Safari  
✅ Blocks in-app ads  
✅ Works across most iOS apps  
✅ Simple one-time configuration  

## Notes

- This solution uses WiFi-level proxy filtering
- Ads may still appear on non-WiFi connections
- Some apps may bypass proxy filtering depending on their implementation

## License

Feel free to use and modify as needed.
