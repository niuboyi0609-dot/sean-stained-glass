let backgrounds = [
  {
    id: "ivory-curtain",
    name: "暖白窗纱与干花",
    group: "window",
    temperature: "warm",
    brightness: "bright",
    contrast: "soft",
    description:
      "暖象牙白微水泥墙面，左侧半透明亚麻纱帘，右侧低矮洞石台和透明玻璃瓶中的一枝干花。",
    light: "午后柔和侧光，墙面出现窗格影和淡淡光斑，背景大面积留白。",
  },
  {
    id: "white-caustics",
    name: "白墙彩影",
    group: "window",
    temperature: "neutral",
    brightness: "bright",
    contrast: "strong",
    description:
      "暖白色干净墙面，浅色窗框和少量室内留白，地面或墙边只有一盆小绿植。",
    light: "明亮自然光穿过主体，在墙面形成清晰彩色投影，主体轮廓明确。",
  },
  {
    id: "classic-gallery",
    name: "古典艺廊墙面",
    group: "window",
    temperature: "neutral",
    brightness: "bright",
    contrast: "medium",
    description:
      "浅米色石灰洗墙，简洁古典线脚，低矮石材基座，空间安静克制。",
    light: "顶部柔和漫射光配合右侧自然光，墙面有轻微层叠阴影。",
  },
  {
    id: "oak-table",
    name: "浅橡木桌面",
    group: "surface",
    temperature: "warm",
    brightness: "medium",
    contrast: "medium",
    description:
      "浅橡木桌面或石质平台，米灰色亚麻布、两本素色旧书、小型石陶碗。",
    light: "百叶窗平行光影落在桌面，木纹和石材细节真实。",
  },
  {
    id: "marble-plinth",
    name: "洞石台面静物",
    group: "surface",
    temperature: "neutral",
    brightness: "medium",
    contrast: "medium",
    description:
      "天然洞石平台，浅灰石板背景，旁边只有一块小石头和一枝枯叶。",
    light: "侧后方硬光，玻璃主体形成清楚但彩色的投影，石材颗粒真实，主体不产生纯黑轮廓影。",
  },
  {
    id: "travertine-macro",
    name: "洞石微距墙",
    group: "surface",
    temperature: "neutral",
    brightness: "medium",
    contrast: "strong",
    description:
      "天然洞石或细灰泥墙，墙面颗粒、凹凸和自然色差清楚，远处只有深色花器和干枝。",
    light: "侧后方柔光让主体色块和铅线清楚，真实阴影自然，不产生镜面高光和透明发光。",
  },
  {
    id: "cream-arch",
    name: "奶油色拱形墙洞",
    group: "architecture",
    temperature: "warm",
    brightness: "bright",
    contrast: "medium",
    description:
      "奶油色石灰洗墙和高大拱形墙洞，远景露出米白色弧形沙发一角，地面为浅色石材。",
    light: "暖光从右侧照入，墙面有大块几何光斑。",
  },
  {
    id: "stone-corridor",
    name: "石材走廊光影",
    group: "architecture",
    temperature: "neutral",
    brightness: "dark",
    contrast: "strong",
    description:
      "暖灰色石材走廊或拱形墙洞，粗糙石墙、木质门框和低矮石台，空间简洁。",
    light: "一束斜射日光穿过走廊，墙面和地面保留长条光影。",
  },
  {
    id: "wood-slat-garden",
    name: "木格栅与绿植",
    group: "nature",
    temperature: "green",
    brightness: "medium",
    contrast: "medium",
    description:
      "暖沙色灰泥墙、竖向木格栅、深绿色橄榄枝和陶土花盆，绿植轻微虚化。",
    light: "柔软但有方向感的午后阳光，叶片影子落在墙面。",
  },
  {
    id: "forest-fence",
    name: "林地木栅栏",
    group: "nature",
    temperature: "green",
    brightness: "medium",
    contrast: "medium",
    description:
      "木质栅栏、苔藓、落叶、灌木和树木背景，自然绿色和暖棕色为主。",
    light: "斑驳树影落在主体附近，环境层次丰富但不过度复杂。",
  },
  {
    id: "classic-courtyard",
    name: "古典庭院石墙",
    group: "nature",
    temperature: "warm",
    brightness: "bright",
    contrast: "medium",
    description:
      "浅色洞石庭院墙面和石板地面，远处有虚化柏树、橄榄枝和陶土花盆。",
    light: "午后暖阳斜射，墙面出现建筑长影，氛围安静高级。",
  },
  {
    id: "coastal-window",
    name: "海岸窗景",
    group: "nature",
    temperature: "cool",
    brightness: "bright",
    contrast: "soft",
    description:
      "浅色窗台、贝壳、小石头和海玻璃，窗外是模糊海面、天空和远处海岸线。",
    light: "蓝白色自然光，背景清爽通透。",
  },
  {
    id: "boucle-nook",
    name: "羊羔绒阅读角",
    group: "interior",
    temperature: "warm",
    brightness: "bright",
    contrast: "soft",
    description:
      "米白色羊羔绒单人椅、浅胡桃木边桌、陶瓷花瓶、两三本精装书和亚麻窗帘。",
    light: "左侧柔和自然光，地面有编织地毯，背景轻微虚化。",
  },
  {
    id: "studio-workshop",
    name: "艺术家工作室",
    group: "interior",
    temperature: "warm",
    brightness: "medium",
    contrast: "medium",
    description:
      "木质画架、素描纸、雕刻工具和浅色工作台只作为虚化背景，不出现第二个人像。",
    light: "侧窗自然光，空间有轻微手工创作痕迹和真实层次。",
  },
  {
    id: "starry-window",
    name: "星夜幻想窗边",
    group: "dramatic",
    temperature: "cool",
    brightness: "dark",
    contrast: "strong",
    description:
      "深蓝紫窗边，少量金色光点和虚化树枝，环境简洁而神秘。",
    light: "主体保持明亮，背景使用冷色低光，局部出现柔和星光。",
  },
  {
    id: "pale-museum",
    name: "浅色展厅留白",
    group: "surface",
    temperature: "neutral",
    brightness: "bright",
    contrast: "soft",
    description:
      "浅米色展厅墙面，低矮白色石台，极简空间只留一条建筑线条。",
    light: "柔和顶部漫射光，墙面干净，主体和背景清晰分离。",
  },
];

let backgroundLibraryRules = {
  lightSuffix:
    "玻璃主体产生的影子、投影、倒影和焦散必须有颜色，不能是纯黑、深灰或灰黑色实心剪影。",
  defaultSource: "pinterest:niuboyi/背景",
};

let bookendBackgrounds = [];

let backgroundBatchRules = {
  batch: {
    title: "【七组场景批量生成 · 全局规则只读一次】",
    intro:
      "下面是同一主体的 7 个独立场景。请先完整阅读一次全局规则，再一次性生成 7 组、每组 3 张，共 21 张独立图片；不要为每组重复解释或复述全局规则。",
    closing:
      "七组必须使用同一主体、同一彩色玻璃材质和同一挂链数量，只改变场景、道具、光线、机位与构图。每组都必须输出 3 张独立图片，不要拼图，不要少生成。",
  },
};

const angleSlots = [
  {
    id: "hero",
    name: "正面主视觉",
    candidates: [
      {
        name: "正面平视",
        text: "相机与主体中心同高，0 度正面平视，85mm 商品镜头。",
        composition: "主体完整居中，占画面约 45%，背景留出足够负空间。",
      },
      {
        name: "左前方三分之四",
        text: "相机移到主体左前方约 30 度，与主体中心同高，85mm 镜头。",
        composition: "主体位于画面中央偏右，完整显示平面图案和铅线连接，不显示玻璃断面厚度。",
      },
      {
        name: "右前方三分之四",
        text: "相机移到主体右前方约 40 度，略微仰视，85mm 镜头。",
        composition: "主体位于画面中央偏左，保留自然透视，但绝对不显示玻璃侧面厚度或立体层次。",
      },
    ],
  },
  {
    id: "top",
    name: "高角度俯拍",
    candidates: [
      {
        name: "25 度高角度",
        text: "相机位于主体右上方约 25 度，50mm 镜头向下拍摄。",
        composition: "主体位于画面中央略偏左，完整显示挂链或顶部结构。",
      },
      {
        name: "85 度垂直俯拍",
        text: "相机位于主体正上方，接近 85 至 90 度垂直向下，50mm 镜头。",
        composition: "主体平放或斜靠在台面上，顶部结构完整，只保留少量桌面边缘。",
      },
    ],
  },
  {
    id: "low",
    name: "低角度仰拍",
    candidates: [
      {
        name: "15 度低角度",
        text: "相机位于主体下方约 15 度，35mm 环境镜头向上拍摄。",
        composition: "主体放在画面上方三分之一，顶部结构或挂链向上延伸。",
      },
      {
        name: "10 度低机位",
        text: "相机低于主体中心约 10 度，50mm 镜头轻微仰拍。",
        composition: "主体保持完整，墙面和背景保留大面积留白。",
      },
    ],
  },
  {
    id: "macro",
    name: "近景微距",
    candidates: [
      {
        name: "100mm 微距",
        text: "100mm 微距镜头，距离主体约 25 至 40 厘米，焦点落在主体中心细节。",
        composition: "主体占画面 65% 至 80%，允许轻微裁切，背景完全虚化。",
      },
      {
        name: "85mm 近景",
        text: "85mm 镜头近距离拍摄，主体占画面约 70%。",
        composition: "保留主体主要识别特征，背景道具只出现模糊轮廓。",
      },
    ],
  },
  {
    id: "hand",
    name: "手提展示",
    candidates: [
      {
        name: "单手提挂链",
        text: "一只手从画面右下角进入，只用手指轻轻捏住其中一条挂链的中上段，另一条挂链保持独立分开，85mm 镜头。",
        composition: "主体完整悬垂，两条挂链不并拢、不交叉、不连接，手部只占画面小部分，背景保持虚化。",
      },
      {
        name: "手指轻提挂链",
        text: "手指从画面侧上方进入，只轻捏其中一条独立挂链或该链条自己的圆环，不能用整只手掌托住主体，也不能把两条挂链捏在一起。50mm 镜头。",
        composition: "主体完整垂挂，两条挂链全程保持分开，最下方轮廓完全可见，手部只占很小面积，不遮挡主体边缘。",
      },
    ],
  },
  {
    id: "light",
    name: "光影与倒影",
    candidates: [
      {
        name: "墙面彩色倒影",
        text: "相机正面或侧前方约 30 度，主体悬挂在浅色墙前，使用侧后方自然光。",
        composition:
          "墙面出现清晰的彩色透光投影或彩色轮廓倒影，倒影必须带主体本身的颜色和光晕，不是黑色或灰黑色剪影，倒影不盖过主体。",
      },
      {
        name: "逆光轮廓",
        text: "相机面向窗户，主体处于逆光位置，85mm 镜头。",
        composition: "玻璃平面整体略微变亮，背景高光柔和，主体内部仍然清楚；不能出现强调厚度的边缘发光或立体轮廓光。",
      },
    ],
  },
  {
    id: "wide",
    name: "环境大景",
    candidates: [
      {
        name: "三分线环境图",
        text: "35mm 或 50mm 环境镜头，相机距离主体更远，主体位于左侧三分线。",
        composition: "右侧保留完整环境空间，背景有前中后景层次。",
      },
      {
        name: "右侧三分线",
        text: "50mm 镜头，相机与主体中心同高或略低，主体位于右侧三分之一处。",
        composition: "左侧保留大面积墙面、植物或室内空间，环境自然不杂乱。",
      },
    ],
  },
];

const timeOfDayPresets = [
  {
    id: "morning",
    name: "早上",
    weight: 30,
    text: "早上 6:30 至 8:30，低角度、清透柔和的晨光，空气干净，阴影较长但轻，整体清爽安静。",
  },
  {
    id: "noon",
    name: "中午",
    weight: 25,
    text: "中午 11:30 至 13:30，高角度明亮日光，光线充足清晰，阴影较短，颜色真实自然，不过曝。",
  },
  {
    id: "afternoon",
    name: "下午",
    weight: 30,
    text: "下午 14:00 至 16:30，温暖的斜射阳光，光线方向明确，空间层次和材质纹理清楚。",
  },
  {
    id: "sunset",
    name: "夕阳 / 黄昏",
    weight: 15,
    text: "夕阳黄昏时段，低角度暖金色余光与轻微蓝调环境光，阴影变长，氛围柔和浪漫但主体仍清晰。",
  },
];

const shootingStylePresets = [
  {
    id: "natural-bokeh-hero",
    name: "自然散景主视觉",
    text:
      "使用中长焦透视、浅景深自然光实拍，主体占画面约40%至55%，主体边缘和彩色玻璃细节最清晰。背景与主体保持明显距离，只保留大面积柔和绿色、树木、草地或花园散景，背景虚化约70%至85%，不出现第二个抢眼主体。",
    composition:
      "主体居中或轻微偏离中心，挂链从上向下形成竖向引导线，上方和左右保留呼吸空间，画面干净但能看出真实自然环境。",
  },
  {
    id: "window-lifestyle",
    name: "窗边生活实拍",
    text:
      "采用正面或侧前方15至30度视角，主体挂在窗前或窗边，使用自然侧逆光照亮彩色玻璃。主体占画面约35%至50%，背景是浅景深窗户、花器、雏菊或室内软装，虚化约65%至80%，整体像真实居家生活照片。",
    composition:
      "挂链、吸盘或窗框保持清楚但不过度抢眼，主体完整悬挂，窗边道具只作为低对比陪衬，不能遮挡主体轮廓。",
  },
  {
    id: "garden-side-light",
    name: "花园侧光实拍",
    text:
      "采用侧前方15至30度视角和方向明确的自然侧光，主体占画面约40%至55%。背景为花园、灌木、草地或森林，位于主体后方约3至8米，使用浅景深形成柔和分散散景，保留绿色和暖棕色层次。",
    composition:
      "主体位于中央或三分线交点，挂链完整可见，前景不增加额外道具，背景只有模糊自然植物，强调玻璃颜色在日光下的饱和度。",
  },
  {
    id: "macro-detail",
    name: "近景微距细节",
    text:
      "使用100mm微距感近景，相机距离主体较近，主体占画面约60%至80%，焦点落在玻璃色块、铅线、链条连接或手工焊点。背景完全虚化，只保留颜色和明暗块面，不出现任何清楚背景物件。",
    composition:
      "允许轻微裁切主体边缘，但必须保留主体主要识别特征，画面重点是玻璃质感、颜色分区和真实手工细节，不能变成纯背景散景图。",
  },
  {
    id: "backlit-glow",
    name: "逆光透光展示",
    text:
      "相机面向窗户或明亮背景，主体处于逆光或侧逆光位置，主体占画面约40%至55%。光线让彩色玻璃保持实体饱和，只产生有限透光和柔和明暗层次，不能过曝，不能把彩色区域洗成白色。",
    composition:
      "主体完整清楚，背景保持大面积浅色或自然虚化，不能在主体边缘制造厚度光、透明发光或水晶折射。",
  },
  {
    id: "seasonal-warm-bokeh",
    name: "季节暖光散景",
    text:
      "采用50至85mm中长焦感、浅景深和暖色自然光或节日环境光，主体占画面约40%至55%。背景使用暖色小灯、窗台、节日软装或暖色树影，灯光形成柔和圆形散景，但不出现鬼脸、文字或额外节日主体。",
    composition:
      "主体位于中心略偏上或三分线，暖色灯光只作为背景光点，不能压过主体，也不能在主体后方产生纯黑轮廓。",
  },
  {
    id: "environment-third-line",
    name: "环境三分线空间图",
    text:
      "采用35至50mm环境镜头感，相机与主体中心同高或略低，主体占画面约25%至35%，背景保留前中后景层次。背景保持浅景深但能辨认空间类型，只在主体附近保留2至3个低对比道具。",
    composition:
      "主体放在左侧或右侧三分线，另一侧保留完整空间，环境自然不杂乱，不能用家具或植物遮挡主体，最适合表现真实居家尺寸和悬挂位置。",
  },
];

function selectTimeOfDay(random) {
  if (elements.timeSelect.value !== "random") {
    return (
      timeOfDayPresets.find((item) => item.id === elements.timeSelect.value) ||
      timeOfDayPresets[0]
    );
  }
  const totalWeight = timeOfDayPresets.reduce((sum, item) => sum + (item.weight || 0), 0);
  let cursor = random() * totalWeight;
  for (const item of timeOfDayPresets) {
    cursor -= item.weight || 0;
    if (cursor <= 0) return item;
  }
  return timeOfDayPresets[0];
}

function backgroundFingerprint(background) {
  const signature = String(background.signature || "").trim().toLowerCase();
  if (signature) return signature;
  const imageKey = String(background.imageUrl || "").trim().toLowerCase();
  if (imageKey) return imageKey;
  return [background.name, background.description, background.light]
    .map((value) => String(value || "").trim().toLowerCase())
    .join("|");
}

function normalizeBackgroundItem(item, { lightSuffix, defaultSource }) {
  const light = String(item.light || "自然光柔和但有方向，背景低对比，主体保持最清晰。")
    .replace(lightSuffix, "")
    .replace(/\s+/g, " ")
    .trim();
  return {
    id: item.id || `pinterest-${Date.now()}-${backgrounds.length + 1}`,
    name: item.name || `Pinterest 背景 ${backgrounds.length + 1}`,
    group: item.group || "pinterest",
    temperature: item.temperature || "neutral",
    brightness: item.brightness || "medium",
    contrast: item.contrast || "medium",
    description: item.description || "Pinterest 收藏背景，保留真实空间、简洁道具和自然光。",
    light: light
      ? `${light}${light.includes("玻璃主体产生的影子") ? "" : ` ${lightSuffix}`}`
      : lightSuffix,
    tags: Array.isArray(item.tags) ? item.tags.filter(Boolean) : [],
    signature: item.signature || "",
    imageUrl: item.imageUrl || "",
    sourceUrl: item.sourceUrl || "",
    source: item.source || defaultSource,
    prompt: item.prompt || "",
    promptSource: item.promptSource || "",
  };
}

function mergePinterestBackgrounds(items, rules = {}) {
  backgroundLibraryRules = {
    ...backgroundLibraryRules,
    ...rules,
  };
  const incoming = [];
  const known = new Set();
  for (const item of items || []) {
    const normalized = normalizeBackgroundItem(item, backgroundLibraryRules);
    const key = backgroundFingerprint(item);
    if (!key || known.has(key)) continue;
    incoming.push(normalized);
    known.add(key);
  }
  if (incoming.length >= 7) {
    backgrounds = incoming;
  } else {
    const existing = new Set(backgrounds.map(backgroundFingerprint).filter(Boolean));
    for (const item of incoming) {
      const key = backgroundFingerprint(item);
      if (!existing.has(key)) {
        backgrounds.push(item);
        existing.add(key);
      }
    }
  }
  return incoming.length;
}

function mergeBookendBackgrounds(items, rules = {}) {
  const normalized = [];
  const known = new Set();
  for (const item of items || []) {
    const next = normalizeBackgroundItem(item, {
      ...backgroundLibraryRules,
      ...rules,
    });
    const key = backgroundFingerprint(next);
    if (!key || known.has(key)) continue;
    normalized.push(next);
    known.add(key);
  }
  if (normalized.length >= 7) {
    bookendBackgrounds = normalized;
  }
  return normalized.length;
}

