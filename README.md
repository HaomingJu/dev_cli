# 输入gitlab地址, 输入账号密码, 生成秘钥
gitlab-cli auth

# 加载缓存数据系列
gitlab-cli fetch members
gitlab-cli fetch issues
gitlab-cli fetch merge_requests

# 创建系列
gitlab-cli create merge_requests
gitlab-cli create issues

# 列出系列
gitlab-cli list members
gitlab-cli list issues
gitlab-cli list merge_requests

# 中间文件结构
.git/cli
.git/cli/members
.git/cli/issues
.git/cli/merge_requests


编译: `yarn tsc`

运行: `node bin`
