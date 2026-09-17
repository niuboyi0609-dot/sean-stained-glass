const backgrounds = [
  {
    id: "none",
    label: "不指定背景",
    text: "保留主体原有背景，只调整玻璃材质、色彩和光影，不要擅自增加场景。",
  },
  {
    id: "window-plants",
    label: "窗台与小盆栽",
    text:
      "摆件放置在窗台上，旁边有两个绿色的小盆栽植物，分别种在陶土盆和瓦盆里。明媚的阳光透过窗户洒在窗台上，在墙壁上投下鸢尾花和盆栽植物的清晰影子，整体画面色彩柔和、光线温暖，充满生活气息。",
  },
  {
    id: "wood-shelf-vinyl",
    label: "木架与复古唱片机",
    text:
      "阳光透过彩绘玻璃，在背景中投射出温暖的光晕。挂饰悬挂在木质架子上，旁边放着一台复古唱片机和几张黑胶唱片，画面整体色调温馨，充满怀旧复古的氛围。",
  },
  {
    id: "green-outdoor",
    label: "室外绿植虚化",
    text:
      "背景是模糊的室外景观，呈现翠绿色草坪、茂密树木和夏日午后的自然光，带有浅景深摄影效果，整体氛围宁静、温馨且充满自然气息。",
  },
  {
    id: "white-chair",
    label: "米色房间与 S 形白椅",
    text:
      "一张白色 S 形扶手椅放在米色房间的角落，旁边是黑色边桌，边桌上有一束小野花。柔和自然光从窗户照射进来，在墙壁和地板上投下斑驳树影，房间整体色调温暖、宁静。",
  },
  {
    id: "round-table",
    label: "咖啡桌与白色床单",
    text:
      "一盏由浅色木材制成的圆形咖啡桌，桌腿呈锥形，桌面旁是柔软的白色床单和木地板，绿色植物在自然光下投下柔和阴影，整体宁静、自然、舒适。",
  },
  {
    id: "minimal-tea",
    label: "极简深木茶几",
    text:
      "极简主义室内设计，深色木质圆顶茶几上放着厚书和透明玻璃花瓶，瓶中插着自然干枝。暖米色墙面，阳光投下几何光影，氛围宁静、优雅、治愈。",
  },
  {
    id: "courtyard",
    label: "中式禅意庭院",
    text:
      "中式禅意庭院，现代舒适扶手椅、石板地面、优雅枫树、景观石和绿植。米白色围墙与深色木质结构形成对比，午后阳光投下斑驳光影，安静而高级。",
  },
  {
    id: "bougainvillea",
    label: "九重葛与纱帘窗前",
    text:
      "午后暖阳透过白色格子窗，轻盈半透明纱帘随风微动，窗外是盛开的粉色九重葛花丛。室内窗台摆放绿色盆栽，光影柔和，治愈、宁静、唯美。",
  },
  {
    id: "rocking-chair",
    label: "摇椅与非洲菊",
    text:
      "温馨室内，明亮窗户配白色蕾丝窗帘，窗前有木质摇椅和米白色针织毛毯。旁边小圆木桌上摆着白色陶瓷花瓶，插着橙色和粉色非洲菊，午后光线柔和。",
  },
  {
    id: "pinterest-stone-table",
    label: "石材圆桌与棕榈叶影",
    text:
      "暖米色极简房间，低矮圆形石材餐台，白色亚麻布，左侧大型棕榈绿植和木质餐椅。强烈午后阳光透过百叶窗形成清晰叶影。",
  },
  {
    id: "pinterest-olive-courtyard",
    label: "橄榄树白墙庭院",
    text:
      "白色灰泥围墙庭院，中央橄榄树，陶土花盆，木质长椅和藤编座椅。明亮日光穿过树冠，地面和墙面有斑驳树影。",
  },
  {
    id: "pinterest-window-seat",
    label: "绿色窗景与木质窗台",
    text:
      "白色开启式窗户，窗外茂密绿树，木质窗台放书和浅色坐垫，室内外自然连接。明亮日光进入室内，绿色轻微映在白墙。",
  },
  {
    id: "pinterest-garden-bistro",
    label: "花园铁艺茶桌",
    text:
      "繁茂花园中的铁艺茶桌和椅子，精致茶具，周围环绕粉色、紫色和绿色花卉。明亮散射日光，花叶层次丰富，氛围浪漫自然。",
  },
  {
    id: "pinterest-concrete-stair",
    label: "混凝土楼梯与斜光",
    text:
      "浅灰混凝土楼梯和墙面，极简几何结构，底部有小块坐垫。强斜光切过楼梯和墙面，形成明确建筑阴影。",
  },
  {
    id: "pinterest-garden-path",
    label: "绿意花园小径",
    text:
      "狭窄花园小径，两侧高大绿植、藤蔓和零星粉花，远端通向明亮庭院。树荫下斑驳自然光，路径深处有明亮引导光。",
  },
  {
    id: "pinterest-arched-nook",
    label: "拱形壁画角落与圆桌",
    text:
      "拱形墙洞内带淡雅植物壁画，亚麻窗帘，圆形木桌、陶瓷和浅色坐凳。柔和侧光从窗帘进入，拱形墙面有细腻明暗变化。",
  },
];

const modeTemplates = {
  glass: [
    "先把色彩填满，再生成彩绘风格，确保玻璃颜色鲜艳而不是灰暗。",
    "保持原有色相和颜色分区，但所有彩色玻璃要明显提高饱和度，颜色浓郁、鲜艳、有玻璃颜料密度；不能浅淡、粉灰、发白、褪色或被强光洗成近白。白色和乳白区域仍保持白色。",
    "图一提供图案、主体轮廓和构图，图二只提供彩绘玻璃工艺、铅线、锤纹、透光和色彩质感。",
    "只借用图二的玻璃风格，图二的形状、主体、颜色和场景不要复制。",
    "主体必须像纸一样薄的完全 2D 平面玻璃，不能有厚度、侧面、断面、浮雕、凸起人脸、立体边框或体积轮廓，不能像 3D 摆件。",
    "彩玻主体产生的影子、投影、倒影和焦散必须明显带主体颜色，不能是纯黑、深灰或灰黑色实心剪影。",
    "生成结果为 2D 平面悬空状态，放在桌面上会倒，不要增加底座。",
  ],
  anime: [
    "图一提供人物或图案内容，生成图二这种 2D 动漫风格。",
    "背景改为纯白，主体颜色不要改变。",
    "把边缘的毛、羽毛和细碎轮廓整理顺滑，便于后续玻璃切割，细化并整理胡须等细节。",
    "保持 2D 平面感和清晰外轮廓，不要生成 3D 体积感。",
  ],
  bookend: [
    "以图一的图案作为造型参考，生成和图二同款的成对蒂凡尼彩绘玻璃书挡。",
    "左右镜像对称，金属铜铅线条分割幻彩透光玻璃，底部为原木底座。",
    "一对书挡分立在精装厚书两侧，中间夹一本书，写实商品实拍，柔和室内自然光。",
    "完整保留图二 L 型木质底座和背景风格，但替换底座上的造型，不复制图二原本的主体形状和颜色。",
  ],
  hook: [
    "把图二挂的东西换成图一，边框保持图一的形状。",
    "不要改变图一的比例、图案和主体颜色。",
    "只调整悬挂结构、链条、圆环或连接点，背景和光线保持自然真实。",
  ],
};

