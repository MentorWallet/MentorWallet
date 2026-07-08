/* @ds-bundle: {"format":3,"namespace":"MentorWalletDesignSystem_d69bb0","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ListItem","sourcePath":"components/data/ListItem.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c8797fabb3b5","components/core/Badge.jsx":"d98e404a0de1","components/core/Button.jsx":"3f050099065d","components/core/Card.jsx":"4d79c29da182","components/core/IconButton.jsx":"9d62751a8a18","components/core/ProgressBar.jsx":"576097063c1a","components/core/StatCard.jsx":"d5671d62e768","components/core/Tag.jsx":"24f015ed69e4","components/data/ListItem.jsx":"1b140dd9ae2b","components/forms/Checkbox.jsx":"223e0e939c58","components/forms/Input.jsx":"ce0e88ef1ead","components/forms/Select.jsx":"ed4890ad6f72","components/forms/Switch.jsx":"ef1c51a8c0d2","components/injectStyles.js":"ca495c655986","components/navigation/Tabs.jsx":"3fe86cb6273b"},"inlinedExternals":[],"unexposedExports":[{"name":"injectStyles","sourcePath":"components/injectStyles.js"}]} */

(() => {

const __ds_ns = (window.MentorWalletDesignSystem_d69bb0 = window.MentorWalletDesignSystem_d69bb0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/injectStyles.js
try { (() => {
// Injects a component's CSS (token-driven) once per id. Plain CSS, no CSS-in-JS lib.
function injectStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { injectStyles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/injectStyles.js", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-avatar', `
.mw-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill); overflow: hidden; flex: 0 0 auto;
  font-family: var(--font-primary); font-weight: var(--fw-semibold);
  background: var(--green-100); color: var(--green-800);
  user-select: none;
}
.mw-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.mw-avatar--xs { width: 28px; height: 28px; font-size: 11px; }
.mw-avatar--sm { width: 36px; height: 36px; font-size: 13px; }
.mw-avatar--md { width: 44px; height: 44px; font-size: 16px; }
.mw-avatar--lg { width: 60px; height: 60px; font-size: 21px; }
.mw-avatar--accent { background: var(--fluor-300); color: var(--green-900); }
.mw-avatar--dark   { background: var(--green-900); color: var(--mw-mint); }
.mw-avatar--ring { box-shadow: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--fluor-300); }
`);
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0] || '').join('').toUpperCase();
}

/** User avatar — image or initials fallback. */
function Avatar({
  src = '',
  name = '',
  size = 'md',
  variant = 'brand',
  ring = false,
  className = '',
  ...rest
}) {
  const cls = ['mw-avatar', `mw-avatar--${size}`, variant !== 'brand' ? `mw-avatar--${variant}` : '', ring ? 'mw-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-badge', `
.mw-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-primary); font-weight: var(--fw-semibold);
  font-size: var(--fs-caption); line-height: 1;
  padding: 5px 10px; border-radius: var(--radius-pill); white-space: nowrap;
}
.mw-badge svg, .mw-badge i { width: 1.05em; height: 1.05em; }
.mw-badge--dot::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.mw-badge--neutral  { background: var(--neutral-100); color: var(--neutral-700); }
.mw-badge--brand    { background: var(--green-100); color: var(--green-800); }
.mw-badge--accent   { background: var(--fluor-300); color: var(--green-900); }
.mw-badge--positive { background: var(--status-positive-surface); color: var(--status-positive); }
.mw-badge--warning  { background: var(--status-warning-surface); color: var(--status-warning); }
.mw-badge--negative { background: var(--status-negative-surface); color: var(--status-negative); }
.mw-badge--info     { background: var(--status-info-surface); color: var(--status-info); }
`);

/** Small status / category label. */
function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['mw-badge', `mw-badge--${variant}`, dot ? 'mw-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-button', `
.mw-btn {
  font-family: var(--font-primary);
  font-weight: var(--fw-semibold);
  border: 1.5px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: var(--radius-pill);
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  transition: background var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard);
}
.mw-btn svg, .mw-btn i { width: 1.15em; height: 1.15em; display: inline-block; flex: 0 0 auto; }
.mw-btn--full { width: 100%; }
.mw-btn:active:not(:disabled) { transform: scale(0.985); }
.mw-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.mw-btn:disabled { opacity: 0.45; cursor: not-allowed; }

.mw-btn--sm { font-size: var(--fs-body-sm); padding: 8px 16px; }
.mw-btn--md { font-size: var(--fs-body); padding: 12px 22px; }
.mw-btn--lg { font-size: var(--fs-body-lg); padding: 15px 28px; }

.mw-btn--primary { background: var(--color-primary); color: var(--color-primary-contrast); }
.mw-btn--primary:hover:not(:disabled) { background: var(--color-primary-hover); }
.mw-btn--primary:active:not(:disabled) { background: var(--color-primary-active); }

.mw-btn--accent { background: var(--color-accent); color: var(--color-accent-contrast); }
.mw-btn--accent:hover:not(:disabled) { background: var(--color-accent-hover); }
.mw-btn--accent:active:not(:disabled) { background: var(--color-accent-active); }

.mw-btn--secondary { background: transparent; border-color: var(--border-strong); color: var(--text-strong); }
.mw-btn--secondary:hover:not(:disabled) { background: var(--green-50); }

.mw-btn--ghost { background: transparent; color: var(--text-strong); }
.mw-btn--ghost:hover:not(:disabled) { background: var(--neutral-100); }

.mw-btn--danger { background: var(--status-negative); color: #fff; }
.mw-btn--danger:hover:not(:disabled) { filter: brightness(0.94); }
`);

/**
 * MentorWallet primary action button.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['mw-btn', `mw-btn--${variant}`, `mw-btn--${size}`, fullWidth ? 'mw-btn--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-card', `
.mw-card {
  border-radius: var(--radius-card);
  background: var(--surface-card);
  box-shadow: var(--shadow-sm);
  border: 1px solid transparent;
  transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard);
}
.mw-card--p-sm { padding: var(--space-4); }
.mw-card--p-md { padding: var(--space-6); }
.mw-card--p-lg { padding: var(--space-8); }
.mw-card--mint   { background: var(--surface-mint); box-shadow: none; }
.mw-card--sky    { background: var(--color-bg-sky); box-shadow: none; }
.mw-card--dark   { background: var(--surface-inverse); box-shadow: none; color: var(--text-on-dark); }
.mw-card--outline { background: var(--surface-card); box-shadow: none; border-color: var(--border-subtle); }
.mw-card--interactive { cursor: pointer; }
.mw-card--interactive:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.mw-card--interactive:focus-visible { outline: none; box-shadow: var(--focus-ring); }
`);

/** Surface container. */
function Card({
  variant = 'default',
  padding = 'md',
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['mw-card', `mw-card--p-${padding}`, variant !== 'default' ? `mw-card--${variant}` : '', interactive ? 'mw-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-iconbutton', `
.mw-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: 1.5px solid transparent; cursor: pointer; padding: 0;
  border-radius: var(--radius-md); color: var(--text-strong);
  background: transparent;
  transition: background var(--dur-fast) var(--ease-standard), color var(--dur-fast), border-color var(--dur-fast);
}
.mw-iconbtn svg, .mw-iconbtn i { width: 1.2em; height: 1.2em; }
.mw-iconbtn--sm { width: 32px; height: 32px; font-size: 16px; }
.mw-iconbtn--md { width: 40px; height: 40px; font-size: 19px; }
.mw-iconbtn--lg { width: 48px; height: 48px; font-size: 22px; }
.mw-iconbtn--round { border-radius: var(--radius-pill); }
.mw-iconbtn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.mw-iconbtn:disabled { opacity: 0.4; cursor: not-allowed; }
.mw-iconbtn--ghost:hover:not(:disabled) { background: var(--neutral-100); }
.mw-iconbtn--soft { background: var(--green-50); }
.mw-iconbtn--soft:hover:not(:disabled) { background: var(--green-100); }
.mw-iconbtn--solid { background: var(--color-primary); color: var(--color-primary-contrast); }
.mw-iconbtn--solid:hover:not(:disabled) { background: var(--color-primary-hover); }
.mw-iconbtn--accent { background: var(--color-accent); color: var(--color-accent-contrast); }
.mw-iconbtn--accent:hover:not(:disabled) { background: var(--color-accent-hover); }
`);

/** Square/round button containing a single icon. */
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  className = '',
  children,
  'aria-label': ariaLabel,
  ...rest
}) {
  const cls = ['mw-iconbtn', `mw-iconbtn--${variant}`, `mw-iconbtn--${size}`, round ? 'mw-iconbtn--round' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": ariaLabel
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-progress', `
.mw-progress { width: 100%; }
.mw-progress__head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: var(--space-2); font-family: var(--font-primary); }
.mw-progress__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-body); }
.mw-progress__val { font-size: var(--fs-body-sm); font-weight: var(--fw-semibold); color: var(--text-strong); font-family: var(--font-mono); }
.mw-progress__track { height: 10px; border-radius: var(--radius-pill); background: var(--neutral-200); overflow: hidden; }
.mw-progress--sm .mw-progress__track { height: 6px; }
.mw-progress--lg .mw-progress__track { height: 14px; }
.mw-progress__fill { height: 100%; border-radius: var(--radius-pill); transition: width var(--dur-slow) var(--ease-out); }
.mw-progress__fill--brand  { background: var(--green-900); }
.mw-progress__fill--accent { background: var(--fluor-300); }
.mw-progress__fill--positive { background: var(--status-positive); }
.mw-progress__fill--warning  { background: var(--status-warning); }
.mw-progress__fill--negative { background: var(--status-negative); }
`);

/** Linear progress / budget bar. */
function ProgressBar({
  value = 0,
  max = 100,
  label = '',
  showValue = false,
  valueText = '',
  size = 'md',
  variant = 'brand',
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const cls = ['mw-progress', `mw-progress--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "mw-progress__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "mw-progress__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "mw-progress__val"
  }, valueText || `${Math.round(pct)}%`)), /*#__PURE__*/React.createElement("div", {
    className: "mw-progress__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, /*#__PURE__*/React.createElement("div", {
    className: `mw-progress__fill mw-progress__fill--${variant}`,
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-statcard', `
.mw-stat { border-radius: var(--radius-card); padding: var(--space-6); background: var(--surface-card); box-shadow: var(--shadow-sm); }
.mw-stat--dark { background: var(--surface-inverse); box-shadow: none; }
.mw-stat__top { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
.mw-stat__label { font-family: var(--font-primary); font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-muted); }
.mw-stat--dark .mw-stat__label { color: var(--text-on-dark-muted); }
.mw-stat__ico { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--green-50); color: var(--green-700); }
.mw-stat--dark .mw-stat__ico { background: rgba(116,255,196,.14); color: var(--fluor-300); }
.mw-stat__ico svg, .mw-stat__ico i { width: 19px; height: 19px; }
.mw-stat__value { font-family: var(--font-mono); font-weight: 500; font-size: var(--fs-h1); color: var(--text-strong); letter-spacing: -0.02em; margin-top: var(--space-4); line-height: 1.1; white-space: nowrap; }
.mw-stat--sm { padding: var(--space-4); }
.mw-stat--sm .mw-stat__value { font-size: var(--fs-h3); margin-top: var(--space-3); }
.mw-stat--dark .mw-stat__value { color: var(--mw-mint); }
.mw-stat__delta { display: inline-flex; align-items: center; gap: 4px; font-family: var(--font-primary); font-weight: var(--fw-semibold); font-size: var(--fs-body-sm); margin-top: var(--space-2); }
.mw-stat__delta svg, .mw-stat__delta i { width: 15px; height: 15px; }
.mw-stat__delta--up { color: var(--status-positive); }
.mw-stat__delta--down { color: var(--status-negative); }
.mw-stat__delta--flat { color: var(--text-muted); }
.mw-stat__caption { font-family: var(--font-primary); font-size: var(--fs-caption); color: var(--text-muted); margin-left: 4px; }
`);

/** Metric / balance card with optional delta. */
const svgBase = {
  width: 15,
  height: 15,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
function DeltaGlyph({
  direction
}) {
  if (direction === 'down') return /*#__PURE__*/React.createElement("svg", svgBase, /*#__PURE__*/React.createElement("polyline", {
    points: "22 17 13.5 8.5 8.5 13.5 2 7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 17 22 17 22 11"
  }));
  if (direction === 'flat') return /*#__PURE__*/React.createElement("svg", svgBase, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }));
  return /*#__PURE__*/React.createElement("svg", svgBase, /*#__PURE__*/React.createElement("polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 7 22 7 22 13"
  }));
}
function StatCard({
  label,
  value,
  icon = null,
  delta = null,
  deltaDirection = 'up',
  deltaCaption = '',
  dark = false,
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['mw-stat', size === 'sm' ? 'mw-stat--sm' : '', dark ? 'mw-stat--dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "mw-stat__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mw-stat__label"
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    className: "mw-stat__ico"
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "mw-stat__value"
  }, value), delta != null && /*#__PURE__*/React.createElement("div", {
    className: `mw-stat__delta mw-stat__delta--${deltaDirection}`
  }, /*#__PURE__*/React.createElement(DeltaGlyph, {
    direction: deltaDirection
  }), /*#__PURE__*/React.createElement("span", null, delta), deltaCaption && /*#__PURE__*/React.createElement("span", {
    className: "mw-stat__caption"
  }, deltaCaption)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-tag', `
.mw-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-primary); font-weight: var(--fw-medium);
  font-size: var(--fs-body-sm); line-height: 1;
  padding: 8px 14px; border-radius: var(--radius-pill);
  border: 1.5px solid var(--border-default); background: var(--surface-card);
  color: var(--text-body); cursor: default;
  transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), color var(--dur-fast);
}
.mw-tag svg, .mw-tag i { width: 1.05em; height: 1.05em; }
button.mw-tag { cursor: pointer; }
button.mw-tag:hover { background: var(--green-50); border-color: var(--green-300); }
button.mw-tag:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.mw-tag--selected { background: var(--green-900); border-color: var(--green-900); color: var(--mw-mint); }
button.mw-tag--selected:hover { background: var(--green-800); border-color: var(--green-800); }
.mw-tag__x { display: inline-flex; margin: -2px -4px -2px 0; padding: 2px; border-radius: var(--radius-pill); cursor: pointer; opacity: .65; }
.mw-tag__x:hover { opacity: 1; background: rgba(0,0,0,.08); }
`);

/** Pill chip for filters / categories — static or selectable. */
function Tag({
  selected = false,
  leadingIcon = null,
  onRemove = null,
  onClick = null,
  className = '',
  children,
  ...rest
}) {
  const interactive = !!onClick;
  const Tag_ = interactive ? 'button' : 'span';
  const cls = ['mw-tag', selected ? 'mw-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    onClick: onClick
  }, rest), leadingIcon, /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("span", {
    className: "mw-tag__x",
    role: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-listitem', `
