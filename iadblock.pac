function FindProxyForURL(url, host) {
  // Comprehensive ad/tracking-blocking domain list (updated 2026)
  //
  // Deliberately EXCLUDED: multi-purpose CDNs, cloud platforms, and
  // service providers (e.g. cloudflare.com, fastly.net, akamai.net,
  // amazonaws.com) and full social/video platforms (e.g. facebook.com,
  // twitter.com, youtube.com) since blocking these at the domain level
  // breaks large amounts of unrelated, legitimate functionality — ads
  // on those platforms are served from the same domains as the core
  // product and can't be separated by domain matching alone.
  var adDomains = [
    // --- Google / Alphabet ad & tracking infrastructure ---
    "google-analytics.com", "*.google-analytics.com",
    "googletagmanager.com", "*.googletagmanager.com",
    "googletagservices.com", "*.googletagservices.com",
    "googlesyndication.com", "*.googlesyndication.com",
    "googleadservices.com", "*.googleadservices.com",
    "doubleclick.net", "*.doubleclick.net",
    "adsbygoogle.com", "*.adsbygoogle.com",
    "adservice.google.com", "*.adservice.google.com",
    "pagead2.googlesyndication.com",

    // --- Facebook / Meta tracking (pixel & ad delivery subdomains) ---
    "fbcdn.net", "*.fbcdn.net",
    "connect.facebook.net",
    "an.facebook.com",
    "pixel.facebook.com",

    // --- Amazon ad network ---
    "amazon-adsystem.com", "*.amazon-adsystem.com",
    "assoc-amazon.com", "*.assoc-amazon.com",

    // --- Major ad exchanges / DSPs / SSPs ---
    "adnxs.com", "*.adnxs.com",
    "rubiconproject.com", "*.rubiconproject.com",
    "openx.net", "*.openx.net",
    "pubmatic.com", "*.pubmatic.com",
    "districtm.io", "*.districtm.io",
    "criteo.com", "*.criteo.com",
    "criteo.net", "*.criteo.net",
    "adform.net", "*.adform.net",
    "adroll.com", "*.adroll.com",
    "casalemedia.com", "*.casalemedia.com",
    "contextweb.com", "*.contextweb.com",
    "indexexchange.com", "*.indexexchange.com",
    "smartadserver.com", "*.smartadserver.com",
    "spotxchange.com", "*.spotxchange.com",
    "media.net", "*.media.net",
    "adcolony.com", "*.adcolony.com",
    "applovin.com", "*.applovin.com",
    "mopub.com", "*.mopub.com",
    "vungle.com", "*.vungle.com",
    "unityads.unity3d.com",
    "yieldmo.com", "*.yieldmo.com",
    "sovrn.com", "*.sovrn.com",
    "gumgum.com", "*.gumgum.com",
    "sharethrough.com", "*.sharethrough.com",
    "triplelift.com", "*.triplelift.com",
    "33across.com", "*.33across.com",
    "bidswitch.net", "*.bidswitch.net",
    "adsrvr.org", "*.adsrvr.org",
    "advertising.com", "*.advertising.com",
    "yahooadsuite.com", "*.yahooadsuite.com",

    // --- Native / content-recommendation ads ---
    "taboola.com", "*.taboola.com",
    "outbrain.com", "*.outbrain.com",
    "revcontent.com", "*.revcontent.com",
    "mgid.com", "*.mgid.com",
    "content.ad", "*.content.ad",
    "zergnet.com", "*.zergnet.com",

    // --- Analytics, heatmaps & behavioral tracking ---
    "scorecardresearch.com", "*.scorecardresearch.com",
    "quantserve.com", "*.quantserve.com",
    "mixpanel.com", "*.mixpanel.com",
    "segment.com", "*.segment.com",
    "segment.io", "*.segment.io",
    "amplitude.com", "*.amplitude.com",
    "hotjar.com", "*.hotjar.com",
    "crazyegg.com", "*.crazyegg.com",
    "mouseflow.com", "*.mouseflow.com",
    "fullstory.com", "*.fullstory.com",
    "clicktale.net", "*.clicktale.net",
    "chartbeat.com", "*.chartbeat.com",
    "newrelic.com", "*.newrelic.com",
    "nr-data.net", "*.nr-data.net",
    "optimizely.com", "*.optimizely.com",
    "convertkit.com", "*.convertkit.com",

    // --- Sharing widgets & popunders ---
    "addthis.com", "*.addthis.com",
    "sharethis.com", "*.sharethis.com",
    "click2.com", "*.click2.com",
    "doubleimpression.com", "*.doubleimpression.com",
    "infolinks.com", "*.infolinks.com",
    "linksynergy.com", "*.linksynergy.com",
    "popads.net", "*.popads.net",
    "propellerads.com", "*.propellerads.com",
    "adcash.com", "*.adcash.com",
    "exoclick.com", "*.exoclick.com",
    "juicyads.com", "*.juicyads.com",
    "trafficjunky.net", "*.trafficjunky.net",

    // --- Legacy domains from original list ---
    "101com.com", "*.101com.com",
    "hotstar.com", "*.hotstar.com",
    "101order.com", "*.101order.com"
  ];

  // Check if host matches any ad domain
  for (var i = 0; i < adDomains.length; i++) {
    if (shExpMatch(host, adDomains[i])) {
      // Route to an unused local port so the connection fails fast
      // instead of hanging (0.0.0.0 can behave inconsistently across
      // OSes/clients).
      return "PROXY 127.0.0.1:1";
    }
  }

  // Default proxy for all other traffic
  return "DIRECT";
}
