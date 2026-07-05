import type { DesignSystem, Page, SlideMeta } from "@open-slide/core";
import { useSlidePageNumber } from "@open-slide/core";

export const design: DesignSystem = {
  palette: { bg: "#0b0f14", text: "#f4f6f8", accent: "#5eead4" },
  fonts: {
    display:
      '"SF Pro Display", -apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 12,
};

// ---- Shared constants ----------------------------------------------------

const mono = '"SF Mono", "JetBrains Mono", Menlo, Consolas, monospace';
const surface = "#141a21";
const line = "#232b34";
const muted = "#8b98a5";
const dim = "#5b6672";

const fill = {
  width: "100%",
  height: "100%",
  fontFamily: "var(--osd-font-body)",
} as const;

const PAD = 130;

const Footer = ({ label }: { label: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: "absolute",
        left: PAD,
        right: PAD,
        bottom: 56,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: mono,
        fontSize: 22,
        color: dim,
        letterSpacing: "0.04em",
      }}
    >
      <span>{label}</span>
      <span>
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: mono,
      fontSize: 26,
      color: "var(--osd-accent)",
      letterSpacing: "0.18em",
      marginBottom: 28,
    }}
  >
    {children}
  </div>
);

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontFamily: "var(--osd-font-display)",
      fontSize: 68,
      fontWeight: 800,
      margin: 0,
      lineHeight: 1.2,
      color: "var(--osd-text)",
    }}
  >
    {children}
  </h2>
);

// A single bullet row: label + description, one line each, tag on the right.
const BulletRow = ({ title, desc, tag }: { title: string; desc: string; tag?: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 40,
      padding: "22px 0",
      borderBottom: `1px solid ${line}`,
    }}
  >
    <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
      <span style={{ fontSize: 34, fontWeight: 700, color: "var(--osd-text)" }}>{title}</span>
      <span style={{ fontSize: 28, color: muted }}>{desc}</span>
    </div>
    {tag ? (
      <span
        style={{
          fontFamily: mono,
          fontSize: 20,
          color: "var(--osd-accent)",
          whiteSpace: "nowrap",
        }}
      >
        {tag}
      </span>
    ) : null}
  </div>
);

// ---- Page 1: Cover --------------------------------------------------------

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: `0 ${PAD}px`,
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 6,
        background: "var(--osd-accent)",
      }}
    />
    <div
      style={{ fontFamily: mono, fontSize: 28, color: "var(--osd-accent)", letterSpacing: "0.2em" }}
    >
      SELF INTRODUCTION
    </div>
    <h1
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 138,
        fontWeight: 800,
        margin: "32px 0 0",
        lineHeight: 1.08,
      }}
    >
      俞又嘉 <span style={{ color: "var(--osd-accent)" }}>Henry Yu</span>
    </h1>
    <p style={{ fontSize: 40, color: muted, marginTop: 28, maxWidth: 1400 }}>
      富邦媒體科技（momo）D4000 資深前端工程師 面試
    </p>
    <div
      style={{
        display: "flex",
        gap: 48,
        marginTop: 56,
        fontFamily: mono,
        fontSize: 24,
        color: dim,
      }}
    >
      <span>3+ YRS FRONTEND</span>
      <span style={{ color: line }}>·</span>
      <span>REACT / NEXT.JS</span>
      <span style={{ color: line }}>·</span>
      <span>WEB3 / CROSS-CHAIN</span>
    </div>
  </div>
);

// ---- Page 2: Agenda --------------------------------------------------------

const AgendaItem = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 36, padding: "13px 0" }}>
    <span
      style={{
        fontFamily: mono,
        fontSize: 28,
        color: "var(--osd-accent)",
        width: 56,
        flexShrink: 0,
      }}
    >
      {n}
    </span>
    <div style={{ fontSize: 32, fontWeight: 700, whiteSpace: "nowrap" }}>{title}</div>
    <div style={{ fontSize: 24, color: muted }}>{desc}</div>
  </div>
);