.mw-li { display: flex; align-items: center; gap: var(--space-3); width: 100%; text-align: left;
  padding: var(--space-3) var(--space-2); background: transparent; border: 0; cursor: default;
  border-radius: var(--radius-md); transition: background var(--dur-fast) var(--ease-standard); }
button.mw-li { cursor: pointer; }
button.mw-li:hover { background: var(--green-50); }
button.mw-li:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.mw-li__lead { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px;
  border-radius: var(--radius-md); background: var(--green-50); color: var(--green-700); flex: 0 0 auto; }
.mw-li__lead svg, .mw-li__lead i { width: 21px; height: 21px; }
.mw-li__body { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.mw-li__title { display: block; font-family: var(--font-primary); font-weight: var(--fw-semibold); font-size: var(--fs-body); color: var(--text-strong);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mw-li__sub { display: block; font-family: var(--font-primary); font-size: var(--fs-body-sm); color: var(--text-muted); margin-top: 1px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mw-li__trail { text-align: right; flex: 0 0 auto; }
.mw-li__amount { font-family: var(--font-mono); font-weight: 500; font-size: var(--fs-body); color: var(--text-strong); white-space: nowrap; }
.mw-li__amount--pos { color: var(--status-positive); }
.mw-li__amount--neg { color: var(--text-strong); }
.mw-li__meta { font-family: var(--font-primary); font-size: var(--fs-caption); color: var(--text-muted); margin-top: 1px; }
`);

/** List / transaction row. */
function ListItem({
  lead = null,
  title,
  subtitle = '',
  amount = null,
  amountTone = 'neutral',
  meta = '',
  trailing = null,
  onClick = null,
  className = '',
  ...rest
}) {
  const interactive = !!onClick;
  const Tag = interactive ? 'button' : 'div';
  const cls = ['mw-li', className].filter(Boolean).join(' ');
  const amountCls = amountTone === 'positive' ? 'mw-li__amount mw-li__amount--pos' : 'mw-li__amount';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    onClick: onClick
  }, rest), lead && /*#__PURE__*/React.createElement("span", {
    className: "mw-li__lead"
  }, lead), /*#__PURE__*/React.createElement("span", {
    className: "mw-li__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mw-li__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "mw-li__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    className: "mw-li__trail"
  }, trailing != null ? trailing : /*#__PURE__*/React.createElement(React.Fragment, null, amount != null && /*#__PURE__*/React.createElement("div", {
    className: amountCls
  }, amount), meta && /*#__PURE__*/React.createElement("div", {
    className: "mw-li__meta"
  }, meta))));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-checkbox', `
.mw-check { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-primary);
  font-size: var(--fs-body); color: var(--text-body); cursor: pointer; user-select: none; }
.mw-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.mw-check__box { flex: 0 0 auto; width: 22px; height: 22px; border-radius: 7px; border: 1.5px solid var(--border-default);
  background: var(--surface-card); display: inline-flex; align-items: center; justify-content: center;
  color: var(--green-900); transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast); margin-top: 1px; }
.mw-check__box svg, .mw-check__box i { width: 15px; height: 15px; opacity: 0; transform: scale(.6); transition: opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out); }
.mw-check:hover .mw-check__box { border-color: var(--green-500); }
.mw-check input:checked + .mw-check__box { background: var(--fluor-300); border-color: var(--fluor-300); }
.mw-check input:checked + .mw-check__box svg, .mw-check input:checked + .mw-check__box i { opacity: 1; transform: scale(1); }
.mw-check input:focus-visible + .mw-check__box { box-shadow: var(--focus-ring); }
.mw-check input:disabled + .mw-check__box { background: var(--neutral-100); border-color: var(--border-subtle); }
.mw-check--disabled { color: var(--text-muted); cursor: not-allowed; }
.mw-check__text { line-height: 1.4; }
`);

/** Checkbox with label. */
function Checkbox({
  label = '',
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['mw-check', disabled ? 'mw-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mw-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: "mw-check__text"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-input', `
.mw-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-primary); }
.mw-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-strong); }
.mw-field__req { color: var(--status-negative); margin-left: 2px; }
.mw-inputwrap { display: flex; align-items: center; gap: 8px; background: var(--surface-card);
  border: 1.5px solid var(--border-default); border-radius: var(--radius-md); padding: 0 14px;
  transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard); }
