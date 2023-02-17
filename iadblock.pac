function FindProxyForURL(url, host) {
  // Block common ad domains
  if (dnsDomainIs(host, "doubleclick.net") ||
      dnsDomainIs(host, "adservice.google.com") ||
      dnsDomainIs(host, "googleadservices.com") ||
      dnsDomainIs(host, "googlesyndication.com") ||
      dnsDomainIs(host, "googletagservices.com") ||
      dnsDomainIs(host, "adsrvr.org") ||
      dnsDomainIs(host, "scorecardresearch.com") ||
      dnsDomainIs(host, "adnxs.com") ||
      dnsDomainIs(host, "openx.net") ||
      dnsDomainIs(host, "pubmatic.com") ||
      dnsDomainIs(host, "rubiconproject.com") ||
      dnsDomainIs(host, "criteo.com")) {
    return "PROXY 127.0.0.1:80";
  }

  // Allow all other traffic to go through
  return "DIRECT";
}