const PAGE_SOURCE = "glass-studio";
const EXTENSION_SOURCE = "glass-extension";
const emptyResultCopy = {
  title: "先上传一张图片",
  text: "你可以先看本地玻璃化效果，再决定是否调用 AI 生成完整背景。",
};

const defaultBackgroundPrompt = `背景统一风格：温暖极简的室内建筑摄影，暖象牙白、奶油白、浅沙色、灰米色为主，少量原木色、烟草棕、鼠尾草绿和黑色作为点缀。墙面使用微水泥、石灰洗墙、细腻灰泥或洞石质感；家具和道具使用浅橡木、胡桃木、亚麻、羊羔绒、藤编、陶瓷、玻璃和天然石材。

光线使用真实午后自然光，明亮但不过曝。窗户、百叶窗或拱形墙洞投下清晰的长条几何阴影，可带少量树叶投影。只有彩玻主体产生的影子、投影、倒影和焦散必须带玻璃本身的颜色，不能是纯黑、深灰或灰黑色实心剪影；建筑和其他道具保持正常阴影。背景保持大面积留白，只保留 2-3 个相关道具，不能让背景比玻璃主体更抢眼。整体是安静的现代建筑感、侘寂感、温暖极简感，真实室内摄影，不是 3D 渲染或样板间效果图。主体始终是唯一视觉中心，颜色保持鲜艳通透，背景降饱和、降对比，并浅景深虚化。

主题隔离：场景没有明确写出的主题、节日元素和道具不得自行添加。没有明确写手机、人物玩手机、低头看手机、手持手机或屏幕时，不得出现手机和玩手机元素。背景只保留当前场景指定的 2 至 3 个道具。

颜色饱和：保持原有色相体系和颜色分区，但彩色玻璃要明显更饱和、更浓郁、更鲜艳。不要浅淡、粉灰、发白、褪色、雾蒙蒙或被逆光洗成水彩。白色和乳白玻璃仍保持白色，不被整体染色。

每个背景场景生成 3 张独立图片，三张保持主体、玻璃材质、挂链数量和背景场景一致，只允许机位、景别、焦点、光线方向和道具位置做轻微变化。发送多组时，按顺序依次匹配第 1 至第 7 个背景；发送单组时，只选择与主体主题最匹配的一种背景，不要把多种背景混在一起。

第 1 张背景：暖象牙白微水泥墙面，左侧半透明亚麻纱帘被微风吹起，右侧只有一个低矮洞石台和透明玻璃瓶中的一枝干花。强烈午后斜阳把窗框阴影投在墙面，背景干净，留出大片负空间。

第 2 张背景：浅橡木桌面或石质平台，米灰色亚麻布、两本素色旧书、一个小型石陶碗。画面上方有百叶窗投下的平行光影，桌面纹理真实，背景极简，产品旁边不出现多余玻璃制品。

第 3 张背景：奶油色石灰洗墙与高大的拱形墙洞，远处露出米白色弧形沙发的一角，地面为浅色石材。暖光从右侧照入，墙面出现大块几何光斑，主体位于画面上方，背景留白充足。

第 4 张背景：天然洞石或灰泥墙，墙面有细腻颗粒、轻微凹凸和自然色差。背景远处只有深色玻璃花器与一枝虚化干枝，使用侧后方柔光让主体色块、磨砂颗粒和黑色哑光铅线清楚，阴影真实自然，不产生镜面高光和透明发光。

第 5 张背景：暖沙色灰泥墙、竖向木格栅、深绿色橄榄枝和虚化的天然绿植，旁边只有一个陶土花盆。叶影落在墙面和主体附近，阳光柔软但有方向感，整体自然温暖，不出现花墙和过多花朵。

第 6 张背景：米白色羊羔绒单人椅、浅胡桃木边桌、陶瓷花瓶、两三本精装书和亚麻窗帘。地面铺灰米色编织地毯，柔和自然光从左侧照入，背景轻微虚化，营造安静、温暖、有生活感的高级阅读空间。

第 7 张背景：暖灰色石材走廊或拱形墙洞，右侧是粗糙石墙，左侧有木质门框和一束斜射日光。地面或台阶为天然石材，墙面保留清晰的长条光影，只放一个低矮石台或干燥植物，不出现其他家具，主体位于画面左三分之一处。

统一要求：严格保持主体外形、姿态、比例、颜色分区、玻璃材质、黑色哑光铅线、挂链位置和 1:1 画幅不变，只替换背景、道具、光线和空间。背景只保留 2-3 个相关道具，浅景深虚化，主体始终最清晰。只有主体透光产生的影子、墙面投影和倒影带主体本身的颜色和光晕，不是黑色或灰黑色剪影；建筑、家具、植物、窗框等背景物件的光影保持正常真实，不做彩色化。真实室内建筑摄影，石灰洗墙或微水泥质感，浅橡木或胡桃木，洞石或天然石材，亚麻或羊羔绒，午后自然光，长条几何窗影，叶片影，暖色低对比，大面积负空间。

不要 3D 渲染感，不要塑料家具，不要高饱和背景，不要复杂花纹，不要大量摆件，不要第二个彩色玻璃主体，不要文字，不要水印，不要拼图，不要重复背景，不要改变商品主体。`;

const state = {
  mode: "glass",
  provider: "deepseek",
  activePasteTarget: "subject",
  extensionConnected: false,
  extensionTaskActive: false,
  subjectDataUrl: "",
  styleDataUrl: "",
  backgroundDataUrl: "",
  subjectName: "",
  styleName: "",
  backgroundName: "",
  localCanvasUrl: "",
  generatedResults: [],
  serverKeys: {
    deepseek: false,
    doubao: false,
    agnes: false,
  },
};