async function syncPinterestBackgrounds() {
  try {
    const response = await fetch("/backgrounds.runtime.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const added = mergePinterestBackgrounds(payload.items, payload.rules);
    if (added && currentAnalysis && !isBookendProduct()) {
      generateResults({ avoidPreviousRound: true });
    }
    if (added) showToast(`已载入紧凑背景库 ${added} 条`);
    return payload;
  } catch (error) {
    try {
      const response = await fetch("/api/pinterest-backgrounds", { cache: "no-store" });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      const added = mergePinterestBackgrounds(payload.items, payload.rules);
      if (added && currentAnalysis) generateResults({ avoidPreviousRound: true });
      if (added) showToast(`已从本地接口同步 ${added} 条背景`);
    } catch (apiError) {
      try {
        const response = await fetch("/pinterest-backgrounds.json", { cache: "no-store" });
        const payload = await response.json();
        const added = mergePinterestBackgrounds(payload.items);
        if (added && currentAnalysis) generateResults({ avoidPreviousRound: true });
        if (added) showToast(`已载入背景源库 ${added} 条`);
      } catch {
        console.warn("Pinterest background sync failed", error, apiError);
      }
    }
  }
}

async function syncBookendBackgrounds() {
  try {
    const response = await fetch("/bookend-backgrounds.runtime.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const added = mergeBookendBackgrounds(payload.items, payload.rules);
    if (added && currentAnalysis && isBookendProduct()) {
      generateResults({ avoidPreviousRound: true });
    }
    if (added) showToast(`已载入书档专用背景库 ${added} 条`);
    return payload;
  } catch (error) {
    console.warn("Bookend background sync failed", error);
  }
}

async function loadBackgroundBatchRules() {
  try {
    const response = await fetch("/background-prompt-rules.json", { cache: "force-cache" });
    if (!response.ok) return;
    const payload = await response.json();
    backgroundBatchRules = {
      ...backgroundBatchRules,
      ...payload,
      batch: {
        ...backgroundBatchRules.batch,
        ...(payload.batch || {}),
      },
    };
  } catch {
    // Keep the built-in defaults when the optional rules file is unavailable.
  }
}

const promptLibrary = {
  material: [
    {
      name: "玻璃材质总控",
      prompt:
        "严格参考图二这种传统手工彩色玻璃，不是水晶，也不是树脂。视觉特征必须是薄平板玻璃，表面哑光或轻微磨砂，绝大多数区域为乳白、粉彩、实色或半透明磨砂玻璃，颜色由玻璃本身着色。主体轮廓内部原本会空着、留白或透明的区域，必须全部替换成白色、乳白、象牙白或浅灰实体玻璃片，不能用透明玻璃，不能镂空，不能让背景从主体内部透出。主体整体必须保持一个连续、完整的玻璃轮廓，不得被切成无数独立小玻璃片。内部可以用较粗、连续、黑色或深灰色的哑光铅线做颜色分区和图案轮廓，但这些线条只能服务于一个完整主体，不能产生散落的小玻璃块、随机三角形玻璃、放射状裂片、碎渣或马赛克碎裂感。挂链、吊线、顶部圆环和金属连接点必须完整保留或按图二继承，不能消失、断开或悬空。挂链数量必须严格以产品类型和图一为准：图一只有两条时，最终只能有两条；图一只有一条时保持一条；图一没有挂链但本轮属于挂饰、Suncatcher、墙面悬挂装饰或悬挂商品摄影时，默认补齐两条独立长挂链；书挡、摆件、桌面装饰或用户明确不要挂链时不添加。不得增加第三条、背链、侧链、备用链、装饰链或额外金属线。表面最多只有柔和窗光，不能出现亮白高光、镜面反射、透明切面、边缘发光、内部发光或彩虹折射。玻璃可以小面积透光，但透光后仍保持乳浊和实体颜色，背景只能隐约透出，不能整件透明。允许有轻微手工拼接误差和不完全一致的颜色，像普通平板艺术玻璃，而不是光学玻璃。不要果冻、软糖、树脂滴胶、亚克力、水晶、冰晶、宝石、琉璃摆件、厚玻璃、玻璃砖、3D 玻璃雕刻和透明发光材质。生成3张。",
    },
    {
      name: "填满颜色不留白",
      prompt:
        "完整保留主体轮廓、姿态、比例和背景，只修正颜色填充。主体轮廓内所有区域必须用玻璃片填满，不留透明空洞，不露出背景。原本为白色、空白、间隔或负形的区域，统一使用白色、乳白、象牙白或浅灰实体玻璃，而不是透明玻璃。彩色区域使用乳白、粉彩或实体彩色玻璃片。参考图二那种磨砂平板玻璃，颜色本身是完整实心色，透光只是让颜色略亮，不会变成透明，也不会产生立体厚度。每个色块边界干净，颜色分区清楚，不额外增加颜色，不改变原有颜色分布。不要水晶式透明、冰晶、宝石、果冻、软糖或透明树脂。生成3张。",
    },
    {
      name: "高饱和玻璃颜色",
      prompt:
        "完整保留主体图案、色相体系和颜色分区，只提高玻璃颜色饱和度和颜料密度。所有彩色玻璃明显更浓、更鲜、更饱满，深色主色必须保留可辨认色相和中间明度，可以更深但不能压成纯黑；浅色区域也必须保留清楚的颜色倾向，不能变白或灰白。白色、乳白和象牙白区域继续作为白色存在，不要被整体染色。不能被逆光、窗光或曝光冲淡，不能粉灰、褪色、雾蒙蒙或像半透明水彩。颜色鲜艳但不霓虹、不荧光、不 HDR，并保持哑光实体平板玻璃质感。生成3张。",
    },
    {
      name: "铅线与焊点",
      prompt:
        "完整保留构图、主体形状、颜色分区、挂链数量和挂链位置，只强化图二那种传统彩色玻璃的黑色或深灰哑光铅线。每片独立玻璃都必须有完整闭合的边线，整体铅线比普通线稿更粗、更连续，像真的金属条包住玻璃片。图一只有两条挂链时只能保留两条，不能因为强化结构而复制出更多链条。挂链、吊线和圆环要通过真实焊点牢固连接在主体顶部，不能消失。连接处有真实手工焊点，玻璃铅线没有亮面反射，不是水晶切面。线条要清楚分割玻璃，但不能粗重到完全遮盖花瓣、叶片等细节。生成3张。",
    },
    {
      name: "薄平板玻璃与连续整体",
      prompt:
        "完整保留主体图案、颜色、背景、挂链数量和挂链结构，只强化“主体是一个完整连续的薄平板玻璃整体”。不同颜色之间必须有清楚、连贯的铅线分区和大块色区边界，不能把主体切成一堆独立小玻璃片，也不能像一整块透明玻璃上贴图案或画线。轮廓内的空白和负形区域也必须由白色、乳白、象牙白或浅灰实体玻璃填满，不能留下透明空洞。挂链和圆环属于独立金属五金，不是玻璃片，不能被连续整体规则删掉，也不能被复制成额外链条。玻璃表面保持平直、哑光、轻微磨砂，不显示厚重断面，不产生 3D 雕塑感，不增加底座。不要水晶切面、冰晶棱角、透明宝石轮廓、玻璃砖、果冻或软糖质感。生成3张。",
    },
    {
      name: "修复塑料与树脂感",
      prompt:
        "完整保留构图、颜色、背景以及现有挂链、吊线、圆环和挂链数量，只把当前材质修正为传统彩色铅条镶嵌的薄平板玻璃。去掉塑料、树脂、亚克力、亮面涂层、果冻、软糖和水晶质感，也去掉冰晶、宝石和 3D 玻璃雕刻感。轮廓内的透明区域全部改成白色、乳白、象牙白或浅灰实体玻璃。增加乳白或实体彩色玻璃片、哑光表面、轻微磨砂颗粒、少量锤纹和黑色哑光焊铅。图一只有两条挂链时只能保留两条，不得新增第三条或任何装饰链。挂链必须继续与主体顶部物理连接，不能丢失。玻璃表面不能光滑发亮，颜色必须实在，窗光只让色块轻微变亮，不出现卡通高光、镜面反射和全透明折射。生成3张。",
    },
    {
      name: "主体彩色投影与倒影",
      prompt:
        "只有主体透光产生的影子、墙面投影和倒影带主体本身的低饱和颜色，接近图二那种柔和彩色玻璃投影，不能是黑色剪影，也不能是高饱和、发光、霓虹或水晶折射。建筑、家具、植物、窗框和其他背景物件的光影保持正常真实，不做彩色化。投影边缘柔和但有清楚方向，不能盖过主体。生成3张。",
    },
    {
      name: "玻璃有限透光",
      prompt:
        "完整保留主体外形和颜色分区，只增强传统彩色玻璃的有限透光。自然光从背后或侧后方照射时，乳白和浅色区域可以略亮、深色区域保持沉稳，但白色区域仍必须是磨砂、乳浊、实体白色玻璃，不能变成透明玻璃。整片玻璃保持实体色，不会变得清澈透明。不要边缘高光，不要色散，不要镜面反射，不要内部发光，不要发光特效，不要过曝，不要 HDR，不要人工霓虹光，不要水晶折射和宝石光效。生成3张。",
    },
    {
      name: "商品摄影玻璃质感",
      prompt:
        "完整保留主体、构图、挂链数量和挂链位置，只提升商品摄影中的传统手工彩绘玻璃质感。真实相机实拍，85mm 镜头，浅景深，主体边缘清晰，背景轻微虚化。挂链、圆环和吊线必须完整可见并自然连接到主体顶部，金属光泽参考图二但不能消失或悬空。图一只有两条挂链时，画面只能出现两条，不能新增背链、侧链、装饰链或备用链。玻璃表现为薄平板玻璃拼片，表面哑光或微磨砂，颜色乳白、粉彩或实色，只有柔和窗外光，不出现玻璃镜面高光。黑色焊铅为哑光材质。画面不过度锐化，不要果冻、软糖、塑料、3D 渲染、水晶折射、冰晶和宝石光效。生成3张。",
    },
  ],
  subject: [
    {
      name: "锁定身体范围与底部完整",
      prompt:
        "严格匹配图一已经显示出的身体范围，不得自行向下扩展。若图一是头像、胸像、半身雕塑或只到胸部、肩部的构图，结果必须保持完全相同的身体范围，只出现同一范围的头、颈、肩、胸和服饰；不得增加腹部、腰、胯、双腿、脚、地面或更长的身体，不得把胸像扩展成半身像、七分身或全身像。主体最下方必须有明确收尾，通过服饰收口、布料折返、雕塑底座、轮廓闭合或主体下方的背景留白完整结束。主体不能与画面底边相交后继续延伸，不能被画面裁切，也不能看起来还能继续向下扩图。主体下方保留少量可见背景，确保照片底部是完整结束的。",
    },
    {
      name: "抽象灵感提取",
      prompt:
        "把上传图片只作为抽象灵感，不要复刻原图，不保留原图的具体身份、外形、剪影、姿势、服装、配饰、构图和配色。只提取题材大类、情绪氛围、材质风格、色彩关系、文化类型和艺术语言，并删除所有可能让人认出原图的独特特征。",
    },
    {
      name: "原创主体生成",
      prompt:
        "根据抽象灵感重新创作一个完全原创的主体。大幅改变外形、轮廓、剪影、脸型、五官、表情、眼神、发型、姿势、身体朝向、服装、配饰、颜色分布、背景、机位和构图，不属于任何真实人物或已有角色。生成3张差异明显的方案，每张都单独输出。",
    },
    {
      name: "改变主体颜色",
      prompt:
        "完整保留当前主体的外形、轮廓、姿势、脸部、材质、铅线和装饰结构，只改变颜色设计。允许彻底更换原有色系，不只加深或减淡原来的颜色。重新规划主色、辅助色和点缀色，改变每种颜色所在的区域和面积关系，不要沿用上一版颜色分布。可以使用互补色、对比色、三色配色或高反差配色，颜色要大胆、鲜艳、极致，但仍然属于同一件玻璃作品。生成3张。",
    },
    {
      name: "大胆极致换色",
      prompt:
        "完整保留主体外形、轮廓、姿势、人脸、材质、挂链和所有结构，只做大胆换色。禁止只做同色系明暗变化，必须主动跨色系重构配色。若原主体以红色为主，至少给出绿色、蓝色、黄色、紫色等完全不同色系的方向，不得三张都停留在红、橙、粉附近。优先使用红绿互补、蓝橙互补、紫黄互补或三色高反差组合，让不同方案一眼就能看出色系差异。每个方案都要重新规划主色、辅助色、点缀色及其面积比例，颜色浓郁、鲜艳、有玻璃颜料密度。白色和乳白可以作为高光或边界点缀，但不能把整个主体洗成浅色。保持哑光实体平板玻璃和黑色哑光铅线，不改变造型、结构、姿态、背景和材质。生成3张差异极大的独立方案。",
    },
    {
      name: "改变主体姿势",
      prompt:
        "完整保留当前主体的面部、颜色和识别特征，只改变姿势、动作、身体朝向和空间方向。重新设计身体朝向、头部角度、视线、手臂、腿部、翅膀、尾巴或装饰走向。整体剪影必须与上一版和参考图明显不同。生成3张。",
    },
    {
      name: "重塑面部与识别特征",
      prompt:
        "完整保留当前主体的颜色、姿势和整体结构，只重新设计面部与识别特征。改变脸型、五官比例、眼睛形状、眼神、鼻子、嘴巴、表情、年龄感、发型和头部装饰。不要参考任何真实人物或已有角色，不要让面部与参考图相似。生成3张。",
    },
    {
      name: "保持风格类型只换设计",
      prompt:
        "把上传图片作为唯一风格母版，严格保持材质风格、色彩风格、文化风格、主体类型、艺术语言和装饰规律不变，只重新设计具体身份、脸型、五官、表情、姿势、服装、配饰和局部装饰组合。新主体与参考图明显不同，但仍然属于同一风格和同一类型。生成3张。",
    },
    {
      name: "降低相似度",
      prompt:
        "当前结果仍然过于接近参考图。大幅改变主体剪影、姿势、头部方向、脸部结构、服装、装饰、颜色分布、背景、道具、机位和构图。不要保留参考图的标志性装饰、独特轮廓、相同构图、相同姿势或相同配色方案，只保留抽象的情绪、题材和精神方向。生成3张。",
    },
    {
      name: "主体负面要求",
      prompt:
        "不要复刻参考图，不要相似剪影，不要相同姿势，不要相同构图，不要相同配色，不要相同面部，不要名人脸，不要已有角色，不要品牌标识，不要商标，不要 logo，不要签名，不要水印，不要额外主体，不要复杂装饰，不要破损，不要瑕疵。",
    },
  ],
};

const bookendPromptLibrary = [
  {
    name: "书挡主体轮廓与木质连接结构",
    prompt:
      "本轮产品是真实可售卖的书挡，不是挂饰，也不是完整矩形玻璃画。彩色主体必须是独立异形平面玻璃图案，外轮廓严格跟随图案本身，例如翅膀、月神蛾、玫瑰拱窗、海浪、龙与剑、猫狗剪影或花卉外形。主体边缘必须用黑色或深灰哑光线条完整勾勒，材质与挂链款完全相同。彩色主体必须保持为一个完整、连续的2D玻璃整体，内部允许有连贯的图案分色、描边、羽毛线、花瓣线和身体分区，但这些线条必须服务于整体造型，不能把主体切成一堆独立小玻璃片，不能出现随机碎玻璃、碎片、放射状碎块、散落碎渣或马赛克式碎裂感。主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构，也不能在主体与木座的空隙里补玻璃。主体只能通过自身连续的外轮廓直接连接木质底座：主体内侧边缘直接贴合、插入或嵌入竖向木板的窄槽，并用黑色或深灰铅线包边形成真实接触；横向底脚承托主体底部。木质底座必须是清楚的深胡桃木L形结构：竖向木板与横向底脚同时存在，竖向木板沿主体内侧上升，覆盖主体可见高度约60%至85%，横向底脚向桌面延伸并承担稳定作用。所有连接处必须有真实接触、槽位和阴影，不能悬空。",
  },
  {
    name: "成对书挡、书本与艺术书名",
    prompt:
      "默认生成一对左右镜像的同主题书挡，但必须是两个彼此独立的书挡，每个书挡各有自己的竖向木板和横向底脚，不能共用一个连续底座，也不能做成中间一只主体加两侧装饰木块的结构。左侧书的左侧书挡：主体位于竖板外侧，主体内侧边缘直接贴合、连接或插入左侧书挡自己的竖板；右侧书挡反向镜像，主体位于竖板外侧。两块竖板朝内夹住书本，主体朝外展开，2至4本精装书位于两块竖板之间。主体不能放在书本正前方中央，也不能依靠一根中央透明立柱站立。书本必须有真实厚度、书脊、纸张边缘和重量感，书脊可露出简短、清楚的英文艺术书名或装饰性书名，例如 The Art of Nature、Forest Tales、Moon Garden、Silent Bloom，文字要像真实书脊印刷，不能乱码、水印、品牌标志或大面积营销文字。单只书挡也必须由一个竖向木板、一个横向底脚和一侧书本组成，主体直接连接自己的竖板。无论成对还是单只，都必须是书挡使用状态，不能变成摆件、挂件、相框或完整矩形玻璃画。",
  },
  {
    name: "主体材质与木质直接连接",
    prompt:
      "彩色主体的材质、黑线外轮廓和玻璃整体性必须与挂链款一致：平面2D彩色玻璃、黑色或深灰哑光外轮廓、连续完整的玻璃主体，不能改成薄印刷亚克力或没有黑色边缘的普通玻璃片。内部可以有连贯的图案线条和颜色分区，但必须是一个完整主体，不能拆成许多独立小片，不能出现随机碎玻璃、碎片、放射状碎片或碎渣感。主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构；所有连接只能依靠主体连续外轮廓直接贴合、插入或嵌入木座窄槽。主体与竖向木板、横向底脚之间必须有真实接触、槽位、黑线包边和阴影，不能悬空。内容可借鉴该店铺常见方向：宠物猫狗肖像、书架与台灯、盆栽与花器、玫瑰、鸢尾、兰花、牡丹、郁金香、百合、蘑菇蜗牛、多肉、月神蛾、龙与剑、夜空猫咪、海浪和节日阅读场景。若图一提供明确主体，必须保留2至4个识别锚点，主体不能扩展成主体之外的整块矩形背板。",
  },
  {
    name: "书挡验收与负面要求",
    prompt:
      "验收标准：彩色主体只有图案自身的不规则外形，边缘有黑色或深灰轮廓，并保持为一个完整、连续的玻璃整体；内部可以有连贯图案线，但主体内部绝不能出现独立小碎块、随机碎片、碎玻璃拼块、放射状裂片或散落碎渣。主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构。没有整块透明矩形背板或整圈透明外框。竖向胡桃木板和横向底脚同时清楚可见，主体通过自身连续边缘直接贴合、插入或嵌入木座窄槽，书本承重关系正确。严禁挂链、吊绳、吊环、挂钩、吸盘、墙面悬挂、主体悬浮；严禁整圈透明边框、透明矩形背板、透明圆形托盘、塑料底座、金属细杆或3D模型。三张方案保持同一书挡产品体系，只改变左右摆放、书本数量、书脊文字、机位、景别、光线和道具。",
  },
];

const bookendMaterialPromptLibrary = [
  {
    name: "书挡彩色玻璃主体材质",
    prompt:
      "彩色主体的材质与挂链款完全相同：平面2D彩色玻璃、黑色或深灰哑光外轮廓、连续完整的玻璃主体、连贯的铅线分区和手工玻璃质感，不能变成薄印刷亚克力、透明水晶、果冻、树脂或厚玻璃雕刻。主体的不规则边缘必须由黑线完整勾勒，颜色浓郁、分区清楚，但所有内部颜色分区必须归属于一个完整主体，不能切成小片、碎块或散片。主体外不能增加整块透明矩形底板、透明圆形托盘、透明背板或整圈透明边框。",
  },
  {
    name: "主体与木质底座直接连接",
    prompt:
      "主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构，也不能在主体与木质底座的空隙里补玻璃。主体必须通过自身连续的异形边缘直接贴合、插入或嵌入竖向木板的窄槽，或用底部边缘直接接触横向底脚。连接处要有清楚的黑线包边、真实槽位和接触阴影，不能悬空。主体与木座之间的连接只能由主体自身轮廓和木槽完成。",
  },
  {
    name: "胡桃木L形书挡底座",
    prompt:
      "书挡底座必须是真实的深胡桃木L形结构，由一条明确的竖向木板和一条厚重的横向底脚组成。竖向木板位于主体内侧，高度约为主体的60%至85%，宽度足够承重，不能被省略或只露一小段；横向底脚沿桌面向前延伸，长度接近主体宽度，厚度和重量清楚。木材为暖棕到深棕胡桃木，具有清楚自然木纹、轻微清漆光泽、方正直角、平整底面和真实接触阴影。竖向木板前面必须有一条窄槽或嵌入结构，主体自身连续边缘直接插入或贴合窄槽，主体之外不增加其他玻璃结构。",
  },
  {
    name: "书本支撑、书脊与控制文字",
    prompt:
      "书挡必须与2至4本精装书形成真实承重关系。成对书挡夹在书本左右两端，竖向木板朝内，书本自然倚靠；单只书挡由书本从另一侧倚靠。书本有明显书脊、纸张边缘、厚度和重量，不能漂浮或穿模。书脊允许出现简短英文艺术书名或装饰文字，例如 The Art of Nature、Forest Tales、Moon Garden、Silent Bloom，字体要清晰、克制、像真实印刷；不要乱码、长段文字、水印、商标或版权标识。若左右主体相同则镜像对称；若不同，左侧图片只用于左书挡，右侧图片只用于右书挡。",
  },
  {
    name: "书挡商品摄影与负面要求",
    prompt:
      "真实商品摄影，85mm镜头，主体边缘清晰，浅景深，木书架或阅读桌面场景，自然窗光从侧后方照入，玻璃产生柔和彩色光斑。摄影重点是完整展示彩色主体、黑色外轮廓、主体边缘与竖向木板的直接嵌入连接、横向底脚、接触点和书本书脊，不能为了弱化底座而裁掉竖向木板或只拍横板。画面绝不能出现挂链、吊绳、圆环、挂钩、吸盘、墙面悬挂、主体悬浮、额外玻璃结构、整圈透明边框或透明背板；不要复制参考图的品牌和具体构图。三张保持同一套书挡产品体系，只改变书本数量、书脊文字、左右摆放、机位、焦段、光线和背景道具。",
  },
];

const abstractSubjectPromptLibrary = [
  {
    name: "提取精神锚点",
    prompt:
      "先识别图一主体真正不可丢失的2至4个身份锚点，只保留能让观众认出“它是什么”的核心特征，例如物种特征、头身关系、标志性轮廓、嘴部或喙部、翅膀、尾巴、耳朵、角、触角、蹼、眼睛或最具辨识度的花叶结构。删除照片式比例、真实毛羽或皮肤纹理、具体表情、服装细节、原图姿势、原图裁切和背景。允许主体轮廓与图一的相似度大幅降低，保留精神识别而不保留写实外形。",
  },
  {
    name: "压缩成象征角色",
    prompt:
      "把主体压缩成一个象征性角色、守护者、图腾、纹章、面具、徽章、纪念护符或童话护符，而不是照原图重新上色。允许大幅重构身体比例、姿态、服装、盔甲、披风、头饰、手持物、底座和周围装饰，使主体获得新的身份与叙事，并让观众第一眼能感受到它适合作为陪伴、纪念、祝福或守护礼物。青蛙剑士必须像真正的抽象青蛙剑士，而不是写实青蛙换一件衣服；若主体是鸭子，则必须生成鸭子骑士、鸭嘴守卫、鸭形纹章、水禽护符或鸭形冒险者，不能只是给写实鸭子换一组颜色。",
  },
  {
    name: "几何化与整体色块重构",
    prompt:
      "将主体重新压缩为平面化、几何化、图形化的彩色玻璃设计。可以合并、删减、简化和重排原有结构，允许改变轮廓、身体比例、头身方向、翅膀或枝叶数量、衣服层级和装饰布局，但不能把主体切成一堆独立小玻璃片。优先使用大块连续玻璃色区、弯曲的大色块、对称或半对称结构、清楚的完整负形和象征符号，让画面像设计过的彩窗徽章或童话图案，而不是把原始照片描边后分成碎玻璃。主色区、辅助色区和点缀色区之间可以用铅线自然分界，但必须共享同一个完整外轮廓，不能出现孤立悬挂的小片、随机小片或散落碎块。",
  },
  {
    name: "姿态与叙事重做",
    prompt:
      "重新设计主体姿态、动作、身体朝向、视线和空间关系，使它从展示一个动物或人物，变成讲述一个可被送礼者理解的角色故事。必须执行“姿势动作创新要求”，三张使用三个不同的动作原型，不能只调整手臂、低头角度或身体倾斜。优先围绕守护、陪伴、思念、纪念、祝福、希望、勇气、家庭或成长等情绪选择叙事，允许加入抽象盔甲、剑、盾牌、花冠、披风、羽毛纹章、水波、火焰、月亮、星星、藤蔓或几何边框，但所有新增元素都必须服从刚刚建立的象征角色，不要无意义堆砌。整体剪影、动势、重心和与核心道具的空间关系必须与图一明显不同，不能只是微调头、换衣服颜色或左右翻转。",
  },
  {
    name: "最少识别锚点",
    prompt:
      "抽象重构后仍必须保留至少2个最能代表主体身份的锚点。若主体是鸭子，优先从扁嘴、圆头、短颈、翅膀、蹼足、水禽身体节奏和尾部方向中选择；若主体是青蛙，优先从宽嘴、鼓眼、头部轮廓、四肢关节和蹼足中选择。允许删除其余写实细节。最终效果应在2秒内让人认出主体身份，同时明确感觉它是被重新设计过的角色，而不是原图换色。",
  },
  {
    name: "防止只换色验收",
    prompt:
      "如果结果只是改变颜色、材质或背景，而主体轮廓、姿态、比例、服装和整体结构仍与图一基本相同，就判定为失败并重新生成。结构性变化必须明显可见：主体剪影、身体节奏、头身比例、姿势、服装或装饰组合、画布内位置至少发生大范围重构。可以保留主体精神，但不能保留写实复刻。",
  },
  {
    name: "三张完全不同方向",
    prompt:
      "生成3张差异明显的独立方案，只能共享主体身份锚点和彩色玻璃材质，不能共享相同的轮廓、动作原型或构图重心。第1张偏守护者与陪伴，第2张偏纪念、思念与祝福，第3张偏希望、勇气与成长。三张必须分别采用庇护祝福、赠予纪念、上升成长等不同动作逻辑，并在轮廓、姿态、服装、装饰结构、与核心道具的关系和情绪叙事上有肉眼可见的大幅差异，不能只是换主色、换背景、换机位或左右翻转。",
  },
];

const pinterestColorPalettes = [
  {
    id: "pinterest-01",
    name: "海盐柠檬",
    swatches: ["#83B5BA", "#F3C943", "#E9B60B", "#CAC0B7", "#7E6D60"],
    labels: ["海盐青", "柠檬黄", "琥珀金", "暖灰米", "胡桃棕"],
  },
  {
    id: "pinterest-02",
    name: "海岸鼠尾草",
    swatches: ["#9FA78F", "#E1DBCB", "#656840", "#CABC89", "#C89436", "#282B18"],
    labels: ["鼠尾草绿", "沙米白", "苔藓橄榄", "亚麻金", "赭石金", "深林黑"],
  },
  {
    id: "pinterest-03",
    name: "胡桃陶土",
    swatches: ["#89623C", "#D5C5B3", "#4D3A29", "#733B1D", "#ECE2D2"],
    labels: ["胡桃棕", "暖砂米", "深咖", "赤陶棕", "象牙白"],
  },
  {
    id: "pinterest-04",
    name: "包豪斯原色",
    swatches: ["#2A65B8", "#BA220A", "#EDCB4D", "#DED8D3", "#613F17"],
    labels: ["钴蓝", "普鲁士红", "芥末黄", "浅灰米", "深棕"],
  },
  {
    id: "pinterest-05",
    name: "法兰西三色",
    swatches: ["#133D73", "#B92F2C", "#EDBA3A", "#FCF6EC", "#E3D4B5"],
    labels: ["海军蓝", "法式红", "暖金黄", "奶油白", "亚麻米"],
  },
  {
    id: "pinterest-06",
    name: "复古蓝红黄",
    swatches: ["#B02E19", "#03476D", "#EEBB2A", "#141716", "#CEBFAC"],
    labels: ["复古砖红", "孔雀蓝", "复古黄", "近黑", "灰杏"],
  },
  {
    id: "pinterest-07",
    name: "珊瑚海湾",
    swatches: ["#AED2DD", "#F5A733", "#F3A7A3", "#FC6549", "#06304C", "#E4CDCD"],
    labels: ["雾海蓝", "日光橙", "珊瑚粉", "珊瑚红", "深海蓝", "贝壳粉"],
  },
  {
    id: "pinterest-08",
    name: "海事雾蓝",
    swatches: ["#538093", "#415E6B", "#769DAB", "#CEC1B0", "#1E3037"],
    labels: ["海事蓝", "灰蓝绿", "浅雾蓝", "沙砾米", "深海灰"],
  },
  {
    id: "pinterest-09",
    name: "雾森绿",
    swatches: ["#8FB4B3", "#E7E6DB", "#709999", "#677A7E", "#4C585E", "#AA9584"],
    labels: ["灰青绿", "雾白", "湖水青", "灰绿", "石板灰", "风化木"],
  },
  {
    id: "pinterest-10",
    name: "晴空日光",
    swatches: ["#CAEAF3", "#FCC430", "#86BEDD", "#F48F06", "#FBFCFA"],
    labels: ["晴空蓝", "日光黄", "浅天蓝", "暖橙", "云白"],
  },
  {
    id: "pinterest-11",
    name: "蜜桃青蓝",
    swatches: ["#037FB6", "#AB3D0A", "#F1552C", "#02B0D2", "#91790A"],
    labels: ["亮海蓝", "赤陶棕", "蜜桃橙红", "青蓝", "橄榄金"],
  },
  {
    id: "pinterest-12",
    name: "烟青赤陶",
    swatches: ["#172D37", "#DA6026", "#0E5462", "#F4BB93", "#81A6A2", "#CFC3B6"],
    labels: ["墨海军蓝", "赤陶橙", "深青", "蜜桃杏", "灰青", "浅砂灰"],
  },
  {
    id: "pinterest-13",
    name: "编辑高饱和",
    swatches: ["#E9006A", "#FFC629", "#008A6D", "#4B0614", "#1E63B4", "#0D0D13"],
    labels: ["洋红", "金盏黄", "翡翠绿", "深酒红", "宝蓝", "墨黑"],
  },
  {
    id: "pinterest-14",
    name: "秋林虎百合",
    swatches: ["#D2681B", "#AFC14C", "#512B2D", "#641D04", "#9F9F9D", "#181414"],
    labels: ["虎百合橙", "黄绿色", "深莓棕", "深栗棕", "灰石色", "炭黑"],
  },
  {
    id: "pinterest-15",
    name: "莫兰迪酒红",
    swatches: ["#7E998D", "#ECDFD1", "#72252B", "#C3827C", "#E8BC64"],
    labels: ["灰鼠尾草", "奶油米", "酒红", "干枯玫瑰", "蜂蜜金"],
  },
  {
    id: "pinterest-16",
    name: "夏日海岸",
    swatches: ["#49A6B0", "#07818F", "#59CDC9", "#DAA15E", "#D4B88F", "#EEF0F1"],
    labels: ["海岛青", "深海青", "薄荷水蓝", "沙金", "暖沙", "海盐白"],
  },
  {
    id: "pinterest-17",
    name: "包豪斯蓝黄",
    swatches: ["#043678", "#E5B105", "#C62204", "#045697", "#E0CFB8"],
    labels: ["深宝蓝", "明黄", "朱红", "群青蓝", "沙米"],
  },
  {
    id: "pinterest-18",
    name: "果味粉彩",
    swatches: ["#D8927C", "#C77B55", "#98C1B2", "#6698A7", "#FAB95E", "#5E8483"],
    labels: ["蜜桃粉", "焦糖橙", "薄荷灰绿", "灰蓝", "芒果黄", "鼠尾草青"],
  },
  {
    id: "pinterest-19",
    name: "孔雀古蓝",
    swatches: ["#0A6F8A", "#428EA1", "#D38D57", "#946F52", "#464441", "#948D7B"],
    labels: ["孔雀蓝", "湖水蓝", "赤陶橙", "古铜棕", "炭灰", "石灰"],
  },
  {
    id: "pinterest-20",
    name: "海港赤陶",
    swatches: ["#16304C", "#A94D19", "#C2D4DC", "#99B2BB", "#D0AC7F", "#EDE6D9"],
    labels: ["海港藏蓝", "赤陶红", "雾蓝", "灰蓝", "沙金", "贝壳白"],
  },
  {
    id: "pinterest-21",
    name: "柔雾甜点",
    swatches: ["#E9E4D8", "#DDCCB3", "#917F64", "#FCC38B", "#F1AA52"],
    labels: ["柔雾白", "燕麦米", "灰卡其", "杏桃粉", "焦糖金"],
  },
  {
    id: "pinterest-22",
    name: "深蓝赭金",
    swatches: ["#103148", "#608491", "#245777", "#946303", "#8D6A47", "#C3B6A2"],
    labels: ["深海蓝", "灰湖蓝", "靛蓝", "赭金", "古铜", "灰杏"],
  },
  {
    id: "pinterest-23",
    name: "灰蓝石黄",
    swatches: ["#BAC0C5", "#94A0AD", "#D6DAE7", "#5E7CA8", "#C2B384", "#FEDC6E"],
    labels: ["冷灰", "雾蓝灰", "淡薰衣草灰", "鸢尾蓝", "石黄灰", "亮石黄"],
  },
  {
    id: "pinterest-24",
    name: "现代原色",
    swatches: ["#FCF1D7", "#E23202", "#F9C006", "#076951", "#064493"],
    labels: ["米白", "亮朱红", "明黄", "墨绿", "宝蓝"],
  },
  {
    id: "pinterest-25",
    name: "玫瑰陶土",
    swatches: ["#D6B7A2", "#B7745E", "#A44D3A", "#765243", "#294249"],
    labels: ["裸粉米", "陶土玫瑰", "赤陶红", "暖褐", "深青灰"],
  },
  {
    id: "pinterest-26",
    name: "鼠尾草花束",
    swatches: ["#F3610A", "#9EC011", "#816245", "#D9C1AA", "#E9E4E0"],
    labels: ["朱橙", "黄绿", "土棕", "裸杏", "柔白"],
  },
  {
    id: "pinterest-27",
    name: "四色几何",
    swatches: ["#FBC755", "#033653", "#2A68A1", "#DA2D2D", "#F78802", "#EEE6C1"],
    labels: ["向日葵黄", "深夜蓝", "钴蓝", "大红", "亮橙", "米白"],
  },
  {
    id: "pinterest-28",
    name: "薄雾黄绿",
    swatches: ["#CADDDD", "#A9BAB4", "#EEDCB1", "#EDB606", "#E7C03E", "#E7CE76"],
    labels: ["薄雾青", "灰鼠尾草", "淡奶黄", "向日葵黄", "金盏黄", "柔蜂蜜"],
  },
  {
    id: "pinterest-29",
    name: "奶油榛果",
    swatches: ["#F4EFE1", "#E6D4A9", "#87856E", "#A86239", "#B3845B", "#AE9E80"],
    labels: ["奶油白", "燕麦黄", "榛果灰绿", "焦糖棕", "榛果棕", "灰卡其"],
  },
].map((palette) => ({
  ...palette,
  source: "Pinterest 色彩板",
  description: palette.labels.join("、"),
  prompt: buildPinterestPalettePrompt(palette),
}));

const etsyShopStyleProfiles = {
  Nmkcimira97: {
    name: "银河炫彩梦幻玻璃",
    prompt:
      "【店铺视觉风格：银河炫彩梦幻玻璃】这套风格不等于普通换色。主体内部的玻璃必须呈现深色到亮色的多层次变化、星云般晕染、青蓝紫洋红之间的梦幻过渡，并允许少量金色、香槟色或象牙色作为星光焦点。颜色要有深空基底和明亮发光中心，形成神秘、华丽、梦幻的银河宇宙感。允许彩色玻璃在背光下呈现较强通透度、内部彩色辉光和细小星尘颗粒，也允许小面积亮色高光和少量虹彩玻璃片，但这些必须来自薄平板彩色玻璃本身，不能变成水晶切面、整件透明、外部霓虹或 3D 玻璃。主色区必须至少包含两种邻近深浅，避免每个区域只用一块单调平涂颜色。铅线可使用黑色或古铜金，轮廓可更流动、华丽、细密。禁止整体苍白、粉彩、灰暗、低对比或普通单色窗花感。未明确要求时，不额外增加月亮、星星、行星或银河背景物体，只把这种银河玻璃语言作用在现有主体内部。",
  },
  SovelleStainedglass: {
    name: "高饱和重彩玻璃",
    prompt:
      "【店铺视觉风格：高饱和重彩玻璃】这套风格的核心是颜色重、颜料密度高、饱和度高、明暗反差强，而不是浅淡粉彩。每个主要色区都要有同色系内部层次，例如深森林绿到祖母绿再到橄榄绿，宝石蓝到青蓝再到浅海蓝，酒红到深红再到珊瑚红，琥珀到金橙再到暖黄。主色必须浓郁、丰满、有重量感，背光时颜色更亮更透，但不能被洗白。相邻区域要使用明确的冷暖、互补或深浅对比，让画面有珠宝般、厚重、华丽的彩色玻璃感。允许黑色或深灰铅线加少量古铜金或暗金线条强化轮廓。禁止整体粉灰、低饱和、发白、雾蒙蒙、水彩、普通平面填色或只有黑色和白色的大块区域；禁止霓虹和 HDR，但高饱和与深色必须同时保留。",
  },
};

const etsyShopColorPalettes = [
  {
    id: "nmk-galaxy",
    source: "Nmkcimira97",
    name: "银河守护",
    swatches: ["#353469", "#357396", "#C2D7E5", "#763753", "#E4E5BE"],
    labels: ["星云靛蓝", "宇宙青蓝", "冰晶浅蓝", "银河莓紫", "星尘浅黄"],
  },
  {
    id: "nmk-ocean",
    source: "Nmkcimira97",
    name: "海洋梦境",
    swatches: ["#357396", "#357A62", "#C2D7E5", "#AFC490", "#F2DBB7"],
    labels: ["海水蓝", "深海青绿", "泡沫浅蓝", "海玻璃绿", "沙滩米白"],
  },
  {
    id: "nmk-christmas",
    source: "Nmkcimira97",
    name: "圣诞森林",
    swatches: ["#376331", "#763753", "#D98F24", "#D8C6B1", "#353469"],
    labels: ["松针绿", "冬莓红", "暖金橙", "雪松米白", "夜空靛蓝"],
  },
  {
    id: "nmk-halloween",
    source: "Nmkcimira97",
    name: "神秘万圣节",
    swatches: ["#422811", "#D98F24", "#763753", "#376331", "#E4E5BE"],
    labels: ["深木棕", "南瓜橙", "女巫莓紫", "幽林绿", "月光浅黄"],
  },
  {
    id: "nmk-nature",
    source: "Nmkcimira97",
    name: "自然花园",
    swatches: ["#A0A95E", "#5F723C", "#AFC490", "#D98F24", "#F2DBB7"],
    labels: ["黄绿色", "苔藓绿", "鼠尾草绿", "蜂蜜橙", "奶油米色"],
  },
  {
    id: "nmk-flower-bookends",
    source: "Nmkcimira97",
    name: "花卉书挡",
    swatches: ["#8A6141", "#D8C6B1", "#763753", "#A0A95E", "#F2DBB7"],
    labels: ["胡桃木", "暖米白", "花瓣莓红", "植物黄绿", "奶油象牙"],
  },
  {
    id: "nmk-enchanted-garden",
    source: "Nmkcimira97",
    name: "童话花园",
    swatches: ["#A0A95E", "#357A62", "#D98F24", "#E4E5BE", "#763753"],
    labels: ["魔法叶绿", "翡翠青绿", "花园金橙", "月光浅黄", "精灵莓紫"],
  },
  {
    id: "nmk-rainbow",
    source: "Nmkcimira97",
    name: "彩虹玻璃",
    swatches: ["#357396", "#376331", "#D98F24", "#763753", "#353469", "#E4E5BE"],
    labels: ["湖水蓝", "翡翠绿", "琥珀橙", "宝石莓红", "靛蓝", "象牙黄"],
  },
  {
    id: "nmk-wood-bookends",
    source: "Nmkcimira97",
    name: "木质书挡",
    swatches: ["#8A6141", "#AD966A", "#422811", "#D8C6B1", "#CDC8A1"],
    labels: ["胡桃木棕", "浅木色", "深咖啡", "暖砂米", "亚麻灰绿"],
  },
  {
    id: "nmk-winter-woodland",
    source: "Nmkcimira97",
    name: "冬日林地",
    swatches: ["#8A6141", "#376331", "#D98F24", "#763753", "#F2DBB7"],
    labels: ["林地棕", "冬青绿", "暖金橙", "浆果红", "积雪米白"],
  },
  {
    id: "sovelle-celtic",
    source: "SovelleStainedglass",
    name: "凯尔特暖木",
    swatches: ["#7D5A3C", "#BFA07B", "#EAD6AF", "#BD6C18", "#206043"],
    labels: ["古木棕", "沙岩米", "羊皮纸米", "琥珀橙", "森林祖母绿"],
  },
  {
    id: "sovelle-tree-of-life",
    source: "SovelleStainedglass",
    name: "生命之树",
    swatches: ["#206043", "#2A632D", "#75863C", "#ACA25C", "#EAD6AF"],
    labels: ["祖母绿", "深森林绿", "嫩叶绿", "古金橄榄", "奶油羊皮纸"],
  },
  {
    id: "sovelle-goddess",
    source: "SovelleStainedglass",
    name: "女神圣殿",
    swatches: ["#84BDD0", "#1E677B", "#EAD6AF", "#6E2644", "#BFA07B"],
    labels: ["天空浅蓝", "爱琴海青蓝", "古典米白", "酒红", "沙岩金"],
  },
  {
    id: "sovelle-coastal",
    source: "SovelleStainedglass",
    name: "海岸玻璃",
    swatches: ["#1E677B", "#84BDD0", "#206043", "#BFA07B", "#EAD6AF"],
    labels: ["海洋青蓝", "浅海蓝", "海玻璃绿", "沙滩金", "贝壳白"],
  },
  {
    id: "sovelle-gothic",
    source: "SovelleStainedglass",
    name: "哥特万圣节",
    swatches: ["#492313", "#6E2644", "#492D6C", "#BD6C18", "#55532C"],
    labels: ["深可可", "暗酒红", "神秘紫", "南瓜琥珀", "幽暗橄榄"],
  },
  {
    id: "sovelle-autumn",
    source: "SovelleStainedglass",
    name: "秋日森林",
    swatches: ["#206043", "#75863C", "#BD6C18", "#7D5A3C", "#EAD6AF"],
    labels: ["常青绿", "秋叶绿", "琥珀橙", "树皮棕", "奶油米白"],
  },
  {
    id: "sovelle-mythic",
    source: "SovelleStainedglass",
    name: "神话宝石",
    swatches: ["#492D6C", "#152E6E", "#6E2644", "#BD6C18", "#84BDD0"],
    labels: ["神话紫", "深海蓝", "宝石酒红", "琥珀橙", "水晶浅蓝"],
  },
  {
    id: "sovelle-natural-bookends",
    source: "SovelleStainedglass",
    name: "自然书挡",
    swatches: ["#7D5A3C", "#BFA07B", "#2A632D", "#ACA25C", "#EAD6AF"],
    labels: ["胡桃木棕", "沙石米", "森林绿", "苔藓金", "羊皮纸白"],
  },
  {
    id: "sovelle-forest",
    source: "SovelleStainedglass",
    name: "自然森系",
    swatches: ["#2A632D", "#3B5126", "#75863C", "#B1C381", "#EAD6AF"],
    labels: ["森林绿", "深苔绿", "叶绿", "嫩芽绿", "奶油米白"],
  },
  {
    id: "sovelle-wine",
    source: "SovelleStainedglass",
    name: "古典酒红",
    swatches: ["#6E2644", "#7D5A3C", "#BFA07B", "#BD6C18", "#492D6C"],
    labels: ["酒红", "古木棕", "沙岩米", "琥珀橙", "古典紫"],
  },
  {
    id: "sovelle-fairy-garden",
    source: "SovelleStainedglass",
    name: "精灵花园",
    swatches: ["#B1C381", "#75863C", "#84BDD0", "#6E2644", "#EAD6AF"],
    labels: ["嫩芽绿", "叶绿", "天空蓝", "花园酒红", "花蜜米白"],
  },
  {
    id: "sovelle-nordic",
    source: "SovelleStainedglass",
    name: "北欧蓝金",
    swatches: ["#152E6E", "#1E677B", "#ACA25C", "#BFA07B", "#EAD6AF"],
    labels: ["深海蓝", "青蓝", "古金橄榄", "沙岩金", "奶油米白"],
  },
].map((palette) => {
  const styleProfile = etsyShopStyleProfiles[palette.source];
  const source =
    palette.source === "Nmkcimira97"
      ? "银河炫彩"
      : palette.source === "SovelleStainedglass"
        ? "颜色鲜艳饱和度很高"
        : palette.source;
  const variable = {
    ...palette,
    source,
    styleName: styleProfile?.name || "",
    description: styleProfile
      ? `${styleProfile.name}｜${palette.labels.join("、")}`
      : palette.labels.join("、"),
  };
  variable.prompt = buildEtsyShopPalettePrompt(variable);
  return variable;
});

const colorVariableLibrary = {
  lightcove: [
    {
      id: "lightcove-core",
      source: "LightCoveGifts",
      name: "高饱和多色拼片",
      swatches: [
        "#1F8A5A",
        "#1B9FA3",
        "#2F61B8",
        "#D83B36",
        "#F2B72F",
        "#EF8A28",
        "#744FA8",
        "#F5F0E6",
      ],
      description: "翠绿、青蓝、宝蓝、宝石红、金黄、橙、紫罗兰，配乳白和黑色铅线。",
      prompt:
        "以翠绿、青蓝、宝蓝、宝石红、金黄、橙色、紫罗兰和乳白为主，每件使用3至6个高饱和色系，采用强对比和多色拼片。主色约占50%至60%，辅助色25%至30%，白色和黑色10%至20%。黑色或深灰哑光铅线要清楚分割玻璃片。颜色要明亮、浓郁、有节日感和彩虹感，不要低饱和粉灰、莫兰迪色或大面透明。",
    },
    {
      id: "lightcove-nature",
      source: "LightCoveGifts",
      name: "自然系列：翠绿、青蓝与暖色鸟类",
      swatches: ["#218B58", "#18A1A5", "#2D6CC0", "#F0A12F", "#E24336", "#F5D44A"],
      description: "绿色和蓝色为骨架，鸟类主体加入橙黄红紫，背景保留绿色植物层次。",
      prompt:
        "色彩以翠绿、青蓝、宝蓝为骨架，主体内部加入橙、金黄、宝石红和少量紫色高光。鸟类、动物、叶片和花朵必须使用高彩度、多色分区，颜色鲜明但不能霓虹。叶子用橄榄绿和翡翠绿，背景保留自然绿色和暖棕色层次。整体像阳光下高饱和的彩色玻璃，不要透明水晶、粉灰或单色处理。",
    },
    {
      id: "lightcove-christmas",
      source: "LightCoveGifts",
      name: "圣诞系列：红绿金蓝白",
      swatches: ["#B7222E", "#15734A", "#E0AE32", "#245BAA", "#F4F0E7", "#1C1C1C"],
      description: "宝石红和常青绿为主，金黄、宝蓝、雪白增强节日感。",
      prompt:
        "使用宝石红、常青绿、金黄、宝蓝、雪白和少量黑色铅线。红绿必须是明确的互补关系，金色只作叶片、星星、边框或装饰亮点，蓝色用于雪花和冷色点缀。整体鲜艳、浓郁、有节日灯光感，不要粉彩化，不要透明冰晶，不要整件透明。",
    },
    {
      id: "lightcove-autumn",
      source: "LightCoveGifts",
      name: "秋季系列：橙黄红棕橄榄绿",
      swatches: ["#E68A24", "#F2B72F", "#C94231", "#A95C2C", "#788342", "#F0E2B8"],
      description: "琥珀橙、金黄、砖红、暖棕、橄榄绿，适合南瓜、枫叶和秋季节日。",
      prompt:
        "使用琥珀橙、金黄、砖红、暖棕、橄榄绿和少量乳白。橙色和金黄色作为主色，红色负责提高对比，橄榄绿作为叶片和结构色。颜色要像高饱和秋季玻璃，而不是灰棕色。避免大面积纯黑，铅线保持深棕黑，整体温暖、明亮、有手工玻璃密度。",
    },
    {
      id: "lightcove-rainbow",
      source: "LightCoveGifts",
      name: "彩虹系列：完整七色",
      swatches: ["#D93A35", "#ED8D2D", "#F2CB3C", "#278B56", "#2C67B8", "#694AA5", "#C8468B"],
      description: "红橙黄绿蓝紫粉完整出现，白色和黑色只负责分隔和轮廓。",
      prompt:
        "使用红、橙、黄、绿、蓝、紫、粉完整七色，颜色按清楚顺序或连续大色区分布，每一色都保持高饱和和实体玻璃密度。白色只作小面积分隔高光，黑色或深灰铅线完整包边。不要压暗颜色，不要把彩虹洗成粉彩或半透明水彩，也不要散成细碎三角玻璃。",
    },
  ],
  sunart: [
    {
      id: "sunart-core",
      source: "SunArtGlassGallery",
      name: "少色系通透渐变",
      swatches: ["#D8A126", "#C94738", "#E4A2B2", "#B39AD1", "#2F63A8", "#3F8F87", "#618B4C", "#F4F0E9"],
      description: "琥珀黄、珊瑚红、腮红粉、丁香紫、宝蓝、青绿和叶绿，单件只用2至4个主色系。",
      prompt:
        "每件只使用2至4个主要色系，同一色系内部必须表现由浅到深的玻璃渐变和透光层次。主色优先从琥珀黄、珊瑚红、腮红粉、丁香紫、宝蓝、青绿和叶绿中选择，乳白色作为花瓣、翅膀、叶片或负形区域的高光玻璃。主色系约占60%至70%，相邻色或互补色20%至30%，乳白和透光色5%至10%。黑色只作细哑光铅线，不要大面积铺黑。整体自然、通透、优雅，像真正的Tiffany彩色玻璃。",
    },
    {
      id: "sunart-botanical",
      source: "SunArtGlassGallery",
      name: "花卉植物：粉紫蓝绿乳白",
      swatches: ["#E5A4B7", "#B49AD2", "#8CB7D9", "#4E8B62", "#F5F0EA", "#4C514A"],
      description: "腮红粉、丁香紫、天蓝、叶绿，用乳白和高透光表现花瓣。",
      prompt:
        "以腮红粉、丁香紫、浅天蓝和叶绿为2至4个主色系，乳白色作为花瓣、花心和负形高光。粉色和紫色要有由浅到深的渐变，绿色负责花梗和叶片，蓝色只作为冷色点缀。玻璃保持通透明亮但不整件透明，黑色或灰绿铅线细而连续。整体温柔、自然、优雅，不要高饱和彩虹拼色。",
    },
    {
      id: "sunart-birds",
      source: "SunArtGlassGallery",
      name: "鸟类：红黄蓝灰与叶绿",
      swatches: ["#C5322D", "#E2B22F", "#315EA5", "#9AA3AA", "#F3EEE7", "#557C45"],
      description: "红雀红、自然黄、钴蓝、羽毛灰、乳白和叶绿，颜色跟随物种但保持渐变。",
      prompt:
        "依据鸟类本身的颜色选择2至4个主色系，可使用红雀红、自然黄、钴蓝、羽毛灰、乳白和叶绿。胸腹、翅膀和尾羽必须在同一色系内做出由深到浅或由暖到冷的渐变。眼睛、喙、羽毛分界使用细黑或深灰铅线。整体保留自然鸟类的色彩关系，不要为了多彩而随意加入彩虹色，不要透明水晶质感。",
    },
    {
      id: "sunart-fruits",
      source: "SunArtGlassGallery",
      name: "水果：宝蓝、柠檬黄、橙、桃红",
      swatches: ["#2455A1", "#E3C22E", "#E88B2C", "#E99A93", "#C63F38", "#54844B"],
      description: "蓝莓宝蓝、柠檬黄、橙、桃粉、石榴红，配叶绿和乳白。",
      prompt:
        "水果主体使用该水果的真实主色并加入深浅渐变，例如蓝莓用宝蓝到深靛蓝，柠檬用亮黄到琥珀黄，橙子用橙到金橙，桃子用蜜桃粉到珊瑚红，石榴用石榴红到酒红。叶绿和乳白作为叶片、果肉和透光高光。每件只保留2至4个主色系，颜色饱和但自然，不能做成高彩度卡通水果。",
    },
    {
      id: "sunart-romance",
      source: "SunArtGlassGallery",
      name: "浪漫系列：腮红粉、丁香紫、天蓝",
      swatches: ["#E6A7B8", "#B9A5D5", "#8FB9DD", "#F6F1EB", "#9AA89B", "#5A5467"],
      description: "柔和粉紫蓝与乳白，适合情侣鸟、花板、婚礼和纪念主题。",
      prompt:
        "以腮红粉、丁香紫、天蓝和乳白为2至4个主色系，颜色柔和但不能苍白。粉色、紫色和蓝色必须通过不同深浅的玻璃片形成渐变和透光层次，灰绿或灰紫只用于叶片和稳定画面。黑色使用细铅线，不能大面积铺黑。整体浪漫、安静、通透，避免霓虹、荧光和儿童彩虹色。",
    },
    {
      id: "sunart-gothic",
      source: "SunArtGlassGallery",
      name: "暗黑奇幻：炭黑、灰紫、苔绿、蘑菇红",
      swatches: ["#28262C", "#66536F", "#7B7944", "#A93E32", "#D4A33F", "#D8D4CB"],
      description: "深色但保留彩色透光，适合万圣节、蘑菇、蝙蝠和神秘森林题材。",
      prompt:
        "以炭黑、灰紫、苔藓绿、蘑菇红和暗琥珀为主，乳白或雾灰作为少量透光高光。整体明度偏低，但每一种颜色都要保留清楚的色相和玻璃透光，不能变成纯黑剪影。深色区域用深紫、深绿和深酒红交替，避免整件只有黑色。铅线细密，氛围神秘、自然、有童话感。",
    },
  ],
  pinterest: pinterestColorPalettes,
  etsyShops: etsyShopColorPalettes,
};

const shapeVariableLibrary = {
  random: {
    id: "random",
    name: "随机抽取（规则 / 不规则）",
    summary: "每轮随机选一种形状类别，三张方案只使用同一种类别。",
    prompt:
      "每一轮只从“规则几何形状”和“不规则主体形状”中随机选择一种类别，整轮三张方案必须使用同一种形状类别，不能一半规则、一半不规则。选定类别后再生成三种不同轮廓或构图方向。",
  },
  regular: {
    id: "regular",
    name: "规则几何形状",
    summary: "主体收进圆形、方形、椭圆、三角形、六边形、星形或盾形等闭合规则轮廓。",
    prompt:
      "整体外轮廓必须是明确、干净、闭合的规则几何形状，可从圆形、正方形、长方形、椭圆形、三角形、六边形、星形、盾形、拱形徽章或对称花窗轮廓中选择。每张方案只使用一个主要几何轮廓，边缘尽量对称或近对称。所有主体和内部图案必须完整收在几何边界内，并在边界内侧保留约6%至10%的可见安全留白。动物的耳朵、头部、角、四肢、翅膀、尾巴、毛发或披风，人物的头发、服装、手持物或装饰，植物的枝叶、花朵、藤蔓，以及海浪、月光、云、星星、火焰、光环、纹章、文字符号和任何玻璃拼片，都不得接触、压线、跨越、穿过或伸出外轮廓。三角形重点检查三个角与三条边，圆形重点检查圆周，方形重点检查四角与四条边，其他规则形状也要逐一检查所有尖角和转折。如果主体或某个内部元素放不下，必须整体缩小主体、删减次要元素、改变内部布局或简化装饰，不能裁切、破框或让任何内容露到边界外。背景不能进入玻璃主体，不能保留矩形照片背景、方形底板或额外外框。挂链、吊线、圆环和画外连接五金属于外部悬挂结构，可以从主体顶部向上延伸，但不得带动主体、尾部、翅膀、海浪或其他内部图案一起越出几何边框。三张方案可使用不同的规则几何形状，但都必须一眼看出是完整的规则外轮廓，且没有任何主体或内部元素越界。",
  },
  irregular: {
    id: "irregular",
    name: "不规则主体形状",
    summary: "只按明确指定的主体元素组成异型轮廓，无额外背景填充、无彩色底板、无边框。",
    prompt:
      "整体外轮廓必须严格由用户明确指定的主体元素组成，像从背景中完整剪下来的彩色玻璃剪影。若用户明确指定“只有乌鸦、月亮和墓碑”，最终轮廓必须只由乌鸦、月亮和墓碑这三个元素相互连接形成，不得自行添加叶片、花朵、藤蔓、树枝、星星、光点、记忆火花、人物、动物、文字、符号、十字架或其他装饰。轮廓必须自然闭合，不使用圆形、方形、椭圆、三角形、矩形、盾形、拱形或徽章外框。禁止添加背景填充色、月亮后方彩色圆盘、星空底片、彩虹拼片、彩色背板、外圈玻璃、黑边、金属边框、彩色边框、藤蔓边框、花环边框或任何包裹主体的装饰框。除两条或指定数量的挂链和必要焊点外，轮廓之外不得出现任何玻璃片或装饰元素。色彩变量只能作用于用户明确指定的元素内部，不得为了展示未使用的颜色而扩展背景、补片或新增装饰区；没有被指定元素占用的区域必须完全留空，直接显示真实场景背景。本形状规则优先级高于情绪叙事、配色变量和装饰建议。允许改变姿态和局部轮廓，但外形必须不规则、自然、一眼能认出是哪些明确指定的主体元素。",
  },
};

const selectionPrompt = `请从本轮生成的三张照片中选择一张作为后续唯一基准图。

如果本轮生成的是主体变换方案，请选择主体最完整、轮廓最清楚、脸部和关键识别特征最准确、姿势自然、颜色分布最协调、最适合继续商品化的一张。

主体变换方案还必须与图一有相同的身体可见范围和裁切比例：图一是胸像就只能生成胸像，主体下方必须有明确收尾和背景留白，不能扩展出腹部、胯部、双腿，也不能看起来还能继续向下扩图。

2D 验收：主体必须像纸一样薄，只存在于一个正面平面内，不能出现玻璃厚度、侧面、断面、浮雕、凸起人脸、立体包边、陶瓷感、雕塑感或任何 3D 体积轮廓。

颜色验收：保持原色相体系和颜色分区，但彩色玻璃必须明显更饱和、更浓郁、更鲜艳，不能浅淡、粉灰、发白、褪色或被强光洗成近白。白色和乳白玻璃仍保持白色。

换色验收：如果本轮是主体换色方案，优先选择色系差异最大、对比最强、颜色最浓郁鲜艳的方案，而不是只改明度或饱和度。主体外形、脸部、姿势、材质、挂链和结构必须保持。

规则形状验收：如果本轮使用圆形、方形、椭圆形、三角形、六边形、星形、盾形、拱形徽章或其他规则外轮廓，所有主体和内部元素都必须完整收在边界内，并保留约6%至10%安全留白。耳朵、头部、角、四肢、翅膀、尾巴、头发、服装、枝叶、花朵、海浪、月光、云、星星、装饰和玻璃拼片都不能接触、压线、跨越或伸出几何边界。只要有任何主体或内部图案越界，就判定为失败，不能选择。挂链和圆环可向上延伸，但不能带动主体或内部图案越界。

影子验收：彩玻主体产生的影子、墙面投影、桌面投影、倒影和焦散必须明显带主体颜色，不能是纯黑、深灰或灰黑色实心剪影。

如果本轮生成的是玻璃材质强化方案，请选择最接近图二传统手工彩色玻璃的一张：薄平板玻璃片清楚、表面哑光或微磨砂、颜色乳白粉彩或实色、轮廓内没有透明空洞且白色区域是乳白实体玻璃、每片玻璃有闭合铅线包边、透光弱且不发亮、手工拼片和焊点自然。挂链、吊线或圆环必须完整存在，位置合理，并与主体顶部真实连接；图一只有两条挂链时，图片中必须也只有两条，不能多出任何附加链条。不要水晶、冰晶、宝石、琉璃摆件、透明树脂、果冻、软糖、塑料或 3D 玻璃雕刻，也不要镜面高光、边缘发光、内部发光、色散和整件透明。

选定后，后续所有生成必须以这张照片为唯一主体锚点，严格冻结主体外形、姿态、比例、颜色分区、材质风格、色彩风格、文化风格、主体类型、关键识别特征和整体轮廓。

后续只允许改变背景、道具、光线、机位、构图和场景，不允许重新设计主体，不允许改脸，不允许换颜色，不允许改变材质。`;

const bookendSelectionPrompt = `请从本轮生成的三张照片中选择一张作为后续唯一基准图。

优先选择主体异形轮廓最完整、识别最清楚、颜色分布最协调、左右书挡关系最准确的一张。若左右图片不同，必须选择左书挡确实使用左图主体、右书挡确实使用右图主体，且没有交换、混合或强行镜像的一张；若左右图片相同或只上传一张，必须选择左右镜像关系自然、对称成立的一张。

主体轮廓验收：彩色主体只能保留图案自身的不规则外形，并带黑色或深灰外轮廓；主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构。主体必须通过自身连续边缘直接贴合、插入或嵌入竖向木板窄槽，或用底部边缘直接接触横向底脚。其余主体外部区域必须直接显示真实桌面、书架或背景。

书挡结构验收：必须有两个彼此独立的书挡，每个书挡各有一条深胡桃木竖向木板和一条自己的横向底脚，不能共用一个连续底座。左侧主体的内侧边缘必须直接嵌入或贴合左侧书挡自己的竖板窄槽，右侧主体反向镜像连接右侧竖板；主体朝外展开，书本位于两块竖板之间，不能把主体放在书本正前方中央，也不能依靠中央透明立柱站立。竖向木板覆盖主体高度约60%至85%，不能被省略、缩短成细线或藏在透明板后面；横向底脚稳定落地并向前延伸。主体与木座之间只保留主体自身边缘和木槽的直接连接。

材质与整体性验收：彩色主体必须与挂链款一致，使用平面2D彩色玻璃、黑色或深灰哑光外轮廓和连续完整的玻璃主体。内部可以保留连贯图案线，但必须是一个完整主体，不能拆成独立小玻璃片，不能出现随机碎玻璃、碎片、放射状裂片或散落碎渣。主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构；连接只能由主体连续边缘与木质底座直接完成。木质底座为暖棕至深棕胡桃木，有自然木纹、轻微清漆光泽、方正直角和真实接触阴影。

严禁选择出现挂链、吊绳、吊环、挂钩、吸盘、墙面悬挂、空中悬浮、整圈透明玻璃边框、透明背板、透明圆形托盘、透明外圈、额外玻璃结构、塑料底座、透明亚克力底座、金属细杆支撑、竖向木板缺失或底座缺失的照片。

书脊文字验收：书脊可以出现简短清楚的英文艺术书名或装饰书名，字体像真实书脊印刷；不能出现乱码、长段文字、水印、商标或品牌标志。

颜色与风格验收：颜色浓郁、鲜艳、有颜料密度，不能苍白、粉灰或过曝；若已选择店铺风格变量，必须优先保留对应的银河梦幻感或高饱和重彩感。影子、桌面投影和倒影应带主体本身的颜色，不能是纯黑死影。

选定后，后续所有生成必须以这张照片为唯一书挡锚点，严格冻结异形主体、黑色外轮廓、左右关系、主体与木板直接连接点、竖向木板、横向底脚、色彩风格、书本承重关系和书脊文字风格。后续只允许改变书架场景、书本数量与颜色、书脊文字内容、道具、光线、机位和构图。`;

const materialReferenceRule =
  "图一为唯一主体，图二为唯一材质与五金参考，图三为唯一背景参考。严格提取图二的传统手工彩色玻璃：薄平板玻璃、哑光或轻微磨砂表面、乳白粉彩或实体色块、较粗的黑色深灰哑光铅线、连续完整的主体轮廓、连贯的色区包边和真实焊点，窗光只让颜色略亮，不产生透明感。主体必须有清楚的大块颜色分区，但不能被切成大量独立小玻璃片、尖角三角形或随机碎块。主体轮廓内原本会透明、留白或露出背景的区域，全部用白色、乳白、象牙白或浅灰实体磨砂玻璃替代，不能出现透明空洞。图二还负责提供挂链、吊线、顶部圆环和连接五金的形式，但挂链数量以产品类型和图一为最高优先级：图一有两条时严格保留两条，图一只有一条时保持一条；若图一没有挂链，但本轮属于挂饰、Suncatcher、墙面悬挂装饰或悬挂商品摄影，则默认补齐两条独立、加长、全程分开的链条；若本轮明确是书挡、摆件、桌面装饰或用户要求不要挂链，则不添加。图二、图三和背景图中的挂链数量不得覆盖上述规则，不得增加背链、侧链、备用链、装饰链、圆环串联或额外金属线。若最终确定有两条挂链，必须把两条链明显加长并保持全程分开，不能交叉、并线、缠绕、共用圆环或汇合连接。挂链必须完整、断开处不能消失、不能悬空。不复制图二的玻璃形状、颜色和构图；只提取图三的空间、道具、光线和背景，不复制图三中的主体。不能生成水晶、冰晶、宝石、琉璃摆件、透明树脂、亚克力、珐琅画、果冻、软糖、玻璃砖、厚玻璃或 3D 玻璃雕刻，不要玻璃镜面高光、边缘发光、内部发光、色散、彩虹折射和整件透明。";

const subjectCompositionRule =
  "构图与身体范围严格以图一为准：图一显示到哪里，结果就只显示到哪里。若图一是头像、胸像、半身雕塑或只到胸部、肩部，结果必须保持相同范围，不得自行补出腹部、腰、胯、腿、脚或更长的身体，不得把胸像扩成半身像、七分身或全身像。主体最下方要有服饰收口、布料折返、雕塑底座、轮廓闭合或可见背景留白来完成收尾，不能平直截断在画面边缘，不能继续向画布下方延伸，不能看起来还能继续扩图。保持图一相同的镜头距离、裁切比例、主体占比和位置，不改变现有可见的主体内容。";

const singleLayerOcclusionRule =
  "主体必须严格只有一个玻璃图层，所有结构都处于同一平面，不能出现前后双层玻璃、玻璃叠玻璃、透明夹层、内部轮廓或两套互相透出的边缘。被身体、头部、翅膀、手臂、尾巴、叶片或衣饰遮住的部分必须彻底消失，不能在身体后面以透明、半透明、同色、阴影、轮廓线、色块或若隐若现的方式透出来。遮挡处只能保留前方结构的边缘和铅线，后方被挡住的内容不能留下任何痕迹。禁止出现隐藏在身体后面的翅膀尖、第二套翅膀轮廓、腿部或尾巴残影，除非它们在画面侧面明确可见。";

const flatGlassRule =
  `主体必须是绝对平面的 2D 薄片，像纸一样薄，只存在于一个正面平面内。不能显示玻璃厚度、侧面、断面、双层结构、立体轮廓、悬浮边、凸起边框或包边。脸、头发、衣服、花瓣和叶片都必须是平面玻璃色块，不能做成浮雕、石膏、陶塑、雕刻头像或凸起的人脸。黑色铅线只能平贴在玻璃表面，不能显示为凸起金属管。任何角度都看不到玻璃侧面厚度，不能因为透视产生体积轮廓。不要 3D、不要半立体、不要浮雕、不要挤出、不要膨胀、不要圆润体积、不要曲面玻璃、不要陶瓷感、不要雕塑感、不要空气刷阴影响应。${singleLayerOcclusionRule}`;

const coloredShadowRule =
  "彩玻主体产生的所有影子、墙面投影、桌面投影、地面投影、倒影、透明影像和彩色焦散，都必须明显带主体玻璃本身的颜色，例如粉、绿、白、黄、蓝或对应混色，不能是纯黑、深灰或灰黑色实心剪影。主体正下方不得出现黑色人形或主体轮廓影。若光源不足以形成清晰倒影，就改成柔和、低对比但能看出颜色的玻璃光斑，不能改画成中性黑色影子。金属链条和圆环可以保留少量正常深色阴影，但不能形成大面积死黑轮廓。建筑、家具、植物和窗框自身的普通阴影保持正常真实。";

const chromaticRangeControlRule =
  "彩色玻璃的明暗必须做色彩动态范围压缩，不能把深色直接压成纯黑，也不能把浅色直接过曝成纯白。深蓝、深红、墨绿、深紫、深棕等深色必须保留清楚可辨的色相和中间明度，只变成更有深度的彩色玻璃，不能变成纯黑、近黑、炭黑或黑色剪影；浅粉、浅蓝、浅绿、浅黄、浅紫等浅色必须保留清楚的彩色倾向，只能变成柔和粉彩、乳彩或有色高光，不能变成纯白、近白、过曝白或纸张白。只有真实黑色哑光铅线和用户明确选择的黑色玻璃可以使用黑色；只有主体负形、明确的白色玻璃、象牙白或乳白玻璃区域可以使用白色。不得出现相邻色块突然从彩色直接跳到纯黑或纯白，颜色的深浅要连续过渡并保持色相一致。整体保留中间调，不把两端色阶截断，不要高对比死黑死白，不要 HDR，不要局部过曝。";

const vividGlassColorRule =
  `所有彩色玻璃区域必须明显提高饱和度，让颜色浓郁、鲜艳、有玻璃颜料密度。未明确要求换色时，保持原有色相体系和颜色分区；明确要求改变主体颜色时，允许彻底跨色系重构。不要浅淡、粉灰、发白、褪色、雾蒙蒙，或被强光洗成接近白色。深蓝、红、绿、紫、橙等主色要呈现鲜明但自然的富丽饱和度；浅色区域也要保留清楚色彩倾向，不能退化成近白。白色和乳白玻璃只在方案确实需要时作为白色点缀，不要让整体被洗白。逆光和窗光可以提亮色块，但不能降低饱和度、不能过曝、不能把颜色冲成水彩或半透明薄膜。提高饱和度时仍要保持哑光、实体、平面的传统彩色玻璃质感，不霓虹、不荧光、不使用 HDR 特效。${chromaticRangeControlRule}`;

const themeIsolationRule =
  "场景、节日元素和道具必须严格服从当前场景描述，不得自行增加未写出的主题或节日元素。当前场景没有明确写手机、人物玩手机、低头看手机、手持手机或屏幕时，不要出现任何手机和玩手机元素。背景只保留场景已经指定的 2 至 3 个道具，不添加未指定的节日装饰、人物动作或电子产品。";

const squareImageRatioRule =
  "图片比例必须严格为1:1正方形。无论生成主体变换、玻璃材质、选择基准图还是场景图，单张图片都必须使用1:1画幅，主体完整居中且不被裁切，不能生成横图、竖图、宽幅、长图或非正方形拼图。";

const sceneSubjectLockRule =
  "以当前主体为唯一主体，严格保持它的材质风格、色彩风格、文化风格、类型、外形、姿态、比例、关键识别特征、整体轮廓、情绪叙事、象征元素，以及现有挂链数量、加长后的长度和两条链条的分离关系不变。";

const sceneThreeImageRule =
  "请生成本场景的 3 张独立图片，不要拼图。三张必须保持同一主体、同一玻璃材质、同一挂链数量和同一背景场景；两条挂链始终加长、独立、分开、不交叉、不缠绕、不汇合、不连接；只允许在机位微调、景别、焦点、光线方向和道具位置中做轻微变化。";

const backgroundBudgetRule =
  "背景只保留 2 至 3 个相关道具，浅景深虚化，主体始终是最清晰的视觉中心。真实相机实拍，自然焦外虚化，材质与色彩风格保持与主体一致。主体必须是绝对平面的 2D 薄片，像纸一样薄，不能出现厚度、侧面、断面、浮雕、凸起人脸、立体包边或 3D 体积轮廓。彩玻主体产生的影子、墙面投影、桌面投影和倒影必须明显带主体本身的颜色，不能是纯黑、深灰或灰黑色实心剪影；如果倒影不够清晰，改成柔和但看得出颜色的玻璃光斑。建筑、家具、植物、窗框等背景物件的光影保持正常真实现场效果，不要做彩色化。";

const scenePlacementRule =
  "【场景悬挂位置：窗边优先，墙边兜底】先判断展示方式。近景特写、微距细节、平放桌面或地面展示、手提展示不受强制悬挂位置限制，但主体仍必须由桌面、地面、手或其他真实支撑承载，不能无支撑漂浮。除此之外，只要场景出现窗户、落地窗、窗台、窗帘、窗外景物、玻璃门、阳台、阳光房或室外自然光，主体必须优先挂在窗边、窗框内侧、窗帘旁或最近的可见墙面，挂链连接到窗框、挂杆、墙钩、画外固定点或其他真实支撑。若场景原本描述客厅、卧室、餐厅、书房、壁炉、沙发、床、餐桌、茶几、地毯、走廊、房间中部等室内环境，必须把主体重新安排到该空间内有自然光的窗边或就近墙面，不能挂在房间中央、家具上方、地板中央、吊灯下或远离支撑面的空中。若场景没有窗户但有可用墙面，必须挂在墙上；若无窗也无墙，优先改为手提、近景特写或可支撑的桌面或平面展示。场景文字即使要求“悬挂在房间中间、沙发上、床上、餐桌上方、茶几上方、房间中央”，也必须改写为窗边悬挂或墙面悬挂。室外场景优先挂在树枝、篱笆、门廊、窗框、墙面或其他真实支架上，不能悬在没有物理连接点的空中。三张图必须保持同一展示位置逻辑，只可轻微变化机位、焦段、光线和窗景，不得一张在窗边、一张漂浮在房间中央。";

const sceneNegativeRule =
  "不要改变主体，不要改变材质，不要改变色彩风格，不要改变文化风格，不要改变主体类型，不要改变已经确定的挂链数量；主体阶段已补齐两条挂链时，后续必须严格保留两条，不要增加、删除或缩短挂链，不要把两条挂链合并、交叉、缠绕或汇合，不要复制原图构图，不要增加第二主体，不要复杂背景，不要文字，不要水印，不要拼图。";

const strictColorPreservationRule =
  "【最高优先级：严格锁定图一颜色】图一不是配色参考，而是唯一、精确、不可替换的颜色基准。必须逐一保持每个玻璃色块的色相、饱和度、明度、面积比例、相邻关系和铅线位置，不得把红橙改为其他红色、不得把墨绿改为蓝绿、不得把黄色改为橙色、不得把黑色或深灰改为蓝紫、深棕或其他色相。禁止调色、禁止提高饱和度、禁止统一暖色调、禁止滤镜效果、禁止色彩动态范围重映射；不得因为图二只做材质参考就把图二的红色、绿色、白色、金色或其他颜色带入主体。图三只提供背景和环境光，背景颜色、暖光、倒影和道具不得映射到主体内部。若图一已经是彩色玻璃，本轮不得重新设计或重新配色，只能保持主体原样并更换背景、机位、光线方向或场景。任何明显颜色偏差都判定为失败并重新生成。";

const giftEmotionStoryRule =
  "【送礼、纪念与情绪价值要求】设计必须优先考虑购买者把作品作为礼物、纪念物或家居情感摆件来使用，而不是只做视觉炫技。每张方案都要让人能读懂一个明确、克制、真实的情绪主题，例如守护、陪伴、思念、纪念、祝福、希望、勇气、家庭、友谊、成长、自由、自然与爱。情绪主题必须通过主体姿态、象征物件、花语、纹章、边框、月亮、星星、水波、枝叶或颜色关系自然表达，不要添加说明文字、品牌口号、人物对白或夸张营销元素。画面既要有礼物感和收藏感，也要保留主体身份识别、完整轮廓，以及适合长期悬挂或书架摆放展示的安静气质。三张方案应呈现不同的情绪叙事方向，不能只是同一主题轻微改姿势。";

const poseNarrativeVariationRule =
  "【姿势动作创新要求】这是适用于所有主体的通用规则。三张方案必须使用三个明显不同的动作原型，不能在同一动作框架上只改变手臂角度、头朝向、身体倾斜或左右翻转。第一张优先采用“守护与祝福”动作：身体稳定，双臂、翅膀、披风、发带或主体结构向外展开，形成庇护、迎接、祝福、环抱或守望手势。第二张优先采用“纪念与赠予”动作：可跪坐、漂浮、侧坐、半蹲或半身回望，身体前倾，双手向前献花、星光、信物、灯、信笺或纪念物，形成克制的回忆弧线。第三张优先采用“勇气与成长”动作：向上跃起、腾空、攀爬、转身、跨越、破晓、脱离旧结构或从花叶中新生，身体形成清晰的上升线或对角线。除这三类外，也可以使用引路、回望、倾听、托举、祈愿、蜕变等动作。三张中最典型的基础接触、支撑、骑坐、趴卧、抱持、依附、踩踏或蜷缩关系最多只能保留一张，另外两张必须改变主体与核心道具、坐骑、底座、背景结构或其他主体的空间关系。核心道具不能每张都承担同样功能，可以分别变成背后的守护轮廓、环绕身体的光环、托举主体的平台、主体跨越的桥梁、摇篮、门洞、背景符号、容器或与主体完全无接触的独立物件。至少一张不能与核心道具发生骑坐、趴卧或依附关系；至少一张必须有明确的祝福或赠予手势；至少一张必须出现明显的上升、飞跃、跨步前进或跨越动势。三张的轮廓重心也要分开，分别偏横向展开、纵向上升和对角线趋势，不能三张都停留在同一个中心位置和同一基础姿势。";

const chainLengthSeparationRule =
  "【挂链长度与分离要求】先判断本轮产品类型。若本轮是彩色玻璃挂饰、Suncatcher、墙面悬挂装饰、场景悬挂展示或商品悬挂摄影，图一即使没有画挂链，也必须默认补齐两条独立长挂链；若图一已经有一条则保持一条，若图一已经有两条则严格保留两条，不多不少。若本轮明确是书挡、摆件、桌面装饰、平面纪念牌，或用户明确要求不要挂链，则不添加挂链。图二、图三和背景图中的挂链数量不得覆盖本规则。挂链长度约为主体可见高度的30%至45%，向上延伸并占据画面上方留白，不能只露出短圆环或短链头。两条挂链必须从主体顶部两个不同连接点分别向外侧自然展开，全程保持清楚间距，不交叉、不缠绕、不扭转、不并线、不汇合、不共用同一横杆、圆环、夹扣或末端连接点，不在画面内形成V形、封闭三角形、交叉点或单条吊线。若链条需要连接到画外固定点，连接结构应位于画框外，画框内始终保持两条独立、完整、连续、分离的链条。挂链必须自然承重，不下垂穿过主体，不遮挡主体关键图案。";

const bookendProductRule =
  "【产品款式最高优先级：书挡款，独立异形主体，黑线轮廓，连续玻璃整体】本轮生成的是书挡，不是挂饰，也不是完整矩形玻璃画。彩色主体只有图案自身的不规则轮廓，材质与挂链款完全相同：平面2D彩色玻璃、黑色或深灰哑光外轮廓、连续完整的玻璃主体。内部允许有连贯的图案线、羽毛线、花瓣线和颜色分区，但必须是一个完整主体，不能分成一堆独立小玻璃片，不能出现随机碎玻璃、碎片、放射状碎块、散落碎渣或马赛克碎裂感。主体之外只出现木质底座，除彩色主体本身外不出现其他玻璃结构。默认生成两个彼此独立的书挡，每个书挡各有一条深胡桃木竖向木板和一条横向底脚，不能共用一个连续长底座或中央透明立柱。左侧书挡的彩色主体位于自己的竖板外侧，内侧边缘直接贴合、插入或嵌入竖板窄槽；右侧书挡做完全镜像。两块竖板朝内夹住2至4本精装书，主体朝外展开，不能把主体放在书本正前方中央。竖向木板沿主体内侧上升，覆盖主体可见高度约60%至85%，不能被省略、缩成细线或藏进透明板后面。主体与木座之间的连接只能依靠主体连续边缘直接接入木质底座，连接处必须有真实接触、槽位、黑线包边和阴影，不能悬空。书脊可出现简短英文艺术书名。";

const bookendContinuousGlassRule =
  "【书挡完整玻璃连接面与落地要求】彩色主体与竖向木板、横向木板之间必须由同一块连续玻璃轮廓直接连接，不允许只靠一条黑线、细杆、树枝状线条、金属细脚或空白缝隙相连。主体靠近木板的一侧必须自然延伸成大块完整玻璃连接面，连接面与主体共享连续外轮廓和黑线包边，颜色使用主体同色、白色、乳白或浅灰实体玻璃，不能拆成若干零散玻璃片。主体下缘、尾巴或花卉茎叶必须实际接触横向木板上表面，不能悬空；若尾巴或主体边缘靠近横向木板，必须用完整玻璃延长后落在横板上。横向木底座的下表面必须完整贴合桌面，形成连续、真实的接地阴影。横向木板下面不得出现任何木圆柱脚、小木脚、木钉、方脚、垫木、垫片、第二层底木、隐藏支撑或抬高结构；横向木板的底面本身就是唯一接触桌面的最低表面，必须直接平放在桌面上。主体下方不能出现额外的小玻璃脚、零散碎片、悬空细支架或与主体不相连的玻璃件。";

const bookendMirrorSymmetryRule =
  "【书挡严格镜像对称】当前是同一张主体图或只上传一张图，左右书挡必须是严格的镜像复制，不允许改成两个不同动作或不同结构的方案。左右主体的姿势、朝向、翅膀开合、尾巴落点、腿部接触点、玻璃连接面形状和颜色分区必须镜像对应；左右竖向木板的高度、宽度、厚度和倾斜角度必须相同；左右横向木板的长度、厚度、离地高度和接地方式必须相同；左右主体与书本的接触面也必须镜像对应。不能一边翅膀展开、另一边翅膀收拢，不能一边主体更大、更小、更高、更低或旋转不同，不能一边横板更长、更厚、更斜或带额外支撑。若某个动作无法严格镜像，必须把两侧都改成同一个可镜像动作，而不是保留左右不同的姿势。";

const bookendSceneSubjectLockRule =
  "以当前书挡主体为唯一产品，严格保持图案自身的异形轮廓、黑色或深灰外轮廓、彩色玻璃材质、主体与木板的直接连接方式、两个独立书挡各自的深胡桃木L形底座、竖向木板高度与厚度、横向底脚长度、成对或单只关系、书本数量和左右摆放逻辑不变。左侧主体只能直接连接左侧书挡自己的竖板窄槽，右侧主体只能直接连接右侧书挡自己的竖板窄槽，不能把两个主体合并到中央底座，不能新增中央透明立柱。主体之外只出现木质底座，除主体本身外不增加其他玻璃结构，不得删除竖向木板，也不得把主体改成悬浮摆件、挂饰、相框、风铃或完整矩形玻璃画。";

const bookendSceneThreeImageRule =
  "请生成本场景的3张独立图片，不要拼图。三张必须保持同一对独立书挡、同一异形主体、同一彩色玻璃与黑线材质、同一直接嵌木连接结构、每侧各一的深胡桃木L形底座和同一背景场景；必须明确看到左侧主体直接嵌入左侧竖板窄槽、右侧主体镜像连接右侧竖板，主体朝外展开，书本位于两块竖板之间。每张都必须完整展示两个竖向木板、两个横向底脚、主体与木板的接触点和倚靠书本，主体之外只出现木质底座，除主体本身外不出现其他玻璃结构，不出现整圈透明边框、透明背板、中央透明立柱、共享长底座、挂链或吊环。三张只允许在机位微调、景别、焦点、光线方向、书本数量、书脊文字和道具位置中做轻微变化。";

const bookendScenePlacementRule =
  "【书挡场景摆放：书架与水平台面优先】书挡必须始终放在稳定、真实的水平支撑面上，优先选择木质书架、书桌、窗台、边桌、玄关柜、壁炉台、工作台或阅读角层板。若场景出现窗户、窗帘、阳光或窗外景物，书挡放在窗下书桌、窗台或靠窗书架上，让自然光从侧后方透过玻璃，不能改成悬挂。成对时将两个独立书挡分别放在精装书左右两端，主体朝外、竖板朝内，不能拼成共享长底座，也不能在中央增加透明立柱。镜头必须让两侧各自的竖向木板、横向底脚、主体支撑点和书脊同时可辨，不能只拍横向底脚或把任一侧竖板遮住。书本必须有真实厚度、书脊、纸张边缘和接触阴影，书挡不能悬空、倾斜倒塌、穿进书本或放在软布上失去支撑。画面只保留2至4个相关道具，例如书、小盆栽、台灯、马克杯、阅读眼镜、干花或木托盘，不能出现挂链、挂钩和窗挂结构。";

const bookendSceneNegativeRule =
  "不要改变异形主体、黑色或深灰外轮廓、彩色玻璃材质、主体与木板的直接嵌槽连接、L形木质底座结构、竖向木板高度与厚度、横向底脚长度、色彩风格和左右关系；不要增加挂链、吊绳、吊环、挂钩、吸盘、上方悬挂点、墙面安装或空中悬浮；主体之外只出现木质底座，除主体本身外不增加其他玻璃结构，不增加整圈玻璃边框、透明背板、透明圆形托盘或矩形支撑板；不要删除或缩短竖向木板，不要把底座换成透明亚克力、塑料、金属细杆或3D雕刻；不要让书本漂浮、穿模、失去重量或压住图案；书脊文字只能用简短清晰的英文艺术书名，不要乱码、长段文字、水印或品牌标志；不要增加第二套无关主体、复杂背景或拼图。";

const bookendCloseUpShootingRule =
  "【书档近景特写组】本组采用近距离商品特写，相机距离书挡主体约35至80厘米，书挡主体、完整玻璃连接面、竖向木板、横向底脚和至少一段书脊合计占画面约70%至85%。使用50至85毫米等效焦段和自然浅景深，背景虚化约55%至70%，不要夸张到只剩色块。书桌、书架、书本、绿植、窗光、台灯或墙面仍应保留可辨认的模糊轮廓，但不能比书挡更清晰，不能遮挡书挡、底座和书本承重关系。若角度变量与距离冲突，保留机位方向、高度和时间氛围，但把拍摄距离调整为近景。";

const bookendNormalSceneRule =
  "【书档正常背景组】本组采用正常商品环境拍摄，不要强制近景，也不要夸张虚化。相机距离书挡主体约70至130厘米，书挡主体、完整玻璃连接面、竖向木板、横向底脚和书本书脊合计占画面约45%至65%。使用35至70毫米等效焦段，背景保持可辨认但仍低对比，背景虚化约35%至55%。可以让观者看清书桌、书架、窗边、墙面或阅读角的整体氛围，但不要拍成挂链款的房间大远景或远景风光，也不要把书挡缩成画面角落的小物件。";

const bookendMaterialPriorityRule =
  "【书挡材质与整体性最高优先级】书挡款的彩色主体材质与挂链款完全相同：平面2D彩色玻璃、黑色或深灰哑光外轮廓、连续完整的手工玻璃质感，不改成薄印刷亚克力、透明水晶、果冻或厚玻璃。主体可以有连贯图案线，但必须保持为一个完整玻璃整体，不能被拆成一堆小片，也不能出现随机碎玻璃、碎片、放射状裂纹或散落玻璃渣。主体之外只出现木质底座，除主体本身外不出现其他玻璃结构，连接只能由主体连续边缘直接嵌入木质底座窄槽完成。木质部分必须是暖棕到深棕的实心胡桃木L形书挡，竖向木板与横向底脚都清楚可见，木纹自然、连接真实。";

function isBookendProduct() {
  return currentProductType === "bookend";
}

function buildBookendImageMappingRule() {
  if (!isBookendProduct()) return "";
  const hasLeft = Boolean(bookendImageDataUrls.left);
  const hasRight = Boolean(bookendImageDataUrls.right);
  const isSymmetric =
    !hasRight ||
    !bookendImageDataUrls.left ||
    bookendImageDataUrls.left === bookendImageDataUrls.right;

  if (hasLeft && hasRight && !isSymmetric) {
    const leftName = bookendFileNames.left || "左书挡图片";
    const rightName = bookendFileNames.right || "右书挡图片";
    return `【书挡图片对应关系：左右不同】图一必须是${leftName}，用于左侧书挡玻璃主体；图二必须是${rightName}，用于右侧书挡玻璃主体。两张图片必须分别保留各自主体的识别锚点，不能交换左右、不能把两张混成一个图案、不能强行镜像、不能只使用其中一张。左右书挡仅在木质底座结构、玻璃材质、铅线工艺、光线和场景上保持统一，主体图案与颜色可以不同。忽略材质规则中“图二是材质参考”的旧编号；材质只按文字要求执行，只有额外上传材质图时才放在图三，额外背景图放在图四。`;
  }

  return `【书挡图片对应关系：默认镜像对称】当前两张主体图相同，或只上传了一张。系统必须默认生成一对左右镜像书挡，两块玻璃面板共享同一主体、同一颜色和同一玻璃工艺，只在左右方向做自然镜像；可以做轻微局部变化，但不能变成两个无关主体。若图中主体本身不适合机械镜像，则保持左右版式、底座和书本关系对称。此时图一是唯一主体参考，图二可作材质参考，图三可作背景参考；若没有额外参考图，则完全按文字规则生成。${bookendMirrorSymmetryRule}`;
}

function getProductStructureRule() {
  return isBookendProduct()
    ? `${bookendProductRule}${bookendContinuousGlassRule}${buildBookendImageMappingRule()}`
    : chainLengthSeparationRule;
}

function getSceneSubjectLockRule() {
  return isBookendProduct()
    ? `${bookendSceneSubjectLockRule}${bookendContinuousGlassRule}`
    : sceneSubjectLockRule;
}

function getSceneThreeImageRule() {
  return isBookendProduct()
    ? `${bookendSceneThreeImageRule}${bookendContinuousGlassRule}`
    : sceneThreeImageRule;
}

function getScenePlacementRule() {
  return isBookendProduct()
    ? bookendScenePlacementRule
    : scenePlacementRule;
}

function getSceneNegativeRule() {
  return isBookendProduct()
    ? `${bookendSceneNegativeRule}${bookendContinuousGlassRule}`
    : sceneNegativeRule;
}

function getBookendCaptureModeRule(index) {
  if (!isBookendProduct()) return "";
  return [0, 3, 5].includes(index)
    ? bookendCloseUpShootingRule
    : bookendNormalSceneRule;
}

function getProductMaterialPriorityRule() {
  return isBookendProduct() ? bookendMaterialPriorityRule : "";
}

const elements = {
  imageInput: document.querySelector("#imageInput"),
  dropzone: document.querySelector("#dropzone"),
  previewImage: document.querySelector("#previewImage"),
  singleUploadArea: document.querySelector("#singleUploadArea"),
  bookendUploadArea: document.querySelector("#bookendUploadArea"),
  leftImageInput: document.querySelector("#leftImageInput"),
  rightImageInput: document.querySelector("#rightImageInput"),
  leftDropzone: document.querySelector("#leftDropzone"),
  rightDropzone: document.querySelector("#rightDropzone"),
  leftPreviewImage: document.querySelector("#leftPreviewImage"),
  rightPreviewImage: document.querySelector("#rightPreviewImage"),
  productTypeHint: document.querySelector("#productTypeHint"),
  clearButton: document.querySelector("#clearButton"),
  analysisPanel: document.querySelector("#analysisPanel"),
  palette: document.querySelector("#palette"),
  brightnessValue: document.querySelector("#brightnessValue"),
  temperatureValue: document.querySelector("#temperatureValue"),
  saturationValue: document.querySelector("#saturationValue"),
  contrastValue: document.querySelector("#contrastValue"),
  orientationValue: document.querySelector("#orientationValue"),
  analysisTags: document.querySelector("#analysisTags"),
  timeSelect: document.querySelector("#timeSelect"),
  resultsPanel: document.querySelector("#resultsPanel"),
  resultList: document.querySelector("#resultList"),
  regenerateButton: document.querySelector("#regenerateButton"),
  copyAllButton: document.querySelector("#copyAllButton"),
  copyLibraryButton: document.querySelector("#copyLibraryButton"),
  copySubjectButton: document.querySelector("#copySubjectButton"),
  copyMaterialButton: document.querySelector("#copyMaterialButton"),
  copySelectionButton: document.querySelector("#copySelectionButton"),
  productTypeSelect: document.querySelector("#productTypeSelect"),
  subjectModeSelect: document.querySelector("#subjectModeSelect"),
  colorVariableSelect: document.querySelector("#colorVariableSelect"),
  randomColorButton: document.querySelector("#randomColorButton"),
  colorSwatches: document.querySelector("#colorSwatches"),
  colorVariableDescription: document.querySelector("#colorVariableDescription"),
  colorOrderEditor: document.querySelector("#colorOrderEditor"),
  colorOrderList: document.querySelector("#colorOrderList"),
  resetColorOrderButton: document.querySelector("#resetColorOrderButton"),
  paletteSizeFilters: document.querySelector("#paletteSizeFilters"),
  pinterestPaletteGrid: document.querySelector("#pinterestPaletteGrid"),
  pinterestPaletteCount: document.querySelector("#pinterestPaletteCount"),
  shapeVariableSelect: document.querySelector("#shapeVariableSelect"),
  randomShapeButton: document.querySelector("#randomShapeButton"),
  shapeVariableDescription: document.querySelector("#shapeVariableDescription"),
  customColorEditor: document.querySelector("#customColorEditor"),
  customColorList: document.querySelector("#customColorList"),
  addCustomColorButton: document.querySelector("#addCustomColorButton"),
  subjectPromptBox: document.querySelector("#subjectPromptBox"),
  materialPromptBox: document.querySelector("#materialPromptBox"),
  selectionPromptBox: document.querySelector("#selectionPromptBox"),
  descriptionPanel: document.querySelector("#descriptionPanel"),
  descriptionBox: document.querySelector("#descriptionBox"),
  copyStatus: document.querySelector("#copyStatus"),
  regenerateCopyButton: document.querySelector("#regenerateCopyButton"),
  copyDescriptionButton: document.querySelector("#copyDescriptionButton"),
  copySubjectInput: document.querySelector("#copySubjectInput"),
  downloadAllButton: document.querySelector("#downloadAllButton"),
  toast: document.querySelector("#toast"),
};

let currentImage = null;
let currentImageDataUrl = "";
let currentImageFile = null;
let currentPrimarySlot = "single";
let currentAnalysis = null;
let currentResults = [];
let currentDescription = "";
let currentColorVariableId = "none";
let currentPaletteSize = "auto";
const paletteOrderOverrides = new Map();
let currentShapeVariableId = "random";
let currentSubjectTransformMode = "abstract";
let currentProductType = "hanging";
let bookendImages = {
  left: null,
  right: null,
};
let bookendImageDataUrls = {
  left: "",
  right: "",
};
let bookendFileNames = {
  left: "",
  right: "",
};
let bookendFiles = {
  left: null,
  right: null,
};
let customColors = (() => {
  try {
    const saved = JSON.parse(localStorage.getItem("stained-glass-custom-colors") || "[]");
    const normalized = Array.isArray(saved)
      ? saved.map(normalizeHexColor).filter(Boolean).slice(0, 8)
      : [];
    return normalized.length ? normalized : ["#D83B36"];
  } catch {
    return ["#D83B36"];
  }
})();
let seedOffset = 0;
const previewObjectUrls = {
  single: "",
  left: "",
  right: "",
};
let copyRequestSerial = 0;
let copySubjectTimer = 0;
const serverKeys = { deepseek: false, doubao: false };

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2600);
}

