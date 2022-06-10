var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,o=(e,o)=>{for(var r in o||(o={}))a.call(o,r)&&n(e,r,o[r]);if(l)for(var r of l(o))t.call(o,r)&&n(e,r,o[r]);return e};import"./index.12069104.js";import{a1 as r,r as i,o as s,b as c,t as p,_ as u,p as d,d as g,e as m,a8 as b,f as h,g as f,h as S,a9 as y,j as w,i as C,w as v,k}from"./vendor.e7b7154b.js";const P={name:"Guest",setup(){const e=r(null),a=i({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});s((()=>{l()}));const l=()=>{a.loading=!0,c.get("/users",{params:{pageNumber:a.currentPage,pageSize:a.pageSize}}).then((e=>{a.tableData=e.list,a.total=e.totalCount,a.currentPage=e.currPage,a.loading=!1}))};return o(o({},p(a)),{multipleTable:e,handleSelectionChange:e=>{a.multipleSelection=e},getGuestList:l,changePage:e=>{a.currentPage=e,l()},handleSolve:()=>{a.multipleSelection.length?c.put("/users/0",{ids:a.multipleSelection.map((e=>e.userId))}).then((()=>{u.success("解除成功"),l()})):u.error("请选择项")},handleForbid:()=>{a.multipleSelection.length?c.put("/users/1",{ids:a.multipleSelection.map((e=>e.userId))}).then((()=>{u.success("禁用成功"),l()})):u.error("请选择项")}})}},_=v();d("data-v-1e85480e");const z={class:"header"},j=k("解除禁用"),F=k("禁用账户");g();const O=_(((e,a,l,t,n,o)=>{const r=m("el-button"),i=m("el-table-column"),s=m("el-table"),c=m("el-pagination"),p=m("el-card"),u=b("loading");return h(),f(p,{class:"guest-container"},{header:_((()=>[S("div",z,[S(r,{type:"primary",size:"small",icon:"el-icon-plus",onClick:t.handleSolve},{default:_((()=>[j])),_:1},8,["onClick"]),S(r,{type:"danger",size:"small",icon:"el-icon-delete",onClick:t.handleForbid},{default:_((()=>[F])),_:1},8,["onClick"])])])),default:_((()=>[y(S(s,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:t.handleSelectionChange},{default:_((()=>[S(i,{type:"selection",width:"55"}),S(i,{prop:"nickName",label:"昵称"}),S(i,{prop:"loginName",label:"登录名"}),S(i,{label:"身份状态"},{default:_((e=>[S("span",{style:0==e.row.lockedFlag?"color: green;":"color: red;"},w(0==e.row.lockedFlag?"正常":"禁用"),5)])),_:1}),S(i,{label:"是否注销"},{default:_((e=>[S("span",{style:0==e.row.lockedFlag?"color: green;":"color: red;"},w(0==e.row.isDeleted?"正常":"注销"),5)])),_:1}),S(i,{prop:"createTime",label:"注册时间"}),C(' <el-table-column\n        label="操作"\n        width="100"\n      >\n        <template #default="scope">\n          <a style="cursor: pointer; margin-right: 10px" @confirm="handleSolve(scope.row)">解除禁用</a>\n          <el-popconfirm\n            title="确定禁用吗？"\n            @confirm="handleForbid(scope.row)"\n          >\n            <template #reference>\n              <a style="cursor: pointer">禁用账户</a>\n            </template>\n          </el-popconfirm>\n        </template>\n      </el-table-column> ')])),_:1},8,["data","onSelectionChange"]),[[u,e.loading]]),S(c,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:t.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})}));P.render=O,P.__scopeId="data-v-1e85480e";export default P;