const elements = {
  subjectInput: document.querySelector("#subjectInput"),
  styleInput: document.querySelector("#styleInput"),
  backgroundImageInput: document.querySelector("#backgroundImageInput"),
  subjectPreview: document.querySelector("#subjectPreview"),
  stylePreview: document.querySelector("#stylePreview"),
  backgroundPreview: document.querySelector("#backgroundPreview"),
  subjectDropzone: document.querySelector("#subjectDropzone"),
  styleDropzone: document.querySelector("#styleDropzone"),
  backgroundDropzone: document.querySelector("#backgroundDropzone"),
  clearImagesButton: document.querySelector("#clearImagesButton"),
  describeButton: document.querySelector("#describeButton"),
  backgroundPromptInput: document.querySelector("#backgroundPromptInput"),
  modeTabs: document.querySelector("#modeTabs"),
  ratioSelect: document.querySelector("#ratioSelect"),
  countSelect: document.querySelector("#countSelect"),
  backgroundSelect: document.querySelector("#backgroundSelect"),
  promptOutput: document.querySelector("#promptOutput"),
  promptCount: document.querySelector("#promptCount"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  localPreviewButton: document.querySelector("#localPreviewButton"),
  generateButton: document.querySelector("#generateButton"),
  extensionConnector: document.querySelector("#extensionConnector"),
  extensionStatusTitle: document.querySelector("#extensionStatusTitle"),
  extensionStatusText: document.querySelector("#extensionStatusText"),
  extensionRefreshButton: document.querySelector("#extensionRefreshButton"),
  doubaoWebButton: document.querySelector("#doubaoWebButton"),
  resultStage: document.querySelector("#resultStage"),
  emptyState: document.querySelector("#emptyState"),
  resultCanvas: document.querySelector("#resultCanvas"),
  resultGrid: document.querySelector("#resultGrid"),
  resultStatus: document.querySelector("#resultStatus"),
  resultMeta: document.querySelector("#resultMeta"),
  downloadAllButton: document.querySelector("#downloadAllButton"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  providerSelect: document.querySelector("#providerSelect"),
  deepseekApiKeyInput: document.querySelector("#deepseekApiKeyInput"),
  deepseekBaseUrlInput: document.querySelector("#deepseekBaseUrlInput"),
  deepseekImageModelInput: document.querySelector("#deepseekImageModelInput"),
  deepseekVisionModelInput: document.querySelector("#deepseekVisionModelInput"),
  doubaoApiKeyInput: document.querySelector("#doubaoApiKeyInput"),
  doubaoBaseUrlInput: document.querySelector("#doubaoBaseUrlInput"),
  doubaoImageModelInput: document.querySelector("#doubaoImageModelInput"),
  doubaoVisionModelInput: document.querySelector("#doubaoVisionModelInput"),
  agnesApiKeyInput: document.querySelector("#agnesApiKeyInput"),
  clearApiKeyButton: document.querySelector("#clearApiKeyButton"),
  serverStatus: document.querySelector("#serverStatus"),
  toast: document.querySelector("#toast"),
};

const optionInputs = {
  keepSubject: document.querySelector("#keepSubject"),
  flat2d: document.querySelector("#flat2d"),
  cuttable: document.querySelector("#cuttable"),
  filledColor: document.querySelector("#filledColor"),
  blackLead: document.querySelector("#blackLead"),
  blurBackground: document.querySelector("#blurBackground"),
  singleSupport: document.querySelector("#singleSupport"),
  productPhoto: document.querySelector("#productPhoto"),
  customPrompt: document.querySelector("#customPrompt"),
};

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 3200);
}

function createRequestId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function updateExtensionStatus(connected, detail = "") {
  state.extensionConnected = connected;
  elements.extensionConnector.classList.toggle("is-ready", connected);
  elements.extensionStatusTitle.textContent = connected
    ? "豆包网页连接器已连接"
    : "豆包网页连接器未安装";
  elements.extensionStatusText.textContent =
    detail ||
    (connected
      ? "已连接当前登录的豆包账号"
      : "请在浏览器扩展管理页加载连接器目录");
  elements.doubaoWebButton.disabled = state.extensionTaskActive;
  elements.doubaoWebButton.title = connected
    ? "使用当前登录的豆包网页生成"
    : "请先安装并启用豆包网页连接器";
}

function detectExtension(options = {}) {
  if (state.extensionTaskActive) return;
  if (!options.silent) elements.extensionStatusText.textContent = "正在检测连接器...";
  const requestId = createRequestId("glass-ping");
  let received = false;

  const handleReady = (event) => {
    if (
      event.source !== window ||
      event.data?.source !== EXTENSION_SOURCE ||
      event.data?.type !== "EXTENSION_READY" ||
      event.data?.requestId !== requestId
    ) {
      return;
    }
    received = true;
    window.removeEventListener("message", handleReady);
    updateExtensionStatus(true);
  };

  window.addEventListener("message", handleReady);
  window.postMessage(
    {
      source: PAGE_SOURCE,
      type: "GLASS_EXTENSION_PING",
      requestId,
    },
    window.location.origin,
  );

  window.setTimeout(() => {
    if (received) return;
    window.removeEventListener("message", handleReady);
    updateExtensionStatus(false);
  }, 1400);
}

function requestExtension(type, payload = {}, options = {}) {
  const requestId = options.requestId || createRequestId(type.toLowerCase());
  const waitForCompletion = Boolean(options.waitForCompletion);
  const timeoutMs = options.timeoutMs || 15000;

  return new Promise((resolve, reject) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      finish(new Error(options.timeoutMessage || "豆包连接器响应超时"));
    }, timeoutMs);

    function finish(error, value) {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
      if (error) reject(error);
      else resolve(value);
    }

    function handleMessage(event) {
      if (event.source !== window || event.data?.source !== EXTENSION_SOURCE) return;
      const data = event.data;
      if (data.requestId && data.requestId !== requestId) return;

      if (data.type === "EXTENSION_ERROR") {
        finish(new Error(data.error || "豆包连接器发生错误"));
        return;
      }

      if (data.type === "EXTENSION_RESPONSE") {
        if (!data.response || data.response.accepted === false || data.response.ok === false) {
          finish(new Error(data.response?.error || "豆包连接器拒绝了任务"));
          return;
        }
        updateExtensionStatus(true);
        if (!waitForCompletion) finish(null, data.response);
        return;
      }

      if (data.type === "GLASS_DOUBAO_PROGRESS" && waitForCompletion) {
        if (typeof options.onProgress === "function") {
          options.onProgress(data);
        }
        return;
      }

      if (data.type === "GLASS_DOUBAO_COMPLETE" && waitForCompletion) {
        if (!Array.isArray(data.images) || !data.images.length) {
          finish(new Error("豆包没有返回可用图片"));
          return;
        }
        finish(null, data.images);
        return;
      }

      if (data.type === "GLASS_DOUBAO_ERROR" && waitForCompletion) {
        finish(new Error(data.error || "豆包生成失败"));
      }
    }

    window.addEventListener("message", handleMessage);
    window.postMessage(
      {
        source: PAGE_SOURCE,
        type,
        requestId,
        payload,
      },
      window.location.origin,
    );
  });
}

function setResultPlaceholder(title, text) {
  elements.emptyState.hidden = false;
  elements.emptyState.querySelector("h3").textContent = title;
  elements.emptyState.querySelector("p").textContent = text;
  elements.resultCanvas.hidden = true;
  elements.resultGrid.innerHTML = "";
}

function resetResultPlaceholder() {
  elements.emptyState.querySelector("h3").textContent = emptyResultCopy.title;
  elements.emptyState.querySelector("p").textContent = emptyResultCopy.text;
}