const panelStickerSets = [
  { selector: ".upload-panel", images: ["day1-1", "day1-2", "day1-3"] },
  { selector: ".analysis-panel", images: ["day1-4", "day1-5", "day1-6"] },
  { selector: ".library-panel", images: ["day1-7", "day1-8", "day2-9"] },
  { selector: ".selection-panel", images: ["day2-10", "day2-11", "day2-12"] },
  { selector: ".results-panel", images: ["day2-13", "day2-14", "day2-15"] },
  { selector: ".description-panel", images: ["day2-16", "day2-17", "day2-18"] },
];

function addPanelStickers() {
  for (const set of panelStickerSets) {
    const panel = document.querySelector(set.selector);
    if (!panel || panel.dataset.stickersReady === "true") continue;
    set.images.forEach((imageId, index) => {
      const image = document.createElement("img");
      image.className = `panel-sticker panel-sticker-${index + 1}`;
      image.src = `/portfolio-subjects/${imageId}-web.jpg`;
      image.alt = "";
      image.decoding = "async";
      panel.prepend(image);
    });
    panel.dataset.stickersReady = "true";
  }
}

const listingSubjectKnowledge = [
  {
    keys: ["hummingbird", "蜂鸟"],
    subject: "Hummingbird",
    productType: "Stained Glass Suncatcher",
    giftFor: ["Mom", "Grandma", "Mother-in-Law", "Bird Lovers"],
    meanings: ["joy", "resilience", "positive energy", "hope"],
    occasions: ["Mother's Day", "Birthday", "Housewarming", "Thank You Gift"],
  },
  {
    keys: ["cardinal", "red bird", "红雀"],
    subject: "Cardinal",
    productType: "Stained Glass Memorial Suncatcher",
    giftFor: ["Mom", "Grandma", "Sympathy Gift Recipient", "Family"],
    meanings: ["remembrance", "comfort", "love that stays near", "hope"],
    occasions: ["Memorial Gift", "Sympathy Gift", "Christmas", "Birthday"],
  },
  {
    keys: ["bluebird", "blue jay", "chickadee", "goldfinch", "owl", "蓝鸟", "蓝松鸦", "山雀", "猫头鹰"],
    subject: "Songbird",
    productType: "Stained Glass Bird Suncatcher",
    giftFor: ["Bird Watchers", "Nature Lovers", "Mom", "Grandparents"],
    meanings: ["freedom", "spring", "nature", "new beginnings"],
    occasions: ["Birthday", "Mother's Day", "Housewarming", "Garden Gift"],
  },
  {
    keys: ["birth flower", "birth month", "family flower", "flower bouquet", "生日花", "花束"],
    subject: "Birth Flower Bouquet",
    productType: "Personalized Stained Glass Suncatcher",
    giftFor: ["Mom", "Grandma", "Sister", "Best Friend", "Family"],
    meanings: ["family bond", "personal identity", "birth month", "lasting love"],
    occasions: ["Birthday", "Mother's Day", "Family Gift", "Anniversary"],
  },
  {
    keys: ["sunflower", "rose", "lily", "freesia", "sweet pea", "tulip", "flower", "花卉", "花"],
    subject: "Floral",
    productType: "Stained Glass Flower Suncatcher",
    giftFor: ["Mom", "Grandma", "Sister", "Best Friend", "Plant Lovers"],
    meanings: ["love", "growth", "friendship", "new beginnings"],
    occasions: ["Birthday", "Mother's Day", "Anniversary", "Get Well Gift"],
  },
  {
    keys: ["dog", "cat", "pet portrait", "pet memorial", "狗狗", "猫咪", "宠物"],
    subject: "Pet Portrait",
    productType: "Custom Stained Glass Suncatcher",
    giftFor: ["Dog Moms and Dads", "Cat Lovers", "Pet Parents", "Sympathy Gift Recipient"],
    meanings: ["unconditional love", "companionship", "memory", "pet loss comfort"],
    occasions: ["Pet Memorial", "Birthday", "Adoption Day", "Sympathy Gift"],
  },
  {
    keys: ["luna moth", "moth", "butterfly", "monarch", "moon moth", "飞蛾", "蝴蝶"],
    subject: "Luna Moth",
    productType: "Stained Glass Suncatcher",
    giftFor: ["Nature Lovers", "Boho Home Decor Lovers", "Mom", "Collectors"],
    meanings: ["transformation", "renewal", "hope", "new beginnings"],
    occasions: ["Birthday", "Housewarming", "Christmas", "Encouragement Gift"],
  },
  {
    keys: ["bookend", "bookends", "ginkgo", "leaf bookend", "书挡", "银杏"],
    subject: "Ginkgo Leaf",
    productType: "Stained Glass Bookends",
    giftFor: ["Book Lovers", "Readers", "Home Office Owners", "New Homeowners"],
    meanings: ["growth", "longevity", "wisdom", "strength"],
    occasions: ["Housewarming", "Birthday", "Graduation", "Office Gift"],
  },
  {
    keys: ["plant stake", "garden stake", "plant lover", "garden", "植物插牌", "花园"],
    subject: "Garden Art",
    productType: "Stained Glass Plant Stake",
    giftFor: ["Plant Lovers", "Gardeners", "Grandma", "Nature Lovers"],
    meanings: ["growth", "care", "renewal", "a flourishing home"],
    occasions: ["Housewarming", "Mother's Day", "Garden Gift", "Birthday"],
  },
  {
    keys: ["angel", "star", "crystal", "rainbow", "天使", "星星", "水晶", "彩虹"],
    subject: "Celestial",
    productType: "Stained Glass Suncatcher",
    giftFor: ["Mom", "Friends", "Spiritual Gift Recipients", "New Homeowners"],
    meanings: ["protection", "hope", "blessing", "light"],
    occasions: ["Christmas", "Baby Shower", "Wedding", "New Home Gift"],
  },
];