const Agenda: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: PAD,
      position: "relative",
    }}
  >
    <Eyebrow>AGENDA</Eyebrow>
    <Heading>今天想跟大家分享的內容</Heading>
    <div style={{ marginTop: 56 }}>
      <AgendaItem n="01" title="關於我" desc="背景、經驗與技術範疇" />
      <AgendaItem n="02" title="核心專案經驗" desc="跨鏈模組與錢包架構設計" />
      <AgendaItem n="03" title="前端工程化實踐" desc="架構、品質機制與流程建置" />
      <AgendaItem n="04" title="AI-assisted 開發" desc="如何用 AI 提升開發與內容產出效率" />
      <AgendaItem n="05" title="技術輸出與作品集" desc="部落格經營與個人專案" />
      <AgendaItem n="06" title="為什麼是 momo" desc="與這個職缺的契合點" />
    </div>
    <Footer label="HENRY YU · SELF INTRODUCTION" />
  </div>
);

// ---- Page 3: About me -----------------------------------------------------

const About: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: PAD,
      position: "relative",
    }}
  >
    <Eyebrow>01 · 關於我</Eyebrow>
    <Heading>3 年以上前端經驗，專注架構與工程品質</Heading>
    <div style={{ marginTop: 64, display: "flex", gap: 56 }}>
      <div
        style={{
          flex: 1,
          background: surface,
          border: `1px solid ${line}`,
          borderRadius: 16,
          padding: 40,
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 22,
            color: "var(--osd-accent)",
            letterSpacing: "0.1em",
          }}
        >
          CURRENT
        </div>
        <div style={{ fontSize: 40, fontWeight: 800, marginTop: 16 }}>LeadBest</div>
        <div style={{ fontSize: 28, color: muted, marginTop: 12, lineHeight: 1.5 }}>
          前端工程師 · 負責跨鏈模組與
          <br />
          資產橋接、錢包相關產品開發
        </div>
      </div>
      <div
        style={{
          flex: 1,
          background: surface,
          border: `1px solid ${line}`,
          borderRadius: 16,
          padding: 40,
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 22,
            color: "var(--osd-accent)",
            letterSpacing: "0.1em",
          }}
        >
          FOCUS
        </div>
        <div style={{ fontSize: 40, fontWeight: 800, marginTop: 16 }}>技術範疇</div>
        <div style={{ fontSize: 28, color: muted, marginTop: 12, lineHeight: 1.5 }}>
          React / Next.js 生態、全端開發、
          <br />
          DevOps 與部署、安全性實踐
        </div>
      </div>
    </div>
    <Footer label="HENRY YU · SELF INTRODUCTION" />
  </div>
);

// ---- Page 4: Core project ---------------------------------------------------

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: mono,
      fontSize: 22,
      color: "var(--osd-accent)",
      border: "1px solid var(--osd-accent)",
      borderRadius: 8,
      padding: "8px 18px",
    }}
  >
    {children}
  </span>
);

const CoreProject: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: PAD,
      position: "relative",
    }}
  >
    <Eyebrow>02 · 核心專案經驗</Eyebrow>
    <Heading>跨鏈模組與加密貨幣錢包架構</Heading>
    <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
      <Chip>Bitcoin L2 · Liquid</Chip>
      <Chip>Ethereum</Chip>
      <Chip>Tron</Chip>
    </div>
    <div style={{ marginTop: 48 }}>
      <BulletRow title="跨鏈架構設計" desc="統一介面串接多條鏈的資產查詢與交易流程" />
      <BulletRow title="資產橋接功能" desc="設計橋接流程的狀態管理與異常處理機制" />
      <BulletRow title="錢包整合開發" desc="曾參與 Bridgefy 錢包專案的前端實作" />
    </div>
    <Footer label="HENRY YU · SELF INTRODUCTION" />
  </div>
);

// ---- Page 5: Frontend engineering practices ---------------------------------