.mw-inputwrap:focus-within { border-color: var(--green-700); box-shadow: var(--focus-ring); }
.mw-inputwrap--error { border-color: var(--status-negative); }
.mw-inputwrap--error:focus-within { box-shadow: 0 0 0 3px rgba(200,68,58,.25); }
.mw-inputwrap__icon { color: var(--text-muted); display: inline-flex; flex: 0 0 auto; }
.mw-inputwrap__icon svg, .mw-inputwrap__icon i { width: 19px; height: 19px; }
.mw-input { flex: 1 1 auto; border: 0; outline: 0; background: transparent; font-family: var(--font-primary);
  font-size: var(--fs-body); color: var(--text-strong); padding: 12px 0; min-width: 0; }
.mw-input::placeholder { color: var(--neutral-400); }
.mw-input:disabled { color: var(--text-muted); }
.mw-inputwrap:has(.mw-input:disabled) { background: var(--neutral-50); border-color: var(--border-subtle); }
.mw-field__msg { font-size: var(--fs-caption); color: var(--text-muted); }
.mw-field__msg--error { color: var(--status-negative); }
`);

/** Labelled text input. */
function Input({
  label = '',
  hint = '',
  error = '',
  leadingIcon = null,
  trailing = null,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `mw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['mw-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "mw-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "mw-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: `mw-inputwrap ${error ? 'mw-inputwrap--error' : ''}`
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "mw-inputwrap__icon"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "mw-input",
    "aria-invalid": !!error
  }, rest)), trailing), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `mw-field__msg ${error ? 'mw-field__msg--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-select', `