function getCopySubjectHint() {
  const entered = String(elements.copySubjectInput?.value || "").trim();
  if (entered) return entered.slice(0, 120);
  const fileName = String(currentAnalysis?.fileName || "");
  const stem = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b(final|render|result|image|photo|copy|top|玻璃|主体|成品)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!stem || /^(img|dsc|image|photo|主体|图片|微信图片)[\s-]*\d+$/i.test(stem)) return "";
  if (/(ui[\s-]*preview|screenshot|screen capture|preview image)/i.test(stem)) return "";
  return stem.slice(0, 120);
}

function titleCaseSubject(value) {
  return String(value || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => (word.length <= 3 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)))
    .join(" ");
}

function matchListingSubject(subjectHint) {
  const haystack = String(subjectHint || "").toLowerCase();
  return (
    listingSubjectKnowledge.find((item) =>
      item.keys.some((key) => haystack.includes(key.toLowerCase())),
    ) || null
  );
}

function formatDescriptionList(items) {
  return (Array.isArray(items) ? items : [])
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function formatListingCopy(structured) {
  const data = structured && typeof structured === "object" ? structured : {};
  const titles = formatDescriptionList(data.titles);
  const giftFor = formatDescriptionList(data.giftFor);
  const meanings = formatDescriptionList(data.meanings);
  const occasions = formatDescriptionList(data.occasions);
  const tags = formatDescriptionList(data.tags);
  const keywords = formatDescriptionList(data.keywords);
  const lines = [];

  if (titles.length) {
    lines.push("【Etsy 标题方案】", ...titles.map((title, index) => `${index + 1}. ${title}`), "");
  }
  if (data.shortDescription) {
    lines.push("【英文短简介】", String(data.shortDescription).trim(), "");
  }
  if (data.fullDescription) {
    lines.push("【英文完整简介】", String(data.fullDescription).trim(), "");
  }
  if (giftFor.length) lines.push("【适合送给】", ...giftFor.map((item) => `- ${item}`), "");
  if (meanings.length) lines.push("【图案寓意】", ...meanings.map((item) => `- ${item}`), "");
  if (occasions.length) lines.push("【适用场合】", ...occasions.map((item) => `- ${item}`), "");
  if (tags.length) lines.push("【Etsy Tags】", tags.join(", "), "");
  if (keywords.length) lines.push("【长尾搜索词】", keywords.join(", "), "");
  if (data.chineseSummary) lines.push("【中文摘要】", String(data.chineseSummary).trim());

  return lines.join("\n").trim();
}

function buildLocalListingCopy() {
  const hint = getCopySubjectHint();
  const matched = matchListingSubject(hint);
  const genericSubject = hint ? titleCaseSubject(hint) : "Stained Glass Art";
  const subject = matched?.subject || genericSubject;
  const productType =
    matched?.productType || (subject === "Stained Glass Art" ? "Suncatcher" : "Stained Glass Suncatcher");
  const giftFor = matched?.giftFor || ["Mom", "Grandma", "Best Friend", "Home Decor Lovers"];
  const meanings = matched?.meanings || ["light", "beauty", "handmade care", "a meaningful keepsake"];
  const occasions = matched?.occasions || ["Birthday", "Housewarming", "Mother's Day", "Thank You Gift"];
  const giftText = giftFor.slice(0, 3).join(", ");
  const meaningText = meanings.slice(0, 3).join(", ");
  const isGenericSubject = subject === "Stained Glass Art";
  const safeSubject = isGenericSubject ? "" : subject.toLowerCase();
  const titles = isGenericSubject
    ? [
        `Handmade Stained Glass Suncatcher, Colorful Window Hanging, Gift for ${giftFor[0]}`,
        `Stained Glass Art Suncatcher, Handmade Window Decor, Gift for ${giftFor[1] || "Her"}`,
        `Colorful Stained Glass Window Art, ${occasions[0]} Gift, Handmade Home Decor`,
      ]
    : [
        `${subject} ${productType}, Colorful Window Hanging, Gift for ${giftFor[0]}`,
        `Handmade ${subject} Stained Glass Decor, Suncatcher Gift for ${giftFor[1] || "Her"}`,
        `${subject} Glass Window Art, ${occasions[0]} Gift, Colorful Home Decor`,
      ];
  const shortDescription = isGenericSubject
    ? "A colorful handmade stained glass design created to bring light, color, and a meaningful story to a window or cozy corner."
    : `A colorful handmade stained glass ${safeSubject} design created to bring light, color, and a meaningful story to a window or cozy corner.`;
  const fullDescription = [
    isGenericSubject
      ? "This handmade stained glass piece brings rich color, clear dark outlines, and the dimensional glow of traditional glasswork into focus."
      : `This handmade stained glass ${safeSubject} brings the subject into focus with rich color, clear dark outlines, and the dimensional glow of traditional glasswork.`,
    `It represents ${meaningText}, making it a thoughtful choice for ${giftText}. The compact window-hanging format works beautifully in a bedroom, living room, sunroom, kitchen window, reading nook, or gift-ready display.`,
    `Please confirm the available size, hanging chain, and customization options before ordering. Each piece may show small differences in glass color and pattern placement because it is individually made.`,
  ].join("\n\n");
  const tags = [
    subject.toLowerCase(),
    "stained glass",
    "glass suncatcher",
    "window hanging",
    "handmade gift",
    "colorful home decor",
    "gift for mom",
    "bird lover gift",
    "birthday gift",
    "housewarming gift",
  ];
  const keywords = [
    isGenericSubject
      ? "handmade stained glass suncatcher"
      : `handmade ${safeSubject} stained glass suncatcher`,
    isGenericSubject
      ? "colorful stained glass window hanging gift"
      : `colorful ${safeSubject} window hanging gift`,
    isGenericSubject
      ? `stained glass art for ${giftFor[0].toLowerCase()}`
      : `${subject.toLowerCase()} glass art for ${giftFor[0].toLowerCase()}`,
    `${occasions[0].toLowerCase()} stained glass gift`,
  ];
  const chineseSummary =
    `这款手工彩色玻璃${isGenericSubject ? "作品" : subject}挂饰适合送给${giftFor.join("、")}，可表达${meanings.join("、")}等寓意。` +
    `推荐用于窗户、客厅、卧室、阳光房或阅读角，也适合作为${occasions.join("、")}礼物。`;

  return formatListingCopy({
    titles,
    shortDescription,
    fullDescription,
    giftFor,
    meanings,
    occasions,
    tags,
    keywords,
    chineseSummary,
  });
}

function getVisionConfiguration() {
  const storedProvider = sessionStorage.getItem("generation-provider");
  const provider = storedProvider === "doubao" ? "doubao" : "deepseek";
  const providerKey = sessionStorage.getItem(`${provider}-api-key`) || "";
  return {
    provider,
    providerKey,
    baseUrl:
      provider === "deepseek"
        ? sessionStorage.getItem("deepseek-base-url") || "https://api.deepseek.com/v1"
        : sessionStorage.getItem("doubao-base-url") ||
          "https://ark.cn-beijing.volces.com/api/v3",
    model:
      provider === "deepseek"
        ? sessionStorage.getItem("deepseek-vision-model") || "deepseek-chat"
        : sessionStorage.getItem("doubao-vision-model") || "doubao-seed-1-6-250615",
  };
}

function hasVisionCredentials(config = getVisionConfiguration()) {
  return Boolean(config.providerKey || serverKeys[config.provider]);
}

async function loadServerCapabilities() {
  try {
    const response = await fetch("/api/health", { cache: "no-store" });
    if (!response.ok) return;
    const payload = await response.json();
    serverKeys.deepseek = Boolean(payload.deepseekKeyConfigured);
    serverKeys.doubao = Boolean(payload.doubaoKeyConfigured);
  } catch {
    // The local draft remains available when the optional vision service is offline.
  }
}

function setCopyBusy(busy) {
  elements.regenerateCopyButton.disabled = busy || !currentAnalysis;
  elements.regenerateCopyButton.textContent = busy ? "生成中..." : "重新生成";
}

function renderDescription(text, status = "") {
  currentDescription = String(text || "").trim();
  elements.descriptionBox.value = currentDescription;
  elements.copyStatus.textContent = status;
  elements.regenerateCopyButton.disabled = !currentAnalysis;
  elements.copyDescriptionButton.disabled = !currentDescription;
}

function optimizedImageDataUrl(image) {
  const maxDimension = 1600;
  const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.9);
}