const Engineering: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: PAD,
      position: "relative",
    }}
  >
    <Eyebrow>03 · 前端工程化實踐</Eyebrow>
    <Heading>把「能跑」升級成「可維護、可擴展」</Heading>
    <div style={{ marginTop: 56 }}>
      <BulletRow
        title="Monorepo 架構"
        desc="模組邊界設計與 shared modules 拆分"
        tag="ARCHITECTURE"
      />
      <BulletRow title="TypeScript 全面採用" desc="型別安全帶動重構信心與協作效率" tag="QUALITY" />
      <BulletRow
        title="CI/CD 與自動化測試"
        desc="Lint、type-check、測試串接部署流程"
        tag="PIPELINE"
      />
      <BulletRow title="Code Review 文化" desc="推動一致的程式風格與知識共享" tag="PROCESS" />
      <BulletRow title="部署與維運" desc="Docker、Cloudflare Workers 實務經驗" tag="DEVOPS" />
    </div>
    <Footer label="HENRY YU · SELF INTRODUCTION" />
  </div>
);

// ---- Page 6: AI-assisted development ---------------------------------------

const AiAssisted: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: PAD,
      position: "relative",
    }}
  >
    <Eyebrow>04 · AI-assisted 開發</Eyebrow>
    <Heading>把 AI 當作開發流程中的協作者</Heading>
    <div style={{ marginTop: 64, display: "flex", gap: 56 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: "var(--osd-accent)" }}>開發輔助</div>
        <p style={{ fontSize: 28, color: muted, marginTop: 20, lineHeight: 1.6 }}>
          日常使用 AI 工具進行程式撰寫、重構與程式碼審查， 加快迭代速度並降低重複性工作。
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: "var(--osd-accent)" }}>
          內容生成實作
        </div>
        <p style={{ fontSize: 28, color: muted, marginTop: 20, lineHeight: 1.6 }}>
          使用 Vercel AI SDK 打造部落格文章生成工具， 並實作過基於本地模型的 Chatbot 應用。
        </p>
      </div>
    </div>
    <Footer label="HENRY YU · SELF INTRODUCTION" />
  </div>
);

// ---- Page 7: Blog & portfolio -----------------------------------------------

const Blog: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: PAD,
      position: "relative",
    }}
  >
    <Eyebrow>05 · 技術輸出與作品集</Eyebrow>
    <Heading>持續寫作，把經驗變成可分享的知識</Heading>
    <div style={{ marginTop: 56 }}>
      <BulletRow title="個人技術部落格" desc="自建後台系統，定期發表技術文章" tag="NEXT.JS" />
      <BulletRow title="SEO 與內容優化" desc="持續優化文章結構以提升觸及與可讀性" tag="CONTENT" />
      <BulletRow title="開源與專案維護" desc="活躍參與開源專案，維護個人作品集網站" tag="OSS" />
    </div>
    <Footer label="HENRY YU · SELF INTRODUCTION" />
  </div>
);

// ---- Page 8: Closing / why momo ---------------------------------------------

const Closing: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: `0 ${PAD}px`,
      position: "relative",
    }}
  >
    <Eyebrow>06 · 為什麼是 momo</Eyebrow>
    <h2
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 84,
        fontWeight: 800,
        margin: 0,
        lineHeight: 1.25,
        maxWidth: 1600,
      }}
    >
      期待在大流量電商場景中，把架構思維與工程化經驗放到更大的舞台上驗證
    </h2>
    <div style={{ marginTop: 64 }}>
      <BulletRow title="架構經驗" desc="跨鏈模組設計 → 大型電商前端架構演進" />
      <BulletRow title="工程化實踐" desc="CI/CD、品質機制 → momo 的工程文化建設" />
      <BulletRow title="AI Native 熱情" desc="日常實作經驗 → 導入 AI-assisted workflow" />
    </div>
    <p
      style={{
        fontFamily: mono,
        fontSize: 26,
        color: "var(--osd-accent)",
        marginTop: 72,
        letterSpacing: "0.06em",
      }}
    >
      謝謝聆聽，期待接下來的交流與討論。
    </p>
  </div>
);

export const meta: SlideMeta = {
  title: "momo 資深前端工程師 自我介紹",
  createdAt: "2026-07-05T19:07:38.832Z",
};

export default [
  Cover,
  Agenda,
  About,
  CoreProject,
  Engineering,
  AiAssisted,
  Blog,
  Closing,
] satisfies Page[];
