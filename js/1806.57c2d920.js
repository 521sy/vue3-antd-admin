"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[1806],{41806:function(e,t,n){n.r(t),n.d(t,{baseColumns:function(){return a}});var r=n(66252),d=n(96461);const a=[{title:"名称",dataIndex:"name",width:240,fixed:"left"},{title:"图标",width:80,dataIndex:"icon",align:"center",customRender:e=>{let{record:t}=e;return t.icon&&(0,r.Wm)((0,r.up)("icon-font"),{type:t.icon,size:"22"},null)}},{title:"类型",width:80,align:"center",dataIndex:"type",customRender:e=>{let{record:t}=e;return(e=>{switch(e){case 0:return"目录";case 1:return"菜单";case 2:return"权限";default:return""}})(t.type)}},{title:"节点路由",dataIndex:"router",align:"center",width:240},{title:"路由缓存",dataIndex:"keepalive",align:"center",width:80,customRender:e=>{let{record:t}=e;return 1===t.type&&(t.keepalive?"是":"否")}},{title:"文件路径",width:280,align:"center",dataIndex:"viewPath"},{title:"权限",width:300,align:"center",dataIndex:"perms",customRender:e=>{var t;let{record:n}=e;return 2==n.type&&(0,r.Wm)("div",null,[null===(t=n.perms)||void 0===t?void 0:t.split(",").map((e=>{return(0,r.Wm)(d.ZP,{color:"blue",key:e},"function"==typeof(t=e)||"[object Object]"===Object.prototype.toString.call(t)&&!(0,r.lA)(t)?e:{default:()=>[e]});var t}))])}},{title:"排序号",width:80,align:"center",dataIndex:"orderNum"},{title:"更新时间",width:180,align:"center",dataIndex:"updatedAt"}]}}]);