.mw-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-primary); }
.mw-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-strong); }
.mw-field__msg { font-size: var(--fs-caption); color: var(--text-muted); }
.mw-field__msg--error { color: var(--status-negative); }
.mw-selectwrap { position: relative; display: flex; align-items: center; }
.mw-select { appearance: none; -webkit-appearance: none; width: 100%; font-family: var(--font-primary);
  font-size: var(--fs-body); color: var(--text-strong); background: var(--surface-card);
  border: 1.5px solid var(--border-default); border-radius: var(--radius-md);
  padding: 12px 42px 12px 14px; cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard); }
.mw-select:focus-visible { outline: none; border-color: var(--green-700); box-shadow: var(--focus-ring); }
.mw-select:disabled { background: var(--neutral-50); color: var(--text-muted); cursor: not-allowed; }
.mw-selectwrap__chev { position: absolute; right: 14px; pointer-events: none; color: var(--text-muted); display: inline-flex; }
.mw-selectwrap__chev svg, .mw-selectwrap__chev i { width: 18px; height: 18px; }
`);

/** Native select, brand-styled. */
function Select({
  label = '',
  hint = '',
  error = '',
  options = [],
  placeholder = '',
  id,
  className = '',
  children,
  ...rest
}) {
  const selectId = id || (label ? `mw-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['mw-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "mw-field__label",
    htmlFor: selectId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mw-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: "mw-select"
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "mw-selectwrap__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `mw-field__msg ${error ? 'mw-field__msg--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-switch', `
.mw-switch { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-primary);
  font-size: var(--fs-body); color: var(--text-body); cursor: pointer; user-select: none; }