function safeFileStem(value) {
  return (value || "stained-glass")
    .replace(/\.[^.]+$/, "")
    .replace(/[\\/:*?"<>|]+/g, "-")
    .slice(0, 48);
}

function backgroundById(id) {
  return backgrounds.find((item) => item.id === id) || backgrounds[0];
}

function ratioToSize(ratio) {
  if (ratio === "3:4") return "768x1024";
  if (ratio === "4:3") return "1024x768";
  return "1024x1024";
}

function resolvedModeTemplate() {
  const template = [...modeTemplates[state.mode]];
  if (state.styleDataUrl) return template;

  if (state.mode === "glass") {
    return [
      "先把色彩填满，再生成彩绘风格，确保玻璃颜色鲜艳而不是灰暗。",
      "图一提供图案、主体轮廓和构图；当前没有图二，请直接使用通用蒂凡尼彩绘玻璃工艺。",
      "使用传统手工彩色玻璃：薄平板玻璃、哑光或微磨砂表面、乳白粉彩或实体色块、黑色哑光铅线和每片玻璃独立包边，不复制其他主体的形状或配色。",
      "主体轮廓内原本透明或留白的区域必须用白色、乳白或浅灰实体磨砂玻璃替代，不能镂空或露出背景。",
      "图二同时提供挂链、吊线、圆环和连接五金形式。挂链数量必须以图一为准：图一只有两条就严格保留两条，不能生成第三条、背链、侧链、备用链或装饰链；图一没有挂链时才按图二的实际数量继承。",
      "材质必须像平板玻璃拼片，不是水晶、宝石、冰晶、琉璃摆件、透明树脂、亚克力、果冻、软糖或 3D 玻璃雕刻，不要镜面高光、边缘发光、内部发光、色散和整件透明。",
      "生成结果为 2D 平面悬空状态，不能像 3D 摆件，放在桌面上会倒，不要增加底座。",
    ];
  }
  if (state.mode === "anime") {
    return [
      "将图一转换为清晰的 2D 动漫风格，保留人物或图案的主体特征。",
      "背景改为纯白，主体颜色不要改变。",
      "把边缘的毛、羽毛和细碎轮廓整理顺滑，便于后续玻璃切割，细化并整理胡须等细节。",
      "保持 2D 平面感和清晰外轮廓，不要生成 3D 体积感。",
    ];
  }
  if (state.mode === "bookend") {
    return [
      "以图一的图案作为造型参考，生成通用款蒂凡尼彩绘玻璃书挡。",
      "使用金属铜铅线条分割幻彩透光玻璃，底部配原木底座，造型适合左右镜像成对生产。",
      "书挡分立在精装厚书两侧，中间夹一本书，写实商品实拍，柔和室内自然光。",
      "不要复制图一之外不存在的参考主体，比例和底座结构保持适合实际制作。",
    ];
  }
  return template;
}

function buildPrompt(index = 0, total = 1) {
  const pieces = resolvedModeTemplate();
  const background = backgroundById(elements.backgroundSelect.value);

  pieces.push(
    "构图与身体范围严格以图一为准：图一显示到哪里，结果就只显示到哪里。若图一是头像、胸像、半身雕塑或只到胸部、肩部，结果必须保持相同范围，不得自行补出腹部、腰、胯、腿、脚或更长的身体，不得把胸像扩成半身像、七分身或全身像。主体最下方必须有服饰收口、布料折返、雕塑底座、轮廓闭合或可见背景留白来完成收尾，不能平直截断在画面边缘，不能继续向画布下方延伸，不能看起来还能继续扩图。",
  );
  pieces.push(
    "主体必须是绝对平面的 2D 薄片，像纸一样薄，不能显示玻璃厚度、侧面、断面、双层结构、立体轮廓、凸起边框、浮雕、石膏感、陶塑感或凸起人脸。脸、头发、衣服、花瓣和叶片都必须是平面色块，任何角度都看不到厚度。",
  );
  pieces.push(
    "彩玻主体产生的所有影子、墙面投影、桌面投影、地面投影、倒影和焦散都必须明显带主体玻璃本身的颜色，不能是纯黑、深灰或灰黑色实心剪影。若不能形成清晰倒影，就改成柔和但看得出颜色的玻璃光斑。",
  );
  pieces.push(
    "场景、节日元素和道具必须严格服从当前场景描述，不得自行增加未写出的主题或节日元素。没有明确写手机、人物玩手机、低头看手机、手持手机或屏幕时，不得出现手机和玩手机元素。背景只保留当前场景指定的 2 至 3 个道具。",
  );
  pieces.push(
    "所有彩色玻璃区域必须在保持原有色相体系和颜色分区不变的前提下明显提高饱和度，让颜色浓郁、鲜艳、有玻璃颜料密度。不要浅淡、粉灰、发白、褪色、雾蒙蒙，或被强光洗成近白色；白色和乳白玻璃继续作为白色存在。",
  );

  if (background.id !== "none") {
    pieces.push(`背景场景：${background.text}`);
  }

  const backgroundPrompt = elements.backgroundPromptInput.value.trim();
  if (state.backgroundDataUrl || backgroundPrompt) {
    pieces.push("图三只作为背景、空间、道具和光影参考，不复制图三中的普通商品主体。");
  }
  if (backgroundPrompt) {
    pieces.push(`图三自动反推的背景提示词：${backgroundPrompt}`);
  }

  if (optionInputs.keepSubject.checked) {
    pieces.push("严格保持主体的造型、姿态、比例和关键识别特征不变。");
  }
  if (optionInputs.flat2d.checked) {
    pieces.push("必须是像纸一样薄的完全 2D 平面产品，没有厚度、侧面、断面、浮雕、凸起轮廓和立体高光，不是 3D 雕塑，不要底座，悬空状态。");
  }
  if (optionInputs.cuttable.checked) {
    pieces.push("外轮廓连续、平滑、适合玻璃切割，减少过度细碎和尖锐分支。");
  }
  if (optionInputs.filledColor.checked) {
    pieces.push("所有指定区域用颜色完全填满，不留白、不露出大面积透明空隙；彩色区域要浓郁鲜艳、有玻璃颜料密度，不能浅淡或被强光洗白。");
  }
  if (optionInputs.blackLead.checked) {
    pieces.push("使用清晰但不过度粗重的黑色铅线分割玻璃，铅线无刺眼金属反光。");
  }
  if (optionInputs.blurBackground.checked) {
    pieces.push("浅景深，背景适度虚化，突出主体。");
  }
  if (optionInputs.singleSupport.checked) {
    pieces.push("如果涉及书挡或摆件，使用单边或单尖支撑，尽量减少与底板接触的面积。");
  }
  if (optionInputs.productPhoto.checked) {
    pieces.push("写实商品摄影，真实手工玻璃质感，自然光，高清细节，8K 质感。");
  }

  const ratio = elements.ratioSelect.value;
  pieces.push(`输出图片比例为 ${ratio}。`);

  if (total > 1) {
    pieces.push(
      `本批次第 ${index + 1} / ${total} 张：改变机位、景别、光线方向和主体位置，但主体不变；不要生成重复构图。`,
    );
  } else {
    pieces.push("自由选择最佳机位与构图，主体不要被裁切。");
  }

  const custom = optionInputs.customPrompt.value.trim();
  if (custom) pieces.push(`额外要求：${custom}`);
  return pieces.join("\n");
}

function buildDoubaoWebPrompt(total) {
  const prompt = buildPrompt(0, 1);
  if (total <= 1) return prompt;
  return [
    prompt,
    `请在一次任务中生成 ${total} 张不同构图的结果。每张都保持图一主体不变，只改变机位、景别、光线方向或主体位置，不要重复构图。`,
  ].join("\n");
}

function updatePrompt() {
  const prompt = buildPrompt();
  elements.promptOutput.value = prompt;
  elements.promptCount.textContent = `${prompt.length} 字`;
}

function setMode(mode) {
  state.mode = mode;
  for (const button of elements.modeTabs.querySelectorAll(".segment")) {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  }
  updatePrompt();
}

function loadImageElement(fileOrDataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    if (typeof fileOrDataUrl === "string") {
      image.src = fileOrDataUrl;
    } else {
      const url = URL.createObjectURL(fileOrDataUrl);
      image.onload = () => {
        URL.revokeObjectURL(url);
        resolve(image);
      };
      image.src = url;
    }
  });
}

async function fileToDataUrl(file, maxEdge = 1400) {
  if (!file.type.startsWith("image/")) throw new Error("只支持图片文件");
  const image = await loadImageElement(file);
  const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, width, height);
  const hasAlpha = file.type === "image/png";
  return {
    dataUrl: canvas.toDataURL(hasAlpha ? "image/png" : "image/jpeg", hasAlpha ? undefined : 0.92),
    width,
    height,
  };
}

