
function FindProxyForURL(url, host) {
  // Comprehensive ad-blocking domain list (updated 2026)
  var adDomains = [
    // Analytics & Tracking
    "google-analytics.com",
    "*.google-analytics.com",
    "googletagmanager.com",
    "*.googletagmanager.com",
    "doubleclick.net",
    "*.doubleclick.net",
    "facebook.com",
    "*.facebook.com",
    "fbcdn.net",
    "*.fbcdn.net",
    "twitter.com",
    "*.twitter.com",
    "cloudflare.com",
    "*.cloudflare.com",
    
    // Ad Networks
    "adsbygoogle.com",
    "*.adsbygoogle.com",
    "googlesyndication.com",
    "*.googlesyndication.com",
    "adnxs.com",
    "*.adnxs.com",
    "taboola.com",
    "*.taboola.com",
    "outbrain.com",
    "*.outbrain.com",
    "criteo.com",
    "*.criteo.com",
    "amazon-adsystem.com",
    "*.amazon-adsystem.com",
    "rubiconproject.com",
    "*.rubiconproject.com",
    "openx.net",
    "*.openx.net",
    "pubmatic.com",
    "*.pubmatic.com",
    "districtm.io",
    "*.districtm.io",
    
    // Streaming Video Ads
    "youtube-nocookie.com",
    "*.youtube-nocookie.com",
    "youtube.com",
    "*.youtube.com",
    "ytimg.com",
    "*.ytimg.com",
    "googlevideo.com",
    "*.googlevideo.com",
    
    // Social Media Tracking
    "scorecardresearch.com",
    "*.scorecardresearch.com",
    "quantserve.com",
    "*.quantserve.com",
    "addthis.com",
    "*.addthis.com",
    "sharethis.com",
    "*.sharethis.com",
    
    // Marketing & Conversion Tracking
    "convertkit.com",
    "*.convertkit.com",
    "mixpanel.com",
    "*.mixpanel.com",
    "segment.com",
    "*.segment.com",
    "amplitude.com",
    "*.amplitude.com",
    "intercom.com",
    "*.intercom.com",
    "zendesk.com",
    "*.zendesk.com",
    
    // CDN & Performance (often used for ad delivery)
    "cdn77.com",
    "*.cdn77.com",
    "fastly.net",
    "*.fastly.net",
    "akamai.net",
    "*.akamai.net",
    
    // Popunder & Malicious Ads
    "click2.com",
    "*.click2.com",
    "doubleimpression.com",
    "*.doubleimpression.com",
    "infolinks.com",
    "*.infolinks.com",
    "linksynergy.com",
    "*.linksynergy.com",
    
    // Legacy domains from original list
    "101com.com",
    "*.101com.com",
    "bit.ly",
    "*.bit.ly",
    "hotstar.com",
    "*.hotstar.com",
    "101order.com",
    "*.101order.com"
  ];
  
  // Check if host matches any ad domain
  for (var i = 0; i < adDomains.length; i++) {
    if (shExpMatch(host, adDomains[i])) {
      return "PROXY 0.0.0.0";
    }
  }
  
  // Default proxy for all other traffic
  return "DIRECT";
}
