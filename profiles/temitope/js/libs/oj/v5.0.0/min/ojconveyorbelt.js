/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(t,e){function o(t,e,o,n,i,s,r,l){this._elem=t,this._orientation=e,this._contentParent=o,this._bRtl=n,i&&(i.prevButtonId&&(this._prevButtonId=i.prevButtonId),i.nextButtonId&&(this._nextButtonId=i.nextButtonId),i.prevButtonStyleClass&&(this._prevButtonStyleClass=i.prevButtonStyleClass),i.nextButtonStyleClass&&(this._nextButtonStyleClass=i.nextButtonStyleClass),i.prevButtonIcon&&(this._prevButtonIcon=i.prevButtonIcon),i.nextButtonIcon&&(this._nextButtonIcon=i.nextButtonIcon)),s&&(s.scrollFunc&&(this._scrollFunc=s.scrollFunc),s.firstVisibleItemChangedFunc&&(this._firstVisibleItemChangedFunc=s.firstVisibleItemChangedFunc),s.callbackObj&&(this._callbackObj=s.callbackObj),s.addResizeListener&&(this._addResizeListenerFunc=s.addResizeListener),s.removeResizeListener&&(this._removeResizeListenerFunc=s.removeResizeListener),s.addStyleClassName&&(this._addStyleClassNameFunc=s.addStyleClassName),s.removeStyleClassName&&(this._removeStyleClassNameFunc=s.removeStyleClassName),s.hasStyleClassName&&(this._hasStyleClassNameFunc=s.hasStyleClassName),s.filterContentElements&&(this._filterContentElementsFunc=s.filterContentElements),s.subtreeDetached&&(this._subtreeDetachedFunc=s.subtreeDetached),s.subtreeAttached&&(this._subtreeAttachedFunc=s.subtreeAttached),s.addBusyState&&(this._addBusyStateFunc=s.addBusyState)),r&&(r.overflowContainerStyleClass&&(this._overflowContainerStyleClass=r.overflowContainerStyleClass),r.contentContainerStyleClass&&(this._contentContainerStyleClass=r.contentContainerStyleClass),r.itemStyleClass&&(this._itemStyleClass=r.itemStyleClass),r.hiddenStyleClass&&(this._hiddenStyleClass=r.hiddenStyleClass)),this._bExternalScroll=!0,this._firstVisibleItemIndex=0,l&&(this._agentVersion=l.browserVersion);var h=navigator.userAgent.toLowerCase();-1!==h.indexOf("gecko/")?this._bAgentGecko=!0:-1!==h.indexOf("opera")?this._bAgentOpera=!0:l&&"safari"===l.browser?this._bAgentSafari=!0:l&&"edge"===l.browser?this._bAgentEdge=!0:-1===h.indexOf("applewebkit")&&-1===h.indexOf("safari")||(this._bAgentWebkit=!0)}o.prototype.setup=function(t){var e=this,n=o;if(t){this._createInnerContainers(),this._createPrevButton(this._prevButtonId,this._prevButtonStyleClass,this._prevButtonIcon),this._createNextButton(this._nextButtonId,this._nextButtonStyleClass,this._nextButtonIcon);var i=this._nextButton;this._buttonWidth=i.offsetWidth,this._buttonHeight=i.offsetHeight,this._hidePrevButton(),this._hideNextButton(),this._mouseWheelListener=function(t){e._handleMouseWheel(t)},n._addBubbleEventListener(this._elem,"mousewheel",this._mouseWheelListener),n._addBubbleEventListener(this._elem,"wheel",this._mouseWheelListener),this._touchStartListener=function(t){e._handleTouchStart(t)},n._addBubbleEventListener(this._overflowContainer,"touchstart",this._touchStartListener),this._touchMoveListener=function(t){e._handleTouchMove(t)},n._addBubbleEventListener(this._overflowContainer,"touchmove",this._touchMoveListener),this._touchEndListener=function(t){e._handleTouchEnd(t)},n._addBubbleEventListener(this._overflowContainer,"touchend",this._touchEndListener),n._addBubbleEventListener(this._overflowContainer,"touchcancel",this._touchEndListener),this._origScroll=0}else this._reinitializeInnerDom();this._clearCachedSizes(),this._adjustOverflowSize(t),this._handleResize(!0),t&&(this._addResizeListenerFunc&&(this._handleResizeFunc=function(t,o){e._handleResize(!1)},this._addResizeListenerFunc.call(this._callbackObj,this._elem,this._handleResizeFunc),this._addResizeListenerFunc.call(this._callbackObj,this._contentContainer,this._handleResizeFunc)),this._subtreeAttachedFunc&&this._subtreeAttachedFunc(this._contentContainer))},o.prototype.destroy=function(){this._resolveBusyState();var t=this._elem,e=o;e._removeBubbleEventListener(t,"mousewheel",this._mouseWheelListener),e._removeBubbleEventListener(t,"wheel",this._mouseWheelListener),e._removeBubbleEventListener(this._overflowContainer,"touchstart",this._touchStartListener),e._removeBubbleEventListener(this._overflowContainer,"touchmove",this._touchMoveListener),e._removeBubbleEventListener(this._overflowContainer,"touchend",this._touchEndListener),e._removeBubbleEventListener(this._overflowContainer,"touchcancel",this._touchEndListener),e._removeBubbleEventListener(this._overflowContainer,"scroll",this._scrollListener),this._mouseWheelListener=null,this._touchStartListener=null,this._touchMoveListener=null,this._touchEndListener=null,this._scrollListener=null,this._removeResizeListenerFunc&&this._handleResizeFunc&&(this._removeResizeListenerFunc.call(this._callbackObj,t,this._handleResizeFunc),this._removeResizeListenerFunc.call(this._callbackObj,this._contentContainer,this._handleResizeFunc)),this._handleResizeFunc=null,this._reparentChildrenFromContentContainer(this._contentContainer,t),t.removeChild(this._overflowContainer),t.removeChild(this._nextButton),t.removeChild(this._prevButton),this._nextButton=null,this._prevButton=null,this._overflowContainer=null,this._contentContainer=null,this._clearCachedSizes(),this._elem=null,this._scrollFunc=null,this._firstVisibleItemChangedFunc=null,this._addResizeListenerFunc=null,this._removeResizeListenerFunc=null,this._addStyleClassNameFunc=null,this._removeStyleClassNameFunc=null,this._hasStyleClassNameFunc=null,this._filterContentElementsFunc=null,this._subtreeDetachedFunc=null,this._subtreeAttachedFunc=null,this._addBusyStateFunc=null,this._callbackObj=null,this._contentParent=null},o.prototype.setFirstVisibleItem=function(t){for(var e=this._getSizes(),o=0;o<e.length;o++){var n=e[o];if(n.id===t){this._setCurrScroll(n.start,!0);break}}},o.prototype.handleResize=function(){this._handleResize(!1)},o.prototype.setScroll=function(t,e){this._setCurrScroll(t,e)},o.prototype.getScroll=function(){return this._getCurrScroll()},o.prototype._reparentChildrenToContentContainer=function(t,e){for(var o=t.childNodes;o.length>0;){var n=o[0];this._subtreeDetachedFunc&&this._subtreeDetachedFunc(n),e.appendChild(n),1===n.nodeType&&this._itemStyleClass&&this._addStyleClassNameFunc(n,this._itemStyleClass)}},o.prototype._reparentChildrenFromContentContainer=function(t,e){if(t)for(var o=t.childNodes;o.length>0;){var n=o[0];e.appendChild(n),1===n.nodeType&&this._itemStyleClass&&this._removeStyleClassNameFunc(n,this._itemStyleClass)}},o._getComputedStyle=function(t){var e=t.ownerDocument.defaultView;return e?e.getComputedStyle(t,null):t.currentStyle},o._getElemInnerWidth=function(t){var e=o,n=e._getComputedStyle(t);return e._getCSSLengthAsInt(n.width)},o._getElemInnerHeight=function(t){var e=o,n=e._getComputedStyle(t);return e._getCSSLengthAsInt(n.height)},o._getCSSLengthAsInt=function(t){if(t.length>0&&"auto"!=t){var e=parseInt(t,10);return isNaN(e)&&(e=0),e}return 0},o._addBubbleEventListener=function(t,e,o){t.addEventListener?t.addEventListener(e,o,!1):t.attachEvent&&t.attachEvent("on"+e,o)},o._removeBubbleEventListener=function(t,e,o){t.removeEventListener?t.removeEventListener(e,o,!1):t.detachEvent&&t.detachEvent("on"+e,o)},o._getWheelDelta=function(t){return null!=t.wheelDelta?t.wheelDelta:null!=t.deltaY?-t.deltaY:-t.detail},o._createTableDiv=function(){var t=document.createElement("div");return t.style.display="table",t},o._createTableRowDiv=function(){var t=document.createElement("div");return t.style.display="table-row",t},o._createTableCellDiv=function(){var t=document.createElement("div");return t.style.display="table-cell",t},o._wrapAndRestrictSize=function(t,e,o,n){var i=document.createElement("div"),s=i.style;return s.display="inline-block",i.appendChild(t),e.appendChild(i),o&&(s.maxWidth=i.offsetWidth+"px"),n&&(s.maxHeight=i.offsetHeight+"px"),i},o.prototype._isHorizontal=function(){return"horizontal"===this._orientation},o.prototype._isEmpty=function(){return!this._getContentParent().hasChildNodes()},o.prototype._reinitializeInnerDom=function(){this._origScroll=this._getCurrScroll(),this._setOverflowScroll(0),this._hidePrevButton(),this._hideNextButton()},o.prototype._clearCachedSizes=function(){this._totalSize=null,this._sizes=null},o.prototype._handleResize=function(t){t||this._reinitializeInnerDom(),this._clearCachedSizes(),this._totalSize&&this._sizes||(this._totalSize=this._measureContents()),t||this._adjustOverflowSize(!1),this._alignButtons()},o.prototype._alignButtons=function(){var t=this._nextButton,e=this._prevButton,o=t.style,n=e.style,i=this._contentContainer,s=this._totalSize;this._sizes;if(this._isHorizontal()){var r=.5*(s.h-i.offsetHeight);o.top=r+"px",n.top=r+"px"}else{var l=.5*(s.w-i.offsetWidth);this._bRtl&&(l=-l),o.left=l+"px",n.left=l+"px"}},o.prototype._adjustOverflowSize=function(t){var e=this._contentContainer,n=this._isHorizontal(),i=o,s=n?i._getElemInnerWidth(this._elem):i._getElemInnerHeight(this._elem);this._minScroll=0,this._maxScroll=n?e.offsetWidth-s+this._buttonWidth:e.offsetHeight-s+this._buttonHeight,this._maxScroll<0&&(this._maxScroll=0),this._hidePrevButton(),this._hideNextButton(),this._setCurrScroll(t?this._minScroll:this._origScroll,!0),this._origScroll=0},o.prototype._createInnerContainers=function(){var t=this,e=this._elem,n=o,i=document.createElement("div");this._overflowContainer=i,this._overflowContainerStyleClass&&this._addStyleClassNameFunc(i,this._overflowContainerStyleClass);var s=document.createElement("div");this._contentContainer=s,this._contentContainerStyleClass&&this._addStyleClassNameFunc(s,this._contentContainerStyleClass),this._reparentChildrenToContentContainer(e,s),e.appendChild(i),i.appendChild(s),this._scrollListener=function(e){t._handleScroll(e)},n._addBubbleEventListener(i,"scroll",this._scrollListener)},o.prototype._getContentElements=function(){for(var t=[],e=this._contentParent?this._contentParent:this._contentContainer,o=e.children,n=o.length,i=0;i<n;i++){var s=o[i];1===s.nodeType&&t.push(s)}this._filterContentElementsFunc&&(t=(0,this._filterContentElementsFunc)(t));if(e===this._contentContainer&&this._itemStyleClass)for(i=0;i<t.length;i++){var r=t[i];this._hasStyleClassNameFunc(r,this._itemStyleClass)||this._addStyleClassNameFunc(r,this._itemStyleClass)}return t},o.prototype._createPrevButton=function(t,e,n){var i=this,s=document.createElement("div");this._prevButton=s,t&&s.setAttribute("id",t),s.setAttribute("class",e),s.setAttribute("aria-hidden","true");this._isHorizontal();o._addBubbleEventListener(s,"click",function(t){i._scrollPrev()}),n&&s.appendChild(n),this._elem.insertBefore(s,this._overflowContainer)},o.prototype._createNextButton=function(t,e,n){var i=this,s=document.createElement("div");this._nextButton=s,t&&s.setAttribute("id",t),s.setAttribute("class",e),s.setAttribute("aria-hidden","true");this._isHorizontal();o._addBubbleEventListener(s,"click",function(t){i._scrollNext()}),n&&s.appendChild(n),this._elem.appendChild(s)},o.prototype._getContentParent=function(){var t=this._contentParent;return t||(t=this._contentContainer),t},o.prototype._measureContents=function(){var t=this._getContentParent(),e=this._getContentElements(),o={w:0,h:0},n=[];if(t.hasChildNodes()&&e&&e.length>0){var i,s=e,r=this._isHorizontal();i=this._contentContainer.offsetWidth;for(var l=0,h=null,a=0;a<s.length;a++){var c=s[a];if(1===c.nodeType){var u=c.offsetWidth,_=c.offsetHeight,d={w:u,h:_,id:c.id};if(r){var v=c.offsetLeft;if(!this._contentParent&&0===v)v=c.parentNode.offsetLeft;this._bRtl?d.start=i-(v+u):d.start=v,0===a&&(l=d.start),d.start-=l,o.w=d.start+u,o.h=Math.max(o.h,_),d.end=o.w-1}else{var f=c.offsetTop;if(!this._contentParent&&0===f)f=c.parentNode.offsetTop;d.start=f,o.w=Math.max(o.w,u),o.h=d.start+_,d.end=o.h-1}if(h&&h.end>=d.start){var S=h.end-(d.start-1);h.end-=S,r?h.w-=S:h.h-=S}n.push(d),h=d}}}return this._sizes=n,o},o.prototype._getSizes=function(){if(!this._sizes){var t=this._measureContents();this._totalSize||(this._totalSize=t)}return this._sizes},o.prototype._showNextButton=function(){this._removeStyleClassNameFunc(this._nextButton,this._hiddenStyleClass)},o.prototype._showPrevButton=function(){this._removeStyleClassNameFunc(this._prevButton,this._hiddenStyleClass)},o.prototype._hideNextButton=function(){this._addStyleClassNameFunc(this._nextButton,this._hiddenStyleClass)},o.prototype._hidePrevButton=function(){this._addStyleClassNameFunc(this._prevButton,this._hiddenStyleClass)},o.prototype._isNextButtonShown=function(){return!this._hasStyleClassNameFunc(this._nextButton,this._hiddenStyleClass)},o.prototype._isPrevButtonShown=function(){return!this._hasStyleClassNameFunc(this._prevButton,this._hiddenStyleClass)},o.prototype._getButtonSize=function(){return this._isHorizontal()?this._buttonWidth:this._buttonHeight},o.prototype._updateButtonVisibility=function(t){var e=this._getButtonSize(),o=this._getCurrScroll(),n=(this._getCurrViewportSize(),this._needsScroll());t<=this._minScroll?(this._isPrevButtonShown()&&(e,o-=e),this._hidePrevButton()):n&&(this._isPrevButtonShown()||(e,o+=e),this._showPrevButton()),t>=this._maxScroll?(this._isNextButtonShown()&&e,this._hideNextButton()):n&&(this._isNextButtonShown()||e,this._showNextButton()),this._setOverflowScroll(o)},o.prototype._setOverflowScroll=function(t){var e=this._overflowContainer;this._isHorizontal()?e.scrollLeft=this._convertScrollLogicalToBrowser(t):e.scrollTop=t},o.prototype._getCurrViewportSize=function(){var t=this._overflowContainer;return this._isHorizontal()?t.offsetWidth:t.offsetHeight},o.prototype._setCurrScroll=function(t,e){this._bScrolling||(this._bExternalScroll=!1,this._setCurrScrollHelper(t,e))},o.prototype._setCurrScrollHelper=function(t,e){if(!this._isEmpty()){this._bScrolling=!0,t=this._constrainScroll(t),this._updateButtonVisibility(t);var n=this._scrollFunc;if(e||!n||t===this._getCurrScroll())this._onScrollAnimEnd(this._bExternalScroll?this._getCurrScroll():t);else{this._addBusyStateFunc&&(this._busyStateResolveFunc=this._addBusyStateFunc("scrolling"));var i=o,s=Math.abs(this._getCurrScroll()-t)/i._SCROLL_SPEED,r=this;n.call(this._callbackObj,this._overflowContainer,this._convertScrollLogicalToBrowser(t),s,function(){r._onScrollAnimEnd(t),r._resolveBusyState()})}}},o.prototype._resolveBusyState=function(){this._busyStateResolveFunc&&(this._busyStateResolveFunc(),this._busyStateResolveFunc=null)},o.prototype._getCurrScroll=function(){var t=this._overflowContainer;return this._isHorizontal()?this._convertScrollBrowserToLogical(t.scrollLeft):t.scrollTop},o.prototype._needsScroll=function(){var t=this._contentContainer,e=this._overflowContainer;return this._isHorizontal()?t.offsetWidth>e.offsetWidth:t.offsetHeight>e.offsetHeight},o.prototype._constrainScroll=function(t){return!this._needsScroll()||t<this._minScroll?t=this._minScroll:t>this._maxScroll&&(t=this._maxScroll),t},o.prototype._handleMouseWheel=function(t){var e=this._bScrolling;if(this._needsScroll()&&!this._bScrolling){var n=o._getWheelDelta(t);n<0&&this._isNextButtonShown()?(e=!0,this._scrollNext()):n>0&&this._isPrevButtonShown()&&(e=!0,this._scrollPrev())}e&&(t.preventDefault(),t.stopPropagation())},o.prototype._handleTouchStart=function(t){var e=t.touches;if(this._needsScroll()&&!this._bScrolling&&1===e.length){this._bTouch=!0;var o=e[0];this._touchStartCoord=this._isHorizontal()?o.pageX:o.pageY,this._touchStartScroll=this._getCurrScroll(),this._touchStartNextScroll=this._calcNextScroll(),this._touchStartPrevScroll=this._calcPrevScroll(),this._touchStartNextButtonShown=this._isNextButtonShown(),this._touchStartPrevButtonShown=this._isPrevButtonShown()}},o.prototype._handleTouchMove=function(t){var e=this._isHorizontal(),n=t.touches[0],i=(e?n.pageX:n.pageY)-this._touchStartCoord,s=e&&this._bRtl?i>0:i<0,r=s&&this._touchStartNextButtonShown||!s&&this._touchStartPrevButtonShown;if(this._bTouch&&r){var l=o,h=this._overflowContainer,a=l._SWIPE_THRESHOLD*(e?h.offsetWidth:h.offsetHeight);Math.abs(i)<a?(this._setCurrScroll(this._touchStartScroll-i,!0),(this._touchStartNextButtonShown&&!this._isNextButtonShown()||this._touchStartPrevButtonShown&&!this._isPrevButtonShown())&&(this._bTouch=!1)):(this._setCurrScroll(s?this._touchStartNextScroll:this._touchStartPrevScroll,!1),this._bTouch=!1),this._scrolledForThisTouch=!0}this._scrolledForThisTouch&&(t.preventDefault(),t.stopPropagation())},o.prototype._handleTouchEnd=function(t){this._bTouch&&this._setCurrScroll(this._touchStartScroll,!1),this._bTouch=!1,this._scrolledForThisTouch=!1},o.prototype._handleScroll=function(t){this._bExternalScroll&&!this._bScrolling&&this._setCurrScrollHelper(this._getCurrScroll(),!0)},o.prototype._onScrollAnimEnd=function(t){if(this._setOverflowScroll(t),this._bExternalScroll=!0,this._bScrolling=!1,this._firstVisibleItemChangedFunc){this._firstVisibleItemIndex=this._calcFirstVisibleItemIndex();var e=this._calcLastVisibleItemIndex(),o=this._getSizes(),n=o[this._firstVisibleItemIndex];this._firstVisibleItemIndex!==e&&this._getCurrScroll()>n.start&&this._firstVisibleItemIndex<o.length-2&&(this._firstVisibleItemIndex++,n=o[this._firstVisibleItemIndex]),this._firstVisibleItemId=n.id,this._firstVisibleItemChangedFunc.call(this._callbackObj,this._firstVisibleItemId)}},o.prototype._setExternalScrollTimeout=function(){var t=this;window.setTimeout(function(){t&&(t._bExternalScroll=!0)},0)},o.prototype._scrollNext=function(){this._bScrolling||this._setCurrScroll(this._calcNextScroll(),!1)},o.prototype._scrollPrev=function(){this._bScrolling||this._setCurrScroll(this._calcPrevScroll(),!1)},o.prototype._calcNextScroll=function(){var t=this._calcNextVisibleItemIndex();return t===this._calcFirstVisibleItemIndex()?this._getCurrScroll()+this._getCurrViewportSize():this._calcStartScroll(t)},o.prototype._calcPrevScroll=function(){var t=this._calcPrevVisibleItemIndex(),e=0;return e=t===this._calcLastVisibleItemIndex()?this._getCurrScroll()-this._getCurrViewportSize():this._calcEndScroll(t),this._isNextButtonShown()||(e+=this._getButtonSize()),e<this._getButtonSize()&&(e=this._minScroll),e},o.prototype._calcStartScroll=function(t){return this._getSizes()[t].start},o.prototype._calcEndScroll=function(t){return this._getSizes()[t].end-this._getCurrViewportSize()+1},o.prototype._calcFirstVisibleItemIndex=function(){var t=this._getCurrScroll(),e=this._calcItemIndex(t);return e<0?0:e},o.prototype._calcLastVisibleItemIndex=function(){var t=this._getCurrViewportSize(),e=this._getCurrScroll()+t-1,o=this._calcItemIndex(e),n=this._getSizes();return o<0?n.length-1:o},o.prototype._calcPrevVisibleItemIndex=function(){var t=this._getCurrScroll()-1,e=this._calcItemIndex(t);return e<0?0:e},o.prototype._calcNextVisibleItemIndex=function(){var t=this._getCurrViewportSize(),e=this._getCurrScroll()+t,o=this._calcItemIndex(e),n=this._getSizes();return o<0?n.length-1:o},o.prototype._calcItemIndex=function(t){for(var e=this._getSizes(),o=0;o<e.length;o++){if(t<=e[o].end)return o}return-1},o.prototype._convertScrollLogicalToBrowser=function(t){var e=t;if(this._bRtl&&this._isHorizontal())if(this._bAgentGecko||this._bAgentSafari&&this._agentVersion>=10)e=-t;else if(this._bAgentWebkit||this._bAgentOpera||this._bAgentSafari&&this._agentVersion<10){var o=this._contentContainer,n=this._overflowContainer;e=o.offsetWidth-n.offsetWidth-t}return e},o.prototype._convertScrollBrowserToLogical=function(t){return this._convertScrollLogicalToBrowser(t)},o._SCROLL_SPEED=1.1,o._SWIPE_THRESHOLD=.33,function(){t.__registerWidget("oj.ojConveyorBelt",e.oj.baseComponent,{defaultElement:"<div>",widgetEventPrefix:"oj",options:{orientation:"horizontal",contentParent:null},_ComponentCreate:function(){this._super(),this.element.addClass("oj-conveyorbelt oj-component"),this.options.disabled&&t.Logger.warn(n),this._setup(!0)},refresh:function(){this._super();var t,e="rtl"===this._GetReadingDirection(),o=this._bRTL!=e;o||(t=this._cbCommon.getScroll()),this._destroyCBCommon(),this._setup(!0),o||this._cbCommon.setScroll(t,!0)},_NotifyShown:function(){if(this._super(),this._needsSetup)this._setup(this._needsSetup[0]);else if(this._cbCommon){this._cbCommon.handleResize()}},_NotifyAttached:function(){if(this._super(),this._needsSetup)this._setup(this._needsSetup[0]);else if(this._cbCommon){this._cbCommon.handleResize()}},_setup:function(n){var s=this,r=this.element,l=this.options,h=l.orientation;if("vertical"===h?r.addClass("oj-conveyorbelt-vertical"):r.removeClass("oj-conveyorbelt-vertical"),!this._canCalculateSizes()){var a=!1;return this._needsSetup&&(a=this._needsSetup[0]),void(this._needsSetup=[n||a])}if(this._needsSetup=null,this._bRTL="rtl"===this._GetReadingDirection(),n&&!this._cbCommon){var c=null,u=null,_=null,d=null,v=null;"vertical"!==h?(c="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",u="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",_=this._createIcon("oj-conveyorbelt-overflow-icon oj-start"),d=this._createIcon("oj-conveyorbelt-overflow-icon oj-end"),v=this._animateScrollLeft):(c="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",u="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",_=this._createIcon("oj-conveyorbelt-overflow-icon oj-top"),d=this._createIcon("oj-conveyorbelt-overflow-icon oj-bottom"),v=this._animateScrollTop);var f={};f.prevButtonStyleClass=c,f.nextButtonStyleClass=u,f.prevButtonIcon=_,f.nextButtonIcon=d;var S={overflowContainerStyleClass:"oj-conveyorbelt-overflow-container",contentContainerStyleClass:"oj-conveyorbelt-content-container",itemStyleClass:"oj-conveyorbelt-item",hiddenStyleClass:"oj-helper-hidden"},m={addResizeListener:function(e,o){t.DomUtils.addResizeListener(e,o,i)}};m.removeResizeListener=t.DomUtils.removeResizeListener,m.addStyleClassName=this._addStyleClassName,m.removeStyleClassName=this._removeStyleClassName,m.hasStyleClassName=this._hasStyleClassName,m.filterContentElements=function(t){return s._filterContentElements(t)},m.subtreeDetached=t.Components.subtreeDetached,m.subtreeAttached=t.Components.subtreeAttached,m.addBusyState=function(t){return s._addBusyState(t)},"enabled"!==t.Config.getAutomationMode()&&(m.scrollFunc=v);var p=null;l.contentParent&&(p=e(l.contentParent)[0]);var C=t.AgentUtils.getAgentInfo(navigator.userAgent);this._cbCommon=new o(r[0],h,p,this._bRTL,f,m,S,C)}if(this._cbCommon.setup(n),n)for(var b=r.find(".oj-conveyorbelt-overflow-indicator"),y=0;y<b.length;y++)this._setupButtonMouseStyles(e(b[y]))},_destroy:function(){this._destroyCBCommon(),this.element.removeClass("oj-conveyorbelt oj-component oj-conveyorbelt-vertical"),this._super()},_setOption:function(e,o,i){var s=!1,r=this.options;switch(e){case"containerParent":case"orientation":s=r.orientation!=o;break;case"disabled":t.Logger.warn(n)}s&&this._destroyCBCommon(),this._super(e,o,i),s&&this._setup(!0)},_destroyCBCommon:function(){var t=this._cbCommon;t&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),t.destroy());this._cbCommon=null},_canCalculateSizes:function(){var t=document.createElement("div"),e=t.style;e.width="10px",e.height="10px",e["-webkit-flex"]="0 0 auto",e.flex="0 0 auto";var o=this.element[0];o.appendChild(t);var n=!1;try{n=t.offsetWidth>0&&t.offsetHeight>0}catch(t){}return o.removeChild(t),n},_setupButtonMouseStyles:function(t){this._AddHoverable({element:t,afterToggle:function(e){"mouseenter"===e?t.removeClass("oj-default"):"mouseleave"===e&&t.addClass("oj-default")}}),this._AddActiveable({element:t,afterToggle:function(e){"mousedown"===e||"touchstart"===e||"mouseenter"===e?t.removeClass("oj-default"):"mouseup"!==e&&"touchend"!==e&&"touchcancel"!==e&&"mouseleave"!==e||t.addClass("oj-default")}})},_createIcon:function(t){var e=document.createElement("span");return e.setAttribute("class","oj-component-icon "+t),e},_animateScrollLeft:function(t,o,n,i){var s={};s.scrollLeft=o,e(t).animate(s,n,"swing",i)},_animateScrollTop:function(t,o,n,i){var s={};s.scrollTop=o,e(t).animate(s,n,"swing",i)},_addStyleClassName:function(t,o){e(t).addClass(o)},_removeStyleClassName:function(t,o){e(t).removeClass(o)},_hasStyleClassName:function(t,o){return e(t).hasClass(o)},_filterContentElements:function(t){for(var e=[],o=0;o<t.length;o++){var n=t[o];this._hasStyleClassName(n,"oj-helper-detect-expansion")||this._hasStyleClassName(n,"oj-helper-detect-contraction")||e.push(n)}return e},_addBusyState:function(e){var o=this.element,n=t.Context.getContext(o[0]).getBusyContext(),i="ConveyorBelt";i+=" (id='"+o.attr("id")+"')";var s={description:i+=": "+e};return n.addBusyState(s)},getNodeBySubId:function(t){if(null==t)return this.element?this.element[0]:null;var e=t.subId;return"oj-conveyorbelt-start-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:"oj-conveyorbelt-end-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(t){for(var e=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),o=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),n=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),i=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),s=t,r=this.element[0];s&&s!=r;){if(s===e)return{subId:"oj-conveyorbelt-start-overflow-indicator"};if(s===o)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(s===n)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(s===i)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};s=s.parentElement}return null}});var n="JET ConveyorBelt: 'disabled' property not supported",i=25}(),t.CustomElementBridge.registerMetadata("oj-conveyor-belt","baseComponent",{properties:{contentParent:{type:"string"},orientation:{type:"string",enumValues:["horizontal","vertical"]}},extension:{_WIDGET_NAME:"ojConveyorBelt"}}),t.CustomElementBridge.register("oj-conveyor-belt",{metadata:t.CustomElementBridge.getMetadata("oj-conveyor-belt")})});