async function generateListingCopy() {
  if (!currentImageDataUrl || !currentAnalysis) {
    showToast("请先上传主体图片");
    return;
  }

  const serial = ++copyRequestSerial;
  const localDraft = buildLocalListingCopy();
  renderDescription(localDraft, "已先生成可编辑简介草稿。");

  const config = getVisionConfiguration();
  if (!hasVisionCredentials(config)) {
    renderDescription(
      localDraft,
      "当前为本地简介草稿。若要按图片精确识别图案和寓意，请先在返回工作台配置视觉模型。",
    );
    return;
  }

  setCopyBusy(true);
  elements.copyStatus.textContent = "正在识别图片并生成商品简介...";
  try {
    const response = await fetch("/api/listing-copy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(config.providerKey ? { "x-provider-key": config.providerKey } : {}),
      },
      body: JSON.stringify({
        provider: config.provider,
        images: [currentImageDataUrl],
        subjectHint: getCopySubjectHint(),
        baseUrl: config.baseUrl,
        model: config.model,
      }),
    });
    const payload = await response.json();
    if (serial !== copyRequestSerial) return;
    if (!response.ok) throw new Error(payload.error || `HTTP ${response.status}`);
    const generated =
      payload.structured?.titles?.length || payload.structured?.fullDescription
        ? formatListingCopy(payload.structured)
        : String(payload.raw || "").trim();
    if (!generated) throw new Error("模型没有返回可用的商品简介");
    renderDescription(generated, "AI 商品简介已生成，可直接修改或复制。");
    showToast("商品简介与送礼寓意已生成");
  } catch (error) {
    if (serial !== copyRequestSerial) return;
    renderDescription(localDraft, `AI 生成失败，已保留本地草稿：${error.message}`);
    showToast("AI 简介生成失败，已保留本地草稿");
  } finally {
    if (serial === copyRequestSerial) setCopyBusy(false);
  }
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("图片无法读取"));
    };
    image.src = url;
  });
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((value) => Math.round(value).toString(16).padStart(2, "0")).join("")}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function analyzeImage(image, file) {
  const maxEdge = 720;
  const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, width, height);
  const data = context.getImageData(0, 0, width, height).data;

  let red = 0;
  let green = 0;
  let blue = 0;
  let brightness = 0;
  let saturation = 0;
  let luminanceSquared = 0;
  let samples = 0;
  const buckets = new Map();
  const colorProfile = {
    warmBrown: 0,
    gold: 0,
    coolBlue: 0,
    green: 0,
    pink: 0,
    dark: 0,
    light: 0,
    neutral: 0,
  };

  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      const index = (y * width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const alpha = data[index + 3] / 255;
      if (alpha < 0.1) continue;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const sat = max === 0 ? 0 : (max - min) / max;

      red += r;
      green += g;
      blue += b;
      brightness += lum;
      saturation += sat;
      luminanceSquared += lum * lum;
      samples++;

      if (r > g + 10 && g >= b && r - b > 30 && lum < 0.78) colorProfile.warmBrown++;
      if (r > 165 && g > 105 && b < 135 && r - g > 18) colorProfile.gold++;
      if (b > r + 15) colorProfile.coolBlue++;
      if (g > r * 1.08 && g > b * 1.08) colorProfile.green++;
      if (r > 150 && b > 110 && r - g > 20 && b - g > 5) colorProfile.pink++;
      if (lum < 0.22) colorProfile.dark++;
      if (lum > 0.73) colorProfile.light++;
      if (sat < 0.18) colorProfile.neutral++;

      const key = `${Math.round(r / 32)}-${Math.round(g / 32)}-${Math.round(b / 32)}`;
      const bucket = buckets.get(key) || { r: 0, g: 0, b: 0, count: 0 };
      bucket.r += r;
      bucket.g += g;
      bucket.b += b;
      bucket.count++;
      buckets.set(key, bucket);
    }
  }

  red /= Math.max(1, samples);
  green /= Math.max(1, samples);
  blue /= Math.max(1, samples);
  brightness /= Math.max(1, samples);
  saturation /= Math.max(1, samples);
  const contrast = Math.sqrt(
    Math.max(0, luminanceSquared / Math.max(1, samples) - brightness * brightness),
  );
  const temperature = red - blue;
  const orientation =
    width / height > 1.25 ? "landscape" : height / width > 1.25 ? "portrait" : "square";
  const profileEntries = Object.entries(colorProfile).sort((a, b) => b[1] - a[1]);
  const profileLabelMap = {
    warmBrown: "暖棕古典",
    gold: "金色华丽",
    coolBlue: "冷蓝清透",
    green: "自然绿意",
    pink: "柔粉浪漫",
    dark: "深色戏剧",
    light: "明亮轻盈",
    neutral: "中性极简",
  };
  const dominantProfile = profileEntries[0]?.[0] || "neutral";

  const colors = [...buckets.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
    .map((bucket) => ({
      r: bucket.r / bucket.count,
      g: bucket.g / bucket.count,
      b: bucket.b / bucket.count,
    }));

  const brightnessLabel =
    brightness < 0.34 ? "深色" : brightness < 0.62 ? "中等明度" : "明亮";
  const temperatureLabel =
    temperature > 18 ? "偏暖" : temperature < -18 ? "偏冷" : "中性";
  const saturationLabel =
    saturation < 0.18 ? "低饱和" : saturation < 0.42 ? "中等饱和" : "高饱和";
  const contrastLabel =
    contrast < 0.12 ? "低对比" : contrast < 0.22 ? "中等对比" : "高对比";
  const orientationLabel =
    orientation === "landscape" ? "横向" : orientation === "portrait" ? "竖向" : "方形";

  return {
    fileName: file.name,
    width: image.naturalWidth,
    height: image.naturalHeight,
    colors,
    brightness,
    brightnessLabel,
    temperature,
    temperatureLabel,
    saturation,
    saturationLabel,
    contrast,
    contrastLabel,
    orientation,
    orientationLabel,
    colorProfile,
    dominantProfile,
    profileLabel: profileLabelMap[dominantProfile],
  };
}

