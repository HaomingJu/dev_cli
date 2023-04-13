import { Command } from 'commander';
import { Git } from 'git-interface'
import inquirer from 'inquirer';

const program = new Command();
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


program
    .name("gitlab-cli")
    .version("0.0.1")
    .description("Gitlab CLI for developers");

program
    .command("auth")
    .description('Authenticate with Gitlab')
    .action(async () => {
        console.log(">>> Authenticating with Gitlab << ");
        const git_remote_url = await git_info.getRemoteUrl('origin');
        console.log(git_remote_url);
    });

program.parse()
inquirer.prompt(questions).then(answers => {
    console.log(answers);
});

