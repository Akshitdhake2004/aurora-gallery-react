#!/bin/bash
cd /home/ec2-user/app
source /home/ec2-user/.nvm/nvm.sh
nvm use 22
npm install
npm run build