function seededRandom(seedText) {
  let seed = 2166136261;
  for (let index = 0; index < seedText.length; index++) {
    seed ^= seedText.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }
  return () => {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function scoreBackground(background, analysis) {
  let score = 0;
  const temperature = analysis.temperatureLabel === "偏暖" ? "warm" : analysis.temperatureLabel === "偏冷" ? "cool" : "neutral";
  const brightness = analysis.brightness < 0.36 ? "dark" : analysis.brightness > 0.7 ? "bright" : "medium";
  const contrast = analysis.contrast > 0.23 ? "strong" : analysis.contrast < 0.12 ? "soft" : "medium";

  if (background.temperature === temperature) score += 4;
  else if (background.temperature === "neutral" || temperature === "neutral") score += 1.5;
  if (background.brightness === brightness) score += 4;
  else if (
    (background.brightness === "medium" && brightness !== "medium") ||
    (brightness === "medium" && background.brightness !== "medium")
  ) {
    score += 1.5;
  }
  if (background.contrast === contrast) score += 3;
  else if (background.contrast === "medium" || contrast === "medium") score += 1;
  if (background.group === "nature" && analysis.saturation > 0.34) score += 1;
  if (background.group === "surface" && analysis.orientation === "square") score += 0.8;
  if (background.group === "window" && analysis.orientation === "portrait") score += 0.8;

  const profile = analysis.dominantProfile;
  const profileWeights = {
    warmBrown: {
      "classic-gallery": 4,
      "ivory-curtain": 3,
      "oak-table": 3,
      "cream-arch": 3,
      "studio-workshop": 3,
      "boucle-nook": 2,
      "classic-courtyard": 2,
      "marble-plinth": 2,
      "travertine-macro": 2,
      "coastal-window": -4,
      "starry-window": -4,
    },
    gold: {
      "classic-gallery": 4,
      "ivory-curtain": 3,
      "cream-arch": 3,
      "classic-courtyard": 3,
      "boucle-nook": 2,
      "coastal-window": -3,
      "starry-window": -2,
    },
    coolBlue: {
      "coastal-window": 5,
      "starry-window": 4,
      "white-caustics": 3,
      "wood-slat-garden": 2,
      "forest-fence": 2,
      "classic-courtyard": -2,
    },
    green: {
      "wood-slat-garden": 5,
      "forest-fence": 5,
      "classic-courtyard": 3,
      "coastal-window": 1,
      "starry-window": -2,
    },
    pink: {
      "boucle-nook": 3,
      "wood-slat-garden": 3,
      "classic-courtyard": 2,
      "white-caustics": 2,
      "ivory-curtain": 2,
      "stone-corridor": -3,
    },
    dark: {
      "stone-corridor": 4,
      "starry-window": 4,
      "studio-workshop": 1,
      "coastal-window": -2,
      "ivory-curtain": -2,
      "pale-museum": -3,
    },
    light: {
      "ivory-curtain": 3,
      "white-caustics": 3,
      "classic-gallery": 3,
      "pale-museum": 3,
      "cream-arch": 2,
      "starry-window": -2,
    },
    neutral: {
      "classic-gallery": 3,
      "pale-museum": 3,
      "ivory-curtain": 2,
      "oak-table": 2,
      "marble-plinth": 2,
      "cream-arch": 2,
      "coastal-window": -3,
    },
  };
  score += profileWeights[profile]?.[background.id] || 0;
  return score;
}

function selectBackgrounds(
  analysis,
  random,
  excludedFingerprints = new Set(),
  library = backgrounds,
) {
  const uniqueBackgrounds = [];
  const fingerprints = new Set();
  const contentKeys = new Set();
  for (const background of library) {
    const fingerprint = backgroundFingerprint(background);
    const contentKey = String(background.name || "").trim().toLowerCase();
    if (fingerprints.has(fingerprint) || contentKeys.has(contentKey)) continue;
    fingerprints.add(fingerprint);
    contentKeys.add(contentKey);
    uniqueBackgrounds.push(background);
  }

  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  };

  // The full background library participates in every random draw.
  // Subject color is deliberately not used to pre-select or weight scenes.
  // The previous round is excluded first so consecutive matches never repeat.
  const freshBackgrounds = uniqueBackgrounds.filter(
    (background) => !excludedFingerprints.has(backgroundFingerprint(background)),
  );
  const previousBackgrounds = uniqueBackgrounds.filter((background) =>
    excludedFingerprints.has(backgroundFingerprint(background)),
  );
  const shuffled = [...shuffle(freshBackgrounds), ...shuffle(previousBackgrounds)];

  return shuffled.slice(0, Math.min(7, shuffled.length));
}

function selectAngles(analysis, random) {
  return angleSlots.map((slot) => {
    const preferred =
      slot.id === "light" && analysis.contrast > 0.22
        ? slot.candidates[0]
        : slot.candidates[Math.floor(random() * slot.candidates.length)];
    return { ...preferred, slotId: slot.id, slotName: slot.name };
  });
}

function selectShootingStyles(random) {
  const styles = [...shootingStylePresets];
  for (let index = styles.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(random() * (index + 1));
    [styles[index], styles[swapIndex]] = [styles[swapIndex], styles[index]];
  }
  return styles.slice(0, Math.min(7, styles.length));
}

function getBookendAngleText(angle) {
  const variants = {
    hero:
      "相机与书挡正面同高，或轻微移到内侧前方约15至25度，使用85mm商品镜头，完整展示异形主体、竖向木板、横向底脚、主体接触点和书本关系。",
    top:
      "相机位于书挡上方约20至35度，50mm镜头向下拍摄，清楚展示异形主体、竖向木板、横向底脚、接触点、书本顶部和书脊文字，不出现悬挂结构。",
    low:
      "相机低于书挡中心约10至15度，50mm镜头轻微仰拍，突出竖向胡桃木板、横向底脚、主体底部支撑点和坚稳的书本承重关系。",
    macro:
      "100mm微距镜头近距离拍摄，焦点落在异形边缘、内部图案线、木纹、竖向木板与主体的接触点、横向底脚或书脊艺术文字。",
    hand:
      "一只手从画面侧边进入，只轻扶书本、整理书脊或触碰木质底座，书挡始终稳定放在水平台面上，不能提离桌面，不能遮住竖向木板，也不能出现挂链。",
    light:
      "相机位于书挡正前方或侧前方约30度，使用侧后方自然光，让玻璃在靠窗桌面或书架上形成彩色透光与投影。",
    wide:
      "35mm或50mm环境镜头，相机与书挡保持在合理观看距离，完整展示书架、桌面、书本和书挡的真实比例。",
  };
  return variants[angle.slotId] || angle.text;
}

function getBookendAngleComposition(angle) {
  const variants = {
    hero:
      "书挡与书本完整居中或略偏三分线，异形主体、竖向木板和横向底脚全部可见并稳稳接触台面，主体外没有透明边框或背板。",
    top:
      "画面同时显示异形主体、竖向木板、横向底脚、接触点、书本排列和书脊文字，不能只拍顶部而丢失书挡的正面识别。",
    low:
      "竖向木板和横向底脚保持完整落地，书本有自然重量感，不能悬空、倾倒或穿模。",
    macro:
      "允许轻微裁切，但必须保留异形主体识别、竖向木板或横向底脚、主体接触点和至少一本书脊的局部，画面重点是材质和真实连接细节。",
    hand:
      "手部只占很小面积，不遮挡主体和底座，不把书挡提离桌面，画面仍以书挡和书本为视觉中心。",
    light:
      "桌面、书架或墙面出现带主体颜色的柔和投影，不能是纯黑死影，投影不盖过书挡和书本。",
    wide:
      "书挡放在书架或阅读桌面环境中，另一侧保留空间和书本层次，不能漂在房间中央或变成墙挂装饰。",
  };
  return variants[angle.slotId] || angle.composition;
}

function getBookendShootingText(style) {
  const variants = {
    "natural-bokeh-hero":
      "使用中长焦透视和浅景深自然光实拍，成对书挡与书本占画面约40%至55%，异形边缘、内部图案、木纹、竖向木板和书脊保持清晰。背景使用书架、绿植或阅读角散景，不出现第二个抢眼主体。",
    "window-lifestyle":
      "采用正面或侧前方15至30度视角，书挡放在窗边桌面或底层书架上，自然侧逆光照亮玻璃并照亮胡桃木底座。画面像真实居家阅读角商品图。",
    "garden-side-light":
      "使用方向明确的自然侧光，书挡放在花园阅读桌、窗边置物台或室外木桌上，书本与木质底座完整可见，背景为虚化植物。",
    "macro-detail":
      "使用100mm微距感近景，焦点落在异形边缘、内部图案线、木纹、竖向木板与主体连接点、横向底脚或书脊艺术文字，背景完全虚化。",
    "backlit-glow":
      "书挡放在窗前桌面或窗台上，使用侧逆光让彩色玻璃保持实体饱和和有限透光，木质底座必须保留自然木纹和接触阴影。",
    "seasonal-warm-bokeh":
      "采用50至85mm中长焦和浅景深，书挡放在暖光书架上，背景使用暖色小灯、书脊或树影散景，不能出现节日鬼脸文字或额外主体。",
    "environment-third-line":
      "采用35至50mm环境镜头，书挡放在书架或阅读桌面三分线位置，完整展示异形主体、竖向木板、横向底脚、书本和真实空间比例，背景保留低对比道具。",
  };
  return variants[style.id] || style.text;
}

function getBookendShootingComposition(style) {
  const variants = {
    "natural-bokeh-hero":
      "书挡和书本是清晰焦点，木质底座完整可见，背景自然虚化，画面干净并保留阅读氛围。",
    "window-lifestyle":
      "书挡稳定放在窗边水平台面上，书本与底座不被窗帘或花器遮挡，玻璃受光均匀。",
    "garden-side-light":
      "书挡与书本位于中央或三分线交点，前景不增加额外道具，底座和书本承重关系清楚。",
    "macro-detail":
      "允许轻微裁切玻璃或书本，但必须保留底座、插槽和至少一段书脊，不能变成只有玻璃图案的平铺图。",
    "backlit-glow":
      "书挡和书本完整清楚，背景保持浅色或自然虚化，不在玻璃边缘制造厚度光或水晶折射。",
    "seasonal-warm-bokeh":
      "书挡位于中心略偏上或三分线，暖色灯光只作背景光点，不能压过主体，也不能形成纯黑轮廓。",
    "environment-third-line":
      "书挡放在书架或桌面三分线，另一侧保留空间层次，不能用家具或植物遮住底座和书本。",
  };
  return variants[style.id] || style.composition;
}

function buildPrompt(analysis, background, angle, timeOfDay, shootingStyle, index) {
  const backgroundLines = background.prompt
    ? [`背景提示词：${background.prompt}`]
    : [
        `背景场景：${background.description}`,
        `光线要求：${background.light}`,
      ];
  const angleText = isBookendProduct()
    ? getBookendAngleText(angle)
    : angle.text;
  const angleComposition = isBookendProduct()
    ? getBookendAngleComposition(angle)
    : angle.composition;
  const shootingText = isBookendProduct()
    ? getBookendShootingText(shootingStyle)
    : shootingStyle.text;
  const shootingComposition = isBookendProduct()
    ? getBookendShootingComposition(shootingStyle)
    : shootingStyle.composition;
  return [
    `场景 ${index + 1}：${background.name} · ${angle.slotName} · ${shootingStyle.name} · ${timeOfDay.name}（生成3张）`,
    "",
    getSceneSubjectLockRule(),
    "",
    getSceneThreeImageRule(),
    "",
    getProductStructureRule(),
    "",
    getScenePlacementRule(),
    "",
    getBookendCaptureModeRule(index),
    "",
    `镜头与角度：${angleText}`,
    `构图要求：${angleComposition}`,
    `拍摄手法：${shootingText}`,
    `拍摄构图：${shootingComposition}`,
    ...backgroundLines,
    `时间氛围：${timeOfDay.text}`,
    "",
    `${backgroundBudgetRule}${squareImageRatioRule}${singleLayerOcclusionRule}`,
    "",
    themeIsolationRule,
    "",
    vividGlassColorRule,
    "",
    getProductMaterialPriorityRule(),
    "",
    strictColorPreservationRule,
    "",
    buildEtsyShopStylePriorityRule(getColorVariable()),
    "",
    getSceneNegativeRule(),
  ].join("\n");
}

function buildSceneBrief(result, index) {
  const background = result.background;
  const angleText = isBookendProduct()
    ? getBookendAngleText(result.angle)
    : result.angle.text;
  const angleComposition = isBookendProduct()
    ? getBookendAngleComposition(result.angle)
    : result.angle.composition;
  const shootingText = isBookendProduct()
    ? getBookendShootingText(result.shootingStyle)
    : result.shootingStyle.text;
  const shootingComposition = isBookendProduct()
    ? getBookendShootingComposition(result.shootingStyle)
    : result.shootingStyle.composition;
  return [
    `【场景 ${index + 1}｜${background.name}｜${result.angle.slotName}｜${result.shootingStyle.name}｜${result.timeOfDay.name}｜生成3张】`,
    `背景场景：${background.description}`,
    `背景光线：${background.light}`,
    getBookendCaptureModeRule(index),
    `镜头与角度：${angleText}`,
    `构图要求：${angleComposition}`,
    `拍摄手法：${shootingText}`,
    `拍摄构图：${shootingComposition}`,
    `时间氛围：${result.timeOfDay.text}`,
  ].join("\n");
}

function buildBatchPrompt() {
  const batch = backgroundBatchRules.batch || {};
  return [
    batch.title || "【七组场景批量生成 · 全局规则只读一次】",
    batch.intro || "下面是同一主体的 7 个独立场景。",
    "",
    "【全局规则】",
    getSceneSubjectLockRule(),
    getSceneThreeImageRule(),
    getProductStructureRule(),
    getScenePlacementRule(),
    isBookendProduct()
      ? "【书档七组拍摄分配】七组中固定有三组采用近景特写，分别是第1、4、6组；其余第2、3、5、7组采用正常背景商品拍摄。三组近景要保留玻璃连接、底座、木纹和书脊细节，其余四组要保留可辨认但低对比的书桌、书架或阅读角环境。"
      : "",
    backgroundBudgetRule,
    themeIsolationRule,
    squareImageRatioRule,
    singleLayerOcclusionRule,
    coloredShadowRule,
    vividGlassColorRule,
    getProductMaterialPriorityRule(),
    strictColorPreservationRule,
    buildEtsyShopStylePriorityRule(getColorVariable()),
    getSceneNegativeRule(),
    "",
    "【七组差异项】",
    currentResults.map((result, index) => buildSceneBrief(result, index)).join("\n\n"),
    "",
    batch.closing ||
      (isBookendProduct()
        ? "七组必须使用同一套书挡主体、同一玻璃材质、同一木质底座结构和同一左右对应关系，只改变书架场景、书本、道具、光线、机位与构图，绝不能出现挂链。每组都必须输出3张独立图片，不要拼图，不要少生成。"
        : "七组必须使用同一主体、同一彩色玻璃材质和同一挂链数量，只改变场景、道具、光线、机位与构图。每组都必须输出 3 张独立图片，不要拼图，不要少生成。"),
  ].join("\n");
}

function renderAnalysis(analysis) {
  elements.palette.innerHTML = "";
  for (const color of analysis.colors) {
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = rgbToHex(color.r, color.g, color.b);
    swatch.title = rgbToHex(color.r, color.g, color.b);
    elements.palette.appendChild(swatch);
  }
  elements.brightnessValue.textContent = analysis.brightnessLabel;
  elements.temperatureValue.textContent = analysis.temperatureLabel;
  elements.saturationValue.textContent = analysis.saturationLabel;
  elements.contrastValue.textContent = analysis.contrastLabel;
  elements.orientationValue.textContent = analysis.orientationLabel;

  const tags = [
    analysis.profileLabel,
    analysis.temperatureLabel,
    analysis.brightnessLabel,
    analysis.saturationLabel,
    analysis.contrastLabel,
    analysis.orientationLabel,
  ];
  elements.analysisTags.innerHTML = "";
  for (const text of tags) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text;
    elements.analysisTags.appendChild(tag);
  }
  elements.analysisPanel.hidden = false;
}