async function handleFile(kind, file) {
  if (!file) return;
  try {
    const prepared = await fileToDataUrl(file);
    if (kind === "subject") {
      state.subjectDataUrl = prepared.dataUrl;
      state.subjectName = file.name;
      elements.subjectPreview.src = prepared.dataUrl;
      elements.subjectPreview.hidden = false;
      elements.subjectDropzone.classList.add("has-image");
    } else if (kind === "style") {
      state.styleDataUrl = prepared.dataUrl;
      state.styleName = file.name;
      elements.stylePreview.src = prepared.dataUrl;
      elements.stylePreview.hidden = false;
      elements.styleDropzone.classList.add("has-image");
    } else {
      state.backgroundDataUrl = prepared.dataUrl;
      state.backgroundName = file.name;
      elements.backgroundPreview.src = prepared.dataUrl;
      elements.backgroundPreview.hidden = false;
      elements.backgroundDropzone.classList.add("has-image");
    }
    elements.emptyState.hidden = state.subjectDataUrl || state.styleDataUrl;
    showToast(
      `${kind === "subject" ? "主体" : kind === "style" ? "风格" : "背景"}图片已载入`,
    );
  } catch (error) {
    showToast(error.message || "图片载入失败");
  }
}

function clearImages() {
  state.subjectDataUrl = "";
  state.styleDataUrl = "";
  state.backgroundDataUrl = "";
  state.subjectName = "";
  state.styleName = "";
  state.backgroundName = "";
  elements.subjectInput.value = "";
  elements.styleInput.value = "";
  elements.backgroundImageInput.value = "";
  elements.subjectPreview.hidden = true;
  elements.stylePreview.hidden = true;
  elements.backgroundPreview.hidden = true;
  elements.subjectDropzone.classList.remove("has-image");
  elements.styleDropzone.classList.remove("has-image");
  elements.backgroundDropzone.classList.remove("has-image");
  elements.backgroundPromptInput.value = "";
  elements.emptyState.hidden = false;
  clearGeneratedResults();
  updatePrompt();
}

function bindDropzone(dropzone, kind) {
  dropzone.addEventListener("click", () => {
    state.activePasteTarget = kind;
  });
  dropzone.addEventListener("focusin", () => {
    state.activePasteTarget = kind;
  });
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
  dropzone.addEventListener("drop", (event) => {
    handleFile(kind, event.dataTransfer.files[0]);
  });
}

async function pasteFromClipboard(kind) {
  state.activePasteTarget = kind;
  try {
    if (!navigator.clipboard?.read) throw new Error("当前浏览器不支持读取剪贴板，请直接按 Ctrl+V");
    const items = await navigator.clipboard.read();
    for (const item of items) {
      const imageType = item.types.find((type) => type.startsWith("image/"));
      if (!imageType) continue;
      const blob = await item.getType(imageType);
      const extension = imageType.split("/")[1] || "png";
      await handleFile(kind, new File([blob], `clipboard-${Date.now()}.${extension}`, { type: imageType }));
      return;
    }
    throw new Error("剪贴板里没有图片");
  } catch (error) {
    showToast(
      /permission|denied|notallowed/i.test(String(error?.message || ""))
        ? `浏览器不允许直接读取剪贴板。已选中图${kind === "subject" ? "一" : kind === "style" ? "二" : "三"}，请直接按 Ctrl+V。`
        : "无法读取剪贴板，请直接按 Ctrl+V",
    );
  }
}

function initializeBackgrounds() {
  const fragment = document.createDocumentFragment();
  for (const background of backgrounds) {
    const option = document.createElement("option");
    option.value = background.id;
    option.textContent = background.label;
    fragment.appendChild(option);
  }
  elements.backgroundSelect.appendChild(fragment);
}

function clearGeneratedResults() {
  state.generatedResults = [];
  elements.resultGrid.innerHTML = "";
  elements.resultCanvas.hidden = true;
  resetResultPlaceholder();
  elements.emptyState.hidden = false;
  elements.resultStatus.textContent = "等待图片";
  elements.resultMeta.textContent = "未经上传的图像不会离开本机。";
  elements.downloadAllButton.disabled = true;
}

function averageCellColor(data, width, x0, y0, x1, y1) {
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;
  const stepX = Math.max(1, Math.floor((x1 - x0) / 4));
  const stepY = Math.max(1, Math.floor((y1 - y0) / 4));
  for (let y = y0; y < y1; y += stepY) {
    for (let x = x0; x < x1; x += stepX) {
      const index = (y * width + x) * 4;
      r += data[index];
      g += data[index + 1];
      b += data[index + 2];
      count++;
    }
  }
  if (!count) return [220, 220, 220];
  return [Math.round(r / count), Math.round(g / count), Math.round(b / count)];
}

function boostSaturation(data, amount) {
  for (let index = 0; index < data.length; index += 4) {
    const r = data[index];
    const g = data[index + 1];
    const b = data[index + 2];
    const gray = r * 0.299 + g * 0.587 + b * 0.114;
    data[index] = Math.max(0, Math.min(255, gray + (r - gray) * amount));
    data[index + 1] = Math.max(0, Math.min(255, gray + (g - gray) * amount));
    data[index + 2] = Math.max(0, Math.min(255, gray + (b - gray) * amount));
  }
}

