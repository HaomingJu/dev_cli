#!/usr/bin/env node

import { Command, Option} from 'commander';

const program = new Command();

program
    .name("gitlab-cli")
    .version("0.0.1")
    .description("Gitlab CLI for developers");

program
    .command("auth")
    .description('Authenticate with Gitlab')
    .action(async () => {
        console.log("TODO: Authenticating with Gitlab")
    });

program
    .command("fetch")
    .addOption(new Option('-t, --type <action_type>').choices(['issues', 'merge_requests', 'members', 'branchs']))
    .addOption(new Option('-r, --remote <type>').default('origin'))
    .requiredOption('type')
    .description('Fetch issues, merge requests, members, branchs')
    .action(async () => {
        console.log("TODO: fetch issues, merge requests, members, branchs")
    });

program
    .command("list")
    .addOption(new Option('-t, --type <action_type>').choices(['issues', 'merge_requests', 'members', 'branchs']))
    .requiredOption('type')
    .description('List issues, merge requests, members, branchs')
    .action(async () => {
        console.log("TODO: list issues, merge requests, members, branchs")
    });

program
    .command("create")
    .addOption(new Option('-t, --type <action_type>').choices(['issues', 'merge_requests']))
    .addOption(new Option('-r, --remote <type>').default('origin'))
    .requiredOption('type')
    .description('Create issues, merge requests')
    .action(async () => {
        console.log("TODO: create issues, merge requests, members, branchs")
    });


// main
// Usages:
    // gitlab-cli auth
    // gitlab-cli fetch -t issues
    // gitlab-cli list -t issues
    // gitlab-cli create -t issues
    // gitlab-cli create -t merge_requests
program.parse()
