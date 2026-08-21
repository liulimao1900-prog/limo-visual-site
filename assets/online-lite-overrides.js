(() => {
  const fallbackMap = new Map([
    ["/assets/minimax-h3-luxury-glasses-tvc.mp4", "/assets/mirage-01-cover.webp"],
    ["/assets/hero-reel-luxury-glasses.mp4", "/assets/mirage-01-cover.webp"],
    ["/assets/hero-reel-charmant-sy.mp4", "/assets/charmant-01.webp"],
    ["/assets/hero-reel-mirage-ai.mp4", "/assets/mirage-aigc-tv-cover.webp"],
    ["/assets/hero-reel-mirage-green.mp4", "/assets/mirage-dianjing-thumb-04.webp"],
    ["/assets/hero-reel-mirage-tanwood.mp4", "/assets/mirage-03-cover.webp"],
    ["/assets/hero-reel-mirage-white.mp4", "/assets/mirage-dianjing-thumb-01.jpg"],
    ["/assets/hero-reel-nb.mp4", "/assets/nb-shoes-01.webp"],
    ["/assets/hero-reel-nb-2.mp4", "/assets/nb-shoes-02.webp"],
    ["/assets/charmant-video.mp4", "/assets/charmant-01.webp"],
    ["/assets/gaote-ride-video-web.mp4", "/assets/gaote-ride-01.webp"],
    ["/assets/linglongtai-tvc-h264.mp4", "/assets/linglongtai-thumb-01.png"],
    ["/assets/mirage-dianjing-dark-video.mp4", "/assets/mirage-dianjing-thumb-04.webp"],
    ["/assets/mirage-dianjing-white-video.mp4", "/assets/mirage-dianjing-thumb-01.jpg"],
    ["/assets/mirage-fashion-video.mp4", "/assets/mirage-fashion-thumb-01.jpg"],
    ["/assets/nsve-baiyan-video-web.mp4", "/assets/nsve-baiyan-01.webp"],
    ["/assets/qipai-tang-guanglv-final-web.mp4", "/assets/qipai-guose-01.webp"],
    ["/assets/qipai-ming-luoshenzhu-final-web.mp4", "/assets/qipai-guose-02.webp"],
    ["/assets/qipai-han-chabai-final-web.mp4", "/assets/qipai-guose-03.webp"],
    ["/assets/qipai-song-tianshuibi-final-web.mp4", "/assets/qipai-guose-04.webp"],
  ]);

  const normalizePath = (src) => {
    if (!src) return "";
    try {
      return new URL(src, window.location.origin).pathname;
    } catch {
      return src.split("?")[0];
    }
  };

  const fallbackFor = (src) => fallbackMap.get(normalizePath(src)) || "";

  const showImageLightbox = (src) => {
    if (!src) return;
    let box = document.querySelector(".case-media-lightbox");
    if (!box) {
      box = document.createElement("div");
      box.className = "case-media-lightbox";
      box.innerHTML = '<button type="button" aria-label="关闭">&times;</button><div class="case-media-stage"></div>';
      document.body.appendChild(box);
      box.addEventListener("click", (event) => {
        if (event.target === box || event.target.tagName === "BUTTON") {
          box.classList.remove("is-open");
          box.querySelector(".case-media-stage").innerHTML = "";
        }
      });
    }
    box.querySelector(".case-media-stage").innerHTML = `<img src="${src}" alt="">`;
    box.classList.add("is-open");
  };

  const replaceLargeVideoNodes = () => {
    document.querySelectorAll("video").forEach((video) => {
      const source = video.querySelector("source");
      const src = source?.getAttribute("src") || video.getAttribute("src") || video.dataset.src || "";
      const fallback = fallbackFor(src);
      if (!fallback || video.dataset.liteReplaced === "true") return;
      const img = document.createElement("img");
      img.src = fallback;
      img.alt = video.getAttribute("aria-label") || "";
      img.className = video.className || "";
      img.loading = "lazy";
      img.decoding = "async";
      video.replaceWith(img);
      img.dataset.liteReplaced = "true";
    });

    document.querySelectorAll("[data-preview-src]").forEach((item) => {
      const fallback = fallbackFor(item.dataset.previewSrc);
      if (fallback) item.dataset.previewSrc = fallback;
    });
  };

  document.addEventListener("click", (event) => {
    const reelTrigger = event.target.closest(".hero-showreel, .portrait-reel-card");
    if (reelTrigger) {
      const source = reelTrigger.querySelector("source")?.getAttribute("src")
        || reelTrigger.dataset.previewSrc
        || "/assets/hero-reel-luxury-glasses.mp4";
      const fallback = fallbackFor(source) || "/assets/mirage-01-cover.webp";
      event.preventDefault();
      event.stopImmediatePropagation();
      showImageLightbox(fallback);
      return;
    }

    const target = event.target.closest("[data-preview-src]");
    const fallback = fallbackFor(target?.dataset.previewSrc);
    if (!fallback) return;
    event.preventDefault();
    event.stopPropagation();
    showImageLightbox(fallback);
  }, true);

  const apply = () => replaceLargeVideoNodes();
  apply();
  if ("MutationObserver" in window && !window.__onlineLiteVideoObserver) {
    window.__onlineLiteVideoObserver = new MutationObserver(apply);
    window.__onlineLiteVideoObserver.observe(document.documentElement, { childList: true, subtree: true });
  }
  window.addEventListener("load", apply);
  [100, 300, 800, 1400, 2200].forEach((delay) => window.setTimeout(apply, delay));
})();