async function renderLocalGlass() {
  if (!state.subjectDataUrl) {
    showToast("请先上传图一作为主体或图案");
    return;
  }

  elements.resultStatus.textContent = "本地处理中";
  elements.emptyState.hidden = true;
  elements.resultGrid.innerHTML = "";
  elements.resultCanvas.hidden = false;

  const image = await loadImageElement(state.subjectDataUrl);
  const maxEdge = 1400;
  const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.round(image.naturalWidth * scale);
  const height = Math.round(image.naturalHeight * scale);
  const sampleCanvas = document.createElement("canvas");
  sampleCanvas.width = width;
  sampleCanvas.height = height;
  const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
  sampleContext.drawImage(image, 0, 0, width, height);
  const imageData = sampleContext.getImageData(0, 0, width, height);
  boostSaturation(imageData.data, 1.65);
  for (let index = 0; index < imageData.data.length; index += 4) {
    imageData.data[index] = Math.round(imageData.data[index] / 24) * 24;
    imageData.data[index + 1] = Math.round(imageData.data[index + 1] / 24) * 24;
    imageData.data[index + 2] = Math.round(imageData.data[index + 2] / 24) * 24;
  }

  elements.resultCanvas.width = width;
  elements.resultCanvas.height = height;
  const context = elements.resultCanvas.getContext("2d");
  context.fillStyle = "#dfe4e9";
  context.fillRect(0, 0, width, height);

  const cellSize = Math.max(18, Math.round(Math.min(width, height) / 32));
  const points = [];
  for (let y = 0, row = 0; y <= height + cellSize; y += cellSize, row++) {
    const line = [];
    for (let x = 0, column = 0; x <= width + cellSize; x += cellSize, column++) {
      const edgeX = x <= 0 || x >= width;
      const edgeY = y <= 0 || y >= height;
      const jitterX = edgeX ? 0 : ((Math.sin(row * 12.9898 + column * 78.233) * 43758.5453) % 1) * cellSize * 0.36;
      const jitterY = edgeY ? 0 : ((Math.sin(row * 93.9898 + column * 67.345) * 24634.6345) % 1) * cellSize * 0.36;
      line.push([Math.max(0, Math.min(width, x + jitterX)), Math.max(0, Math.min(height, y + jitterY))]);
    }
    points.push(line);
  }

  context.lineWidth = Math.max(1.5, cellSize * 0.08);
  context.lineJoin = "round";
  context.strokeStyle = "#172033";

  for (let row = 0; row < points.length - 1; row++) {
    for (let column = 0; column < points[row].length - 1; column++) {
      const p0 = points[row][column];
      const p1 = points[row][column + 1];
      const p2 = points[row + 1][column + 1];
      const p3 = points[row + 1][column];
      const x0 = Math.floor(Math.min(p0[0], p1[0], p2[0], p3[0]));
      const y0 = Math.floor(Math.min(p0[1], p1[1], p2[1], p3[1]));
      const x1 = Math.ceil(Math.max(p0[0], p1[0], p2[0], p3[0]));
      const y1 = Math.ceil(Math.max(p0[1], p1[1], p2[1], p3[1]));
      const color = averageCellColor(imageData.data, width, x0, y0, Math.max(x0 + 1, x1), Math.max(y0 + 1, y1));
      context.beginPath();
      context.moveTo(p0[0], p0[1]);
      context.lineTo(p1[0], p1[1]);
      context.lineTo(p2[0], p2[1]);
      context.lineTo(p3[0], p3[1]);
      context.closePath();
      context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      context.fill();
      context.stroke();
      context.beginPath();
      context.moveTo(p0[0], p0[1]);
      context.lineTo(p3[0], p3[1]);
      context.strokeStyle = "rgba(255,255,255,0.10)";
      context.lineWidth = Math.max(1, cellSize * 0.035);
      context.stroke();
      context.strokeStyle = "#172033";
      context.lineWidth = Math.max(1.5, cellSize * 0.08);
    }
  }

  state.localCanvasUrl = elements.resultCanvas.toDataURL("image/png");
  elements.resultStatus.textContent = "本地预览已生成";
  elements.resultMeta.textContent = "本地玻璃化只处理当前图片，适合先确认轮廓、色彩和切割感。";
  elements.downloadAllButton.disabled = false;
}

async function requestGeneration(prompt, index, total) {
  const provider = state.provider;
  const images = [state.subjectDataUrl, state.styleDataUrl, state.backgroundDataUrl].filter(Boolean);
  const providerKey = sessionStorage.getItem(`${provider}-api-key`) || "";
  const baseUrl =
    provider === "doubao"
      ? sessionStorage.getItem("doubao-base-url") || "https://ark.cn-beijing.volces.com/api/v3"
      : provider === "deepseek"
        ? sessionStorage.getItem("deepseek-base-url") || "https://api.deepseek.com/v1"
        : "";
  const model =
    provider === "doubao"
      ? sessionStorage.getItem("doubao-image-model") || "doubao-seedream-4-0-250828"
      : provider === "deepseek"
        ? sessionStorage.getItem("deepseek-image-model") || "deepseek-image"
        : "agnes-image-2.0-flash";
  if (provider === "deepseek" && /(^https?:\/\/)?api\.deepseek\.com\//i.test(baseUrl)) {
    const error = new Error("DEEPSEEK_OFFICIAL_NO_IMAGE");
    error.code = "DEEPSEEK_OFFICIAL_NO_IMAGE";
    throw error;
  }
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(providerKey ? { "x-provider-key": providerKey } : {}),
    },
    body: JSON.stringify({
      provider,
      prompt,
      size: ratioToSize(elements.ratioSelect.value),
      images,
      baseUrl,
      model,
    }),
  });
  const payload = await response.json();
  const providerName =
    provider === "deepseek" ? "DeepSeek" : provider === "doubao" ? "豆包" : "Agnes";
  if (!response.ok) {
    throw new Error(
      `${providerName} 生图失败：${payload.error || `HTTP ${response.status}`}`,
    );
  }
  const item = payload?.data?.[0];
  if (!item) throw new Error(`${providerName} 生图服务没有返回图片数据`);
  return {
    src: item.b64_json ? `data:image/png;base64,${item.b64_json}` : item.url,
    index,
    total,
  };
}

async function describeBackground() {
  if (!state.backgroundDataUrl) {
    showToast("请先上传图三背景参考图");
    return;
  }
  const provider = state.provider === "agnes" ? "deepseek" : state.provider;
  const providerKey = sessionStorage.getItem(`${provider}-api-key`) || "";
  if (!state.serverKeys[provider] && !providerKey) {
    elements.settingsDialog.showModal();
    showToast(`背景反推需要先配置${provider === "deepseek" ? "DeepSeek" : "豆包"} API Key`);
    return;
  }

  elements.describeButton.disabled = true;
  const originalText = elements.describeButton.textContent;
  elements.describeButton.textContent = "反推中...";
  try {
    const response = await fetch("/api/describe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(providerKey ? { "x-provider-key": providerKey } : {}),
      },
      body: JSON.stringify({
        provider,
        images: [state.backgroundDataUrl],
        baseUrl:
          provider === "deepseek"
            ? sessionStorage.getItem("deepseek-base-url") || "https://api.deepseek.com/v1"
            : sessionStorage.getItem("doubao-base-url") || "https://ark.cn-beijing.volces.com/api/v3",
        model:
          provider === "deepseek"
            ? sessionStorage.getItem("deepseek-vision-model") || "deepseek-chat"
            : sessionStorage.getItem("doubao-vision-model") || "doubao-seed-1-6-250615",
      }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "背景反推失败");
    elements.backgroundPromptInput.value = payload.prompt || "";
    updatePrompt();
    showToast("图三背景提示词已生成并放入最终提示词");
  } catch (error) {
    showToast(error.message || "背景反推失败");
  } finally {
    elements.describeButton.disabled = false;
    elements.describeButton.textContent = originalText;
  }
}

function resultFileName(result, extension = "png") {
  const base = safeFileStem(state.subjectName || "stained-glass");
  return `${base}-${String(result.index + 1).padStart(2, "0")}.${extension}`;
}

