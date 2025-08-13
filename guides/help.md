---
title: 服务器命令详解
description: 构筑起服务器的基石。
---
# 服务器命令详解
> [!IMPORTANT]游玩须知！
> 请务必仔细阅读本节内容。
## 插件网页
- 登录插件wiki：https://github.com/kyngs/LibreLogin/wiki/

- EssentialsX官网“https://essentialsx.net/

- LuckPerms权限组官网：https://luckperms.net/

## librelogin插件命令

### 登录
`/login <password>`
### 注册
`/register <password> <passwordRepeat>`

### 正版用户自动登录(非正版别开)
(要在微软服务器验证正版)(非正版开了就去找op禁用玩家的自动登录)
（Mojang API 的速率限制为每 IP 每 10 分钟约 600 个请求。）
`/premium <password>` 启用自动登录
`/cracked` 禁用自动登录

### 更改密码
`/changepassword <oldPassword> <newPassword>`

### op为玩家启用自动登录
`/librelogin user premium <name>`
### op禁用玩家的自动登录
`/librelogin user cracked <name>`




### Staff-Commands（管理员命令）
#### Reload
`/librelogin reload <subcommand>` - 需要子命令 - Permission per subcommand（每个子命令的权限）

#### Configuration
`/librelogin reload configuration` - 重新加载配置 - librepremium.reload.configuration

#### Messsages（消息）

`/librelogin reload messages` - 重新加载消息 - librepremium.reload.messages

#### User（用户）
`/librelogin user <subcommand>` - 需要子命令 - Permission per subcommand（每个子命令的权限）

#### Info（信息）
`/librelogin user info <name>` - 显示有关用户的信息(UUID,高级UUID,加入日期和最后上线) - librepremium.user.info

#### Migrate（迁移）
`/librelogin user migrate <name> <newName>` - 将数据迁移到新名称,如果启用了自动登录,则禁用自动登录 - librepremium.user.migrate

#### Unregister（退出登录）
`/librelogin user unregister <name>` - 退出登录,如果有人再次使用此名称登录,他们将继承改账户之前的一切游戏数据 - librepremium.user.unregister

#### Delete（注销账户）
`/librelogin user delete <name>` - 一旦删除账户，其中的游戏数据将永远丢失 - librepremium.user.delete

#### Premium 为玩家启用自动登录

`/librelogin user premium <name>` - 为玩家启用自动登录 - librepremium.user.premium

#### Cracked 禁用玩家的自动登录

`/librelogin user cracked <name>` - 禁用自动登录 - librepremium.user.cracked

#### Register（注册）
`/librelogin user register <name> <password>` - 使用指定的名称和密码注册用户 - librepremium.user.register

#### Login（登录）
`/librelogin user login <name>` - 登录到提供的用户(假设用户在线和未经授权) - librepremium.user.login

#### 2FAOff
`/librelogin user 2faoff <name>` - 禁用用户的2FA - librepremium.user.2faoff

#### PassChange更改账户密码
`/librelogin user pass-change <name> <password>` - 更改用户密码 - librepremium.user.pass-change

#### Alts
`/librelogin user alts <name>` - 显示使用相同IP的其他帐户,请注意,在某些情况下,甚至整个服务器(由数百人组成)也可以具有相同的IP。 - librelogin.user.alts



## EssentialsX插件命令

### 设置家

`/sethome`

### tp家

`/home`

### 删除置家

`/delhome`

### 末影箱
`/enderchest`

### 回到先前的位置
`/back`



## TabTPS插件命令 

### 选项卡菜单tps

`/tabtps toggle tab`

### 操作栏tps
`/tabtps toggle actionbar`

### boss栏tps
`/tabtps toggle bossbar`

### tps信息
`/tickinfo`

### 内存池的信息
`/memory`

### Ping 命令
`/ping`
`/pingall`
