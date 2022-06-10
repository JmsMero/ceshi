var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,t=(l,a,r)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,o=(e,o)=>{for(var n in o||(o={}))l.call(o,n)&&t(e,n,o[n]);if(a)for(var n of a(o))r.call(o,n)&&t(e,n,o[n]);return e};import"./index.12069104.js";import{r as n,o as i,b as d,t as s,_ as u,p,d as c,e as g,a8 as h,f as m,g as f,h as b,Z as y,$ as S,i as v,a9 as C,j as w,w as _,k}from"./vendor.e7b7154b.js";const P={name:"Order",setup(){const e=n({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,orderNo:"",orderStatus:"",options:[{value:"",label:"全部"},{value:0,label:"待支付"},{value:1,label:"已支付"},{value:2,label:"配货完成"},{value:3,label:"出库成功"},{value:4,label:"交易成功"},{value:-1,label:"手动关闭"},{value:-2,label:"超时关闭"},{value:-3,label:"商家关闭"}]});i((()=>{l()}));const l=()=>{e.loading=!0,d.get("/orders",{params:{pageNumber:e.currentPage,pageSize:e.pageSize,orderNo:e.orderNo,orderStatus:e.orderStatus}}).then((l=>{e.tableData=l.list,e.total=l.totalCount,e.currentPage=l.currPage,e.loading=!1}))};return o(o({},s(e)),{handleSelectionChange:l=>{e.multipleSelection=l},getOrderList:l,changePage:a=>{e.currentPage=a,l()},handleOption:()=>{e.currentPage=1,l()},handleConfig:a=>{let r;if(console.log("id",a),a)r=[a];else{if(!e.multipleSelection.length)return console.log("state.multipleSelection",e.multipleSelection.length),void u.error("请选择项");r=e.multipleSelection.map((e=>e.orderId))}d.put("/orders/checkDone",{ids:r}).then((()=>{u.success("配货成功"),l()}))},handleSend:a=>{let r;if(a)r=[a];else{if(!e.multipleSelection.length)return void u.error("请选择项");r=e.multipleSelection.map((e=>e.orderId))}d.put("/orders/checkOut",{ids:r}).then((()=>{u.success("出库成功"),l()}))},handleClose:a=>{let r;if(a)r=[a];else{if(!e.multipleSelection.length)return void u.error("请选择项");r=e.multipleSelection.map((e=>e.orderId))}d.put("/orders/close",{ids:r}).then((()=>{u.success("关闭成功"),l()}))}})}},z=_();p("data-v-3c1ef684");const O={class:"header"},x=k("配货完成"),I=k("出库"),j=k("关闭订单"),N={key:0},V={key:1},D={key:2},T=b("a",{style:{cursor:"pointer","margin-right":"10px"}},"配货完成",-1),U=b("a",{style:{cursor:"pointer","margin-right":"10px"}},"出库",-1),$=b("a",{style:{cursor:"pointer","margin-right":"10px"}},"关闭订单",-1),q=k("订单详情");c();const E=z(((e,l,a,r,t,o)=>{const n=g("el-input"),i=g("el-option"),d=g("el-select"),s=g("el-button"),u=g("el-table-column"),p=g("el-popconfirm"),c=g("router-link"),_=g("el-table"),k=g("el-pagination"),P=g("el-card"),E=h("loading");return m(),f(P,{class:"order-container"},{header:z((()=>[b("div",O,[b(n,{style:{width:"200px","margin-right":"10px"},placeholder:"请输入订单号",modelValue:e.orderNo,"onUpdate:modelValue":l[1]||(l[1]=l=>e.orderNo=l),onChange:r.handleOption,size:"small",clearable:""},null,8,["modelValue","onChange"]),b(d,{onChange:r.handleOption,modelValue:e.orderStatus,"onUpdate:modelValue":l[2]||(l[2]=l=>e.orderStatus=l),size:"small",style:{width:"200px","margin-right":"10px"}},{default:z((()=>[(m(!0),f(y,null,S(e.options,(e=>(m(),f(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["onChange","modelValue"]),v(' <el-button type="primary" size="small" icon="el-icon-edit">修改订单</el-button> '),b(s,{type:"primary",size:"small",icon:"el-icon-s-home",onClick:l[3]||(l[3]=e=>r.handleConfig())},{default:z((()=>[x])),_:1}),b(s,{type:"primary",size:"small",icon:"el-icon-s-home",onClick:l[4]||(l[4]=e=>r.handleSend())},{default:z((()=>[I])),_:1}),b(s,{type:"danger",size:"small",icon:"el-icon-delete",onClick:l[5]||(l[5]=e=>r.handleClose())},{default:z((()=>[j])),_:1})])])),default:z((()=>[C(b(_,{data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:r.handleSelectionChange},{default:z((()=>[b(u,{type:"selection",width:"55"}),b(u,{prop:"orderNo",label:"订单号"}),b(u,{prop:"totalPrice",label:"订单总价"}),b(u,{prop:"orderStatus",label:"订单状态"},{default:z((l=>[b("span",null,w(e.$filters.orderMap(l.row.orderStatus)),1)])),_:1}),b(u,{prop:"payType",label:"支付方式"},{default:z((e=>[1==e.row.payType?(m(),f("span",N,"微信支付")):2==e.row.payType?(m(),f("span",V,"支付宝支付")):(m(),f("span",D,"未支付"))])),_:1}),b(u,{prop:"createTime",label:"创建时间"}),b(u,{label:"操作"},{default:z((e=>[1==e.row.orderStatus?(m(),f(p,{key:0,title:"确定配货完成吗？",onConfirm:l=>r.handleConfig(e.row.orderId)},{reference:z((()=>[T])),_:2},1032,["onConfirm"])):v("v-if",!0),2==e.row.orderStatus?(m(),f(p,{key:1,title:"确定出库吗？",onConfirm:l=>r.handleSend(e.row.orderId)},{reference:z((()=>[U])),_:2},1032,["onConfirm"])):v("v-if",!0),4==e.row.orderStatus||e.row.orderStatus<0?v("v-if",!0):(m(),f(p,{key:2,title:"确定关闭订单吗？",onConfirm:l=>r.handleClose(e.row.orderId)},{reference:z((()=>[$])),_:2},1032,["onConfirm"])),b(c,{to:{path:"/order_detail",query:{id:e.row.orderId}}},{default:z((()=>[q])),_:2},1032,["to"])])),_:1})])),_:1},8,["data","onSelectionChange"]),[[E,e.loading]]),b(k,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:r.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})}));P.render=E,P.__scopeId="data-v-3c1ef684";export default P;