async function downloadResult(result) {
  if (!result?.src) return;
  const filename = resultFileName(result, result.src.startsWith("data:image/png") ? "png" : "jpg");
  if (state.extensionConnected && /^https?:\/\//i.test(result.src)) {
    try {
      await requestExtension(
        "GLASS_EXTENSION_DOWNLOAD",
        {
          url: result.src,
          filename,
        },
        { timeoutMs: 30000 },
      );
      showToast("已交给浏览器下载");
      return;
    } catch {
      // Fall back to a normal link when the extension cannot finish the download.
    }
  }
  const anchor = document.createElement("a");
  anchor.download = filename;
  anchor.href = result.src;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function displayResults(results) {
  state.generatedResults = results;
  elements.resultGrid.innerHTML = "";
  elements.resultCanvas.hidden = true;
  elements.emptyState.hidden = true;
  for (const result of results) {
    const item = document.createElement("div");
    item.className = "result-item";
    const image = document.createElement("img");
    image.src = result.src;
    image.alt = `AI 生成结果 ${result.index + 1}`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "下载这张";
    button.addEventListener("click", () => downloadResult(result));
    item.append(image, button);
    elements.resultGrid.appendChild(item);
  }
  elements.downloadAllButton.disabled = results.length === 0;
  elements.resultMeta.textContent = `已生成 ${results.length} 张图片。`;
}

function setGenerationBusy(busy) {
  state.extensionTaskActive = busy;
  elements.generateButton.disabled = busy;
  elements.localPreviewButton.disabled = busy;
  elements.doubaoWebButton.disabled = busy;
  elements.extensionRefreshButton.disabled = busy;
}

async function generateWithDoubaoWeb() {
  if (!state.subjectDataUrl) {
    showToast("请先上传图一");
    return;
  }
  if (!state.extensionConnected) {
    detectExtension();
    showToast("未检测到豆包网页连接器，请先安装并启用扩展");
    return;
  }

  const total = Number(elements.countSelect.value);
  const requestId = createRequestId("doubao-glass");
  setGenerationBusy(true);
  elements.resultStatus.textContent = "正在连接豆包";
  setResultPlaceholder("豆包正在准备", "正在打开豆包网页并上传图片");

  try {
    const images = await requestExtension(
      "GLASS_EXTENSION_GENERATE",
      {
        prompt: buildDoubaoWebPrompt(total),
        subjectDataUrl: state.subjectDataUrl,
        styleDataUrl: state.styleDataUrl,
        backgroundDataUrl: state.backgroundDataUrl,
        expectedCount: total,
      },
      {
        requestId,
        waitForCompletion: true,
        timeoutMs: 480000,
        timeoutMessage: "等待豆包生成超时，请检查豆包页面",
        onProgress(progress) {
          const message = progress.message || "豆包正在处理";
          elements.resultStatus.textContent = message;
          setResultPlaceholder("豆包正在生成", message);
        },
      },
    );

    const results = images.map((item, index) => ({
      src: typeof item === "string" ? item : item.src,
      index,
      total,
    }));
    displayResults(results);
    elements.resultStatus.textContent = `豆包返回 ${results.length} 张`;
    elements.resultMeta.textContent = "由当前登录的豆包网页生成。";
    showToast(`豆包已返回 ${results.length} 张图片`);
  } catch (error) {
    const message = error.message || "豆包网页生成失败";
    elements.resultStatus.textContent = "生成失败";
    setResultPlaceholder("生成失败", message);
    showToast(message);
  } finally {
    setGenerationBusy(false);
    updateExtensionStatus(state.extensionConnected);
  }
}

async function generateWithAi() {
  if (!state.subjectDataUrl) {
    showToast("请先上传图一");
    return;
  }
  if (state.extensionConnected) {
    await generateWithDoubaoWeb();
    return;
  }
  const provider = state.provider;
  const currentBaseUrl =
    provider === "doubao"
      ? sessionStorage.getItem("doubao-base-url") || "https://ark.cn-beijing.volces.com/api/v3"
      : provider === "deepseek"
        ? sessionStorage.getItem("deepseek-base-url") || "https://api.deepseek.com/v1"
        : "";
  if (provider === "deepseek" && /(^https?:\/\/)?api\.deepseek\.com\//i.test(currentBaseUrl)) {
    await renderLocalGlass();
    elements.resultStatus.textContent = "DeepSeek 无生图端点，已回退本地玻璃化";
    elements.resultMeta.textContent =
      "官方 DeepSeek 只用于提示词和背景分析。需要真实 AI 生图时，请在设置中切换到豆包 Seedream、Agnes，或填写支持图片生成的兼容网关。";
    showToast("DeepSeek 官方不支持图片生成，已自动生成本地玻璃化预览");
    return;
  }
  const temporaryKey = sessionStorage.getItem(`${provider}-api-key`);
  if (!state.serverKeys[provider] && !temporaryKey) {
    elements.settingsDialog.showModal();
    const providerName =
      provider === "deepseek" ? "DeepSeek" : provider === "doubao" ? "豆包" : "Agnes";
    showToast(
      `请先配置${providerName} API Key，或继续使用本地玻璃化预览`,
    );
    return;
  }

  const total = Number(elements.countSelect.value);
  setGenerationBusy(true);
  elements.resultStatus.textContent = `生成中 0 / ${total}`;
  setResultPlaceholder("AI 正在生成", `正在生成 0 / ${total}`);

  try {
    const results = [];
    const queue = Array.from({ length: total }, (_, index) => index);
    const worker = async () => {
      while (queue.length) {
        const index = queue.shift();
        const prompt = buildPrompt(index, total);
        const result = await requestGeneration(prompt, index, total);
        results.push(result);
        elements.resultStatus.textContent = `生成中 ${results.length} / ${total}`;
        setResultPlaceholder("AI 正在生成", `正在生成 ${results.length} / ${total}`);
      }
    };
    await Promise.all([worker(), worker()]);
    results.sort((a, b) => a.index - b.index);
    displayResults(results);
    elements.resultStatus.textContent = "生成完成";
  } catch (error) {
    if (
      error?.code === "DEEPSEEK_OFFICIAL_NO_IMAGE" ||
      /HTTP 404|无法解析为 JSON|响应体为空/i.test(String(error?.message || ""))
    ) {
      await renderLocalGlass();
      elements.resultStatus.textContent = "DeepSeek 无生图端点，已回退本地玻璃化";
      elements.resultMeta.textContent =
        "官方 DeepSeek 只用于提示词和背景分析。需要真实 AI 生图时，请在设置中切换到豆包 Seedream、Agnes，或填写支持图片生成的兼容网关。";
      showToast("DeepSeek 官方不支持图片生成，已自动生成本地玻璃化预览");
      return;
    }
    elements.resultStatus.textContent = "生成失败";
    const message = error.message || "生成失败";
    setResultPlaceholder("生成失败", message);
    showToast(message);
  } finally {
    setGenerationBusy(false);
  }
}

async function checkServer() {
  try {
    const response = await fetch("/api/health");
    const payload = await response.json();
    state.serverKeys.deepseek = Boolean(payload.deepseekKeyConfigured);
    state.serverKeys.doubao = Boolean(payload.doubaoKeyConfigured);
    state.serverKeys.agnes = Boolean(payload.agnesKeyConfigured);
    if (!sessionStorage.getItem("deepseek-base-url")) {
      sessionStorage.setItem("deepseek-base-url", payload.deepseekBaseUrl || "https://api.deepseek.com/v1");
    }
    if (!sessionStorage.getItem("deepseek-image-model")) {
      sessionStorage.setItem("deepseek-image-model", payload.deepseekImageModel || "deepseek-image");
    }
    if (!sessionStorage.getItem("deepseek-vision-model")) {
      sessionStorage.setItem("deepseek-vision-model", payload.deepseekVisionModel || "deepseek-chat");
    }
    if (!sessionStorage.getItem("doubao-base-url")) {
      sessionStorage.setItem("doubao-base-url", payload.doubaoBaseUrl || "https://ark.cn-beijing.volces.com/api/v3");
    }
    if (!sessionStorage.getItem("doubao-image-model")) {
      sessionStorage.setItem("doubao-image-model", payload.doubaoImageModel || "doubao-seedream-4-0-250828");
    }
    if (!sessionStorage.getItem("doubao-vision-model")) {
      sessionStorage.setItem("doubao-vision-model", payload.doubaoVisionModel || "doubao-seed-1-6-250615");
    }
    updateProviderStatus();
  } catch {
    elements.serverStatus.classList.add("is-warning");
    elements.serverStatus.querySelector("span:last-child").textContent = "服务未连接";
  }
}

function updateProviderStatus() {
  const ready = state.serverKeys[state.provider] || Boolean(sessionStorage.getItem(`${state.provider}-api-key`));
  const providerName =
    state.provider === "deepseek" ? "DeepSeek" : state.provider === "doubao" ? "豆包" : "Agnes";
  elements.serverStatus.classList.toggle("is-ready", ready);
  elements.serverStatus.classList.toggle("is-warning", !ready);
  elements.serverStatus.querySelector("span:last-child").textContent = ready
    ? `${providerName} 已就绪`
    : `${providerName} 未配置`;
}

function updateProviderSettings() {
  state.provider = ["deepseek", "doubao", "agnes"].includes(elements.providerSelect.value)
    ? elements.providerSelect.value
    : "deepseek";
  sessionStorage.setItem("generation-provider", state.provider);
  for (const panel of elements.settingsDialog.querySelectorAll("[data-provider-panel]")) {
    panel.hidden = panel.dataset.providerPanel !== state.provider;
  }
  updateProviderStatus();
}

function bindEvents() {
  window.addEventListener("message", (event) => {
    if (
      event.source === window &&
      event.data?.source === EXTENSION_SOURCE &&
      event.data?.type === "EXTENSION_READY"
    ) {
      updateExtensionStatus(true);
    }
  });

  elements.subjectInput.addEventListener("change", (event) => handleFile("subject", event.target.files[0]));
  elements.styleInput.addEventListener("change", (event) => handleFile("style", event.target.files[0]));
  elements.backgroundImageInput.addEventListener("change", (event) =>
    handleFile("background", event.target.files[0]),
  );
  bindDropzone(elements.subjectDropzone, "subject");
  bindDropzone(elements.styleDropzone, "style");
  bindDropzone(elements.backgroundDropzone, "background");
  elements.clearImagesButton.addEventListener("click", clearImages);
  elements.describeButton.addEventListener("click", describeBackground);
  for (const button of document.querySelectorAll("[data-paste-kind]")) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      pasteFromClipboard(button.dataset.pasteKind);
    });
  }

  elements.modeTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (button) setMode(button.dataset.mode);
  });

  for (const element of [
    elements.ratioSelect,
    elements.countSelect,
    elements.backgroundSelect,
    elements.backgroundPromptInput,
    ...Object.values(optionInputs),
  ]) {
    element.addEventListener("input", updatePrompt);
    element.addEventListener("change", updatePrompt);
  }

  elements.copyPromptButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(elements.promptOutput.value);
    showToast("提示词已复制");
  });
  elements.localPreviewButton.addEventListener("click", renderLocalGlass);
  elements.generateButton.addEventListener("click", generateWithAi);
  elements.doubaoWebButton.addEventListener("click", generateWithDoubaoWeb);
  elements.extensionRefreshButton.addEventListener("click", detectExtension);
  elements.downloadAllButton.addEventListener("click", async () => {
    if (state.generatedResults.length) {
      for (const result of state.generatedResults) await downloadResult(result);
      return;
    }
    if (state.localCanvasUrl) {
      const anchor = document.createElement("a");
      anchor.download = `${safeFileStem(state.subjectName || "local-glass")}.png`;
      anchor.href = state.localCanvasUrl;
      anchor.click();
    }
  });

  elements.settingsButton.addEventListener("click", () => elements.settingsDialog.showModal());
  elements.providerSelect.addEventListener("change", updateProviderSettings);
  elements.settingsDialog.addEventListener("close", () => {
    if (elements.settingsDialog.returnValue === "save") {
      const deepseekKey = elements.deepseekApiKeyInput.value.trim();
      const doubaoKey = elements.doubaoApiKeyInput.value.trim();
      const agnesKey = elements.agnesApiKeyInput.value.trim();
      if (deepseekKey) sessionStorage.setItem("deepseek-api-key", deepseekKey);
      if (doubaoKey) sessionStorage.setItem("doubao-api-key", doubaoKey);
      if (agnesKey) sessionStorage.setItem("agnes-api-key", agnesKey);
      sessionStorage.setItem("deepseek-base-url", elements.deepseekBaseUrlInput.value.trim());
      sessionStorage.setItem("deepseek-image-model", elements.deepseekImageModelInput.value.trim());
      sessionStorage.setItem("deepseek-vision-model", elements.deepseekVisionModelInput.value.trim());
      sessionStorage.setItem("doubao-base-url", elements.doubaoBaseUrlInput.value.trim());
      sessionStorage.setItem("doubao-image-model", elements.doubaoImageModelInput.value.trim());
      sessionStorage.setItem("doubao-vision-model", elements.doubaoVisionModelInput.value.trim());
      updateProviderSettings();
      showToast("模型配置已保存到当前会话");
    }
  });
  elements.clearApiKeyButton.addEventListener("click", () => {
    sessionStorage.removeItem("deepseek-api-key");
    sessionStorage.removeItem("doubao-api-key");
    sessionStorage.removeItem("agnes-api-key");
    elements.deepseekApiKeyInput.value = "";
    elements.doubaoApiKeyInput.value = "";
    elements.agnesApiKeyInput.value = "";
    updateProviderStatus();
    showToast("临时密钥已清除");
  });

  document.addEventListener("paste", (event) => {
    const imageItem = [...(event.clipboardData?.items || [])].find((item) => item.type.startsWith("image/"));
    if (imageItem) {
      const file = imageItem.getAsFile();
      if (file) handleFile(state.activePasteTarget, file);
    }
  });
}