function renderResults(results) {
  elements.resultList.innerHTML = "";
  for (let index = 0; index < results.length; index++) {
    const result = results[index];
    const card = document.createElement("article");
    card.className = "prompt-card";

    const heading = document.createElement("div");
    heading.className = "prompt-card-heading";

    const title = document.createElement("div");
    title.className = "prompt-title";
    const number = document.createElement("span");
    number.className = "prompt-index";
    number.textContent = `场景 ${index + 1} · 3张`;
    const name = document.createElement("span");
    name.className = "prompt-name";
    name.textContent =
      `${result.background.name} · ${result.angle.slotName} · ` +
      `${result.shootingStyle.name} · ${result.timeOfDay.name}`;
    title.append(number, name);

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.type = "button";
    copyButton.textContent = "复制";
    copyButton.addEventListener("click", async () => {
      await navigator.clipboard.writeText(result.prompt);
      showToast(`场景 ${index + 1} 的三张提示词已复制`);
    });
    heading.append(title, copyButton);

    const textarea = document.createElement("textarea");
    textarea.className = "prompt-text";
    textarea.readOnly = true;
    textarea.value = result.prompt;

    card.append(heading, textarea);
    elements.resultList.appendChild(card);
  }
  elements.resultsPanel.hidden = false;
  elements.regenerateButton.disabled = false;
  elements.copyAllButton.disabled = false;
}

function formatPromptGroup(title, items, intro = "") {
  return [
    `【${title}】`,
    "",
    ...(intro ? [intro, ""] : []),
    ...items.flatMap((item, index) => [`${index + 1}. ${item.name}`, item.prompt, ""]),
  ]
    .join("\n")
    .trim();
}

const defaultCustomColorChoices = [
  "#D83B36",
  "#2F63A8",
  "#F2B72F",
  "#1F8A5A",
  "#744FA8",
  "#E4A2B2",
  "#3F8F87",
  "#F5F0E6",
];

