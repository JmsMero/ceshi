var e=Object.defineProperty,o=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,r=(o,a,l)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,t=(e,t)=>{for(var d in t||(t={}))o.call(t,d)&&r(e,d,t[d]);if(a)for(var d of a(t))l.call(t,d)&&r(e,d,t[d]);return e};import{u as d,a as g,b as s,h as n}from"./index.12069104.js";import{a1 as i,a4 as u,u as m,r as c,b as p,o as f,a5 as h,t as y,a7 as I,_ as b,p as v,d as F,e as C,f as N,g as S,h as k,k as P,j as V,w as _}from"./vendor.e7b7154b.js";import{W as x}from"./wangEditor.6e4cd91d.js";const w={name:"AddGood",setup(){const{proxy:e}=I();console.log("proxy",e);const o=i(null),a=i(null),l=u(),r=m(),{id:v}=l.query,F=c({uploadImgServer:d,token:g("token")||"",id:v,defaultCate:"",goodForm:{goodsName:"",goodsIntro:"",originalPrice:"",sellingPrice:"",stockNum:"",goodsSellStatus:"0",goodsCoverImg:"",tag:""},rules:{goodsCoverImg:[{required:"true",message:"请上传主图",trigger:["change"]}],goodsName:[{required:"true",message:"请填写商品名称",trigger:["change"]}],originalPrice:[{required:"true",message:"请填写商品价格",trigger:["change"]}],sellingPrice:[{required:"true",message:"请填写商品售价",trigger:["change"]}],stockNum:[{required:"true",message:"请填写商品库存",trigger:["change"]}]},categoryId:"",category:{lazy:!0,lazyLoad(e,o){const{level:a=0,value:l}=e;p.get("/categories",{params:{pageNumber:1,pageSize:1e3,categoryLevel:a+1,parentId:l||0}}).then((e=>{const l=e.list.map((e=>({value:e.categoryId,label:e.categoryName,leaf:a>1})));o(l)}))}}});let C;f((()=>{C=new x(o.value),C.config.showLinkImg=!1,C.config.showLinkImgAlt=!1,C.config.showLinkImgHref=!1,C.config.uploadImgMaxSize=2097152,C.config.uploadFileName="file",C.config.uploadImgHeaders={token:F.token},C.config.uploadImgHooks={customInsert:function(e,o){console.log("result",o),o.data&&o.data.length&&o.data.forEach((o=>e(o)))}},C.config.uploadImgServer=s,Object.assign(C.config,{onchange(){console.log("change")}}),C.create(),v&&p.get(`/goods/${v}`).then((o=>{const{goods:a,firstCategory:l,secondCategory:r,thirdCategory:t}=o;F.goodForm={goodsName:a.goodsName,goodsIntro:a.goodsIntro,originalPrice:a.originalPrice,sellingPrice:a.sellingPrice,stockNum:a.stockNum,goodsSellStatus:String(a.goodsSellStatus),goodsCoverImg:e.$filters.prefix(a.goodsCoverImg),tag:a.tag,categoryId:a.goodsCategoryId},F.categoryId=a.goodsCategoryId,F.defaultCate=`${l.categoryName}/${r.categoryName}/${t.categoryName}`,C&&C.txt.html(a.goodsDetailContent)}))})),h((()=>{C.destroy(),C=null}));return t(t({},y(F)),{goodRef:a,submitAdd:()=>{a.value.validate((e=>{if(e){let e=p.post,o={goodsCategoryId:F.categoryId,goodsCoverImg:F.goodForm.goodsCoverImg,goodsDetailContent:C.txt.html(),goodsIntro:F.goodForm.goodsIntro,goodsName:F.goodForm.goodsName,goodsSellStatus:F.goodForm.goodsSellStatus,originalPrice:F.goodForm.originalPrice,sellingPrice:F.goodForm.sellingPrice,stockNum:F.goodForm.stockNum,tag:F.goodForm.tag};if(n(o.goodsIntro)||n(o.goodsName)||n(o.tag)||n(o.goodsDetailContent))return void b.error("不要输入表情包，再输入就打死你个龟孙儿~");if(o.goodsName.length>128)return void b.error("商品名称不能超过128个字符");if(o.goodsIntro.length>200)return void b.error("商品简介不能超过200个字符");if(o.tag.length>16)return void b.error("商品标签不能超过16个字符");console.log("params",o),v&&(o.goodsId=v,e=p.put),e("/goods",o).then((()=>{b.success(v?"修改成功":"添加成功"),r.push({path:"/good"})}))}}))},handleBeforeUpload:e=>{const o=e.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(o))return b.error("请上传 jpg、jpeg、png 格式的图片"),!1},handleUrlSuccess:e=>{F.goodForm.goodsCoverImg=e.data||""},editor:o,handleChangeCate:e=>{F.categoryId=e[2]||0}})}},j=_();v("data-v-5b264698");const U={class:"add"},q=P("上架"),O=P("下架"),L={key:1,class:"el-icon-plus avatar-uploader-icon"},$={ref:"editor"};F();const z=j(((e,o,a,l,r,t)=>{const d=C("el-cascader"),g=C("el-form-item"),s=C("el-input"),n=C("el-radio"),i=C("el-radio-group"),u=C("el-upload"),m=C("el-button"),c=C("el-form"),p=C("el-card");return N(),S("div",U,[k(p,{class:"add-container"},{default:j((()=>[k(c,{model:e.goodForm,rules:e.rules,ref:"goodRef","label-width":"100px",class:"goodForm"},{default:j((()=>[k(g,{required:"",label:"商品分类"},{default:j((()=>[k(d,{placeholder:e.defaultCate,style:{width:"300px"},props:e.category,onChange:l.handleChangeCate},null,8,["placeholder","props","onChange"])])),_:1}),k(g,{label:"商品名称",prop:"goodsName"},{default:j((()=>[k(s,{style:{width:"300px"},modelValue:e.goodForm.goodsName,"onUpdate:modelValue":o[1]||(o[1]=o=>e.goodForm.goodsName=o),placeholder:"请输入商品名称"},null,8,["modelValue"])])),_:1}),k(g,{label:"商品简介",prop:"goodsIntro"},{default:j((()=>[k(s,{style:{width:"300px"},type:"textarea",modelValue:e.goodForm.goodsIntro,"onUpdate:modelValue":o[2]||(o[2]=o=>e.goodForm.goodsIntro=o),placeholder:"请输入商品简介(100字)"},null,8,["modelValue"])])),_:1}),k(g,{label:"商品价格",prop:"originalPrice"},{default:j((()=>[k(s,{type:"number",min:"0",style:{width:"300px"},modelValue:e.goodForm.originalPrice,"onUpdate:modelValue":o[3]||(o[3]=o=>e.goodForm.originalPrice=o),placeholder:"请输入商品价格"},null,8,["modelValue"])])),_:1}),k(g,{label:"商品售卖价",prop:"sellingPrice"},{default:j((()=>[k(s,{type:"number",min:"0",style:{width:"300px"},modelValue:e.goodForm.sellingPrice,"onUpdate:modelValue":o[4]||(o[4]=o=>e.goodForm.sellingPrice=o),placeholder:"请输入商品售价"},null,8,["modelValue"])])),_:1}),k(g,{label:"商品库存",prop:"stockNum"},{default:j((()=>[k(s,{type:"number",min:"0",style:{width:"300px"},modelValue:e.goodForm.stockNum,"onUpdate:modelValue":o[5]||(o[5]=o=>e.goodForm.stockNum=o),placeholder:"请输入商品库存"},null,8,["modelValue"])])),_:1}),k(g,{label:"商品标签",prop:"tag"},{default:j((()=>[k(s,{style:{width:"300px"},modelValue:e.goodForm.tag,"onUpdate:modelValue":o[6]||(o[6]=o=>e.goodForm.tag=o),placeholder:"请输入商品小标签"},null,8,["modelValue"])])),_:1}),k(g,{label:"上架状态",prop:"goodsSellStatus"},{default:j((()=>[k(i,{modelValue:e.goodForm.goodsSellStatus,"onUpdate:modelValue":o[7]||(o[7]=o=>e.goodForm.goodsSellStatus=o)},{default:j((()=>[k(n,{label:"0"},{default:j((()=>[q])),_:1}),k(n,{label:"1"},{default:j((()=>[O])),_:1})])),_:1},8,["modelValue"])])),_:1}),k(g,{required:"",label:"商品主图",prop:"goodsCoverImg"},{default:j((()=>[k(u,{class:"avatar-uploader",action:e.uploadImgServer,accept:"jpg,jpeg,png",headers:{token:e.token},"show-file-list":!1,"before-upload":l.handleBeforeUpload,"on-success":l.handleUrlSuccess},{default:j((()=>[e.goodForm.goodsCoverImg?(N(),S("img",{key:0,style:{width:"100px",height:"100px",border:"1px solid #e9e9e9"},src:e.goodForm.goodsCoverImg,class:"avatar"},null,8,["src"])):(N(),S("i",L))])),_:1},8,["action","headers","before-upload","on-success"])])),_:1}),k(g,{label:"详情内容"},{default:j((()=>[k("div",$,null,512)])),_:1}),k(g,null,{default:j((()=>[k(m,{type:"primary",onClick:o[8]||(o[8]=e=>l.submitAdd())},{default:j((()=>[P(V(e.id?"立即修改":"立即创建"),1)])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})])}));w.render=z,w.__scopeId="data-v-5b264698";export default w;
