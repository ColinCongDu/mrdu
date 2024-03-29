import{_ as n,o as e,c as s,a}from"./app-cae166ec.js";const i={},l=a(`<h1 id="windows下vpn分割隧道的设置" tabindex="-1"><a class="header-anchor" href="#windows下vpn分割隧道的设置" aria-hidden="true">#</a> windows下VPN分割隧道的设置</h1><h2 id="通过命令行设置" tabindex="-1"><a class="header-anchor" href="#通过命令行设置" aria-hidden="true">#</a> 通过命令行设置</h2><ol><li><p>运行下面命令查看VPN连接。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">Get-VpnConnection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行后得到类似下面的配置信息。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>Name                  : SZ                    <span class="token comment"># VPN名称</span>
ServerAddress         : vpn<span class="token punctuation">.</span>ddns<span class="token punctuation">.</span>e-lead<span class="token punctuation">.</span>cn    <span class="token comment"># VPN服务器地址</span>
AllUserConnection     : False                 <span class="token comment"># 表示是否是所有用户都可以使用的VPN连接</span>
Guid                  : <span class="token punctuation">{</span>11EAFBAA-6D4E-4507-A94B-43E8B96D10A1<span class="token punctuation">}</span>
TunnelType            : Automatic             <span class="token comment"># VPN使用的隧道类型。</span>
AuthenticationMethod  : <span class="token punctuation">{</span>MsChapv2<span class="token punctuation">}</span>            <span class="token comment"># VPN连接所使用的身份验证方式</span>
EncryptionLevel       : Optional
L2tpIPsecAuth         : Certificate
UseWinlogonCredential : False
EapConfigXmlStream    :
ConnectionStatus      : Disconnected
RememberCredential    : True
SplitTunneling        : False
DnsSuffix             :
IdleDisconnectSeconds : 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ol>`,3),c=[l];function t(d,o){return e(),s("div",null,c)}const p=n(i,[["render",t],["__file","windows下VPN分割隧道的设置.html.vue"]]);export{p as default};