.mw-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.mw-switch__track { flex: 0 0 auto; width: 44px; height: 26px; border-radius: var(--radius-pill);
  background: var(--neutral-300); position: relative; transition: background var(--dur-base) var(--ease-standard); }
.mw-switch__thumb { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%;
  background: #fff; box-shadow: var(--shadow-xs); transition: transform var(--dur-base) var(--ease-standard); }
.mw-switch input:checked + .mw-switch__track { background: var(--green-900); }
.mw-switch input:checked + .mw-switch__track .mw-switch__thumb { transform: translateX(18px); }
.mw-switch input:focus-visible + .mw-switch__track { box-shadow: var(--focus-ring); }
.mw-switch input:disabled + .mw-switch__track { opacity: .5; }
.mw-switch--disabled { color: var(--text-muted); cursor: not-allowed; }
`);

/** On/off toggle switch. */
function Switch({
  label = '',
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['mw-switch', disabled ? 'mw-switch--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mw-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mw-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles('mw-tabs', `
.mw-tabs { display: flex; gap: var(--space-1); border-bottom: 1px solid var(--border-subtle); }
.mw-tabs--pill { border-bottom: 0; gap: var(--space-1); background: var(--neutral-100); padding: 4px; border-radius: var(--radius-pill); display: inline-flex; }
.mw-tab {
  font-family: var(--font-primary); font-weight: var(--fw-medium); font-size: var(--fs-body);
  background: transparent; border: 0; cursor: pointer; color: var(--text-muted);
  padding: 12px 16px; position: relative; display: inline-flex; align-items: center; gap: 8px;
  transition: color var(--dur-fast) var(--ease-standard);
}
.mw-tab svg, .mw-tab i { width: 1.05em; height: 1.05em; }
.mw-tab:hover { color: var(--text-strong); }
.mw-tab--active { color: var(--text-strong); font-weight: var(--fw-semibold); }
.mw-tab--active::after { content: ""; position: absolute; left: 12px; right: 12px; bottom: -1px; height: 3px; border-radius: 3px 3px 0 0; background: var(--green-900); }
.mw-tab:focus-visible { outline: none; box-shadow: var(--focus-ring); border-radius: var(--radius-sm); }
.mw-tabs--pill .mw-tab { padding: 8px 18px; border-radius: var(--radius-pill); }
.mw-tabs--pill .mw-tab--active { background: var(--surface-card); box-shadow: var(--shadow-xs); }
.mw-tabs--pill .mw-tab--active::after { display: none; }
`);

/** Tab navigation. */
function Tabs({
  tabs = [],
  value,
  onChange = () => {},
  variant = 'underline',
  className = '',
  ...rest
}) {
  const cls = ['mw-tabs', variant === 'pill' ? 'mw-tabs--pill' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), tabs.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    const icon = typeof t === 'string' ? null : t.icon;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      className: `mw-tab ${active ? 'mw-tab--active' : ''}`,
      onClick: () => onChange(id)
    }, icon, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
