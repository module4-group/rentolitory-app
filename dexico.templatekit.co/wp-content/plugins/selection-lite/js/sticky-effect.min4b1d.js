/**
 * Selection Lite
 * Carefully selected Elementor addons bundle, for building the most awesome websites
 *
 * @encoding        UTF-8
 * @version         1.8
 * @copyright       (C) 2018 - 2023 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         GPLv3
 * @contributors    merkulove, vladcherviakov, phoenixmkua, podolianochka, viktorialev01
 * @support         help@merkulov.design
 **/
"use strict";const mdpStickyEffect={stickySectionEffect:function(e,t){const s=document.querySelector("."+e),o=t.mdp_selection_sticky_effect_scroll_offset.size,i=t.mdp_selection_sticky_effect_hide_on_scroll_down;let n,c=0;const l=()=>{document.querySelector("."+e)||window.removeEventListener("scroll",l),s.classList.add("mdp-selection-section-sticky");window.scrollY>=o&&document.querySelector("."+e)?(s.classList.add("mdp-selection-section-sticky"),t.mdp_selection_sticky_effect_z_index?s.style.zIndex=t.mdp_selection_sticky_effect_z_index:s.style.removeProperty("z-index"),s.style.top=(t.mdp_selection_sticky_section_effect_offset_top.size?t.mdp_selection_sticky_section_effect_offset_top.size:0)+"px","yes"===i&&(n=document.body.getBoundingClientRect().top>c?"up":"down",c=document.body.getBoundingClientRect().top,"up"===n?s.classList.remove("mdp-selection-section-sticky-hide"):"down"===n&&s.classList.add("mdp-selection-section-sticky-hide"))):(s.classList.remove("mdp-selection-section-sticky"),s.classList.remove("mdp-selection-section-sticky"),s.style.removeProperty("z-index"),s.style.removeProperty("top"),s.classList.remove("mdp-selection-section-sticky-hide"))};window.addEventListener("scroll",l)},stickyColumnEffect:function(e,t){const s=document.querySelector("."+e);if(!s)return;const o=document.querySelector(`.${e} .elementor-widget-wrap`),i=o.parentElement.parentElement,n=t.mdp_selection_sticky_column_effect_offset_top?t.mdp_selection_sticky_column_effect_offset_top:0,c=o.parentElement;let l;l=i.getBoundingClientRect().height;const d=()=>{if(document.querySelector("."+e)||window.removeEventListener("scroll",d),o.closest(".mdp-selection-section-sticky"))return c.style.removeProperty("align-items"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),o.style.removeProperty("height"),void i.style.removeProperty("height");const r=i.getBoundingClientRect().top,m=n.size;let y;o.style.height="fit-content",o.style.width=c.offsetWidth+"px",y=o.getBoundingClientRect().height!==s.getBoundingClientRect().height||!!t.mdp_selection_sticky_column_effect_enable_on.includes("mobile"),y&&(r<=m&&document.querySelector("."+e)?(window.matchMedia(`(max-width: ${elementorFrontend.config.responsive.activeBreakpoints.mobile.value}px)`).matches&&(i.style.height=l+"px"),i.getBoundingClientRect().bottom>=parseInt(window.getComputedStyle(o).getPropertyValue("height"))+n.size?(o.classList.add("mdp-selection-column-sticky"),o.style.top=`${n.size}${n.unit}`):(o.classList.remove("mdp-selection-column-sticky"),c.style.alignItems="flex-end",o.style.removeProperty("top"),o.style.removeProperty("bottom"),o.style.removeProperty("height"),i.style.removeProperty("height"),o.style.removeProperty("width"))):(o.classList.remove("mdp-selection-column-sticky"),c.style.removeProperty("align-items"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),o.style.removeProperty("height"),i.style.removeProperty("height"),o.style.removeProperty("width")))};window.addEventListener("scroll",d)},checkScreenSize:function(e,t){e.includes("mobile")&&window.matchMedia(`(max-width: ${elementorFrontend.config.responsive.activeBreakpoints.mobile.value}px)`).matches&&t(),e.includes("tablet")&&window.matchMedia(`(min-width: ${elementorFrontend.config.responsive.activeBreakpoints.mobile.value+1}px)`).matches&&window.matchMedia(`(max-width: ${elementorFrontend.config.responsive.activeBreakpoints.tablet.value}px)`).matches&&t(),e.includes("desktop")&&window.matchMedia(`(min-width: ${elementorFrontend.config.responsive.activeBreakpoints.tablet.value+1}px)`).matches&&t()},setStickyEffect:function(e,t){const s=elementorFrontend.isEditMode(),o=s?elementorFrontend.config.elements.data:[];let i={},n={};function c(e){let t={};if(s)if(e.dataset.modelCid){const s=o[e.dataset.modelCid].attributes;for(let e in s)e.startsWith("mdp")&&(t[e]=s[e])}else e.dataset.settings&&(t=JSON.parse(e.dataset.settings));else!s&&e.dataset.settings&&(t=JSON.parse(e.dataset.settings));return t}e&&(i=c(e),"yes"===i.mdp_selection_sticky_column_effect_enable?(e.classList.add("mdp-selection-column-sticky-effect-yes-"+e.dataset.id),this.checkScreenSize(i.mdp_selection_sticky_column_effect_enable_on,this.stickyColumnEffect.bind(null,"mdp-selection-column-sticky-effect-yes-"+e.dataset.id,i))):e.classList.remove("mdp-selection-column-sticky-effect-yes-"+e.dataset.id)),t&&(n=c(t),"yes"===n.mdp_selection_sticky_effect_enable?(t.classList.add("mdp-selection-section-sticky-effect-yes-"+t.dataset.id),this.checkScreenSize(n.mdp_selection_sticky_effect_enable_on,this.stickySectionEffect.bind(null,"mdp-selection-section-sticky-effect-yes-"+t.dataset.id,n))):(t.classList.remove("mdp-selection-section-sticky-effect-yes-"+t.dataset.id),t.classList.remove("mdp-selection-section-sticky")))}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/global",(function(e){const t=e[0].dataset.element_type;"column"===t?setTimeout(()=>{mdpStickyEffect.setStickyEffect.call(mdpStickyEffect,e[0],null)},0):"section"===t&&setTimeout(()=>{mdpStickyEffect.setStickyEffect.call(mdpStickyEffect,null,e[0])},0)}))}));