function normalizeHexColor(value) {
  const match = String(value || "")
    .trim()
    .match(/^#?([a-f0-9]{6})$/i);
  return match ? `#${match[1].toUpperCase()}` : "#D83B36";
}

function hexToRgb(hex) {
  const normalized = normalizeHexColor(hex).slice(1);
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  const delta = max - min;
  let hue = 0;
  let saturation = 0;

  if (delta !== 0) {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (max === green) hue = 60 * ((blue - red) / delta + 2);
    else hue = 60 * ((red - green) / delta + 4);
  }
  if (hue < 0) hue += 360;
  return { h: hue, s: saturation, l: lightness };
}

function colorNameFromHex(hex) {
  const hsl = rgbToHsl(hexToRgb(hex));
  const hue = hsl.h;
  if (hsl.l < 0.1) return "黑色";
  if (hsl.s < 0.12) {
    if (hsl.l > 0.9) return "白色";
    if (hsl.l > 0.72) return "浅灰色";
    if (hsl.l < 0.28) return "深灰色";
    return "灰色";
  }

  let name = "红色";
  if (hue < 12 || hue >= 345) name = "红色";
  else if (hue < 36) name = "橙色";
  else if (hue < 66) name = "黄色";
  else if (hue < 160) name = "绿色";
  else if (hue < 200) name = "青绿色";
  else if (hue < 250) name = "蓝色";
  else if (hue < 290) name = "紫色";
  else if (hue < 330) name = "紫红色";
  else name = "粉色";

  const prefix = hsl.l < 0.3 ? "深" : hsl.l > 0.74 ? "浅" : "";
  return `${prefix}${name}`;
}

function saveCustomColors() {
  try {
    localStorage.setItem("stained-glass-custom-colors", JSON.stringify(customColors));
  } catch {
    // Custom colors still work for the current page when storage is unavailable.
  }
}

function buildPinterestPalettePrompt({ swatches, labels }) {
  const colorEntries = swatches.map(
    (hex, index) => `${labels?.[index] || colorNameFromHex(hex)} ${hex}`,
  );
  return [
    `严格使用这组Pinterest精选配色：${colorEntries.join("、")}。`,
    `第1色为主色，占约45%至55%；第2色为辅助色，占约22%至30%；第3色为结构色，占约12%至18%；其余颜色只作点缀和局部拼片。`,
    "所有选中的颜色都必须在玻璃分区中清楚出现，但不能为了展示颜色而平均分配面积，也不能增加未列出的彩色色相。",
    "每个色块保持高饱和、浓郁、实体、哑光的传统彩色玻璃质感；深色保留清楚色相，浅色保留明确色彩倾向，不要变成纯黑、纯白、透明水彩或水晶。",
    "黑色和深灰只允许作为哑光焊铅线；若色板本身包含白色、乳白或浅灰，它们只负责负形、花瓣、高光和分隔区域，不能把整套配色洗白。",
  ].join("");
}

function getEtsyShopStyleProfile(variable) {
  if (variable?.id?.startsWith("nmk-")) {
    return etsyShopStyleProfiles.Nmkcimira97;
  }
  if (variable?.id?.startsWith("sovelle-")) {
    return etsyShopStyleProfiles.SovelleStainedglass;
  }
  return null;
}

function buildEtsyShopStylePriorityRule(variable) {
  const styleProfile = getEtsyShopStyleProfile(variable);
  if (!styleProfile) return "";
  return [
    `【店铺风格最高优先级：${styleProfile.name}】`,
    styleProfile.prompt,
    "本条优先于前面所有通用的哑光、平涂、弱透光、禁止内部发光、禁止高光或禁止彩虹感要求。那些通用禁令只用于防止水晶、树脂、果冻、厚玻璃、3D 和外部霓虹特效，不得把本店铺风格削弱成普通、苍白或单调的传统彩玻。只允许平面的 2D 薄片玻璃，但必须保留本店铺特有的高饱和、多层色彩和玻璃光感。选择基准图时也按本风格验收，不要因为图片更哑光、更平涂就优先选择它。",
  ].join("");
}

function buildEtsyShopPalettePrompt({ id, source, swatches, labels }) {
  const colorEntries = swatches.map(
    (hex, index) => `${labels?.[index] || colorNameFromHex(hex)} ${hex}`,
  );
  const styleProfile = getEtsyShopStyleProfile({ id });
  return [
    `严格使用从${source}店铺商品图中归纳的这组配色：${colorEntries.join("、")}。`,
    "第1色为主色，占约42%至52%；第2色为辅助色，占约23%至30%；第3色为结构色，占约12%至18%；其余颜色只作局部点缀和玻璃拼片。",
    "所有色块保持高饱和、实体、浓郁的传统彩色玻璃质感，颜色之间要有明确的面积主次和连贯大色区分区，不能平均铺色，也不能加入未列出的彩色色相。",
    "深色必须保留清楚色相和中间明度，不能压成纯黑；浅色必须保留明确颜色倾向，不能过曝成纯白。黑色和深灰只作为哑光焊铅线，白色和乳白只作为负形、花瓣、高光或真实存在的白色玻璃。",
    "整体参考该店铺商品图的色彩气质，但不要复制任何具体商品造型、图案、构图或品牌特征。",
    styleProfile?.prompt || "",
  ].join("");
}

function isPinterestPalette(variable) {
  return Boolean(variable?.id?.startsWith("pinterest-"));
}

function isEtsyShopPalette(variable) {
  return Boolean(
    variable?.id?.startsWith("nmk-") || variable?.id?.startsWith("sovelle-"),
  );
}

function isOrderablePalette(variable) {
  return isPinterestPalette(variable) || isEtsyShopPalette(variable);
}

function getPaletteOrder(palette) {
  const savedOrder = paletteOrderOverrides.get(palette.id);
  if (
    Array.isArray(savedOrder) &&
    savedOrder.length === palette.swatches.length &&
    new Set(savedOrder).size === palette.swatches.length
  ) {
    return savedOrder;
  }
  return palette.swatches.map((_, index) => index);
}

function applyPaletteOrder(variable) {
  if (!isOrderablePalette(variable)) return variable;
  const order = getPaletteOrder(variable);
  const swatches = order.map((index) => variable.swatches[index]);
  const labels = order.map(
    (index) => variable.labels?.[index] || colorNameFromHex(variable.swatches[index]),
  );
  const ordered = {
    ...variable,
    swatches,
    labels,
    description: variable.styleName
      ? `${variable.styleName}｜${labels.join("、")}`
      : labels.join("、"),
  };
  ordered.prompt = isPinterestPalette(variable)
    ? buildPinterestPalettePrompt(ordered)
    : buildEtsyShopPalettePrompt(ordered);
  return ordered;
}

function applyPaletteSize(variable, size) {
  if (!variable || variable.id === "custom" || size === "auto") return variable;
  const requested = Number.parseInt(size, 10);
  if (!Number.isFinite(requested) || requested < 2) return variable;
  const count = Math.min(requested, variable.swatches.length);
  if (count === variable.swatches.length) return variable;

  const swatches = variable.swatches.slice(0, count);
  const labels = swatches.map(
    (hex, index) => variable.labels?.[index] || colorNameFromHex(hex),
  );
  const colorEntries = swatches.map((hex, index) => `${labels[index]} ${hex}`);
  let distribution =
    "以第1色为主色，第2色为辅助色，其余颜色作为点缀和分区色。";

  if (count === 2) {
    distribution =
      "双色搭配：第1色约占65%至75%，第2色约占25%至35%，允许同一色相内部做深浅渐变，但不得增加第三个彩色色相。";
  } else if (count === 3) {
    distribution =
      "三色搭配：第1色约占50%至60%，第2色约占25%至35%，第3色约占10%至20%，形成明确的主色、辅助色和点缀色。";
  } else if (count === 4) {
    distribution =
      "四色搭配：第1色约占42%至50%，第2色约占25%至30%，第3色和第4色各占10%至18%，避免任何颜色平均铺满。";
  } else if (count === 5) {
    distribution =
      "五色搭配：第1色约占38%至46%，第2色约占22%至28%，其余三色作为局部结构、高光和点缀色。";
  }

  return {
    ...variable,
    name: `${variable.name} · ${count}色`,
    swatches,
    labels,
    description: variable.styleName
      ? `${variable.styleName}｜${count}色搭配：${labels.join("、")}。`
      : `${count}色搭配：${labels.join("、")}。`,
    prompt:
      `从“${variable.name}”色板中只提取这${count}色：${colorEntries.join("、")}。` +
      `${distribution}未列出的原色板颜色一律不要使用。` +
      "所有颜色必须保持高饱和、实体、浓郁的彩色玻璃质感，深色不压成纯黑，浅色不过曝成纯白，也不增加透明水晶、果冻或水彩感。" +
      (getEtsyShopStyleProfile(variable)?.prompt || ""),
  };
}

function buildCustomColorVariable() {
  const swatches = customColors.map(normalizeHexColor).slice(0, 8);
  const colorNames = swatches.map(colorNameFromHex);
  const uniqueNames = [...new Set(colorNames)];
  const count = swatches.length;
  let name = "自定义单色";
  let prompt = "";

  if (count === 1) {
    prompt =
      `单色配色，仅使用${colorNames[0]}作为唯一彩色主色，允许同一色相内由浅到深或由深到浅变化。` +
      "不得增加未被选中的其他彩色色相。";
  } else if (count === 2) {
    name = "自定义双色";
    prompt =
      `双色配色，以${colorNames[0]}为主色，约占65%至75%；${colorNames[1]}为辅助色，约占25%至35%。` +
      "两种颜色要有明确的主次和面积差异，允许同一颜色内部做深浅渐变，但不得增加第三个彩色色相。";
  } else {
    name = "自定义多色";
    prompt =
      `${count}色自定义配色，颜色顺序为${colorNames.join("、")}。` +
      `以${colorNames[0]}为主色，${colorNames[1]}为辅助色，其余颜色作为点缀和分区色。` +
      "所有选中的颜色都必须在画面中出现，但不需要平均分配面积；不得增加未被选中的其他彩色色相。";
  }

  return {
    id: "custom",
    source: "自定义",
    name,
    swatches,
    description: `${count}色自定义配色：${uniqueNames.join("、")}。`,
    prompt:
      `${prompt}白色、乳白、黑色和深灰只允许作为负形、玻璃分隔和铅线，不视为新增彩色。` +
      "颜色必须保持实体平板玻璃质感和原有颜色饱和度，不变成透明水彩。",
  };
}

function allColorVariables() {
  return [
    ...colorVariableLibrary.lightcove,
    ...colorVariableLibrary.sunart,
    ...colorVariableLibrary.pinterest,
    ...colorVariableLibrary.etsyShops,
  ];
}

function getColorVariable(id = currentColorVariableId) {
  if (!id || id === "none") return null;
  if (id === "custom") return buildCustomColorVariable();
  const variable = allColorVariables().find((item) => item.id === id) || null;
  return applyPaletteSize(applyPaletteOrder(variable), currentPaletteSize);
}

function getShapeVariable(id = currentShapeVariableId) {
  return shapeVariableLibrary[id] || shapeVariableLibrary.random;
}

function buildShapeVariableRule(variable, { enabled = true } = {}) {
  if (!enabled) {
    return [
      "【本轮形状变量：未启用】",
      "当前模式要求保持主体结构和外轮廓不变，因此不启用规则形状或不规则形状重构。",
    ].join("\n");
  }
  return [
    `【本轮形状变量：${variable.name}】`,
    variable.prompt,
    isBookendProduct()
      ? "书挡款额外限制：彩色主体外形必须跟随图案本身，优先使用不规则自然轮廓，并带黑色或深灰外轮廓；规则形状也必须理解为图案自身的轮廓，不能在图案外添加整圈透明边框、透明矩形/方形/圆形底板、透明背板或任何其他玻璃结构。主体之外只出现木质底座，主体只能通过自身连续边缘直接嵌入竖向木板窄槽，或用底部边缘直接接触横向底脚。无论外形如何变化，竖向木板、横向底脚、主体接触点和书本承重关系都必须完整可见。"
      : "",
  ].join("\n");
}

function renderCustomColorEditor() {
  const isCustom = currentColorVariableId === "custom";
  elements.customColorEditor.hidden = !isCustom;
  elements.addCustomColorButton.disabled = customColors.length >= 8;
  elements.customColorList.innerHTML = "";
  if (!isCustom) return;

  customColors.slice(0, 8).forEach((color, index) => {
    const normalizedColor = normalizeHexColor(color);
    const row = document.createElement("div");
    row.className = "custom-color-row";

    const picker = document.createElement("input");
    picker.type = "color";
    picker.value = normalizedColor;
    picker.setAttribute("aria-label", `自定义颜色 ${index + 1}`);

    const value = document.createElement("span");
    value.className = "custom-color-value";
    value.textContent = normalizedColor;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "custom-color-remove";
    removeButton.textContent = "删除";
    removeButton.disabled = customColors.length <= 1;

    picker.addEventListener("change", () => {
      customColors[index] = picker.value;
      saveCustomColors();
      renderSubjectLibrary();
    });
    removeButton.addEventListener("click", () => {
      if (customColors.length <= 1) return;
      customColors.splice(index, 1);
      saveCustomColors();
      renderSubjectLibrary();
    });

    row.append(picker, value, removeButton);
    elements.customColorList.appendChild(row);
  });
}

function buildSubjectColorVariableRule(variable, { allowStructuralChanges = false } = {}) {
  if (!variable) {
    return [
      "【本轮色彩变量：不指定】",
      allowStructuralChanges
        ? "不指定固定配色。请根据抽象重构后的象征角色重新规划适合的彩色玻璃配色，允许跨色系、允许重新划分颜色区域。"
        : "完整保持图一原有的色相体系、颜色分区、颜色面积和色彩风格，不提高也不降低玻璃颜色饱和度，不进行跨色系换色。",
    ].join("\n");
  }
  return [
    `【本轮色彩变量：${variable.source} · ${variable.name}】`,
    variable.prompt,
    `变量参考色：${variable.swatches.join("、")}。`,
    "该色彩变量只负责最终配色，是本轮色彩的最高优先级。允许彻底跨色系重构主色、辅助色、点缀色和颜色分区，不必保留图一原有颜色。",
    allowStructuralChanges
      ? "色彩变量不得把本轮任务缩减为只换颜色。主体外形、轮廓、姿势、比例、服装、装饰和叙事必须继续按照抽象重构要求发生明显结构变化。"
      : "当前不是抽象重构模式，除颜色分区外，保持主体外形、轮廓、脸、姿势、比例、玻璃材质、挂链数量和所有结构不变。",
  ].join("\n");
}

function renderColorVariablePreview() {
  const variable = getColorVariable();
  elements.colorSwatches.innerHTML = "";
  if (!variable) {
    elements.colorVariableDescription.textContent =
      "当前不指定色彩变量，保持图一的原有色相体系和颜色分区。";
    elements.colorVariableSelect.value = "none";
    renderCustomColorEditor();
    renderPinterestPaletteBrowser();
    renderPaletteOrderEditor();
    return;
  }
  for (const color of variable.swatches) {
    const swatch = document.createElement("span");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = color;
    swatch.title = color;
    elements.colorSwatches.appendChild(swatch);
  }
  elements.colorVariableDescription.textContent =
    `${variable.source}｜${variable.name}：${variable.description}`;
  elements.colorVariableSelect.value = variable.id;
  renderCustomColorEditor();
  renderPinterestPaletteBrowser();
  renderPaletteOrderEditor();
}

function populatePinterestColorOptions() {
  if (
    !elements.colorVariableSelect ||
    elements.colorVariableSelect.querySelector('optgroup[data-source="pinterest"]')
  ) {
    return;
  }
  const optgroup = document.createElement("optgroup");
  optgroup.label = "Pinterest 色彩板（29组）";
  optgroup.dataset.source = "pinterest";
  for (const palette of colorVariableLibrary.pinterest) {
    const option = document.createElement("option");
    option.value = palette.id;
    option.textContent = `Pinterest · ${palette.name}`;
    optgroup.appendChild(option);
  }
  elements.colorVariableSelect.appendChild(optgroup);
}

function populateEtsyShopColorOptions() {
  if (
    !elements.colorVariableSelect ||
    elements.colorVariableSelect.querySelector('optgroup[data-source="etsy-shops"]')
  ) {
    return;
  }
  const optgroup = document.createElement("optgroup");
  optgroup.label = "Etsy 店铺色彩（银河炫彩 / 颜色鲜艳饱和度很高）";
  optgroup.dataset.source = "etsy-shops";
  for (const palette of colorVariableLibrary.etsyShops) {
    const option = document.createElement("option");
    option.value = palette.id;
    option.textContent = `${palette.source} · ${palette.name}`;
    optgroup.appendChild(option);
  }
  elements.colorVariableSelect.appendChild(optgroup);
}

function renderPinterestPaletteBrowser() {
  if (!elements.pinterestPaletteGrid || !elements.paletteSizeFilters) return;

  const sizeValue = currentColorVariableId === "custom" ? "auto" : currentPaletteSize;
  for (const button of elements.paletteSizeFilters.querySelectorAll("button")) {
    const isActive = button.dataset.size === sizeValue;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.disabled = currentColorVariableId === "custom";
  }

  if (elements.pinterestPaletteCount) {
    const activeCount = colorVariableLibrary.pinterest.length;
    const activeVariable = getColorVariable();
    const effectiveSize =
      activeVariable && sizeValue !== "auto"
        ? Math.min(Number.parseInt(sizeValue, 10), activeVariable.swatches.length)
        : null;
    elements.pinterestPaletteCount.textContent =
      currentColorVariableId === "custom"
        ? "自定义颜色模式不使用Pinterest色板数量筛选"
        : `${activeCount} 组配色 · 当前${
            sizeValue === "auto"
              ? "使用原图全色"
              : `${effectiveSize || Number.parseInt(sizeValue, 10)}色搭配`
          }`;
  }

  elements.pinterestPaletteGrid.innerHTML = "";
  for (const palette of colorVariableLibrary.pinterest) {
    const preview = applyPaletteSize(applyPaletteOrder(palette), sizeValue);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "pinterest-palette-card";
    card.dataset.paletteId = palette.id;
    card.classList.toggle("is-active", currentColorVariableId === palette.id);
    card.setAttribute("aria-pressed", String(currentColorVariableId === palette.id));
    card.title = `${palette.name}：${preview.description}`;

    const heading = document.createElement("span");
    heading.className = "pinterest-palette-card-heading";

    const name = document.createElement("strong");
    name.textContent = palette.name;

    const count = document.createElement("span");
    count.className = "pinterest-palette-card-count";
    count.textContent = `${preview.swatches.length}色`;

    heading.append(name, count);

    const colors = document.createElement("span");
    colors.className = "pinterest-palette-colors";
    preview.swatches.forEach((hex, index) => {
      const colorRow = document.createElement("span");
      colorRow.className = "pinterest-palette-color";

      const swatch = document.createElement("span");
      swatch.className = "pinterest-palette-swatch";
      swatch.style.backgroundColor = hex;

      const code = document.createElement("code");
      code.textContent = hex;
      code.title = preview.labels?.[index] || colorNameFromHex(hex);

      colorRow.append(swatch, code);
      colors.appendChild(colorRow);
    });

    card.append(heading, colors);
    elements.pinterestPaletteGrid.appendChild(card);
  }
}

function getActiveOrderablePalette() {
  const variable =
    allColorVariables().find((item) => item.id === currentColorVariableId) || null;
  return isOrderablePalette(variable) ? variable : null;
}

function renderPaletteOrderEditor() {
  if (!elements.colorOrderEditor || !elements.colorOrderList) return;
  const palette = getActiveOrderablePalette();
  elements.colorOrderEditor.hidden = !palette;
  elements.colorOrderList.innerHTML = "";
  if (!palette) return;

  const order = getPaletteOrder(palette);
  const fullSwatches = order.map((index) => palette.swatches[index]);
  const activeCount =
    currentPaletteSize === "auto"
      ? palette.swatches.length
      : Math.min(Number.parseInt(currentPaletteSize, 10), palette.swatches.length);
  elements.resetColorOrderButton.disabled = !paletteOrderOverrides.has(palette.id);

  fullSwatches.forEach((hex, position) => {
    const originalIndex = order[position];
    const row = document.createElement("div");
    row.className = "color-order-row";
    row.classList.toggle("is-active", position < activeCount);

    const rank = document.createElement("span");
    rank.className = "color-order-rank";
    rank.textContent =
      position === 0 ? "主色" : position === 1 ? "辅助色" : `点缀 ${position + 1}`;

    const swatch = document.createElement("span");
    swatch.className = "color-order-swatch";
    swatch.style.backgroundColor = hex;

    const code = document.createElement("code");
    code.textContent = hex;
    code.title = palette.labels?.[originalIndex] || colorNameFromHex(hex);

    const actions = document.createElement("span");
    actions.className = "color-order-actions";

    const moveBack = document.createElement("button");
    moveBack.type = "button";
    moveBack.className = "color-order-button";
    moveBack.dataset.position = String(position);
    moveBack.dataset.direction = "-1";
    moveBack.textContent = "前移";
    moveBack.disabled = position === 0;
    moveBack.setAttribute("aria-label", `将${code.title}前移`);

    const moveForward = document.createElement("button");
    moveForward.type = "button";
    moveForward.className = "color-order-button";
    moveForward.dataset.position = String(position);
    moveForward.dataset.direction = "1";
    moveForward.textContent = "后移";
    moveForward.disabled = position === fullSwatches.length - 1;
    moveForward.setAttribute("aria-label", `将${code.title}后移`);

    actions.append(moveBack, moveForward);
    row.append(rank, swatch, code, actions);
    elements.colorOrderList.appendChild(row);
  });
}

function movePaletteColor(position, direction) {
  const palette = getActiveOrderablePalette();
  if (!palette) return;
  const order = [...getPaletteOrder(palette)];
  const target = position + direction;
  if (target < 0 || target >= order.length) return;
  [order[position], order[target]] = [order[target], order[position]];
  paletteOrderOverrides.set(palette.id, order);
  renderSubjectLibrary();
  renderMaterialLibrary();
  renderSelectionPrompt();
  showToast("已调整配色顺序，主色和辅助色已同步更新");
}

function resetPaletteOrder() {
  const palette = getActiveOrderablePalette();
  if (!palette) return;
  paletteOrderOverrides.delete(palette.id);
  renderSubjectLibrary();
  renderMaterialLibrary();
  renderSelectionPrompt();
  showToast("已恢复该配色的原始顺序");
}

function setPaletteSize(size) {
  currentPaletteSize = size === "auto" ? "auto" : String(size);
  if (currentColorVariableId === "none" && currentPaletteSize !== "auto") {
    currentColorVariableId = colorVariableLibrary.pinterest[0]?.id || "none";
  }
  renderSubjectLibrary();
  renderMaterialLibrary();
  renderSelectionPrompt();
  showToast(
    currentPaletteSize === "auto"
      ? "已恢复色板原图全部颜色"
      : `已切换为${currentPaletteSize}色搭配`,
  );
}

function renderSubjectLibrary() {
  const stripSinglePromptCounts = (prompt) =>
    prompt.replace(/\s*生成3张差异明显的方案，每张都单独输出。/g, "").replace(/\s*生成3张。/g, "");
  const colorVariable = getColorVariable();
  const shapeVariable = getShapeVariable();
  const isAbstractMode = currentSubjectTransformMode === "abstract";
  const shapeVariableEnabled = currentSubjectTransformMode !== "preserve";
  const baseSubjectItems = isAbstractMode
    ? abstractSubjectPromptLibrary
    : promptLibrary.subject;
  const subjectItems = isBookendProduct()
    ? [...bookendPromptLibrary, ...baseSubjectItems]
    : baseSubjectItems;

  elements.shapeVariableSelect.value = shapeVariable.id;
  elements.shapeVariableSelect.disabled = !shapeVariableEnabled;
  elements.randomShapeButton.disabled = !shapeVariableEnabled;
  elements.shapeVariableDescription.textContent = shapeVariableEnabled
    ? `${shapeVariable.name}：${shapeVariable.summary}`
    : "当前为“仅换颜色”模式，主体结构和外轮廓锁定，不启用形状变量。";

  elements.subjectPromptBox.value = formatPromptGroup(
    isAbstractMode ? "主体抽象重构提示词" : "主体变换提示词",
    subjectItems.map((item) => ({
      ...item,
      prompt: isAbstractMode
        ? `${flatGlassRule}${vividGlassColorRule}${stripSinglePromptCounts(item.prompt)}${buildEtsyShopStylePriorityRule(colorVariable)}`
        : `${flatGlassRule}${vividGlassColorRule}${subjectCompositionRule}${stripSinglePromptCounts(item.prompt)}${buildEtsyShopStylePriorityRule(colorVariable)}`,
    })),
    [
      "本轮总共只生成3张照片。以下所有要求一次应用于这3张照片，不要按照每一条提示词分别再生成3张。",
      squareImageRatioRule,
      giftEmotionStoryRule,
      poseNarrativeVariationRule,
      getProductStructureRule(),
      buildSubjectColorVariableRule(colorVariable, {
        allowStructuralChanges: isAbstractMode,
      }),
      buildShapeVariableRule(shapeVariable, { enabled: shapeVariableEnabled }),
    ].join("\n\n"),
  );
  renderColorVariablePreview();
}

function renderMaterialLibrary() {
  const stripSinglePromptCounts = (prompt) =>
    prompt.replace(/\s*生成3张差异明显的方案，每张都单独输出。/g, "").replace(/\s*生成3张。/g, "");
  const colorVariable = getColorVariable();
  const materialItems = isBookendProduct()
    ? bookendMaterialPromptLibrary
    : colorVariable
      ? promptLibrary.material
      : promptLibrary.material.filter((item) => item.name !== "高饱和玻璃颜色");
  const materialBaseRule = isBookendProduct()
    ? bookendContinuousGlassRule
    : materialReferenceRule;
  const colorGuidance = colorVariable
    ? buildSubjectColorVariableRule(colorVariable, { allowStructuralChanges: false })
    : strictColorPreservationRule;
  const colorStyleRule = colorVariable ? vividGlassColorRule : "";

  elements.materialPromptBox.value = formatPromptGroup(
    "玻璃材质提示词",
    materialItems.map((item) => ({
      ...item,
      prompt: `${flatGlassRule}${colorStyleRule}${coloredShadowRule}${materialBaseRule}${stripSinglePromptCounts(item.prompt)}${getProductMaterialPriorityRule()}${buildEtsyShopStylePriorityRule(colorVariable)}`,
    })),
    [
      "本轮总共只生成3张照片。以下所有要求一次应用于这3张照片，不要按照每一条提示词分别再生成3张。",
      squareImageRatioRule,
      getProductStructureRule(),
      getProductMaterialPriorityRule(),
      colorGuidance,
    ].join("\n\n"),
  );
}

function renderSelectionPrompt() {
  const colorVariable = getColorVariable();
  const baseSelectionPrompt = isBookendProduct()
    ? bookendSelectionPrompt
    : selectionPrompt;
  elements.selectionPromptBox.value = `${baseSelectionPrompt}

${squareImageRatioRule}

${singleLayerOcclusionRule}

${getProductStructureRule()}

${getProductMaterialPriorityRule()}

${buildEtsyShopStylePriorityRule(colorVariable)}

【动作验收】优先选择动作原型最明确、最有礼物与纪念叙事的一张，不接受只是在同一基础接触、支撑、骑坐、趴卧、依附或蜷缩姿势上小幅调整手臂、头部或倾斜角度。若三张中有一张呈现独立祝福、赠予、回望、引路、上升或跨越动作，优先选择这一张。

${chromaticRangeControlRule}`;
}

function renderLibrary() {
  renderSubjectLibrary();
  renderMaterialLibrary();
  renderSelectionPrompt();
}

function generateResults({ avoidPreviousRound = false } = {}) {
  if (!currentAnalysis) return;
  const random = seededRandom(
    `${currentAnalysis.fileName}-${currentAnalysis.width}-${currentAnalysis.height}-${seedOffset}`,
  );
  const excludedFingerprints = avoidPreviousRound
    ? new Set(currentResults.map((result) => backgroundFingerprint(result.background)))
    : new Set();
  const sceneLibrary =
    isBookendProduct() && bookendBackgrounds.length >= 7
      ? bookendBackgrounds
      : backgrounds;
  const selectedBackgrounds = selectBackgrounds(
    currentAnalysis,
    random,
    excludedFingerprints,
    sceneLibrary,
  );
  const selectedAngles = selectAngles(currentAnalysis, random);
  const selectedShootingStyles = selectShootingStyles(random);
  currentResults = selectedBackgrounds.map((background, index) => {
    const angle = selectedAngles[index];
    const shootingStyle = selectedShootingStyles[index];
    const timeOfDay = selectTimeOfDay(random);
    return {
      background,
      angle,
      shootingStyle,
      timeOfDay,
      prompt: buildPrompt(
        currentAnalysis,
        background,
        angle,
        timeOfDay,
        shootingStyle,
        index,
      ),
    };
  });
  renderResults(currentResults);
  elements.downloadAllButton.disabled = false;
}

function revokePreviewUrl(slot) {
  if (!previewObjectUrls[slot]) return;
  URL.revokeObjectURL(previewObjectUrls[slot]);
  previewObjectUrls[slot] = "";
}

function setPreviewElement(slot, previewElement, dropzone, source) {
  if (!source) {
    previewElement.hidden = true;
    previewElement.removeAttribute("src");
    dropzone.classList.remove("has-image");
    return;
  }
  previewElement.src = source;
  previewElement.hidden = false;
  dropzone.classList.add("has-image");
}

function hasAnyBookendImage() {
  return Boolean(bookendImageDataUrls.left || bookendImageDataUrls.right);
}

function getPrimaryBookendSlot() {
  if (bookendImageDataUrls.left) return "left";
  if (bookendImageDataUrls.right) return "right";
  return "";
}

function isBookendSymmetric() {
  if (!bookendImageDataUrls.left || !bookendImageDataUrls.right) return true;
  return bookendImageDataUrls.left === bookendImageDataUrls.right;
}

function renderBookendPreviews() {
  const leftSource =
    previewObjectUrls.left ||
    previewObjectUrls.right ||
    bookendImageDataUrls.left ||
    bookendImageDataUrls.right;
  const rightSource =
    previewObjectUrls.right ||
    previewObjectUrls.left ||
    bookendImageDataUrls.right ||
    bookendImageDataUrls.left;

  setPreviewElement(
    "left",
    elements.leftPreviewImage,
    elements.leftDropzone,
    leftSource,
  );
  setPreviewElement(
    "right",
    elements.rightPreviewImage,
    elements.rightDropzone,
    rightSource,
  );
}

function renderProductUploadMode() {
  const isBookend = currentProductType === "bookend";
  elements.singleUploadArea.hidden = isBookend;
  elements.bookendUploadArea.hidden = !isBookend;

  if (!isBookend) {
    elements.productTypeHint.textContent =
      "挂链款保持现有流程，上传一张主体图即可。";
    if (currentImageDataUrl) {
      setPreviewElement(
        "single",
        elements.previewImage,
        elements.dropzone,
        previewObjectUrls.single || currentImageDataUrl,
      );
    } else {
      setPreviewElement("single", elements.previewImage, elements.dropzone, "");
    }
    return;
  }

  if (!hasAnyBookendImage()) {
    elements.productTypeHint.textContent =
      "书档款可上传左右两张主体图。两张相同或只上传一张时，默认生成左右镜像书挡。";
  } else if (isBookendSymmetric()) {
    elements.productTypeHint.textContent =
      "当前为同图/单图模式：将按左右镜像对称生成书挡。";
  } else {
    elements.productTypeHint.textContent =
      "当前两张图片不同：左侧图片只生成左书挡，右侧图片只生成右书挡。";
  }
  renderBookendPreviews();
}

function refreshAnalysisOutputs() {
  currentResults = [];
  currentDescription = "";
  copyRequestSerial++;
  seedOffset = 0;

  if (!currentAnalysis) {
    elements.analysisPanel.hidden = true;
    elements.resultsPanel.hidden = false;
    elements.resultList.innerHTML =
      '<div class="results-empty" id="resultsEmpty">上传主体图片后，会从完整背景库随机抽取七种不同场景，并随机组合七种拍摄手法。每组生成3张，重新匹配会避开上一轮背景。</div>';
    elements.regenerateButton.disabled = true;
    elements.copyAllButton.disabled = true;
    elements.downloadAllButton.disabled = true;
    elements.descriptionBox.value = "";
    elements.copyStatus.textContent =
      "上传主体图片后，会自动生成商品简介草稿；配置视觉模型后会进一步识别图案、送礼对象和寓意。";
    elements.regenerateCopyButton.disabled = true;
    elements.copyDescriptionButton.disabled = true;
    return;
  }

  renderAnalysis(currentAnalysis);
  generateResults();
  renderDescription(
    buildLocalListingCopy(),
    "已生成本地简介草稿；如已配置视觉模型，正在进一步精修。",
  );
  generateListingCopy();
  showToast(
    currentProductType === "bookend"
      ? "已生成左右书挡提示词、七组场景与商品简介"
      : "已生成七组场景与商品简介",
  );
}

async function handleFile(file, slot = "single") {
  if (!file?.type?.startsWith("image/")) {
    showToast("请上传 PNG、JPG 或 WebP 图片");
    return;
  }
  try {
    const image = await loadImage(file);
    const dataUrl = optimizedImageDataUrl(image);

    if (slot === "single") {
      currentImage = image;
      currentImageFile = file;
      currentImageDataUrl = dataUrl;
      currentPrimarySlot = "single";
      revokePreviewUrl("single");
      previewObjectUrls.single = URL.createObjectURL(file);
    } else {
      bookendImages[slot] = image;
      bookendFiles[slot] = file;
      bookendImageDataUrls[slot] = dataUrl;
      bookendFileNames[slot] = file.name || `${slot === "left" ? "左" : "右"}书挡图片`;
      revokePreviewUrl(slot);
      previewObjectUrls[slot] = URL.createObjectURL(file);
      const primarySlot = getPrimaryBookendSlot();
      currentPrimarySlot = primarySlot;
      currentImage = bookendImages[primarySlot];
      currentImageFile = bookendFiles[primarySlot];
      currentImageDataUrl = bookendImageDataUrls[primarySlot];
    }

    currentAnalysis = currentImage ? analyzeImage(currentImage, currentImageFile) : null;
    renderProductUploadMode();
    elements.clearButton.disabled = !currentImage;
    renderLibrary();
    refreshAnalysisOutputs();
  } catch (error) {
    showToast(error.message || "图片读取失败");
  }
}

function clearAll() {
  currentImage = null;
  currentImageFile = null;
  currentImageDataUrl = "";
  currentPrimarySlot = "single";
  currentAnalysis = null;
  currentResults = [];
  currentDescription = "";
  copyRequestSerial++;
  bookendImages = { left: null, right: null };
  bookendFiles = { left: null, right: null };
  bookendImageDataUrls = { left: "", right: "" };
  bookendFileNames = { left: "", right: "" };
  elements.imageInput.value = "";
  elements.leftImageInput.value = "";
  elements.rightImageInput.value = "";
  ["single", "left", "right"].forEach(revokePreviewUrl);
  renderProductUploadMode();
  elements.clearButton.disabled = true;
  refreshAnalysisOutputs();
}

function bindEvents() {
  elements.imageInput.addEventListener("change", (event) => handleFile(event.target.files[0]));
  elements.leftImageInput.addEventListener("change", (event) =>
    handleFile(event.target.files[0], "left"),
  );
  elements.rightImageInput.addEventListener("change", (event) =>
    handleFile(event.target.files[0], "right"),
  );
  elements.productTypeSelect.addEventListener("change", () => {
    currentProductType = elements.productTypeSelect.value || "hanging";

    if (currentProductType === "bookend") {
      if (!hasAnyBookendImage() && currentImage && currentImageDataUrl) {
        const sharedImage = currentImage;
        const sharedFile = currentImageFile;
        const sharedDataUrl = currentImageDataUrl;
        bookendImages = { left: sharedImage, right: sharedImage };
        bookendFiles = { left: sharedFile, right: sharedFile };
        bookendImageDataUrls = { left: sharedDataUrl, right: sharedDataUrl };
        bookendFileNames = {
          left: sharedFile?.name || "当前主体图",
          right: sharedFile?.name || "当前主体图",
        };
        revokePreviewUrl("left");
        revokePreviewUrl("right");
        previewObjectUrls.left = previewObjectUrls.single;
        previewObjectUrls.right = previewObjectUrls.single;
        previewObjectUrls.single = "";
      }
      const primarySlot = getPrimaryBookendSlot();
      currentPrimarySlot = primarySlot || "left";
      currentImage = bookendImages[primarySlot] || null;
      currentImageFile = bookendFiles[primarySlot] || null;
      currentImageDataUrl = bookendImageDataUrls[primarySlot] || "";
      currentAnalysis = currentImage ? analyzeImage(currentImage, currentImageFile) : null;
    } else if (hasAnyBookendImage()) {
      const primarySlot = getPrimaryBookendSlot();
      currentPrimarySlot = "single";
      currentImage = bookendImages[primarySlot];
      currentImageFile = bookendFiles[primarySlot];
      currentImageDataUrl = bookendImageDataUrls[primarySlot];
      currentAnalysis = currentImage ? analyzeImage(currentImage, currentImageFile) : null;
      revokePreviewUrl("single");
      previewObjectUrls.single =
        previewObjectUrls[primarySlot] || previewObjectUrls.left || previewObjectUrls.right || "";
    }

    renderProductUploadMode();
    renderLibrary();
    elements.clearButton.disabled = !currentImage;
    refreshAnalysisOutputs();
    showToast(
      currentProductType === "bookend"
        ? "已切换为书档款：左右主体可分别上传"
        : "已切换为挂链款",
    );
  });
  elements.clearButton.addEventListener("click", clearAll);
  elements.timeSelect.addEventListener("change", () => {
    if (!currentAnalysis) return;
    seedOffset++;
    generateResults({ avoidPreviousRound: true });
  });
  elements.regenerateButton.addEventListener("click", () => {
    seedOffset++;
    generateResults({ avoidPreviousRound: true });
    showToast("已重新匹配七组方案，不重复上一轮背景");
  });
  elements.copyAllButton.addEventListener("click", async () => {
    if (!currentResults.length) return;
    await navigator.clipboard.writeText(buildBatchPrompt());
    showToast("七组×3张紧凑提示词已全部复制");
  });
  elements.copyLibraryButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(
      [elements.subjectPromptBox.value, elements.materialPromptBox.value].join("\n\n\n"),
    );
    showToast("主体变换与玻璃材质提示词已全部复制");
  });
  elements.copySubjectButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(elements.subjectPromptBox.value);
    showToast("主体变换提示词已全部复制");
  });
  elements.copyMaterialButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(elements.materialPromptBox.value);
    showToast("玻璃材质提示词已全部复制");
  });
  elements.copySelectionButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(elements.selectionPromptBox.value);
    showToast("选择基准图提示词已复制");
  });
  elements.subjectModeSelect.addEventListener("change", () => {
    currentSubjectTransformMode = elements.subjectModeSelect.value || "abstract";
    renderSubjectLibrary();
    const modeName =
      currentSubjectTransformMode === "abstract"
        ? "抽象重构"
        : currentSubjectTransformMode === "preserve"
          ? "仅换颜色"
          : "标准模式";
    showToast(`已切换主体变换模式：${modeName}`);
  });
  elements.colorVariableSelect.addEventListener("change", () => {
    currentColorVariableId = elements.colorVariableSelect.value || "none";
    renderSubjectLibrary();
    renderMaterialLibrary();
    renderSelectionPrompt();
    const variable = getColorVariable();
    showToast(variable ? `已应用色彩变量：${variable.source} · ${variable.name}` : "已取消色彩变量");
  });
  elements.colorOrderList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-position][data-direction]");
    if (!button || button.disabled) return;
    movePaletteColor(
      Number.parseInt(button.dataset.position, 10),
      Number.parseInt(button.dataset.direction, 10),
    );
  });
  elements.resetColorOrderButton.addEventListener("click", resetPaletteOrder);
  elements.paletteSizeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-size]");
    if (!button || button.disabled) return;
    setPaletteSize(button.dataset.size || "auto");
  });
  elements.pinterestPaletteGrid.addEventListener("click", (event) => {
    const card = event.target.closest("button[data-palette-id]");
    if (!card) return;
    const palette = colorVariableLibrary.pinterest.find(
      (item) => item.id === card.dataset.paletteId,
    );
    if (!palette) return;
    currentColorVariableId = palette.id;
    renderSubjectLibrary();
    renderMaterialLibrary();
    renderSelectionPrompt();
    showToast(`已应用Pinterest配色：${palette.name}`);
  });
  elements.shapeVariableSelect.addEventListener("change", () => {
    currentShapeVariableId = elements.shapeVariableSelect.value || "random";
    renderSubjectLibrary();
    const variable = getShapeVariable();
    showToast(`已切换主体形状变量：${variable.name}`);
  });
  elements.randomShapeButton.addEventListener("click", () => {
    const candidates = [shapeVariableLibrary.regular, shapeVariableLibrary.irregular].filter(
      (variable) => variable.id !== currentShapeVariableId,
    );
    const selected =
      candidates[Math.floor(Math.random() * Math.max(1, candidates.length))] ||
      shapeVariableLibrary.regular;
    currentShapeVariableId = selected.id;
    renderSubjectLibrary();
    showToast(`随机形状变量：${selected.name}`);
  });
  elements.addCustomColorButton.addEventListener("click", () => {
    if (customColors.length >= 8) return;
    const available =
      defaultCustomColorChoices.find(
        (color) => !customColors.includes(normalizeHexColor(color)),
      ) || defaultCustomColorChoices[customColors.length % defaultCustomColorChoices.length];
    customColors.push(normalizeHexColor(available));
    saveCustomColors();
    renderSubjectLibrary();
    showToast(`已添加第 ${customColors.length} 个自定义颜色`);
  });
  elements.randomColorButton.addEventListener("click", () => {
    const variables = allColorVariables();
    const candidates = variables.filter((variable) => variable.id !== currentColorVariableId);
    const selected =
      candidates[Math.floor(Math.random() * Math.max(1, candidates.length))] ||
      variables[Math.floor(Math.random() * variables.length)];
    currentColorVariableId = selected.id;
    renderSubjectLibrary();
    renderMaterialLibrary();
    renderSelectionPrompt();
    showToast(`随机色彩变量：${selected.source} · ${selected.name}`);
  });
  elements.regenerateCopyButton.addEventListener("click", () => {
    generateListingCopy();
  });
  elements.copyDescriptionButton.addEventListener("click", async () => {
    const content = elements.descriptionBox.value.trim();
    if (!content) return;
    await navigator.clipboard.writeText(content);
    showToast("商品简介与送礼寓意已复制");
  });
  elements.copySubjectInput.addEventListener("input", () => {
    window.clearTimeout(copySubjectTimer);
    copySubjectTimer = window.setTimeout(() => {
      if (!currentAnalysis) return;
      copyRequestSerial++;
      setCopyBusy(false);
      renderDescription(
        buildLocalListingCopy(),
        "已根据图案名称更新本地草稿；如需 AI 精修，请点击“重新生成”。",
      );
    }, 350);
  });
  elements.downloadAllButton.addEventListener("click", () => {
    if (!currentResults.length) return;
    const content = buildBatchPrompt();
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "background-angle-prompts-compact.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  });

  for (const eventName of ["dragenter", "dragover"]) {
    elements.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      elements.dropzone.classList.add("is-dragging");
    });
  }
  for (const eventName of ["dragleave", "drop"]) {
    elements.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      elements.dropzone.classList.remove("is-dragging");
    });
  }
  elements.dropzone.addEventListener("drop", (event) => handleFile(event.dataTransfer.files[0]));
  for (const [dropzone, slot] of [
    [elements.leftDropzone, "left"],
    [elements.rightDropzone, "right"],
  ]) {
    for (const eventName of ["dragenter", "dragover"]) {
      dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropzone.classList.add("is-dragging");
      });
    }
    for (const eventName of ["dragleave", "drop"]) {
      dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropzone.classList.remove("is-dragging");
      });
    }
    dropzone.addEventListener("drop", (event) =>
      handleFile(event.dataTransfer.files[0], slot),
    );
  }
  document.addEventListener("paste", (event) => {
    const clipboardData = event.clipboardData;
    const imageItem = [...(clipboardData?.items || [])].find((item) =>
      item.type.startsWith("image/"),
    );
    const itemFile = imageItem?.getAsFile();
    const clipboardFile = [...(clipboardData?.files || [])].find((file) =>
      file.type.startsWith("image/"),
    );
    const file = itemFile || clipboardFile;
    if (file) {
      event.preventDefault();
      const slot =
        currentProductType === "bookend"
          ? bookendImageDataUrls.left
            ? "right"
            : "left"
          : "single";
      handleFile(file, slot);
    }
  });
}

bindEvents();
addPanelStickers();
populatePinterestColorOptions();
populateEtsyShopColorOptions();
renderProductUploadMode();
renderLibrary();
loadBackgroundBatchRules();
syncPinterestBackgrounds();
syncBookendBackgrounds();
loadServerCapabilities();
