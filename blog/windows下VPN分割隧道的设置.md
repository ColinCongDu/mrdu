# windows下VPN分割隧道的设置

## 通过命令行设置

1. 运行下面命令查看VPN连接。

   ```powershell
   Get-VpnConnection
   ```
    运行后得到类似下面的配置信息。
   ```powershell
   Name                  : SZ                    # VPN名称
   ServerAddress         : vpn.ddns.e-lead.cn    # VPN服务器地址
   AllUserConnection     : False                 # 表示是否是所有用户都可以使用的VPN连接
   Guid                  : {11EAFBAA-6D4E-4507-A94B-43E8B96D10A1}
   TunnelType            : Automatic             # VPN使用的隧道类型。
   AuthenticationMethod  : {MsChapv2}            # VPN连接所使用的身份验证方式
   EncryptionLevel       : Optional
   L2tpIPsecAuth         : Certificate
   UseWinlogonCredential : False
   EapConfigXmlStream    :
   ConnectionStatus      : Disconnected
   RememberCredential    : True
   SplitTunneling        : False
   DnsSuffix             :
   IdleDisconnectSeconds : 0
   ```

2. 