function initialize() {
  initializeBackgrounds();
  elements.toast.textContent = "";
  const storedProvider = sessionStorage.getItem("generation-provider");
  state.provider = ["deepseek", "doubao", "agnes"].includes(storedProvider) ? storedProvider : "deepseek";
  elements.providerSelect.value = state.provider;
  elements.deepseekApiKeyInput.value = sessionStorage.getItem("deepseek-api-key") || "";
  elements.deepseekBaseUrlInput.value =
    sessionStorage.getItem("deepseek-base-url") || "https://api.deepseek.com/v1";
  elements.deepseekImageModelInput.value =
    sessionStorage.getItem("deepseek-image-model") || "deepseek-image";
  elements.deepseekVisionModelInput.value =
    sessionStorage.getItem("deepseek-vision-model") || "deepseek-chat";
  elements.doubaoApiKeyInput.value = sessionStorage.getItem("doubao-api-key") || "";
  elements.agnesApiKeyInput.value = sessionStorage.getItem("agnes-api-key") || "";
  elements.doubaoBaseUrlInput.value =
    sessionStorage.getItem("doubao-base-url") || "https://ark.cn-beijing.volces.com/api/v3";
  elements.doubaoImageModelInput.value =
    sessionStorage.getItem("doubao-image-model") || "doubao-seedream-4-0-250828";
  elements.doubaoVisionModelInput.value =
    sessionStorage.getItem("doubao-vision-model") || "doubao-seed-1-6-250615";
  elements.backgroundPromptInput.value = defaultBackgroundPrompt;
  bindEvents();
  updateProviderSettings();
  updatePrompt();
  detectExtension();
  window.setInterval(() => {
    if (!state.extensionConnected && !state.extensionTaskActive) detectExtension({ silent: true });
  }, 8000);
  checkServer();
}

initialize();
