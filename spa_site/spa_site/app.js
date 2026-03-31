const pages = {

home: `
<section class="hero">
  <h1>一站式海外电商解决方案</h1>
  <p>覆盖 FB / Google / TikTok 全渠道营销</p>
</section>

<section class="section">
  <div class="container">
    <h2>最新海外电商资讯</h2>
    <div class="grid">

      <div class="card">
        <h3>2026年Facebook广告最新算法变化解析</h3>
      </div>

      <div class="card">
        <h3>TikTok电商爆发：东南亚市场增长趋势</h3>
      </div>

      <div class="card">
        <h3>Google广告投放成本下降策略</h3>
      </div>

    </div>
  </div>
</section>
`,

fb: `
<section class="hero">
  <h1>FB广告账户解决方案</h1>
  <p>个人户 / 企业户 / BM / 账单户</p>
</section>

<section class="section">
  <div class="container">
    <h2>热门账户</h2>
    <div class="grid">

      <div class="card">
        <h3 style="color:red">个人户 🔥</h3>
        <p>适合新手测试</p>
      </div>

      <div class="card">
        <h3 style="color:blue">企业投广户 🔥</h3>
        <p>稳定投放</p>
      </div>

      <div class="card">
        <h3 style="color:green">账单户 🔥</h3>
        <p>支持大额消耗</p>
      </div>

      <div class="card">
        <h3>BM账户</h3>
        <p>团队矩阵管理</p>
      </div>

    </div>
  </div>
</section>
`,

google: `
<section class="hero">
  <h1>Google广告解决方案</h1>
  <p>搜索 / 展示 / YouTube 全渠道</p>
</section>

<section class="section">
  <div class="container">
    <div class="grid">

      <div class="card">
        <h3 style="color:red">搜索广告 🔥</h3>
        <p>精准流量</p>
      </div>

      <div class="card">
        <h3 style="color:blue">展示广告 🔥</h3>
        <p>大规模曝光</p>
      </div>

      <div class="card">
        <h3 style="color:green">YouTube广告 🔥</h3>
        <p>视频转化强</p>
      </div>

    </div>
  </div>
</section>
`,

tiktok: `
<section class="hero">
  <h1>TikTok带货与广告</h1>
  <p>短视频 + 广告双引擎</p>
</section>

<section class="section">
  <div class="container">
    <div class="grid">

      <div class="card">
        <h3 style="color:red">广告账户 🔥</h3>
      </div>

      <div class="card">
        <h3 style="color:blue">带货运营 🔥</h3>
      </div>

      <div class="card">
        <h3 style="color:green">达人投放 🔥</h3>
      </div>

    </div>
  </div>
</section>
`

};

function navigate(page){
  history.pushState({}, '', page === 'home' ? '/' : '/' + page);
  loadPage(page);
  setActive(page);
}

function loadPage(page){
  document.getElementById('app').innerHTML = pages[page] || pages['home'];
}

function setActive(page){
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  const nav = document.getElementById('nav-' + page);
  if(nav) nav.classList.add('active');
}

const path = location.pathname.replace('/', '') || 'home';
loadPage(path);
setActive(path);

window.onpopstate = function(){
  const path = location.pathname.replace('/', '') || 'home';
  loadPage(path);
  setActive(path);
};