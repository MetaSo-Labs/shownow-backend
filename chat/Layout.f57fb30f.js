var R=(t,x,i)=>new Promise((z,p)=>{var h=s=>{try{u(i.next(s))}catch(m){p(m)}},b=s=>{try{u(i.throw(s))}catch(m){p(m)}},u=s=>s.done?z(s.value):Promise.resolve(s.value).then(h,b);u((i=i.apply(t,x)).next())});import{d as S,f as T,g as D,h as K,i as V,j as l,k as C,l as M,c as H,b as g,m as e,a as n,t as A,F as E,p as G,n as J,q as N,s as _,o,_ as j,v,w as F,x as O,r as Q,K as X,y as L,__tla as Y}from"./index.02fc6cc9.js";import{L as Z,__tla as ee}from"./LoginedUserOperate.05020480.js";import{P as ae,__tla as te}from"./Publish.e9f8ac4b.js";import{__tla as se}from"./modals.ca72ea17.js";import{__tla as le}from"./index.7debbede.js";import{__tla as ne}from"./Sticker.a2ddf828.js";let U,ie=Promise.all([(()=>{try{return Y}catch(t){}})(),(()=>{try{return ee}catch(t){}})(),(()=>{try{return te}catch(t){}})(),(()=>{try{return se}catch(t){}})(),(()=>{try{return le}catch(t){}})(),(()=>{try{return ne}catch(t){}})()]).then(()=>R(void 0,null,function*(){const t=r=>(G("data-v-28a9f115"),r=r(),J(),r),x={key:0,class:"flex flex-align-center"},i=t(()=>n("div",{class:"flex1"},[e(` <PhoneMenuBtnVue>
        <div class="buzz-menu flex flex-align-center">
          <router-link
            :to="item.path"
            class="buzz-menu-item flex flex-align-center"
            v-for="(item, index) in menus"
            :key="index"
          >
            <span
              class="icon-warp flex flex-align-center flex-pack-center main-border small still !rounded-lg"
            >
              <Icon :name="item.icon" />
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </div>
      </PhoneMenuBtnVue> `)],-1)),z={class:"mt-20 flex text-center items-center justify-center flex-col"},p=t(()=>n("div",{class:"text-3xl break-all font-black"},"MetaSo Chat",-1)),h={class:"text-lg text-zinc-500 mt-3 break-all"},b={class:"text-xl mt-5 text-zinc-600 break-all"},u=S({__name:"BuzzWarp",props:{isHideHeader:{type:Boolean}},setup(r,{expose:w}){const I=N();T(),D(),K();const d=V(),c=l(!1),a=l(""),k=l(""),y=l(()=>{I.push({name:"buzz"})});d.t("Buzz.Timeline"),d.t("Buzz.Recommend");const W=l();l();const $=l();C(()=>{});function q(){y.value()}return M(()=>{}),_("isShowBuzzPublish",c),_("topic",a),_("repostTxId",k),_("publiseSuccessCallBack",y),w({publishTopic:a,publiseSuccessCallBack:y}),(P,f)=>(o(),H(E,null,[r.isHideHeader?e("v-if",!0):(o(),H("header",x,[i,g(Z)])),n("div",{class:"buzz-warp",ref_key:"BuuzWarpRef",ref:$,id:"buzz-warp"},[n("div",{class:"buzz-container",id:"buzz-container",ref_key:"BuzzContainerRef",ref:W},[n("div",z,[p,n("div",h,A(P.$t("chat.home.tip1")),1),n("div",b,A(P.$t("chat.home.tip2")),1)]),e(" <slot></slot> ")],512),e("   "),e(` <div class="fast-btn" ref="FastBtnRef">
      <a class="top" @click="scrollTop">
        <Icon name="buzz_icon_top" />
      </a>
      <a class="main-border primary" @click="toPublish">
        <Icon name="buzz_icon_post" />
      </a>
    </div> `),e("   ")],512),e(" publish "),g(ae,{modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=B=>c.value=B),topic:a.value,"repost-tx-id":k.value,"onUpdate:repostTxId":f[1]||(f[1]=B=>k.value=B),onSuccess:q},null,8,["modelValue","topic","repost-tx-id"])],64))}}),s=j(u,[["__scopeId","data-v-28a9f115"]]),m=S({__name:"Layout",setup(r){return l(),l(),V(),O(),T(),C(()=>{}),M(()=>{}),(w,I)=>{const d=Q("RouterView");return o(),v(s,null,{default:F(()=>[e(" menu "),e(` <div class="buzz-menu-warp" ref="MenuRef">
      <div class="buzz-menu">
        <router-link
          :to="item.path"
          @click.native="refreshData(item.path)"
          class="buzz-menu-item flex flex-align-center"
          v-for="(item, index) in menus"
          :key="index"
        >
          <span class="icon-warp flex flex-align-center flex-pack-center">
            <Icon :name="item.icon" />
          </span>
          <span class="name">{{ item.name() }}</span>
        </router-link>
      </div>
    </div> `),e(` <div class="menu-select-wrap" ref="SelectRef">
      <div class="menu-select">
     
        <div
          :class="[
            'menu-select-item',
            'flex',
            'flex-align-center',
            route.path == item.path ? 'isActive' : '',
          ]"
          v-for="(item, index) in newMenu"
          :key="index"
          @click="toBuzzTag(item.path)"
        >
          <span class="name">{{ item.name() }}</span>
        </div>
      </div>
    </div> `),e(" router view "),g(d,null,{default:F(({Component:c,route:a})=>[(o(),v(X,null,[a.meta&&a.meta.keepAlive?(o(),v(L(c),{key:a.fullPath})):e("v-if",!0)],1024)),!a.meta||a.meta&&!a.meta.keepAlive?(o(),v(L(c),{key:a.fullPath})):e("v-if",!0)]),_:1})]),_:1})}}});U=j(m,[["__scopeId","data-v-2ab4160d"]])}));export{ie as __tla,U as default};
