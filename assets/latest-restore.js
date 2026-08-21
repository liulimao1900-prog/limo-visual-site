(() => {
  const VERSION = "LIMO-FEATURED-02-FULL-R1";

  const text = {
    close: "\u5173\u95ED",
    preview: "\u9884\u89C8",
    detail: "\u70B9\u51FB\u67E5\u770B\u9879\u76EE\u8BE6\u60C5",
    qipaiTitle: "\u67D2\u724C \u51A0\u519B\u4EE3\u8A00\u4EBA \u67D2\u5F69\u56FD\u8272\u670D\u9970 TVC \u7CFB\u5217\u89C6\u9891",
    charmantTitle: "\u590F\u8499 \u65E5\u7CFB\u773C\u955C\u54C1\u724C \u65B0\u54C1TVC AI\u89C6\u9891",
    charmantDesc: "\u4EE5\u65E5\u7CFB\u8F7B\u76C8\u611F\u548C\u65B0\u54C1\u955C\u67B6\u4E3A\u6838\u5FC3\uFF0C\u5B8C\u6210\u4ECE\u89C6\u89C9 KV \u5230 AI \u52A8\u6001\u5206\u955C\u7684\u7EDF\u4E00\u5448\u73B0\u3002",
    mirageFashionTitle: "\u9B45\u5F71 \u8F7B\u5962\u65E0\u6846\u773C\u955C \u65F6\u5C1A\u65E5\u5E38\u7CFB\u5217 AI \u89C6\u9891",
    mirageFashionDesc: "\u56F4\u7ED5\u65F6\u5C1A\u65E5\u5E38\u573A\u666F\u6253\u9020\u8F7B\u91CF\u5316\u89C6\u89C9\u8282\u594F\uFF0C\u7EDF\u4E00\u5B8C\u6210 AI \u89C6\u9891\u5206\u955C\u4E0E\u6267\u884C\u3002",
    mirageDianjingTitle: "\u9B45\u5F71 \u8F7B\u5962\u65E0\u6846\u773C\u955C \u70B9\u6676\u7CFB\u5217\u65B0\u54C1AI\u89C6\u9891",
    mirageTanwoodTitle: "\u9B45\u5F71 \u8F7B\u5962\u65E0\u6846\u773C\u955C \u6A80\u6728\u7537\u58EB\u7CFB\u5217\u65B0\u54C1 AI \u89C6\u9891",
    mirageTanwoodDesc: "\u4EE5\u6A80\u6728\u8D28\u611F\u4E0E\u7537\u58EB\u65E5\u5E38\u98CE\u683C\u4E3A\u4E3B\u7EBF\uFF0C\u5EF6\u5C55\u65B0\u54C1 AI \u89C6\u9891\u7684\u8282\u594F\u3001\u5149\u5F71\u548C\u60C5\u7EEA\u3002",
    gaoteTitle: "\u9AD8\u7279 \u9A91\u884C\u773C\u955C \u53CC\u5C4A\u9A91\u58EB\u7CFB\u5217\u65B0\u54C1 AI \u89C6\u9891",
    nsveTitle: "\u5B9D\u5C9B\u773C\u955C NSVE \u81EA\u7814 AI \u773C\u955C \u65B0\u54C1AI\u89C6\u9891",
    shuijingfangTitle: "\u6C34\u4E95\u574A \u7AEF\u5348\u5E74\u5EA6\u89C6\u9891 \u957F\u6C99\u7BC7",
    linglongtaiTitle: "\u9B45\u5F71\u65B0\u54C1\u73B2\u73D1\u949B \u773C\u955C\u884C\u4E1A\u9996\u6B3E AI\u5168\u6D41\u7A0B TVC\u5E7F\u544A\u7247",
  };

  const assets = {
    jordan: ["/assets/jordan-q4-01.webp", "/assets/jordan-q4-02.webp", "/assets/jordan-q4-03.webp"],
    qipai: ["/assets/qipai-guose-01.webp", "/assets/qipai-guose-02.webp", "/assets/qipai-guose-03.webp", "/assets/qipai-guose-04.webp"],
    qipaiPreview: ["/assets/qipai-tang-guanglv-final-web.mp4", "/assets/qipai-ming-luoshenzhu-final-web.mp4", "/assets/qipai-han-chabai-final-web.mp4", "/assets/qipai-song-tianshuibi-final-web.mp4"],
    nb: ["/assets/nb-shoes-01.webp", "/assets/nb-shoes-02.webp", "/assets/nb-shoes-03.webp", "/assets/nb-shoes-04.webp", "/assets/nb-shoes-05.webp"],
    nbPreview: ["/assets/hero-reel-nb.mp4", "/assets/hero-reel-nb-2.mp4", "/assets/nb-shoes-03.webp", "/assets/nb-shoes-04.webp", "/assets/nb-shoes-05.webp"],
    charmant: ["/assets/charmant-01.webp", "/assets/charmant-03.webp", "/assets/charmant-04.webp"],
    charmantPreview: ["/assets/charmant-video.mp4", "/assets/charmant-03.webp", "/assets/charmant-04.webp"],
    mirageDianjing: ["/assets/mirage-dianjing-thumb-01.jpg", "/assets/mirage-dianjing-thumb-02.jpg", "/assets/mirage-dianjing-thumb-03.webp", "/assets/mirage-dianjing-thumb-04.webp", "/assets/mirage-dianjing-thumb-05.webp", "/assets/mirage-dianjing-thumb-06.jpg"],
    mirageDianjingPreview: ["/assets/mirage-dianjing-white-video.mp4", "/assets/mirage-dianjing-thumb-02.jpg", "/assets/mirage-dianjing-thumb-03.webp", "/assets/mirage-dianjing-dark-video.mp4", "/assets/mirage-dianjing-thumb-05.webp", "/assets/mirage-dianjing-thumb-06.jpg"],
    mirageFashion: ["/assets/mirage-fashion-thumb-01.jpg", "/assets/mirage-fashion-thumb-02.jpg", "/assets/mirage-fashion-thumb-03.jpg", "/assets/mirage-fashion-thumb-04.jpg", "/assets/mirage-fashion-thumb-05.jpg", "/assets/mirage-fashion-thumb-06.webp"],
    mirageFashionPreview: ["/assets/mirage-fashion-video.mp4", "/assets/mirage-fashion-thumb-02.jpg", "/assets/mirage-fashion-thumb-03.jpg", "/assets/mirage-fashion-thumb-04.jpg", "/assets/mirage-fashion-thumb-05.jpg", "/assets/mirage-fashion-thumb-06.webp"],
    gaote: ["/assets/gaote-ride-01.webp", "/assets/gaote-ride-02.jpg", "/assets/gaote-ride-03.jpg", "/assets/gaote-ride-04.jpg"],
    gaotePreview: ["/assets/gaote-ride-video-web.mp4", "/assets/gaote-ride-02.jpg", "/assets/gaote-ride-03.jpg", "/assets/gaote-ride-04.jpg"],
    nsve: ["/assets/nsve-baiyan-01.webp", "/assets/nsve-baiyan-02.webp", "/assets/nsve-baiyan-03.webp", "/assets/nsve-baiyan-04.webp"],
    nsvePreview: ["/assets/nsve-baiyan-video-web.mp4", "/assets/nsve-baiyan-02.webp", "/assets/nsve-baiyan-03.webp", "/assets/nsve-baiyan-04.webp"],
    shuijingfang: ["/assets/shuijingfang-changsha-01.webp", "/assets/shuijingfang-changsha-02.webp", "/assets/shuijingfang-changsha-03.png"],
    linglongtai: ["/assets/linglongtai-thumb-01.png", "/assets/linglongtai-thumb-02.png", "/assets/linglongtai-thumb-03.png"],
  };

  const isVideo = (src) => /\.(mp4|webm|mov)(\?|$)/i.test(src || "");
  const rows = () => [...document.querySelectorAll(".case-row")];
  const rowByDate = (date) => rows().find((row) => (row.querySelector(".case-date")?.textContent || "").trim() === date);
  const rowByLatestCase = (name) => document.querySelector(`.case-row[data-latest-case="${name}"]`);

  const setSummary = (row, date, title, desc) => {
    if (!row) return;
    const dateNode = row.querySelector(".case-date");
    const titleNode = row.querySelector(".case-summary h3");
    const descNode = row.querySelector(".case-summary p");
    if (dateNode && date) dateNode.textContent = date;
    if (titleNode && title) titleNode.textContent = title;
    if (descNode && desc) descNode.textContent = desc;
  };

  const mediaFigure = (src, cls, preview, index) => {
    const previewAttr = preview ? ` data-preview-src="${preview}"` : "";
    const alt = `${text.preview} ${index + 1}`;
    return `<figure class="case-thumb ${cls}"${previewAttr}><img src="${src}" alt="${alt}" loading="lazy"></figure>`;
  };

  const videoFigure = (src, cls) => (
    `<figure class="case-thumb ${cls}" data-preview-src="${src}"><img src="/assets/mirage-03-cover.webp" alt="${text.preview}" loading="lazy" decoding="async"></figure>`
  );

  const setThumbs = (row, list, cls, previews, clickable = true) => {
    const wrap = row?.querySelector(".case-thumbs");
    if (!wrap) return;
    wrap.innerHTML = list.map((src, index) => mediaFigure(src, cls, clickable ? previews?.[index] || src : "", index)).join("");
  };

  const createLightbox = () => {
    let lightbox = document.querySelector(".case-media-lightbox");
    if (lightbox) return lightbox;
    lightbox = document.createElement("div");
    lightbox.className = "case-media-lightbox";
    lightbox.innerHTML = `<button type="button" aria-label="${text.close}">&times;</button><div class="case-media-stage"></div>`;
    document.body.appendChild(lightbox);

    const close = () => {
      lightbox.classList.remove("is-open");
      lightbox.querySelector(".case-media-stage").innerHTML = "";
    };
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.tagName === "BUTTON") close();
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
    return lightbox;
  };

  const openMedia = (src) => {
    if (!src) return;
    const lightbox = createLightbox();
    const stage = lightbox.querySelector(".case-media-stage");
    stage.innerHTML = "";
    const media = document.createElement(isVideo(src) ? "video" : "img");
    media.src = src;
    if (media.tagName === "VIDEO") {
      media.controls = true;
      media.autoplay = true;
      media.playsInline = true;
      media.volume = 0.5;
    }
    stage.appendChild(media);
    lightbox.classList.add("is-open");
  };

  const projectButton = (label) => `<button class="project-open" type="button" aria-label="${label}"></button><div class="project-line"></div>`;
  const tags = (className, items) => `<div class="project-tags ${className || ""}" aria-hidden="true">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;

  const prepareFeaturedWorkCards = () => {
    const list = document.querySelector(".work .project-list");
    if (!list || list.dataset.latestFeaturedReady === VERSION) return;
    const originalCards = [...list.querySelectorAll(".project-card")];
    const base01 = originalCards[0];
    if (!base01) return;

    if (!list.querySelector(".minimax-h3-card")) {
      const card = base01.cloneNode(true);
      card.className = "project-card project-0 reveal is-visible minimax-h3-card";
      card.dataset.previewSrc = "/assets/minimax-h3-luxury-glasses-tvc.mp4";
      card.innerHTML = `
        <img class="project-video" src="/assets/mirage-01-cover.webp" alt="MiniMax H3" loading="lazy" decoding="async">
        <div class="project-badge" aria-hidden="true">NEW</div>
        <div class="project-shade"></div>
        <div class="project-title"><p>\u8F7B\u5962\u773C\u955C TVC</p><h3>MiniMax H3</h3></div>
        ${tags("", ["MiniMax H3", "TEST"])}
        ${projectButton("Open MiniMax H3")}
      `;
      list.insertBefore(card, base01);
    }

    const currentCards = [...list.querySelectorAll(".project-card")];
    const mainMirage = currentCards.find((card) => card.classList.contains("project-1")) || currentCards[1];
    if (mainMirage) {
      mainMirage.dataset.previewSrc = "/assets/hero-reel-mirage-ai.mp4";
      mainMirage.querySelector(".project-meta")?.remove();
      mainMirage.innerHTML = `
        <img class="project-video" src="/assets/mirage-02-cover.webp" alt="\u9B45\u5F71 AI \u89C6\u9891">
        <div class="project-badge" aria-hidden="true">HOT</div>
        <div class="project-shade"></div>
        <div class="project-title"><p>\u9B45\u5F71 \u65F6\u5C1A\u65E5\u5E38</p><h3>AI \u89C6\u9891</h3></div>
        ${tags("project-tags-02", ["\u9B45\u5F71", "AIGC", "ADVERTISING"])}
        ${projectButton("Open Mirage AIGC")}
      `;
    }

    if (!list.querySelector(".mirage-new-card")) {
      const card = base01.cloneNode(true);
      card.className = "project-card reveal is-visible mirage-new-card";
      card.dataset.previewSrc = "/assets/mirage-dianjing-white-video.mp4";
      card.innerHTML = `
        <img class="project-video" src="/assets/mirage-03-cover.webp" alt="\u9B45\u5F71\u65B0\u54C1">
        <div class="project-badge" aria-hidden="true">HOT</div>
        <div class="project-shade"></div>
        <div class="project-title"><p>\u9B45\u5F71 \u8F7B\u5962\u65E0\u6846\u773C\u955C</p><h3>\u65B0\u54C1\u5E7F\u544A</h3></div>
        ${tags("project-tags-03", ["\u9B45\u5F71", "NEW", "ADVERTISING"])}
        ${projectButton("Open Mirage New")}
      `;
      list.insertBefore(card, mainMirage?.nextSibling || null);
    }

    const charmant = list.querySelector(".project-2");
    if (charmant) {
      charmant.dataset.previewSrc = "/assets/charmant-video.mp4";
      charmant.innerHTML = `
        <img class="project-video" src="/assets/charmant-01.webp" alt="\u590F\u8499" loading="lazy" decoding="async">
        <div class="project-shade"></div>
        <div class="project-title"><p>\u65E5\u7CFB\u773C\u955C\u54C1\u724C \u65B0\u54C1 TVC</p><h3>\u590F\u8499</h3></div>
        ${tags("project-tags-charmant", ["\u590F\u8499", "AIGC", "NEW", "ADVERTISING"])}
        ${projectButton("Open Charmant")}
      `;
    }

    const linglongtai = list.querySelector(".project-3");
    if (linglongtai) {
      linglongtai.dataset.previewSrc = "/assets/linglongtai-tvc-h264.mp4";
      linglongtai.innerHTML = `
        <img class="project-video" src="/assets/mirage-aigc-tv-cover.webp" alt="\u9B45\u5F71 AIGC TV \u5E7F\u544A\u7247">
        <div class="project-shade"></div>
        <div class="project-title"><p>\u9B45\u5F71 AIGC TV \u5E7F\u544A\u7247</p><h3>\u9B45\u5F71\u73B2\u73D1\u949B</h3></div>
        ${tags("project-tags-05", ["\u9B45\u5F71", "AIGC", "TV COMMERCIAL"])}
        ${projectButton("Open Linglongtai")}
      `;
    }

    list.dataset.latestFeaturedReady = VERSION;
  };

  const restoreTimeline = () => {
    const timeline = document.querySelector(".case-timeline");
    if (!timeline) return;

    const jordan = rowByDate("2026.6");
    setThumbs(jordan, assets.jordan, "jordan-q4-thumb", [], false);
    jordan && (jordan.dataset.jordanThumbsReady = VERSION);

    const qipai = rowByDate("2026.5");
    setSummary(qipai, null, text.qipaiTitle);
    setThumbs(qipai, assets.qipai, "qipai-guose-thumb", assets.qipaiPreview);

    const nb = rowByDate("2026.3");
    setThumbs(nb, assets.nb, "nb-shoes-thumb", assets.nbPreview);

    let charmant = rows().find((row) => {
      if (row.dataset.latestCase) return false;
      const date = (row.querySelector(".case-date")?.textContent || "").trim();
      const title = row.querySelector(".case-summary h3")?.textContent || "";
      return date === "2026.1" || date === "2025.12" || title.includes("\u590F\u8499");
    });
    setSummary(charmant, "2025.12", text.charmantTitle, text.charmantDesc);
    setThumbs(charmant, assets.charmant, "charmant-thumb", assets.charmantPreview);

    let fashion = rowByLatestCase("mirage-fashion");
    if (!fashion && charmant) {
      const row = charmant.cloneNode(true);
      row.dataset.latestCase = "mirage-fashion";
      row.dataset.charmantCaseReady = "";
      row.querySelector(".case-detail-link")?.remove();
      timeline.insertBefore(row, charmant);
      fashion = row;
    }
    setSummary(fashion, "2026.1", text.mirageFashionTitle, text.mirageFashionDesc);
    setThumbs(fashion, assets.mirageFashion, "mirage-fashion-thumb", assets.mirageFashionPreview);

    const dianjing = rowByDate("2025.11");
    setSummary(dianjing, null, text.mirageDianjingTitle);
    setThumbs(dianjing, assets.mirageDianjing, "mirage-dianjing-thumb", assets.mirageDianjingPreview);

    const gaote = rowByDate("2025.09");
    setSummary(gaote, null, text.gaoteTitle);
    setThumbs(gaote, assets.gaote, "gaote-ride-thumb", assets.gaotePreview);

    let tanwood = rowByLatestCase("mirage-tanwood");
    if (!tanwood && gaote) {
      const row = gaote.cloneNode(true);
      row.dataset.latestCase = "mirage-tanwood";
      row.querySelector(".case-detail-link")?.remove();
      timeline.insertBefore(row, gaote);
      tanwood = row;
    }
    setSummary(tanwood, "2025.10", text.mirageTanwoodTitle, text.mirageTanwoodDesc);
    const tanwoodWrap = tanwood?.querySelector(".case-thumbs");
    if (tanwoodWrap) tanwoodWrap.innerHTML = mediaFigure("/assets/mirage-tanwood-cover.webp", "mirage-tanwood-thumb", "/assets/hero-reel-mirage-tanwood.mp4", 0);

    const nsve = rowByDate("2025.07");
    setSummary(nsve, null, text.nsveTitle);
    setThumbs(nsve, assets.nsve, "nsve-baiyan-thumb", assets.nsvePreview);

    const shuijingfang = rowByDate("2025.05");
    setSummary(shuijingfang, null, text.shuijingfangTitle);
    setThumbs(shuijingfang, assets.shuijingfang, "shuijingfang-thumb", [], false);

    const linglongtai = rowByDate("2025.04");
    setSummary(linglongtai, null, text.linglongtaiTitle);
    setThumbs(linglongtai, assets.linglongtai, "linglongtai-thumb", ["/assets/linglongtai-tvc-h264.mp4", "/assets/linglongtai-thumb-02.png", "/assets/linglongtai-thumb-03.png"]);

    rows().forEach((row, index) => {
      row.style.setProperty("--stagger-index", index);
      row.classList.add("is-visible");
    });
  };

  const ensureDetailLinks = () => {
    document.querySelectorAll(".case-row").forEach((row) => {
      const expand = row.querySelector(".case-expand");
      if (!expand || expand.querySelector(".case-detail-link")) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "case-detail-link";
      button.setAttribute("aria-label", text.detail);
      button.innerHTML = `<span>${text.detail}</span><i aria-hidden="true">&#8599;</i>`;
      expand.appendChild(button);
    });
  };

  const enablePreviewClicks = () => {
    document.querySelectorAll(".work .project-card[data-preview-src]").forEach((card) => {
      if (card.dataset.latestPreviewReady === VERSION) return;
      card.dataset.latestPreviewReady = VERSION;
      const open = (event) => {
        event?.preventDefault?.();
        openMedia(card.dataset.previewSrc);
      };
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.addEventListener("click", open);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") open(event);
      });
    });

    document.querySelectorAll(".case-thumb").forEach((thumb) => {
      if (thumb.closest(".jordan-q4-thumb") || thumb.closest(".shuijingfang-thumb")) return;
      if (thumb.dataset.latestPreviewReady === VERSION) return;
      const src = thumb.dataset.previewSrc || thumb.querySelector("img,video source")?.getAttribute("src") || thumb.querySelector("img,video")?.src;
      if (!src) return;
      thumb.dataset.latestPreviewReady = VERSION;
      thumb.setAttribute("role", "button");
      thumb.setAttribute("tabindex", "0");
      thumb.addEventListener("click", () => openMedia(src));
      thumb.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openMedia(src);
        }
      });
    });

    document.querySelectorAll(".case-row").forEach((row) => {
      if (row.dataset.latestMouseReset === VERSION) return;
      row.dataset.latestMouseReset = VERSION;
      row.addEventListener("mouseleave", () => {
        if (row.contains(document.activeElement)) document.activeElement.blur();
      });
    });
  };

  const restoreVideos = () => {
    const heroCovers = [
      "/assets/mirage-01-cover.webp",
      "/assets/nb-shoes-01.webp",
      "/assets/mirage-02-cover.webp",
      "/assets/mirage-dianjing-thumb-01.jpg",
      "/assets/nb-shoes-02.webp",
      "/assets/mirage-tanwood-cover.webp",
      "/assets/mirage-03-cover.webp",
      "/assets/charmant-01.webp",
    ];

    document.querySelectorAll(".portrait-reel-card").forEach((card, index) => {
      if (card.dataset.videoRestoreReady === VERSION) return;
      const video = card.querySelector(".portrait-reel-video");
      if (!video) {
        card.dataset.videoRestoreReady = VERSION;
        return;
      }
      const source = video.querySelector("source")?.getAttribute("src") || "";
      card.dataset.previewSrc = source;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = index === 0 ? "metadata" : "none";
      video.poster = video.poster || heroCovers[index % heroCovers.length];
      card.dataset.videoRestoreReady = VERSION;
    });

    document.querySelectorAll(".portrait-reel-video").forEach((video) => {
      video.muted = true;
      video.loop = false;
      video.autoplay = false;
      video.playsInline = true;
      video.preload = "none";
    });
  };

  const ensureVerticalWorkCarousel = () => {
    if (document.querySelector(".vertical-work-carousel")) return;
    const anchor = document.querySelector(".strength");
    if (!anchor?.parentNode) return;

    const items = [
      ["01", "新中式人像 01", "根目录作品", "/assets/new-chinese-portrait-01.webp"],
      ["02", "新中式人像 02", "根目录作品", "/assets/new-chinese-portrait-02.webp"],
      ["03", "新中式人像 03", "根目录作品", "/assets/new-chinese-portrait-03.webp"],
    ];

    const stilllifeArchive = Array.from({ length: 31 }, (_, index) => {
      const name = `stilllife-${String(index + 1).padStart(2, "0")}.jpg`;
      return [`/assets/${name}`, `/assets/${name}`];
    });
    const stilllifeRows = [[], [], []];
    stilllifeArchive.forEach((item, index) => {
      stilllifeRows[index % 3].push(item);
    });

    const archiveRows = [
      [
        ["/assets/human-style-01.webp", "/assets/human-style-01.webp"],
        ["/assets/human-style-02.webp", "/assets/human-style-02.webp"],
        ["/assets/human-style-03.webp", "/assets/human-style-03.webp"],
        ["/assets/human-style-11.webp", "/assets/human-style-11.webp"],
        ["/assets/new-chinese-portrait-01.webp", "/assets/new-chinese-portrait-01.webp"],
        ["/assets/new-chinese-portrait-02.webp", "/assets/new-chinese-portrait-02.webp"],
        ["/assets/new-chinese-portrait-07.webp", "/assets/new-chinese-portrait-07.webp"],
        ["/assets/new-chinese-portrait-05.webp", "/assets/new-chinese-portrait-05.webp"],
        ["/assets/new-chinese-portrait-06.webp", "/assets/new-chinese-portrait-06.webp"],
        ["/assets/new-chinese-portrait-03.webp", "/assets/new-chinese-portrait-03.webp"],
        ["/assets/new-chinese-portrait-04.webp", "/assets/new-chinese-portrait-04.webp"],
        ["/assets/work-wall-diamond-glasses-r1.webp", "/assets/work-wall-diamond-glasses-r1.webp"],
        ["/assets/charmant-01.webp", "/assets/charmant-01.webp"],
        ["/assets/mirage-dianjing-thumb-04.webp", "/assets/mirage-dianjing-thumb-04.webp"],
        ["/assets/nb-shoes-03.webp", "/assets/nb-shoes-03.webp"],
        ["/assets/mirage-aigc-tv-cover.webp", "/assets/mirage-aigc-tv-cover.webp"],
        ["/assets/qipai-guose-01.webp", "/assets/qipai-guose-01.webp"],
        ["/assets/nsve-baiyan-04.webp", "/assets/nsve-baiyan-04.webp"],
        ...stilllifeRows[0],
      ],
      [
        ["/assets/human-style-04.webp", "/assets/human-style-04.webp"],
        ["/assets/human-style-05.webp", "/assets/human-style-05.webp"],
        ["/assets/human-style-06.webp", "/assets/human-style-06.webp"],
        ["/assets/jordan-q4-01.webp", "/assets/jordan-q4-01.webp"],
        ["/assets/new-chinese-portrait-08.webp", "/assets/new-chinese-portrait-08.webp"],
        ["/assets/new-chinese-portrait-09.webp", "/assets/new-chinese-portrait-09.webp"],
        ["/assets/new-chinese-portrait-10.webp", "/assets/new-chinese-portrait-10.webp"],
        ["/assets/new-chinese-portrait-11.webp", "/assets/new-chinese-portrait-11.webp"],
        ["/assets/new-chinese-portrait-12.webp", "/assets/new-chinese-portrait-12.webp"],
        ["/assets/mirage-fashion-thumb-01.jpg", "/assets/mirage-fashion-thumb-01.jpg"],
        ["/assets/gaote-ride-01.webp", "/assets/gaote-ride-01.webp"],
        ["/assets/nsve-baiyan-01.webp", "/assets/nsve-baiyan-01.webp"],
        ["/assets/jordan-q4-01.webp", "/assets/jordan-q4-01.webp"],
        ["/assets/japanese-style-01.webp", "/assets/japanese-style-01.webp"],
        ["/assets/japanese-style-02.webp", "/assets/japanese-style-02.webp"],
        ["/assets/japanese-style-03.webp", "/assets/japanese-style-03.webp"],
        ["/assets/japanese-style-04.webp", "/assets/japanese-style-04.webp"],
        ["/assets/japanese-style-05.webp", "/assets/japanese-style-05.webp"],
        ["/assets/japanese-style-06.webp", "/assets/japanese-style-06.webp"],
        ["/assets/japanese-style-07.webp", "/assets/japanese-style-07.webp"],
        ["/assets/japanese-style-08.webp", "/assets/japanese-style-08.webp"],
        ["/assets/japanese-style-10.webp", "/assets/japanese-style-10.webp"],
        ["/assets/japanese-style-11.webp", "/assets/japanese-style-11.webp"],
        ["/assets/japanese-style-09.webp", "/assets/japanese-style-09.webp"],
        ["/assets/mirage-dianjing-thumb-01.jpg", "/assets/mirage-dianjing-thumb-01.jpg"],
        ["/assets/human-style-12.webp", "/assets/human-style-12.webp"],
        ["/assets/mirage-fashion-thumb-06.webp", "/assets/mirage-fashion-thumb-06.webp"],
        ...stilllifeRows[1],
      ],
      [
        ["/assets/human-style-07.webp", "/assets/human-style-07.webp"],
        ["/assets/new-chinese-portrait-13.webp", "/assets/new-chinese-portrait-13.webp"],
        ["/assets/human-style-08.webp", "/assets/human-style-08.webp"],
        ["/assets/new-chinese-portrait-14.webp", "/assets/new-chinese-portrait-14.webp"],
        ["/assets/new-chinese-portrait-15.webp", "/assets/new-chinese-portrait-15.webp"],
        ["/assets/human-style-10.webp", "/assets/human-style-10.webp"],
        ["/assets/new-chinese-portrait-16.webp", "/assets/new-chinese-portrait-16.webp"],
        ["/assets/new-chinese-portrait-17.webp", "/assets/new-chinese-portrait-17.webp"],
        ["/assets/human-style-09.webp", "/assets/human-style-09.webp"],
        ["/assets/nb-shoes-01.webp", "/assets/nb-shoes-01.webp"],
        ["/assets/qipai-guose-04.webp", "/assets/qipai-guose-04.webp"],
        ["/assets/shuijingfang-changsha-01.webp", "/assets/shuijingfang-changsha-01.webp"],
        ["/assets/mirage-fashion-thumb-04.jpg", "/assets/mirage-fashion-thumb-04.jpg"],
        ["/assets/linglongtai-thumb-01.png", "/assets/linglongtai-thumb-01.png"],
        ["/assets/mirage-03-cover.webp", "/assets/mirage-03-cover.webp"],
        ["/assets/nb-shoes-05.webp", "/assets/nb-shoes-05.webp"],
        ["/assets/stilllife-forest-tea-01.webp", "/assets/stilllife-forest-tea-01.webp"],
        ["/assets/archive-glasses-close-01.webp", "/assets/archive-glasses-close-01.webp"],
        ["/assets/stilllife-extra-01.webp", "/assets/stilllife-extra-01.webp"],
        ["/assets/stilllife-extra-02.webp", "/assets/stilllife-extra-02.webp"],
        ["/assets/stilllife-extra-03.webp", "/assets/stilllife-extra-03.webp"],
        ["/assets/stilllife-extra-04.webp", "/assets/stilllife-extra-04.webp"],
        ...stilllifeRows[2],
      ],
    ];

    // Removed from the work wall at the owner's request.
    const hiddenArchiveImages = new Set([
      "/assets/mirage-dianjing-thumb-01.jpg",
      "/assets/work-wall-diamond-glasses-r1.webp",
      "/assets/stilllife-extra-02.webp",
    ]);
    archiveRows.forEach((row, index) => {
      archiveRows[index] = row.filter(([image]) => !hiddenArchiveImages.has(image));
    });
    // Keep the Japanese-style series together; only separate the two near-identical white-shirt frames.

    const section = document.createElement("section");
    section.className = "vertical-work-carousel";
    section.setAttribute("aria-label", "作品立式卡片轮播");
    section.innerHTML = `
      <div class="vertical-work-grid" aria-hidden="true"></div>
      <div class="shell vertical-work-shell">
        <div class="vertical-work-copy">
          <p>SELECTED WORKS / VISUAL INDEX</p>
          <h2>更多作品</h2>
        </div>
        <div class="vertical-card-stage">
          ${items.map(([no, title, desc, image], index) => `
            <article class="vertical-work-card" style="--slot:${index};" data-card-index="${index}">
              <img src="${image}" alt="${title}" loading="${index === 0 ? "eager" : "lazy"}">
              <div class="vertical-card-shade"></div>
              <span>${no}</span>
              <h3>${title}</h3>
              <p>${desc}</p>
            </article>
          `).join("")}
        </div>
        <div class="vertical-work-footer">
          <span class="vertical-work-count">01</span>
          <i></i>
          <span>DRAG OF SCROLL / STATIC COVERS</span>
        </div>
        <div class="vertical-work-note">
          <div class="studio-hero">
            <span>VISUAL STRATEGY / AIGC PRODUCTION</span>
            <h3>Commercial<br>Visual Studio</h3>
            <p>为品牌打造从静态视觉到动态广告的完整影像系统。</p>
          </div>
          <div class="studio-marquee" aria-label="精选商业影像封面">
            <svg class="studio-mask studio-mask-top" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0H1440V50C1440 50 1200 100 720 100C240 100 0 50 0 50V0Z"></path>
            </svg>
            <div class="studio-track">
              ${[
                "/assets/mirage-01-cover.webp",
                "/assets/nb-shoes-03.webp",
                "/assets/mirage-dianjing-thumb-04.webp",
                "/assets/charmant-01.webp",
                "/assets/mirage-aigc-tv-cover.webp",
                "/assets/mirage-fashion-thumb-02.jpg",
                "/assets/mirage-01-cover.webp",
                "/assets/nb-shoes-03.webp",
                "/assets/mirage-dianjing-thumb-04.webp",
                "/assets/charmant-01.webp",
                "/assets/mirage-aigc-tv-cover.webp",
                "/assets/mirage-fashion-thumb-02.jpg",
              ].map((image, index) => `
                <figure class="studio-frame studio-frame-${index % 6 + 1}">
                  <img src="${image}" alt="商业影像案例 ${index + 1}" loading="lazy">
                </figure>
              `).join("")}
            </div>
            <svg class="studio-mask studio-mask-bottom" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 100H1440V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z"></path>
            </svg>
          </div>
          <div class="studio-bottom">
            <p>不套模板，不堆风格。以产品气质、场景叙事和广告转化为核心，完成从 KV、AI 分镜到视频成片的统一表达。</p>
            <div class="studio-links">
              <a href="#work">查看项目</a>
              <a href="#contact">预约合作</a>
            </div>
          </div>
        </div>
      </div>
    `;
    section.innerHTML = `
      <div class="vertical-work-grid" aria-hidden="true"></div>
      <div class="motion-sites-bg" aria-hidden="true">
        <video muted autoplay loop playsinline preload="metadata" poster="/assets/mirage-01-cover.jpg">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4" type="video/mp4">
        </video>
        <div class="motion-sites-overlay"></div>
      </div>
      <div class="shell visual-archive-head">
        <p><b>03</b><em>MORE WORKS</em></p>
        <p class="visual-archive-disclaimer">商业项目/日常练习 <small>（承诺均由本人纯AI输出）</small></p>
        <h2>更多作品</h2>
        <span>自动流动的商业视觉作品墙，悬停查看细节，点击放大预览。<i>↘</i></span>
      </div>
      <div class="visual-archive-wall" aria-label="作品流动墙">
        ${archiveRows.map((row, rowIndex) => {
          const loop = [...row, ...row, ...row];
          return `
            <div class="visual-archive-row visual-archive-row-${rowIndex + 1}" style="--duration:66s; --delay:0s;">
              <div class="visual-archive-track">
                ${loop.map(([image, preview], index) => `
                  <button class="visual-archive-tile" type="button" data-preview-src="${preview}" aria-label="打开作品预览 ${rowIndex + 1}-${index + 1}">
                    <img src="${image}" alt="" loading="lazy" draggable="false">
                  </button>
                `).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="shell visual-archive-foot">
        <span>VISUAL SYSTEM / AIGC / TVC / BRAND IMAGE</span>
        <p>从产品广告、品牌视觉到 AI 视频内容，把不同项目以作品库的方式集中呈现。</p>
      </div>
    `;
    anchor.parentNode.insertBefore(section, anchor);

    section.querySelectorAll(".visual-archive-tile").forEach((tile) => {
      tile.addEventListener("click", () => openMedia(tile.dataset.previewSrc));
    });

    const syncArchiveDrift = () => {
      const speed = 40;
      section.querySelectorAll(".visual-archive-track").forEach((track) => {
        const row = track.closest(".visual-archive-row");
        if (!row) return;
        const width = track.scrollWidth || track.getBoundingClientRect().width;
        if (!width) return;
        const duration = Math.max(32, width / speed);
        row.style.setProperty("--duration", `${duration.toFixed(2)}s`);
      });
    };
    requestAnimationFrame(() => {
      syncArchiveDrift();
      window.setTimeout(syncArchiveDrift, 0);
    });
    window.addEventListener("load", syncArchiveDrift, { once: true });
    window.addEventListener("resize", syncArchiveDrift, { passive: true });

    const marquee = section.querySelector(".studio-marquee");
    const track = section.querySelector(".studio-track");
    if (marquee && track && !track.dataset.marqueeReady) {
      track.dataset.marqueeReady = VERSION;
      const SPEED = 0.8;
      let offset = 0;
      let velocity = 0;
      let dragging = false;
      let dragStartX = 0;
      let dragStartOffset = 0;
      let lastX = 0;
      let lastTime = 0;
      const halfWidth = () => track.scrollWidth / 2;
      const wrap = () => {
        const half = halfWidth();
        if (!half) return;
        if (offset <= -half) offset += half;
        if (offset > 0) offset -= half;
      };
      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
      let frameId = 0;
      let marqueeVisible = true;
      const schedule = () => {
        if (frameId || !marqueeVisible || document.hidden || reduceMotion?.matches) return;
        frameId = window.requestAnimationFrame(render);
      };
      const render = () => {
        frameId = 0;
        if (!marqueeVisible || document.hidden || reduceMotion?.matches) return;
        if (!dragging) {
          if (Math.abs(velocity) > 0.1) {
            offset += velocity;
            velocity *= 0.95;
          } else {
            velocity = 0;
            offset -= SPEED;
          }
        }
        wrap();
        track.style.transform = `translate3d(${offset}px,0,0)`;
        schedule();
      };
      if ("IntersectionObserver" in window) {
        const marqueeObserver = new IntersectionObserver((entries) => {
          marqueeVisible = entries.some((entry) => entry.isIntersecting);
          schedule();
        }, { threshold: 0.05 });
        marqueeObserver.observe(marquee);
      }
      document.addEventListener("visibilitychange", schedule);
      reduceMotion?.addEventListener?.("change", schedule);
      marquee.addEventListener("pointerdown", (event) => {
        dragging = true;
        dragStartX = event.clientX;
        dragStartOffset = offset;
        lastX = event.clientX;
        lastTime = performance.now();
        velocity = 0;
        marquee.classList.add("is-dragging");
        marquee.setPointerCapture?.(event.pointerId);
      });
      marquee.addEventListener("pointermove", (event) => {
        if (!dragging) return;
        const now = performance.now();
        const dx = event.clientX - lastX;
        offset = dragStartOffset + (event.clientX - dragStartX);
        velocity = dx / Math.max(1, now - lastTime) * 16;
        lastX = event.clientX;
        lastTime = now;
        wrap();
        track.style.transform = `translate3d(${offset}px,0,0)`;
      });
      const release = (event) => {
        if (!dragging) return;
        dragging = false;
        marquee.classList.remove("is-dragging");
        marquee.releasePointerCapture?.(event.pointerId);
        velocity = Math.max(-18, Math.min(18, velocity));
      };
      marquee.addEventListener("pointerup", release);
      marquee.addEventListener("pointercancel", release);
      schedule();
    }

    const cards = [...section.querySelectorAll(".vertical-work-card")];
    const count = section.querySelector(".vertical-work-count");
    let active = 0;
    const paint = () => {
      cards.forEach((card, index) => {
        let offset = index - active;
        const half = Math.floor(cards.length / 2);
        if (offset > half) offset -= cards.length;
        if (offset < -half) offset += cards.length;
        card.style.setProperty("--offset", offset);
        const abs = Math.min(Math.abs(offset), 4);
        card.style.setProperty("--x", `${offset * 142}px`);
        card.style.setProperty("--z", `${(3 - abs) * 22}px`);
        card.style.setProperty("--rotate", `${offset * -15}deg`);
        card.style.setProperty("--scale", String(1 - Math.min(abs, 3) * 0.105));
        card.style.setProperty("--fade", String(1 - abs * 0.17));
        card.style.zIndex = String(20 - abs);
        card.classList.toggle("is-active", offset === 0);
      });
      if (count) count.textContent = String(active + 1).padStart(2, "0");
    };
    cards.forEach((card, index) => card.addEventListener("click", () => {
      active = index;
      paint();
    }));
    paint();
    let cardsVisible = true;
    if ("IntersectionObserver" in window) {
      const cardsObserver = new IntersectionObserver((entries) => {
        cardsVisible = entries.some((entry) => entry.isIntersecting);
      }, { threshold: 0.08 });
      cardsObserver.observe(section);
    }
    if (cards.length > 1) {
      window.setInterval(() => {
        if (!cardsVisible || document.hidden) return;
        active = (active + 1) % cards.length;
        paint();
      }, 3600);
    }
  };

  const offsetWorkWall = () => {
    let style = document.getElementById("work-wall-offset-r1");
    if (!style) {
      style = document.createElement("style");
      style.id = "work-wall-offset-r1";
      document.head.appendChild(style);
    }
    style.textContent = `
      .visual-archive-wall { transform: translateY(60px); }
      .vertical-work-carousel:has(.visual-archive-wall) {
        padding-top: 176px !important;
      }
      .visual-archive-head { position: relative; }
      .visual-archive-disclaimer {
        position: absolute;
        right: 0;
        bottom: 22px;
        left: auto;
        margin: 0;
        color: rgba(196, 202, 211, 0.36);
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.08em;
        text-align: right;
        transform: translate(417px, 31px);
        filter: brightness(0.8);
        white-space: nowrap;
      }
      .visual-archive-disclaimer small { font-size: 10px; }
      @media (max-width: 680px) {
        .visual-archive-disclaimer { position: static; margin-top: 12px; font-size: 11px; }
        .visual-archive-disclaimer small { font-size: 9px; }
      }
      .strength-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 14px !important;
        max-width: 1500px;
        margin: 0 auto;
      }
      .strength-grid .strength-card { grid-column: span 2; }
      .strength-grid .strength-card:nth-child(1),
      .strength-grid .strength-card:nth-child(2) { grid-column: span 3; }
      .strength-grid .strength-card:nth-child(1)::before,
      .strength-grid .strength-card:nth-child(1)::after {
        content: none !important;
      }
      .strength-skill-video-frame {
        position: absolute;
        top: 62px;
        right: 0;
        left: 0;
        height: 390px;
        padding: 10px;
        overflow: hidden;
        background: #02060c;
        box-shadow: inset 0 0 0 10px #ffffffb3;
      }
      .strength-skill-video-frame video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        background: #02060c;
      }
      .strength-skill-video-frame.is-scale-down video {
        transform: scale(.84);
      }
      @media (min-width: 901px) {
        .strength-grid .strength-card:nth-child(1),
        .strength-grid .strength-card:nth-child(2) {
          width: calc(100% - 18px);
        }
        .strength-grid .strength-card:nth-child(1) { justify-self: start; }
        .strength-grid .strength-card:nth-child(2) { justify-self: end; }
        .strength-grid .strength-card:nth-child(3),
        .strength-grid .strength-card:nth-child(4),
        .strength-grid .strength-card:nth-child(5) {
          height: 558px;
        }
        .strength-grid .strength-card:nth-child(3) .strength-skill-video-frame,
        .strength-grid .strength-card:nth-child(4) .strength-skill-video-frame,
        .strength-grid .strength-card:nth-child(5) .strength-skill-video-frame {
          width: 84%;
          height: 328px;
          right: auto;
        }
        .strength-grid .strength-card:nth-child(3) .strength-skill-video-frame { left: 0; }
        .strength-grid .strength-card:nth-child(4) .strength-skill-video-frame {
          left: 50%;
          transform: translateX(-50%);
        }
        .strength-grid .strength-card:nth-child(5) .strength-skill-video-frame {
          right: 0;
          left: auto;
        }
        .strength-grid .strength-card:nth-child(4) .strength-skill-video-frame {
          width: 88%;
          height: 344px;
        }
        .strength-grid .strength-card:nth-child(3) .strength-skill-video-frame.is-scale-down video,
        .strength-grid .strength-card:nth-child(5) .strength-skill-video-frame.is-scale-down video {
          transform: none;
        }
        .strength-grid .strength-card:nth-child(4) h3,
        .strength-grid .strength-card:nth-child(4) p {
          margin-left: 6% !important;
        }
        .strength-grid .strength-card:nth-child(4) > span:first-child {
          left: 6% !important;
        }
        .strength-grid .strength-card:nth-child(5) h3,
        .strength-grid .strength-card:nth-child(5) p {
          margin-left: 16% !important;
        }
        .strength-grid .strength-card:nth-child(5) > span:first-child {
          left: 16% !important;
        }
      }
      .strength-grid .strength-card:nth-child(2)::before,
      .strength-grid .strength-card:nth-child(2)::after {
        content: none !important;
      }
      .strength-grid .strength-card:nth-child(3)::before,
      .strength-grid .strength-card:nth-child(3)::after,
      .strength-grid .strength-card:nth-child(4)::before,
      .strength-grid .strength-card:nth-child(4)::after,
      .strength-grid .strength-card:nth-child(5)::before,
      .strength-grid .strength-card:nth-child(5)::after {
        content: none !important;
      }
      @media (max-width: 900px) {
        .strength-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        .strength-grid .strength-card,
        .strength-grid .strength-card:nth-child(1),
        .strength-grid .strength-card:nth-child(2) { grid-column: auto; }
        .strength-skill-video-frame { height: 300px; }
        .strength-grid .strength-card:nth-child(3),
        .strength-grid .strength-card:nth-child(4),
        .strength-grid .strength-card:nth-child(5) { height: 480px; }
      }
      @media (max-width: 520px) {
        .strength-grid { grid-template-columns: 1fr !important; }
        .strength-skill-video-frame { height: 265px; }
        .strength-grid .strength-card:nth-child(3),
        .strength-grid .strength-card:nth-child(4),
        .strength-grid .strength-card:nth-child(5) { height: 420px; }
      }
      .case-collaboration .shell:first-child {
        align-items: flex-start !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        gap: 18px !important;
      }
      .case-collaboration h2 {
        margin: 0 !important;
        color: #a8aab2 !important;
        font-size: 28px !important;
        font-weight: 400 !important;
        letter-spacing: 0 !important;
        line-height: 1.25 !important;
        text-align: left !important;
      }
      .partner-tile {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: clamp(170px, 14vw, 250px) !important;
        padding: 0 28px !important;
      }
      .partner-logo {
        display: block;
        width: 100%;
        height: 56px;
        object-fit: contain;
        filter: grayscale(1) brightness(0) invert(.74);
        opacity: .92;
      }
      .partner-logo-baodao {
        filter: none;
        opacity: 1;
      }
      .partner-logo-outdo { transform: scale(1.15); }
      .partner-logo-shuijingfang { transform: scale(1.78); }
      .partner-logo-zhengshantang { transform: scale(1.42); }
      .partner-logo-ic-berlin { transform: translateY(14px) scale(1.18); }
      .hero-showreel { display: none !important; }
      .nav-links button {
        color: rgba(244, 242, 238, 0.56) !important;
        font-size: 15px !important;
        font-weight: 500 !important;
      }
      .nav-links button.active {
        color: rgba(244, 242, 238, 0.56) !important;
        font-weight: 500 !important;
      }
      .nav-links button:hover { color: #ffffff !important; }
      .nav-links sup {
        color: currentColor !important;
        font-size: 9px !important;
      }
      .nav-skills-menu {
        position: fixed;
        width: 144px;
        z-index: 30;
        display: grid;
        grid-template-columns: 1fr;
        min-height: 0;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,.12);
        background: rgba(22, 22, 28, .98);
        box-shadow: 0 14px 26px rgba(0,0,0,.30);
        opacity: 0;
        pointer-events: none;
        transform: translate(0, -8px);
        transition: opacity .22s ease, transform .22s ease;
      }
      .nav-skills-menu.is-open {
        opacity: 1;
        pointer-events: auto;
        transform: translate(0, 0);
      }
      .nav-skills-menu button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        min-height: 32px;
        padding: 0 14px;
        border: 0;
        border-bottom: 1px solid rgba(255,255,255,.06);
        background: transparent;
        color: rgba(244,242,238,.58);
        font: inherit;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: color .2s ease, background-color .2s ease;
      }
      .nav-skills-menu button:last-child { border-bottom: 0; }
      .nav-skills-menu button i {
        width: 8px;
        height: 8px;
        border: 1px solid #d65b12;
        border-radius: 50%;
      }
      .nav-skills-menu button:hover { background: rgba(255,255,255,.045); color: #fff; }
      @media (max-width: 720px) {
        .nav-skills-menu { width: 132px; }
        .nav-skills-menu button { min-height: 30px; font-size: 11px; }
      }
      .case-collaboration .partner-tile {
        transition: transform .28s ease, background-color .28s ease, box-shadow .28s ease, filter .28s ease !important;
      }
      .case-collaboration .partner-tile:hover,
      .case-collaboration .partner-tile:focus,
      .case-collaboration .partner-tile:focus-visible,
      .case-collaboration .partner-tile.is-selected {
        background: #ffffff42 !important;
        box-shadow: 0 0 30px #ffffff24, inset 0 0 0 1px #ffffff3d !important;
        filter: brightness(1.32) contrast(1.12) !important;
        transform: scale(1.12) !important;
        z-index: 4 !important;
      }
    `;
  };

  const restoreStrengthCards = () => {
    const grid = document.querySelector(".strength-grid");
    if (!grid || grid.dataset.skillsVersion === "five-card-video-r8") return;
    const skills = [
      ["01", "品牌系统", "从策略与命名延展至识别、包装与传播物料，让每一次露出保持统一。", "✦"],
      ["02", "AIGC 影像", "建立从创意设定、镜头分镜到生成与后期精修的影像工作流。", "◌"],
      ["03", "视觉整合", "连接平面、动态、空间与数字体验，让创意在不同介质中持续生长。", "◈"],
      ["04", "三维视觉", "结合 C4D 与产品渲染经验，完成建模、材质、灯光与商业视觉构成。", "◇"],
      ["05", "电商视觉", "从详情页、主图到大促页面，统筹 SKU 表达与转化导向的视觉落地。", "▦"],
    ];
    grid.innerHTML = skills.map(([no, title, description, symbol], index) => `
      <article class="strength-card reveal is-visible">
        <span>${no}</span>
        ${index === 0 ? `
          <div class="strength-skill-video-frame">
            <video muted loop playsinline preload="none" poster="/assets/strength-card-video-1-poster.jpg" data-src="/assets/strength-card-video-1.mp4" aria-label="品牌系统展示视频"></video>
          </div>
        ` : index === 1 ? `
          <div class="strength-skill-video-frame">
            <video muted loop playsinline preload="none" poster="/assets/strength-card-video-2-poster.jpg" data-src="/assets/strength-card-video-2.mp4" aria-label="AIGC 影像展示视频"></video>
          </div>
        ` : index === 2 ? `
          <div class="strength-skill-video-frame is-scale-down">
            <video muted loop playsinline preload="none" poster="/assets/strength-visual-integration-r2-poster.jpg" data-src="/assets/strength-visual-integration-r2.mp4" aria-label="视觉整合立体标志细微向左转动视频"></video>
          </div>
        ` : index === 3 ? `
          <div class="strength-skill-video-frame">
            <video muted loop playsinline preload="none" poster="/assets/strength-three-dimension-r2-poster.jpg" data-src="/assets/strength-three-dimension-r2.mp4" aria-label="三维视觉立体标志细微向左转动视频"></video>
          </div>
        ` : index === 4 ? `
          <div class="strength-skill-video-frame is-scale-down">
            <video muted loop playsinline preload="none" poster="/assets/strength-ecommerce-r1-poster.jpg" data-src="/assets/strength-ecommerce-r1.mp4" aria-label="电商视觉立体标志细微向左转动视频"></video>
          </div>
        ` : `<div class="card-symbol">${symbol}</div>`}
        <h3>${title}</h3>
        <p>${description}</p>
        <span class="arrow diagonal" aria-hidden="true">↗</span>
      </article>
    `).join("");
    grid.dataset.skillsVersion = "five-card-video-r8";
  };

  const hydrateStrengthVideo = (video) => {
    if (!video || video.dataset.loaded === "true") return;
    const src = video.dataset.src;
    if (!src) return;
    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);
    video.load();
    video.dataset.loaded = "true";
  };

  const playStrengthVideo = (video) => {
    hydrateStrengthVideo(video);
    video.play?.().catch(() => {});
  };

  const enableLazyStrengthVideos = () => {
    const videos = [...document.querySelectorAll(".strength-skill-video-frame video[data-src]")];
    videos.forEach((video) => {
      if (video.dataset.lazyReady === "strength-r1") return;
      const frame = video.closest(".strength-skill-video-frame");
      frame?.addEventListener("mouseenter", () => playStrengthVideo(video));
      frame?.addEventListener("focusin", () => playStrengthVideo(video));
      video.dataset.lazyReady = "strength-r1";
    });
    if (window.__strengthVideoObserver) {
      videos.forEach((video) => window.__strengthVideoObserver.observe(video));
      return;
    }
    window.__strengthVideoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          playStrengthVideo(video);
        } else {
          video.pause?.();
        }
      });
    }, { threshold: 0.28, rootMargin: "120px 0px" });
    videos.forEach((video) => window.__strengthVideoObserver.observe(video));
  };

  const restorePartnerLogos = () => {
    const track = document.querySelector(".partner-track");
    if (!track || track.dataset.logoVersion === "collage-r1") return;
    const brands = [
      ["new-balance", "New Balance"],
      ["seven", "SEVEN 柒牌"],
      ["septwolves", "SEPTWOLVES 七匹狼"],
      ["kids", "KIDS"],
      ["nsve", "NSVE"],
      ["baodao", "宝岛眼镜"],
      ["oneone", "ONE ONE 侃望"],
      ["yein", "YEIN 魅影"],
      ["synthes-charmant", "SYNTHES EYEZ ｜ CHARMANT"],
      ["shuijingfang", "水井坊"],
      ["zhengshantang", "正山堂"],
      ["leiyunshang", "雷允上"],
      ["outdo", "OUTDO"],
      ["ic-berlin", "ic! berlin"],
    ];
    track.innerHTML = [...brands, ...brands].map(([file, name], index) => `
      <div class="partner-tile" aria-label="合作品牌 ${name}">
        <img class="partner-logo partner-logo-${file}" src="/assets/brand-logos/${file}.png" alt="${name}" loading="${index < brands.length ? "eager" : "lazy"}">
      </div>
    `).join("");
    track.querySelectorAll(".partner-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        track.querySelectorAll(".partner-tile.is-selected").forEach((item) => item.classList.remove("is-selected"));
        tile.classList.add("is-selected");
      });
    });
    track.dataset.logoVersion = "collage-r1";
  };

  const restoreContactQr = () => {
    const badgeIcon = document.querySelector(".footer-badge .badge-card i");
    if (!badgeIcon || badgeIcon.dataset.qrVersion === "wechat-r1") return;
    badgeIcon.className = "contact-qr-slot";
    badgeIcon.innerHTML = `<img src="/assets/contact-wechat-qr.webp" alt="">`;
    badgeIcon.dataset.qrVersion = "wechat-r1";
  };

  const restoreProfilePortrait = () => {
    const portrait = document.querySelector(".portrait-wrap img");
    if (!portrait || portrait.dataset.portraitVersion === "blue-glasses-r2") return;
    portrait.src = "/assets/profile-portrait-blue-glasses.webp";
    portrait.classList.remove("profile-portrait-02");
    portrait.classList.add("profile-portrait-blue-glasses");
    portrait.alt = "个人头像";
    portrait.dataset.portraitVersion = "blue-glasses-r2";
  };

  const enableAboutSkillLinks = () => {
    document.querySelectorAll(".about-skill-list li").forEach((item) => {
      if ((item.textContent || "").trim() !== "C4D三维" || item.dataset.linkReady === "three-dimension-r1") return;
      item.classList.add("is-clickable-skill");
      item.setAttribute("role", "link");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", "打开 C4D 三维二级页面");
      item.addEventListener("click", () => {
        window.location.href = "/three-dimension.html";
      });
      item.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        window.location.href = "/three-dimension.html";
      });
      item.dataset.linkReady = "three-dimension-r1";
    });
  };

  const enableSkillsMenu = () => {
    const nav = document.querySelector(".nav");
    const abilityButton = [...document.querySelectorAll(".nav-links button")]
      .find((button) => button.childNodes[0]?.textContent?.trim() === "能力");
    if (!nav || !abilityButton) return;

    let menu = document.querySelector(".nav-skills-menu");
    if (!menu) {
      menu = document.createElement("div");
      menu.className = "nav-skills-menu";
      menu.setAttribute("aria-label", "能力列表");
      menu.innerHTML = ["AI视频", "AI品牌视觉", "品牌策划", "C4D三维", "电商设计"].map((skill) => (
        `<button type="button" data-skill="${skill}"><i aria-hidden="true"></i>${skill}</button>`
      )).join("");
      document.body.appendChild(menu);
      menu.addEventListener("click", (event) => {
        const item = event.target.closest("button[data-skill]");
        if (!item) return;
        menu.classList.remove("is-open");
        abilityButton.setAttribute("aria-expanded", "false");
        if (item.dataset.skill === "C4D三维") {
          window.location.href = "/three-dimension.html";
          return;
        }
        document.querySelector("#strength")?.scrollIntoView({ behavior: "smooth" });
      });
      document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menu.contains(event.target)) {
          menu.classList.remove("is-open");
          abilityButton.setAttribute("aria-expanded", "false");
        }
      });
    }

    abilityButton.setAttribute("aria-haspopup", "true");
    abilityButton.setAttribute("aria-expanded", menu.classList.contains("is-open") ? "true" : "false");
    if (abilityButton.dataset.skillsMenuReady === VERSION) return;
    abilityButton.dataset.skillsMenuReady = VERSION;
    abilityButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const open = !menu.classList.contains("is-open");
      if (open) {
        const rect = abilityButton.getBoundingClientRect();
        menu.style.top = `${Math.round(rect.bottom + 8)}px`;
        menu.style.left = `${Math.round(rect.left)}px`;
      }
      menu.classList.toggle("is-open", open);
      abilityButton.setAttribute("aria-expanded", String(open));
    }, true);
  };

  const applyLatest = () => {
    restoreVideos();
    prepareFeaturedWorkCards();
    restoreTimeline();
    ensureDetailLinks();
    enablePreviewClicks();
    ensureVerticalWorkCarousel();
    offsetWorkWall();
    restoreStrengthCards();
    enableLazyStrengthVideos();
    restorePartnerLogos();
    restoreContactQr();
    restoreProfilePortrait();
    enableAboutSkillLinks();
    enableSkillsMenu();
    document.querySelectorAll('a[href^="tel:"], [data-phone]').forEach((element) => {
      element.textContent = element.textContent.replaceAll("18072458088", "18072458000");
      if (element.matches('a[href^="tel:"]')) {
        element.href = element.href.replaceAll("18072458088", "18072458000");
      }
    });
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = textWalker.nextNode())) {
      textNode.nodeValue = textNode.nodeValue.replaceAll("18072458088", "18072458000");
    }
  };

  applyLatest();
  window.addEventListener("load", applyLatest);
  [100, 300, 700, 1200].forEach((delay) => window.setTimeout(applyLatest, delay));
})();
