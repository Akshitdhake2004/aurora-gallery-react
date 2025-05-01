#!/bin/bash
cd /home/ec2-user/app
source /home/ec2-user/.nvm/nvm.sh
nvm use 22
pm2 delete all || true
pm2 serve dist 8080 --spa --name aurora-gallery
