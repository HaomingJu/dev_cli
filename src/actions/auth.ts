import { Git } from 'git-interface'

const git_info = new Git({
    //dir: process.cwd()
    dir: "/root/tad_soc_release"
});

const questions = [
    {
        name: 'gitlab_address',
        type: 'input',
        message: '请输入自建gitlab服务地址(Enter your self-hosted gitlab address):'
    },
    {
        name: 'gitlab_username',
        type: 'input',
        message: '请输入gitlab用户名(Enter your gitlab username):'
    },
    {
        name: 'gitlab_password',
        type: 'password',
        message: '请输入gitlab密码(Enter your gitlab password):'
    }

]
